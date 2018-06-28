import React from 'react';
import { Link, browserHistory } from 'react-router';
import moment from 'moment';
import classNames from 'classnames';
import SVG from '../svg';
import { categories, eventAddDatePlace } from '../../../actions';
import queryString from 'query-string';

export default class DatePlace extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      timestamp: 0,
      event_dispatch: '',
      event_dispatch_latlng: {},
      event_destination: '',
      event_destination_latlng: {},
      changes: 0,
      category_id: null,

      errors: {},
      nextStep: '/event-add/tickets-bought',
      journeyCategories: [18]
    };
  }

  componentDidMount() {
    const context = this;
    const $date = this.refs.date;
    const $time = $(this.refs.time);
    if ($date)
    {
      const calendar = rome(
        $date, {
        time: false ,
        inputFormat: 'DD.MM.YYYY',
        weekdayFormat: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        dayFormat: 'D',
        appendTo: $date.parentNode
      })
      .on('hide', function() {
        const date = $($date).val() + ' ' + $time.val();
        context.setState({
          timestamp: moment(date, 'DD.MM.YYYY HH : mm').unix()
        });
      });
    }

    $time
      .on('change', function() {
        const date = $($date).val() + ' ' + $(this).val();
        context.setState({
          timestamp: moment(date, 'DD.MM.YYYY HH : mm').unix()
        });
      })
      .wickedpicker({
        twentyFour: true,
        title: 'Uhrzeit',
        minutesInterval: 1,
        beforeShow: function($input, picker) {
          $(picker).width($input.width() + 1);
        }
      });


    const $eventDispatch = this.refs.event_dispatch;
    if ($eventDispatch)
    {
      const eventDispatch = new google.maps.places.Autocomplete($eventDispatch, config.autocomplete)
        .addListener('place_changed', function() {
          const place = this.getPlace();
          $eventDispatch.blur();
          context.setState({
            event_dispatch_latlng: {
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng()
            },
            event_dispatch: place.vicinity
          });
        });
    }

    const $eventDestination = this.refs.event_destination;
    if ($eventDestination)
    {
      const eventDestination = new google.maps.places.Autocomplete($eventDestination, config.autocomplete)
        .addListener('place_changed', function() {
          const place = this.getPlace();
          $eventDestination.blur();
          context.setState({
            event_destination_latlng: {
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng()
            },
            event_destination: place.vicinity
          });
        });
    }

    // const $eventMeetPlace = this.refs.event_meet_place;
    // if ($eventMeetPlace)
    // {
    //   const eventMeetPlace = new google.maps.places.Autocomplete($eventMeetPlace, config.autocomplete)
    //     .addListener('place_changed', function() {
    //       const place = this.getPlace();
    //       $eventMeetPlace.blur();
    //       context.setState({
    //         event_meet_place_latlng: {
    //           lat: place.geometry.location.lat(),
    //           lng: place.geometry.location.lng()
    //         },
    //         event_meet_place: place.vicinity
    //       });
    //     });
    // }

    /** @var int category */
    const { category } = queryString.parse(location.search);
    this.setState({ category_id: Number(category) });
  }

  incChanges() {
    this.setState({ changes: ++this.state.changes });
  }

  decChanges() {
    if (this.state.changes < 1) {
      return false;
    }
    this.setState({ changes: --this.state.changes });
  }

  onNextStep(e) {
    e.preventDefault();

    /** @var Object event */
    const event = JSON.parse(localStorage.getItem('event') || '{}');

    eventAddDatePlace(
      this.state,
      ({ data }) => {
        browserHistory.push(this.state.nextStep);
        localStorage.setItem('event', JSON.stringify(Object.assign(event, data)));
      },
      (e) => this.setState({ errors: e.responseJSON.errors })
    );
  }

  render() {
    return (
      <div class="wrapper-small text-center">
        <div class="heading-2">
          Event erstellen – Schritt 3
        </div>
        <p class="text">
          Bitte gib hier weitere Informationen zu deiner Reise an, um deine Chance auf einen Companion zu erhöhen
        </p>
        <div class="form clear">
          <div class="form-controll left w49p relative">
            <input type="text" class="input" ref="date" name="date" defaultValue={moment().format('DD.MM.Y')} placeholder="Datum" />
          </div>
          <div class="form-controll right w49p relative">
            <input type="text" class="input" ref="time" name="time" placeholder="Uhrzeit" />
          </div>
        </div>

        <form action={this.state.nextStep} onSubmit={this.onNextStep.bind(this)}>
          <div class="form">
            {/* Event dispatch location - for journeys only */}
            <div class={classNames('form-controll', { hidden: this.state.journeyCategories.indexOf(this.state.category_id) === -1 })}>
              <input
                type="text"
                class="input"
                ref="event_dispatch"
                name="event_dispatch"
                placeholder="Start"
                onChange={(e) => this.setState({
                  event_dispatch: e.target.value,
                  event_dispatch_latlng: {}
                })}
              />
              <small class="color-red left">{(this.state.errors.event_dispatch || []).join()}</small>
            </div>
            {/*
            <div class="form-controll relative">
              <input type="text" class="input" name="transfers" value={this.state.changes} placeholder="0" />
              <div class="counter clear">
                <div class="circle-button left" onClick={this.decChanges.bind(this)}>
                  <span>-</span>
                </div>
                <div class="circle-button left" onClick={this.incChanges.bind(this)}>
                  <span>+</span>
                </div>
              </div>
            </div>
            */}

            {/* Event place - destination point where event will take place */}
            <div class="form-controll">
              <input
                type="text"
                class="input"
                ref="event_destination"
                name="event_destination"
                placeholder="Ziel"
                onChange={(e) => this.setState({
                  event_destination: e.target.value,
                  event_destination_latlng: {}
                })}
              />
              <small class="color-red left">{(this.state.errors.event_destination || []).join()}</small>
            </div>
          </div>

          <div class="buttons">
            <button type="submit" className="button violet-button">Weiter</button>
            <a href="#" class="button default-button">Überspringen</a>
          </div>
        </form>
      </div>
    );
  }
}
