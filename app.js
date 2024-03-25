let timer = null
let countdownNum = 10;
let changeState = function (state) {
    document.body.className = 'body-state' + state;
    clearInterval(timer);
    countdownNum = 10;
    document.getElementById('countdown').innerHTML = countdownNum

    if (state === 2) {
        timer = setInterval(function () {
            document.getElementById('countdown').innerHTML = countdownNum -= 1;
            if (countdownNum <= 0) {
                changeState(3)
            }
        }, 500)
    } else if (state === 3) {
        let success = setTimeout(function () {
            let randomNumber = Math.round(Math.random()*10)
            console.log('random number is ', randomNumber)
            if (randomNumber > 5) {
                changeState(4)
            } else {
                changeState(5)
            }
        }, 2000)
    }
}