import React from 'react';
import { Link } from 'react-router';
import Partials from '../partials';
import classNames from 'classnames';
import User from '../../../core/helpers/User';
import { profilePhoto } from '../../../core/helpers/Utils';
import { profileInfo, profileDisabilityInformation, profileRequiredAssistance } from '../../../actions';

export default class Information extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        settings: {
          profile_interests: []
        },
        disability_info: 'Disability Info',
        disabilityInfoEdit: false,
        require_assistance: 'Require Assistance',
        requireAssistanceEdit: false,
        errors: {}
    };

    profileInfo(
      ({ data }) => this.setState({ ...data }),
      (e) => console.error(e)
    );
  }

  render() {
    return (
      <div class="profile-settings wrapper clear">
        <div class="sidebar">
          <Partials.SidebarMenu />
        </div>
        <div class="content">
          <div class="settings-section">
            <div class="heading-2">
              Profilinformationen
            </div>
            <Partials.UserAvatar ref="avatar">
              <a href="#" class="edit" onClick={(e) => {
                  e.preventDefault();
                  this.refs.avatar.profilePhotoPictureSelect();
              }}>Edit</a>
            </Partials.UserAvatar>
          </div>

          { this.state.disabilityInfoEdit &&
            <div class="settings-section">
              <div class="heading-2">
                Angaben zu einer Behinderung
              </div>
              <Partials.Textarea
                value={this.state.disability_info}
                maxLength="120"
                onChange={(value) => this.setState({ disability_info: value })}
                error={(this.state.errors.disability_info || []).join()}
              />
              <a href="#" class="edit" onClick={(e) => {
                e.preventDefault();
                this.setState({ disabilityInfoEdit: false });
              }}>Save</a>
            </div>
          }
          { !this.state.disabilityInfoEdit &&
            <div class="settings-section">
              <div class="heading-2">
                Angaben zu einer Behinderung
              </div>
              <div class="description">
                { this.state.disability_info }
              </div>
              <a href="#" class="edit" onClick={(e) => {
                e.preventDefault();
                this.setState({ disabilityInfoEdit: true });
              }}>Edit</a>
            </div>
          }

          { this.state.requireAssistanceEdit &&
            <div class="settings-section">
              <div class="heading-2">
                Welche Unterstützung benötigst Du?
              </div>
              <Partials.Textarea
                value={this.state.require_assistance}
                maxLength="120"
                onChange={(value) => this.setState({ require_assistance: value })}
                error={(this.state.errors.require_assistance || []).join()}
              />
              <a href="#" class="edit" onClick={(e) => {
                e.preventDefault();
                this.setState({ requireAssistanceEdit: false });
              }}>Save</a>
            </div>
          }
          { !this.state.requireAssistanceEdit &&
            <div class="settings-section">
              <div class="heading-2">
                Welche Unterstützung benötigst Du?
              </div>
              <div class="description">
                { this.state.require_assistance }
              </div>
              <a href="#" class="edit" onClick={(e) => {
                e.preventDefault();
                this.setState({ requireAssistanceEdit: true });
              }}>Edit</a>
            </div>
          }

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
                    { categories.map(({ id, name }) => (
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
            <Link to={`/profile/interests`} className="edit">Edit</Link>
          </div>

        </div>
      </div>
    );
  }
}
