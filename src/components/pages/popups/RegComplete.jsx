import React from 'react';
import { browserHistory, Link } from 'react-router';
import { dispatch } from '../../../core/helpers/EventEmitter';

export default class EmailLoginDialog extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div class="registration-complete">
        <p class="text">
          Philosophy is considered a science but it is difficult to say, when one has to compare with an ordinary science, for example biology, or chemistry.
        </p>
        <div class="checkbox">
          <img src={require('../../../staticFiles/img/icons/checkbox-big.png')} alt="Completed" />
        </div>
        <div class="buttons clear">
          <Link to="/" class="violet-button">Events suchen</Link>
          <Link to="/dashboard" class="main-profile">Mein Profil</Link>
        </div>
      </div>
    );
  }
}
