function divideBy(firstNumber) {
  return function(secondNumber) {
    return secondNumber / firstNumber;
  }
}

function addBy(firstNumber) {
  return function(secondNumber) {
    return firstNumber + secondNumber;
  }
}

let addBy100 = addBy(100);
console.log(addBy(100));

let addBy1000 = addBy(1000);
console.log(divideBy(1000));

let divideBy10 = divideBy(10);
console.log(divideBy(10));

let divideBy100 = divideBy(100);
console.log(divideBy(100));
