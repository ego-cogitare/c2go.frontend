import React from 'react';
import { Link } from 'react-router';
import { dispatch } from '../../../core/helpers/EventEmitter';
import SocialLogin from '../../../staticFiles/js/socialLogin';

export default class LoginSwitchDialog extends React.Component {

  loginViaFacebook(e) {
    e.preventDefault();

    /**
     * Login into facebook and get user information
     */
    SocialLogin.facebook.login(
      (response) => {
        console.info('Login success:', response);

        // Registration in portal with facebook credentials
        loginSocial(
          {
            external_id  : response.id,
            network      : 'FACEBOOK',
            email        : response.email,
            first_name   : response.first_name,
            last_name    : response.last_name,
            birth_date   : response.birth_date,
            home_address : response.home_address,
          },
          ({ token, user }) => {
            // Authorize and redirect to start page
            User.beginSession({ token, user });
            browserHistory.push('/dashboard');

            console.log('Autentication via facebook success: ', success);
          },
          (error) => {
            console.error('Autentication error:', error);
          }
        );
      },
      (error) => {
        console.error('Login fail:', error);
      }
    );
  }

  loginViaGooglePlus(e) {
    e.preventDefault();

    SocialLogin.googlePlus.login(
      (response) => {
        console.info('Login success:', response);
        dispatch('popup:close');
        // loginSocial(
        //   {
        //     externalId : response.result.names[0].metadata.source.id,
        //     email      : response.result.emailAddresses[0].value,
        //     firstName  : response.result.names[0].familyName,
        //     lastName   : response.result.names[0].givenName,
        //     network    : 'GOOGLE_PLUS'
        //   },
        //   () => {
        //     console.log('Login success');
        //   },
        //   (error) => {
        //     console.error(error);
        //   }
        // );
      },
      (error) => {
        console.error('Login fail:', error);
        this.setError("Google connection failed");
      }
    );
  }

  render() {
    return (
      <div class="registration-switch">
        <div class="register-options">
          <a href="#" class="btn facebook" onClick={this.loginViaFacebook.bind(this)}>
            Mit Facebook anmelden
          </a>
          <a href="#" class="btn google" onClick={this.loginViaGooglePlus.bind(this)}>
            Mit Google anmelden
          </a>
          <a href="#login/email" class="violet-button email">Mit E-Mail-Adresse</a>
        </div>
          <br/>
          <br/>
          <a href="#register" className="violet-button email">Register</a>
      </div>
    );
  }
}
