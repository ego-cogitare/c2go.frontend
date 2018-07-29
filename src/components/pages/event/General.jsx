import React from 'react';
import { Link } from 'react-router';
import Partials from '../partials';
import { general } from '../../../actions';

export default class General extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      event: {},
      user: {}
    };
  }

  componentDidMount() {
    general(
      { proposal: this.props.params.proposal },
      ({ data }) => this.setState({ ...data }),
      (e) => console.error(e)
    );
  }

  render() {
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
              <div class="heading-2">{this.state.user.first_name || this.state.user.last_name} hat eine Sehbehinderung und benötigt Hilfe bei…</div>
              <br/>
              <div class="text">Orientierungshilfe in vollen oder hektischen Umgebungen.</div>
              <br/>
              <br/>
              <div class="heading-2">Generelle Infos</div>
              <br/>
              <div class="text">Treffpunkt 20h. An der Bushaltestelle "Am roten Graben".</div>
              <br/>
              <br/>
              <div class="buttons clear">
                <Link to={`/event/${this.props.params.proposal}/request`} class="next violet-button">
                  Weiter
                </Link>
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
