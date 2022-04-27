// Created by: Katie
// Created on: April 2022
// This file contains the JS functions for index.html

/**
 * This function generates a random number and gives the player one of two messages based on the result. 
 */
function randomNumberClicked () {
  //user input collected
  let userGuess = parseInt(document.getElementById('user-guess').value);
  //computer generates random number
  let randomNumber = Math.floor((Math.random() * 6) + 1);
  //if the user got the number right, then display "you got it! well done!"
  if (userGuess == randomNumber) {
    document.getElementById('guess-results').innerHTML = 'You got it! Well done!';
  }
  //If the user's guess was not right, then display "Your guess was incorrect. Try again."
  else if (userGuess != randomNumber) {
    document.getElementById('guess-results').innerHTML = 'Your guess was incorrect. Try again.';
  }
}