import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';
import { inject as service } from '@ember/service';

export const iconAlt = {
  wetsuit: 'Blue face with a moderate smile.',
  perfect: 'Green smiley face with sunglasses.',
  good: 'Yellow face with big smile.',
  okay: 'Orange face with a moderate smile.',
  bad: 'Red sad face.',
};

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
    let alt = iconAlt[rating];
    let description;
    if (rating === 'wetsuit') {
      image = 'wetsuit';
      description = 'Wetsuit recommended';
    } else if (rating === 'perfect') {
      image = 'perfect';
      description = 'Perfect!';
    } else if (rating === 'good') {
      image = 'good';
      description = 'Good!';
    } else if (rating === 'okay') {
      image = 'okay';
      description = 'Not too bad...';
    } else {
      image = 'poor';
      description = 'Not worth it';
    }
    const imageSrc = `/assets/icons/${image}.svg`;
    return { alt, imageSrc, image, description };
  }

  get weatherData() {
    const { weatherInfo } = this.getCurrentInfo();
    const icon = `https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`;
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
    const windDegStyle = htmlSafe(`transform: rotate(${windDeg}deg)`);
    const icon = `/assets/icons/wind.svg`;
    return { windSpeed, windDeg, icon, windDegStyle };
  }
}
