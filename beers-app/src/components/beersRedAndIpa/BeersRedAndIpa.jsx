const BeersRedAndIpa = ({ redAndIPA }) => {
  const beerRedCount = redAndIPA.filter(
    (beer) => beer.beerStyle === "Red"
  ).length;
  const beerIpaCount = redAndIPA.filter(
    (beer) => beer.beerStyle === "IPA"
  ).length;

  return (
    <>
      <h2>Cantidad de Cervezas IPA y Red:</h2>
      <ul>
        <li>{beerRedCount + beerIpaCount}</li>
      </ul>
    </>
  );
};

export default BeersRedAndIpa;
