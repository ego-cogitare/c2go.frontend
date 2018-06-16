import React from 'react';
import { Link, browserHistory } from 'react-router';
import Partials from '../partials';
import { progress } from '../../../actions';

export default class Settings extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      settings: {
        settings: [],
        annotation: ''
      }
    };
  }

  next(e) {
    e.preventDefault();
    progress(
      { progress: 5,
        section: 'profile_settings',
        value: JSON.stringify(this.state.settings) },
      () => browserHistory.push('/register/interests')
    );
  }

  skip(e) {
    e.preventDefault();
    progress(
      { progress: 5 },
      () => browserHistory.push('/register/interests')
    );
  }

  updateOption(id, e) {
    if (e.target.checked) {
      this.state.settings.settings.indexOf(id) === -1 && this.state.settings.settings.push(id);
    }
    else {
      Object.assign(this.state.settings, {
        settings: this.state.settings.settings.filter((itemId) => itemId !== id) });
    }
    this.setState({ settings: this.state.settings });
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
            <input type="checkbox" id="setting-1" onChange={this.updateOption.bind(this, 1)} />
            <label for="setting-1">Cleaning And Organizing Your Computer</label>
          </div>
          <div class="setting">
            <input type="checkbox" id="setting-2" onChange={this.updateOption.bind(this, 2)} />
            <label for="setting-2">Why Use External It Support</label>
          </div>
          <div class="setting">
            <input type="checkbox" id="setting-3" onChange={this.updateOption.bind(this, 3)} />
            <label for="setting-3">Simple Scratch Cooking</label>
          </div>
        </div>

        <div class="section-title">Welche Unterstützung benötigst du?</div>
        <div class="settings-section">
          <div class="setting">
            <input type="checkbox" id="setting-4" onChange={this.updateOption.bind(this, 4)} />
            <label for="setting-4">Cleaning And Organizing Your Computer</label>
          </div>
          <div class="setting">
            <input type="checkbox" id="setting-5" onChange={this.updateOption.bind(this, 5)} />
            <label for="setting-5">Why Use External It Support</label>
          </div>
          <div class="setting">
            <input type="checkbox" id="setting-6" onChange={this.updateOption.bind(this, 6)} />
            <label for="setting-6">Simple Scratch Cooking</label>
          </div>
        </div>
        <Partials.Textarea
          label="Anmerkung (Optional)"
          placeholder="Type some text here"
          maxLength="120"
          onChange={(text) => {
            Object.assign(this.state.settings, { annotation: text });
            this.setState({ settings: this.state.settings });
          }}
        />
        <div class="buttons">
          <a href="#" class="violet-button" onClick={this.next.bind(this)}>Weiter</a>
          <a href="#" class="skip" onClick={this.skip.bind(this)}>Überspringen</a>
        </div>
      </div>
    );
  }
}
