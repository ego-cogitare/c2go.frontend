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
          Regeln und Vereinbarungen
        </div>
        <p class="text">
          Die Leute hatte in ihrem Hinterhaus ein kleines Fenster, daraus konnte man in einen prächtigen Garten sehen,
          der voll der schönsten Blumen und Kräuter stand; er war aber von einer hohen Mauer umgeben, und niemand wagte
          hineinzugehen, weil er einer Zauberin gehörte, die große Macht hatte und von aller Welt gefürchtet ward.
        </p>
        <br/>
        <p class="text">
          Blumen und Kräuter stand; er war aber von einer hohen Mauer umgeben, und niemand wagte
          hineinzugehen, weil er einer Zauberin gehörte, die große Macht hatte und von aller Welt gefürchtet ward.
        </p>
        <div class="form text-center">
          <br/>
          <br/>
          <input id="agree-checkbox" ref="agree" type="checkbox" />
          <label for="agree-checkbox" onClick={() => {
            this.setState({ agree: !this.refs.agree.checked });
          }}>
            <span>Ich stimme zu</span>
          </label>
        </div>
        <div class="buttons">
          <Link to={`/event-add/categories`}
                onClick={(e) => !this.state.agree && e.preventDefault() }
                class={classNames('button violet-button', { disabled: !this.state.agree })}
          >Weiter</Link>
        </div>
      </div>
    );
  }
}
