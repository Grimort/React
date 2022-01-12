const persons = ["Pepe", "Paco", "Pepa"];
const [p1] = persons;
const [, p2] = persons;
const [, , p3] = persons;

console.log(p1);
console.log(p2);
console.log(p3);

const returnArray = () => {
  return ["asdf", 1234];
};

const [word, number] = returnArray();

console.log(word, number);

const callState = (value) => {
  return [
    value,
    () => {
      console.log("Hello world!");
    },
  ];
};
const [name] = callState("React!");
const [, setName] = callState();

console.log(name);
setName();
