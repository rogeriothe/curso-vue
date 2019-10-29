<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>Nome de Usuário: <strong>{{ inverterNome() }}</strong> </p>
    <p>Idade é <strong>{{ idade }}</strong></p>
    <button @click="reiniciarNome">Reiniciar Nome</button>
    <button @click="reiniciarFn">Reiniciar Nome(callback)</button>
  </div>
</template>

<script>

import barramento from '@/barramento'

export default {
  props: {
    nome: {
      type: String,
      //required: true,
      //defaut: 'Anônimo'
      //   default: function() {
      //       return 'Mr. Zé'
      //   }
    },
    reiniciarFn: Function,
    idade: Number
  },
  methods: {
    inverterNome () {
      return this.nome.split('').reverse().join('')
    },
    reiniciarNome () {
      // this.nome = 'Pedro'
      //nome do evento customizado, valor
      this.$emit('nomeMudou', 'Pedro')
    }
  },

  created () {
    barramento.quandoIdadeMudar(idade => {
      this.idade = idade
    })
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
