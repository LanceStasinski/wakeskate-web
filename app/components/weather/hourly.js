import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class WeatherHourlyComponent extends Component {
  @service('location') location;

  get hourly() {
    return this.location.weather.hourly;
  }
}
