let displayHrs = document.getElementById('hrs')
let displayMins = document.getElementById('mins')
let displaySeconds = document.getElementById('seconds')
let startBtn = document.getElementById('button-start')
let stopBtn = document.getElementById('button-stop')
let resetBtn = document.getElementById('button-reset')
let hrs = 0
let mins = 0
let seconds = 0
let intervalID

startBtn.addEventListener('click', () => {
   intervalID = setInterval(startTime, 1000) // 1000ms = 1s
//    console.log(intervalID)
})

stopBtn.addEventListener('click', () => {
    clearInterval(intervalID)
})

resetBtn.addEventListener('click', () => {
    clearInterval(intervalID)
    hrs = 0
    seconds = 0
    mins = 0
    displayHrs.innerText = `0${0}`
    displayMins.innerText = `0${0}`
    displaySeconds.innerText = `0${0}`
})

const startTime = () => {
    seconds++

    if (seconds <= 9) {
        displaySeconds.innerText = `0${seconds}`
    }

    if (seconds > 9) {
        displaySeconds.innerText = seconds
    }

    if (seconds > 59) {
        mins++
        displayMins.innerText = `0${mins}`
        seconds = 0
        displaySeconds.innerText = `0${seconds}`
    }

    if (mins > 9) {
        displayMins.innerText = mins
    }

    if (mins > 59) {
        hrs++
        displayHrs.innerText = `0${hrs}`
        mins = 0
        displayMins.innerText = `0${mins}`
    }

    if (hrs > 9) {
        displayHrs.innerText = hrs
    }
}