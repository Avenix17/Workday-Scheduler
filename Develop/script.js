var currentDay = document.getElementById("currentDay");

currentDay.textContent = moment().format("dddd, MMMM Do");

var past = document.getElementsByClassName("past");
var present = document.getElementsByClassName("present");
var future = document.getElementsByClassName("future");
var currentTime = new Date().getHours();

var time9 = document.getElementById("time9");
var time10 = document.getElementById("time10");
var time11 = document.getElementById("time11");
var time12 = document.getElementById("time12");
var time13 = document.getElementById("time13");
var time14 = document.getElementById("time14");
var time15 = document.getElementById("time15");
var time16 = document.getElementById("time16");
var time17 = document.getElementById("time17");

// Apply moment.js to current time so that css formatting on textareas change
    // past-grey
    // present-red
    // future-green

// Type in events that save to local storage
    //Make sure they stay even through page refresh
    //Create comment that appears under date that says "appointment saved to local storage!"

function timeColor() {
    if (time9) {
        if (9 <= currentTime && currentTime < 10) {
            time9.classList.add("present");
        } else if (currentTime >= 10) {
            time9.classList.add("past");
        }
    }

    if (time10) {
        if (10 <= currentTime && currentTime < 11) {
            time10.classList.add("present");
        } else if (currentTime >= 11) {
            time10.classList.add("past");
        } else {
            time10.classList.add("future");
        }
    }

    if (time11) {
        if (11 <= currentTime && currentTime < 12) {
            time11.classList.add("present");
        } else if (currentTime >= 12) {
            time11.classList.add("past");
        } else {
            time11.classList.add("future");
        }
    }

    if (time12) {
        if (12 <= currentTime && currentTime < 13) {
            time12.classList.add("present");
        } else if (currentTime >= 13) {
            time12.classList.add("past");
        } else {
            time12.classList.add("future");
        }
    }

    if (time13) {
        if (13 <= currentTime && currentTime < 14) {
            time13.classList.add("present");
        } else if (currentTime >= 14) {
            time13.classList.add("past");
        } else {
            time13.classList.add("future");
        }
    }

    if (time14) {
        if (14 <= currentTime && currentTime < 15) {
            time14.classList.add("present");
        } else if (currentTime >= 15) {
            time14.classList.add("past");
        } else {
            time14.classList.add("future");
        }
    }

    if (time15) {
        if (15 <= currentTime && currentTime < 16) {
            time15.classList.add("present");
        } else if (currentTime >= 16) {
            time15.classList.add("past");
        } else {
            time15.classList.add("future");
        }
    }

    if (time16) {
        if (16 <= currentTime && currentTime < 17) {
            time16.classList.add("present");
        } else if (currentTime >= 17) {
            time16.classList.add("past");
        } else {
            time16.classList.add("future");
        }
    }

    if (time17) {
        if (17 <= currentTime && currentTime < 18) {
            time17.classList.add("present");
        } else if (currentTime >= 18) {
            time17.classList.add("past");
        } else {
            time17.classList.add("future");
        }
    }
}

function saveEvent() {

}

function displaySaved() {

}

setInterval(timeColor, 1000);