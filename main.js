const days = document.querySelector(".days-txt");
const hours = document.querySelector(".hours-txt");
const mins = document.querySelector(".mins-txt");
const secs = document.querySelector(".secs-txt");

const updateClock = () => {
  window.setInterval(() => {
    let launchDate = new Date("Jan 1 2023 00:00:00").getTime();

    let today = new Date().getTime();

    let currentMilliseconds = launchDate - today;

    let seconds = 1000;

    let minutes = seconds * 60;

    let hours = minutes * 60;

    let day = hours * 24;

    let countDay = Math.floor(currentMilliseconds / day);

    countDay = countDay < 10 ? "0" + countDay : countDay;

    let countHour = Math.floor((currentMilliseconds % day) / hours);

    countHour = countHour < 10 ? "0" + countHour : countHour;

    let countMinutes = Math.floor((currentMilliseconds % hours) / minutes);

    countMinutes = countMinutes < 10 ? "0" + countMinutes : countMinutes;

    let countSeconds = Math.floor((currentMilliseconds % minutes) / seconds);

    countSeconds = countSeconds < 10 ? "0" + countSeconds : countSeconds;

    days.innerHTML = countDay;
    hours.innerHTML = countHour;
    mins.innerHTML = countMinutes;
    secs.innerHTML = countSeconds;
  }, 1);
};

updateClock();
