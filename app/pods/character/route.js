import Route from '@ember/routing/route';

export default class CharacterRoute extends Route {
  async model() {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    return data;
  }
}
