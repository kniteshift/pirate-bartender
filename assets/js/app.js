
var questions = 
		[{
			type: 'bitter',
			question: 'Lubber of the bitters?',
			ingredient: ['Shake of bitters', 'splash of tonic', 'twist of lemon peel']
		},
		{
			type: 'fruity',
			question:'Ye enjoy the fruits?',
			ingredient: ['Slice of orange', 'dash of cassis', 'cherry on top']
		},
		{
			type: 'sweet',
			question:'Oi! taste for ye sweets?',
			ingredient: ['Sugar cube', 'spoonful of honey', 'splash of cola']
		},
		{
			type: 'strong',
			question:'Care for the strong?',
			ingredient: ['Glug of rum', 'slug of whisky', 'splash of gin'],
		},
		{
			type: 'salty',
			question:'Do we have a taste for the salt waters?',
			ingredient: ['Olive on a stick', 'salt-dusted rim', 'rasher of bacon']
		}];

var bartend = function(ingredient){
	this.ingredient = ingredient;
}


var random = function() {
	var number = Math.floor((Math.random() * 3) + 0);
	return number;
};

var questiontypes = [];

function store() {
	for (var i = 0; i < questions.length; i++) {
		questiontypes.push(questions[i].type);
	}
};
store();

$(function(){

	questions.map(function(question){
		$('#questions').prepend('<input type="checkbox" value=' + question.type + ' id="'+ question.type +'" name="drink">' + question.question + '</input><br>');
	});


	$('#questions').submit( function(e){
		e.preventDefault();
		var ingredients = [];

		questions.map(function(question){
			if($.inArray($('input[type="checkbox"]:checked').val(), questiontypes) > -1){
				ingredients.push(question.ingredient[0]);
				console.log("if activated");
			};
		});

		var drink = '';
		ingredients.map(function(ingredient, i){
		
		if(i !== 0) {
			drink += " with a ";
		}
		
		drink += ingredient;
	});

		$('.atthebar').html(drink);
	});

});