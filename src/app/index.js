import {
  updateCalculatedValues,
  updateTimestampDisplay,
  getNextEvent
} from "./timestamp";

// Importing the main css files
import "./stylesheets/main.scss";
const index = require("file-loader?name=index.html!./../index.html");

// The DOM timestamp display element
const domTimestamp = document.getElementById("uea-timestamp");

// Set the DOM timestamp goal display elements
let nextEventTimestamp = getNextEvent();
const nextEventDate = new Date(nextEventTimestamp * 1000).toUTCString();

// Count the timer up (true) or down (false)
let countUp = false;

document.getElementById("uea-timestamp-goal").innerHTML = nextEventTimestamp;
document.getElementById("uea-timestamp-goal__date").innerHTML = nextEventDate;

updateTimestampDisplay(domTimestamp, countUp);
updateCalculatedValues();

// Refresh certain DOM elements to ensure a live counter
// TODO: execute setInterval without initial wait
let timerInterval = setInterval(() => {
  updateTimestampDisplay(domTimestamp, countUp);
  updateCalculatedValues();
}, 1000);


// Listen to click events on the timer to allow
// changing of the count direction
document.getElementById("uea-timestamp-display").addEventListener("click", event => {
  countUp = !countUp;
});
