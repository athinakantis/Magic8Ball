let lastNum = undefined;

function getRandomNumber() {
    let num;
    do {
        num = Math.floor(Math.random() * 8)
    } while (!num || num === lastNum)
    return num
}

function magicEightBall(num) {
    switch(num) {
        case 0:
            return `I'll tell you if you ask nicely!`
        case 1:
            return `Why not? What's the worst that could happen?`
        case 2:
            return `Yes, but if something goes wrong, I didn't say it`
        case 3:
            return `My spider-senses are telling me no`
        case 4:
            return `I wouldn't do that if I were you`
        case 5:
            return `If you're feeling brave, yes!`
        case 6:
            return `My spider-senses are telling me yes`
        case 7:
            return `Do it, thank me later`
    }
}

function main(){
    let num = getRandomNumber()
    let answer = magicEightBall(num)
    p.innerHTML = answer
}

let p = document.getElementById('answer')
let ball = document.getElementById('ball')
let dice = document.getElementById('dice')
const form = document.getElementsByTagName('form')[0]

form.addEventListener('submit', (e) => {
    e.preventDefault()
    ball.setAttribute('class', 'shake'); dice.setAttribute('class', 'fade');
    p.setAttribute('class', 'fade_text')
    setTimeout(() => main(), 2000)
    setTimeout(() => {
        ball.removeAttribute('class', 'shake'); dice.removeAttribute('class', 'fade'); p.removeAttribute('class', 'fade_text'); 
    }, 5000)

})
