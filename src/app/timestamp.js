import { ueaEvents } from "./events";

// DOM elements used in this javascript file
const domCalculatedDays = document.getElementById("uea-calculated__days");
const domCalculatedHours = document.getElementById("uea-calculated__hours");
const domCalculatedMinutes = document.getElementById("uea-calculated__minutes");

// The next timestamp goal in seconds
const nextTimestampGoal = getNextEvent() || 0;

/**
 * Updates the calculated values DOM elements to the current
 * calculated values.
 * TODO: only temp
 */
export function updateCalculatedValues() {
  // Real unix timestamp is in seconds, not milliseconds (each day 86400 seconds are added (according to Wikipedia)
  let countdownTime = nextTimestampGoal - Math.floor(Date.now() / 1000);

  // Calculated manually because UTC is relative
  let calculatedDays = Math.floor(countdownTime / 60 / 60 / 24);
  let calculatedHours = Math.floor(countdownTime / 60 / 60 - (calculatedDays * 24));
  let calculatedMinutes = Math.floor(countdownTime / 60) - (calculatedHours * 60) - (calculatedDays * 24 * 60);

  domCalculatedDays.innerHTML = calculatedDays;
  domCalculatedHours.innerHTML = calculatedHours;
  domCalculatedMinutes.innerHTML = calculatedMinutes;
}

/**
 * Updates the inner HTML of a given DOM element with the
 * current countdown timestamp
 *
 * @param {element} domTimestamp
 */
export function updateTimestampDisplay(domTimestamp, countUp) {
  // const countDirectionSwitch = document.getElementById("uea-count-direction__checkbox").checked;

  if (countUp) {
    domTimestamp.innerHTML = Math.floor(Date.now() / 1000);
  } else {
    domTimestamp.innerHTML = nextTimestampGoal - Math.floor(Date.now() / 1000);
  }
}

/**
 * Returns the next event from the event array. If no new
 * event is available to track, the function will return null.
 */
export function getNextEvent() {
  for (let i = 0; i < ueaEvents.length; i++) {
    let element = ueaEvents[i];

    // If the event timestamp is smaller then the current one
    if (element["timestamp"] > parseInt(Date.now() / 1000)) {
      return element["timestamp"];
    }
  }
}
