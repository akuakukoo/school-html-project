let input = prompt("Введите пятизначное число:");

let number = Number(input);

let last = number % 10;                    // последняя цифра: 5
let rest = Math.floor(number / 10);        // число без последней цифры: 1234

let result = last * 10000 + rest;          // 5 * 10000 + 1234 = 51234

alert(result);