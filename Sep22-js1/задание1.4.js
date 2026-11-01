{
  const KM_TO_MILES = 0.62;

  let input = prompt("Задание 1.4: Введите расстояние в километрах:");

  let km = Number(input);

  let miles = km * KM_TO_MILES;

  alert("Задание 1.4: " + km + " км = " + miles + " миль");
}
