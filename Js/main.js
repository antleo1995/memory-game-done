//declaring card object array
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];
//get a random number between 0 and 3
function randomWholeNum() {
  	return Math.floor(Math.random() * 4);
}
//loads an array with number 0 - 3 in radom order without repeating the number
function played() {
	//loads the first number in the array and generates a new random number
	var playedCards = [];
	var num = randomWholeNum();
	playedCards.push(num);
	num = randomWholeNum();
    
    //loop through to create an array with a lenghty of 4 
    for (i=0; playedCards.length < 4; i++)
    {       //checks if number is used - if not pushes to array otherwise new number is generated
    	if (playedCards.indexOf(num) === -1){
    		playedCards.push(num);
    		    	} else {
    		num = randomWholeNum();
    		}
    }
    //return array for further use
    return playedCards;
}
//function - first checks array length and if long enough executes code to compare cards
var checkForMatch = function (){
if (cardsInPlay.length === 2 ) {	
	if (cardsInPlay[0] === cardsInPlay[1]) {
			alert ("You found a match!");
	} else {
			alert ("Sorry, try again.")
		}
	} else {
	    console.log("Keep flipping!")
	}
}
//function - get data id of card, adds to cards played and checks for match
var flipCard = function (){
		cardId = this.getAttribute('data-id');
		this.setAttribute("src", cards[cardId].cardImage);
		console.log ("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
		cardsInPlay.push(cards[cardId].rank);
		//run check
		checkForMatch();
	}
//create the board of cards
var createBoard = function (){
	for (i = 0; i < cards.length; i++)
	{   
		var indexValue = played();
		for (i=0; i < indexValue.length; i++){
		var cardElement = document.createElement("img");
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id',indexValue[i]);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
		console.log("Adding Card " + i);
		}
	}
}
//creates the cards
createBoard();