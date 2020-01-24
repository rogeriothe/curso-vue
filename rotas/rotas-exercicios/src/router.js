import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'


import Usuario from './components/usuario/Usuario'
import UsuarioLista from './components/usuario/UsuarioLista'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
import UsuarioEditar from './components/usuario/UsuarioEditar'
import Menu from './components/Menu'
import MenuAlt from './components/MenuAlt'

Vue.use(Router)

const router = new Router({
    mode: 'hash', //history: alternativa requer alteração no servidor web
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else if (to.hash) {
            return { selector: to.hash }
        } else {
            return { x: 0, y: 0 }
        }
        // return { x: 0, y: 1000 }
    },
    routes: [{
        path: '/',
        name: 'inicio',
        // component: Inicio
        components: {
            default: Inicio,
            menu: Menu
        }
    }, {
        path: '/usuario',
        //component: Usuario,
        components: {
            default: Usuario,
            menu: MenuAlt,
            menuInferior: MenuAlt
        },
        props: true, //ativa parametros via props
        children: [
            { path: '', component: UsuarioLista },
            {
                path: ':id', component: UsuarioDetalhe, props: true,
                beforeEnter: (to, from, next) => {
                    // eslint-disable-next-line
                    console.log('antes da rota -> usuario detalhe')
                    next()
                }
            },
            { path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario' },
        ]
    }, {
        path: '/redirecionar',
        redirect: '/usuario'
    }, {
        path: '*',
        redirect: '/'
    }]
})

router.beforeEach((to, from, next) => {
    // eslint-disable-next-line
    console.log('antes das rotas -> global')
    // pode encaminhar para rota especifica
    // next('/usuario')
    next()
})

export default router