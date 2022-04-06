<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">

      <a class="navbar-brand" href="#">ClimApp</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-center">

          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">
              <i class="fa fa-home" aria-hidden="true"></i> Inicio
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" target="_blank" href="https://joaquindecima.ml/">
              <i class="fa fa-user" aria-hidden="true"></i> Sobre Mi
            </a>
          </li>

        </ul>
      </div>

    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.bg-dark{
  background-color: rgba(20,20,20,0.6) !important;
  backdrop-filter: blur(6px);
}

nav{
  margin: 5px;
  border-bottom: 3px solid #74D9B1;
  border-radius: 12px;
}
</style>