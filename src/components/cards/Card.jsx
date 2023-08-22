import { Link } from "react-router-dom";
import "./Card.css";

export const Card = ({pokemon}) => {
  // const imagenes = [];

  return (
    <Link to={`/pokemon/${pokemon.id}`} className="card container__card">
    <section >
      <header>
        {/* Imagen del Pokemon */}
        <img className="card__pokemon" src={pokemon.sprites.other.home.front_shiny} alt={pokemon.name} />

        {/* sección de evoluciones */}
        <div className="card__transformaciones">
          {/* {imagenes.map((img, index) => {
            return <img key={index} src={img} alt="" />;
          })} */}
        </div>

        {/* Sección de caracteristicas */}
        <div className="card__caracteristicas"></div>
      </header>
      <footer>
        <p className="card__name">{pokemon.name}</p>
      </footer>
    </section>
    </Link>
  );
};
