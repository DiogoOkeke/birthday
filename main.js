"use strict";

const loadSite = document.querySelector(".loadSite");
const mainSite = document.querySelector(".mainSite");
const percentageDisplay = document.querySelector(".percentageDisplay");
const progressState = document.querySelector(".progressState");
const loadingText = document.querySelector(".loadingText");

// define text changes as percentage loads

const statusMessages = [
  {
    threshold: 0,
    text: "Birthday loading...",
  },

  {
    threshold: 25,
    text: "Unveiling a mystery...",
  },

  {
    threshold: 50,
    text: "A beacon of hope...",
  },

  {
    threshold: 75,
    text: "Her Father's treasure...",
  },

  {
    threshold: 100,
    text: "Heaven's favorite...",
  },
];

let currentPercentage = 0;
const intervalTime = 1900;

const loadingInterval = setInterval(() => {
  if (currentPercentage < 100) {
    currentPercentage = Math.min(100, currentPercentage + 25);
  } else {
    clearInterval(loadingInterval);
    return;
  }

  percentageDisplay.textContent = `${currentPercentage}%`;

  const currentStatus = statusMessages
    .slice()
    .reverse()
    .find((message) => currentPercentage >= message.threshold);

  if (currentStatus) {
    loadingText.textContent = currentStatus.text;
  }
}, intervalTime);

let loadPage = () => {
  loadSite.style.display = "none";
  mainSite.classList.add("activeMainSite");
};

setTimeout(loadPage, 8300);

//  nav bar

// time and stamp

const timeStamp = document.querySelector(".time-stamp");
const dateStamp = document.querySelector(".date-stamp");

function updateClock() {
  const now = new Date();

  const options = {
    timeZone: "Africa/Lagos",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h12",
  };

  const localTime = now.toLocaleTimeString("en-US", options);
  timeStamp.textContent = localTime;
}

updateClock();
setInterval(updateClock, 1000);

function updateDate() {
  const now = new Date();
  const options = {
    timeZone: "Africa/Lagos",
    weekday: "short",
    day: "numeric",
    month: "short",
  };
  const localDate = now.toLocaleDateString("en-US", options);
  dateStamp.textContent = localDate;
}

updateDate();

// nav content

let navBar = document.querySelector(".nav-bar");
let navContent = document.querySelector(".nav-content");
let firstBar = document.querySelector(".first-bar");
let secondBar = document.querySelector(".second-bar");
let thirdBar = document.querySelector(".third-bar");

let clicked = false;

navBar.onclick = () => {
  if (!clicked) {
    navContent.classList.add("activeNavContent");
    firstBar.classList.add("true");
    secondBar.classList.add("true");
    thirdBar.classList.add("true");
    navBar.classList.add("true");
    navBar.style.top = "3.1rem";
    clicked = true;
    console.log("diogo");
  } else {
    navContent.classList.remove("activeNavContent");
    navContent.classList.add("removeNavContent");
    secondBar.classList.remove("true");
    firstBar.classList.remove("true");
    thirdBar.classList.remove("true");
    navBar.classList.remove("true");
    navBar.style.top = "1.6rem";
    clicked = false;
  }
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".left, .right").forEach((div) => {
  observer.observe(div);
});
