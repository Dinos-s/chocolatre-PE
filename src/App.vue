<script setup>
  import Navbar from './components/Navbar.vue'
  // import Main from './components/Main.vue'
  import Footer from './components/Footer.vue'
</script>

<template>
  <Navbar />
  <!-- <Main /> -->
   <router-view/>
  <Footer />
</template>

<style scoped>

</style>