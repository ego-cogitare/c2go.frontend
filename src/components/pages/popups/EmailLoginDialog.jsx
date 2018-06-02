import React from 'react';
import { browserHistory } from 'react-router';
import { dispatch } from '../../../core/helpers/EventEmitter';
import { emailLogin } from '../../../core/middleware/Auth';

export default class EmailLoginDialog extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: ''
    };
  }

  updateField(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  doLogin(e) {
    e.preventDefault();

    emailLogin(this.state, null, (error) => this.setState({ error: 'Email or password is incorrect.' }));
  }

  render() {
    return (
      <div class="registration-email ">
        <div class="register-form">
          <form action="" method="post" onSubmit={this.doLogin.bind(this)}>
            <div class="clear">
              <div class="column left">
                <div class="form-controll">
                  <input type="text" class="input" name="email" value={this.state.email} onChange={this.updateField.bind(this)} placeholder="E-Mail-Adresse" />
                  <small class="color-red">{this.state.error}</small>
                </div>
              </div>
              <div class="column left">
                <div class="form-controll">
                  <input type="password" class="input" name="password" value={this.state.password} onChange={this.updateField.bind(this)} placeholder="Passwort" />
                </div>
              </div>
            </div>
            <div class="clear email-subscribe">
              <div class="left">
                <input type="checkbox" id="remember-me" />
                <label for="remember-me">
                  <span>Denk an mich</span>
                </label>
              </div>
              <div class="right">
                <button type="submit" class="violet-button" name="">Einloggen</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
