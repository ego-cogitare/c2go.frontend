import React from 'react';
import { dispatch } from '../../../core/helpers/EventEmitter';

export default class EmailRegistrationDialog extends React.Component {
  render() {
    return (
      <div class="registration-email">
        <div class="register-form">
          <form action="" class="">
            <div class="clear">
              <div class="column left">
                <div class="form-controll">
                  <input type="text" class="input" name="firstname" value="" placeholder="Vorname" />
                </div>
                <div class="form-controll">
                  <input type="text" class="input" name="email" value="" placeholder="E-Mail-Adresse" />
                </div>
                <div class="form-controll">
                </div>
                <div class="form-controll">
                  <input type="text" class="input" name="birthdate" value="" placeholder="Geburtstag" />
                </div>
              </div>
              <div class="column left">
                <div class="form-controll">
                  <input type="text" class="input" name="lastname" value="" placeholder="Nachname" />
                </div>
                <div class="form-controll">
                  <input type="password" class="input" name="password1" value="" placeholder="Passwort" />
                </div>
                <div class="form-controll">
                  <input type="password" class="input" name="password2" value="" placeholder="Passwort wiederholen" />
                </div>
                <div class="form-controll">
                  <input type="text" class="input" name="homeaddress" value="" placeholder="Wohnort" />
                </div>
              </div>
            </div>
            <div class="clear email-subscribe">
              <div class="left">
                <input type="checkbox" id="email-subscribe" name="" />
                <label for="email-subscribe">
                  <span>Newsletter und E-Mails abonnieren</span>
                </label>
              </div>
              <div class="right">
                <button type="submit" class="btn" name="">Registrieren</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
