let input1 = prompt("Задание 1.5: Введите первое число:");
let input2 = prompt("Задание 1.5: Введите второе число:");

let a = Number(input1);
let b = Number(input2);

let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;

alert("Задание 1.5:\n" +
  a + " + " + b + " = " + sum + "\n" +
  a + " - " + b + " = " + difference + "\n" +
  a + " * " + b + " = " + product + "\n" +
  a + " / " + b + " = " + quotient
);