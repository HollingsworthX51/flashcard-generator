var inquirer = require("inquirer");
var cards = [];
var cardCount = 0;
var clozeText

//text = question cloze = answer
function ClozeCard(text, cloze) {
	this.text = text
	this.cloze = cloze

}

//sentence
ClozeCard.prototype.full = function() {
	//blank sentence show
	clozeDeleted = this.cloze
	clozeText = this.text

	//replace with answer
	clozeText = clozeText.replace("...", clozeDeleted);

	//console log answer
	console.log(clozeText);

}


var card1 = new ClozeCard("Ronald James Padavona is the ... of Ronnie James Dio.", "real name");
var card2 = new ClozeCard("Ronnie James Dio Fronted a ... called Rainbow with Ritchie Blackmore.", "band");

//array
cards.push(card1);
cards.push(card2);


function studyCards() {
	//recursion loop with inquirer and cardCount
	if(cardCount < cards.length) {

				inquirer.prompt([
					{
						name: "partial",
						message: cards[cardCount].text
					}
				]).then(function(answer) {

					//if answer matches - mark correct.
					if((answer.partial).toLowerCase() === cards[cardCount].cloze) {
						console.log("correct");
						//increase per loop
						cardCount ++
						studyCards();
					} 
					else {
						//if no match - log incorrect  
						console.log("incorrect");
						cards[cardCount].full();
						//increase per loop
						cardCount ++
						studyCards();
					}

				});

	}


}

studyCards();