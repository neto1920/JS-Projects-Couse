
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let seconds = 0;
let timer;
let openWindows;

const getClock = (seconds) => {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

const startClock = () => {
    timer = setInterval(() =>{
        seconds ++;
        relogio.innerHTML = getClock(seconds);
    }, 1000)
}

document.addEventListener('click', (e) => {
    const el = e.target;

    if(el.classList.contains('iniciar')){
        relogio.classList.remove('pausado');
        clearInterval(timer);
        startClock();    
    }

    if(el.classList.contains('pausar')){
        clearInterval(timer);
        relogio.classList.add('pausado');
    }

    if(el.classList.contains('zerar')){
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        relogio.classList.remove('pausado')
        seconds = 0;
    }
})