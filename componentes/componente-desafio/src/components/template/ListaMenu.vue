<template>
  <v-list
    dense
    class="pt-0"
  >
    <v-list-tile
      v-for="item in itensMenu"
      :key="item.titulo"
    >
      <v-list-tile-action>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ item.titulo }}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  data () {
    return {
      itensMenu: [
        { titulo: 'Início', icon: 'dashboard' },
        { titulo: 'Sobre', icon: 'question_answer' }
      ]
    }
  },

}
</script>

<style>
</style>