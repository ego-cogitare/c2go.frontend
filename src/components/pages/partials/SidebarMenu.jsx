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
            <a href="#">Persönliche Daten ändern</a>
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
            <a href="#">Benachrichtigungen</a>
          </div>
          <div class="menu-item">
            <a href="#">Zahlungsarten</a>
          </div>
          <div class="menu-item">
            <a href="#">Auszahlungspräferenzen</a>
          </div>
          <div class="menu-item">
            <a href="#">Zahlungsübersicht</a>
          </div>
          <div class="menu-item">
            <a href="#">Kontoneinstellungen</a>
          </div>
        </nav>
      </div>
    );
  }
}
