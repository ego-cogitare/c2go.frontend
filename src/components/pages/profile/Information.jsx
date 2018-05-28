import React from 'react';
import { Link } from 'react-router';
import Partials from '../partials';
import classNames from 'classnames';
import User from '../../../core/helpers/User';

export default class Information extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
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

          <div class="settings-section">
            <div class="heading-2">
              Angaben zu einer Behinderung
            </div>
            <div class="description">
              Roman chamomile is mainly grown in England, and there are some areas in continental Europe and the United States that also distill the oil. In 1785,
              Carlo Allioni, an Italian botanist, placed what we know as Roman chamomile in the genus Chamaemelum, naming Anthemis nobilis as Chamaemelum nobile,
              thus furthering the confusion about chamomiles.
            </div>
            <a href="#" class="edit">Edit</a>
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
            <a href="#" class="edit">Edit</a>
          </div>

          <div class="settings-section">
            <div class="heading-2">
              Interessen:
            </div>
            <div class="tags clear">
              <div class="title">
                Musik
              </div>
              <div class="tags-list">
                <a href="#" class="tag">
                  Barbecue Party Tips For A Truly Amazing Event
                </a>
                <a href="#" class="tag">
                  Cast Iron Cookware
                </a>
                <a href="#" class="tag">
                  Types Of Cookware Pots And Pans
                </a>
                <a href="#" class="tag">
                  Cooking With Eggs
                </a>
                <a href="#" class="tag">
                  Love Food Read All About It With A Cooking Magazine Subscription
                </a>
              </div>
            </div>
            <div class="tags clear">
              <div class="title">
                Sport
              </div>
              <div class="tags-list">
                <a href="#" class="tag">
                  Cast Iron Cookware
                </a>
                <a href="#" class="tag">
                  Cooking With Eggs
                </a>
              </div>
            </div>
            <div class="tags clear">
              <div class="title">
                Sonstiges
              </div>
              <div class="tags-list">
                <a href="#" class="tag">
                  Barbecue Party Tips For A Truly Amazing Event
                </a>
                <a href="#" class="tag">
                  Cast Iron Cookware
                </a>
                <a href="#" class="tag">
                  Types Of Cookware Pots And Pans
                </a>
                <a href="#" class="tag">
                  Cooking With Eggs
                </a>
              </div>
            </div>
            <Link to={`/register-interests`} className="edit">Edit</Link>
          </div>

        </div>
      </div>
    );
  }
}
