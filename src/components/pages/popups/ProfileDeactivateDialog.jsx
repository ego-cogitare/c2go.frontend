import React from 'react';
import { Link, browserHistory } from 'react-router';
import { dispatch } from '../../../core/helpers/EventEmitter';

export default class ProfileDeactivateDialog extends React.Component {

  popupClose(e) {
    e.preventDefault();
    dispatch('popup:close');
  }

  render() {
    return (
      <div class="registration-complete">
        <p class="text">
          Confirm you are really want to deactivate you account. This operation can not be rolled back.
        </p>
        <div class="buttons clear">
          <a href="#" class="main-profile" onClick={this.props.onPositiveBtnClicked}>Deaktivieren</a>
          <a href="#" class="violet-button" onClick={this.popupClose.bind(this)}>Cancel</a>
        </div>
      </div>
    );
  }
}
