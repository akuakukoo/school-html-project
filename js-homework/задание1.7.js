const DAY_TIME = 1440;

let input1 = prompt("Введите значение часов:");
let input2 = prompt("Введите значение минут:");

let hour = Number(input1);
let minutes = Number(input2);

let fullminutes = hour * 60 + minutes;

let left = DAY_TIME - fullminutes;       // сколько минут осталось до конца суток

let hoursLeft = Math.floor(left / 60);   // целые часы
let minutesLeft = left % 60;             // оставшиеся минуты

alert(hoursLeft + " ч " + minutesLeft + " мин");