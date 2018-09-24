import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

export default class Agreements extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      agree: false
    };
  }

  render() {
    return (
      <div class="wrapper-small">
        <div class="heading-2 text-center">
            Bist du berechtigt eine Begleitperson mitzunehmen?
        </div>
        <p class="text">
            Wenn du im Besitz eines Schwerbehindertenausweises mit dem Merkzeichen "B" bist, darfst du eine Begleitperson kostenlos oder ermäßigt auf viele Reisen und Events mitnehmen
        </p>
        <div class="buttons">
          <Link to={`/event-add/description`}
                class={classNames('button violet-button')}
          >Ja</Link>
            <br/>
            <Link to={`/`}
                  class={classNames('button violet-button')}
            >Nein</Link>
        </div>
      </div>
    );
  }
}
