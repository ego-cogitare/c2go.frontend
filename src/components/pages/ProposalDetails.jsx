import React from 'react';
import { Link } from 'react-router';
import Partials from './partials';
import classNames from 'classnames';
import { details } from '../../actions';
import { profilePhoto } from '../../core/helpers/Utils';

export default class ProposalDetails extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      event: {},
      user: {}
    };
  }

  componentDidMount() {
    details(
      { proposal: this.props.params.proposal },
      ({ data }) => this.setState({ ...data }),
      (e) => console.error(e)
    );
  }

  render() {
    return (
      <div class="event-proposals">
        <Partials.EventCover
          category={this.state.event.category || {}}
          title={this.state.event.name}
        />
        <div class="proposals-wrapper clear" style={{ backgroundColor: '#ffffff' }}>
          <div class="proposal-section wrapper">
            <div class="heading-1">{this.state.event.destination}, {this.state.event.date}</div>
            <div class="proposal-details clear">
              <div class="profile-photo">
                <div class="heading-2">
                  Anbieter/in
                </div>
                <div class="picture" style={{ backgroundImage: `url('${profilePhoto(this.state.user)}')` }}></div>
              </div>
              <div class="profile-details">
                <div class="info">
                  <div class="heading-2">
                    Profil
                  </div>
                  <p class="text">
                    {this.state.user.first_name || this.state.user.last_name}, {this.state.user.age} Jahre, Aus {this.state.user.home_address}
                  </p>
                  <p class="text">
                    Sprachen: Englisch, Deutsch, Französisch
                  </p>
                  <p class="text">
                    Hat eine Sehbehinderung.
                  </p>
                </div>
                <div class="description">
                  <div class="heading-2">
                    Hallo ich bin {this.state.user.first_name || this.state.user.last_name}…
                  </div>
                  <p class="text">
                    {this.state.message || ''}
                  </p>
                </div>
              </div>
            </div>
            <div class="hr"></div>
            { this.state.user.reviews && this.state.user.reviews.length > 0 &&
              <div class="reviews">
                <div class="title clear">
                  <div class="heading-2">
                    Bewertungen
                  </div>
                  <div class="star" data-count="5"></div>
                </div>
                {
                  (this.state.user.reviews || []).map(({ message, user }, key) => (
                    <div class="review clear" key={key}>
                      <div class="avatar-rating clear">
                        <div class="avatar">
                          <a href="#">
                            <img src={profilePhoto(user)} alt={user.first_name || user.last_name} />
                          </a>
                        </div>
                        <Partials.Rating type="percentage" progress={`${user.rank * 20 + 3}%`} />
                      </div>
                      <div class="text user-name">
                        {user.first_name || user.last_name}
                      </div>
                      <div class="text">
                        { message }
                      </div>
                    </div>
                  ))
                }
                <div class="violet-button-inverse show-more">
                  Mehr
                </div>
              </div>
            }

            <div class="buttons clear">
              <Link to={`/event/${this.props.params.proposal}/details`} class="violet-button right">
                Anfragen
              </Link>
              <Link to="/" class="cancel">
                Abbrechen
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
