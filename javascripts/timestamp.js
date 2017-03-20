// TODO: restructure/refactor
// TODO: use JSON below as selector for next event
const ueaEvents = [
  {
    "timestamp": 1500000000,
    "text": "foobar"
  },
]

// DOM elements used in this javascript file
const domTimestamp = document.getElementById("uea-timestamp");
const domTimestampGoal = document.getElementById("uea-timestamp-goal");
const domCalculatedDays = document.getElementById("uea-calculated__days");
const domCalculatedHours = document.getElementById("uea-calculated__hours");
const domCalculatedMinutes = document.getElementById("uea-calculated__minutes");

// TODO: remove with refactor of ueaEvents
let timestampGoalInSeconds = 1500000000;
// real unix timestamp is in seconds, not milliseconds (each day 86400 seconds are added (according to Wikipedia)
let countdownTime = 1500000000 - Math.floor(Date.now() / 1000);

// Setting the DOM elements inner HTML
domTimestamp.innerHTML = countdownTime;
domTimestampGoal.innerHTML = timestampGoalInSeconds;

// Calculated manually because UTC is relative
// TODO: refactor into functions
let calculatedDays = Math.floor(countdownTime / 60 / 60 / 24);
let calculatedHours = Math.floor(countdownTime / 60 / 60 - (calculatedDays * 24));
let calculatedMinutes = Math.floor(countdownTime / 60) - (calculatedHours * 60) - (calculatedDays * 24 * 60);

domCalculatedDays.innerHTML = calculatedDays;
domCalculatedHours.innerHTML = calculatedHours;
domCalculatedMinutes.innerHTML = calculatedMinutes;

// Refreshing certain DOM elements to ensure a live counter
let timerInterval = setInterval(() => {
  let countdownTime = 1500000000 - Math.floor(Date.now() / 1000);

  domTimestamp.innerHTML = countdownTime;

  domCalculatedDays.innerHTML = Math.floor(countdownTime / 60 / 60 / 24);
  domCalculatedHours.innerHTML = Math.floor(countdownTime / 60 / 60 - (calculatedDays * 24));
  domCalculatedMinutes.innerHTML = Math.floor(countdownTime / 60) - (calculatedHours * 60) - (calculatedDays * 24 * 60);
}, 1000);
