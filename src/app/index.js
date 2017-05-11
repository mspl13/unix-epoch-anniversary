import {
  updateCalculatedValues,
  getSubtitle,
  updateTimestampDisplay,
  getNextEvent
} from "./timestamp";

// Importing the main css files
import "./stylesheets/main.scss";
import "file-loader?name=index.html!./../index.html";

// The DOM timestamp display element
const domTimestamp = document.getElementById("uea-timestamp");

// Set the DOM timestamp goal display elements
let nextEventTimestamp = getNextEvent();
const nextEventDate = new Date(nextEventTimestamp * 1000).toUTCString();

// Count the timer up (true) or down (false)
let countUp = false;

updateSubtitle();
updateTimestampDisplay(domTimestamp, countUp);
updateCalculatedValues();

// Refresh certain DOM elements to ensure a live counter
setInterval(() => {
  updateTimestampDisplay(domTimestamp, countUp);
  updateCalculatedValues();
}, 1000);

// Listen to click events on the timer to allow
// changing of the count direction
document.getElementById("uea-timestamp-display").addEventListener("click", () => {
  countUp = !countUp;

  toggleVisibility(document.getElementById("uea-calculated"));

  updateSubtitle();
});

/**
 * Updates the subtitle document node and it's values.
 */
function updateSubtitle() {
  document.getElementById("uea-subtitle").innerHTML = getSubtitle(countUp);
  document.getElementById("uea-timestamp-goal").innerHTML = nextEventTimestamp;
  document.getElementById("uea-timestamp-goal__date").innerHTML = nextEventDate;
}

/**
 * Hides or shows a given element, depending on it's current state.
 */
function toggleVisibility(element) {
  if(element.style.visibility === "hidden") {
    element.style.visibility = "visible";
  } else {
    element.style.visibility = "hidden";
  }
}
