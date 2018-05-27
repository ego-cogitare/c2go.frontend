import React from 'react';
import { Link } from 'react-router';
import SVG from '../svg';
import { categories } from '../../../actions';

export default class Location extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      locationFrom: '',
      locationTo: '',
      location: {},
      changes: 0,
      category: this.props.params.category,
      subcategory: this.props.params.subcategory,
    };
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

  componentDidMount() {
    const context = this;

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

  render() {
    return (
      <div class="wrapper-small text-center">
        <div class="heading-2">
          Event erstellen – Schritt 2
        </div>
        <p class="text">
          Bitte gib hier weitere Informationen zu deiner Reise an, um deine Chance auf einen Companion zu erhöhen
        </p>
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
          <Link to={`/event-add/${this.props.params.category}/${this.props.params.subcategory}/date`} class="button violet-button">Weiter</Link>
          <a href="#" class="button default-button">Überspringen</a>
        </div>
      </div>
    );
  }
}
