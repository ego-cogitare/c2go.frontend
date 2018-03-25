import React from 'react';
import { Link } from 'react-router';
import Partials from './partials';
import Popups from './popups';
import { progress } from '../../actions';
import { dispatch } from '../../core/helpers/EventEmitter';

export default class Interests extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  next(e) {
    e.preventDefault();

    progress({ progress: 6 },() => {
      dispatch('popup:show', {
        title: 'Bestätigung – Erfolgreich registriert',
        body: this.regComplete
      });
    });
  }

  /**
   * Event should be fired on component render
   */
  initDialogs() {
   this.regComplete = <Popups.RegComplete />;
  }

  render() {
    this.initDialogs();

    return (
      <div class="registration-interests">
        <div class="heading-3">Interessen</div>
        <p class="text">Wähle hier deine Interessen aus, um individuelle Vorschläge zu erhalten</p>
        <div class="sections">
          <div class="section cinema clear">
            <div class="cover" style={{ backgroundImage: `url('${require("../../staticFiles/img/interests/cinema-01.jpg")}')` }}></div>
            <div class="label left">
              Kino und Theater
            </div>
            <div class="items left clear">
              <Partials.Interest
                title="Kino"
                picture={require('../../staticFiles/img/interests/cinema-01.jpg')}
              />
              <Partials.Interest
                title="Theater"
                picture={require('../../staticFiles/img/interests/cinema-02.jpg')}
              />
              <Partials.Interest
                title="Freiluftkino"
                picture={require('../../staticFiles/img/interests/cinema-03.jpg')}
              />
              <Partials.Interest
                title="Public Viewing"
                picture={require('../../staticFiles/img/interests/cinema-04.jpg')}
              />
            </div>
          </div>

          <div class="section journey clear">
            <div class="cover" style={{ backgroundImage: `url('${require("../../staticFiles/img/interests/cinema-02.jpg")}')` }}></div>
            <div class="label left">
              Reise
            </div>
            <div class="items left clear">
              <Partials.Interest
                title="Kino"
                picture={require('../../staticFiles/img/interests/cinema-01.jpg')}
              />
              <Partials.Interest
                title="Theater"
                picture={require('../../staticFiles/img/interests/cinema-02.jpg')}
              />
            </div>
          </div>

          <div class="section sport clear">
            <div class="cover" style={{ backgroundImage: `url('${require("../../staticFiles/img/interests/cinema-03.jpg")}')` }}></div>
            <div class="label left">
              Sport
            </div>
            <div class="items left clear">
              <Partials.Interest
                title="Kino"
                picture={require('../../staticFiles/img/interests/cinema-01.jpg')}
              />
              <Partials.Interest
                title="Theater"
                picture={require('../../staticFiles/img/interests/cinema-02.jpg')}
              />
              <Partials.Interest
                title="Kino"
                picture={require('../../staticFiles/img/interests/cinema-03.jpg')}
              />
              <Partials.Interest
                title="Theater"
                picture={require('../../staticFiles/img/interests/cinema-04.jpg')}
              />
              <Partials.Interest
                title="Kino"
                picture={require('../../staticFiles/img/interests/cinema-01.jpg')}
              />
              <Partials.Interest
                title="Theater"
                picture={require('../../staticFiles/img/interests/cinema-02.jpg')}
              />
              <Partials.Interest
                title="Kino"
                picture={require('../../staticFiles/img/interests/cinema-03.jpg')}
              />
              <Partials.Interest
                title="Theater"
                picture={require('../../staticFiles/img/interests/cinema-04.jpg')}
              />
              <Partials.Interest
                title="Kino"
                picture={require('../../staticFiles/img/interests/cinema-01.jpg')}
              />
              <Partials.Interest
                title="Theater"
                picture={require('../../staticFiles/img/interests/cinema-02.jpg')}
              />
              <Partials.Interest
                title="Kino"
                picture={require('../../staticFiles/img/interests/cinema-03.jpg')}
              />
              <Partials.Interest
                title="Theater"
                picture={require('../../staticFiles/img/interests/cinema-04.jpg')}
              />
            </div>
          </div>

          <div class="section misc clear">
            <div class="cover" style={{ backgroundImage: `url('${require("../../staticFiles/img/interests/cinema-04.jpg")}')` }}></div>
            <div class="label left">
              Sonstiges
            </div>
            <div class="items left clear">
              <Partials.Interest
                title="Kino"
                picture={require('../../staticFiles/img/interests/cinema-01.jpg')}
              />
              <Partials.Interest
                title="Theater"
                picture={require('../../staticFiles/img/interests/cinema-02.jpg')}
              />
              <Partials.Interest
                title="Kino"
                picture={require('../../staticFiles/img/interests/cinema-03.jpg')}
              />
              <Partials.Interest
                title="Theater"
                picture={require('../../staticFiles/img/interests/cinema-04.jpg')}
              />
            </div>
          </div>
        </div>

        <div class="buttons">
          <a href="#" class="violet-button" onClick={this.next.bind(this)}>Weiter</a>
        </div>
      </div>
    );
  }
}
