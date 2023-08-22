import { Card } from "../components/cards/Card";
import "./styles/Home.css";
export const Home = () => {
  return (
    <>
      <div className="home__picture">
        {/* Banner */}
        <img className="home__banner" src="/public/banner.webp" alt="banner" />
      </div>

      {/* Section Cards */}
      <div className="home__section-card">
        <div className="home__container-card card-1">
          {/* <Card></Card> */}
        </div>
        <div className="home__container-card card-2">
          {/* <Card></Card> */}
        </div>
        <div className="home__container-card card-3">
          {/* <Card></Card> */}
        </div>
        <div className="home__container-card card-4">
          {/* <Card></Card> */}
        </div>
      </div>
    </>
  );
};
