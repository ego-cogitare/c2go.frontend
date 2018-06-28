import React from 'react';
import { Link, browserHistory } from 'react-router';
import Partials from '../partials';
import { eventAddCategory } from '../../../actions';

export default class Categories extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      nextStep: '/event-add/date-place?category=%CATEGORY%'
    };
  }

  onNextStep(e) {
    e.preventDefault();

    /** @var int category */
    const category = this.refs.interests.selectedItems[0];

    /** @var Object event */
    const event = JSON.parse(localStorage.getItem('event') || '{}');

    eventAddCategory(
      { category },
      ({ data }) => {
        browserHistory.push(this.state.nextStep.replace('%CATEGORY%', category));
        localStorage.setItem('event', JSON.stringify(Object.assign(event, data)));
      },
      (e) => this.setState({ errors: e.responseJSON.errors })
    );
  }

  render() {
    return (
      <Partials.Interests
        ref="interests"
        title="Interessen"
        description="Wähle hier deine Interessen aus, um individuelle Vorschläge zu erhalten"
        singleSelect={true}
      >
        <div class="buttons">
          <Link onClick={this.onNextStep.bind(this)} className="violet-button">Weiter</Link>
        </div>
      </Partials.Interests>
    );
  }
}
