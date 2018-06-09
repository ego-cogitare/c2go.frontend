import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import Partials from '../partials';
import SVG from '../svg';
import { categories } from '../../../actions';

export default class Description extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      url: ''
    };
  }

  onTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  onDescriptionChange(description) {
    this.setState({ description });
  }

  onUrlChange(url) {
    this.setState({ onUrlChange });
  }

  render() {
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
            <input type="text"
                   ref="date"
                   class="input"
                   name="date"
                   value={this.state.title}
                   onChange={this.onTitleChange.bind(this)}
                   placeholder="Titel"
           />
          </div>
          <div class="form-controll">
            <Partials.Textarea
              label="Eventbeschreibung"
              maxLength="120"
              onChange={this.onDescriptionChange.bind(this)}
              error={this.state.descriptioinError}
            />
          </div>
          <div class="form-controll">
            <input type="text"
                   ref="url"
                   class="input"
                   name="url"
                   value={this.state.url}
                   onChange={this.onUrlChange.bind(this)}
                   placeholder="URL"
           />
          </div>
        </div>
        <div class="buttons">
          <Link to={`/event-add/date-place`} className="button violet-button">Weiter</Link>
          <Link to={``} className="button default-button">Überspringen</Link>
        </div>
      </div>
    );
  }
}
