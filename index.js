var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomnumber2 = Math.floor(Math.random() * 6) + 1;

var player1 = "images/dice" + randomnumber1 + ".png";
var player2 = "images/dice" + randomnumber2 + ".png";
console.log(player1, player2);

document.querySelectorAll("img")[0].setAttribute("src", player1);
document.querySelectorAll("img")[1].setAttribute("src", player2);

if (randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML = "🚩Player1 Wins";
} else if (randomnumber1 < randomnumber2) {
  document.querySelector("h1").innerHTML = "Player2 Wins🚩";
} else {
  document.querySelector("h1").innerHTML = "🚩Draw🚩";
}