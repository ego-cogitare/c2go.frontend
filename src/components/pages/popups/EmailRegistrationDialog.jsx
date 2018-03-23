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

  render() {
    return (
      <div class="registration-email">
        <div class="register-form">
          <form action="" method="post" onSubmit={this.doRegister.bind(this)}>
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
                  <input type="text" class="input" name="birth_date" value={this.state.birth_date} onChange={this.updateField.bind(this)} placeholder="Geburtstag" />
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
                  <input type="text" class="input" name="home_address" value={this.state.home_address} onChange={this.updateField.bind(this)} placeholder="Wohnort" />
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
                <button type="submit" class="violet-button">Anfragen</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
