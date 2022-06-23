import Route from '@ember/routing/route';

export default class CharacterRoute extends Route {
  async model() {
    const response = await fetch('https://rickandmortyapi.com/api/character/');
    const JSONresponse = await response.json();

    const data = JSONresponse.results;

    const { info, results } = JSONresponse;
    console.log({JSONresponse});

    return data;
  }
}
