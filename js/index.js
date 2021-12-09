const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown(){
    const christmas = 25
    // get today's date (you only need the day)
    const today = new Date().getDate()
    let remainingTime = christmas - today
    countdownDisplay.textContent = remainingTime
}

renderCountdown()