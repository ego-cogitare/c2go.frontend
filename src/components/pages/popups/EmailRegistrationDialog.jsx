import React from 'react';
import { dispatch } from '../../../core/helpers/EventEmitter';
import { register, userValidation } from '../../../actions';

export default class EmailRegistrationDialog extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password_confirmation: '',
      birth_date: '',
      home_address: '',
      location: {},
      is_subscribed: 0,
      errors: {}
    };
  }

  updateField(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  doRegister(e) {
    e.preventDefault();

    userValidation(
      this.state,
      (r) => {
        // Store validated user information
        localStorage.setItem('regData', JSON.stringify(Object.assign({}, this.state, { method: 'email' })));

        // Show popup with terms of application use
        location.hash = 'register/terms-of-use';
      },
      (e) => {
        const errors = {};
        Object.keys(e.responseJSON.errors).forEach((field) => {
          const errorMsg = e.responseJSON.errors[field].pop();
          if (field === 'password' && errorMsg.match(/confirmation/)) {
            field = 'password_confirmation';
          }
          errors[field] = errorMsg;
        });
        this.setState({ errors });
      }
    );
  }

  componentDidMount() {
    const context = this;

    const $homeAddress = this.refs.home_address;
    if ($homeAddress)
    {
      const context = this;
      const homeAddress = new google.maps.places.Autocomplete($homeAddress, config.autocomplete)
        .addListener('place_changed', function() {
          const place = this.getPlace();
          $homeAddress.blur();
          context.setState({
            location: {
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng()
            },
            home_address: place.vicinity
          });
        });
    }

    const $date = this.refs.birth_date;
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
          birth_date: this.getDateString('DD.MM.YYYY')
        });
      });
    }
  }

  render() {
    return (
      <div class="registration-email">
        <div class="register-form">
            <div class="clear">
              <div class="column left">
                <div class="form-controll">
                  <input type="text" class="input" name="first_name" value={this.state.first_name} onChange={this.updateField.bind(this)} placeholder="Vorname" />
                  <small class="color-red">{this.state.errors.first_name}</small>
                </div>
                <div class="form-controll">
                  <input type="text" class="input" name="email" value={this.state.email} onChange={this.updateField.bind(this)} placeholder="E-Mail-Adresse" />
                  <small class="color-red">{this.state.errors.email}</small>
                </div>
                <div class="form-controll" />
                <div class="form-controll">
                  <input type="text" class="input" ref="birth_date" name="birth_date" value={this.state.birth_date || ''} onChange={this.updateField.bind(this)} placeholder="Geburtstag" />
                  <small class="color-red">{this.state.errors.birth_date}</small>
                </div>
              </div>
              <div class="column left">
                <div class="form-controll">
                  <input type="text" class="input" name="last_name" value={this.state.last_name} onChange={this.updateField.bind(this)} placeholder="Nachname" />
                  <small class="color-red">{this.state.errors.last_name}</small>
                </div>
                <div class="form-controll">
                  <input type="password" class="input" name="password" value={this.state.password} onChange={this.updateField.bind(this)} placeholder="Passwort" />
                  <small class="color-red">{this.state.errors.password}</small>
                </div>
                <div class="form-controll">
                  <input type="password" class="input" name="password_confirmation" value={this.state.password_confirmation} onChange={this.updateField.bind(this)} placeholder="Passwort wiederholen" />
                  <small class="color-red">{this.state.errors.password_confirmation}</small>
                </div>
                <div class="form-controll">
                  <input type="text" class="input" ref="home_address" name="home_address" placeholder="Wohnort" />
                  <small class="color-red">{this.state.errors.home_address}</small>
                </div>
              </div>
            </div>
            <div class="clear email-subscribe">
              <div class="left">
                <input type="checkbox" id="email-subscribe" onChange={(e) => this.setState({ is_subscribed: Number(e.target.checked) })} />
                <label for="email-subscribe">
                  <span>Newsletter und E-Mails abonnieren</span>
                </label>
              </div>
              <div class="right">
                <button type="button" class="violet-button" onClick={this.doRegister.bind(this)}>Anfragen</button>
              </div>
            </div>
        </div>
      </div>
    );
  }
}
