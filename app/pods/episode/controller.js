import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class EpisodeController extends Controller {
  @service store;

  @tracked records = [];
  @tracked page = 1;

  @action
  async loadEpisodes() {
    const response = await fetch(`https://rickandmortyapi.com/api/episode/?page=${this.page}`);
    const { results } = await response.json();
    
    this.store.pushPayload({
      episode: results
    });

    this.records = this.store.findAll('episode');
  };

  @action 
  nextPage() {
    this.page += 1;

    this.loadEpisodes();
  };
}
