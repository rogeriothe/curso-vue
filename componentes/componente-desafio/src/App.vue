<template>
  <v-app>
    <v-navigation-drawer app>
      <topomenu />
      <v-divider></v-divider>
      <listamenu />
    </v-navigation-drawer>
    <topo />
    <conteudo />
    <rodape />
  </v-app>
</template>

<script>
import Rodape from './Rodape.vue'
import Topo from './Topo.vue'
import TopoMenu from './TopoMenu.vue'
import Conteudo from './Conteudo.vue'
import ListaMenu from './ListaMenu.vue'

export default {
  components: {
    rodape: Rodape,
    topo: Topo,
    topomenu: TopoMenu,
    conteudo: Conteudo,
    listamenu: ListaMenu
  }
}
</script>
