import React from 'react';
import { Link, browserHistory } from 'react-router';
import Partials from '../partials';
import { progress } from '../../../actions';

export default class Type extends React.Component {

  constructor(props) {
    super(props);
  }

  next(profileType) {
    progress({
      progress: 4,
      section: 'profile_type',
      value: profileType
    }, () => browserHistory.push('/register/settings'));
  }

  render() {
    return (
      <div class="register-profile-type wrapper-small text-center">
        <div class="heading-2">
          Bist du berechtigt eine Begleitperson mitzunehmen?
        </div>
        <p class="text">
          Wenn du im Besitz eines Schwerbehindertenausweises mit dem Merkzeichen "B" bist,
          darfst du eine Begleitperson kostenlos oder ermäßigt auf viele Reisen und Events mitnehmen
        </p>
        <div class="buttons">
          <a href="#" class="violet-button" onClick={this.next.bind(this, 1)}>Ja</a>
          <a href="#" class="violet-button" onClick={this.next.bind(this, 2)}>Nein</a>
        </div>
      </div>
    );
  }
}
