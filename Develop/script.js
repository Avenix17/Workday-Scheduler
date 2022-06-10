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

var textArea9 = document.getElementById("textarea9");
var textArea10 = document.getElementById("textarea10");
var textArea11 = document.getElementById("textarea11");
var textArea12 = document.getElementById("textarea12");
var textArea13 = document.getElementById("textarea13");
var textArea14 = document.getElementById("textarea14");
var textArea15 = document.getElementById("textarea15");
var textArea16 = document.getElementById("textarea16");
var textArea17 = document.getElementById("textarea17");

var btn9 = document.getElementById("event-btn9");
var btn10 = document.getElementById("event-btn10");
var btn11 = document.getElementById("event-btn11");
var btn12 = document.getElementById("event-btn12");
var btn13 = document.getElementById("event-btn13");
var btn14 = document.getElementById("event-btn14");
var btn15 = document.getElementById("event-btn15");
var btn16 = document.getElementById("event-btn16");
var btn17 = document.getElementById("event-btn17");

var confirmedEvent = document.getElementById("confirmedevent");

// Type in events that save to local storage
    //Make sure they stay even through page refresh
    //Create comment that appears under date that says "Event saved to local storage!"

function timeColor() {
    if (time9) {
        if (9 <= currentTime && currentTime < 10) {
            time9.classList.add("present");
            time9.classList.remove("past");
            time9.classList.remove("future");
        } else if (currentTime >= 10) {
            time9.classList.add("past");
            time9.classList.remove("present");
            time9.classList.remove("future");
        } else {
            time9.classList.add("future");
            time9.classList.remove("past");
            time9.classList.remove("present");
        }
    }

    if (time10) {
        if (10 <= currentTime && currentTime < 11) {
            time10.classList.add("present");
            time10.classList.remove("past");
            time10.classList.remove("future");
        } else if (currentTime >= 11) {
            time10.classList.add("past");
            time10.classList.remove("present");
            time10.classList.remove("future");
        } else {
            time10.classList.add("future");
            time10.classList.remove("past");
            time10.classList.remove("present");
        }
    }

    if (time11) {
        if (11 <= currentTime && currentTime < 12) {
            time11.classList.add("present");
            time11.classList.remove("past");
            time11.classList.remove("future");
        } else if (currentTime >= 12) {
            time11.classList.add("past");
            time11.classList.remove("present");
            time11.classList.remove("future");
        } else {
            time11.classList.add("future");
            time11.classList.remove("past");
            time11.classList.remove("present");
        }
    }

    if (time12) {
        if (12 <= currentTime && currentTime < 13) {
            time12.classList.add("present");
            time12.classList.remove("past");
            time12.classList.remove("future");
        } else if (currentTime >= 13) {
            time12.classList.add("past");
            time12.classList.remove("present");
            time12.classList.remove("future");
        } else {
            time12.classList.add("future");
            time12.classList.remove("past");
            time12.classList.remove("present");
        }
    }

    if (time13) {
        if (13 <= currentTime && currentTime < 14) {
            time13.classList.add("present");
            time13.classList.remove("past");
            time13.classList.remove("future");
        } else if (currentTime >= 14) {
            time13.classList.add("past");
            time13.classList.remove("present");
            time13.classList.remove("future");
        } else {
            time13.classList.add("future");
            time13.classList.remove("past");
            time13.classList.remove("present");
        }
    }

    if (time14) {
        if (14 <= currentTime && currentTime < 15) {
            time14.classList.add("present");
            time14.classList.remove("past");
            time14.classList.remove("future");
        } else if (currentTime >= 15) {
            time14.classList.add("past");
            time14.classList.remove("present");
            time14.classList.remove("future");
        } else {
            time14.classList.add("future");
            time14.classList.remove("past");
            time14.classList.remove("present");
        }
    }

    if (time15) {
        if (15 <= currentTime && currentTime < 16) {
            time15.classList.add("present");
            time15.classList.remove("past");
            time15.classList.remove("future");
        } else if (currentTime >= 16) {
            time15.classList.add("past");
            time15.classList.remove("present");
            time15.classList.remove("future");
        } else {
            time15.classList.add("future");
            time15.classList.remove("past");
            time15.classList.remove("present");
        }
    }

    if (time16) {
        if (16 <= currentTime && currentTime < 17) {
            time16.classList.add("present");
            time16.classList.remove("past");
            time16.classList.remove("future");
        } else if (currentTime >= 17) {
            time16.classList.add("past");
            time16.classList.remove("present");
            time16.classList.remove("future");
        } else {
            time16.classList.add("future");
            time16.classList.remove("past");
            time16.classList.remove("present");
        }
    }

    if (time17) {
        if (17 <= currentTime && currentTime < 18) {
            time17.classList.add("present");
            time17.classList.remove("past");
            time17.classList.remove("future");
        } else if (currentTime >= 18) {
            time17.classList.add("past");
            time17.classList.remove("present");
            time17.classList.remove("future");
        } else {
            time17.classList.add("future");
            time17.classList.remove("past");
            time17.classList.remove("present");
        }
    }
}

function saveEvent() {
    localStorage.setItem("text9", textArea9.value);
    localStorage.setItem("text10", textArea10.value);
    localStorage.setItem("text11", textArea11.value);
    localStorage.setItem("text12", textArea12.value);
    localStorage.setItem("text13", textArea13.value);
    localStorage.setItem("text14", textArea14.value);
    localStorage.setItem("text15", textArea15.value);
    localStorage.setItem("text16", textArea16.value);
    localStorage.setItem("text17", textArea17.value);
    displaySaved();
    confirmedEvent.classList.remove("hidden");
}

function displaySaved() {
    textArea9.innerText = localStorage.getItem("text9");
    textArea10.innerText = localStorage.getItem("text10");
    textArea11.innerText = localStorage.getItem("text11");
    textArea12.innerText = localStorage.getItem("text12");
    textArea13.innerText = localStorage.getItem("text13");
    textArea14.innerText = localStorage.getItem("text14");
    textArea15.innerText = localStorage.getItem("text15");
    textArea16.innerText = localStorage.getItem("text16");
    textArea17.innerText = localStorage.getItem("text17");
}

setInterval(timeColor, 1000);
