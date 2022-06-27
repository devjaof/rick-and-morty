import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class LocationController extends Controller {
  @service store;

  @tracked records = [];
  @tracked page = 1;

  @action
  async loadLocations() {
    const response = await fetch(`https://rickandmortyapi.com/api/location/?page=${this.page}`);
    const { results } = await response.json();
    
    this.store.pushPayload({
      location: results
    });

    this.records = this.store.findAll('location');
  };

  @action 
  nextPage() {
    this.page += 1;

    this.loadLocations();
  };
}
