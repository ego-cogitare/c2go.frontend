import React from 'react';
import { Link, browserHistory } from 'react-router';
import Partials from '../partials';
import { progress } from '../../../actions';

export default class Photo extends React.Component {

  constructor(props) {
    super(props);
  }

  next() {
    progress({ progress: 3 }, () => browserHistory.push('/register/type'));
  }

  render() {
    return (
      <div class="register-avatar wrapper-small text-center">
        <div class="heading-2">
          WillkommenRegister
        </div>
        <p class="text">
          Lade ein Profilbild hoch um deine Chancen auf ein erfolgreiches Match zu erhöhen
        </p>
        <Partials.UserAvatar ref="avatar" />
        <div class="buttons">
          <button class="violet-button" onClick={() => this.refs.avatar.profilePhotoPictureSelect()}>Profilbild hochladen</button>
          <p class="text">Oder</p>
          <a href="#" class="violet-button-inverse">Mit Facebook verknüpfen</a>
          <a href="#" class="skip" onClick={this.next.bind(this)}>Überspringen</a>
        </div>
      </div>
    );
  }
}
