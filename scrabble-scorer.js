// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

word = ""

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

function initialPrompt() {
  console.log("Let's play some scrabble!")
  let userWord = input.question("Enter a Word: ")
  return userWord
};


// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
function scorerPrompt(userWord) {
  console.log(`Which scoring algorithm would you like to use? \n\n0 - Simple: One point per character \n1 - Vowel Bonus: Vowels are worth 3 points \n2 - Scrabble: Uses scrabble point system`)

  let userInput = input.question("Enter 0, 1, or 2: ");

  while (userInput > 2 || userInput < 0) {
    userInput = input.question("Enter 0, 1, or 2: ")
  }
  
  console.log("algorithm name: ", scoringAlgorithms[userInput].name);
  console.log(`Score for '${userWord}': `, scoringAlgorithms[userInput].scoringFunction(userWord))

 }

var scrabbleScore = function(word) {
  word = word.toUpperCase();
  let sumOfScore = 0

  for (let i = 0; i < word.length; i++) {
    sumOfScore += newPointStructure[word[i]]
    
  }
  return sumOfScore
}

var simpleScore = function simpleScore(word) {
	// word = word.toUpperCase();
	let letterPoints1 = 0;
 
	for (let i = 0; i < word.length; i++){

    letterPoints1 += 1

  }

	return letterPoints1;

}

var vowelBonusScore = function(word) {

  let vowels = ["a", "e", "i", "o", "u"];
  word = word.toLowerCase()
  let letterPoints = 0

  for (let i = 0; i < word.length; i++) {
    
    if (vowels.includes(word[i])) {
      letterPoints += 3 
      continue
    }

    letterPoints += 1
  }

  return letterPoints
}


let newPointStructure = transform(oldPointStructure)

const scoringAlgorithms = [
  {
    name: "Simple Score",
    description: "Each letter is worth 1 point.",
    scoringFunction: simpleScore
  }, 
  
  {
    name: "Bonus Vowels",
    description: "Vowels are 3 pts, consonants are 1 pt",
    scoringFunction: vowelBonusScore

  },
  {
    name: "Scrabble",
    description: "The traditional scoring algorithm.",
    scoringFunction: scrabbleScore
  }
];


function transform(oldPointStructure) {
  //take oldPointStructure transfrom into newPointStructure
  let newPointStructure = {};
  for(pointValue in oldPointStructure) {
    for (let i = 0; i < oldPointStructure[pointValue].length; i++) {
      newPointStructure[oldPointStructure[pointValue][i]] = Number(pointValue);
    }
  }
  console.log(newPointStructure)
  return newPointStructure
}



function runProgram() {
   let word = initialPrompt();
   scorerPrompt(word);
  //  let pointsOld = oldScrabbleScorer(word);
  //  console.log(pointsOld)
   
}


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

