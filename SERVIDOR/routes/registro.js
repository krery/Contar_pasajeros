const { Router } = require('express')
const RegistroModel = require('../models/RegistroModel')
const { validationResult, body } = require('express-validator')
const router = Router()

//Este método post es ejecutado en el momento en que los botones de ingreso o salida son ejecutados
router.post('/', [
  // Validar y sanear el campo 'placa'
  body('placa_vehiculo').trim().notEmpty().withMessage('La placa no puede estar vacía').isLength({ min: 6 }).withMessage('La placa debe tener al menos 6 caracteres'),
  // Validar el campo 'evento'
  body('evento').trim().notEmpty().withMessage('El evento no puede estar vacío').isIn(['IN', 'OUT']).withMessage('El evento debe ser IN o OUT'),
]
  , async function (req, res) {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({ mensaje: errors.array() })
      }
      
      //Se guarda el resultado de la consulta en la variable resultado y se imprime
      const resultado = await RegistroModel.saveData({ placa_vehiculo: req.body.placa_vehiculo, evento: req.body.evento })

      res.json(resultado) 
      console.log(resultado)
    } catch (error) {
      console.log(error)
    }
  })

//Método para consultar los datos que se encuentran en la BD correspondientes al día actual
router.get('/', async (req, res) => {
  //Se ajusta el valor de la fecha y hora actual del método Date(), para ajustar la zona horaria.
  function obtenerFechaSinHoraEnISO8601() {
    const now = new Date();
    const offset = -5 // Colombia timezone offset (UTC-5)
    const utcTime = now.getTime() + (offset * 60 * 60 * 1000)
    const isoTime = new Date(utcTime).toISOString().split('T')[0]
    return isoTime
  }
  const fecha = obtenerFechaSinHoraEnISO8601()
  //Se procede con la consulta de los datos para la fecha establecida
  const consulta = await RegistroModel.fetchData(fecha)

  res.json(consulta)
})



module.exports = router