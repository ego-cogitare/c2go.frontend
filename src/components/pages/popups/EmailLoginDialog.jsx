import React from 'react';
import { dispatch } from '../../../core/helpers/EventEmitter';

export default class EmailLoginDialog extends React.Component {
  render() {
    return (
      <div class="registration-email ">
        <div class="register-form">
          <form action="" class="">
            <div class="clear">
              <div class="column left">
                <div class="form-controll">
                  <input type="text" class="input" name="email" defaultValue="" placeholder="E-Mail-Adresse" />
                </div>
              </div>
              <div class="column left">
                <div class="form-controll">
                  <input type="password" class="input" name="password" defaultValue="" placeholder="Passwort" />
                </div>
              </div>
            </div>
            <div class="clear email-subscribe">
              <div class="left">
                <input type="checkbox" id="remember-me" name="" />
                <label for="remember-me">
                  <span>Denk an mich</span>
                </label>
              </div>
              <div class="right">
                <button type="submit" class="btn" name="">Einloggen</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
