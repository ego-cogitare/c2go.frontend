import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import User from '../../../core/helpers/User';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <div class="header-wrapper clear">
          <div class="logo left">
            <Link to="/"></Link>
          </div>
          <nav class="menu right">
            <div class="menu-item">
              <Link to="/" class="ico-search">Event suchen</Link>
            </div>
            <div class="menu-item">
              <Link to="/how-it-works" activeClassName="active">So funktioniert's</Link>
            </div>
            { User.hasSession &&
              <div class="menu-item">
                <Link to="/dashboard" activeClassName="active">Dashboard</Link>
              </div>
            }
            { !User.hasSession &&
              <div class="menu-item">
                <a href="#register">Registrieren</a>
              </div>
            }
            { !User.hasSession &&
              <div class="menu-item">
                <a href="#login">Einloggen</a>
              </div>
            }
            { User.hasSession &&
              <div class="menu-item">
                <Link to="/logout">Ausloggen</Link>
              </div>
            }
          </nav>
          <div class="add-event right">
            <a class="btn" href="#">Event erstellen</a>
          </div>
        </div>
      </header>
    );
  }
}
