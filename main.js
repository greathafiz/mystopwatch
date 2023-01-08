let displaySeconds = document.getElementById('seconds')
let displayMins = document.getElementById('mins')
let displayHrs = document.getElementById('hrs')
let startBtn = document.getElementById('button-start')
let stopBtn = document.getElementById('button-stop')
let resetBtn = document.getElementById('button-reset')
let hrs = 0
let mins = 0
let seconds = 0
let intervalID

startBtn.onclick = () => {
    clearInterval(intervalID)
    intervalID = setInterval(startTime, 1000)
}

stopBtn.onclick = () => {
    clearInterval(intervalID)
}

resetBtn.onclick = () => {
    clearInterval(intervalID)
    hrs = 0
    mins = 0
    seconds = 0
    displayHrs.innerText = `0${hrs}`
    displayMins.innerText = `0${mins}`
    displaySeconds.innerText = `0${seconds}`
}

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
        displayMins.innerText = hrs
    }
}