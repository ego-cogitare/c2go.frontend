import React from 'react';
import { Link } from 'react-router';
import Partials from './partials';
import classNames from 'classnames';
import { eventAccept } from '../../actions';
import { profilePhoto } from '../../core/helpers/Utils';

export default class EventAccept extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      event: {},
      author: {},
      user: {},
    };

    eventAccept(
      { event: this.props.params.event },
      ({ data }) => this.setState({ ...data })
    );
  }

  render() {
    return (
      <div class="event-view">
        <Partials.EventCover
          category={this.state.event.category || {}}
          title={this.state.event.name}
        />

        <div class="wrapper actions-wrapper">
          <div class="inner-wrapper clear">
            <div class="event-info">
              <div class="heading-2">Hallo ich bin {this.state.user.first_name || this.state.user.last_name}</div>
              <div class="description">
                {this.state.message}
              </div>
              <div class="buttons clear">
                <a href="#" class="decline">Ablehnen</a>
                <a href="#" class="violet-button accept">Annehmen</a>
              </div>
            </div>
            <div class="user-avatar" style={{ backgroundImage: `url(${profilePhoto(this.state.user)})` }}>
              <i class="star" data-count={this.state.user.rank}></i>
            </div>
            <div class="user-info">
              <div class="ttl">
                Profilinformationen
              </div>
              <p>
                <span class="text-bold">{this.state.user.first_name || this.state.user.last_name}</span>, {this.state.user.age} Jahre, Aus {this.state.user.home_address}
              </p>
              <p>
                <span class="text-bold">Sprachen</span>: Englisch, Deutsch
              </p>
              <Link to={`/profile/${this.state.user.id}/information`} className="btn more-info">
                Mehr über {this.state.user.first_name || this.state.user.last_name} erfahren
              </Link>
            </div>
          </div>
        </div>

        <div class="details-wrapper wrapper clear">
          <div class="ttl">Eventdaten</div>
          <div class="event-date">
            <div class="heading-2">
              {this.state.event.name}
            </div>
            <div class="description">
              {this.state.request_message}
            </div>
          </div>
          <div class="event-details">
            <span>{this.state.event.event_location_human}</span>
            <span>{this.state.event.date}</span>
            <span>{this.state.price}€</span>
          </div>
        </div>

      </div>
    );
  }
}
