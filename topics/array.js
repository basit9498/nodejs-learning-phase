const array = ["apple", "mango"];

// const copyArray = array;
// copyArray[1] = "orange";
// console.log("array ", array, "copyArray", copyArray);//how to slove this issue it update the orignal as well

const copyArray = [...array];
// also
const copyArrayV2 = array.slice();
copyArray[1] = "orange";
copyArrayV2[1] = "orange";
console.log(
  "array ",
  array,
  "copyArray",
  copyArray,
  "copyArrayV2",
  copyArrayV2
); //Solve
