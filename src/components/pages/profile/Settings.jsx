import React from 'react';
import { Link } from 'react-router';
import Partials from '../partials';
import Popups from '../popups';
import { dispatch } from '../../../core/helpers/EventEmitter';
import classNames from 'classnames';
import User from '../../../core/helpers/User';
import { profileUpdateSettings } from '../../../actions';
import { raiseEvent } from '../../../listeners'

export default class ProfileSettings extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activateButtons: false,
      errors: {},
      home_address_latlng: {},
      first_name: User.data.first_name,
      last_name: User.data.last_name,
      birth_date: User.data.birth_date,
      home_address: User.settings.profile_home_address_friendly,
      postcode: User.settings.profile_home_postcode,
    };
  }

  initDialogs() {
    this.inputDialog = <Popups.ProfileInputDialog className="popup-sm adjustments-002" />;
  }

  componentDidMount() {
    const $homeAddress = this.refs.home_address;
    const $birthDate = this.refs.birth_date;
    const context = this;

    if ($homeAddress)
    {
      const homeAddress = new google.maps.places.Autocomplete($homeAddress, config.autocomplete)
        .addListener('place_changed', function() {
          const place = this.getPlace();
          $homeAddress.blur();
          context.setState({
            home_address_latlng: {
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng()
            },
            home_address: place.vicinity
          });
        });
    }

    if ($birthDate)
    {
      const calendar = rome(
        $birthDate, {
        time: false ,
        inputFormat: 'DD.MM.YYYY',
        weekdayFormat: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        dayFormat: 'D',
        appendTo: $birthDate.parentNode
      })
      .on('hide', function() {
        const date = $($birthDate).val();
        context.setState({
          birth_date: $($birthDate).val()
        });
      });
    }
  }

  popup() {
    dispatch('popup:show', {
      title: 'E-Mail-Adresse ändern',
      body: this.inputDialog
    });
  }

  dataChangeDialog(e) {
    e.preventDefault();

    /** Clear old errors */
    this.setState({ errors: {} });

    profileUpdateSettings(
      { ...this.state },
      (r) => this.setState({
        activateButtons: false
      }, () => raiseEvent('user:info:refresh')),
      (e) => this.setState({ errors: e.responseJSON.errors })
    );
  }

  inputChange(field, e) {
    this.setState({ [field]: e.target.value });
  }

  render() {
    this.initDialogs();

    return (
      <div class="profile-settings wrapper clear">
        <div class="sidebar">
          <Partials.SidebarMenu />
        </div>
        <div class="content">
          <div class="settings-section">
            <div class="heading-2">
              Persönliche Daten ändern
            </div>
          </div>

          <div class="settings-section">
            <form action="">
              <div class="form-row clear">
                <div class="form-controll left">
                  <input type="text" class="input" value={this.state.first_name} onChange={this.inputChange.bind(this, 'first_name')} />
                  <small class="color-red left">{(this.state.errors.first_name || []).join()}</small>
                </div>
                <div class="form-controll right">
                  <input type="text" class="input" value={this.state.last_name} onChange={this.inputChange.bind(this, 'last_name')} />
                  <small class="color-red left">{(this.state.errors.last_name || []).join()}</small>
                </div>
              </div>
              <div class="form-row clear">
                <div class="form-controll left" style={{ position: 'relative' }}>
                  <input type="text" ref="birth_date" class="input" value={this.state.birth_date} onChange={this.inputChange.bind(this, 'birth_date')} />
                  <small class="color-red left">{(this.state.errors.birth_date || []).join()}</small>
                </div>
                <div class="form-controll right">
                  <input type="text" ref="home_address" class="input" value={this.state.home_address} onChange={this.inputChange.bind(this, 'home_address')} />
                  <small class="color-red left">{(this.state.errors.home_address || []).join()}</small>
                </div>
              </div>
              <div class="form-row clear">
                <div class="form-controll left">
                  <input type="text" class="input" value={this.state.postcode} onChange={this.inputChange.bind(this, 'postcode')} />
                  <small class="color-red left">{(this.state.errors.postcode || []).join()}</small>
                </div>
              </div>
            </form>
          </div>
          { this.state.activateButtons ?
            <div class="settings-section clear">
              <a href="#" class="edit left" onClick={(e) => { e.preventDefault(); this.setState({ activateButtons: false }); }}>Abbrechen</a>
              <a href="#" class="violet-button right" onClick={this.dataChangeDialog.bind(this)}>Speichern</a>
            </div> :
            <div class="settings-section">
              <a href="#" class="edit" onClick={(e) => { e.preventDefault(); this.setState({ activateButtons: true }); }}>Daten ändern</a>
            </div>
          }
        </div>
      </div>
    );
  }
}
