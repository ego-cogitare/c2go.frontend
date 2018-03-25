import React from 'react';
import { Link } from 'react-router';
import Partials from './partials';
import User from '../../core/helpers/User';
import { dashboard } from '../../actions';

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pageLoading: false
    };

    dashboard();
  }

  onInvitationOpen(id) {
    console.log('Invitation ID:', id);
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
                  <a href="#" class="btn">Bearbeiten</a>
                </div>
              </div>
            </div>
          </div>
          <div class="wrapper events-list clear">
            <div class="current">
              <div class="title">Anfragen und Nachrichten</div>
              <Partials.Invitation
                id={1111}
                onOpen={this.onInvitationOpen.bind(this)}
                state={Partials.Invitation.STATE_NEW}
                date='18.03.2018'
                title='Lara Croft'
                message='Here will be some text message'
                selected={false}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
              />
              <Partials.Invitation
                title='Bitte vervollständige dein Profil'
                message='Du hast noch kein Profilbild hinterlegt'
                selected={true}
              />
              <Partials.Invitation
                id={1111}
                onOpen={this.onInvitationOpen.bind(this)}
                state={Partials.Invitation.STATE_ACCEPTED}
                date='18.03.2018'
                title='Anfrage zu „Blade runner 2049“'
                message='Hallo, ich bin Mohammed und würde gerne mich. Lorem ipsum sit dolor'
                selected={false}
                avatar={require('../../staticFiles/img/home/avatar-01.png')}
              />
              <Partials.Invitation
                id={1111}
                onOpen={this.onInvitationOpen.bind(this)}
                state={Partials.Invitation.STATE_DECLINED}
                date='18.03.2018'
                title='Anfrage zu „Blade runner 2049“'
                message='Hallo, ich bin Mohammed und würde gerne mich. Lorem ipsum sit dolor'
                selected={false}
                avatar={require('../../staticFiles/img/home/avatar-02.png')}
              />
              <Partials.Invitation
                title='Bitte vervollständige dein Profil'
                message='Du hast noch kein Profilbild hinterlegt'
                selected={true}
              />
            </div>
            <div class="future">
              <div class="title">Deine anstehenden Events:</div>
              <Partials.Invitation
                date='20.10.2017'
                title='Bitte verifiziere deine Daten'
                message='Hier steht ein zweizeiliger Blindtext. Lorem Ipsum set dolor. Bla und Blubb. Und so weiter…'
                selected={false}
              />
              <Partials.Invitation
                date='20.10.2017'
                title='Bitte verifiziere deine Daten'
                message='Hier steht ein zweizeiliger Blindtext. Lorem Ipsum set dolor. Bla und Blubb. Und so weiter…'
                selected={false}
              />
            </div>
          </div>
        </div>
      );
  }
}
