const KM_TO_MILES = 0.62;

let input = prompt("Введите расстояние в километрах:");

let km = Number(input);

let miles = km * KM_TO_MILES;

alert(km + " км = " + miles + " миль");