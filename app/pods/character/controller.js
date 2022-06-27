import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object'
import { task } from 'ember-concurrency';

export default class CharacterController extends Controller {
  @service store;

  @tracked records = [];
  @tracked page = 1;
  @tracked name = '';
  @tracked term = '';

  @action
  async loadCharacters() {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${this.page}&name=${this.name}`);
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

  @task
  *findRecords(){
    this.name = this.term;
    
    this.loadCharacters();
  }
}
