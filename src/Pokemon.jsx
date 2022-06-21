import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemons } from './store/slices/pokemon/thunks';

export const Pokemon = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
        <li>four</li>
      </ul>
    </>
  );
};
