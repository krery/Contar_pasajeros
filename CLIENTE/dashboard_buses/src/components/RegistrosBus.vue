<template>
  <section>
      <!--Creación del objeto que permite visualizar la información de cada bus, se usa un v-for para mostrar cada placa en la BD-->
    <div class="cardAzul" v-for= "registro in registros" :key="registro.placa_vehiculo">
      <!--Objeto donde se muestra la pláca, en este caso cambiamos su apariencia usando un v-if, el cual depende del total de pasajeros-->
      <h3 class="negro" v-if="(registro.eventos_IN-registro.eventos_OUT)<40">{{registro.placa_vehiculo}}</h3>
      <h3 class ="rojo" v-else>{{registro.placa_vehiculo}}</h3>
      <p>Pasajeros: {{registro.eventos_IN-registro.eventos_OUT}}</p>
      <!--Componente para visualizar el porcentaje del bus que está lleno, también cambia su aparencia dependiendo del número de pasajeros-->
      <div id="circulo" v-if="(registro.eventos_IN-registro.eventos_OUT)<40">

        <div class="text-center">

          <v-progress-circular :model-value="((registro.eventos_IN-registro.eventos_OUT)/40*100)" :rotate="0" :size="65" :width="8" color="green">
          <template v-slot:default> {{ Math.round((registro.eventos_IN-registro.eventos_OUT)/40*100) }} % </template>
          </v-progress-circular>
        </div>

      </div>
      <div id="circulo" v-else>

          <div class="text-center">

            <v-progress-circular :model-value="((registro.eventos_IN-registro.eventos_OUT)/40*100)" :rotate="0" :size="65" :width="8" color="red">
            <template v-slot:default> {{ Math.round((registro.eventos_IN-registro.eventos_OUT)/40*100) }} % </template>
            </v-progress-circular>
          </div>

      </div>
    <!--Botones para realizar el envío de información a la BD-->
      <button id="in" @click=enviarIN(registro.placa_vehiculo)>IN</button>
      <button id="out" @click=enviarOUT(registro.placa_vehiculo)>OUT</button>
    </div>

  </section>
  
</template>

<script setup>
import axios from 'axios'
import {ref} from 'vue'

var registros =ref([])

//Función para consultar la información de cada placa dentro de la BD 
function consultarAPI(){

  try {
    
  axios.get('http://localhost:3000/registro')
    .then(response => registros.value  = response.data)     
    
  } catch (error) {
    console.log(error);    
  }
  
 
}
consultarAPI()
//Función para el ingreso de datos a la BD
function enviarOUT (placa) {
  
  axios.post('http://localhost:3000/registro',{placa_vehiculo:placa,evento:'OUT'})
  .then( response =>{
    consultarAPI()
    console.log(response);
  })
  .catch(error =>{
    console.log(error);
  })
  
}
//Función para el ingreso de datos a la BD    
function enviarIN (placa) {
      axios.post('http://localhost:3000/registro',{placa_vehiculo:placa,evento:'IN'})
  .then( response =>{
    consultarAPI()
    console.log(response);
  })
  .catch(error =>{
    console.log(error);
  })
      
      
      
}

//Se actualiza la información de cada bus al llamar la función "consultarAPO()" cada 10 segundos
setInterval(() => {
  consultarAPI();
}, 10000)

</script>

<style scoped>
.cardAzul {
  display: flex;
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 200px;
  height: 260px;
  background-image: url('/bus_img.jpeg') ;
  background-size:contain;
  background-position: top;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #dcecfc;
  
}
.cardRoja {
  display: flex;
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 200px;
  height: 260px;
  background-image: url('/bus_img.jpeg') ;
  background-size:contain;
  background-position: top;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #dcecfc;
  
}

#circulo{
    
  width: 90px;
  height: 70px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 5px;  
  padding: 0px;
  

  
  
}
.negro{
  
  text-align: center;
  color:  black;
  background-color: yellow;
  width: 80px;
  height: 30px;
  border-radius: 5px;
  border: solid 3px black

}
.rojo{
  
  text-align: center;
  color:  black;
  background-color: red;
  width: 80px;
  height: 30px;
  border-radius: 5px;
  border: solid 3px black

}
p{
  margin-top: 20px ;
  text-align: center;
  font-weight: bold;
  font-size: 21px;
  text-shadow: 10px 10px 10px rgb(250, 250, 250);
  
}




button {
  background-color: initial;
  background-image: linear-gradient(-180deg, #00D775, #00BD68);
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: Inter,-apple-system,system-ui,Roboto,"Helvetica Neue",Arial,sans-serif;
  height: 30px;
  line-height: 30px;
  outline: 0;
  overflow: hidden;
  padding: 0 20px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: top;
  white-space: nowrap;
  width: 100%;
  z-index: 9;
  border: 0;
  margin: 5px;
  margin-top: 0px;
}

#out{
  background-image: linear-gradient(-180deg, #f14a44, #f14a44);


}

button:hover {
  background: #00bd68;
}
#out:hover{
  background: #f11a1a;


}
section{
  width: 85%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  margin-top: 50px;
  
}
</style>