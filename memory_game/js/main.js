console.log("Up and running!");
const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];
const cardOne = cards[0];
cardsInPlay.push("queen");
console.log("User flipped queen");
const cardTwo = cards[2];
cardsInPlay.push("king");
console.log("User flipped king");
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match!");
} else {
	alert("Sorry, try again");
}

