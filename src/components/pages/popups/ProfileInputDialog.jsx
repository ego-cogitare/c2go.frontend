import React from 'react';
import { Link } from 'react-router';

export default class ProfileInputDialog extends React.Component {

  render() {
    return (
          <div class="popup-body">
            <form action="">
              <div class="form-controll">
                <input type="text" class="input" name="email" value="" placeholder="E-Mail-Adresse" autoFocus />
              </div>
              <div class="form-controll">
                <input type="submit" class="violet-button" name="email" value="Confirm" placeholder="E-Mail-Adresse" />
              </div>
            </form>
          </div>
    );
  }
}
