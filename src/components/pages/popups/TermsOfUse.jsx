import React from 'react';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';
import { register as registerEmail } from '../../../actions';
import User from '../../../core/helpers/User';

export default class TermsOfUse extends React.Component {

  constructor(props) {
    super(props);
  }

  redirectToBegin() {
    location.hash = 'register';
  }

  getRegData() {
    try {
      const regData = JSON.parse(localStorage.getItem('regData'));
      if (regData) {
        return regData;
      }
      else {
        this.redirectToBegin();
      }
    }
    catch (e) {
      this.redirectToBegin();
    }
    return {};
  }

  componentDidMount() {
    this.getRegData();
  }

  doRegister(e) {
    e.preventDefault();

    // Get registering user data
    const regData = this.getRegData();

    switch (regData.method)
    {
      case 'email':
        this.doRegisterViaEmail(regData);
      break;

      case 'facebook':
        console.log('Register via facebook');
      break;

      case 'google':
        console.log('Register via google');
      break;

      default:
        this.redirectToBegin();
      break;
    }
  }

  doRegisterViaEmail(regData) {
    registerEmail(
      regData,
      ({ token, user }) => {
        localStorage.removeItem('regData');
        User.beginSession({ token, user });
      },
      () => location.hash = 'register/email'
    );
  }

  render() {
    return (
      <div class="registration-agreements">
        <p>
          Philosophy is considered a science but it is difficult to say, when one
          has to compare with an ordinary science, for example biology, or chemistry.
          This is a question that turns into a burning problem among the scientists
          and linguists all over the world. Can philosophy be a science? What does
          philosophy operate with? It operates with categories, which can be as wide
          and as interchangeable as one can only imagine. Ordinary science operates
          with definitions, which are quite limited in their field of research.
          Ordinary science uses terms and laws of that very science to continue the
          research, uniting with the others in very rare cases. Philosophy gets into
          the sense of every science trying to achieve results.
        </p>
        <p>
          It is of course, not easy, but gives credit for you if you get interested
          and somewhere, being at the social event you quote one of the famous doctors
          of philosophy and make a great impression of an educated and intelligent
          personality.
        </p>
        <div class="buttons clear">
          <input type="checkbox" style={{display:'block'}} />
          <a href="#" class="violet-button" onClick={this.doRegister.bind(this)}>Registrieren</a>
        </div>
      </div>
    );
  }
}
