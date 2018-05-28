import React from 'react';
import { Link } from 'react-router';
import Partials from './partials';
import User from '../../core/helpers/User';
import { userEvents } from '../../actions';
import { profilePhoto } from '../../core/helpers/Utils';

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      requests: []
    };

    userEvents(
      ({ data }) => this.setState({ requests: data }),
      (error) => console.error(error),
    );
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
                  <a href="#" class="btn">Ansehen</a>
                  <Link to={`/profile/${User.data.id}/information`} className="btn">Bearbeiten</Link>
                </div>
              </div>
            </div>
          </div>
          <div class="wrapper events-list clear">
            <div class="current">
              <div class="title">Anfragen und Nachrichten</div>
              {
                this.state.requests.map(({ id, date, state, message, user }) => {
                  if (state === Partials.Invitation.STATE_ACCEPTED) {
                    return null;
                  }
                  return (
                    <Partials.Invitation
                      key={id}
                      id={id}
                      state={state}
                      date={date}
                      title={`${user.first_name} ${user.last_name}`}
                      message={message}
                      selected={false}
                      avatar={profilePhoto(user)}
                    />
                  );
                })
              }
              {/*<Partials.Invitation
                title='Bitte vervollständige dein Profil'
                message='Du hast noch kein Profilbild hinterlegt'
                selected={true}
              />*/}
            </div>
            <div class="future">
              <div class="title">Deine anstehenden Events:</div>
              {
                this.state.requests.map(({ id, date, state, message, user }) => {
                  if (state !== Partials.Invitation.STATE_ACCEPTED) {
                    return null;
                  }
                  return (
                    <Partials.Invitation
                      key={id}
                      id={id}
                      date={date}
                      title={`${user.first_name} ${user.last_name}`}
                      message={message}
                      selected={false}
                    />
                  );
                })
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
