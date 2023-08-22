import { useEffect, useState } from "react";
import PokeContext from "./ContextPokemon";
import { useForms } from "../hooks/useForms";

export const ProviderPokemon = ({ children }) => {
  // Estados de las Apis.
  const [listPokemons, setListPokemons] = useState([]);
  const [listAllPokemons, setListAllPokemons] = useState([]);

  // Estados Basicos.
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [checkFilter, setCheckFilter] = useState(false);

  // Estados de Hooks
  const { onInputChange, onResetForm, valueSearch } = useForms({
    valueSearch: "",
  });

  const getPokemons = async (limit = 5) => {
    const url = "https://pokeapi.co/api/v2/";
    const res = await fetch(`${url}pokemon?limit=${limit}&offset=${offset}`);
    const data = await res.json();

    const promises = data.results.map(async (items) => {
      const res = await fetch(items.url);
      const data = await res.json();
      return data;
    });

    const results = await Promise.all(promises);
    setListPokemons([...listPokemons, ...results]);
    setLoading(false);
  };

  const getAllPokemons = async (limit = 100000) => {
    const url = "https://pokeapi.co/api/v2/";
    const res = await fetch(`${url}pokemon?limit=${limit}&offset=${offset}`);
    const data = await res.json();

    const promises = await data.results.map(async (items) => {
      const res = await fetch(items.url);
      const data = await res.json();
      return data;
    });

    const results = await Promise.all(promises);
    setListAllPokemons(results);
    setLoading(false);
  };

  const getPokemonByID = async id => {
		const baseURL = 'https://pokeapi.co/api/v2/';

		const res = await fetch(`${baseURL}pokemon/${id}`);
		const data = await res.json();
		return data;
	}; 


  const morePokemons = () => {
    setOffset( offset + 5);
  }

  useEffect(() => {
    getPokemons();
  }, [offset]);

  // useEffect(() => {
  //   getAllPokemons();
  // }, []);

  return (
    <PokeContext.Provider
      value={{
        listPokemons,
        valueSearch,
        onInputChange,
        onResetForm,
        getPokemons,
        getAllPokemons,
        morePokemons,
        getPokemonByID,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};
