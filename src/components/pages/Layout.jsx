import React from 'react';
import Partials from './partials';
import Popups from './popups';
import UI from '../../core/ui';
import { dispatch, subscribe } from '../../core/helpers/EventEmitter';
import { bootstrap } from '../../actions';
import '../../staticFiles/css/main.css';

export default class Layout extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pageLoaded: true
    };
  }

  /**
   * Event should be fired on component render
   */
  initDialogs() {
   this.regSwitchDialog = <Popups.RegSwitchDialog />;
   this.loginSwitchDialog = <Popups.LoginSwitchDialog />;
   this.emailRegistrationDialog = <Popups.EmailRegistrationDialog />;
   this.emailLoginDialog = <Popups.EmailLoginDialog />;
  }

  componentDidMount() {
    this.popups(this.props);

    // If popup closed - navigate to /
    subscribe('popup:closed', () => {
      if (['#login', '#login/email', '#register', '#register/email'].indexOf(this.props.router.location.hash) !== -1) {
        this.props.router.push(this.props.router.location.pathname);
      }
    });
  }

  componentWillReceiveProps(props) {
    this.popups(props);
  }

  popups(props) {
    switch (props.router.location.hash) {
      case '#login':
        dispatch('popup:show', {
          title: 'Einloggen',
          body: this.loginSwitchDialog
        });
      break;

      case '#login/email':
        dispatch('popup:show', {
          title: 'Einloggen',
          body: this.emailLoginDialog
        });
      break;

      case '#register':
        dispatch('popup:show', {
          title: 'Registrieren',
          body: this.regSwitchDialog
        });
      break;

      case '#register/email':
        dispatch('popup:show', {
          title: 'Registrieren',
          body: this.emailRegistrationDialog
        });
      break;

      default:
        dispatch('popup:close');
      break;
    }
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
