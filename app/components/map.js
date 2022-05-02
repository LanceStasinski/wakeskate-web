import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import fetch from 'fetch';
import ENV from 'wakeskate-web-2/config/environment';
import { inject as service } from '@ember/service';

export default class MapComponent extends Component {
  @service('location') location;

  @tracked query = '';
  @tracked lat = 0;
  @tracked lng = 0;
  @tracked hasSearched = false;

  @action async postSearch(event) {
    event.preventDefault();
    this.location.address = this.query;
    const data = { location: this.query };
    const response = await fetch(`${ENV.REST_API}/geocode/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();

    this.lat = responseData.lat;
    this.lng = responseData.lng;

    if (this.lat && this.lng) {
      this.hasSearched = true;
    }
  }

  @action async selectLocation(close) {
    const coordinates = {
      lat: this.lat,
      lng: this.lng,
    };

    localStorage.setItem(
      'location',
      JSON.stringify({
        lat: coordinates.lat,
        lng: coordinates.lng,
        address: this.location.address,
      })
    );

    const response = await fetch(`${ENV.REST_API}/weather`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(coordinates),
    });
    const weatherData = await response.json();
    this.location.weather = weatherData;
    this.location.location = {
      lat: this.lat,
      lng: this.lng,
    };
    console.log(this.location.weather);
    close();
  }
}
