const BeersList = ({ beers }) => {
  const argentinaCurrency = 1000;

  return (
    <>
      <h2>Lista de Cervezas</h2>
      <ul>
        {beers.map((beer) => (
          <li key={beer.id}>
            Nombre: {beer.beerName} - Estilo: {beer.beerStyle} - Precio: $
            {beer.price * argentinaCurrency} - Disponible:{" "}
            {beer.available ? "Sí" : "No"}
          </li>
        ))}
      </ul>
    </>
  );
};

export default BeersList;
