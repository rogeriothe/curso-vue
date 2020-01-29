export default {
    state: {
        quantidade: 1,
        preco: 9.98
    },
    // similar aos setters
    // não requer dispatch
    // usar apenas para mudar a store
    mutations: {
        setQuantidade (state, payload) {
            state.quantidade = payload
        },
        setPreco (state, payload) {
            state.preco = payload
        }
    }
}