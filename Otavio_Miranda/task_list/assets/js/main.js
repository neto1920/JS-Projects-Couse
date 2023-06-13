const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas')

const criaLi = () =>{
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);        
    }    
});

const limaInput = () => {
    inputTarefa.value = '';
    inputTarefa.focus();
}

const addClearButton = (li) => {
    li.innerText += ' ';
    const clearButton = document.createElement('button');
    clearButton.innerText = 'Apagar';
    clearButton.setAttribute('class', 'apagar');
    clearButton.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(clearButton);
}

const criaTarefa = (textoInput) => {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limaInput();
    addClearButton(li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function() {
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);    
});

document.addEventListener('click', (e) => {
    const el = e.target;
    
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas();
    }
})

const salvarTarefas = () => {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto)
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON);
}

const addTarefasSalvas = () => {
    const tarefas = localStorage.getItem('tarefas');
    // converter o elemento para array no formato JSON
    const listaDeTarefas = JSON.parse(tarefas)
    
    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa)
    }
}

addTarefasSalvas()