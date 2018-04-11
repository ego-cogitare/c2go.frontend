import React from 'react';
import { Link } from 'react-router';
import Partials from './partials';
import Popups from './popups';
import { progress, categories } from '../../actions';
import { dispatch } from '../../core/helpers/EventEmitter';

export default class Interests extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      interests: []
    };

    categories(
      ({ data }) => this.setState({ categories: data }),
      (e) => console.log(e)
    );
  }

  next(e) {
    e.preventDefault();
    progress(
      { progress: 6,
        section: 'profile_interests',
        value: JSON.stringify({ categories: this.state.interests }) },
      (r) => dispatch('popup:show', { title: 'Bestätigung – Erfolgreich registriert', body: this.regComplete }),
      (e) => console.error(e)
    );
  }

  /**
   * Event should be fired on component render
   */
  initDialogs() {
   this.regComplete = <Popups.RegComplete />;
  }

  onInterestChecked(id, checked) {
    if (checked) {
      this.state.interests.indexOf(id) === -1 && this.state.interests.push(id);
    }
    else {
      this.state.interests = this.state.interests.filter((itemId) => itemId !== id);
    }
    this.setState({ interests: this.state.interests });
  }

  render() {
    this.initDialogs();

    return (
      <div class="registration-interests">
        <div class="heading-3">Interessen</div>
        <p class="text">Wähle hier deine Interessen aus, um individuelle Vorschläge zu erhalten</p>
        <div class="sections">
          {
            this.state.categories.map(({ id, name, color, cover_photo, categories: subcategories }) => (
              <div key={id} class="section clear" style={{ backgroundColor: color }}>
                <div class="cover" style={{ backgroundImage: `url('${config.staticFiles}/${cover_photo}')` }}>
                  <div class="gradient" style={{ background: `linear-gradient(to right, transparent, ${color})` }}></div>
                </div>
                <div class="label left">
                  <span>{name}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.90254in" height="1.30539in" viewBox="0 0 137 94">
                    <path fill={color} stroke="none"
                          d="M 125.00,0.00
                             C 127.12,0.00 130.59,-0.25 132.36,0.99
                               136.67,4.01 137.89,14.31 135.99,19.00
                               133.42,25.36 122.25,33.35 116.00,36.00
                               120.44,40.46 125.13,44.33 125.80,51.00
                               126.73,60.26 120.18,65.02 113.00,69.13
                               113.00,69.13 89.00,81.25 89.00,81.25
                               79.52,85.99 68.80,91.54 58.00,91.96
                               43.99,92.51 38.12,85.46 38.00,72.00
                               38.00,72.00 12.00,81.84 12.00,81.84
                               12.00,81.84 0.00,84.00 0.00,84.00
                               0.00,84.00 0.00,0.00 0.00,0.00
                               0.00,0.00 125.00,0.00 125.00,0.00 Z" />
                  </svg>
                </div>
                <div class="items left clear">
                  {
                    subcategories.map(({ id, name, cover_photo }) => (
                      <Partials.Interest
                        key={id}
                        id={id}
                        title={name}
                        picture={`${config.staticFiles}/${cover_photo}`}
                        onCheckedChange={(id, state) => this.onInterestChecked(id, state)}
                      />
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
        <div class="buttons">
          <a href="#" class="violet-button" onClick={this.next.bind(this)}>Weiter</a>
        </div>
      </div>
    );
  }
}
