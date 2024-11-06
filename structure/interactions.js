const clickDesp = document.querySelector('#opc03');
const option = document.querySelector('.despOption');

const click = document.querySelector('#opc05');
const optionUser = document.querySelector('.despPerfil');

clickDesp.addEventListener('click', () => showOption(option));
click.addEventListener('click', () => showOption(optionUser));

function showOption(element) {
    element.classList.toggle('active');
}

