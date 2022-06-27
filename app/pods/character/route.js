import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CharacterRoute extends Route {
  @service store;

  async model() {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const { results } = await response.json();

    this.store.pushPayload({
      character: results
    });

    return this.store.findAll('character');
  }
}
