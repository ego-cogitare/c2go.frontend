import React from 'react';
import { Link, browserHistory } from 'react-router';
import { dispatch } from '../../../core/helpers/EventEmitter';

export default class RequestComplete extends React.Component {

  popupClose(e) {
    e.preventDefault();
    dispatch('popup:close');
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
          <Link to={`/proposal/${this.props.proposal}/details`} class="violet-button">Weitersuchen</Link>
          <a href="#" class="main-profile" onClick={this.popupClose.bind(this)}>Fertig</a>
        </div>
      </div>
    );
  }
}
