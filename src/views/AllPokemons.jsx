import { useContext } from "react";
import ContextPokemon from "../components/Context/ContextPokemon";
import "./styles/AllPokemons.css";
import { Card } from "../components/cards/Card";


export const AllPokemons = () => {
  const { listPokemons, morePokemons } = useContext(ContextPokemon);
  // console.log(listPokemons);

  return (
    <>
      <div className="allpokemons__search-container">
        <form className="allpokemons__formulario" action="">
          <select className="allpokemons__select-tipo" name="" id=""></select>
          <div className="container__input">
            <input className="allpokemons__btn" type="submit" />
            <input className="allpokemons__search" type="search" />
          </div>
        </form>
      </div>

      <div className="allpokemons__container">
        {listPokemons.map((pokemon) => {
          // console.log('render');
          return (
              <Card key={pokemon.id} pokemon={pokemon} />        
          );
        })}

      </div>
        <div style={{textAlign: "center"}}>
        <button onClick={morePokemons}>Más Pokemons</button>
        </div>
    </>
  );
};
