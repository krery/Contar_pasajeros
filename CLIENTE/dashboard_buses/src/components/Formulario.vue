
<template>

  <section>   
    <!--Se crean los campos necesarios para recolectar la información correspondiente a la consulta-->
  <div id="form">
    <p>
    <h1>Consultar Historial por placa</h1>
    <label>Seleccione la Placa del Vehiculo a consultar</label><br>
    <!--Se usa una variable reactiva "placa", que actualiza el valor del campo dependiendo la opción seleccionada-->
    <select :value="placa" @input="placaInput">
      <!--Se ejecuta un v-for para traer a las opciones todas las placas que se encuentra en la BD-->
      <option v-for= "registro in registros" :key="registro.placa_vehiculo">{{registro.placa_vehiculo}}</option>      
    </select>
  </p>
  <p>
    <label>Fecha Inicio</label><br>
    <!-- Se insertan componentes para seleccionar el rango de fechas-->
    <input :value = "fechaInicio"  @input="fechaInicioInput" type="date"  required>
  </p>
  <p>
    <label>Fecha Fin</label><br>
    <input :value ="fechaFin" @input="fechaFinaInput"  type="date" required>
  </p>    
  <p>
    <!--Se ejecuta la función que permite envíar los datos de la consulta al realizar click sobre el botón-->
    <button @click="enviarDatos" >Consultar</button>    
  </p>

  </div>     


<!-- Creación de tabla para mostrar los datos obtenidos en la consulta de historial-->
<table v-bind:style="vertabla">
        <thead>
            <tr>
                <th>Fecha</th>
                <th>Pasajeros Transportados</th>
            </tr>
        </thead>
        <tbody>
          <!-- Para cada día se muestran los valores del total de pasajeros-->
            <tr v-for= "dia in historial" :key="dia.fecha">
                <!--Se recorta el formato de la fecha para mostrar este dato sin la hora -->                
                <td>{{dia.fecha.split("T")[0]}}</td>            
                <td>{{ dia.num_eventos }}</td>
            </tr>
            
            <!-- Agrega más filas según tus necesidades -->
        </tbody>
    </table>

    
  </section>
  
</template>
<script defer setup>

//Se utiliza la dependencia axios para realizar consultas http al servidor
import axios from 'axios'
import {ref} from 'vue'

//Definición de variables reactivas
var registros =ref([])
var historial = ref([])
//Variable para permitir mostrar o no la tabla, se usa para que no aparezca la tabla por defecto al ingresar a la ruta
var vertabla="display:none"
var placa= ""
var fechaInicio = ""
var fechaFin = ""

//Funciones para actualizar los campos de manera reactiva
function placaInput(e){
  placa= e.target.value  
}
function fechaInicioInput(e){
  fechaInicio = e.target.value  
}
function fechaFinaInput(e){
  fechaFin = e.target.value  
}

//Función para realizar consulta sobre las placas existentes en la BD
function consultarAPI(){

  try {
    
  axios.get('http://localhost:3000/placas')
    .then(response => registros.value  = response.data)     
    
  } catch (error) {
    console.log(error);    
  }
}

consultarAPI()
//Función para realizar la consulta con los parámetros seleccionados
function enviarDatos(){ 
    try { 
      console.log(placa,fechaInicio,fechaFin);   
    axios.get(`http://localhost:3000/historial/${placa}/${fechaInicio}/${fechaFin}`)
      .then(response => historial.value  = response.data)
      vertabla="display:inline"          
      
    } catch (error) {
      console.log(error)    
    }
}
</script>

<!-- Se definen los estílos de los campos y objetos-->
<style scoped>

h2{
  display: block;
  width: 100%;
  margin: 10px;
}
section{
  width: 80%;
  display: flex;  
  margin-top: 60px;
  
}

/* Estilos generales para el formulario */
.form {
  display: block;
  max-width: 400px;
  margin: 10px;
  font-family: Arial, sans-serif;
}

/* Estilos para las etiquetas de los campos */
label {
  font-weight: bold;
}

/* Estilos para los campos de entrada de texto */
input[type="text"],
input[type="email"],
input[type="tel"],
input[type="password"],
select , input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

/* Estilos para los botones */
button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

/* Estilos para el enlace de términos y condiciones */
a {
  color: #007bff;
  text-decoration: none;
}

/* Estilos para el checkbox */
input[type="checkbox"] {
  margin-right: 5px;
}

table {
            max-width: 600px;
            margin: 0 auto;
        }

        /* Filas impares */
        table tr:nth-child(odd) td {
            background-color: #f2f2f2;
        }

        /* Filas pares */
        table tr:nth-child(even) td {
            background-color: #ffffff;
        }

        /* Centrar el texto en las celdas */
        table td {
            text-align: center;
            vertical-align: middle;
            padding: 10px;
        }

        /* Altura máxima de las filas */
        table tr {
            max-height: 50px;
        }
        table th{
          background-color: black;
          color:#fff;
          padding: 10px;
        }


</style>