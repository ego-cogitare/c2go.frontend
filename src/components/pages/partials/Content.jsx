import React from 'react';
import { subscribe } from '../../../core/helpers/EventEmitter';

export default class Content extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return this.props.children;
  }
}
