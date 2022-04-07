<script setup>
import Home from "./components/pages/Home.vue";
import Footer from "./components/partials/Footer.vue";
import NavBar from "./components/partials/NavBar.vue";
</script>

<template>
  <NavBar />
  <Home />
  <Footer/>
</template>

<style>
body{
  font-family: 'Ubuntu Condensed', sans-serif;
  background: url('https://www.grecia.info/es/wp-content/uploads/sites/49/el-tiempo.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
