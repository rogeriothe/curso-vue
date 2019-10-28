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

// @ remete a src/
import Rodape from '@/components/template/Rodape.vue'
import Topo from '@/components/template/Topo.vue'
import TopoMenu from '@/components/template/TopoMenu.vue'
import ListaMenu from '@/components/template/ListaMenu.vue'
import Conteudo from '@/components/Conteudo.vue'

export default {
  components: {
    rodape: Rodape,
    topo: Topo,
    topomenu: TopoMenu,
    conteudo: Conteudo,
    listamenu: ListaMenu
    // Rodape,
    // Topo,
    // TopoMenu,
    // Conteudo,
    // ListaMenu
  }
}
</script>
