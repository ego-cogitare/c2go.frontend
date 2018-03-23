import React from 'react';
import { Link } from 'react-router';
import Partials from './partials';

export default class RegisterPhoto extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="register-avatar wrapper-small text-center">
        <div class="heading-2">
          Willkommen
        </div>
        <p class="text">
          Lade ein Profilbild hoch um deine Chancen auf ein erfolgreiches Match zu erhöhen
        </p>
        <div class="avatar">
          <img src="img/icons/default-avatar.svg" alt="Avatar" />
        </div>
        <div class="buttons">
          <a href="#" class="violet-button">Profilbild hochladen</a>
          <p class="text">Oder</p>
          <a href="#" class="violet-button-inverse">Mit Facebook verknüpfen</a>
          <a href="#" class="skip">Überspringen</a>
        </div>
      </div>
    );
  }
}
