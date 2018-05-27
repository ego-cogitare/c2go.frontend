import React from 'react';

export default class Interest extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const id = 'interest-'.concat(this.props.id);
    return (
      <div class="item">
        <input type="checkbox" id={id} onChange={(e) => this.props.onCheckedChange && this.props.onCheckedChange(this.props.id, e.target.checked)} />
        <label for={id}>{this.props.title}</label>
        <div class="picture" style={{ backgroundImage: `url('${this.props.picture}')` }}>
          <div class="overlay"></div>
        </div>
      </div>
    );
  }
}
