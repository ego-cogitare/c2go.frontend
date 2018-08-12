import React from 'react';
import { Link } from 'react-router';
import Partials from '../partials';
import Popups from '../popups';
import { dispatch } from '../../../core/helpers/EventEmitter';
import classNames from 'classnames';
import User from '../../../core/helpers/User';
import { profileUpdateSetting } from '../../../actions';
import { raiseEvent } from '../../../listeners';

export default class Notifications extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      settings: {}
    };

    /** Get current user settings */
    raiseEvent('user:info:refresh', {}, (data) => {
      this.setState({ ...data });
    });
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

  updateSetting(e) {
    /** Update checkbox state  */
    this.state.settings[e.target.id] = e.target.checked;
    this.setState({ settings: this.state.settings });

    /** Save setting */
    profileUpdateSetting(
      { section: e.target.id, value: e.target.checked },
      (r) => console.log(r),
      (e) => console.error(e)
    );
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
            <div class="table">
              <div class="table-row">
                <input type="checkbox" id="notify_participants_email" onClick={this.updateSetting.bind(this)}
                  {...{checked: Boolean(eval(this.state.settings.notify_participants_email))}}
                />
                <label for="notify_participants_email">E-Mail</label>
              </div>
              <div class="table-row">
                <input type="checkbox" id="notify_participants_sms" onClick={this.updateSetting.bind(this)}
                  {...{checked: Boolean(eval(this.state.settings.notify_participants_sms))}}
                />
                <label for="notify_participants_sms">SMS</label>
              </div>
              <div class="table-row">
                <input type="checkbox" id="notify_participants_push" onClick={this.updateSetting.bind(this)}
                  {...{checked: Boolean(eval(this.state.settings.notify_participants_push))}}
                />
                <label for="notify_participants_push">Push-Benachrichtigungen</label>
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
              <div class={classNames('table-row clear', { hidden: !User.phone })}>
                <div class="left">
                  Telefonnummer:
                </div>
                <div class="right">
                  <a href={`tel:${User.phone}`}>{User.phone}</a>
                </div>
              </div>
              <div class={classNames('table-row clear', { hidden: !User.email })}>
                <div class="left">
                  E-Mail:
                </div>
                <div class="right">
                  <a href={`mailto:${User.email}`}>{User.email}</a>
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
                <input type="checkbox" id="notify_platform_email" onClick={this.updateSetting.bind(this)}
                  {...{checked: Boolean(eval(this.state.settings.notify_platform_email))}}
                />
                <label for="notify_platform_email">E-Mail</label>
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
                <input type="checkbox" id="notify_reminder_email" onClick={this.updateSetting.bind(this)}
                  {...{checked: Boolean(eval(this.state.settings.notify_reminder_email))}}
                />
                <label for="notify_reminder_email">E-Mail</label>
              </div>
              <div class="table-row">
                <input type="checkbox" id="notify_reminder_sms" onClick={this.updateSetting.bind(this)}
                  {...{checked: Boolean(eval(this.state.settings.notify_reminder_sms))}}
                />
                <label for="notify_reminder_sms">SMS</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
