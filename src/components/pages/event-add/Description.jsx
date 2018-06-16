import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import Autocomplete from 'react-autocomplete';
import Partials from '../partials';
import SVG from '../svg';
import { eventAddAutocomplete } from '../../../actions';

export default class Description extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      description: '',
      url: '',
      keyword: '',
      autocompleteItems: []
    };
  }

  onDescriptionChange(description) {
    this.setState({ description });
  }

  onUrlChange(url) {
    this.setState({ onUrlChange });
  }

  onKeywordChange(e) {
    const keyword = e.target.value;

    this.setState({ keyword });

    if (keyword.length < 2) {
      this.setState({ autocompleteItems: [] });
      return;
    }

    eventAddAutocomplete({ keyword },
      (r) => this.setState({
        autocompleteItems: r.data.map(
          ({ date, name, event_location_human: location }) => ({ label: date + ', ' + name + ', ' + location })
        )
      }),
      (e) => console.error(e),
    );
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
          <div class="form-controll text-left">
            <Autocomplete
              wrapperStyle={{ 'display': 'block' }}
              inputProps={{ className: 'input', placeholder: 'Titel' }}
              renderMenu={(items, value, style) => {
                return <div class="dropdown wauto" style={{ ...style }} children={items} />
              }}
              //shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
              getItemValue={(item) => item.label}
              items={this.state.autocompleteItems || []}
              renderItem={(item, isHighlighted) =>
                <div class="item" style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                  <a>{item.label}</a>
                </div>
              }
              value={this.state.keyword}
              onChange={this.onKeywordChange.bind(this)}
              onSelect={(keyword) => this.setState({ keyword }) }
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
          <Link to={`/event-add/categories`} className="button violet-button">Weiter</Link>
          <Link to={``} className="button default-button">Überspringen</Link>
        </div>
      </div>
    );
  }
}
