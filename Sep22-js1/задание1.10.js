{
  const BASE_SALARY = 250;
  const PERCENT = 0.10;

  let input = prompt("Задание 1.10: Введите сумму продаж за месяц ($):");

  let sales = Number(input);

  let salary = BASE_SALARY + sales * PERCENT;

  alert("Задание 1.10: Зарплата: $" + salary);
}
