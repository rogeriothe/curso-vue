new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Alerta 01')
        },
        getValor(){
            this.valor = event.target.value            
        }
    },
})