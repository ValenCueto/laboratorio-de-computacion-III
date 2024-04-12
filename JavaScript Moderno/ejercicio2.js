let input = [
    { name: "John", age: 21, city: "New York" },
    { name: "Mike", age: 28, city: "Moscow" },
    { name: "Danny", age: 30, city: "London" },
    { name: "Lisa", age: 26, city: "Paris" },
    { name: "Sophie", age: 19, city: "Berlin" }
];

const namesAndAges = input.filter((num) => {
    return num.age >= 20 && num.age <= 29;
});

console.log(namesAndAges);