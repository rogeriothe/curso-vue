<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome de usuário: <strong>{{ modificaNome() }}</strong></p>
    </div>
</template>

<script>
export default {
    // 1ª Forma
    //props: ['nome'],

    // 2ª Forma
    props: {
        // Pode receber um tipo
        // nome: String
        // ou
        // Pode receber varios tipos
        // nome: [String, Boolean]
        nome: {
            type: String,
            // required: true,
            // default: 'Chico'
            // default pode ser uma funcao
            default: function() {
                return 'Mr' + this.nome
            }
        }        
    },
    methods: {
        modificaNome() {
            return this.nome.toUpperCase()
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
