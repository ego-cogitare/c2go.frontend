import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import SVG from '../svg';
import { categories } from '../../../actions';

export default class DatePlace extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      date: moment().format('DD.MM.Y'),
      time: '',
      timestamp: 0,

      locationFrom: '',
      locationTo: '',
      location: {},
      changes: 0,
      category: this.props.params.category,
      subcategory: this.props.params.subcategory,
    };
  }

  componentDidMount() {
    const context = this;
    const $date = this.refs.date;
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
        context.setState({
          date: this.getDateString('DD.MM.YYYY')
        });
      });
    }

    $(this.refs.time)
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
      const context = this;
      const locationFrom = new google.maps.places.Autocomplete($locationFrom, config.autocomplete)
        .addListener('place_changed', function() {
          const place = this.getPlace();
          $locationFrom.blur();
          context.setState({
            location: {
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
      const context = this;
      const locationTo = new google.maps.places.Autocomplete($locationTo, config.autocomplete)
        .addListener('place_changed', function() {
          const place = this.getPlace();
          $locationTo.blur();
          context.setState({
            location: {
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng()
            },
            locationTo: place.vicinity
          });
        });
    }
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
            <input type="text" class="input" ref="date" name="date" defaultValue={this.state.date} placeholder="Datum" />
          </div>
          <div class="form-controll right w49p relative">
            <input type="text" class="input" ref="time" name="time" placeholder="Uhrzeit" />
          </div>
        </div>

        { this.state.category === '4' &&
          <div class="form">
            <div class="form-controll">
              <input type="text" class="input" ref="location_from" name="departure" placeholder="Start" />
            </div>
            <div class="form-controll">
              <input type="text" class="input" ref="location_to" name="destination" placeholder="Ziel" />
            </div>
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
          </div>
        }
        { this.state.category !== '4' &&
          <div class="form">
            <div class="form-controll">
              <input type="text" class="input" ref="location_to" name="destination" placeholder="Lage" />
            </div>
          </div>
        }

        <div class="buttons">
          <Link to={`/event-add/tickets-bought`} className="button violet-button">Weiter</Link>
          <a href="#" class="button default-button">Überspringen</a>
        </div>
      </div>
    );
  }
}
