<template>
    <div class="main">
        <h1>Bem vindo ao Chocolatra-PE</h1>
        <p>Descubra os melhores chocolates artesanais.</p>
        <br><br>

        <div class="container_trufas">
            <Carditem />
            <Carditem />
            <Carditem />
        </div>
    </div>
</template>

<style scoped>
.main {
    margin: auto;
    padding: 20px;
    height: 75vh; /* Ocupa a altura total da tela */ 
    text-align: center; 
    display: flex;
    flex-direction: column;
    position: relative;
    top: 50px;
}

.container_trufas {
  display: flex;
  justify-content: space-around; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  flex-wrap: wrap; /* Quebra a linha quando não houver mais espaço */
  gap: 15px; /* Espaçamento entre os cards */
  margin: 0 auto; /* Centraliza o contêiner na tela */
}
</style>

<script setup>
import Carditem from './Carditem.vue';
</script>