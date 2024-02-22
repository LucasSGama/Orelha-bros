const mario = document.getElementById('mario');
const pipe = document.getElementById('pipe');
const clouds = document.querySelector('.clouds')

document.addEventListener('keydown', function(event) {
    var bottomValue = parseInt(getComputedStyle(mario).bottom);

    if (event.key === ' ' && bottomValue === 0) {
        mario.classList.add('jump');
 
        // Adiciona um temporizador para remover a classe após 500 milissegundos (ajuste conforme necessário)
        setTimeout(function() {
            mario.classList.remove('jump');
        }, 500);
    }

    if (event.key === ' ') {
        pipe.classList.add('pipe-move');
        clouds.classList.add('clouds-animation');
        console.log("Ta puro");

        const h3 = document.getElementById('Aviso');
        h3.style.display = "none";
 
    }
     
});

 
