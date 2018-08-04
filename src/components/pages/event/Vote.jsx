import React from 'react';
import { Link, browserHistory } from 'react-router';
import Partials from '../partials';
import User from '../../../core/helpers/User';
import { eventsVisited, vote } from '../../../actions';
import { profilePhoto } from '../../../core/helpers/Utils';

export default class Vote extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      visited: [],
      mark: 0
    };

    /** Get future events list */
    eventsVisited(
      ({ data }) => this.setState({ visited: data }),
      (error) => console.error(error)
    );
  }

  sendVote() {
    vote({ requestId: this.props.params.request, mark: this.state.mark },
      (r) => browserHistory.push(`/event/history`),
      (e) => console.error(e)
    );
  }

  isDefaultProfile() {
    return Number(User.profileType) === 2;
  }

  render() {
    return (
      <div class="wrapper-small text-center event-review">
        <div class="heading-2">
          Gesamteindruck
        </div>
        <p class="text">
          Stocking A Commercial Kitchen Finding High Quality Cookware Online Stocking A Commercial Kitchen Finding High Quality Cookware Online
        </p>
        <Partials.Rating
          type=""
          onChange={(mark) => this.setState({ mark })}
        />
        <div class="buttons">
          <a href="#" class="button violet-button" onClick={this.sendVote.bind(this)}>Weiter</a>
          <Link to={`/event/history`} class="button default-button">Abbrechen</Link>
        </div>
      </div>
    );
  }
}
