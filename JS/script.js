const mario = document.getElementById('mario');
const pipe = document.getElementById('pipe');

document.addEventListener('keydown', function(event) {
    var bottomValue = parseInt(getComputedStyle(mario).bottom);

    if (event.key === ' ' && bottomValue === 0) {
        mario.classList.add('jump');

        // Adiciona um temporizador para remover a classe após 500 milissegundos (ajuste conforme necessário)
        setTimeout(function() {
            mario.classList.remove('jump');
        }, 500);
    }
});

