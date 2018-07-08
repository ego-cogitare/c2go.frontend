import React from 'react';
import { Link } from 'react-router';
import { dispatch } from '../../../core/helpers/EventEmitter';

export default class EventRequestConfirmDialog extends React.Component {

  render() {
    return (
      <div class="popup-body">
        <div class="text">
          {this.props.message}
        </div>
        <div class="buttons">
          <a href="#" class="violet-button" onClick={(e) => { e.preventDefault(); this.props.onConfirmButtonClick(this.props.intent); }}>Ändern</a>
          <a href="#" class="skip" onClick={(e) => { e.preventDefault(); dispatch('popup:close')}}>Abbrechen</a>
        </div>
      </div>
    );
  }
}
