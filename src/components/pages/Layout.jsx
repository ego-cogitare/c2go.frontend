import React from 'react';
import classNames from 'classnames';
import { browserHistory } from 'react-router';
import Partials from './partials';
import Popups from './popups';
import UI from '../../core/ui';
import { dispatch, subscribe, unsubscribe } from '../../core/helpers/EventEmitter';
import { refreshToken } from '../../core/middleware/Auth';
import '../../staticFiles/css/main.css';
import '../../staticFiles/css/addional.css';

export default class Layout extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pageLoading: false
    };

    this.popupsHashes = [
      '#login',
      '#login/email',
      '#register',
      '#register/email',
      '#register/terms-of-use'
    ];

    this.apiRequestBegin = this.apiRequestBeginHandler.bind(this);
    this.apiRequestEnd = this.apiRequestEndHandler.bind(this);
  }

  continueRegistration(progress) {
    const uncompletedRegStates = {
      '1': 'register/email-confirmation',
      '2': 'register/photo',
      '3': 'register/type',
      '4': 'register/settings',
      '5': 'register/interests',
      '6': location.pathname,
    };
    return browserHistory.push(uncompletedRegStates[progress] || '');
  }

  /**
   * Event should be fired on component render
   */
  initDialogs() {
   this.regSwitchDialog = <Popups.RegSwitchDialog />;
   this.loginSwitchDialog = <Popups.LoginSwitchDialog />;
   this.emailRegistrationDialog = <Popups.EmailRegistrationDialog />;
   this.emailLoginDialog = <Popups.EmailLoginDialog />;
   this.termsOfUse = <Popups.TermsOfUse />;
  }

  apiRequestBeginHandler({ url, params }) {
    //this.setState({ pageLoading: true });
  }

  apiRequestEndHandler({ url, params, result })
  {
    // Mark last request as completed
    //this.setState({ pageLoading: false });

    /** Redirect user to completed registration */
    if (result.status === 202 || (['/api/auth/login', '/api/auth/registration'].indexOf(url) !== -1 && result.status === 200)) {
      this.continueRegistration(result.responseJSON.user.progress);
    }

    /** If user tries to get closed part of portal */
    if (result.status === 400 && result.responseJSON.error === 'token_not_provided') {
      location.hash = '#login';
    }

    /** Token expired */
    if (result.status === 401 && result.responseJSON.error === 'token_expired') {
      /** Try to refresh token */
      refreshToken(
        (data) => {
          console.log('Token refresh: ', data);
        },
        (data) => {
          console.log('user:token:refresh', data);
        }
      );
    }
  }

  componentDidMount() {
    this.popups(this.props);

    // If popup closed - navigate to /
    subscribe('popup:closed', () => {
      if (this.popupsHashes.indexOf(this.props.router.location.hash) !== -1) {
        this.props.router.push(this.props.router.location.pathname);
      }
    });

    subscribe('api:request:begin', this.apiRequestBegin.bind(this));
    subscribe('api:request:end', this.apiRequestEnd.bind(this));
  }

  componentWillUnmount() {
    unsubscribe('api:request:begin', this.apiRequestBegin);
    unsubscribe('api:request:end', this.apiRequestEnd);
  }

  componentWillReceiveProps(props) {
    this.popups(props);
  }

  popups(props) {
    let exists = false;
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

      case '#register/terms-of-use':
        dispatch('popup:show', {
          title: 'Nutzungsbedingungenakzeptieren',
          body: this.termsOfUse
        });
      break;

      default:
        dispatch('popup:close');
      break;
    }
  }

  render() {
    this.initDialogs();

    return (
      <div class={classNames({ loading: this.state.pageLoading })}>
        <UI.Popup />
        <Partials.Header />
        <Partials.Content children={this.props.children} />
        <Partials.Footer />
      </div>
    );
  }
}
