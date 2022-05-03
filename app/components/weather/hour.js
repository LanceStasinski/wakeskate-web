import Component from '@glimmer/component';
import { iconAlt } from './current';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { htmlSafe } from '@ember/template';

export default class WeatherHourComponent extends Component {
  @tracked infoIsExpanded = false;

  @action toggleShowInfo() {
    this.infoIsExpanded = !this.infoIsExpanded;
  }

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

  get weatherIcon() {
    const icon = this.args.hour.weatherInfo.icon;
    const alt = this.args.hour.weatherInfo.description;
    return {
      weatherIcon: `https://openweathermap.org/img/wn/${icon}@2x.png`,
      alt,
    };
  }

  get temp() {
    return Math.floor(this.args.hour.temperature.actual);
  }

  get wind() {
    const speed = Math.floor(this.args.hour.wind.wind_speed);
    const windDeg = this.args.hour.wind.wind_deg;
    const windDegStyle = htmlSafe(`transform: rotate(${windDeg}deg)`);
    const gust = Math.floor(this.args.hour.wind.wind_gust);
    const icon = '/assets/icons/wind.svg';
    const alt = `Orange arrow pointing ${windDeg} degrees.`
    return { speed, windDegStyle, icon, alt, gust };
  }
}
