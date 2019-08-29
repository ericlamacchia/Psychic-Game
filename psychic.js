
    // create variables for html content and for the values to store. Wins losses guesses and guesses so far computer guesses userguess computer choices

    var wins = 0;
    var losses = 0;
    var guessLeft = 9;
    var guessSoFar = [];

    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var displayText = "Press any Key";

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


        function userLetters() {
        document.getElementById("guessSoFar").textContent = guessSoFar;

    }

        var restart = function () {
        guessLeft = 9;
    guessSoFar = [];
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


}







// Create onkeyup event function
        document.onkeyup = function (event) {
            var userGuess = event.key;
    guessSoFar.push(userGuess);
    userLetters();

    //if you guess what the computer guesses, adds a win, changes html display. restart guesses.
            if (userGuess == computerGuess) {
        wins++;
    document.getElementById("wins").textContent = wins;
    restart()
}
//if you don't, it takes away a guess. console log was for debugging. takes away a guess, displays it.
            else if (userGuess != computerGuess) {
        console.log(userLetters)
                guessLeft--;
    document.getElementById("guessLeft").textContent = guessLeft;
}
//if guesses hits zero, adds a loss, displays it, restarts guesses and computer guess.
            if (guessLeft === 0) {
        losses++;
    document.getElementById("losses").textContent = losses;
    restart()
}
}


// updateDisplay();














    