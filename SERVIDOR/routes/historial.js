//Se importan e instancian los modulos para ruteo, y controlador para esta ruta
const { Router } = require('express')
const RegistroModel = require('../models/RegistroModel')
const router = Router()

//Definición de la ruta, esta requiere los parámetros "placa_vehiculo", "fechaInicio" , "fechaFin" para su consulta
router.get('/:placa_vehiculo/:fechaInicio/:fechaFin', [

//Función para consultar el segmento de historial
], async (req, res) => {

  try {


    const consulta = await RegistroModel.obtenerHistorial(req.params.placa_vehiculo, req.params.fechaInicio, req.params.fechaFin)

    res.json(consulta)
    //Control de errores
  } catch (error) {
    console.log(error)

  }

})



module.exports = router