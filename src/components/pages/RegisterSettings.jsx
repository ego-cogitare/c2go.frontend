import React from 'react';
import { Link, browserHistory } from 'react-router';
import Partials from './partials';
import { progress } from '../../actions';

export default class RegisterSettings extends React.Component {

  constructor(props) {
    super(props);
  }

  next(e) {
    e.preventDefault();

    progress({ progress: 5 }, () => browserHistory.push('/register-interests'));
  }

  render() {
    return (
      <div class="register-settings wrapper-small text-center">
        <div class="heading-2">
          Profil einrichten
        </div>

        <div class="section-title">Welche Behinderung hast du?</div>
        <div class="settings-section">
          <div class="setting">
            <input type="checkbox" id="setting-1" />
            <label for="setting-1">Cleaning And Organizing Your Computer</label>
          </div>
          <div class="setting">
            <input type="checkbox" id="setting-2" />
            <label for="setting-2">Why Use External It Support</label>
          </div>
          <div class="setting">
            <input type="checkbox" id="setting-3" />
            <label for="setting-3">Simple Scratch Cooking</label>
          </div>
        </div>

        <div class="section-title">Welche Unterstützung benötigst du?</div>
        <div class="settings-section">
          <div class="setting">
            <input type="checkbox" id="setting-4" />
            <label for="setting-4">Cleaning And Organizing Your Computer</label>
          </div>
          <div class="setting">
            <input type="checkbox" id="setting-5" />
            <label for="setting-5">Why Use External It Support</label>
          </div>
          <div class="setting">
            <input type="checkbox" id="setting-6" />
            <label for="setting-6">Simple Scratch Cooking</label>
          </div>
        </div>

        <div class="notice-title">Anmerkung (Optional)</div>
        <div class="notice" contentEditable="true" maxLength="120">
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nam gravida venenatis
          accumsan. In mi massa, tempus
        </div>
        <div class="chars-left">110/120</div>

        <div class="buttons">
          <a href="#" class="violet-button">Weiter</a>
          <a href="#" class="skip" onClick={this.next.bind(this)}>Überspringen</a>
        </div>
      </div>
    );
  }
}
