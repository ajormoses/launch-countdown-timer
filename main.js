const days = document.querySelector(".days-txt");
const hours = document.querySelector(".hours-txt");
const mins = document.querySelector(".mins-txt");
const secs = document.querySelector(".secs-txt");

const updateClock = () => {
  var date = new Date();
  days.innerHTML = date.getDay() < 10 ? "0" + date.getDay() : date.getDay();
  hours.innerHTML =
    date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  mins.innerHTML =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  secs.innerHTML =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
};

const initClock = () => {
  updateClock();
  window.setInterval("updateClock()", 1);
};

initClock();
