const pool = require('../db-mysql')
//Esta el controlador que gestiona las peticiones
class Database {

  //Función para guardar valores en la BD
  static async saveData(data) {
    const placa = data.placa_vehiculo
    const evento = data.evento
    const sql = `INSERT INTO registros ( placa_vehiculo , evento) VALUES ("${placa}", "${evento}")`;

    const [result] = await pool.query(sql)

    return result

  }

  // Método para consultar información del día actual
  static async fetchData(fecha) {
    // Se define un intervalo de tiempo para la consulta
    const fechaInicio = fecha + 'T00:00:00.000Z'
    const fechaFin = fecha + 'T23:59:59.999Z'

    //La consulta extrae el valor de placa, suma los valores de entrada en el parametro "eventos_IN" y los de salida en "eventos_OUT", para posteriormente restarlos y obtener los pasajeros actuales
    try {
      const consulta = 'SELECT placa_vehiculo, SUM(CASE WHEN evento = "IN" THEN 1 ELSE 0 END) AS eventos_IN, SUM(CASE WHEN evento = "OUT" THEN 1 ELSE 0 END) AS eventos_OUT FROM registros WHERE fecha >= ' + `"${fechaInicio}"` + ' AND fecha < ' + `"${fechaFin}"` + ' GROUP BY placa_vehiculo'
      const [rows] = await pool.query(consulta)
      return rows
    } catch (err) {
      console.log(err);
    }
  }

  // obtener listado de placas 

  static async obtenerPlacas() {

    
    try {
      const consulta = 'SELECT DISTINCT placa_vehiculo FROM registros'
    
      const [rows] = await pool.query(consulta)
      
      return rows
    } catch (err) {
      console.log(err);
    }
  }

  // Metodo para obtener historico de datos

  static async obtenerHistorial(placa, fechaInicio, fechaFin) {

    console.log(fechaInicio);
    console.log(fechaFin);
    console.log(placa);

    const fechaIn = fechaInicio + 'T00:00:00.000Z'
    const fechaF = fechaFin + 'T23:59:59.999Z'

    console.log(fechaIn);
    console.log(fechaF);

    try {
      const consulta = 'SELECT DATE(registros.fecha) AS fecha, COUNT(*) AS num_eventos FROM registros WHERE placa_vehiculo = ' + `"${placa}"` + 'AND evento = "IN" AND fecha BETWEEN ' + `"${fechaIn}"` + ' AND ' + `"${fechaF}"` + 'GROUP BY EXTRACT(DAY FROM fecha)'
    
      const [rows] = await pool.query(consulta)

      return rows
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Database;