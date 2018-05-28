import React from 'react';
import classNames from 'classnames';
import { dispatch, subscribe } from '../helpers/EventEmitter';

export default class Popup extends React.Component {

  constructor(props) {
    super(props);

    this.state = { popup: null };

    subscribe('popup:show', (payload) => {
      this.setState({
        popup: Object.assign({}, this.initialState, payload)
      });
    });

    subscribe('popup:close', () => this.closePopup());
  }

  closePopup() {
    // Close animation
    $(this.refs['popup']).removeClass('opened');
    setTimeout(() => this.setState({ popup: null }, () => dispatch('popup:closed')), 300);
  }

  get initialState() {
    return {
      title: '',
      display: 'none',
      body: function() {
        return null;
      }
    };
  }

  render() {
    if (!this.state.popup) {
      return null;
    }

    // Get class name if defined
    const className = this.state.popup.body && this.state.popup.body.props
      ? this.state.popup.body.props.className
      : null;

    return (
      <div class="popup-wrapper opened" ref="popup">
        <div class={classNames('popup', className)}>
          <i class="close" onClick={this.closePopup.bind(this)}></i>
          <div class="heading-2">
            { this.state.popup.title }
          </div>
          { this.state.popup.body }
        </div>
      </div>
    );
  }
}
