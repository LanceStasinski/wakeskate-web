import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class WeatherComponent extends Component {
  @service('location') location;

  getDateInfo() {
    const { day_of_week, month, day, datetime, hour, minutes } =
      this.location.weather.current.date;
    return { day_of_week, month, day, datetime, hour, minutes };
  }

  get dayOfWeek() {
    const { day_of_week } = this.getDateInfo();
    return day_of_week;
  }

  get month() {
    const { month } = this.getDateInfo();
    return month;
  }

  get day() {
    const { day } = this.getDateInfo();
    return day;
  }

  get datetime() {
    const { datetime } = this.getDateInfo();
    return datetime;
  }

  get hour() {
    const { hour } = this.getDateInfo();
    if (hour > 12) {
      return hour - 12;
    } else if (hour === 0) {
      return 12;
    } else {
      return hour;
    }
  }

  get amOrPm() {
    const { hour } = this.getDateInfo();
    if (hour >= 12) {
      return 'pm';
    } else {
      return 'am';
    }
  }

  get time() {
    const { minutes } = this.getDateInfo();
    return `${this.hour}:${minutes}${this.amOrPm}`;
  }

  get address() {
    return this.location.address.toUpperCase();
  }
}
