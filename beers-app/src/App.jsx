import BeersList from "./components/beersList/BeersList";
import { beers } from "./components/beers/Beers";
import BeersAvailable from "./components/beersAvailable/BeersAvailable";
import BeersRedAndIpa from "./components/beersRedAndIpa/BeersRedAndIpa";
import BeerStyle from "./components/beerStyle/BeerStyle";

const App = () => {
  return (
    <>
      <BeersList beers={beers}></BeersList>
      <BeersAvailable beers={beers}></BeersAvailable>
      <BeersRedAndIpa redAndIPA={beers}></BeersRedAndIpa>
      <BeerStyle beers={beers}></BeerStyle>
    </>
  );
};

export default App;
