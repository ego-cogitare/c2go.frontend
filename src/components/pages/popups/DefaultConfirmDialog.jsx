import React from 'react';
import { dispatch } from '../../../core/helpers/EventEmitter';

export default class DefaultConfirmDialog extends React.Component {
  render() {
    return (
      <div class="popup-body">
        <div class="text">
          { this.props.message }
        </div>
        <div class="buttons">
          <a href="#" class="violet-button" onClick={ this.props.onConfirmButtonClick }>{ this.props.confirmButtonText }</a>
          <a href="#" class="skip" onClick={(e) => { e.preventDefault(); dispatch('popup:close')}}>{ this.props.cancelButtonText }</a>
        </div>
      </div>
    );
  }
}
