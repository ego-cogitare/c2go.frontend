import React from 'react';
import { Link } from 'react-router';
import { dispatch } from '../../../core/helpers/EventEmitter';

export default class LoginSwitchDialog extends React.Component {
  render() {
    return (
      <div class="registration-switch">
        <div class="register-options">
          <a href="#" class="btn facebook">
            Mit Facebook anmelden
          </a>
          <a href="#" class="btn google">
            Mit Google anmelden
          </a>
          <a href="#login/email" class="btn email">Mit E-Mail-Adresse</a>
        </div>
      </div>
    );
  }
}
