import React from 'react';
import { Link, browserHistory } from 'react-router';
import moment from 'moment';
import SVG from '../svg';
import { categories, eventAddDatePlace } from '../../../actions';
import queryString from 'query-string';

export default class DatePlace extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      // date: moment().format('DD.MM.Y'),
      timestamp: 0,

      locationFrom: '',
      locationFromLatLng: {},
      locationTo: '',
      locationToLatLng: {},
      locationMeetPlace: '',
      locationMeetPlaceLatLng: {},
      changes: 0,
      category: null,

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


    const $locationFrom = this.refs.location_from;
    if ($locationFrom)
    {
      const locationFrom = new google.maps.places.Autocomplete($locationFrom, config.autocomplete)
        .addListener('place_changed', function() {
          const place = this.getPlace();
          $locationFrom.blur();
          context.setState({
            locationFromLatLng: {
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng()
            },
            locationFrom: place.vicinity
          });
        });
    }

    const $locationTo = this.refs.location_to;
    if ($locationTo)
    {
      const locationTo = new google.maps.places.Autocomplete($locationTo, config.autocomplete)
        .addListener('place_changed', function() {
          const place = this.getPlace();
          $locationTo.blur();
          context.setState({
            locationToLatLng: {
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng()
            },
            locationTo: place.vicinity
          });
        });
    }

    const $meetPlace = this.refs.meet_place;
    if ($meetPlace)
    {
      const meetPlace = new google.maps.places.Autocomplete($meetPlace, config.autocomplete)
        .addListener('place_changed', function() {
          const place = this.getPlace();
          $meetPlace.blur();
          context.setState({
            locationMeetPlaceLatLng: {
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng()
            },
            locationMeetPlace: place.vicinity
          });
        });
    }

    /** @var int category */
    const { category } = queryString.parse(location.search);
    this.setState({ category: Number(category) });
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

    console.log(this.state);

    // eventAddGeneral(
    //   $(e.target).serialize(),
    //   (r) => browserHistory.push(this.state.nextStep),
    //   (e) => this.setState({ errors: e.responseJSON.errors })
    // );
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
            <div class="form-controll">
              <input
                type="text"
                class="input"
                ref="location_from"
                name="location_from"
                placeholder="Start"
                onChange={(e) => this.setState({
                  locationFrom: e.target.value,
                  locationFromLatLng: {}
                })}
              />
            </div>
            { this.state.journeyCategories.indexOf(this.state.category) > -1 &&
              <div class="form-controll">
                <input
                  type="text"
                  class="input"
                  ref="location_to"
                  name="location_to"
                  placeholder="Ziel"
                  onChange={(e) => this.setState({
                    locationTo: e.target.value,
                    locationToLatLng: {}
                  })}
                />
              </div>
              /*
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
              */
            }
            <div class="form-controll">
              <input
                type="text"
                class="input"
                ref="meet_place"
                name="meet_place"
                placeholder="Lage"
                onChange={(e) => this.setState({
                  locationMeetPlace: e.target.value,
                  locationMeetPlaceLatLng: {}
                })}
              />
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
