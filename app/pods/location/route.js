import Route from '@ember/routing/route';

export default class LocationRoute extends Route {
  async model() {
    const response = await fetch('https://rickandmortyapi.com/api/location');
    const data = await response.json();
    return data;
  }
}
