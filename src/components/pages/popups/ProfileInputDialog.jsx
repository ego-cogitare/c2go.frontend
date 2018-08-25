import React from 'react';
import { Link } from 'react-router';

export default class ProfileInputDialog extends React.Component {
  render() {
    return (
      <div class="popup-body">
        <div class="text">
          { this.props.message }
        </div>
        { this.props.disabledText &&
          <div class="form-controll">
            <input type="text" class="input disabled" defaultValue={ this.props.disabledText } disabled />
          </div>
        }
        <div class="form-controll">
          <input type="text" class="input" ref="input" name="email" defaultValue="" placeholder={ this.props.placeholder } autoFocus />
        </div>
        <div class="buttons">
          <a href="#" class="violet-button" onClick={(e) => {
              e.preventDefault();
              this.props.onPositiveButtonClick(this.refs.input);
          }}>Ändern</a>
          <a href="#" class="skip">Abbrechen</a>
        </div>
      </div>
    );
  }
}
