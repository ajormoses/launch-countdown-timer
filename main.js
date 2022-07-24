const days = document.querySelector(".days-txt");
const hours = document.querySelector(".hours-txt");
const mins = document.querySelector(".mins-txt");
const secs = document.querySelector(".secs-txt");

const updateClock = () => {
  window.setInterval(() => {
    const launchDate = new Date("Jan 1 2023 00:00:00").getTime();

    const today = new Date().getTime();

    const currentMilliseconds = launchDate - today;

    const seconds = 1000;

    const minutes = seconds * 60;

    const hours = minutes * 60;

    const day = hours * 24;

    let countDay = Math.floor(currentMilliseconds / day);

    countDay = countDay < 10 ? "0" + countDay : countDay;

    let countHour = Math.floor(currentMilliseconds % day) / hours;

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
