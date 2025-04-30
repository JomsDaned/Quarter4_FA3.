
let num = prompt("Enter a number:");

while (isNaN(num)) {
  num = prompt("Please enter a valid number:");
}
num = parseInt(num); 
let message = "Number inputted: " + num + "<br><br>";

if (num % 2 !== 0) {
  for (let i = num; i >= 1; i--) {
    for (let j = 1; j <= num; j++) {
      message += i + " ";
    }
    message += "<br>";
  }
} else {
  for (let i = num; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      message += i + " ";
    }
    message += "<br>";
  }
}
document.getElementById("output").innerHTML = message;
