import Route from '@ember/routing/route';

export default class EpisodeRoute extends Route {
  async model() {
    const response = await fetch('https://rickandmortyapi.com/api/episode');
    const data = await response.json();
    return data;
  }
}
