<template>
  <main class="container">

    <div class="row">
      <Cities/>
      <div class="col-md-6">
        <div class="container-fluid">
          <div class="row">

          </div>
        </div>
      </div>
      <div class="col-md-6"></div>
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
    margin: 15px auto;
    padding: 0px 20px;
  }
</style>