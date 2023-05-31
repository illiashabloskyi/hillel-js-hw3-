// Визначити середнє арифметичне трьох чисел

let number1 = parseInt(prompt("Введіть перше число:"));
let number2 = parseInt(prompt("Введіть перше число:"));
let number3 = parseInt(prompt("Введіть перше число:"));

if (Number.isNaN(number1) || Number.isNaN(number2) || Number.isNaN(number3)) {
  alert("Спробуйте ще...");
} else if (number1 === null || number2 === null || number3 === null) {
  alert("Спробуйте ще...");
} else {
  const mid = (number1 + number2 + number3) / 3;
  alert(`Середне арифметичне: ${mid}`);
}
