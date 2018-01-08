// CrystalsCollector Game, Week 4 Game


$(document).ready(function() {

// Declare global variables here


// Write functions here

var targetNumber = function getRandomIntInclusive(min, max)
{

	min=Math.ceil(19);
	max=Math.floor(120);
	return Math.floor(Math.random() * (max - min +1)) + min;
}

console.log(targetNumber);
// var targetNumber = 50;
$("#target").text(targetNumber);



var counter = 0;

//Create an array to hold the crystal file locations

var images = [
	'../week-4-game/assets/images/amethyst.png', 
	'../week-4-game/assets/images/emerald.png', 
	'../week-4-game/assets/images/ruby.jpg', 
	'../week-4-game/assets/images/sapphire.png'
	];
console.log(images);

var crystalValue = [1,1,1,1];

console.log(crystalValue);

for (var i = 0; i < crystalValue.length; i++)
{

	var gemValue = function getRandomIntInclusive(min, max)
	{
		min=Math.ceil(1);
		max=Math.floor(12);
		return Math.floor(Math.random() * (max - min +1)) + min;

	};

	console.log(gemValue());

	

}

console.log(crystalValue);

// Load images onto the page, assign random values to each image

for (var i = 0; i < crystalValue.length; i++)
{
	
	var imageCrystal = $("<img>");

	imageCrystal.addclass("crystal-image");
	
	imageCrystal.attr("src", images[i]);

	imageCrystal.attr("data-crystalvalue",crystalValue[i]);

	$("#gems").append(imageCrystal);

}



$(".crystal-image").on("click", function()
{
	var clickCrystal = ($(this).attr("data-crystalvalue"));

	clickCrystal = parseInt(clickCrystal);

	counter += 10;
	$("#clickScore").text(counter);
	alert("New score: " + counter);



});


// console.log(counter);

// $("#clickScore").text(counter);

// });



// $("#clickScore").text(counter);
// 	// counter += 10;
// 	alert("New score: " + counter);

// if (counter === targetNumber) 
// {

// 	alert("You win!");
// }

// else if (counter > targetNumber)
// {

// 	alert("You went over, you lose!")
// }

// });



// Program flow and logic here, loops included


});