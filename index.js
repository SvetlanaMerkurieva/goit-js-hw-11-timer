const daysC = document.querySelector(`[data-value="days"]`);
const hoursC = document.querySelector(`[data-value="hours"]`);
const minsC = document.querySelector(`[data-value="mins"]`);
const secondsC = document.querySelector(`[data-value="secs"]`);

const labelDays = document.querySelector(".label-days");
const labelHours = document.querySelector(".label-hours");
const labelMins = document.querySelector(".label-mins");
const labelSeconds = document.querySelector(".label-seconds");

document.addEventListener("DOMContentLoaded", myTimer);

function myTimer() {
    const finishDate = new Date(2021, 10, 14);
    let timerId = null;

    function declensionNum(num, words) { 
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }

    function countdownTimer() {
        let currentTime = Date.now()
        const deltaTime = finishDate - currentTime;
        if (deltaTime <= 0) {
            clearInterval(timerId);
        }

        const days = deltaTime > 0 ? Math.floor(deltaTime / 1000 / 60 / 60 / 24) : 0;
        const hours = deltaTime > 0 ? Math.floor(deltaTime / 1000 / 60 / 60) % 24 : 0;
        const mins = deltaTime > 0 ? Math.floor(deltaTime / 1000 / 60) %  60 : 0;
        const seconds = deltaTime > 0 ? Math.floor(deltaTime / 1000) % 60 : 0;

        daysC.textContent = days < 10 ? "0" + days : days;
        hoursC.textContent = hours < 10 ? "0" + hours : hours;
        minsC.textContent = mins < 10 ? "0" + mins : mins;
        secondsC.textContent = seconds < 10 ? "0" + seconds : seconds;

        labelDays.textContent = declensionNum(days, ["день", "дня", "дней"]);
        labelHours.textContent = declensionNum(hours, ["час", "часа", "часов"]);
        labelMins.textContent = declensionNum(mins, ["минута", "минуты", "минут"]);
        labelSeconds.textContent = declensionNum(seconds, ["секунда", "секунды", "секунд"]);

        console.log(mins);
    }
    countdownTimer();
    timerId = setInterval(countdownTimer, 1000);
};








