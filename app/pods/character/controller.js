import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object'

export default class CharacterController extends Controller {
  @service store;

  @tracked records = [];
  @tracked page = 1;

  @action
  async loadCharacters() {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${this.page}`);
    const { results } = await response.json();

    this.store.pushPayload({
      character: results
    });

    this.records = this.store.findAll('character');
  };

  @action 
  nextPage() {
    this.page += 1;

    this.loadCharacters();
  };
}
