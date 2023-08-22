import { Link, NavLink } from "react-router-dom";
import { AllPokemons } from "../../views";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <header className="navigation__header">
      <NavLink className="navigation__nav">
        <Link to='/'>
          <img className="navigation__logo" src="/public/logog.webp" alt="" />
        </Link>

        <ul className="navigation__list-items">
          <Link to="/pokelist" className="navigation__items">
            <li className="navigation__items item-1">Pokemon</li>
          </Link>
          <li className="navigation__items item-2">Evoluciones</li>
        </ul>
      </NavLink>
    </header>
  );
};
