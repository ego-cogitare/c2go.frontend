import React from 'react';
import { Link } from 'react-router';
import Partials from '../partials';
import classNames from 'classnames';
import User from '../../../core/helpers/User';
import { profilePhoto } from '../../../core/helpers/Utils';
import { profileInfo } from '../../../actions';

export default class ProfileInfo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      settings: {
        profile_interests: []
      },
    };

    profileInfo(
      { user: this.props.params.user },
      ({ data }) => this.setState({ ...data }),
      (e) => console.error(e)
    );
  }

  render() {
    return (
      <div class="profile-settings wrapper clear">
        <div class="content" style={{ width: '100%' }}>
          <div class="settings-section clear">
            <div class="heading-2">
              Profilinformationen
            </div>
            <div class="avatar left " style={{ backgroundImage: `url('${profilePhoto(this.state)}')` }}></div>
            <div class="profile-actions left">
              <div class="heading-1" style={{ padding: '40px 0 0 50px' }}>{`${this.state.first_name} ${this.state.last_name}`}</div>
            </div>
          </div>
          <div class="settings-section">
            <div class="heading-2">
              Angaben zu einer Behinderung
            </div>
            <div class="description">
              Roman chamomile is mainly grown in England, and there are some areas in continental Europe and the United States that also distill the oil. In 1785,
              Carlo Allioni, an Italian botanist, placed what we know as Roman chamomile in the genus Chamaemelum, naming Anthemis nobilis as Chamaemelum nobile,
              thus furthering the confusion about chamomiles.
            </div>
          </div>
          <div class="settings-section">
            <div class="heading-2">
              Welche Unterstützung benötigst Du?
            </div>
            <div class="description">
              Roman chamomile is mainly grown in England, and there are some areas in continental Europe and the United States that also distill the oil. In 1785,
              Carlo Allioni, an Italian botanist, placed what we know as Roman chamomile in the genus Chamaemelum, naming Anthemis nobilis as Chamaemelum nobile,
              thus furthering the confusion about chamomiles.
            </div>
          </div>
          <div class="settings-section">
            <div class="heading-2">
              Interessen:
            </div>
            {
              this.state.settings.profile_interests.map(({ id, name, categories }) => {
                if (categories.length === 0) {
                  return null;
                }
                return (
                  <div key={id} class="tags clear">
                    <div class="title">
                      { name }
                    </div>
                    <div class="tags-list">
                    {
                      categories.map(({ id, name }) => (
                        <a key={id} href="#" class="tag">
                          { name }
                        </a>
                      ))
                    }
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
