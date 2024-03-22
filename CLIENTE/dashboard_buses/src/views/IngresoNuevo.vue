<script setup>

import NavBar from '@/components/NavBar.vue';

import Ingresos from '@/components/Ingresos.vue';



</script>

<!-- App.vue -->

<template>
  <div id="opp">
    <NavBar/>
    <Ingresos/>
   
    
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