import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import Autocomplete from 'react-autocomplete';
import Partials from '../partials';
import SVG from '../svg';
import { eventAddAutocomplete, eventAddGeneral } from '../../../actions';

export default class Description extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      description: '',
      url: '',
      keyword: '',
      autocompleteItems: [],

      /** Selected item in autocomplete list */
      autocompleteItem: null,

      /** Next step url. If user select item from autocomplete list (means
       * select existing event) - next two steps should be skipped
       */
      nextStep: '/event-add/categories',

      errors: {}
    };
  }

  onDescriptionChange(description) {
    this.setState({ description });
  }

  onUrlChange(e) {
    this.setState({ url: e.target.value });
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
          ({ id,
             date,
             name,
             event_location_human: location
          }) =>
          ({ id,
             label: date + ', ' + name + ', ' + location
          })
        )
      }),
      (e) => console.error(e),
    );
  }

  onAutocompleteSelect(keyword, item) {
    this.setState({
      keyword,
      autocompleteItem: item,
      nextStep: '/event-add/tickets-bought'
    });
  }

  onNextStep(e) {
    e.preventDefault();

    eventAddGeneral(
      $(e.target).serialize(),
      (r) => console.log(r),
      (e) => this.setState({ errors: e.responseJSON.errors })
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
        <form action={this.state.nextStep} onSubmit={this.onNextStep.bind(this)}>
          <div class="form clear">
            <div class="form-controll text-left">
              <Autocomplete
                wrapperStyle={{ 'display': 'block' }}
                inputProps={{ className: 'input', placeholder: 'Titel', name: 'title' }}
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
                onSelect={this.onAutocompleteSelect.bind(this)}
              />
            <small class="error left">{(this.state.errors.title || []).join()}</small>
            </div>
            <div class="form-controll">
              <Partials.Textarea
                label="Eventbeschreibung"
                maxLength="120"
                onChange={this.onDescriptionChange.bind(this)}
                error={(this.state.errors.description || []).join()}
                inputProps={{ name: 'description' }}
              />
            </div>
            <div class="form-controll">
              <input
                type="text"
                name="url"
                class="input"
                name="url"
                value={this.state.url}
                onChange={this.onUrlChange.bind(this)}
                placeholder="URL"
              />
            <small class="error left">{(this.state.errors.url || []).join()}</small>
            </div>
            <input type="hidden" name="event_id" value={(this.state.autocompleteItem || {}).id} />
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
