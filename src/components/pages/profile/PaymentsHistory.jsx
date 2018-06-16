import React from 'react';
import { Link } from 'react-router';
import Partials from '../partials';
import Popups from '../popups';
import { dispatch } from '../../../core/helpers/EventEmitter';
import classNames from 'classnames';
import User from '../../../core/helpers/User';

export default class PaymentsHistory extends React.Component {

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
      <div class="profile-bills wrapper clear">
        <div class="sidebar">
          <Partials.SidebarMenu />
        </div>
        <div class="content">
          <div class="heading-2">
            Rechnungen
          </div>
          <div class="table">
            <div class="table-row clear">
              <div class="left">
                00.00.0000 – Nr. 0005
              </div>
              <div class="right">
                <a href="#" class="fa fa-download"></a>
              </div>
            </div>
            <div class="table-row clear">
              <div class="left">
                00.00.0000 – Nr. 0004
              </div>
              <div class="right">
                <a href="#" class="fa fa-download"></a>
              </div>
            </div>
            <div class="table-row clear">
              <div class="left">
                00.00.0000 – Nr. 0003
              </div>
              <div class="right">
                <a href="#" class="fa fa-download"></a>
              </div>
            </div>
            <div class="table-row clear">
              <div class="left">
                00.00.0000 – Nr. 0002
              </div>
              <div class="right">
                <a href="#" class="fa fa-download"></a>
              </div>
            </div>
            <div class="table-row clear">
              <div class="left">
                00.00.0000 – Nr. 0001
              </div>
              <div class="right">
                <a href="#" class="fa fa-download"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
