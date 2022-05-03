import Controller from '@ember/controller';
import fetch from 'fetch';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import ENV from 'wakeskate-web-2/config/environment';

export default class IndexController extends Controller {
  @service('location') location;

  @tracked isShowingMap = false;
  @tracked lat = this.location.location.lat;
  @tracked lng = this.location.location.lng;
  @tracked showData = false;
  @tracked showInfo = false;

  @action toggleModal() {
    if (this.location.address) {
      this.isShowingMap = !this.isShowingMap;
    }
  }

  @action close() {
    this.showData = true;
    this.isShowingMap = false;
  }

  @action toggleInfo() {
    this.showInfo = !this.showInfo;
  }

  @action async load() {
    const locationInfo = JSON.parse(localStorage.getItem('location'));

    if (locationInfo) {
      const { lat, lng } = locationInfo;
      const response = await fetch(`api/weather`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ lat, lng }),
      });
      const weatherData = await response.json();
      this.location.address = locationInfo.address;
      this.location.weather = weatherData;
      this.location.location = {
        lat: locationInfo.lat,
        lng: locationInfo.lng,
      };
      this.showData = true;
    } else {
      this.isShowingMap = true;
    }
  }
}
