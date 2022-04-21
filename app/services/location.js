import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class LocationService extends Service {
  @tracked location = {};
  @tracked weather = {};
}
