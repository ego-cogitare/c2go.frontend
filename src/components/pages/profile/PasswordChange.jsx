import React from 'react';
import { Link } from 'react-router';
import Partials from '../partials';
import Popups from '../popups';
import { dispatch } from '../../../core/helpers/EventEmitter';
import classNames from 'classnames';
import User from '../../../core/helpers/User';

export default class PasswordChange extends React.Component {

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
              Kontoeinstellungen
            </div>
            <div class="description">
              Roman chamomile is mainly grown in England, and there are some areas in continental
              Europe and the United States that also distill the oil. In 1785, Carlo Allioni, an
              Italian botanist, placed what we know as Roman chamomile.
            </div>
          </div>
          <div class="settings-section">
            <div class="heading-2">
              Passwort ändern
            </div>
            <form action="">
              <div class="form-row clear">
                <div class="form-controll left">
                  <input type="text" class="input" value="" placeholder="Altes Passwort" />
                </div>
              </div>
              <div class="form-row clear">
                <div class="form-controll left">
                  <input type="text" class="input" value="" placeholder="Neues Passwort" />
                </div>
                <div class="form-controll right">
                  <input type="text" class="input" value="" placeholder="Neues Passwort" />
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
          <div class="settings-section">
            <div class="heading-2">
              Account deaktivieren
            </div>
            <div class="description">
              Roman chamomile is mainly grown in England, and there are some areas in
              continental Europe.
            </div>
          </div>
          <div class="settings-section">
            <a href="#" class="edit">Deaktivieren</a>
          </div>
        </div>
      </div>
    );
  }
}
