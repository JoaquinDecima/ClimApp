<template>
  <table class="table">
    <thead>
      <tr class="text-center">
        <th scope="col"><i class="fa fa-calendar" aria-hidden="true"></i></th>
        <th scope="col"><i class="fa fa-cloud" aria-hidden="true"></i></th>
        <th scope="col"><i class="fa fa-thermometer-empty" aria-hidden="true"></i></th>
        <th scope="col"><i class="fa fa-thermometer-full" aria-hidden="true"></i></th>
        <th scope="col"><i class="fa fa-angle-double-right" aria-hidden="true"></i></th>
        <th scope="col"><i class="fa fa-tint" aria-hidden="true"></i></th>
      </tr>
    </thead>
    <tbody>
    <NextDaysRow v-for="elem in nextWeatherData" :weather=elem />
    </tbody>
  </table>
</template>

<script>
import NextDaysRow from "./NextDaysRow.vue"
import {next, nextcity} from "../../service/api";
import {getParams} from "../../service/routes";

let data

if (getParams()==undefined){
  data = await next()
} else {
  data = await nextcity(getParams())
}

export default {
  name: "NexDaysTable",
  components: {NextDaysRow},
  data: () => {
    return {
      nextWeatherData: data
    }
  }
}
</script>

<style scoped>
  table{
    border-radius: 12px;
    background-color: rgba(20,20,20,0.6) !important;
    backdrop-filter: blur(6px);
    color: white;
  }

  thead{
    color: #74D9B1;
    border-bottom-color: #74D9B1;
  }

  tbody{
    border: 0px !important;
  }
</style>