import Model, { attr, belongsTo } from '@ember-data/model';

export default class CharacterModel extends Model {
  @attr('string') name;
  @attr('string') status;
  @attr('string') species;
  @attr('string') type;
  @attr('string') gender;
  @belongsTo('origin') origin;
  @belongsTo('location') location;
  @attr('string') image;
}