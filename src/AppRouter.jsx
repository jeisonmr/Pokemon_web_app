import { Navigate, Routes, Route } from "react-router-dom";
// import { Navigation } from "./components/navigation/Navigation";
import { AllPokemons, Home, PokemonView } from "./views/index";

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="pokemon/:id" element={<PokemonView />} />
        <Route path="pokelist" element={<AllPokemons />} />
      

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
