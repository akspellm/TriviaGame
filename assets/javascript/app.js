var questions = [

question1 = {
	question: "What is the largest breed of cat?",
	answer1: {
		answer: "Lion",
		type: "incorrect"
	}, 
	answer2: {
		answer: "Tiger",
		type: "correct"
	}, 
	answer3: {
		answer: "Panther",
		type: "incorrect"
	}, 
	answer4: {
		answer: "Mountain Lion",
		type: "incorrect"
	}, 
},

question2 = {
	question: "Which continent are cats not native to?",
	answer1: {
		answer: "Europe",
		type: "incorrect"
	}, 
	answer2: {
		answer: "North America",
		type: "incorrect"
	}, 
	answer3: {
		answer: "Australia",
		type: "correct"
	}, 
	answer4: {
		answer: "Africa",
		type: "incorrect"
	}, 
},

question3 = {
	question: "Which of the following senses is the poorest developed in a cat?",
	answer1: {
		answer: "Smell",
		type: "incorrect"
	}, 
	answer2: {
		answer: "Hearing",
		type: "incorrect"
	}, 
	answer3: {
		answer: "Touch",
		type: "incorrect"
	}, 
	answer4: {
		answer: "Sight",
		type: "correct"
	}, 
},

question4 = {
	question: "Where did modern cat shows begin?",
	answer1: {
		answer: "London",
		type: "correct"
	}, 
	answer2: {
		answer: "Paris",
		type: "incorrect"
	}, 
	answer3: {
		answer: "New York",
		type: "incorrect"
	}, 
	answer4: {
		answer: "Prague",
		type: "incorrect"
	}, 
},

question5 = {
	question: "Which is recommended as the best culinary option for domestic cats?",
	answer1: {
		answer: "Human Food",
		type: "incorrect"
	}, 
	answer2: {
		answer: "Household Bugs",
		type: "incorrect"
	}, 
	answer3: {
		answer: "Dry Cat Food",
		type: "correct"
	}, 
	answer4: {
		answer: "Moist Cat Food",
		type: "incorrect"
	}, 
},

question6 = {
	question: "Why do house cats rub themselves against their owners' legs and ankles?",
	answer1: {
		answer: "It's a sign of hunger.",
		type: "incorrect"
	}, 
	answer2: {
		answer: "It's a sign of affection.",
		type: "incorrect"
	}, 
	answer3: {
		answer: "As a warning.",
		type: "incorrect"
	}, 
	answer4: {
		answer: "It's a type of scent marking.",
		type: "correct"
	}, 
},

question7 = {
	question: "What organization sets the standards for cat breeds?",
	answer1: {
		answer: "Cat Fanciers'Association",
		type: "correct"
	}, 
	answer2: {
		answer: "Federation of Cat Breeders",
		type: "incorrect"
	}, 
	answer3: {
		answer: "Fancy Feast Catiers",
		type: "incorrect"
	}, 
	answer4: {
		answer: "International Cat Association",
		type: "incorrect"
	}, 
},

question8 = {
	question: "About how many cat breeds does the CFA recognize?",
	answer1: {
		answer: "30",
		type: "incorrect"
	}, 
	answer2: {
		answer: "35",
		type: "correct"
	}, 
	answer3: {
		answer: "50",
		type: "incorrect"
	}, 
	answer4: {
		answer: "100",
		type: "incorrect"
	}, 
},

question9 = {
	question: "Which breed of cat has no tail?",
	answer1: {
		answer: "Korat",
		type: "incorrect"
	}, 
	answer2: {
		answer: "Sphinx",
		type: "incorrect"
	}, 
	answer3: {
		answer: "Egyption Mau",
		type: "incorrect"
	}, 
	answer4: {
		answer: "Manx",
		type: "correct"
	}, 
},

question10 = {
	question: "What's the most popular short-haired cat in the United States?",
	answer1: {
		answer: "Abyssinian",
		type: "incorrect"
	}, 
	answer2: {
		answer: "Persian",
		type: "incorrect"
	}, 
	answer3: {
		answer: "Siamese",
		type: "correct"
	}, 
	answer4: {
		answer: "Bengal",
		type: "incorrect"
	}, 
}
];


var display;
var off;

var countdown = function() {
		$("#time").html(count);
		count -= 1;
		timer = setTimeout(function() { countdown() }, 1000)
	};

function displayQuestion() {
		$("#question").html(questions[i].question);
		$("#answer-1").html(questions[i].answer1.answer).removeClass().attr("class", questions[i].answer1.type)
		$("#answer-2").html(questions[i].answer2.answer).removeClass().attr("class", questions[i].answer2.type)
		$("#answer-3").html(questions[i].answer3.answer).removeClass().attr("class", questions[i].answer3.type)
		$("#answer-4").html(questions[i].answer4.answer).removeClass().attr("class", questions[i].answer4.type)

		console.log(questions[i].answer1.type)
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
				if (i === questions.length){
					gameOver();
				} else {
				displayQuestion();
				startTimer();
			}
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
				$("#win-loss").html("Correct!");
				displayStats();
				messageOff();
		})

		$("li.incorrect").on("click", function() {
				incorrect++;
				stopTimer();
				$("#win-loss").html("Incorrect!");
				displayStats();
				messageOff();
		})			
	} else {
		gameOver();
	}

});
















 
		

