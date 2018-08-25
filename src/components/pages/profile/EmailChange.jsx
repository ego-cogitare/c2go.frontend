import React from 'react';
import classNames from 'classnames';
import { Link, browserHistory } from 'react-router';
import { profileChangeEmail } from '../../../actions';

export default class EmailChange extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      message: 'What while your email is changing',
      isError: false
    };

    profileChangeEmail(
      { hash: this.props.params.hash },
      ({ data }) => this.setState({ message: `Email changed to ${data.email}` }),
      ({ responseJSON }) => this.setState({ isError: true, message: responseJSON.message })
    );
  }

  render() {
    return (
      <div class="wrapper">
        <br/>
        <br/>
        <div class="heading-2">E-Mail-Änderung</div>
        <br/>
        <p class={classNames('text', { 'color-red': this.state.isError })}>{ this.state.message }</p>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}
