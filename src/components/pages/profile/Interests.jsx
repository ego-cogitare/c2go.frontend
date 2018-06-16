import React from 'react';
import { Link, browserHistory } from 'react-router';
import Partials from '../partials';
import SVG from '../svg';
import Popups from '../popups';
import { progress } from '../../../actions';
import { dispatch } from '../../../core/helpers/EventEmitter';

export default class Interests extends React.Component {

  constructor(props) {
    super(props);
  }

  next(e) {
    e.preventDefault();

    progress(
      { progress: 6,
        section: 'profile_interests',
        value: JSON.stringify({ categories: this.refs.interests.selectedItems }) },
      (r) => browserHistory.push('/profile/information'),
      (e) => console.error(e)
    );
  }

  /**
   * Event should be fired on component render
   */
  initDialogs() {
   this.regComplete = <Popups.RegComplete />;
  }

  render() {
    this.initDialogs();

    return (
      <Partials.Interests
        ref="interests"
        title="Interessen"
        description="Wähle hier deine Interessen aus, um individuelle Vorschläge zu erhalten"
      >
        <div class="buttons">
          <a href="#" class="violet-button" onClick={this.next.bind(this)}>Weiter</a>
        </div>
      </Partials.Interests>
    );
  }
}
