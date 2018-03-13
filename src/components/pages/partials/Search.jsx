import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

export default class Search extends React.Component {

  constructor(props) {
    super(props);

    this.autocompleteSettings = {
      //types: ['(cities)'],
      componentRestrictions: { 'country': 'de' },
      language: 'de'
    };

    this.state = {
      categories: [
        {
          id: 1,
          title: 'Kino'
        },
        {
          id: 2,
          title: 'Konzerte'
        },
        {
          id: 3,
          title: 'Reisen'
        },
        {
          id: 4,
          title: 'Sport'
        },
        {
          id: 5,
          title: 'Sonstiges'
        },
      ]
    };
  }

  componentDidMount() {
    $(this.refs.categories).on('click', function() {
      $(this).toggleClass('expanded');
    });

    var $autocompleteFrom = $(this.refs['autocomplete-from']).get(0);
    if ($autocompleteFrom)
    {
      var autocompleteFrom = new google.maps.places.Autocomplete($autocompleteFrom, this.autocompleteSettings)
      .addListener('place_changed', function() {
        $autocompleteFrom.blur();
        console.log('Selected place', this.getPlace());
      });
    }
    var $autocompleteTo = $(this.refs['autocomplete-to']).get(0);
    if ($autocompleteTo)
    {
      var autocompleteTo = new google.maps.places.Autocomplete($autocompleteTo, this.autocompleteSettings)
      .addListener('place_changed', function() {
        $autocompleteTo.blur();
        console.log('Selected place', this.getPlace());
      });
    }

    var $date = $('#date').get(0);
    if ($date)
    {
      var calendar = rome(
        $date, {
        time: false ,
        inputFormat: 'MM/DD/YYYY',
        weekdayFormat: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        dayFormat: 'D',
        appendTo: $date.parentNode
      })
      .on('hide', function() {
        $date.blur();
      });
      $($date).next('.fa-calendar').on('click', function() {
        setTimeout(function() { calendar.show(); }, 100);
      });
    }
  }

  render() {
    return (
      <div class="wrapper search-wrapper">
        <div class="label">
          Event oder Reise suchen
        </div>
        <div class="filter-wrapper">
          <div class="filter-item category" ref="categories">
            Kategorie <i class="right fa fa-sort-desc"></i>
            <div class="dropdown">
            {
              this.state.categories.map(({ id, title }) => (
                <div key={id} class="item">
                  <Link to="">{title}</Link>
                </div>
              ))
            }
            </div>
          </div>
          <div class="filter-item from">
            <input type="text" ref="autocomplete-from" class="input fullwidth" defaultValue="" placeholder="From" />
            <i class="right fa fa-map-marker"></i>
          </div>
          <div class="filter-item to">
            <input type="text" ref="autocomplete-to" class="input fullwidth" defaultValue="" placeholder="To" />
            <i class="right fa fa-map-marker"></i>
          </div>
          <div class="filter-item date">
            <input type="text" id="date" class="input" placeholder="Datum" defaultValue="" />
            <i class="right fa fa-calendar"></i>
          </div>
          <div class="filter-item search">
            <i class="fa fa-search"></i> Suchen
          </div>
        </div>
        <a href="#" class="create-event">
          Event erstellen
        </a>
      </div>
    );
  }
}
