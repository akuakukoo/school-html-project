let target = document.getElementById("target");

let size = 50;
let hits = 0;
let clicks = 0;

// Перемещает цель в случайную точку на экране
function moveTarget() {
  let x = Math.random() * (window.innerWidth - size);
  let y = Math.random() * (window.innerHeight - size);

  target.style.left = x + "px";
  target.style.top = y + "px";
}

// Обновляет счётчики на экране
function updateStats() {
  let accuracy = Math.round((hits / clicks) * 100);

  document.getElementById("hits").textContent = hits;
  document.getElementById("clicks").textContent = clicks;
  document.getElementById("accuracy").textContent = accuracy;
}

// Нажатие на цель: попадание, цель уменьшается на 1px и перемещается
target.addEventListener("mousedown", function () {
  hits++;

  if (size > 5) {
    size--;
  }
  target.style.width = size + "px";
  target.style.height = size + "px";

  moveTarget();
});

// Любое нажатие на странице (и мимо цели, и по ней) считается кликом
document.addEventListener("mousedown", function () {
  clicks++;
  updateStats();
});

moveTarget();
