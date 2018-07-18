import React from 'react';
import { Link } from 'react-router';
import Partials from '../partials';
import classNames from 'classnames';
import User from '../../../core/helpers/User';
import { profilePhoto } from '../../../core/helpers/Utils';
import { profileInfo, profileDisabilityInformation, profileRequireAssistance } from '../../../actions';

export default class Information extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      profile_interests: [],
      disability_information: '',
      disabilityInfoEdit: false,
      require_assistance: '',
      requireAssistanceEdit: false,
      errors: {}
    };

    profileInfo(
      ({ data: { settings } }) => this.setState({ ...settings }),
      (e) => console.error(e)
    );
  }

  disabilityInfoSave(e) {
    e.preventDefault();

    profileDisabilityInformation(
      { disability_information: this.state.disability_information },
      (r) => this.setState({ disabilityInfoEdit: false, errors: {} }),
      (e) => this.setState({ errors: e.responseJSON.errors })
    );
  }

  requireAssistanceSave(e) {
    e.preventDefault();

    profileRequireAssistance(
      { require_assistance: this.state.require_assistance },
      (r) => this.setState({ requireAssistanceEdit: false, errors: {} }),
      (e) => this.setState({ errors: e.responseJSON.errors })
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
                value={this.state.disability_information}
                maxLength="120"
                onChange={(value) => this.setState({ disability_information: value })}
                error={(this.state.errors.disability_information || []).join()}
              />
              <a href="#" class="edit" onClick={this.disabilityInfoSave.bind(this)}>Save</a>
            </div>
          }
          { !this.state.disabilityInfoEdit &&
            <div class="settings-section">
              <div class="heading-2">
                Angaben zu einer Behinderung
              </div>
              <div class="description">
                { this.state.disability_information }
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
            <a href="#" class="edit" onClick={this.requireAssistanceSave.bind(this)}>Save</a>
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
              this.state.profile_interests.map(({ id, name, categories }) => {
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
