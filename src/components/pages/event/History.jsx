import React from 'react';
import { Link } from 'react-router';
import Partials from '../partials';
import User from '../../../core/helpers/User';
import { eventsVisited } from '../../../actions';
import { profilePhoto } from '../../../core/helpers/Utils';

export default class History extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      visited: [],
    };

    /** Get future events list */
    eventsVisited(
      ({ data }) => this.setState({ visited: data }),
      (error) => console.error(error)
    );
  }

  isDefaultProfile() {
    return Number(User.profileType) === 2;
  }

  render() {
    return (
        <div class="dashboard">
          <div class="wrapper events-list clear">
            <div class="current w100p">
              <br/>
              <br/>
              <div class="heading-2">Veranstaltungen besuchen</div>
              <br/>
              { this.state.visited.length > 0 ?
                this.state.visited.map(({ request_id: id, request_id, date, name, message, requestor, state, proposal }, key) => {
                  return (
                    this.isDefaultProfile() ?
                      <Partials.Invitation
                        key={key}
                        state={state}
                        date={date}
                        title={name}
                        message={requestor.reviews.length > 0
                          ? <Partials.Rating type="percentage" progress={ `${requestor.reviews[0].mark * 20 + 3}%` } />
                          : <Link to={`/event/${request_id}/vote`}>werte einen Begleiter aus</Link>
                        }
                        selected={false}
                        titleLink={`/event/${proposal.id}/details`}
                        avatarLink={`/profile/${proposal.user.id}/information`}
                        avatar={profilePhoto(proposal.user)}
                      /> :
                      <Partials.Invitation
                        key={key}
                        state={state}
                        date={date}
                        title={name}
                        message={requestor.reviews.length > 0
                          ? <Partials.Rating type="percentage" progress={ `${requestor.reviews[0].mark * 20 + 3}%` } />
                          : <Link to={`/event/${request_id}/vote`}>werte einen Begleiter aus</Link>
                        }
                        selected={false}
                        titleLink={`/event/${proposal.id}/details`}
                        avatarLink={`/profile/${requestor.id}/information`}
                        avatar={profilePhoto(requestor)}
                      />
                  );
                }) :
                <span><br/>Nothing to show</span>
              }
            </div>
          </div>
        </div>
      );
  }
}
