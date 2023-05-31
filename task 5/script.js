// Розкласти по цифрах п'ятизначне число і вивести у вихідному порядку через пробіл (використовувати оператор “розподіл по модулю” (%)

let number = prompt("Введіть п'ятизначне число:");

if(number.length === 5){
  number = parseInt(number);
  const number1 = Math.floor(number / 10000);
  const number2 = Math.floor(number / 1000) % 10;
  const number3 = Math.floor(number / 100) % 10;
  const number4 = Math.floor(number / 10) % 10;
  const number5 = number % 10;
  alert(`${number1} ${number2} ${number3} ${number4} ${number5}`)
}else{
  alert("Спробуйте ще...");
}