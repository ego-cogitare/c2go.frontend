import React from 'react';
import { Link } from 'react-router';
import Partials from './partials';
import User from '../../core/helpers/User';
import { eventRequests, upcomingEvents } from '../../actions';
import { profilePhoto } from '../../core/helpers/Utils';

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      requests: [],
      upcomings: [],
    };

    /** Get future events list */
    upcomingEvents(
      ({ data }) => this.setState({ upcomings: data }),
      (error) => console.error(error)
    );

    /** Get event request list */
    eventRequests(
      ({ data }) => this.setState({ requests: data }),
      (error) => console.error(error)
    );
  }

  isDefaultProfile() {
    return Number(User.profileType) === 2;
  }

  render() {
    return (
        // this.state.pageLoading ? null :
        <div class="dashboard">
          <div class="header">
            <div class="wrapper clear">
              <div class="avatar" style={{ backgroundImage: `url('${User.profilePhoto}')` }}></div>
              <div class="profile-actions">
                <div class="text">Profil</div>
                <div class="heading-1">{`${User.data.first_name} ${User.data.last_name}`}</div>
                <div class="buttons clear">
                  <Link to={`/event/history`} className="btn">Veranstaltungen</Link>
                  <Link to={`/profile/information`} className="btn">Bearbeiten</Link>
                </div>
              </div>
            </div>
          </div>
          <div class="wrapper events-list clear">
            <div class="current">
              <div class="title">Anfragen und Nachrichten</div>
              { this.state.requests.length > 0 ?
                this.state.requests.map(({ request_id: id, date, name, message, requestor, state, proposal }) => {
                  return (
                    this.isDefaultProfile() ?
                      <Partials.Invitation
                        key={id}
                        state={state}
                        date={date}
                        title={name}
                        message={message}
                        selected={false}
                        titleLink={`/event/${proposal.id}/details`}
                        avatarLink={`/profile/${proposal.user.id}/information`}
                        avatar={profilePhoto(proposal.user)}
                      /> :
                      <Partials.Invitation
                        key={id}
                        state={state}
                        date={date}
                        title={name}
                        message={message}
                        selected={false}
                        openLink={<Link to={`/event/requests/${id}/overview`} class="state">Offene Anfrage</Link>}
                        titleLink={`/event/${proposal.id}/details`}
                        avatarLink={`/profile/${requestor.id}/information`}
                        avatar={profilePhoto(requestor)}
                      />
                  );
                }) :
                <span><br/>Nothing to show</span>
              }
              {/*<Partials.Invitation
                title='Bitte vervollständige dein Profil'
                message='Du hast noch kein Profilbild hinterlegt'
                selected={true}
              />*/}
            </div>
            <div class="future">
              <div class="title">Deine anstehenden Events</div>
              { this.state.upcomings.length > 0 ?
                this.state.upcomings.map(({ id, date, name, destination, proposal, requestor }) => {
                  return (
                    this.isDefaultProfile() ?
                      <Partials.Invitation
                        key={id}
                        date={date}
                        title={`${name}`}
                        message={<span>Mit <Link to={`/profile/${proposal.user.id}/information`}>{proposal.user.first_name}</Link> in {destination} </span>}
                        titleLink={`/event/${proposal.id}/details`}
                        selected={false}
                      /> :
                      <Partials.Invitation
                        key={id}
                        date={date}
                        title={`${name}`}
                        message={<span>Mit <Link to={`/profile/${requestor.id}/information`}>{requestor.first_name}</Link> in {destination} </span>}
                        titleLink={`/event/${proposal.id}/details`}
                        selected={false}
                      />
                  );
                }) :
                <span><br/>Nothing to show</span>
              }
              {/*
              <Partials.Invitation
                date='20.10.2017'
                title='Bitte verifiziere deine Daten'
                message='Hier steht ein zweizeiliger Blindtext. Lorem Ipsum set dolor. Bla und Blubb. Und so weiter…'
                selected={false}
              />
              */}
            </div>
          </div>
        </div>
      );
  }
}
