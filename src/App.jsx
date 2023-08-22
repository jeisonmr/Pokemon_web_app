import "./styles/App.css";
import { AppRouter } from "./AppRouter";
import { Navigation } from './components/navigation/Navigation';
import { Footer } from './components/footer/Footer';
import { ProviderPokemon } from "./components/Context/ProviderPokemon";

function App() {
  return (
    <ProviderPokemon>
    <main className="app__main">
      <Navigation/>
      <AppRouter />
      <Footer/>
    </main>
    </ProviderPokemon>
  );
}

export default App;
