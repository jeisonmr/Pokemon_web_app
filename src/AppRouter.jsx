import { Navigate, Routes, Route } from "react-router-dom";
// import { Navigation } from "./components/navigation/Navigation";
import { AllPokemons, PokemonView } from "./views/index";

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<AllPokemons />} />
        <Route index element={<AllPokemons />} />
        <Route path="pokemon/:id" element={<PokemonView />} />
      

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
