var question1 = {
	question: "Cat?",
	answer1: {
		answer: "Cat",
		type: "correct"
	}, 
	answer2: {
		answer: "Cat",
		type: "incorrect"
	}, 
	answer3: {
		answer: "Cat",
		type: "incorrect"
	}, 
	answer4: {
		answer: "Cat",
		type: "incorrect"
	}, 
}

var question2 = {
	question: "Dog?",
	answer1: {
		answer: "Cat",
		type: "correct"
	}, 
	answer2: {
		answer: "Cat",
		type: "incorrect"
	}, 
	answer3: {
		answer: "Cat",
		type: "incorrect"
	}, 
	answer4: {
		answer: "Cat",
		type: "incorrect"
	}, 
}

var display;
var off;

var countdown = function() {
		$("#time").html(count);
		count -= 1;
		timer = setTimeout(function() { countdown() }, 1000)
	};

function displayQuestion() {
		$("#question").html(questions[i].question);
		$("#answer-1").html(questions[i].answer1.answer).attr("class", questions[i].answer1.type)
		$("#answer-2").html(questions[i].answer2.answer).attr("class", questions[i].answer2.type)
		$("#answer-3").html(questions[i].answer3.answer).attr("class", questions[i].answer3.type)
		$("#answer-4").html(questions[i].answer4.answer).attr("class", questions[i].answer4.type)
};

function startTimer() {
	display = setTimeout(function () {
			incorrect += 1;
			$("#win-loss").html("Out of time!");
			displayStats();
			messageOff();

			}, 10000);
	};

function displayStats() {
	$("#content").toggle();
	$("#message-box").toggle();
	$("#correct-answers").html("Correct Answers: " + correct);
	$("#incorrect-answers").html("Inorrect Answers: " + incorrect);
}

function messageOff() {
	off = setTimeout(function() {
				$("#message-box").toggle();
				$("#content").toggle();
				i+=1;
				count = 30;
				displayQuestion();
			}, 5000);
}

function stopTimer() {
	clearTimeout(display)
}

function gameOver() {
	$("#content").toggle();
	$("#game-over").toggle();
	$("#final-correct").html("Correct Answers: " + correct);
	$("#final-incorrect").html("Incorrect Answers: " + incorrect);
}

var questions = [question1, question2];
var count = 30;
var timer;
var timerOn;
var gameOn = true;
var i = 0;
var correct = 0;
var incorrect = 0;


$("#play").on("click", function() {

	$("#instructions").toggle();

	$("#content").toggle();

	displayQuestion();

	if (i < questions.length) {

		countdown();

		startTimer();

		$("li.correct").on("click", function() {
				correct++;
				stopTimer();
				$("#win-loss").html("Correct");
				displayStats();
				messageOff();
		})

		$("li.incorrect").on("click", function() {
				incorrect++;
				stopTimer();
				$("#win-loss").html("Correct");
				displayStats();
				messageOff();
		})			
	} else {
		gameOver();
	}

});
















 
		

