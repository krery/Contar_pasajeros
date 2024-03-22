//Se importan las vistas
import { createRouter, createWebHistory } from 'vue-router'
import RegistrosVista from '@/views/RegistrosVista.vue'
import Historial from '@/views/Historial.vue'
import IngresoNuevo from '@/views/IngresoNuevo.vue'
//Creamos el enrutador para los componentes de las vistas con su respectiva ruta
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: RegistrosVista
    },
    {
      path: '/historial',
      name: 'historial',
      component: Historial
    },
    {
      path: '/crear',
      name: 'ingresos',
      component: IngresoNuevo
    }
  ]
})

export default router
