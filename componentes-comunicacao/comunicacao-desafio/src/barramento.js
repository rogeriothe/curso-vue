import Vue from 'vue'
export default new Vue(
    {
        methods: {
            setUsuarioSelecionado (usuario) {
                this.$emit('usuarioSelecionado', usuario)
            },
            //aguarda o evento 'usuarioSelecionado' e recebe uma funcao callback
            onUsuarioSelecionado (callback) {
                this.$on('usuarioSelecionado', callback)
            }
        }
    }
)
