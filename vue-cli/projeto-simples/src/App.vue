<template>
  <div id="app">
    {{ titulo }}
    <button @click="titulo += '!'">Alterar</button>

  </div>
</template>

<script>
export default {
  data: function() {
    return {
      titulo: 'Hello World!'
    }
  }
}
</script>

<style>
  #app {
    background-color: #067BC2;
    color: #ECC30B;
  }
</style>