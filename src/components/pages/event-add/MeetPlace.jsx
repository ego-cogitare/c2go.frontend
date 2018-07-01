import React from 'react';
import { Link, browserHistory } from 'react-router';
import classNames from 'classnames';
import Partials from '../partials';
import Popups from '../popups';
import { dispatch, subscribe } from '../../../core/helpers/EventEmitter';
import { eventAdd } from '../../../actions';
import User from '../../../core/helpers/User';

export default class MeetPlace extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      telephone: User.phone,
      meet_place: '',
      errors: {},
    };
  }

  eventAdd(e) {
    e.preventDefault();

    /** Reset old errors */
    this.setState({ errors: {} });

    /** @var Object event */
    const event = JSON.parse(localStorage.getItem('event') || '{}');

    /** Get user input */
    const { telephone, meet_place } = this.state;

    eventAdd(
      /** Collect all event data */
      Object.assign(event, { telephone, meet_place }),

      ({ data }) => {
        /** Remove added event stored data */
        //localStorage.removeItem('event');

        dispatch('popup:show', {
          title: 'Bestätigung – Erfolgreich registriert',
          body: this.regComplete
        });
      },
      (e) => this.setState({ errors: e.responseJSON.errors })
    );
  }

  initDialogs() {
   this.regComplete = <Popups.RegComplete />;
  }

  onTelephoneChange(telephone) {
    this.setState({ telephone });
  }

  onMeetPlaceChange(value) {
    this.setState({ meet_place: value });
  }

  render() {
    this.initDialogs();

    return (
      <div class="wrapper-small text-center">
        <div class="heading-2">
          Event erstellen – Schritt 1
        </div>
        <p class="text">
          Bitte gib hier weitere Informationen zu deiner Reise an, um deine Chance auf einen Companion zu erhöhen
        </p>
        <form action="" onSubmit={this.eventAdd.bind(this)}>
          <div class="form clear">
            <div class={classNames('form-controll', { hidden: User.phone !== '' })}>
              <Partials.Input
                maxLength="15"
                onChange={this.onTelephoneChange.bind(this)}
                placeholder="Telefon"
                value={this.state.telephone}
                error={(this.state.errors.telephone || []).join()}
              />
            </div>
            <div class="form-controll">
              <Partials.Textarea
                label="Treffpunkt"
                maxLength="120"
                onChange={this.onMeetPlaceChange.bind(this)}
                error={(this.state.errors.meet_place || []).join()}
              />
            </div>
          </div>
          <div class="buttons">
            <button type="submit" className="button violet-button">Weiter</button>
            <Link to={``} className="button default-button">Überspringen</Link>
          </div>
        </form>
      </div>
    );
  }
}
