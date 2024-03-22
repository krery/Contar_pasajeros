
<template>

<section>
      <!-- Se define un objeto con el campo para introducir la placa y los botones para efectos de creación de placa-->
      <div class="cardAzul" >    
        <!-- Campo de ingreso parade la nueva placa, que muestra "PLACA" por defecto-->
        <input class="negro" :value = "placa"  @input="placaInput" type="text"  required placeholder="PLACA">    
        
      <!-- Botones para introducir la placa con un evento -->
        <button id="in" @click=enviarIN()>IN</button>
        <button id="out" @click=enviarOUT()>OUT</button>
      </div>
  
    </section>
  
</template>
<script setup>
//Importación de dependencias necesarias
import axios from 'axios'
import {ref} from 'vue'

var placa=""
//Definición de la variable "placa" a través de una función para generar la reactividad en el campo
function placaInput(e){
  placa= e.target.value  
}

//Función para realizar el envío de información la BD con la placa nueva
function enviarOUT () {
  
  axios.post('http://localhost:3000/registro',{placa_vehiculo:placa,evento:'OUT'})
  .then( response =>{    
    console.log(response);
    location.reload()
  })
  .catch(error =>{
    console.log(error);
    
  })
  
}
//Función para realizar el envío de información la BD con la placa nueva    
function enviarIN () {
      axios.post('http://localhost:3000/registro',{placa_vehiculo:placa,evento:'IN'})
  .then( response =>{    
    console.log(response);
    location.reload()

  })
  .catch(error =>{
    console.log(error);
  }) 
    
      
}


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
  margin-top: 10px;
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