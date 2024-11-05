let timerId; // переменная, которая будет хранить ID таймера

const startButton = document.getElementById('start');
startButton.addEventListener('click', function () {
    timerId = setInterval(updateClock, 1); // запускаем  updateClock() каждую секунду
});



const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', function () {
    clearInterval(timerId);
});


function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    let result = [hours, minutes, seconds].map((item) => {
        return addZero(item);
    });
    clock.textContent = result[0] + ':' + result[1]+ ':' + result[2];
}

function addZero(numder){
    if (String(numder).length === 1) {
        return `0${numder}`
    } else {
        return String(numder);
    }
}