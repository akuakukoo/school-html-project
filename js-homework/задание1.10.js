const BASE_SALARY = 250;
const PERCENT = 0.10;

let input = prompt("Введите сумму продаж за месяц ($):");

let sales = Number(input);

let salary = BASE_SALARY + sales * PERCENT;

alert("Зарплата: $" + salary);