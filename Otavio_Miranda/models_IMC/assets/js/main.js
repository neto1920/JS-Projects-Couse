// Capturar evento de submit do formulário
const form = document.querySelector('#form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
        setResultado('Peso inválido!', false);
        return;
    } if(!altura){
        setResultado('Altura inválida!', false);
        return;
    }

    const imc = getImc(peso, altura);
    const tabelaImc = getTabelaImc(imc);
    const msg = `Seu IMC é ${imc} (${tabelaImc})`;

    setResultado(msg, true);
});

function getTabelaImc(imc){
    const tabela = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if(imc >= 39.9) return tabela[5];  
    if(imc >= 34.9) return tabela[4];   
    if(imc >= 29.9) return tabela[3];
    if(imc >= 24.9) return tabela[2];    
    if(imc >= 18.9) return tabela[1];   
    if (imc < 18.5) return tabela[0];    

}

function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criarP(){
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criarP();
    
    if(isValid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad')
    }
    
    p.innerHTML = msg
    resultado.appendChild(p);
}