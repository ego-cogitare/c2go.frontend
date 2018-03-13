import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

export default class Event extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class={ classNames('event swiper-slide', this.props.type) }>
        <div class="picture" style={{ backgroundImage: `url('${this.props.picture}')` }}>
          <div class="event-category">
            {this.props.category}
          </div>
          <div class="event-open">
            <a href="#">Schaue</a>
          </div>
          <div class="event-title">
            {this.props.title}
          </div>
          <div class="author-avatar">
            <a href="#">
              <img src={this.props.avatar} alt={this.props.authorName} />
            </a>
          </div>
        </div>
        <div class="details">
          <div class="price-author">
            {this.props.price} mit {this.props.authorName}
          </div>
          <div class="date">
            {this.props.time}
          </div>
          <div class="location">
            {this.props.location}
          </div>
        </div>
      </div>
    );
  }
}
