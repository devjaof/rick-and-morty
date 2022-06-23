import Model, { attr } from '@ember-data/model';

export default class EpisodeModel extends Model {
  @attr('string') name;
  @attr('string') episode;
  @attr('string') characters;
}
