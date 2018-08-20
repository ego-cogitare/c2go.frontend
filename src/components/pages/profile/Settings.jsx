import React from 'react';
import { Link } from 'react-router';
import Partials from '../partials';
import Popups from '../popups';
import { dispatch } from '../../../core/helpers/EventEmitter';
import classNames from 'classnames';
import User from '../../../core/helpers/User';

export default class ProfileSettings extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activateButtons: false,
      errors: {},
      first_name: User.data.first_name,
      last_name: User.data.last_name,
      birth_date: User.data.birth_date,
      home_address: User.data.home_address,
      postcode: User.settings.profile_home_postcode,
    };
  }

  initDialogs() {
    this.inputDialog = <Popups.ProfileInputDialog className="popup-sm adjustments-002" />;
  }

  popup() {
    dispatch('popup:show', {
      title: 'E-Mail-Adresse ändern',
      body: this.inputDialog
    });
  }

  dataChangeDialog(e) {
    e.preventDefault();
  }

  render() {
    this.initDialogs();

    return (
      <div class="profile-settings wrapper clear">
        <div class="sidebar">
          <Partials.SidebarMenu />
        </div>
        <div class="content">
          <div class="settings-section">
            <div class="heading-2">
              Persönliche Daten ändern
            </div>
          </div>

          <div class="settings-section">
            <form action="">
              <div class="form-row clear">
                <div class="form-controll left">
                  <input type="text" class="input" value={this.state.first_name} />
                </div>
                <div class="form-controll right">
                  <input type="text" class="input" value={this.state.last_name} />
                </div>
              </div>
              <div class="form-row clear">
                <div class="form-controll left">
                  <input type="text" class="input" value={this.state.birth_date} />
                </div>
                <div class="form-controll right">
                  <input type="text" class="input" value={this.state.home_address} />
                </div>
              </div>
              <div class="form-row clear">
                <div class="form-controll left">
                  <input type="text" class="input" value={this.state.postcode} />
                </div>
              </div>
            </form>
          </div>
          { this.state.activateButtons ?
            <div class="settings-section clear">
              <a href="#" class="edit left" onClick={(e) => { e.preventDefault(); this.setState({ activateButtons: false }); }}>Abbrechen</a>
              <a href="#" class="violet-button right" onClick={this.dataChangeDialog.bind(this)}>Speichern</a>
            </div> :
            <div class="settings-section">
              <a href="#" class="edit" onClick={(e) => { e.preventDefault(); this.setState({ activateButtons: true }); }}>Daten ändern</a>
            </div>
          }
        </div>
      </div>
    );
  }
}
