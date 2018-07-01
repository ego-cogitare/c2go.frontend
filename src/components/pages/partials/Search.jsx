import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

export default class Search extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      selectedCategory: {},
      selectedDate: '',
      location1_human: '',
      location1_latlng: {},
      location2_human: '',
      location2_latlng: {},
    };
  }

  componentWillReceiveProps({ categories }) {
    const all = [{ id: '', name: 'Alle' }];
    this.setState({ categories: categories.concat(all) });
  }

  componentDidMount() {
    const context = this;

    $(this.refs.categories).on('click', function() {
      $(this).toggleClass('expanded');
    });

    var $autocompleteFrom = $(this.refs['autocomplete-from']).get(0);
    if ($autocompleteFrom)
    {
      var autocompleteFrom = new google.maps.places.Autocomplete($autocompleteFrom, config.autocomplete)
      .addListener('place_changed', function() {
        const place = this.getPlace();
        $autocompleteFrom.blur();
        context.setState({
          location1_human: place.vicinity,
          location1_latlng: {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
          }
        });
        console.log('Selected place', place);
      });
    }
    var $autocompleteTo = $(this.refs['autocomplete-to']).get(0);
    if ($autocompleteTo)
    {
      var autocompleteTo = new google.maps.places.Autocomplete($autocompleteTo, config.autocomplete)
      .addListener('place_changed', function() {
        const place = this.getPlace();
        $autocompleteTo.blur();
        context.setState({
          location2_human: place.vicinity,
          location2_latlng: {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
          }
        });
        console.log('Selected place', this.getPlace());
      });
    }

    var $date = $('#date').get(0);
    if ($date)
    {
      var calendar = rome(
        $date, {
        time: false ,
        inputFormat: 'DD.MM.YYYY',
        weekdayFormat: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        dayFormat: 'D',
        appendTo: $date.parentNode
      })
      .on('hide', function() {
        $date.blur();
        context.setState({ selectedDate: this.getDateString() });
      });
      $($date).next('.fa-calendar').on('click', function() {
        setTimeout(function() { calendar.show(); }, 100);
      });
    }
  }

  onCategorySelect(category, e) {
    e.preventDefault();
    this.setState({ selectedCategory: category });
  }

  // onEventsSearch() {
  //   this.props.onEventsSearch({
  //     category: this.state.selectedCategory,
  //     date: this.state.selectedDate,
  //     location1: {
  //       human: this.state.location1_human,
  //       latlng: this.state.location1_latlng,
  //     },
  //     location2: {
  //       human: this.state.location2_human,
  //       latlng: this.state.location2_latlng,
  //     }
  //   });
  // }

  get searchParams() {
    return {
      pathname:'',
      query: {
        category: this.state.selectedCategory.id || undefined,
        date: this.state.selectedDate || undefined,
        location: this.state.location1_human || undefined,
        destination: this.state.location2_human || undefined,
      }
    };
  }

  onLocationChange(e) {
    this.setState({ location1_human: e.target.value });
  }

  render() {
    return (
      <div class="wrapper search-wrapper">
        <div class="label">
          Event oder Reise suchen
        </div>
        <div class="filter-wrapper">
          <div class="filter-item category" ref="categories">
            { this.state.selectedCategory.name || 'Kategorie' } <i class="right fa fa-sort-desc"></i>
            <div class="dropdown">
            {
              this.state.categories.map((category) => (
                <div key={`category-${category.id}`} class="item" onClick={this.onCategorySelect.bind(this, category)}>
                  <Link to="">{category.name}</Link>
                </div>
              ))
            }
            </div>
          </div>
          <div class="filter-item from">
            <input type="text" ref="autocomplete-from" class="input fullwidth" defaultValue="" onChange={this.onLocationChange.bind(this)} placeholder="From" />
            <i class="right fa fa-map-marker"></i>
          </div>
          <div class="filter-item to" class={classNames('filter-item to', { hidden: this.state.selectedCategory.name !== 'Reise' })}>
            <input type="text" ref="autocomplete-to" class="input fullwidth" defaultValue="" placeholder="To" />
            <i class="right fa fa-map-marker"></i>
          </div>
          <div class="filter-item date">
            <input type="text" id="date" class="input" placeholder="Datum" defaultValue="" />
            <i class="right fa fa-calendar"></i>
          </div>
          <Link class="filter-item search" to={this.searchParams} /*onClick={this.onEventsSearch.bind(this)}*/>
            <i class="fa fa-search"></i> Suchen
          </Link>
        </div>
        <Link to="/event-add" className="create-event" onClick={this.props.onEventAdd}>
          Event erstellen
        </Link>
      </div>
    );
  }
}
