import React from 'react';
import { Link } from 'react-router';
import Partials from './partials';
import SVG from './svg';
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
                  <SVG.InterestsLabel color={color} />
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
