
var questions = {
		bitter:'Lubber of the bitters?',
		fruity:'Ye enjoy the fruits?',
		sweets:'Oi! taste for ye sweets?',
		strong:'Care for the strong?',
		salty:'Do we have a taste for the salt waters?',
		};

var bartend = function(ingredient){
	this.ingredient = ingredient;
}

var strong = new bartend(['Glug of rum', 'slug of whisky', 'splash of gin']);
var salty = new bartend(['Olive on a stick', 'salt-dusted rim', 'rasher of bacon']);
var bitter = new bartend(['Shake of bitters', 'splash of tonic', 'twist of lemon peel']);
var sweet = new bartend(['Sugar cube', 'spoonful of honey', 'splash of cola']);
var fruity = new bartend(['Slice of orange', 'dash of cassis', 'cherry on top']);

var menu = [strong, salty, bitter, sweet, fruity];
console.log(menu);


var random = function() {
	var number = Math.floor((Math.random() * 3) + 0);
	return number;
};

$(function(){

	var val = [];
	var storage = [];

	function appendToHTML() {
		var html = '';
		for (var key in questions) {
			html += '<input type="checkbox" value=' + key + ' id="'+key+'" name="drink">' + questions[key] + '</input><br>';
		}
		html += '<input type="submit" value="Submit"></input>'
		$('#questions').append(html);
	}
	appendToHTML();

	$('#questions').submit( function(e){
		e.preventDefault();
		$('input[type="checkbox"]:checked').each(function(i) {
			val[i] = $(this).val();
		});
		bartend.createDrink(val);
	});

	var questionKeys = Object.keys(questions);
	
	bartend.prototype.createDrink = function(tastes){
		for (var i = 0; i < val.length; i++) {
			if(val[i] == questionKeys[i]) {
				questionKeys[i].push(storage);
			}
		}
	}
});