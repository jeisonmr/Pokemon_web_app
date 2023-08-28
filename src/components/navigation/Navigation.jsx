import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <header className="navigation__header">
      <NavLink className="navigation__nav">
        <Link to="/">
          <img className="navigation__logo" src="/public/logog.webp" alt="" />
        </Link>

        <ul className="navigation__list-items">
          {/* <li>
            <Link to="/">Inicio</Link>
          </li> */}
          <li className="navigation__items item-1">
            <Link to="/pokelist" className="navigation__items">
              Pokemon
            </Link>
          </li>
          {/* <li className="navigation__items item-2">
            <Link to="/">Evoluciones</Link>
          </li> */}
        </ul>
      </NavLink>
    </header>
  );
};
