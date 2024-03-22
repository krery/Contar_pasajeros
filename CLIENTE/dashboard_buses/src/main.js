import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//Se importan librería para agregar componente circular
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'




//Creación del componente

const vuetify = createVuetify({
  components,
  directives,
})

//Creación del objeto app
const app = createApp(App)

app.use(vuetify)



app.use(createPinia())
app.use(router)
//Se hace el levantamiento de la app y utiliza el formato del archivo main.css
app.mount('#app')
