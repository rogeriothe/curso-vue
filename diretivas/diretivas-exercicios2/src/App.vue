<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p v-text="'Usando diretiva v-text(recebe conteudo js)'"></p>
		<p v-html="'Usando diretiva <strong>v-html</strong>'"></p>
		<hr>
		<p v-destaque:fundo.atrasar="'green'">Usando diretiva destaque</p>
		<p v-destaque:fundo="'lightblue'">Usando diretiva destaque</p>
		<p v-destaque.atrasar="cor">Usando diretiva destaque</p>

	</div>
</template>

<script>
export default {
	data() {
    return {
      cor: "red"
    };
  }
}	
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
