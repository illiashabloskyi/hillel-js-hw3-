// За допомогою prompt запитати як звуть користувача. За допомогою alert вивести "Hello, John! How are you?", де John це те, що ввів користувач

let name = prompt("Enter your name:");

if (parseInt(name)) {
  alert("Please enter a name");
} else if (name === null) {
  alert("Please enter a name");
} else if (name === "") {
  alert("Please enter a name");
} else {
  alert(`Hello, ${name}! How are you?`);
}
