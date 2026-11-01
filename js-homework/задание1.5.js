let input1 = prompt("Введите первое число:");
let input2 = prompt("Введите второе число:");

let a = Number(input1);
let b = Number(input2);

let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;

alert(
  a + " + " + b + " = " + sum + "\n" +
  a + " - " + b + " = " + difference + "\n" +
  a + " * " + b + " = " + product + "\n" +
  a + " / " + b + " = " + quotient
);