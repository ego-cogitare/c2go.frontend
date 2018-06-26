import React from 'react';
import SVG from '../svg';
import Interest from './Interest.jsx';
import { categories } from '../../../actions';

export default class Interests extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      interests: []
    };

    categories(
      ({ data }) => {
        this.setState({ categories: data });
      },
      (e) => console.log(e)
    );
  }

  get selectedItems() {
    return this.state.interests;
  }

  onInterestChecked(id, checked) {
    /** If only one item alowed for selection */
    if (this.props.singleSelect) {
      this.state.interests = [];
      this.state.categories.map(
        ({categories}) => categories.map(
          (category) => Object.assign(category, { checked: id === category.id })
        )
      );
    }

    if (checked) {
      this.state.interests.indexOf(id) === -1 && this.state.interests.push(id);
    } else {
      this.state.interests = this.state.interests.filter((itemId) => itemId !== id);
    }
    this.setState({ interests: this.state.interests });
  }

  render() {
    return (
      <div class="registration-interests">
        { this.props.title && <p class="heading-3">{this.props.title}</p> }
        { this.props.description && <p class="text">{this.props.description}</p> }
        <div class="sections">
        {
          this.state.categories.map(({ id, name, color, cover_photo, categories: subcategories }) => (
            <div key={id} class="section clear" style={{ backgroundColor: color }}>
              <div class="cover" style={{ backgroundImage: `url('${config.staticFiles}/${cover_photo}')` }}>
                <div class="gradient" style={{ background: `linear-gradient(to right, transparent, ${color})` }}></div>
              </div>
              <div class="label left">
                <span>{name}</span>
                <SVG.InterestsLabel color={color} />
              </div>
              <div class="items left clear">
              {
                subcategories.map((model, i) => (
                  <Interest
                    key={i}
                    model={model}
                    onCheckedChange={(id, state) => this.onInterestChecked(id, state)}
                  />
                ))
              }
              </div>
            </div>
          ))
        }
        </div>
        { this.props.children }
      </div>
    );
  }
}
