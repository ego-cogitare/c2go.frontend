import React from 'react';
import { Link } from 'react-router';
import Partials from './partials';
import User from '../../core/helpers/User';

export default class EmailConfirmation extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="register-avatar wrapper-small text-center">
        <div class="heading-2">
          Fast geschafft!
        </div>
        <p class="text">
          Wir haben eine Bestätigungsmail an  {User.data.email} geschickt. Bitte klicke
          den Link um deine E-Mail-Adresse zu bestätigen.
        </p>
      </div>
    );
  }
}
