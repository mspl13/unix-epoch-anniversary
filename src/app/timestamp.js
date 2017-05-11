import { ueaEvents } from "./events";
import { ueaSubtitles } from "./subtitles";

// DOM elements used in this javascript file
const domCalculatedDays = document.getElementById("uea-calculated__days");
const domCalculatedHours = document.getElementById("uea-calculated__hours");
const domCalculatedMinutes = document.getElementById("uea-calculated__minutes");

// The next timestamp goal in seconds
const nextTimestampGoal = getNextEvent() || 0;

/**
 * Returns a random subtitle from the subtitles file.
 * Subtitle depends on whether the counter counts up or down
 * @paran {bool} countUp
 */
export function getSubtitle(countUp) {
  const countDirection = countUp ? "countUp" : "countDown";
  let subtitleString;

  subtitleString = ueaSubtitles[countDirection][0]["text"];

  return subtitleString;
}

/**
 * Updates the calculated values DOM elements to the current
 * calculated values.
 */
export function updateCalculatedValues() {
  // Real unix timestamp is in seconds, not milliseconds
  // (each day 86400 seconds are added (according to Wikipedia)
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
 * @param {bool} countUp
 */
export function updateTimestampDisplay(domTimestamp, countUp) {
  if (countUp) {
    domTimestamp.innerHTML = Math.floor(Date.now() / 1000);
  } else {
    domTimestamp.innerHTML = nextTimestampGoal - Math.floor(Date.now() / 1000);
  }
}

/**
 * Returns the next event timestamp from the query parameter. If
 * no query parameter is given, it will return the next timestamp from
 * the event array. If no new event is available in the event array,
 * the function will return null.
 */
export function getNextEvent() {
  const timestampQuery = getQueryParameterByName("timestamp");

  if (timestampQuery !== null && timestampQuery !== "") {
    return parseInt(timestampQuery);
  }

  for (let i = 0; i < ueaEvents.length; i++) {
    let element = ueaEvents[i];

    // If the event timestamp is smaller then the current one
    if (element["timestamp"] > parseInt(Date.now() / 1000)) {
      return element["timestamp"];
    }
  }

  return null;
}

/**
 * Returns the value for a given http query parameter as string.
 * Inspired by http://stackoverflow.com/a/901144/2952875
 *
 * @param {string} parameterName
 */
function getQueryParameterByName(parameterName) {
  const regex = new RegExp("[?&]" + parameterName + "(=([^&#]*)|&|#|$)");
  const results = regex.exec(window.location.search);

  // If query parameter is not present
  if (!results) return null;
  // If the value for the query parameter is empty
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

console.log(getQueryParameterByName("baz"));
