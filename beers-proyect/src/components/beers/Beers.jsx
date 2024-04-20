import { useState } from "react";

const beersList = [
  {
    id: 1,
    beerName: "American",
    beerStyle: "IPA",
    price: 3,
    available: true,
  },
  {
    id: 2,
    beerName: "Argenta",
    beerStyle: "IPA",
    price: 4,
    available: false,
  },
  {
    id: 3,
    beerName: "Irish",
    beerStyle: "Red",
    price: 4,
    available: true,
  },
  {
    id: 4,
    beerName: "Scotish",
    beerStyle: "Red",
    price: 3,
    available: true,
  },
  {
    id: 5,
    beerName: "DeEssoCiTratta",
    beerStyle: "APA",
    price: 3,
    available: true,
  },
  {
    id: 6,
    beerName: "Santa APA",
    beerStyle: "APA",
    price: 3,
    available: true,
  },
  {
    id: 7,
    beerName: "German",
    beerStyle: "Pilsen",
    price: 1,
    available: true,
  },
  {
    id: 8,
    beerName: "London Porter",
    beerStyle: "Porter",
    price: 2,
    available: false,
  },
  {
    id: 9,
    beerName: "Scotish ALE",
    beerStyle: "Red",
    price: 5,
    available: false,
  },
];

const Beers = () => {
  const [priceDollar, setPriceDollar] = useState(1000);
  const changeDollar = (event) => {
    setPriceDollar(event.target.value);
  };

  const [buttonView, setButtonView] = useState(false);
  const clickHandler = () => {
    setButtonView(!buttonView);
  };

  const beersMapped = beersList.map((beer) => (
    <>
      <ul key={beer.id}>
        <li>Nombre: {beer.beerName}</li>
        <li>Estilo: {beer.beerStyle}</li>
        <li>Precio: {beer.price * priceDollar}</li>
        <li>{beer.available ? "Esta disponible" : "No esta disponible"}</li>
      </ul>
    </>
  ));
  return (
    <>
      <button value={buttonView} onClick={clickHandler}>
        Mostrar/Ocultar
      </button>
      {buttonView ? (
        <input
          type="number"
          onChange={changeDollar}
          placeholder="Nuevo valor del dolar"
        />
      ) : (
        ""
      )}
      {beersMapped}
    </>
  );
};

export default Beers;
