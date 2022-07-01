import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object'
import { restartableTask, timeout } from 'ember-concurrency';

export default class CharacterController extends Controller {
  @service store;

  @tracked records = [];
  @tracked page = 1;
  @tracked name = '';
  @tracked search = '';

  @action 
  nextPage() {
    this.page += 1;

    this.loadCharacters();
  };

  @restartableTask
  *filterContent() {
    let value = document.querySelector('.form-control').value;
    yield timeout(300);
    this.name = value;

    console.log('this.name', this.name)
    // this.loadCharacters();
  };

  @action
  async loadCharacters() {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${this.page}&name=${this.name}`);
    const { results } = await response.json();

    this.store.pushPayload({
      character: results
    });

    this.records = this.store.findAll('character');
  };

}
