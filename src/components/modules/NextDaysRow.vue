<template>
  <tr class="text-center align-middle">
    <th scope="row">
      <p class="day">{{new Intl.DateTimeFormat('es', { day: '2-digit' }).format(new Date(weather.dt * 1000))}}</p>
      <p class="month">{{new Intl.DateTimeFormat('es', { month: 'long' }).format(new Date(weather.dt * 1000))}}</p>
    </th>
    <td>
      <img
        :src="'http://openweathermap.org/img/wn/'+weather.weather[0].icon+'@2x.png'"
        class="img-fluid table-img" />
    </td>
    <td>{{weather.temp.min}}°C</td>
    <td>{{weather.temp.max}}°C</td>
    <td>{{weather.wind_speed}} Km/H</td>
    <td>{{weather.humidity}} %</td>
  </tr>
</template>

<script>
export default {
  name: "NextDaysRow",
  props: ['weather']
}
</script>

<style scoped>
  th, td{
    border-bottom: 0px;
    border-top: 1px solid #74D9B1;
  }

  th{
    color: #74D9B1;
  }

  .day{
    font-size: 23px;
    margin-bottom: 0px;
    padding-bottom: 0px;
  }

  .month{
    margin-top: 0px;
    padding-top: 0px;
  }

  .table-img{
    max-height: 70px;
  }
</style>