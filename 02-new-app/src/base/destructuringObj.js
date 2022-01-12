const person = {
  name: "Pepe",
  age: 20,
  key: "Large",
};
const returnPerson = ({ name, age, key, range = "High" }) => {
  return {
    nameKey: key,
    years: age,
    location: {
      lat: 12.908741,
      lng: -12.354789,
    },
  };
};

const {
  nameKey,
  years,
  location: { lat, lng },
} = returnPerson(person);

console.log(nameKey, years);
console.log(lat, lng);
