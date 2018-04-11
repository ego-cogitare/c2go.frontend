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

  onOpen(e) {
    e.preventDefault();
    this.props.onOpen(this.props.id);
  }

  render() {
    return (
      <div class={classNames('event-item clear', this.mapState(this.props.state), this.props.selected ? 'active' : null)}>
        { this.props.date && <div class="date">{this.props.date}</div> }
        { this.props.avatar && <div class="avatar" style={ this.props.avatar ? { backgroundImage: `url('${this.props.avatar}')` } : {} }></div> }
        <Link to={`/event-accept/${this.props.id}`} className="info">
          { this.props.onOpen && <Link to="#" class="state">Offene Anfrage</Link> }
          <div class="heading-2">
            {this.props.title}
          </div>
          <div class="message">
            {this.props.message}
          </div>
        </Link>
      </div>
    );
  }
}
