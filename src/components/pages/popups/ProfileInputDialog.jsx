import React from 'react';
import { Link } from 'react-router';

export default class ProfileInputDialog extends React.Component {

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div class="popup-body">
        <div class="text">
          Bitte gebe ein gültige E-Mail-Adresse ein. Im nächsten Schritt solltest du diese bestätigen.
        </div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div class="form-controll">
            <input type="text" class="input disabled" defaultValue="ego.cogitare@gmail.com" disabled />
          </div>
          <div class="form-controll">
            <input type="text" class="input" name="email" defaultValue="" placeholder="Neue E-Mail-Adresse" autoFocus />
          </div>
          <div class="buttons">
            <a href="#" class="violet-button">Ändern</a>
            <a href="#" class="skip">Abbrechen</a>
          </div>
        </form>
      </div>
    );
  }
}
