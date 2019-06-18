# Memory Game Project

## Table of Contents

-   [Instructions](#instructions)
-   [Contributing](#contributing)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

## For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

* * *

## I concluded this project by using Below Steps.

### Cloning of the project

-   I had cloned the project file after reading the instructions, by using the GitHub link about the skeleton project which is provided by **Udacity** in rubic structure I Cloned the file.
-   After Cloning the file in the system from GitHub, I observed the files as listed below.
    1.  `css/app.css` - contains styles to the project.
    2.  `img/geometry2.png`- contains images that used as background image.
    3.  `js/app.js` - JavaScript file that they provided.
    4.  `index.html` - HTML file of the project.
    5.  `README.md` - READMEfile for the project.

### Modification of Code To get game
1.  Added `reload()` function to refresh the page using script.
2.  Intialised  a function to shuffle all the cards,
3.  Added a  click **EventListener**  to each card. when clicking any card `showCard()` function triggers.
4.  Added a `startTimer()` function, so that when an user starts the game(clicking first card), the time should automatically started and after end of game it should automatically stopped using `clearInterval()` method.
5.  Using if condition, we tested if any two cards gets open, then count of moves will be increased.
6.  Added a function to the program called `showCard()` so that after user clicked on it, it get displayed, while click on the card, timer get started  automatically.
7.  Included a class (`disable`) to disable the card, so that if two  card matches, these are getting disabled automatically.
8.  Included a method so that if previous card does not match with currentCard then both cards should be closed.
9.  Instialied a function for star counter, so that if the moves are between 12 to 18, then star count will be 2.If moves get exceeded by 18, then star count should be 1, else star count will be 3.
10. Intialised timer display so that the user gets to know the time.
11. Finally Intialised sweetalert to show the congratulatory message along with time to complete the game, moves taken to complete the game and stars that the user earned.

### OUTPUT OF THE Game

1.  If all cards get matched, then a popup alert will raise with report of the game.

### MEDIA queries

1. This game is compactable in Desktop mode, Mobile mode, Tablet Mode.
