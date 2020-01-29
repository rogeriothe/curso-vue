import Vue from 'vue'
import Vuex from 'vuex'

import carrinho from './modules/carrinho'
import parametros from './modules/parametros'

//import { getNome, getNomeCompleto } from './getters'
import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nome: 'Maria',
    sobrenome: 'Silva'
  },
  getters,
  modules: { carrinho, parametros}
})