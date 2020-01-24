<template>
  <div class="usuario-detalhe">
    <h3>Usuário Detalhe</h3>
    <hr>
    <p><strong>Código:</strong> {{ id }}</p>
    <router-link
      tag="button"
      primario
      :to="{name: 'editarUsuario', params: {id},
      query: { lingua: 'pt'},
      hash: '#rodape'}"
    >
      Editar
    </router-link>
  </div>
</template>

<script>
export default {

  //:to="`/usuario/${id}/editar`" 

  props: ['id'],
  beforeRouteEnter (to, from, next) {
    // eslint-disable-next-line
    console.log('dentro do componente -> usuario detalhe')
    // possivel checagem de autenticação
    next()
  }
  //   data () {
  //     return {
  //       id: this.$route.params.id
  //     }
  //   },
  //   watch: {
  //     $route (to) {
  //       this.id = to.params.id
  //     }
  //   },

}
</script>

<style>
</style>