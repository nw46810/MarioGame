var wins = 0;
var losses = 0;

var currentPower = 0;

/**Random Number**/
var number = Math.floor((Math.random()* 100) + 19);

/**Random Power up**/
var blue = Math.floor((Math.random()* 12) + 1);
var red = Math.floor((Math.random()* 12) + 1);
var yellow = Math.floor((Math.random()* 12) + 1);
var green = Math.floor((Math.random()* 12) + 1);

var configPower = function(){
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
	$('.currentPower').empty();
	$('.currentPower').append(currentPower);
	
}
configPower();

var reset = function(){
	currentPower = 0;
    number = Math.floor((Math.random()* 100) + 19);

	$('.number').empty();
	$('.number').append(number);

	blue = Math.floor((Math.random()* 12) + 1);
    red = Math.floor((Math.random()* 12) + 1);
    yellow = Math.floor((Math.random()* 12) + 1);
    green = Math.floor((Math.random()* 12) + 1);
    configPower();
}

var config = function (){
	if (currentPower == number) {
		wins = wins + 1;
		reset();
}
	else if(currentPower > number){
		losses = losses + 1;
		reset();
}
	else{
		configPower();
}}

	$('.currentPower').append(currentPower);
	$('.number').append(number);

	$(document).ready(function(){
	$('#blue').on("click", function(){
		currentPower = currentPower + red;
		config();
	})
	$('#red').on("click", function(){
		currentPower  = currentPower  + blue;
		config();
	})
	$('#yellow').on("click", function(){
		currentPower  = currentPower  + yellow;
		config();
	})
	$('#green').on("click", function(){
		currentPower  = currentPower  + green;
		config();
	})
});

