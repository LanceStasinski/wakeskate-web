import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { htmlSafe } from '@ember/template';

export default class WeatherWeekComponent extends Component {
  @service('location') location;

  @tracked showWeek = false;

  @action toggleShowWeek() {
    this.showWeek = !this.showWeek;
  }

  get weekly() {
    return this.location.weather.daily;
  }

  get chevronDirection() {
    const direction = this.showWeek ? -90 : 90;
    const alt =
      direction === -90 ? 'Chevron pointing up' : 'Chevron pointing down';
    const rotate = htmlSafe(`transform: rotate(${direction}deg)`);
    return { alt, rotate };
  }
}
