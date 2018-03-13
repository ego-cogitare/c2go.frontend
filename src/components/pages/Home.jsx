import React from 'react';
import { Link } from 'react-router';
import Partials from './partials';
// import {  } from '../../actions';
import { buildUrl } from '../../core/helpers/Utils';

export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    new Swiper('.events-slider', {
      direction: 'horizontal',
      slidesPerView: 'auto',
      paginationClickable: true,
      loop: false,
      spaceBetween: 0,
      mousewheelControl: false,
      speed: 1000
    });
  }

  render() {
    return (
      <div class="home">
        <div class="cover">
          <div class="title">
            Events
          </div>
          <Partials.Search />
        </div>
        <div class="events-wrapper clear">
          <div class="events-section">
            <div class="section-title">
              Top Events
            </div>
            <div class="events top">
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-01.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-01.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-02.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-02.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-03.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
            </div>
          </div>
          <div class="events-section swiper-container events-slider">
            <div class="section-title clear wrapper">
              <div class="left">Kino und Theater</div>
              <a href="#" class="right">Alle anzeigen</a>
            </div>
            <div class="events swiper-wrapper">
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-01.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-01.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-01.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-01.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-01.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-01.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-01.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-01.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-01.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-01.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-01.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
            </div>
          </div>
          <div class="events-section swiper-container events-slider">
            <div class="section-title clear wrapper">
              <div class="left">Reisen</div>
              <a href="#" class="right">Alle anzeigen</a>
            </div>
            <div class="events swiper-wrapper">
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-02.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-02.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-02.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-02.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-02.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-02.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-02.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-02.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-02.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-02.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-02.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
            </div>
          </div>
          <div class="events-section swiper-container events-slider">
            <div class="section-title clear wrapper">
              <div class="left">Konzerte</div>
              <a href="#" class="right">Alle anzeigen</a>
            </div>
            <div class="events swiper-wrapper">
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-04.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-05.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-06.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-04.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-05.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-06.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
            </div>
          </div>
          <div class="events-section swiper-container events-slider">
            <div class="section-title clear wrapper">
              <div class="left">Sport</div>
              <a href="#" class="right">Alle anzeigen</a>
            </div>
            <div class="events swiper-wrapper">
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-07.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-08.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-09.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-07.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-08.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-09.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-07.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-08.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-09.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
            </div>
          </div>
          <div class="events-section swiper-container events-slider">
            <div class="section-title clear wrapper">
              <div class="left">Sonstiges</div>
              <a href="#" class="right">Alle anzeigen</a>
            </div>
            <div class="events swiper-wrapper">
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-10.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-11.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-12.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-10.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-11.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-12.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-10.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-11.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-12.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-10.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-11.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
              <Partials.Event
                type="video"
                picture={require('../../staticFiles/img/home/event-12.jpg')}
                avatar={require('../../staticFiles/img/home/avatar-03.png')}
                title="Star Wars"
                category="Kino"
                authorName="Tina"
                price="15€"
                time="17.09.-31.10.17"
                location="In Marburg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
