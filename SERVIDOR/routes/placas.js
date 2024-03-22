const { Router } = require('express')
const RegistroModel = require('../models/RegistroModel')
const { validationResult, body } = require('express-validator')
const router = Router()

//Esta consulta se hace para rellenar un desplegable con las placas que se encuentran en la BD
router.get('/', async (req, res) => {

  try {

    const consulta = await RegistroModel.obtenerPlacas()

    res.json(consulta)

  } catch (error) {
    console.log(error)

  }


})



module.exports = router