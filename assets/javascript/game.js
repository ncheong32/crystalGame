// Generate a random number between 19 and 120. Player is to match this number to win the game.
var randomInt = function getRandomInt(min, max) {
  return Math.floor(Math.random() * (120 - 19 + 1) + 19);
}

var matchThisNumber = randomInt () ; 

// Fill in the random number in the random number box every time the page is refreshed.
document.getElementById("random-number").innerHTML = matchThisNumber;
console.log(matchThisNumber);

// Generate between 1 and 12 points for each crystal, stored in a variable.
var crystalOnePoints = function getRandomInt(min, max) {
	return Math.floor (Math.random() * (12 - 1 + 1) + 1);
}

var crystalTwoPoints = function getRandomInt(min, max) {
	return Math.floor (Math.random() * (12 - 1 + 1) + 1);
}

var crystalThreePoints = function getRandomInt(min, max) {
	return Math.floor (Math.random() * (12 - 1 + 1) + 1);
}

var crystalFourPoints = function getRandomInt(min, max) {
	return Math.floor (Math.random() * (12 - 1 + 1) + 1);
}

// declare variables for functions
var c1p = crystalOnePoints(); 
var c2p = crystalTwoPoints();
var c3p = crystalThreePoints();
var c4p = crystalFourPoints();

console.log(c1p);
console.log(c2p);
console.log(c3p);
console.log(c4p);

// Assign initial values of zero to #wins and #losses
var wins = 0 ;
document.getElementById("wins").innerHTML = "Wins: "+ wins
var losses = 0 ;
document.getElementById("losses").innerHTML = "Losses: "+losses ;

// Start total score off at zero
var score = 0 ;
document.getElementById("score-number").innerHTML = score;

// define reset function to reset randomInt; c1p; c2p; c3p; c4p; score = 0

function reset() {
		score = 0 ;
		document.getElementById("score-number").innerHTML = score;
		matchThisNumber = randomInt();
		document.getElementById("random-number").innerHTML = matchThisNumber;
		c1p = crystalOnePoints(); 
		c2p = crystalTwoPoints();
		c3p = crystalThreePoints();
		c4p = crystalFourPoints();
}

// When crystals are clicked, add points to the total score.

// if crystalOne is clicked, add its points to totalScore...

$("#crystal-1").click(function() {
	score += c1p ;
	document.getElementById("score-number").innerHTML = score ;
	// if player matches score with randomInt, +1 to # of wins, alert player s/he has won, and then reset crystal points, score, and randomInt.
	if (score === matchThisNumber) {
		alert("You won!");
		wins += 1;
		document.getElementById("wins").innerHTML = "Wins: "+wins ;
		reset ();
	// if player's score exceeds randomInt, +1 to # of losses, alert player s/he has lost, and then reset crystal points, score, and randomInt.	
		} else if (score > matchThisNumber) {
		alert("You lost!");
		losses +=1;
		document.getElementById("losses").innerHTML = "Losses: "+losses ;
		reset ();
		}
			
 });

// if crystalTwo is clicked, add its points to totalScore...
$("#crystal-2").click(function() {
	score += c2p ;
	document.getElementById("score-number").innerHTML = score ;
	// if player matches score with randomInt, +1 to # of wins, alert player s/he has won, and then reset crystal points, score, and randomInt.
	if (score === matchThisNumber) {
		alert("You won!");
		wins += 1;
		document.getElementById("wins").innerHTML = "Wins: "+wins ;
		reset ();
	// if player's score exceeds randomInt, +1 to # of losses, alert player s/he has lost, and then reset crystal points, score, and randomInt.	
		} else if (score > matchThisNumber) {
		alert("You lost!");
		losses +=1;
		document.getElementById("losses").innerHTML = "Losses: "+losses ;
		reset ();
		}
    });

// if crystalThree is clicked, add its points to totalScore...
$("#crystal-3").click(function() {
	score += c3p ;
	document.getElementById("score-number").innerHTML = score ;
	// if player matches score with randomInt, +1 to # of wins, alert player s/he has won, and then reset crystal points, score, and randomInt.
	if (score === matchThisNumber) {
		alert("You won!");
		wins += 1;
		document.getElementById("wins").innerHTML = "Wins: "+wins ;
		reset ();
	// if player's score exceeds randomInt, +1 to # of losses, alert player s/he has lost, and then reset crystal points, score, and randomInt.	
		} else if (score > matchThisNumber) {
		alert("You lost!");
		losses +=1;
		document.getElementById("losses").innerHTML = "Losses: "+losses ;
		reset ();
		}
    });

// if crystalFour is clicked, add its points to totalScore...
$("#crystal-4").click(function() {
	score += c4p ;
	document.getElementById("score-number").innerHTML = score ;
	// if player matches score with randomInt, +1 to # of wins, alert player s/he has won, and then reset crystal points, score, and randomInt.
	if (score === matchThisNumber) {
		alert("You won!");
		wins += 1;
		document.getElementById("wins").innerHTML = "Wins: "+wins ;
		reset ();
	// if player's score exceeds randomInt, +1 to # of losses, alert player s/he has lost, and then reset crystal points, score, and randomInt.	
		} else if (score > matchThisNumber) {
		alert("You lost!");
		losses +=1;
		document.getElementById("losses").innerHTML = "Losses: "+losses ;
		reset ();
		}
    });

$(".crystal").click(function() {
	console.log(this);
});