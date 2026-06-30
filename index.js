const clockFace = document.getElementById("clock-face");


for (let i = 1; i <= 12; i++) {
    const number = document.createElement("div");
    number.className = `number number${i}`;
    number.textContent = i;
    clockFace.appendChild(number);
}


const hourHand = document.getElementById("hour-hand");
const minuteHand = document.getElementById("minute-hand");
const secondHand = document.getElementById("second-hand");


function setClock() {

    const now = new Date();

    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();


    const secondDeg = second * 6 + 90;
    const minuteDeg = (minute + second / 60) * 6 + 90;
    const hourDeg = (hour % 12 + minute / 60) * 30 + 90;


    secondHand.style.transform = `rotate(${secondDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}


setClock();
setInterval(setClock, 1000);