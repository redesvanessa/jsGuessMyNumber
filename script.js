'use strict';

let msg = document.querySelector('.message');
let num = document.querySelector('.number');
let score = document.querySelector('.score');
let scoreNumber = 20;
let highScoreNumber = 0;

let secretNumber = Math.trunc(Math.random()*20)+1;

document.querySelector('.check').addEventListener('click', function(){

    const guess = Number(document.querySelector('.guess').value);
    console.log(secretNumber);

    if (!guess){ //valida se o valor é um numero
        msg.textContent = '🥊 Sem Número!!';

    } else if (guess === secretNumber){ // valida se o numero digitado é o mesmo do randomico
        msg.textContent = '😁 Número correto!!';
        num.textContent = secretNumber;

        if (scoreNumber > highScoreNumber) {
            highScoreNumber = scoreNumber;  
            document.querySelector('.highscore').textContent = highScoreNumber;
        }
        
        document.querySelector('body').style.backgroundImage = 'linear-gradient(#60b347, #333)';
        num.style.width = '30rem';

    } else if (guess !== secretNumber){ // se o numero digitado é diferente do numero randomico
        if(scoreNumber > 1){
            msg.textContent = guess > secretNumber ? '😂 Muito Alto': '😩 Muito Baixo';
            scoreNumber--;
            score.textContent = scoreNumber;
        } else {
            msg.textContent = '😭 Você Perdeu o Jogo';
            score.textContent = 0;
        }   
    }  
});

document.querySelector('.again').addEventListener('click', function(){
    scoreNumber = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    msg.textContent = 'Comece adivinhando...';
    score.textContent = scoreNumber;
    num.textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundImage = 'linear-gradient(#ffae52, #333)';
        num.style.width = '15rem';
})
