$(document).ready(function(){
var magic8Ball={};
magic8Ball.listOfAnswers = [" As I see it, Yes!", " Ask again later", " Better not tell you now", " Cannot predict now", " Concentrate and ask again", " Don't count on it", " It is certain"," It is decidedly so"];
	$("#answer").hide();
//method
magic8Ball.askQuestion = function(question){
//picking an answer
		$("#answer").fadeIn(4000);
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
var randomNumber = Math.random();
var randomNumberArray = randomNumber * magic8Ball.listOfAnswers.length;
var randomIndex = Math.floor(randomNumberArray);
var answer = this.listOfAnswers[randomIndex];
	$("#answer").text(answer);
	$("#8ball").effect( "shake" );
	console.log( question + answer);
};
	
var onClick = function() {
	$("#answer").hide();
var question = prompt("Ask the magic 8-ball your question");	
//wait before showing prompt
	setTimeout(
		function() { $("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png" );
		},500);
	magic8Ball.askQuestion(question);
};
$("#questionButton").click(onClick);
});
