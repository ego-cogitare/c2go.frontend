import React from 'react';
import { Link } from 'react-router';
import Partials from '../partials';
import Popups from '../popups';
import { dispatch } from '../../../core/helpers/EventEmitter';
import classNames from 'classnames';
import User from '../../../core/helpers/User';

export default class Notifications extends React.Component {

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
              Benachrichtigungen
            </div>
            <div class="description">
              Erhalte Nachrichten von Mitgliedern.
            </div>
            <div class="settings">
              <div class="setting">
                <input type="checkbox" id="setting-email-1" />
                <label for="setting-email-1">E-Mail</label>
              </div>
              <div class="setting">
                <input type="checkbox" id="setting-sms-1" />
                <label for="setting-sms-1">SMS</label>
              </div>
              <div class="setting">
                <input type="checkbox" id="setting-push" />
                <label for="setting-push">Push-Benachrichtigungen</label>
              </div>
            </div>
          </div>

          <div class="settings-section">
            <div class="heading-2">
              Kontaktdaten
            </div>
            <div class="description">
              Diese Daten benötigen wir um dich kontaktieren und bei einem erfolgreichen Match den Kontakt mit deinem Companion herstellen zu können.
            </div>
            <div class="table text-small">
              <div class="table-row clear">
                <div class="left">
                  Telefonnummer:
                </div>
                <div class="right">
                  <a href="tel:">+49 *** **** 871</a>
                </div>
              </div>
              <div class="table-row clear">
                <div class="left">
                  E-Mail:
                </div>
                <div class="right">
                  <a href="mailto:mustermann@gmail.com">mustermann@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          <div class="settings-section">
            <div class="heading-2">
              Newsletter
            </div>
            <div class="description">
              Erhalte Neuigkeiten rund um Companion2go
            </div>
            <div class="table">
              <div class="table-row">
                <input type="checkbox" id="setting-email-2" />
                <label for="setting-email-2">E-Mail</label>
              </div>
            </div>
          </div>

          <div class="settings-section">
            <div class="heading-2">
              Erinnerungen und Vorschläge
            </div>
            <div class="description">
              Solltest du einmal eine Nachricht übersehen haben, erinnern wir dich gerne.
            </div>
            <div class="table">
              <div class="table-row">
                <input type="checkbox" id="setting-email-3" />
                <label for="setting-email-3">E-Mail</label>
              </div>
              <div class="table-row">
                <input type="checkbox" id="setting-sms-3" />
                <label for="setting-sms-3">SMS</label>
              </div>
            </div>
          </div>

          <div class="settings-section">
            <div class="heading-2">
              Erinnerungen und Vorschläge
            </div>
            <div class="description">
              Solltest du einmal eine Nachricht übersehen haben, erinnern wir dich gerne.
            </div>
            <div class="table">
              <div class="table-row">
                <input type="checkbox" id="setting-email-4" />
                <label for="setting-email-4">E-Mail</label>
              </div>
              <div class="table-row">
                <input type="checkbox" id="setting-sms-4" />
                <label for="setting-sms-4">SMS</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
