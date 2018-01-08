// CrystalsCollector Game, Week 4 Game


$(document).ready(function() {

// Declare global variables here
var wins = 0;
var loses = 0;

// Write functions here

var targetNumber = function getRandomIntInclusive(min, max)
{

	min=Math.ceil(19);
	max=Math.floor(120);
	return Math.floor(Math.random() * (max - min +1)) + min;
}



$("#target").text(targetNumber);



var counter = 0;

//Create an array to hold the crystal file locations

var images = [
	'../week-4-game/assets/images/amethyst.png', 
	'../week-4-game/assets/images/emerald.png', 
	'../week-4-game/assets/images/ruby.jpg', 
	'../week-4-game/assets/images/sapphire.png'
	];


var crystalValue = [0,0,0,0];



//generate random numbers to assign to each crystal

for (var i = 0; i < crystalValue.length; i++)
{

	crystalValue[i] = Math.floor(Math.random() * 12) + 1;

	console.log(crystalValue[i]);
	

}



// Load images onto the page, assign random values to each image

for (var i = 0; i < crystalValue.length; i++)
{
	
	var imageCrystal = $("<img>");

	imageCrystal.addClass("crystal-image");
	
	imageCrystal.attr("src", images[i]);

	imageCrystal.attr("data-crystalvalue",crystalValue[i]);

	$("#gems").append(imageCrystal);

}



$(".crystal-image").on("click", function()
{
	var gemValue = ($(this).attr("data-crystalvalue"));

	gemValue = parseInt(gemValue);

	counter += gemValue;

	$("#clickScore").text(counter);
	
	alert("New score: " + counter);
	
	if (counter === targetNumber)
	{
		alert("You win!");
		wins++;
	}

	else if (counter >= targetNumber)
	{
		alert("You lose!");
		loses++;
	}


	$("#wins").text(wins);
	$("#loses").text(loses);



});





});