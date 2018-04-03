import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

export default class Event extends React.Component {

  constructor(props) {
    super(props);
  }

  get creator() {
    return (this.props.creator || {}).first_name || (this.props.creator || {}).last_name;
  }

  render() {
    return (
      <div class={ classNames('event swiper-slide', this.props.type) }>
        <Link to={(this.props.proposals || []).length > 1 ? `/event-proposals/${this.props.id}` : `/event-requests/${this.props.id}/user/${this.props.creator.id}`}
              className="picture"
              data-color={this.props.color}
              style={{ display: 'block', backgroundImage: `url('${this.props.picture}')` }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5in" height="0.638889in" viewBox="0 0 108 46" class="label">
            <path fill={this.props.color}
                  d="M 103.00,0.00
                     C 103.00,0.00 99.00,9.00 99.00,9.00
                       111.15,14.90 110.04,33.84 94.00,39.15
                       87.07,41.45 72.20,41.53 65.00,39.99
                       65.00,39.99 52.42,36.46 52.42,36.46
                       49.41,36.56 47.29,40.39 41.00,42.21
                       31.00,45.10 20.07,40.77 12.00,35.00
                       8.65,39.68 5.27,43.51 0.00,46.00
                       0.00,46.00 0.00,0.00 0.00,0.00
                       0.00,0.00 103.00,0.00 103.00,0.00 Z"
             />
          </svg>
          <div class="event-category">
            {this.props.category}
          </div>
          <div class="event-open">
            <span>Schaue</span>
          </div>
          <div class="event-title">
            {this.props.title}
          </div>
          <div class="author-avatar">
            <img src={this.props.avatar} alt={this.creator} />
          </div>
        </Link>
        <div class="details">
          <div class="price-author">
            {this.props.price} mit {this.creator}
          </div>
          <div class="date">
            {this.props.date}
          </div>
          <div class="location">
            {this.props.location}
          </div>
        </div>
      </div>
    );
  }
}
