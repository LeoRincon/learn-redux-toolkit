import axios from 'axios';

export const pokemonAPi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});
