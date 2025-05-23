const botoes = document.querySelectorAll('input[type="button"]');
const display = document.querySelector('input[type="tel"]');
const limpar = document.querySelector('.icon');

let digitoTimeout;

// Função pra digitar com delay, tipo hacker no filme
function digitarAoVivo(valor) {
    clearTimeout(digitoTimeout);
    let atual = display.value;
    let index = 0;

    function digita() {
        if (index < valor.length) {
            display.value = atual + valor.slice(0, index + 1);
            index++;
            digitoTimeout = setTimeout(digita, 50);
        }
    }

    digita();
}

// Evento click nos botões do teclado virtual
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const valor = botao.value;
        digitarAoVivo(valor);
    });
});

// Evento para limpar o display (botão ❌)
limpar.addEventListener('click', () => {
    display.value = '';
});

// Responsividade fodástica do jeitinho Supla ON
function ajustarLayoutResponsivo() {
    const largura = window.innerWidth;

    if (largura <= 420) {
        display.style.width = '90%';
        display.style.fontSize = '1rem';

        botoes.forEach(btn => {
            btn.style.width = '60px';
            btn.style.height = '60px';
            btn.style.fontSize = '1.2em';
        });

        document.querySelector('h1').style.fontSize = '1.8em';

    } else if (largura <= 768) {
        display.style.width = '280px';
        display.style.fontSize = '1.2rem';

        botoes.forEach(btn => {
            btn.style.width = '70px';
            btn.style.height = '70px';
            btn.style.fontSize = '1.4em';
        });

        document.querySelector('h1').style.fontSize = '2.2em';

    } else {
        display.style.width = '300px';
        display.style.fontSize = '1.4rem';

        botoes.forEach(btn => {
            btn.style.width = '80px';
            btn.style.height = '80px';
            btn.style.fontSize = '1.5em';
        });

        document.querySelector('h1').style.fontSize = '2.6em';
    }
}

// Ajusta o layout na hora que carrega e quando redimensionar
window.addEventListener('DOMContentLoaded', ajustarLayoutResponsivo);
window.addEventListener('resize', ajustarLayoutResponsivo);
