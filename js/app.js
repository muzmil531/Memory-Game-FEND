"use strict";
var parent1 = document.getElementById('deck');
/*
 * Create a list that holds all of your cards
 */
// Intialising or declaring all the variables required
var child1List = Array.prototype.slice.call(document.querySelectorAll(".card"));
let tStatus = 0;
var time;
var move = 0;
var tArea = document.getElementById('time');
var cardStorage = [];
var moveSection = document.getElementById('moves');
var hrs;
var min;
var sec;
var starSection = [...document.getElementsByClassName("fa-star")];
var starCount = 3;
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
// Intialisings shuffling the cards
window.onload = shuffleGame();
// shuffleGame Cards
function shuffleGame() {
	var shuffledCards = shuffle(child1List);
	var k = 0;
	while (k < shuffledCards.length) {
		console.log(shuffledCards[k]);
		parent1.append(shuffledCards[k]);
		k++;
	}
}
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue, randomIndex;
	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}
//
// on click showing card
for (var s in child1List) {
	child1List[s].addEventListener("click", showCard);
}

function showCard() {
	if (tStatus == 0) {
		startTimer(); /*time start function*/
		tStatus = tStatus + 1;
	}
	this.classList.add("card");
	this.classList.add("open");
	this.classList.add("show");
	/* card disablemethod */
	this.classList.add("disable");
	cardStorage.push(this);
	if (cardStorage.length == 2) {
		// console.log.(cardStorage[0].children[0].classList.item(1));
		move = move + 1;
		srating();
    // displaying moves count in html
		moveSection.innerHTML = move;
		if (cardStorage[0].children[0].classList.item(1) == cardStorage[1].children[0].classList.item(1)) {
			console.log("Matched");
			cardStorage[0].classList.add("match", "disable");
			cardStorage[1].classList.add("match", "disable");
			if (matchCards.length == 16) {
				clearInterval(time);
				// Alert Message on Game Completion with results
				Swal.fire({
					title: 'Congratulations',
					html: 'You Have earned <strong style="color:#ff9f33; text-shadow: 3px 3px 3px #000">' + starCount + '<i class ="fa fa-star"></i></strong> <br> and You Comleted this game with the time of <br>' + hrs + " :: " + min + " :: " + sec + " with the moves "+move,
					animation: false,
					confirmButtonText: '<i class="fa fa-thumbs-up"></i> Restart',
					customClass: {
						popup: 'animated tada'
					}
				}).then(() => {
					document.location.reload(); /* page reload method */
				});
			}
			cardStorage = [];
		} else {
			console.log("un matched");
			cardStorage[0].classList.add("unmatch");
			cardStorage[1].classList.add("unmatch");
			console.log(cardStorage[0]);
			cardStorage.map((card) => {
				setTimeout(() => {
					card.classList.remove("unmatch", "open", "show", "disable");
				}, 500)
			})
			cardStorage = [];
		}
	}
}
var matchCards = document.getElementsByClassName("match");
// Timer functionality
function startTimer() {
	sec = 0;
	min = 0;
	hrs = 0;
	time = setInterval(() => {
		sec = sec + 1;
		if (sec == 59) {
			min = min + 1;
			sec = 0;
		}
		if (min == 60) {
			hrs = hrs + 1;
			min = 0;
		}
		tArea.innerHTML = hrs + " :: " + min + " :: " + sec;
	}, 1000)
}
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
// STAR RATING function
function srating() {
	if (move >= 12 && move < 15) {
		starCount = 2;
		starSection[2].style.display = "none";
	}
	if (move >= 15) {
		starCount = 1;
		starSection[1].style.display = "none";
	}
}
