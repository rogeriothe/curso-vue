export default {
    namespaced: true,
    state: {
        produtos: [],
    },
    getters: {
        valorTotal (state) {
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    },
    // similar aos setters
    // não requer dispatch
    // usar apenas para mudar a store
    mutations: {
        //payload -> nome do parametro, pode ser o que quiser
        adicionarProduto (state, payload) {
            state.produtos.push(payload)
        }
    },
    actions: {
        // caso não queira chamar o metodo
        //adicionarProduto ({ commit }, payload)
        // usar para regras de negocio
        adicionarProduto (context, payload) {
            setTimeout(() => {
                // chama a mutation
                context.commit('adicionarProduto', payload)
            }, 1000)
        }
    }
}

// rootState
// https://vuex.vuejs.org/guide/modules.html