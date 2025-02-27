<template>
    <div class="card">
        <img :src=imagem alt="Trufa de brigadeiro">
        <div class="description">
            <h4>Trufa de chocolate</h4>
            <p>Trufa de chocolate ao leite com recheio de brigadeiro.</p>
        </div>
    </div>
</template>

<style scoped>
.card {
    border: 3px solid rgb(190, 78, 4);
    display: flex;
    align-items: center;
    border-radius: 8px;
    padding: 10px;
    max-width: 400px;
}

.card img {
    width: 100px;
    height: 100px;
    border-radius: 8px;
    margin-right: 15px;
}

.description {
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
}

.description h4 {
    margin-bottom: 10px;
    color: chocolate;
    font-size: 20px;
}

.description p {
    color: #333;
    font-size: 14px;
}
</style>

<script setup>
import imagem from '../assets/download.png'
</script>