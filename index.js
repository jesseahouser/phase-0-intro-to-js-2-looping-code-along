/*
// THIS SECTION IS PRACTICE CODE AT BEGINNING OF LAB

for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy Birthday to me!`);
    //debugger;
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        //debugger;
    }

    return gifts;
}

wrapGifts(gifts);
*/

// Create an empty array for the stack of completed cards
const completedCards = [];

// Write the cards using a list of names in an array and a single event
function writeCards(names, eventName) {
    // For each name in the `name` array, write a card
    for (let i = 0; i < names.length; i++) {
        // Using the array push method, add each card to the array.
        // The name is selected using bracket notation and the counter as the array index position.
        // The event name is a string, so that's a simple interpolation
        completedCards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
        }
    return completedCards;
}

// This function takes a positive integer and counts down to zero.
function countDown(posInt) {
    while (posInt >= 0) {
        console.log(posInt--);
    }
}