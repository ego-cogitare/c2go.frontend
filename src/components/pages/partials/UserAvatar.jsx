import React from 'react';
import User from '../../../core/helpers/User';
import { post } from 'axios';

export default class UserAvatar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      profilePhoto: User.profilePhoto
    };
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

  profilePhotoPictureSelect() {
    this.refs['profile-photo'].click();
  }

  render() {
    return (
      <div class="avatar" style={{ backgroundImage: `url('${this.state.profilePhoto}')` }}>
        <form style={{display:'none'}} onSubmit={this.onProfilePhotoFormSubmit.bind(this)}>
          <input type="file" name="profile-photo" ref="profile-photo" onChange={(e) =>this.refs['upload-profile-photo-btn'].click()} />
          <input type="submit" ref="upload-profile-photo-btn" value="" />
        </form>
        {this.props.children}
      </div>
    );
  }
}
