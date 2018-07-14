import React from 'react';
import { Link, browserHistory } from 'react-router';
import Partials from '../partials';
import Popups from '../popups';
import classNames from 'classnames';
import User from '../../../core/helpers/User';
import { dispatch } from '../../../core/helpers/EventEmitter';
import { logout } from '../../../core/middleware/Auth';
import { profileDeactivate, profileChangePassword } from '../../../actions';

export default class PasswordChange extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activateButtons: false,
      old_password: '',
      new_password: '',
      new_password_confirm: '',
      errors: {}
    };
  }

  initDialogs() {
    this.passwordChangeConfirmDialog =
      <Popups.DefaultConfirmDialog
        className="popup-sm adjustments-002"
        message="Do you really want to change your password?"
        confirmButtonText="Yes"
        cancelButtonText="Cancel"
        onConfirmButtonClick={this.doPasswordChange.bind(this)}
      />;

    /** Profile deactivate confirmation dialog */
    this.profileDeactivateDialog =
      <Popups.ProfileDeactivateDialog
        className="popup-sm adjustments-002"
        onPositiveBtnClicked={this.doProfileDeactivate.bind(this)}
      />;
  }

  onProfileDeactivate(e) {
    e.preventDefault();

    dispatch('popup:show', {
      title: 'Confirm profile deactivation',
      body: this.profileDeactivateDialog
    });
  }

  doProfileDeactivate(e) {
    e.preventDefault();

    profileDeactivate(
      (r) => logout({ router: browserHistory }),
      (e) => console.error(e)
    );
  }

  passwordChangeDialog(e) {
    e.preventDefault();

    dispatch('popup:show', {
      title: 'Confirm password change',
      body: this.passwordChangeConfirmDialog
    });
  }

  doPasswordChange(e) {
    e.preventDefault();

    /** Clear old errors */
    this.setState({ errors: {} });

    profileChangePassword(
      { old_password: this.state.old_password,
        new_password: this.state.new_password,
        new_password_confirm: this.state.new_password_confirm
      },
      (r) => this.setState({
          activateButtons: false,
          old_password: '',
          new_password: '',
          new_password_confirm: '',
        },
        () => dispatch('popup:close')
      ),
      (e) => this.setState({ errors: e.responseJSON.errors },
        () => dispatch('popup:close')
      )
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
                  <input
                    type="password"
                    class="input"
                    placeholder="Altes Passwort"
                    value={ this.state.old_password }
                    onChange={(e) => this.setState({ old_password: e.target.value })}
                  />
                  <small class="color-red left">{(this.state.errors.old_password || []).join()}</small>
                </div>
              </div>
              <div class="form-row clear">
                <div class="form-controll left">
                  <input
                    type="password"
                    class="input"
                    placeholder="Neues Passwort"
                    value={ this.state.new_password }
                    onChange={(e) => this.setState({ new_password: e.target.value })}
                  />
                  <small class="color-red left">{(this.state.errors.new_password || []).join()}</small>
                </div>
                <div class="form-controll right">
                  <input
                    type="password"
                    class="input"
                    placeholder="Neues Passwort"
                    value={ this.state.new_password_confirm }
                    onChange={(e) => this.setState({ new_password_confirm: e.target.value })}
                  />
                  <small class="color-red left">{(this.state.errors.new_password_confirm || []).join()}</small>
                </div>
              </div>
            </form>
          </div>
          { this.state.activateButtons ?
            <div class="settings-section clear">
              <a href="#" class="edit left" onClick={(e) => { e.preventDefault(); this.setState({ activateButtons: false }); }}>Abbrechen</a>
              <a href="#" class="violet-button right" onClick={this.passwordChangeDialog.bind(this)}>Speichern</a>
            </div> :
            <div class="settings-section">
              <a href="#" class="edit" onClick={(e) => { e.preventDefault(); this.setState({ activateButtons: true }); }}>Daten ändern</a>
            </div>
          }

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
            <a href="#" class="edit" onClick={this.onProfileDeactivate.bind(this)}>Deaktivieren</a>
          </div>
        </div>
      </div>
    );
  }
}
