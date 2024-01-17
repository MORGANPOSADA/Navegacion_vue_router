import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    //la ruta base
    {
        path:"/",
        redirect: '/inicio'

    },
    //las rutas asociadas a los componentes
    {
        path: '/',
        component:{
            render(c){
                return c('router-view');
            },
        },
        //los componenres que se renderizan en router-viuew
        children: [
            {
                path: '/inicio',
                name: 'inicio',
                component: ()=> import ('../components/Inicio.vue')
            },
            {
                path: '/main',
                name: 'main',
                component: ()=> import ('../components/Main.vue')
            },
            {
                path: '/tercero',
                name: 'tercero',
                component: ()=> import ('../components/Tercero.vue')
            },
            //inicio otros compoonentes tarea
            {
                path: '/renta-tu-espacio',
                name: 'renta-tu-espacio',
                component: ()=> import ('../components/RentaTuEspacio.vue')
            },
            {
                path: '/informacion-de-espacio',
                name: 'informacion-de-espacio',
                component: ()=> import ('../components/InformacioEspacio.vue')
            },
            {
                path: '/ofertar-espacio',
                name: 'ofertar-espacio',
                component: ()=> import ('../components/OfertarEspacio.vue')
            },
            {
                path: '/rentar-espacio',
                name: 'rentar-espacio',
                component: ()=> import ('../components/RentarEspacio.vue')
            },
            {
                path: '/catalogo-de-espacios',
                name: 'catalogo-de-espacios',
                component: ()=> import ('../components/CatalogoDeEspacios.vue')
            },
            {
                path: '/detalles-de-espacio',
                name: 'detalles-de-espacio',
                component: ()=> import ('../components/DetallesDeEspacio.vue')
            },
        ]
    }
]

const router = new VueRouter({routes, })
export default router;
