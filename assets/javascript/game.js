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

// Generate 4 random numbers and assign to each of the gems

// var gem1 = function getRandomIntInclusive(min, max)
// {
// 	min=Math.ceil(1);
// 	max=Math.floor(12);
// 	return Math.floor(Math.random() * (max - min +1)) + min;


// }
// // $("gem1").text(clickScore)

// console.log(gem1());

// var gem2 = function getRandomIntInclusive(min, max)
// {
// 	min=Math.ceil(1);
// 	max=Math.floor(12);
// 	return Math.floor(Math.random() * (max - min +1)) + min;


// }
// // $("gem2").text(clickScore)
// console.log(gem2());

// var gem3 = function getRandomIntInclusive(min, max)
// {
// 	min=Math.ceil(1);
// 	max=Math.floor(12);
// 	return Math.floor(Math.random() * (max - min +1)) + min;


// }
// // $("gem3").text(clickScore)
// console.log(gem3());

// var gem4 = function getRandomIntInclusive(min, max)
// {
// 	min=Math.ceil(1);
// 	max=Math.floor(12);
// 	return Math.floor(Math.random() * (max - min +1)) + min;


// }
// $("gem4").text(clickScore)
// console.log(gem4());




var counter = 0;
var images = [
	'../assets/images/amethyst.png', 
	'../assets/images/emerald.png', 
	'../assets/images/ruby.jpg', 
	'../assets/images/sapphire.png'
	];
console.log(images);

var crystalValue = [0,0,0,0];

console.log(crystalValue);

for (var i = 0; i < crystalValue.length; i++)
{

	var gemValue = function getRandomIntInclusive(min, max)
	{
		min=Math.ceil(1);
		max=Math.floor(12);
		return Math.floor(Math.random() * (max - min +1)) + min;
		
	crystalValue.push(this);
	};

	console.log(gemValue());


}

console.log(crystalValue);

// Load images onto the page, assign random values to each image

for (var i = 0; i < crystalValue.length; i++)
{
	
	var imageCrystal = $("<img>");

	// imageCrystal.addclass("crystal-image");
	
	imageCrystal.attr(images[i]);

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
// $(".crystal-image").on("click", function() {
// 	var gemClicked = $(this).attr("class");
// 	console.log(gemClicked);

// 	switch (gemClicked){
// 		case "gem1":
// 		counter = counter + gem1();

// 		case "gem2":
// 		counter = counter + gem2();

// 		case "gem3":
// 		counter = counter + gem3();

// 		case "gem4":
// 		counter = counter + gem4();

// 		default:
// 			counter = 0;

// 	}

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