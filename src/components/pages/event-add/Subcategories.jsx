import React from 'react';
import { Link } from 'react-router';
import Partials from '../partials';
import SVG from '../svg';
import Popups from '../popups';
import { category } from '../../../actions';

export default class Subcategories extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      category: {}
    };

    category(
      { category: this.props.params.category },
      ({ data }) => this.setState({ category: data }),
      (e) => console.log(e)
    );
  }

  render() {
    return (
      <div class="registration-interests">
        <div class="heading-3">Event erstellen – Schritt 1</div>
        <p class="text">Lade ein Profilbild hoch um deine Chancen auf ein erfolgreiches Match zu erhöhen</p>
        <div class="sections">
          <div key={this.state.category.id} class="section clear" style={{ backgroundColor: this.state.category.color }}>
            <div class="cover" style={{ backgroundImage: `url('${config.staticFiles}/${this.state.category.cover_photo}')` }}>
              <div class="gradient" style={{ background: `linear-gradient(to right, transparent, ${this.state.category.color})` }}></div>
            </div>
            <div class="label left">
              <span>{this.state.category.name}</span>
              <SVG.InterestsLabel color={this.state.category.color} />
            </div>
            <div class="items left clear">
            {
              (this.state.category.categories || []).map(({ id, name, cover_photo }) => (
                <Link to={`/event-add/${this.state.category.id}/${id}/name`} key={id} class="item">
                  <label>{name}</label>
                  <div class="picture" style={{ backgroundImage: `url('${config.staticFiles}/${cover_photo}')` }}>
                    <div class="overlay"></div>
                  </div>
                </Link>
              ))
            }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
