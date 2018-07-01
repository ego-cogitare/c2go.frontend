import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import User from '../../../core/helpers/User';

export default class SidebarMenu extends React.Component {

  render() {
    return (
      <div class="menu-wrapper">
        <div class="heading-2">
          Profil
        </div>
        <nav class="sidebar-menu">
          <div class="menu-item">
            <Link to={`/profile/settings`} activeClassName="active">
              Persönliche Daten ändern
            </Link>
          </div>
          <div class="menu-item">
            <Link to={`/profile/information`} activeClassName="active">
              Profilinformationen
            </Link>
          </div>
          <div class="menu-item">
            <Link to={`/profile/contacts`} activeClassName="active">
              Bestätigte Daten
            </Link>
          </div>
        </nav>

        <div class="heading-2">
          Einstellungen
        </div>
        <nav class="sidebar-menu">
          <div class="menu-item">
            <Link to={`/profile/notifications`} activeClassName="active">
              Benachrichtigungen
            </Link>
          </div>
          <div class="menu-item">
            <Link to={`/profile/payments-history`} activeClassName="active">
              Zahlungsübersicht
            </Link>
          </div>
          <div class="menu-item">
            <Link to={`/profile/password-change`} activeClassName="active">
              Kontoneinstellungen
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
