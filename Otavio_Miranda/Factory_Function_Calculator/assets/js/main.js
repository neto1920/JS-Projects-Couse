const criaCalculadora = () => {
    return {
        display: document.querySelector('.display'),

        inicia(){
            this.clickButtons();
            this.pressEnter();
        },

        pressEnter(){
            this.display.addEventListener('keyUp', (e) => {
                if(e.keyCode === 13) {
                    this.realizaConta()
                }
            })
        },

        realizaConta(){
            let conta = this.display.value;

            try {
                conta = eval(conta)

                if(!conta) {
                    alert('Conta Inválida!')
                    return;
                }

                this.display.value = String(conta);
            } catch(e) {
                alert('Conta inválida')
            }
        },
        
        clearDisplay() {
            this.display.value = '';
        },

        deleteOne(){
            this.display.value = this.display.value.slice(0, -1)
        },

      
        clickButtons() {
            document.addEventListener('click', (e) => {
                const el = e.target;
                
                if(el.classList.contains('btn-num')) {
                    this.btnToDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')){
                    this.deleteOne();
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta()
                }
            })            
        },
        
        btnToDisplay(valor) {
            this.display.value += valor
        }

    };
}

const calculadora = criaCalculadora();
calculadora.inicia()