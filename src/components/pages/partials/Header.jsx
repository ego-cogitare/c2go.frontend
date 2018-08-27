import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import User from '../../../core/helpers/User';
import { subscribe, unsubscribe } from '../../../core/helpers/EventEmitter';

export default class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hasSession: User.hasSession,
      profileType: User.profileType
    };

    this.onUserLogin = this.onUserLoginHandler.bind(this);
    this.onUserLogout = this.onUserLogoutHandler.bind(this);
  }

  onUserLoginHandler() {
    this.setState({
      hasSession: User.profileType,
      profileType: User.profileType
    });
  }

  onUserLogoutHandler() {
    this.setState({
      hasSession: User.profileType,
      profileType: User.profileType
    });
  }

  componentWillMount() {
    subscribe('user:loggedin', this.onUserLogin);
    subscribe('user:loggedout', this.onUserLogout);
  }

  componentWillUnmount() {
    unsubscribe('user:loggedin', this.onUserLogin);
    unsubscribe('user:loggedout', this.onUserLogout);
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
            { this.state.hasSession &&
              <div class="menu-item">
                <Link to="/dashboard" activeClassName="active">Dashboard</Link>
              </div>
            }
            { !this.state.hasSession &&
              <div class="menu-item">
                <a href="#register">Registrieren</a>
              </div>
            }
            { !this.state.hasSession &&
              <div class="menu-item">
                <a href="#login">Einloggen</a>
              </div>
            }
            { this.state.hasSession &&
              <div class="menu-item">
                <Link to="/logout">Ausloggen</Link>
              </div>
            }
          </nav>
          { Number(this.state.profileType) === 1 &&
            <div class="add-event right">
              <Link to='/event-add' className="btn" href="#">Angebot erstellen</Link>
            </div>
          }
        </div>
      </header>
    );
  }
}
