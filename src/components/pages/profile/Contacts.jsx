import React from 'react';
import { Link } from 'react-router';
import Partials from '../partials';
import Popups from '../popups';
import { dispatch } from '../../../core/helpers/EventEmitter';
import classNames from 'classnames';
import User from '../../../core/helpers/User';
import { profileChangeEmail } from '../../../actions';

export default class Contacts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      phone: User.phone,
      email: User.email,
    };
  }

  initDialogs() {
    this.changeEmailDialog = <Popups.ProfileInputDialog
      message="Bitte gebe ein gültige E-Mail-Adresse ein. Im nächsten Schritt solltest du diese bestätigen."
      disabledText={User.email}
      placeholder="Neue E-Mail-Adresse"
      className="popup-sm adjustments-002"
      onPositiveButtonClick={(input) => {
        profileChangeEmail(
          { email: input.value },
          (r) => {
            input.value = '';
            dispatch('popup:close');
          },
          (e) => console.log(e)
        );
      }}
    />;

    this.addEmailDialog = <Popups.ProfileInputDialog
      message="Bitte gebe ein gültige Telefonnummer ein. Im nächsten Schritt solltest du diese bestätigen."
      placeholder="E-Mail-Adresse"
      className="popup-sm adjustments-002"
    />;

    this.changePhoneDialog = <Popups.ProfileInputDialog
      message="Bitte gebe ein gültige Telefonnummer ein. Im nächsten Schritt solltest du diese bestätigen."
      disabledText={User.phone}
      placeholder="Neue Telefonnummer"
      className="popup-sm adjustments-002"
    />;

    this.addPhoneDialog = <Popups.ProfileInputDialog
      message="Bitte gebe ein gültige Telefonnummer ein. Im nächsten Schritt solltest du diese bestätigen."
      placeholder="Telefonnummer"
      className="popup-sm adjustments-002"
    />;
  }

  render() {
    this.initDialogs();

    return (
      <div class="profile-contacts wrapper clear">
        <div class="sidebar">
          <Partials.SidebarMenu />
        </div>
        <div class="content">
          <div class="heading-2">
            Bestätigte Daten
          </div>
          <div class="table email-phone">
            <div class="table-row clear">
              <div class={classNames("left with-icon", {'icon-success': this.state.email, 'icon-plus-red': !this.state.email})} onClick={(e) => {
                e.preventDefault();
                this.state.email ?
                  dispatch('popup:show', {
                    title: 'E-Mail-Adresse ändern',
                    body: this.changeEmailDialog
                  }) :
                  dispatch('popup:show', {
                    title: 'E-Mail-Adresse hinzufügen',
                    body: this.addEmailDialog
                  });
              }}>
                <a href="#">{ this.state.email || 'E-Mail-Adresse' }</a>
              </div>
              <div class="right">
                <a href="#">
                  <img src={require('../../../staticFiles/img/icons/trash.png')} alt="Attention" />
                </a>
              </div>
            </div>
            <div class="table-row clear">
              <div class={classNames("left with-icon", {'icon-success': this.state.phone, 'icon-plus-red': !this.state.phone})} onClick={(e) => {
                e.preventDefault();
                this.state.phone ?
                  dispatch('popup:show', {
                    title: 'Telefonnummer ändern',
                    body: this.changePhoneDialog
                  }) :
                  dispatch('popup:show', {
                    title: 'Telefonnummer hinzufügen',
                    body: this.addPhoneDialog
                  });
              }}>
                <a href="#">{ this.state.phone || 'Telefonnummer' }</a>
              </div>
              <div class="right">
                <a href="#">
                  <img src={require('../../../staticFiles/img/icons/attention.png')} alt="Attention" />
                </a>
              </div>
            </div>
          </div>

          <div class="heading-2">
            Verknüpfungen
          </div>
          <div class="table">
            <div class="table-row clear">
              <div class="left with-icon icon-success">
                Facebook
              </div>
              <div class="right">
                <a href="#">
                  <img src={require('../../../staticFiles/img/icons/trash.png')} alt="Attention" />
                </a>
              </div>
            </div>
            <div class="table-row clear">
              <div class="left with-icon icon-plus-violet">
                Google
              </div>
              <div class="right">
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
