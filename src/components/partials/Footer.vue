<template>
  <footer>
    <div class="container-fluid">
      <div class="row">

        <div class="col-md-6">
          <h3>ClimApp</h3>
          <p>La siguiente prueba plantea el desarrollo de una aplicación de consulta de clima que pueda visualizar el pronóstico actual, próximos 5 días para la ciudad actual y de otras 5 ciudades seleccionables.</p>
          <p class="text-just">Además del desarrollo específico de las funcionalidades, se requiere identificar y generar los casos de test que se consideren necesarios.</p>
          <p class="text-just">La entrega del código se espera que se entregue en algún repositorio público.</p>
        </div>

        <div class="col-md-3 text-center">
          <h3>APIs Usadas</h3>
          <p>APIs utilizadas para este proyecto, recomiendo leer la documentación de las mismas.</p>
          <ul class="nav flex-column">
            <li class="nav-item"><a target="_blank" href="https://openweathermap.org/">OpenWeather</a></li>
            <li class="nav-item"><a target="_blank" href="http://ip-api.com/">IP-API</a></li>
            <li class="nav-item"><a target="_blank" href="https://datos.gob.ar/apis">Datos Gob AR</a></li>
          </ul>
        </div>

        <div class="col-12 text-center">
          <p>Creado por <a href="https://joaquindecima.ml/" target="_blank">Joaquin (Pato) Decima</a></p>
        </div>

      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
  footer{
    margin: 5px;
    background-color: rgba(20,20,20,0.6) !important;
    backdrop-filter: blur(6px);
    border-top: 3px solid #74D9B1;
    border-radius: 12px;
    padding: 10px;
  }

  p{
    color: white;
  }

  h3, a{
    color: #74D9B1;
  }
</style>