import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';
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
    let alt;
    let description;
    if (rating === 'wetsuit') {
      alt = 'Jacket';
      image = 'wetsuit';
      description = 'Wetsuit recommended';
    } else if (rating === 'perfect') {
      alt = 'Smiley face with sunglasses';
      image = 'perfect';
      description = 'Perfect!';
    } else if (rating === 'good') {
      alt = 'Face with big smile';
      image = 'good';
      description = 'Good!';
    } else if (rating === 'okay') {
      alt = 'Face with moderate smile';
      image = 'okay';
      description = 'Not too bad...';
    } else {
      alt = 'Sad face';
      image = 'poor';
      description = 'Not worth it.';
    }
    const imageSrc = `/assets/icons/${image}.svg`;
    return { alt, imageSrc, image, description };
  }

  get weatherData() {
    const { weatherInfo } = this.getCurrentInfo();
    const icon = `http://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`;
    const alt = weatherInfo.main;
    const weatherString = weatherInfo.description;
    const description =
      weatherString.charAt(0).toUpperCase() + weatherString.slice(1);
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
    const windDegStyle = htmlSafe(
      `transform: rotate(${windDeg}deg)`
    );
    const icon = `/assets/icons/wind.svg`;
    return { windSpeed, windDeg, icon, windDegStyle };
  }
}
