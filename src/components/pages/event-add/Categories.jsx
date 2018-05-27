import React from 'react';
import { Link } from 'react-router';
import SVG from '../svg';
import { categories } from '../../../actions';

export default class Categories extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      categories: []
    };

    categories(
      ({ data }) => this.setState({ categories: data }),
      (e) => console.log(e)
    );
  }

  render() {
    return (
      <div class="registration-interests">
        <div class="heading-3">Event erstellen – Schritt 1</div>
        <p class="text">Lade ein Profilbild hoch um deine Chancen auf ein erfolgreiches Match zu erhöhen</p>
        <div class="sections">
          {
            this.state.categories.map(({ id, name, color, cover_photo }) => (
              <Link to={`/event-add/${id}`} key={id} class="section clear" style={{ backgroundColor: color, display: 'block' }}>
                <div class="cover" style={{ backgroundImage: `url('${config.staticFiles}/${cover_photo}')` }}>
                  <div class="gradient" style={{ background: `linear-gradient(to right, transparent, ${color})` }}></div>
                </div>
                <div class="label left">
                  <span>{name}</span>
                  <SVG.InterestsLabel color={color} />
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    );
  }
}
