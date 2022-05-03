import Component from '@glimmer/component';
import { iconAlt } from './weather/current';



export default class RatingInfoComponent extends Component {
  get rating() {
    const ratingInfo = [
      {
        img: '/assets/icons/perfect.svg',
        rating: 'Perfect!',
        description: "Hot, full sun, and little wind - a can't miss opportunity",
        alt: iconAlt.perfect,
      },
      {
        img: '/assets/icons/good.svg',
        rating: 'Good!',
        description: 'Warm but a little breezy - surely worth a try',
        alt: iconAlt.good,
      },
      {
        img: '/assets/icons/okay.svg',
        rating: 'Not too bad...',
        description:
          'Suboptimal wind speed and temperatures - potentially worth a shot',
        atl: iconAlt.okay,
      },
      {
        img: '/assets/icons/poor.svg',
        rating: 'Not worth it',
        description:
          "Cold, windy, or inclement weather - you're going to have a bad time",
        alt: iconAlt.bad,
      },
      {
        img: '/assets/icons/wetsuit.svg',
        rating: 'Wetsuit recommended',
        description: "Cold but little wind - Don't let the frigid water stop you!",
        alt: iconAlt.wetsuit,
      },
    ];
    return ratingInfo;
  }
}
