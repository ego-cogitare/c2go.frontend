import React from 'react';
import { Link, browserHistory } from 'react-router';
import Partials from '../partials';
import { progress, eventAddTickets } from '../../../actions';

export default class TicketBought extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      ticketsBought: 0,
      price: '',
      nextStep: '/event-add/meet-place',
      errors: {}
    };
  }

  onNextStep(e) {
    e.preventDefault();

    /** @var Object event */
    const event = JSON.parse(localStorage.getItem('event') || '{}');

    eventAddTickets(
      { bought: this.state.ticketsBought, price: this.state.price },
      ({ data }) => {
        browserHistory.push(this.state.nextStep);
        localStorage.setItem('event', JSON.stringify(Object.assign(event, data)));
      },
      (e) => this.setState({ errors: e.responseJSON.errors })
    );
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
        <form action={this.state.nextStep} onSubmit={this.onNextStep.bind(this)}>
          <div class="form text-left">
            <div class="form-controll text-center">
              <div class="row">
                <input id="yes" ref="yes" type="radio" name="tickets-bought" />
                <label for="yes" onClick={() => {
                  this.setState({ ticketsBought: 1 });
                }}>
                  <span>Ja</span>
                </label>
              </div>
              <div class="row">
                <input id="no" ref="no" type="radio" name="tickets-bought" />
                <label for="no" onClick={() => {
                  this.setState({ ticketsBought: 0 });
                }}>
                  <span>Nein</span>
                </label>
              </div>
            </div>
            { this.state.ticketsBought === 1 &&
              <div class="form-controll">
                <input
                  type="text"
                  class="input"
                  ref="price"
                  placeholder="Preis"
                  maxLength="7"
                  onChange={(e) => this.setState({ price: e.target.value }) }
                  autoFocus
                />
                <small class="color-red left">{(this.state.errors.price || []).join()}</small>
              </div>
            }
          </div>
          <div class="buttons">
            <button type="submit" class="button violet-button">Weiter</button>
            <a href="#" class="button default-button">Überspringen</a>
          </div>
        </form>
      </div>
    );
  }
}
