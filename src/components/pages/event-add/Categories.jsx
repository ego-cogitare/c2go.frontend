import React from 'react';
import { Link } from 'react-router';
import Partials from '../partials';

export default class Categories extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <Partials.Interests
        ref="interests"
        title="Interessen"
        description="Wähle hier deine Interessen aus, um individuelle Vorschläge zu erhalten"
      >
        <div class="buttons">
          <Link to="/event-add/description" className="violet-button">Weiter</Link>
        </div>
      </Partials.Interests>
    );
  }
}
