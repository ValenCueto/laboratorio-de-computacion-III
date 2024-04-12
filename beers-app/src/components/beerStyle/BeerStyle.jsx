const BeerStyle = ({ beers }) => {
  return (
    <>
      <h2>Estilo de cervezas:</h2>
      <ul>
        {beers.map((beer) => (
          <li key={beer.id}>Estilo: {beer.beerStyle}</li>
        ))}
      </ul>
    </>
  );
};

export default BeerStyle;
