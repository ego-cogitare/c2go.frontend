import React from 'react';
import { Link } from 'react-router';
import Partials from './partials';
import Popups from './popups';
import { general, storeRequest } from '../../actions';
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
    this.setState({ error: '' });

    storeRequest(
      { message: textarea.value,
        user: this.state.user_id,
        event: this.state.event_id
      },
      (r) => {
        dispatch('popup:show', {
          title: 'Bestätigung – Anfrage versandt',
          body: this.requestComplete
        });
        this.refs.message.reset();
      },
      (e) => this.setState({ error: e.responseJSON.message })
    );
  }

  initDialogs() {
   this.requestComplete = <Popups.RequestComplete eventId={this.state.event_id} userId={this.state.user_id} />;
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
              <div class="heading-2">{this.state.event.destination}</div>
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
                error={this.state.error}
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
