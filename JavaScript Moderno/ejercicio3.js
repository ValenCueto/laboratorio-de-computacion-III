let countries = [
    { name: "Argentina", population: 45810000 },
    { name: "Uruguay", population: 3426000 },
    { name: "Paraguay", population: 6704000 },
    { name: "Colombia", population: 51520000 },
    { name: "Chile", population: 19490000 }
];

countries.sort((countrie1, countrie2) => countrie2.population - countrie1.population);

console.log(countries);