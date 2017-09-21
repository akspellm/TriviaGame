var questions = [

question1 = {
	question: "What is the largest breed of cat?",
	 
	answers: [
		answer1 = {
			answer: "Lion",
			type: "incorrect"
		},
		answer2 = {
			answer: "Tiger",
			type: "correct"
		}, 
		answer3 = {
			answer: "Panther",
			type: "incorrect"
		}, 
		answer4 = {
			answer: "Mountain Lion",
			type: "incorrect"
		},
	], 

	correct: "Tigers are the largest breed of cat!"
},

question2 = {
	question: "Which continent are cats not native to?",
	
	answers: [
		answer1 = {
			answer: "Europe",
			type: "incorrect"
		}, 
		answer2 = {
			answer: "North America",
			type: "incorrect"
		}, 
		answer3 = {
			answer: "Australia",
			type: "correct"
		}, 
		answer4 = {
			answer: "Africa",
			type: "incorrect"
		}, 
	],

	correct: "Cats are native to all continents with the exception of Australia and Antartica!"
},

question3 = {
	question: "A term for a group of cats is:",
	
	answers : [
		answer1 = {
			answer: "Caggle",
			type: "incorrect"
		}, 
		answer2 = {
			answer: "Clutch",
			type: "incorrect"
		}, 
		answer3 = {
			answer: "Clowder",
			type: "correct"
		}, 
		answer4 = {
			answer: "Covey",
			type: "incorrect"
		},
	],

	correct: "A group of cats is called a clowder!"
},

question4 = {
	question: "Where did modern cat shows begin?",
	
	answers : [
		answer1 = {
			answer: "London",
			type: "correct"
		}, 
		answer2 = {
			answer: "Paris",
			type: "incorrect"
		}, 
		answer3 = {
			answer: "New York",
			type: "incorrect"
		}, 
		answer4 = {
			answer: "Prague",
			type: "incorrect"
		}, 
	],

	correct: "Modern cat shows began at London's Crystal Palace in July 1871!"
},

question5 = {
	question: "A term for a group of kittens is:",
	
	answers : [
		answer1 = {
			answer: "Kindle",
			type: "correct"
		}, 
		answer2 = {
			answer: "Nook",
			type: "incorrect"
		}, 
		answer3 = {
			answer: "Kaggle",
			type: "incorrect"
		}, 
		answer4 = {
			answer: "Kaboodle",
			type: "incorrect"
		}, 
	],

	correct: "A group of kittens is called a kindle!"
},

question6 = {
	question: "Why do house cats rub themselves against their owners' legs and ankles?",
	
	answers : [
		answer1 = {
			answer: "It's a sign of hunger.",
			type: "incorrect"
		}, 
		answer2 = {
			answer: "It's a sign of affection.",
			type: "incorrect"
		}, 
		answer3 = {
			answer: "As a warning.",
			type: "incorrect"
		}, 
		answer4 = {
			answer: "It's a type of scent marking.",
			type: "correct"
		}, 
	],

	correct: "Cats rub agains their owners legs to mark them with their scent!"
},

question7 = {
	question: "What organization sets the standards for cat breeds?",
	answers : [
		answer1 = {
			answer: "Cat Fanciers' Association",
			type: "correct"
		}, 
		answer2 = {
			answer: "Federation of Cat Breeders",
			type: "incorrect"
		}, 
		answer3 = {
			answer: "Fancy Feast Catiers",
			type: "incorrect"
		}, 
		answer4 = {
			answer: "International Cat Association",
			type: "incorrect"
		}, 
	],

	correct: "The Cat Fanciers Association (CFA) sets the standards for cat breeds!"
},

question8 = {
	question: "About how many cat breeds does the CFA recognize?",
	
	answers : [
		answer1 = {
			answer: "30",
			type: "incorrect"
		}, 
		answer2 = {
			answer: "35",
			type: "correct"
		}, 
		answer3 = {
			answer: "50",
			type: "incorrect"
		}, 
		answer4 = {
			answer: "100",
			type: "incorrect"
		},
	],

	correct: "The CFA recognizes 35 distinct cat breeds!" 
},

question9 = {
	question: "Which breed of cat has no tail?",
	
	answers : [
		answer1 = {
			answer: "Korat",
			type: "incorrect"
		}, 
		answer2 = {
			answer: "Sphinx",
			type: "incorrect"
		}, 
		answer3 = {
			answer: "Egyption Mau",
			type: "incorrect"
		}, 
		answer4 = {
			answer: "Manx",
			type: "correct"
		}, 
	],

	correct: "Manx cats are born with no tail!"
},

question10 = {
	question: "What's the most popular short-haired cat in the United States?",
	
	answers : [
		answer1 = {
			answer: "Abyssinian",
			type: "incorrect"
		}, 
		answer2 = {
			answer: "Persian",
			type: "incorrect"
		}, 
		answer3 = {
			answer: "Siamese",
			type: "correct"
		}, 
		answer4 = {
			answer: "Bengal",
			type: "incorrect"
		}, 
	],

	corrrect: "Siamese cats are the most popular short-haired cat breed in the United States!"
}
];



$("#play").on("click", function() {

    var display;
    var off;
    var count = 10;
    var timer;
    var timerOn;
    var i = 0;
    var correct = 0;
    var incorrect = 0;

    var countdown = function() {
        $("#time").html(count);
        count -= 1;
        timer = setTimeout(function() { countdown() }, 1000)
    };

    function displayQuestion() {
        $("#question").html(questions[i].question);

        for (var j = 0; j < questions[i].answers.length; j++) {
            var answer = $("<li>").html(questions[i].answers[j].answer).attr("class", questions[i].answers[j].type);
            $("#answers").append(answer);
        }
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
    };

    function startTimer() {
        display = setTimeout(function() {
            incorrect += 1;
            $("#win-loss").html("Out of time!");
            displayStats();
            messageOff();

        }, 10000);
    };

    function displayStats() {
    	$("#correct-answer").empty().html(questions[i].correct);
    	i += 1;
            if (i === questions.length) {
                gameOver();
            } else {
		        $("#content").toggle();
		        $("#message-box").toggle();
		        $("#correct-answers").html("Correct Answers: " + correct);
		        $("#incorrect-answers").html("Inorrect Answers: " + incorrect);
    }
}

    function messageOff() {
        $("#answers").empty();
        displayQuestion();
        off = setTimeout(function() {
                startTimer();
                $("#message-box").toggle();
                count = 10;
            	$("#content").toggle();
        }, 3000);
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


    $("#instructions").toggle();

    $("#content").toggle();

    displayQuestion();

    countdown();

    startTimer();

    
});

$("#play-again").on("click", function() {
    location.reload();
})
		



















 
		
