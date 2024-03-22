//Se importan los módulos necesarios para la aplicación y se definen variables
const express = require('express')
const app = express()
const port = 3000
//Se importan los objetos de enrutamiento
const registroRouter = require('./routes/registro')
const placasRouter = require('./routes/placas')
const historialRouter = require('./routes/historial')
const cors = require('cors')//Se usa para gestionar el acceso a los recursos de la API
const morgan = require('morgan')//


app.use(cors())
app.use(morgan('tiny'))//El parámetro tiny define un formato sencillo (no muestra tanto texto en consola)
app.use(express.json())//De esta manera habilitamos la recepción de información en formato json

//Enrutamos nuestra aplicación
app.use('/registro', registroRouter)
app.use('/placas', placasRouter)
app.use('/historial', historialRouter)

//Hello world en la página del servidor
app.get('/', (req, res) => {
  res.send('Hello World!')
})
//Se hace el levantamiento del servidor con el puerto indicado
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})