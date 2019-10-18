 new Vue({
    el: '#desafio',
    data: {
        nome: 'Rogério de Lima Sousa',
        idade: 34,
        imagem: 'https://www.ahnegao.com.br/wp-content/uploads/2013/04/prisao.jpg"'
    },
    methods: {
        calc_idade: function (idade) {            
            return idade * 3
        },
        random: function() {
            return Math.random()
        }
    }
})

