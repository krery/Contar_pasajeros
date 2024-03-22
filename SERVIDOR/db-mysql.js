const mysql = require('mysql2/promise');//Se importa la librearía para utilizar la base de datos habilitada para promesas

//Se define la configuración de la base de datos
const config = {
  host: 'localhost',
  user: 'root',
  database: 'buses',
  port: 3306,
  password: ''

}

//Se instancia el objeto de conexión con la configuración establecida
const pool = mysql.createPool(config);


//Se exporta el objeto de conexión para su uso
module.exports = pool