// Створити скрипт для складання, віднімання, множення та поділу двох чисел та виведення результатів
let number1 = prompt("Введіть перше число:");
let operator = prompt("Введіь дію (+, -, *, /):");
let number2 = prompt("Введіть друге число:");

switch (operator) {
  case "+":
    const sum = parseInt(number1) + parseInt(number2);
    alert(`Складдання: ${number1} + ${number2} = ${sum}.`);
    break;
  case "-":
    const sub = parseInt(number1) - parseInt(number2);
    alert(`Віднімання: ${number1} - ${number2} = ${sub}.`);
    break;
  case "*":
    const mul = parseInt(number1) * parseInt(number2);
    alert(`Множення: ${number1} * ${number2} = ${mul}.`);
    break;
  case "/":
    const div = parseInt(number1) / parseInt(number2);
    alert(`Ділення: ${number1} / ${number2} = ${div}.`);
    break;
  default:
    alert("Спробуйте ще....");
    break;
}
