import {
  updateCalculatedValues,
  updateTimestampDisplay,
  getNextEvent
} from "./timestamp";

// The DOM timestamp display element
const domTimestamp = document.getElementById("uea-timestamp");

// Set the DOM timestamp goal display elements
let nextEventTimestamp = getNextEvent();
const nextEventDate = new Date(nextEventTimestamp * 1000).toUTCString();

document.getElementById("uea-timestamp-goal").innerHTML = nextEventTimestamp;
document.getElementById("uea-timestamp-goal__date").innerHTML = nextEventDate;

// Refresh certain DOM elements to ensure a live counter
// TODO: execute setInterval without initial wait
let timerInterval = setInterval(() => {
  updateTimestampDisplay(domTimestamp);
  updateCalculatedValues();
}, 1000);
