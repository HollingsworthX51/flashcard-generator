var inquirer = require("inquirer");
var cards = []
var cardCount = 0

function BasicCard(front, back) {
	this.front = front
	this.back = back
}

var card1 = new BasicCard("What is Ronnie James Dio's height?", "5ft 4");
var card2 = new BasicCard("Which band did Ronnie James Dio perform in with Ritchie Blackmore?", "rainbow");

cards.push(card1);
cards.push(card2);


function studyCards() {
	//Trying this recursion loop to advance cards
	if(cardCount < cards.length) {

				inquirer.prompt([
					{
						name: "question",
						message: cards[cardCount].front
					}
				]).then(function(answer) {

					if((answer.question).toLowerCase() === cards[cardCount].back) {
						console.log("correct");
						//increase per loop
						cardCount ++
						//continue recursion 
						studyCards();
					} 
					else {
						//state back of card
						console.log("not correct");
						console.log("BACK READS:  " + cards[cardCount].back);
						cardCount ++
						
						studyCards();
					}

				});

	}


}

studyCards();