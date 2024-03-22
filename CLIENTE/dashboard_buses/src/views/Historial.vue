<script setup>
//Se importan los componentes
import NavBar from '@/components/NavBar.vue';

import Formulario from '@/components/Formulario.vue';



</script>

<!-- App.vue -->

<template>
  <div id="opp">
    <!-- Se llaman los componentes-->
    <NavBar/>
    <Formulario/>
   
    
  </div>
</template>

<style scoped>
#opp{
  width: 100%;
  
  margin: auto; 
  display: flex;  
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: normal;
  align-content: flex-start;

}
</style>