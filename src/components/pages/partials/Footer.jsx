import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

export default class Footer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <footer>
        <div class="wrapper">
          <div class="columns clear">
            <div class="column left">
              <nav class="menu">
                <div class="menu-item">
                  <a href="#">Startseite</a>
                </div>
                <div class="menu-item">
                  <a href="#">Event suchen</a>
                </div>
                <div class="menu-item">
                  <a href="#">Event erstellen</a>
                </div>
                <div class="menu-item">
                  <a href="#">So funktioniert's</a>
                </div>
              </nav>
            </div>
            <div class="column left">
              <nav class="menu">
                <div class="menu-item">
                  <a href="#">Registrieren</a>
                </div>
                <div class="menu-item">
                  <a href="#">Einloggen</a>
                </div>
                <div class="menu-item">
                  <a href="#">Nutzungsbedingungen</a>
                </div>
                <div class="menu-item">
                  <a href="#">Datenschutz</a>
                </div>
              </nav>
            </div>
            <div class="column left clear">
              <div class="footer-logo left">
                <a href="#">
                  <img src={require('../../../staticFiles/img/logo-footer.png')} alt="C2Go" />
                </a>
              </div>
              <div class="left">
                <p class="copyrights">
                  © Companion2Go GbR
                </p>
                <p class="address">
                  c/o Social Impact Lab<br/>
                  Falkstraße 5<br/>
                  60487 Frankfurt am Main
                </p>
                <div class="socials">
                  <div class="social">
                    <a href="#" class="fa fa-facebook"></a>
                  </div>
                  <div class="social">
                    <a href="#" class="fa fa-linkedin"></a>
                  </div>
                  <div class="social">
                    <a href="#" class="fa fa-instagram"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="hr"></div>
          <div class="feefback">
            <p class="text-center">Was können wir verbessern?</p>
            <a href="#" class="btn">Feedback geben</a>
          </div>
        </div>
      </footer>
    );
  }
}
