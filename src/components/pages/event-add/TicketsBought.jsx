import React from 'react';
import { Link, browserHistory } from 'react-router';
import Partials from '../partials';
import { progress } from '../../../actions';

export default class TicketBought extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      ticketsBought: false
    };
  }

  render() {
    return (
      <div class="wrapper-small text-center adjustments-004">
        <div class="heading-2">
          Hast du schon ein Ticket?
        </div>
        <p class="text">
          Roman chamomile is mainly grown in England, and there are some areas in continental
          Europe and the United States that also distill the oil. In 1785, Carlo Allioni, an
          Italian botanist, placed what we know as Roman chamomile.
        </p>
        <div class="form text-left">
          <div class="form-controll text-center">
            <div class="row">
              <input id="yes" ref="yes" type="radio" name="tickets-bought" />
              <label for="yes" onClick={() => {
                this.setState({ ticketsBought: true });
              }}>
                <span>Ja</span>
              </label>
            </div>
            <div class="row">
              <input id="no" ref="no" type="radio" name="tickets-bought" />
              <label for="no" onClick={() => {
                this.setState({ ticketsBought: false });
              }}>
                <span>Nein</span>
              </label>
            </div>
          </div>
          { this.state.ticketsBought &&
            <div class="form-controll">
              <input type="text" class="input" ref="price" placeholder="Preis" autoFocus />
            </div>
          }
        </div>
        <div class="buttons">
          <Link to={`/event-add/meeting-point`} className="button violet-button">Weiter</Link>
          <a href="#" class="button default-button">Überspringen</a>
        </div>
      </div>
    );
  }
}
