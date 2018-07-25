import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

export default class Invitation extends React.Component {

  static get STATE_NEW() {
    return 1;
  }

  static get STATE_ACCEPTED() {
    return 2;
  }

  static get STATE_REJECTED() {
    return 3;
  }

  mapState(state) {
    return ['',
      'new',
      'accepted',
      'declined',
    ][state];
  }

  render() {
    return (
      <div class={classNames('event-item clear', this.mapState(this.props.state), this.props.selected ? 'active' : null)}>
        { this.props.date && <div class="date">{this.props.date}</div> }
        { this.props.avatar && <Link
            to={this.props.avatarLink}
            className="avatar" 
            style={ this.props.avatar ? { backgroundImage: `url('${this.props.avatar}')` } : {} }
            ></Link> }
        <div className="info">
          { this.props.openLink && <Link to={this.props.openLink} class="state">Offene Anfrage</Link> }
          <div class="heading-2">
            <Link to={this.props.titleLink}>{this.props.title}</Link>
          </div>
          <div class="message">
            {this.props.message}
          </div>
        </div>
      </div>
    );
  }
}
