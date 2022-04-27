import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class WeatherCurrentComponent extends Component {
  @service('location') location;

  getCurrentInfo() {
    const { temperature, weatherInfo, wind, rating } =
      this.location.weather.current;
    return { temperature, weatherInfo, wind, rating };
  }

  get score() {
    const { rating } = this.getCurrentInfo();
    let image;
    let color;
    let alt;
    let description;
    if (rating === 'wetsuit') {
      color='text-blue-1'
      alt = 'Jacket';
      image = 'wetsuit';
      description = 'Wetsuit recommended';
    } else if (rating === 'perfect') {
      color='text-green-1'
      alt = 'Smiley face with sunglasses';
      image = 'perfect';
      description = 'Perfect!';
    } else if (rating === 'good') {
      color='text-yellow-1'
      alt = 'Face with big smile';
      image = 'good';
      description = 'Good!';
    } else if (rating === 'okay') {
      color='text-orange-2'
      alt = 'Face with moderate smile';
      image = 'okay';
      description = 'Not too bad...';
    } else {
      color='text-red-1'
      alt = 'Sad face';
      image = 'poor';
      description = 'Not worth it.';
    }
    const imageSrc = `/assets/icons/${image}.svg`;
    return { alt, imageSrc, color, description };
  }

  get weatherData() {
    const { weatherInfo } = this.getCurrentInfo();
    const icon = `http://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`;
    const alt = weatherInfo.main;
    const description = weatherInfo.description;
    return { icon, alt, description };
  }

  get tempData() {
    const { temperature } = this.getCurrentInfo();
    const temp = Math.floor(temperature.actual);
    const feelsLike = Math.floor(temperature.feels_like);
    return { temp, feelsLike };
  }

  get windData() {
    const { wind } = this.getCurrentInfo();
    const windSpeed = Math.floor(wind.wind_speed);
    const windDeg = wind.wind_deg;
    const icon = `/assets/icons/wind.svg`;
    return { windSpeed, windDeg, icon };
  }
}
