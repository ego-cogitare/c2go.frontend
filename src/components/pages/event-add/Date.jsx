import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import SVG from '../svg';
import { categories } from '../../../actions';

export default class Date extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      date: moment().format('DD.MM.Y'),
      time: '',
      timestamp: 0
    };
  }

  componentDidMount() {
    const context = this;
    const $date = this.refs.date;
    if ($date)
    {
      const calendar = rome(
        $date, {
        time: false ,
        inputFormat: 'DD.MM.YYYY',
        weekdayFormat: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        dayFormat: 'D',
        appendTo: $date.parentNode
      })
      .on('hide', function() {
        context.setState({
          date: this.getDateString('DD.MM.YYYY')
        });
      });
    }

    $(this.refs.time)
      .on('change', function() {
        const date = $($date).val() + ' ' + $(this).val();
        context.setState({
          timestamp: moment(date, 'DD.MM.YYYY HH : mm').unix()
        });
      })
      .wickedpicker({
        twentyFour: true,
        title: 'Uhrzeit',
        minutesInterval: 1,
        beforeShow: function($input, picker) {
          $(picker).width($input.width() + 1);
        }
      });
  }

  render() {
    return (
      <div class="wrapper-small text-center">
        <div class="heading-2">
          Event erstellen – Schritt 3
        </div>
        <p class="text">
          Bitte gib hier weitere Informationen zu deiner Reise an, um deine Chance auf einen Companion zu erhöhen
        </p>
        <div class="form clear">
          <div class="form-controll left w49p relative">
            <input type="text" class="input" ref="date" name="date" defaultValue={this.state.date} placeholder="Datum" />
          </div>
          <div class="form-controll right w49p relative">
            <input type="text" class="input" ref="time" name="time" placeholder="Uhrzeit" />
          </div>
        </div>
        <div class="buttons">
          <a href="#" class="button violet-button">Weiter</a>
          <a href="#" class="button default-button">Überspringen</a>
        </div>
      </div>
    );
  }
}
