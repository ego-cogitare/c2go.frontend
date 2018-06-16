import React from 'react';
import { Link } from 'react-router';
import Partials from './partials';
import queryString from 'query-string';
import { events, categories } from '../../actions';
import { buildUrl } from '../../core/helpers/Utils';
import classNames from 'classnames';

export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      events: [[],[]],
      params: {},
      singleCategoryView: false
    };
  }

  componentWillReceiveProps(props) {
    this.fetchEvents();
  }

  componentDidMount() {
    this.fetchCategories();
    this.fetchEvents();
  }

  fetchCategories() {
    categories(
      ({ data }) => this.setState({ categories: data }),
      (e) => console.error(e),
    );
  }

  fetchEvents(params = null) {
    if (!params) {
      // Parse query string
      const { category, date, location, destination } = queryString.parse(window.location.search);
      params = { category, date, location, destination };

      this.setState({
        params,
        singleCategoryView: !!category
      });
    }

    // Fetch events list
    events(
      params,
      ({ data }) => this.setState({ events: data }, () => {
        // If single category browses - remove all swiper instances
        if (this.state.singleCategoryView)
        {
          // Remove swiper instances
          this.swiper && this.swiper.forEach((swiper) => {
            try {
              swiper.destroy(true, true);
            }
            catch (e) {
            }
          });
        }
        // Initialize swiper
        else
        {
          this.swiper = new Swiper('.events-slider', {
            direction: 'horizontal',
            slidesPerView: 'auto',
            paginationClickable: true,
            loop: false,
            spaceBetween: 0,
            mousewheelControl: false,
            speed: 1000
          });
        }
      }),
      (e) => console.error(e)
    );
  }

  getUserProfilePhoto(user) {
    return user.settings.profile_photo
      ? `${config.staticFiles}/${user.settings.profile_photo}`
      : require('../../staticFiles/img/dashboard/empty-avatar.png');
  }

  getEventCoverPhoto(category, subcategory) {
    const coverPhoto = subcategory.cover_photo || category.cover_photo || '';
    return coverPhoto ? `${config.staticFiles}/${coverPhoto}` : '';
  }

  // eventSearchHandle({ category, date, location1, location2 }) {
  //   this.setState({
  //     params: {
  //       category,
  //       date,
  //       location1,
  //       location2
  //     }
  //   });
  //   // this.fetchEvents({
  //   //   category: category.id,
  //   //   date,
  //   //   location: location1.human,
  //   //   destination: location2.human,
  //   // });
  // }

  eventAddHandle() {
    console.log('Events add');
  }

  get activeCategory() {
    return this.state.categories
      .find(({ id }) => id == this.state.params.category) || null;
  }

  get title() {
    const category = this.activeCategory;

    if (this.state.singleCategoryView)
    {
      if (category && !this.state.params.location) {
        return category.name;
      }
      if (category && this.state.params.location) {
        return category.name + ' in ' + this.state.params.location;
      }
    }
    else
    {
      if (!category && this.state.params.location) {
        return 'Events in ' + this.state.params.location;
      }
    }
    return 'Events';
  }

  get backgroundImage() {
    const category = this.activeCategory;

    return category && category.cover_photo
        ? `url('${config.staticFiles}/${category.cover_photo}')`
        : null;
  }

  render() {
    return (
      <div class="home">
        <div class="cover" style={{ backgroundImage: this.backgroundImage }}>
          <div class="title">
            { this.title }
          </div>
          <Partials.Search
            categories={this.state.categories}
            /*onEventsSearch={this.eventSearchHandle.bind(this)}*/
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
                        events.map(({ id, category: subcategory, best_proposal: proposal, proposals_count, name, date, event_location_human }) => (
                        <Partials.Event
                          key={id}
                          id={id}
                          color={subcategory.color}
                          avatar={this.getUserProfilePhoto(proposal.user)}
                          picture={this.getEventCoverPhoto(category, subcategory)}
                          title={name}
                          category={subcategory.name}
                          proposal={proposal}
                          proposalCount={proposals_count}
                          creator={proposal.user}
                          price={`${proposal.price}€`}
                          date={date}
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
                <div key={`category-${category.id}`} class={classNames('events-section swiper-container events-slider', {'single-category': this.state.singleCategoryView})}>
                  <div class="section-title clear wrapper">
                    <div class="left">{category.name}</div>
                    { !this.state.singleCategoryView && <Link to={{ pathname:'/', query: { category: category.id } }} class="right">Alle anzeigen</Link> }
                  </div>
                  <div class="events swiper-wrapper">
                    {
                      events.map(({ id, category: subcategory, best_proposal: proposal, proposals_count, name, date, event_location_human }) => (
                        <Partials.Event
                          key={id}
                          id={id}
                          color={subcategory.color}
                          avatar={this.getUserProfilePhoto(proposal.user)}
                          picture={this.getEventCoverPhoto(category, subcategory)}
                          title={name}
                          category={subcategory.name}
                          proposal={proposal}
                          proposalCount={proposals_count}
                          creator={proposal.user}
                          price={`${proposal.price}€`}
                          date={date}
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
