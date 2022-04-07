<template>
  <tr class="text-center align-middle">
    <th scope="row">
      <p class="day">25</p>
      <p class="month">Septiembre</p>
    </th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
    <td>Otto</td>
    <td>@mdo</td>
  </tr>
</template>

<script>
export default {
  name: "NextDaysRow"
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
</style>