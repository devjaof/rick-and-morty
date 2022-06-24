import Model, { attr } from '@ember-data/model';

export default class LocationModel extends Model {
  @attr('string') name;
  @attr('string') type;
  @attr('string') dimension;
  @attr('string') residents;
  @attr('string') url;
}
