import React from 'react';
// import Settings from '../../core/helpers/Settings';
import Partials from './partials';
import { dispatch } from '../../core/helpers/EventEmitter';
import { bootstrap } from '../../actions';
import '../../staticFiles/css/main.css';

export default class Layout extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pageLoaded: true
    };
  }

  render() {
    if (this.state.pageLoaded) {
      return (
        <div>
          <Partials.Header />
          <Partials.Content children={this.props.children} />
          <Partials.Footer />
        </div>
      );
    }
    return null;
  }
}
