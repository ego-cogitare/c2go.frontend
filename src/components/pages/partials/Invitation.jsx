import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

export default class Invitation extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  static get STATE_NEW() {
    return 'new';
  }

  static get STATE_ACCEPTED() {
    return 'accepted';
  }

  static get STATE_DECLINED() {
    return 'declined';
  }

  onOpen(e) {
    e.preventDefault();
    this.props.onOpen(this.props.id);
  }

  render() {
    return (
      <div class={classNames('event-item clear', this.props.state, this.props.selected ? 'active' : null)}>
        { this.props.date && <div class="date">{this.props.date}</div> }
        { this.props.avatar && <div class="avatar" style={ this.props.avatar ? { backgroundImage: `url('${this.props.avatar}')` } : {} }></div> }
        <div class="info">
          { this.props.onOpen && <Link to="#" class="state" onClick={this.onOpen.bind(this)}>Offene Anfrage</Link> }
          <div class="heading-2">
            {this.props.title}
          </div>
          <div class="message">
            {this.props.message}
          </div>
        </div>
      </div>
    );
  }
}
