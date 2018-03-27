import React from 'react';
import { Link } from 'react-router';
import Partials from './partials';
import { events, categories } from '../../actions';
import { buildUrl } from '../../core/helpers/Utils';

export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      events: [[],[]]
    };
  }

  componentDidMount() {
    categories(
      {},
      ({ data }) => this.setState({ categories: data }),
      (e) => console.error(e),
    );
    events(
      {},
      ({ data }) => this.setState({ events: data }, () => {
        new Swiper('.events-slider', {
          direction: 'horizontal',
          slidesPerView: 'auto',
          paginationClickable: true,
          loop: false,
          spaceBetween: 0,
          mousewheelControl: false,
          speed: 1000
        });
      }),
      (e) => console.error(e)
    );
  }

  getUserProfilePhoto(user) {
    const profilePhoto = user.settings.find(({ section }) => section === 'profile_photo') || {};
    return profilePhoto.value
      ? `${config.staticFiles}/${profilePhoto.value}`
      : require('../../staticFiles/img/dashboard/empty-avatar.png');
  }

  getEventCoverPhoto(category, subcategory) {
    const coverPhoto = subcategory.cover_photo || category.cover_photo || '';
    return coverPhoto ? `${config.staticFiles}/${coverPhoto}` : '';
  }

  eventSearchHandle(params) {
    console.log('Events search', params);
  }

  eventAddHandle() {
    console.log('Events add');
  }

  render() {
    return (
      <div class="home">
        <div class="cover">
          <div class="title">
            Events
          </div>
          <Partials.Search
            categories={this.state.categories}
            onEventsSearch={this.eventSearchHandle.bind(this)}
            onEventAdd={this.eventAddHandle.bind(this)}
          />
        </div>
        <div class="events-wrapper clear">
          { this.state.events[1] &&
            <div class="events-section swiper-container events-slider">
              <div class="section-title">
                Top Events
              </div>
              <div class="events swiper-wrapper top">
                {
                  this.state.events[1].map(({ category, events }) => {
                    return (
                      events.map(({ id, category: subcategory, user, name, date, price, event_location_human }) => (
                        <Partials.Event
                          key={id}
                          color={subcategory.color}
                          avatar={this.getUserProfilePhoto(user)}
                          picture={this.getEventCoverPhoto(category, subcategory)}
                          title={name}
                          category={subcategory.name}
                          authorName={user.first_name}
                          price={`${price}€`}
                          time={date}
                          location={`In ${event_location_human}`}
                        />
                      ))
                    );
                  })
                }
              </div>
            </div>
          }
          { this.state.events[0] &&
            this.state.events[0].map(({ category, events }) => {
              return (
                <div key={`category-${category.id}`} class="events-section swiper-container events-slider">
                  <div class="section-title clear wrapper">
                    <div class="left">{category.name}</div>
                    <a href="#" class="right">Alle anzeigen</a>
                  </div>
                  <div class="events swiper-wrapper">
                    {
                      events.map(({ id, category: subcategory, user, name, date, price, event_location_human }) => (
                        <Partials.Event
                          key={id}
                          color={subcategory.color}
                          avatar={this.getUserProfilePhoto(user)}
                          picture={this.getEventCoverPhoto(category, subcategory)}
                          title={name}
                          category={subcategory.name}
                          authorName={user.first_name}
                          price={`${price}€`}
                          time={date}
                          location={`In ${event_location_human}`}
                        />
                      ))
                    }
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}
