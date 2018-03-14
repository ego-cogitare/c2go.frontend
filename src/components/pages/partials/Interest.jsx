import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import _ from 'underscore';

export default class Interest extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let id = _.uniqueId('interest-');
    return (
      <div class="item">
        <input type="checkbox" id={id} />
        <label for={id}>{this.props.title}</label>
        <div class="picture" style={{ backgroundImage: `url('${this.props.picture}')` }}>
          <div class="overlay"></div>
        </div>
      </div>
    );
  }
}
