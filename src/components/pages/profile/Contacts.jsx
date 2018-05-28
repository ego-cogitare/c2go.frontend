import React from 'react';
import { Link } from 'react-router';
import Partials from '../partials';
import Popups from '../popups';
import { dispatch } from '../../../core/helpers/EventEmitter';
import classNames from 'classnames';
import User from '../../../core/helpers/User';

export default class Contacts extends React.Component {

  initDialogs() {
    this.inputDialog = <Popups.ProfileInputDialog className="popup-sm adjustments-002" />;
  }

  popup() {
    dispatch('popup:show', {
      title: 'Enter e-mail adress',
      body: this.inputDialog
    });
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
              <div class="left with-icon icon-success">
                E-Mail-Adresse
              </div>
              <div class="right">
                <a href="#">
                  <img src={require('../../../staticFiles/img/icons/trash.png')} alt="Attention" />
                </a>
              </div>
            </div>
            <div class="table-row clear">
              <div class="left with-icon icon-plus-red" onClick={this.popup.bind(this)}>
                Telefonnummer
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
