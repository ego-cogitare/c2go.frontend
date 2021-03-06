import React from 'react';
import { Link } from 'react-router';
import Partials from '../partials';
import Popups from '../popups';
import { general, storeRequest } from '../../../actions';
import { dispatch } from '../../../core/helpers/EventEmitter';

export default class EventRequest extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      event: {},
      user: {},
      error: ''
    };
  }

  componentDidMount() {
    general(
      { proposal: this.props.params.proposal },
      ({ data }) => this.setState({ ...data }),
      (e) => console.error(e)
    );
  }

  postRequest(e) {
    const textarea = this.refs.message.refs.textarea;
    this.setState({ error: '' });

    storeRequest(
      { message: textarea.value,
        proposal: this.props.params.proposal
      },
      (r) => {
        dispatch('popup:show', {
          title: 'Bestätigung – Anfrage versandt',
          body: this.requestComplete
        });
        this.refs.message.reset();
      },
      ({ responseJSON: { errors } }) => {
        const error = (errors.message || errors.event_proposals_id || []).pop();
        this.setState({ error });
      }
    );
  }

  initDialogs() {
    this.requestComplete = <Popups.RequestComplete proposal={this.props.params.proposal} />;
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
              <hr className="line"/>
              <div>
                  *Der Betrag wird nur abgebucht, wenn dein Companion euer Match bestätigt.
              </div>
              <div>
                <label>
                    <Partials.Input type="checkbox"/>
                    Ich erkläre mich mit den Datenschutzbestimmungen einverstanden
                </label>
              </div>
              <div>
                  <label>
                      <Partials.Input type="checkbox"/>
                      Ich erkläre mich mit den AGB einverstanden
                  </label>
              </div>
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
