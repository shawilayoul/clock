const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minute');
const seconds = document.querySelector('.second');

function updateOclock() {
    const currentTime = new Date();
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();
    const second = currentTime.getSeconds();
    const hourdeg = (hour / 12) * 360;
    hours.style.transform = `rotate(${hourdeg}deg)`;
    const minutedeg = (minute / 60) * 360;
    hours.style.transform = `rotate(${minutedeg}deg)`;
    const seconddeg = (second / 60) * 360;
    hours.style.transform = `rotate(${seconddeg}deg)`;
}
setInterval(updateOclock, 1000);

const parcentage = document.querySelector('.loading h3');
const frontBar = document.querySelector('.front-bar');
let indexs = 0;
function update() {
    parcentage.innerText = indexs + "%";
    frontBar.style.width = indexs + "%";
    indexs++;
    if (indexs < 101) {
        setTimeout(update, 300)
    }
}
update()