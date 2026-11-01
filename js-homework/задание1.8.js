let input = prompt("Введите трёхзначное число:");

let number = Number(input);

let withoutLast = Math.floor(number / 10);   // убираем последнюю цифру
let second = withoutLast % 10;               // берём последнюю цифру оставшегося

alert("Вторая цифра: " + second);