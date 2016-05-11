//$(document).ready(function(){
//Global Variables
	var	wordOptions = ["murphy", "murray", "belushi", "aykroyd", "curtin",
		"radner", "chase", "morris", "carvey", "hartman", "lovitz", "hooks"];

	var userOptions = ["a","b", "c", "d","e", 
		"f", "g","h", "i", "j", "k", "l", "m", 
		"n","o","p","q", "r", "s", "t", "u", 
		"v","w", "x", "y", "z"];


	var guessWord = "";
	var guessWordArray = [];
	var currentWord = [guessWord.length];
	var display = "";
	var wrongLetters = [];
	var blanksAndLetters = [];
	var winsCount = 0;
	var guessesLeft = 10;


//Functions
function startGame()
	{
		guessWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
		guessWordArray = guessWord.split("");
		
		for (var j = 0; j < guessWord.length; j++) 
		{
			blanksAndLetters.push ("-");
			//display = display + guessWordArray[i];
		}
		
		document.getElementById("target").innerHTML = blanksAndLetters.join(" ");
	}

function checkLetter(userGuess)
	{
		var isInWord = false;
		//console.log("Letter: " + userGuess);
		for (var i = 0; i < guessWordArray.length; i++) 
		{
			if (userGuess == guessWordArray[i] ) 
			{
				isInWord = true;
			}
		}
		
		if ( isInWord ) 
		{
			document.getElementById("target").innerHTML = blanksAndLetters.join(" ");
			//TODO: update blanks and letters
		}
		else 
		{
			document.getElementById("userGuessed").innerHTML = userGuess;

		}
	}
		
		
		//for (var i = 0; i < )


	//MAIN GAME
	startGame();

	//$( "#game" ).click(function() 
	//	{
	 //	$("#target").keypress();
	  //	alert("here we go!");

	  	//});
	    
	     //13 represents Enter key
	 	//}

	document.onkeyup = function ( event ) 
	{
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		console.log(userGuess);
		checkLetter(userGuess);
	}

	//NOTES/DEBUGGING
	console.log("Computer word:" + guessWord);
	console.log(guessWordArray);


 // }
// });
//})


