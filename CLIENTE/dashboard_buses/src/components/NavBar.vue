<template>
  
  <header>
        <nav>
            <ul>
                <!--Listado para la Barra de navegación con el enrutador a los procesos que cada uno ejecuta-->
                <li><router-link to="/">INICIO</router-link></li>
                <li><router-link to="/historial">HISTORIAL</router-link></li>
                
            </ul>
        </nav>
    </header>
</template>
<script setup>


</script>
<style>
        /* Estilos para la barra de navegación */
        header {
            background: rgba(0, 0, 0, 0.7);
            width: 100%;
            position: fixed;
            z-index: 100;
            font-size: 18px;
            padding: 15px 0;           

            
        }     


       

        nav ul {
            list-style: none;
            overflow: hidden;
            font-family:Georgia, 'Times New Roman', Times, serif
            
        }

        nav ul li {
            float: left;
            margin-right: 20px;
        }

        nav ul li a {
            text-decoration: none;
            color: white;
        }
    </style>



