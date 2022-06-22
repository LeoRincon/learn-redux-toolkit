import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon/thunks';

export const Pokemon = () => {
  const {
    isLoading,
    page,
    pokemons = [],
  } = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>PokemonApp</h1>
      <span>{isLoading ? 'isLoading' : ''}</span>
      <hr />
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
      <p>{`Page: ${page}`}</p>
      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        Next
      </button>
    </>
  );
};
