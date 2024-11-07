const fighters = [
  {
    name: "Bruce",
    surname: "Lee",
    age: 16,
  },

  {
    name: "Gor",
    surname: "Vardanyan",
    age: 32,
  },
];

const stringFighters = `[
    {
      "name": "Bruce",
      "surname": "Lee",
      "age": 16
    },
    {
      "name": "Gor",
      "surname": "Vardanyan",
      "age": 32
    }
  ]`;

const toStringJson = JSON.stringify(fighters);
console.log(toStringJson);

const toJSONString = JSON.parse(stringFighters);
console.log(toJSONString);

const res = fetch("js/json/json.json");

res
  .then((response) => response.json())
  .then((value) => console.log(JSON.stringify(value)));
