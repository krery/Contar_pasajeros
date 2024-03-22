<script setup>
//Importamos los componentes de las vistas
import RegistrosBus from '../components/RegistrosBus.vue'
import NavBar from '@/components/NavBar.vue';



</script>

<!-- App.vue -->

<template>
  <div id="opp">
    <NavBar/>
   
    <RegistrosBus />
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