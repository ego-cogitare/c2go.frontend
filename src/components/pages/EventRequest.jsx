import React from 'react';
import { Link } from 'react-router';
import Partials from './partials';
import Popups from './popups';
import { general } from '../../actions';
import { dispatch } from '../../core/helpers/EventEmitter';

export default class EventRequest extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      event: {},
      user: {}
    };
  }

  componentDidMount() {
    general(
      { ...this.props.params },
      ({ data }) => this.setState({ ...data }),
      (e) => console.error(e)
    );
  }

  postRequest(e) {
    const textarea = this.refs.message.refs.textarea;

    dispatch('popup:show', {
      title: 'Bestätigung – Anfrage versandt',
      body: this.requestComplete
    });

    console.log(textarea.value);

    this.refs.message.reset();
  }

  initDialogs() {
   this.requestComplete = <Popups.RequestComplete />;
  }

  render() {
    this.initDialogs();

    return (
      <div class="event-proposals">
        <Partials.EventCover
          category={this.state.event.category || {}}
          title={this.state.event.name}
        />
        <div class="proposals-wrapper clear" style={{ backgroundColor: '#ffffff' }}>
          <div class="wrapper">
            <div class="event-general">
              <div class="heading-2">{this.state.event.event_location_human}</div>
              <br/>
              <div class="heading-2">{this.state.event.date}</div>
              <br/>
              <div class="heading-2">{this.state.price}€</div>
              <br/>
              <br/>
              <br/>
              <Partials.Textarea
                label={`Persönliche Nachricht an ${this.state.user.first_name || this.state.user.last_name}`}
                maxLength="120"
                ref="message"
              />
              <div class="buttons clear">
                <div class="next violet-button" onClick={this.postRequest.bind(this)}>
                  Weiter
                </div>
                <Link to="/" class="cancel">
                  Abbrechen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
