    const mario = document.querySelector('.mario');
    const pipe = document.querySelector('.pipe');
    const score = document.querySelector('.score');
    const highscore = document.querySelector('.highscore');


    document.getElementById('botao').addEventListener('click', function() {
        window.location.href = window.location.origin + window.location.pathname
    });

    // function RecarregarPagina() {
    //     location.reload();
    // }

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)
}





// REGISTRO DE MORTE __________________________________________________________


setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition)
    
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'images/game-over-richard.png';
        mario.style.width = '75px';
        mario.style.marginleft = '50px'

        
        alert('Game over! Seu score foi' ${score});
        score = 0;

    }
}, 10)

document.addEventListener('keydown', jump);