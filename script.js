const ball = document.querySelector('img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error')

const answers = [
    "Absolutely!", "It is certain.", "Without a doubt.", "Yes, definitely.", "You can count on it.", "Most likely.", "Outlook good.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.",
    "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My sources say no.", "Outlook not so good.", "Very doubtful.", "No way!"
  ];

function consoleALL() {
    console.log(ball);
    console.log(input);
    console.log(answer);
    console.log(error);
};


const checkInput = () => {
    const inputRegex = /^[a-zA-Z0-9]+?\?$/;
    const inputRegex2 = /^\?+$/;
    if(input.value !== '' && inputRegex.test(input.value)) {
        error.textContent = '';
        shakeBall();
        return true;
    } else if (input.value !== '' && inputRegex2.test(input.value)) {
        error.textContent = 'You are really sneeky, you have to ask me a question first not only "?"';
        answer.innerHTML = `<span></span>`;
        ball.classList.remove('shake-animation');
        return false;
    } else if (input.value == '') {
        error.textContent = 'You have to ask question first!';
        answer.innerHTML = `<span></span>`;
        ball.classList.remove('shake-animation');

        return false;
    } else {
        error.textContent = 'Your question needs to be a question → add "?" at the end please!';
        answer.innerHTML = `<span></span>`;
        ball.classList.remove('shake-animation');
        return false;
    }
};


const generateAnswer = () => {
    
    if(checkInput() === true){
    const number = Math.floor(Math.random() * 19)
    answer.innerHTML = `<span>Answer:</span> ${answers[number]}`
    }
};

const enter = (event) => {
    if (event.key === 'Enter') {
        generateAnswer();
    }
};

const shakeBall = () => {
    ball.classList.add('shake-animation');
    setTimeout(() => {
        ball.classList.remove('shake-animation');
    }, 1000);
    
}


ball.addEventListener('click', generateAnswer);
input.addEventListener('keypress', enter);


