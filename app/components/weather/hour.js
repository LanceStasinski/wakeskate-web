import Component from '@glimmer/component';
import { iconAlt } from './current';

export default class WeatherHourComponent extends Component {
  get icon() {
    const hour = this.args.hour;
    const image = hour.rating === 'bad' ? 'poor' : hour.rating;
    return { src: `/assets/icons/${image}.svg`, alt: iconAlt[hour.rating] };
  }

  get time() {
    const date = this.args.hour.date;
    const hour =
      date.hour > 12 ? date.hour - 12 : date.hour === 0 ? 12 : date.hour;
    const amPm = date.hour >= 12 ? 'pm' : 'am';
    return { hour, amPm, datetime: date.datetime };
  }
}
