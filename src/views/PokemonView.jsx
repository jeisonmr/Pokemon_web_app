import { useContext, useEffect, useState } from "react"
import  ContextPokemon  from '../components/Context/ContextPokemon';
import { useParams } from "react-router-dom";


export const PokemonView = () => {

  const { getPokemons } = useContext(ContextPokemon);

  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});

  const {id} =  useParams();

  const fetchPokemon = async (id) =>{
      const data =  await getPokemons(id);
      setPokemon(data);
      setLoading(false);
  }

  useEffect(() => {
    fetchPokemon(id);
  }, [])
  

console.log(pokemon);
  return (
    <>
    {(!loading 
      ? 'Cargando...' 
      :
      <h1>{pokemon.name}</h1>
      // <img src={pokemon.sprites.other.home.front_defaul} alt="" />
      // <p>{pokemon.name}</p>)
      )}
    </>
  )
}
