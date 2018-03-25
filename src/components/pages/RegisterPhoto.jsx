import React from 'react';
import { Link, browserHistory } from 'react-router';
import Partials from './partials';
import { progress } from '../../actions';
import User from '../../core/helpers/User';
import { post } from 'axios';

export default class RegisterPhoto extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      profilePhoto: User.profilePhoto
    };
  }

  next() {
    progress({ progress: 3 }, () => browserHistory.push('/register-type'));
  }

  onProfilePhotoFormSubmit(e) {
    e.preventDefault();

    post(
      `${config.backUrl}/api/user/profile-photo`,
      new FormData(e.target),
      { headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${User.token}`
      } }
    )
    .then(({ data }) => {
      // Update user session information
      User.data = data.user;

      // Update profile photo image
      this.setState({ profilePhoto: User.profilePhoto });
    })
    .catch(e => console.error(e));
  }

  profilePhotoPictureSelect(e) {
    e.preventDefault();
    this.refs['profile-photo'].click();
  }

  render() {
    return (
      <div class="register-avatar wrapper-small text-center">
        <div class="heading-2">
          Willkommen
        </div>
        <p class="text">
          Lade ein Profilbild hoch um deine Chancen auf ein erfolgreiches Match zu erhöhen
        </p>
        <div class="avatar">
          <img src={this.state.profilePhoto} alt={`${User.data.first_name} ${User.data.last_name}`} />
        </div>
        <div class="buttons">
          <form style={{display:'none'}} onSubmit={this.onProfilePhotoFormSubmit.bind(this)}>
            <input type="file" name="profile-photo" ref="profile-photo" onChange={(e) =>this.refs['upload-profile-photo-btn'].click()} />
            <input type="submit" ref="upload-profile-photo-btn" value="" />
          </form>

          <a href="#" class="violet-button" onClick={this.profilePhotoPictureSelect.bind(this)}>Profilbild hochladen</a>
          <p class="text">Oder</p>
          <a href="#" class="violet-button-inverse">Mit Facebook verknüpfen</a>
          <a href="#" class="skip" onClick={this.next.bind(this)}>Überspringen</a>
        </div>
      </div>
    );
  }
}
