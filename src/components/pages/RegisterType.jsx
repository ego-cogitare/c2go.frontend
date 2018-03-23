import React from 'react';
import { Link } from 'react-router';
import Partials from './partials';

export default class RegisterType extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="register-profile-type wrapper-small text-center">
        <div class="heading-2">
          Bist du berechtigt eine Begleitperson mitzunehmen?
        </div>
        <p class="text">
          Wenn du im Besitz eines Schwerbehindertenausweises mit dem Merkzeichen "B" bist,
          darfst du eine Begleitperson kostenlos oder ermäßigt auf viele Reisen und Events mitnehmen
        </p>
        <div class="buttons">
          <a href="#" class="violet-button">Ja</a>
          <a href="#" class="violet-button">Nein</a>
        </div>
      </div>
    );
  }
}
