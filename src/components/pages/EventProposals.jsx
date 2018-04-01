import React from 'react';
import { Link } from 'react-router';
import Partials from './partials';
import classNames from 'classnames';
import { event } from '../../actions';

export default class EventProposals extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      category: {},
      proposals: []
      // event: {
      //   color: 'red',
      //   category: 'Kino',
      //   name: 'Blade Runner 2049',
      //   cover_photo: 'http://c2go.com/storage/cover-photos/a1ruEuOoRbaM5xRKGOROhJQ3IwFyRM9GKnS9KeFX.jpeg',
      //   users: [
      //     {
      //       first_name: 'Alex',
      //       last_name: 'Bogish',
      //       age: 30,
      //       rank: 4,
      //       price: 16,
      //       cover_photo: 'http://c2go.com/storage/cover-photos/a1ruEuOoRbaM5xRKGOROhJQ3IwFyRM9GKnS9KeFX.jpeg'
      //     },
      //     {
      //       first_name: 'Anna',
      //       last_name: 'Bogish',
      //       age: 28,
      //       rank: 5,
      //       price: 15,
      //       cover_photo: 'http://c2go.com/storage/cover-photos/a1ruEuOoRbaM5xRKGOROhJQ3IwFyRM9GKnS9KeFX.jpeg'
      //     },
      //   ]
      // }
    };
  }

  componentDidMount() {
    event(
      { id: this.props.params.id },
      ({ data }) => this.setState({ ...data }, () => console.log(this.state)),
      (e) => console.error(e)
    );
  }

  render() {
    return (
      <div class="event-proposals">
        <div class="cover" style={{ backgroundImage: `url('${config.staticFiles}/${this.state.category.cover_photo}')` }}>
          <div class="label" data-label={this.state.category.name}>
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="83" viewBox="0 0 441 182">
              <path fill={this.state.category.color} stroke="none"
                    d="M 0.00,27.00
                       C 0.00,24.46 -0.13,21.40 0.72,19.00
                         2.85,13.06 14.10,2.69 20.00,0.70
                         22.44,-0.12 25.43,0.00 28.00,0.00
                         28.00,0.00 185.00,0.00 185.00,0.00
                         192.86,0.10 198.74,1.95 206.00,4.68
                         208.74,5.72 214.44,8.72 217.00,8.48
                         220.86,8.10 223.28,4.03 226.28,2.01
                         229.67,-0.27 233.12,0.01 237.00,0.00
                         237.00,0.00 440.00,0.00 440.00,0.00
                         439.98,7.73 438.68,16.75 435.94,24.00
                         434.01,29.10 430.08,36.79 426.69,41.00
                         421.80,47.07 412.06,56.46 405.00,59.65
                         390.05,66.40 367.06,64.19 351.00,63.00
                         351.00,63.00 342.00,63.00 342.00,63.00
                         342.00,63.00 332.00,62.00 332.00,62.00
                         331.21,71.65 327.51,84.32 323.24,93.00
                         318.85,101.93 314.08,110.88 306.99,117.99
                         286.49,138.52 262.70,142.04 235.00,142.00
                         222.73,141.98 206.95,137.75 195.00,134.42
                         195.00,134.42 172.00,127.14 172.00,127.14
                         172.00,127.14 121.00,106.20 121.00,106.20
                         117.15,104.66 103.20,98.44 100.00,98.76
                         96.64,99.09 93.47,102.58 91.00,104.72
                         91.00,104.72 70.00,124.00 70.00,124.00
                         70.00,124.00 45.00,146.16 45.00,146.16
                         31.33,158.37 16.19,172.34 0.00,181.00
                         0.00,181.00 0.00,27.00 0.00,27.00 Z" />
            </svg>
          </div>
          <div class="title">
            { this.state.category.name }
          </div>
        </div>
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
            <div class="heading-1">Frankfurt, im Metropolis 12.11.17</div>
            <div class="proposals swiper-wrapper clear">
              {
                this.state.proposals.map(( user, key ) => {
                  return (
                    <Partials.Proposal key={key} user={user} />
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
