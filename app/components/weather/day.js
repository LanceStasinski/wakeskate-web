import Component from '@glimmer/component';
import { iconAlt } from './current';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { htmlSafe } from '@ember/template';

export default class WeatherDayComponent extends Component {
  @tracked infoIsExpanded = false;

  @action toggleShowInfo() {
    this.infoIsExpanded = !this.infoIsExpanded;
  }

  get day() {
    const date = this.args.day.date;
    const month = date.month.slice(0, 3);
    const day = date.day;
    return { title: `${month} ${day}`, datetime: date.datetime };
  }

  get icon() {
    const day = this.args.day;
    const image = day.rating === 'bad' ? 'poor' : day.rating;
    return { src: `/assets/icons/${image}.svg`, alt: iconAlt[day.rating] };
  }

  get weatherIcon() {
    const icon = this.args.day.weatherInfo.icon;
    const alt = this.args.day.weatherInfo.description;
    return {
      weatherIcon: `https://openweathermap.org/img/wn/${icon}@2x.png`,
      alt,
    };
  }

  get temp() {
    return Math.floor(this.args.day.temperature.actual);
  }

  get wind() {
    const speed = Math.floor(this.args.day.wind.wind_speed);
    const windDeg = this.args.day.wind.wind_deg;
    const windDegStyle = htmlSafe(`transform: rotate(${windDeg}deg)`);
    const icon = '/assets/icons/wind.svg';
    const alt = `Orange arrow pointing ${windDeg} degrees.`
    return { speed, windDegStyle, icon, alt };
  }
}
