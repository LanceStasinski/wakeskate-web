import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class WeatherComponent extends Component {
  @service('location') location;


  @tracked dayOfWeek = this.location.weather.current.date.day_of_week;
  @tracked month = this.location.weather.current.date.month;
  @tracked day = this.location.weather.current.date.day;
  @tracked datetime = this.location.weather.current.date.datetime;

  get hour() {
    if (this.location.weather.current.date.hour > 12) {
      return this.location.weather.current.date.hour - 12;
    }
    return this.location.weather.current.date.hour;
  }

  get amOrPm() {
    if (this.location.weather.current.date.hour > 12) {
      return 'PM';
    }
    return 'AM';
  }

  get time() {
    return `${this.hour}:${this.location.weather.current.date.minutes} ${this.amOrPm}`;
  }

  get address() {
    return this.location.address.toUpperCase();
  }
}
