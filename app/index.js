import {
  updateCalculatedValues,
  updateTimestampDisplay,
  getNextEvent
} from "./timestamp";

// The DOM timestamp display element
const domTimestamp = document.getElementById("uea-timestamp");

// Set the DOM timestamp goal display element
document.getElementById("uea-timestamp-goal").innerHTML = getNextEvent();

// Refresh certain DOM elements to ensure a live counter
// TODO: execute setInterval without initial wait
let timerInterval = setInterval(() => {
  updateTimestampDisplay(domTimestamp);
  updateCalculatedValues();
}, 1000);
