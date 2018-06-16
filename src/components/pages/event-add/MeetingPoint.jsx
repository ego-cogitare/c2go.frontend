import React from 'react';
import { Link } from 'react-router';
import Partials from '../partials';
import Popups from '../popups';
import { dispatch } from '../../../core/helpers/EventEmitter';

export default class MeetingPoint extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      telephone: '',
      meetingPoint: '',
      telephoneError: '',
      meetingPointError: '',
    };
  }

  eventAdd() {
    dispatch('popup:show', { title: 'Bestätigung – Erfolgreich registriert', body: this.regComplete });
  }

  initDialogs() {
   this.regComplete = <Popups.RegComplete />;
  }

  onTelephoneChange(telephone) {
    this.setState({ telephone }, () => console.log(this.state.telephone));
  }

  onMeetingPointChange(meetingPoint) {
    this.setState({ meetingPoint });
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
        <div class="form clear">
          <div class="form-controll">
            <Partials.Input
              maxLength="13"
              onChange={this.onTelephoneChange.bind(this)}
              placeholder="Telefon"
              error={this.state.telephoneError}
            />
          </div>
          <div class="form-controll">
            <Partials.Textarea
              label="Treffpunkt"
              maxLength="120"
              onChange={this.onMeetingPointChange.bind(this)}
              error={this.state.meetingPointError}
            />
          </div>
        </div>
        <div class="buttons">
          <Link className="button violet-button" onClick={this.eventAdd.bind(this)}>Weiter</Link>
          <Link to={``} className="button default-button">Überspringen</Link>
        </div>
      </div>
    );
  }
}
