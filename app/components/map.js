import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import fetch from 'fetch';
import ENV from 'wakeskate-web-2/config/environment';

export default class MapComponent extends Component {
  @tracked query = '';
  @tracked lat = 0;
  @tracked lng = 0;
  @tracked hasSearched = false;

  @action async postSearch(event) {
    event.preventDefault();
    console.log(this.query);
    const data = { location: this.query };
    const response = await fetch(`${ENV.REST_API}/geocode/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();

    console.log(responseData);

    this.lat = responseData.lat;
    this.lng = responseData.lng;

    if (this.lat && this.lng) {
      this.hasSearched = true;
    }
  }
}
