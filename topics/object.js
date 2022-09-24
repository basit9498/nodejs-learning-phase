const person = {
  name: "abc",
  age: 12,
  getData: function () {
    console.log("my name:", this.name);
  },
  getDataArrow: () => {
    console.log("my name:", this.name);
  },
  getDataDirc() {
    console.log("my name:", this.name);
  },
};

// console.log(person.getData());
// console.log(person.getDataArrow());
console.log(person.getDataDirc());

// Update const object and let object

const carConst = {
  name: "Audi",
};
let carLet = {
  name: "BMW",
};

console.log("Real Object:", carConst);
carConst.name = "Audi update";
console.log("After Update Real Object:", carConst);
carConst.model = 2022;
console.log("After Update add Real Object:", carConst);

//carConst = { name: "BMW", year: 2022 };
//console.log("After New the exisit add Real Object:", carConst); // not working but it work if object is let
carLet = { name: "New Ferrari", year: 2022 };
console.log(" Object:", carLet);

// Assign
const animalObject = {
  name: "Dog",
};
console.log("real Object ", animalObject);
const copyAnimal = animalObject;
console.log("copy Object ", copyAnimal);
// copyAnimal.name = "cat";
// console.log("real Object ", animalObject);//this is updated becuse we cpoy the address as will but how to solve
const copyAnimalV2 = { ...animalObject };
// another way
const copyAnimalV3 = Object.assign({}, animalObject);
copyAnimalV3.name = "sparrow";
copyAnimalV2.name = "Hen";
console.log(
  "real Object ",
  animalObject,
  "Copy V2",
  copyAnimalV2,
  "Copy V3",
  copyAnimalV3
);
