// CrystalsCollector Game, Week 4 Game


$(document).ready(function() {

// Declare global variables here


// Write functions here

// var targetNumber = function getRandomIntInclusive(min, max)
// {

// 	min=Math.ceil(19);
// 	max=Math.floor(120);
// 	return Math.floor(Math.random() * (max - min +1)) + min;
// }

var targetNumber = 50;

$("#target").text(targetNumber);


var counter = 0;

$(".crystal-image").on("click", function() 
{
	counter += 10;
	alert("New score: " + counter);

if (counter === targetNumber) 
{

	alert("You win!");
}

else if (counter > targetNumber)
{

	alert("You went over, you lose!")
}

});



// Program flow and logic here, loops included


});