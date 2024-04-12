const BeersAvailable = ({ beers }) => {
  const argentinaCurrency = 1000;

  return (
    <>
      <h2>Lista de Cervezas Disponibles:</h2>
      <ul>
        {beers
          .filter((beers) => beers.available)
          .map((beer) => (
            <li key={beer.id}>
              Nombre: {beer.beerName} - Estilo: {beer.beerStyle} - Precio: $
              {beer.price * argentinaCurrency}
            </li>
          ))}
      </ul>
    </>
  );
};

export default BeersAvailable;
