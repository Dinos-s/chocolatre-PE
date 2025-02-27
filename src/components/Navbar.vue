<template>
    <nav class="navbar">
        <a href=""><img src="" alt="Logo" class="logo"></a>
        <!-- <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="sobre.html">Sobre</a></li>
        </ul> -->
        <button>contato</button>
    </nav>
</template>

<script setup></script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    background-color: #f3e8e8;
    border-radius: 0 0 45px  45px;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
    font-size: 18px;
    color: black;
}

.nav-links a:hover {
    text-decoration: underline;
}

button {
    background-color: chocolate;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #b45b3e;
}

</style>