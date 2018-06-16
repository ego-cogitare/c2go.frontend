import React from 'react';
import { Link } from 'react-router';
import Partials from '../partials';
import Popups from '../popups';
import { dispatch } from '../../../core/helpers/EventEmitter';
import classNames from 'classnames';
import User from '../../../core/helpers/User';

export default class ProfileSettings extends React.Component {

  initDialogs() {
    this.inputDialog = <Popups.ProfileInputDialog className="popup-sm adjustments-002" />;
  }

  popup() {
    dispatch('popup:show', {
      title: 'E-Mail-Adresse ändern',
      body: this.inputDialog
    });
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
                  <input type="text" class="input" value="Abbrechen" />
                </div>
                <div class="form-controll right">
                  <input type="text" class="input" value="Wittmann" />
                </div>
              </div>
              <div class="form-row clear">
                <div class="form-controll left">
                  <input type="text" class="input" value="01.01.1989" />
                </div>
                <div class="form-controll right">
                  <input type="text" class="input" value="wittmann@companion2go.de" />
                </div>
              </div>
              <div class="form-row clear postamp">
                <div class="form-controll left">
                  <input type="text" class="input" value="35037" />
                </div>
                <div class="form-controll right">
                  <input type="text" class="input" value="Marburg" />
                </div>
              </div>
              <div class="form-row clear">
                <div class="form-controll">
                  <input type="text" class="input" value="Telefonnummer" />
                </div>
              </div>
            </form>
          </div>

          <div class="settings-section">
            <a href="#" class="edit">Daten ändern</a>
          </div>

          <div class="settings-section clear">
            <a href="#" class="edit left">Abbrechen</a>
            <a href="#" class="violet-button right">Speichern</a>
          </div>

        </div>
      </div>
    );
  }
}
