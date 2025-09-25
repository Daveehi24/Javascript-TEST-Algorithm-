function addNumberAndString(num, str) {
  const result = num + str;
  return result;
}


const myNumber = 10;
const myString = "hello";
const combinedResult = addNumberAndString(myNumber, myString);

console.log(`The number is:  ${myNumber}`)// I used ${} because it is used to show the variable but in embedded form
// 10
console.log(`The string is: ${myString}`); // "Hello"
console.log(`The "added" result is: ${combinedResult}`); //"10hello"
console.log(`The type of the result is: ${typeof combinedResult}`);