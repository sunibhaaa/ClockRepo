function setClock() {
    const now = new Date();
    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();

    const secondDeg = ((second / 60) * 360) + 90;
    const minuteDeg = ((minute + second / 60) / 60) * 360 + 90;
    const hourDeg = ((hour % 12 + minute / 60) / 12) * 360 + 90;

    document.getElementById("second-hand").style.transform = `rotate(${secondDeg}deg)`;
    document.getElementById("minute-hand").style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById("hour-hand").style.transform = `rotate(${hourDeg}deg)`;
}

setClock();
setInterval(setClock, 1000);