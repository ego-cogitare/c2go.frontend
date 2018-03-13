import React from 'react';
import { dispatch } from '../../../core/helpers/EventEmitter';

export default class RegSwitchDialog extends React.Component {
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
          <a href="#" class="btn email">
            Mit E-Mail-Adresse
          </a>
        </div>
        <div class="hr" />
        <div class="already-registered"><span>Hast du schon ein Konto?</span> <a href="#" class="text-bold">Einloggen</a></div>
      </div>
    );
  }
}
