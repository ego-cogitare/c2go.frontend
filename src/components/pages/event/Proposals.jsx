import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import Partials from '../partials';
import { proposals } from '../../../actions';

export default class Proposals extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      category: {},
      proposals: []
    };
  }

  componentDidMount() {
    proposals(
      { event: this.props.params.event },
      ({ data }) => this.setState({ ...data }, () => console.log(this.state)),
      (e) => console.error(e)
    );
  }

  render() {
    return (
      <div class="event-proposals">
        <Partials.EventCover
          category={this.state.category}
          title={this.state.name}
        />
        <div class="proposals-wrapper clear">
          <svg xmlns="http://www.w3.org/2000/svg" class="curtain" viewBox="0 0 1919 373">
            <path fill="#ffffff" stroke="none"
              d="M 1919.00,0.00
                 C 1919.00,0.00 1919.00,337.00 1919.00,337.00
                   1919.00,337.00 1894.00,316.43 1894.00,316.43
                   1894.00,316.43 1870.00,297.20 1870.00,297.20
                   1870.00,297.20 1841.00,274.43 1841.00,274.43
                   1806.68,249.90 1763.13,230.17 1723.00,217.34
                   1686.40,205.65 1637.34,196.94 1599.00,192.84
                   1571.10,189.85 1543.07,187.04 1515.00,187.00
                   1515.00,187.00 1498.00,186.00 1498.00,186.00
                   1498.00,186.00 1473.00,186.00 1473.00,186.00
                   1473.00,186.00 1461.00,186.96 1461.00,186.96
                   1461.00,186.96 1448.00,186.96 1448.00,186.96
                   1448.00,186.96 1423.00,188.91 1423.00,188.91
                   1388.48,191.27 1354.34,195.20 1320.00,199.72
                   1320.00,199.72 1274.00,206.25 1274.00,206.25
                   1274.00,206.25 1164.00,229.35 1164.00,229.35
                   1164.00,229.35 1106.00,242.88 1106.00,242.88
                   1106.00,242.88 923.00,294.57 923.00,294.57
                   923.00,294.57 868.00,307.88 868.00,307.88
                   868.00,307.88 794.00,325.88 794.00,325.88
                   757.13,334.63 720.30,344.85 683.00,351.58
                   645.62,358.32 607.82,362.50 570.00,365.09
                   570.00,365.09 547.00,367.00 547.00,367.00
                   547.00,367.00 538.00,367.00 538.00,367.00
                   538.00,367.00 526.00,368.00 526.00,368.00
                   526.00,368.00 449.00,368.00 449.00,368.00
                   449.00,368.00 439.00,367.00 439.00,367.00
                   439.00,367.00 431.00,367.00 431.00,367.00
                   431.00,367.00 374.00,361.17 374.00,361.17
                   374.00,361.17 331.00,356.72 331.00,356.72
                   252.12,346.34 167.66,323.94 96.00,289.26
                   96.00,289.26 23.00,252.54 23.00,252.54
                   18.11,249.89 3.59,243.04 1.17,238.82
                   -0.22,236.37 0.00,232.76 0.00,230.00
                   0.00,230.00 0.00,0.00 0.00,0.00
                   0.00,0.00 1919.00,0.00 1919.00,0.00 Z" />
          </svg>
          <div class="proposals-section single-category swiper-container _events-slider">
            <div class="heading-1">{this.state.destination}, {this.state.date}</div>
            <div class="proposals swiper-wrapper clear">
              { this.state.proposals.map((data, key) => <Partials.Proposal key={key} data={data} />) }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
