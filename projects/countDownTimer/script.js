const dayEl = document.querySelector(".day div"),
  hourEl = document.querySelector(".hour div"),
  minuteEl = document.querySelector(".minute div"),
  secondEl = document.querySelector(".second div");

const featureDate = "1 feb 2025";
const countDown = () => {
  const upcomingDate = new Date(featureDate);
  const currentDate = new Date();
  let differenceInSecond = (upcomingDate - currentDate) / 1000; //1000 mill seconds
  let day = Math.floor(differenceInSecond / 3600 / 24);
  let hours = Math.floor(differenceInSecond / 3600) % 24;
  let minute = Math.floor(differenceInSecond / 60) % 60;
  let seconds = Math.floor(differenceInSecond % 60);
  if (differenceInSecond >= 0) {
    dayEl.innerText = formatTimer(day);
    hourEl.innerText = formatTimer(hours);
    minuteEl.innerText = formatTimer(minute);
    secondEl.innerText = formatTimer(seconds);
  }
};

const formatTimer = (time) => {
  return time < 10 ? `0${time}` : time;
};

const startCountdown = () => {
  countDown();
  setTimeout(startCountdown, 1000);
};

window.addEventListener("load", startCountdown);
