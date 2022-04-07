<template>
  <main class="container-fluid">
    <div class="row">

      <Cities></Cities>

    </div>
  </main>
</template>

<script>
import Cities from "../modules/Cities.vue";
export default {
  name: "Home",
  components: {Cities}
}
</script>

<style scoped>
  main{
    margin-bottom: 15px;
    margin-top: 15px;
  }
</style>