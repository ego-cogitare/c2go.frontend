import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

export default class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <header>
        <div class="header-wrapper clear">
          <div class="logo left">
            <a href="#"></a>
          </div>
          <nav class="menu right">
            <div class="menu-item">
              <a href="#" class="ico-search">Event suchen</a>
            </div>
            <div class="menu-item">
              <a class="active" href="#">So funktioniert's</a>
            </div>
            <div class="menu-item">
              <a href="#">Registrieren</a>
            </div>
            <div class="menu-item">
              <a href="#">Einloggen</a>
            </div>
          </nav>
          <div class="add-event right">
            <a class="btn" href="#">Event erstellen</a>
          </div>
        </div>
      </header>
    );
  }
}
