import React from 'react';
// import Settings from '../../core/helpers/Settings';
import Partials from './partials';
import Popups from './popups';
import UI from '../../core/ui';
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

  componentDidMount() {
    dispatch('popup:show', {
      title: 'Registrieren',
      body: this.regSwitchDialog
    });

    dispatch('popup:show', {
      title: 'Willkommen',
      body: this.emailRegistrationDialog
    });
  }

  /**
  * Event should be fired on component render
  */
  initDialogs() {
   this.regSwitchDialog = <Popups.RegSwitchDialog />;
   this.emailRegistrationDialog = <Popups.EmailRegistrationDialog />;
  }

  render() {
    this.initDialogs();

    if (this.state.pageLoaded) {
      return (
        <div>
          <UI.Popup />
          <Partials.Header />
          <Partials.Content children={this.props.children} />
          <Partials.Footer />
        </div>
      );
    }
    return null;
  }
}
