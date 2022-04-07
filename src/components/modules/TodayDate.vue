<template>
  <div class="col-md-6 text-center">
    <div class="today">
      <p class="day">{{weekday}} {{day}}</p>
      <p class="date">{{month}} de {{year}}</p>
    </div>
  </div>
</template>

<script>
const date = new Date();
const year = new Intl.DateTimeFormat('es', { year: 'numeric' }).format(date);
const month = new Intl.DateTimeFormat('es', { month: 'long' }).format(date);
const day = new Intl.DateTimeFormat('es', { day: '2-digit' }).format(date);
const weekday = new Intl.DateTimeFormat('es', { weekday: "long" }).format(date);
export default {
  name: "TodayDate",
  data: () => {
    return{
      year,
      month: month.charAt(0).toUpperCase().concat(month.slice(1)),
      day,
      weekday: weekday.charAt(0).toUpperCase().concat(weekday.slice(1))
    }
  }
}
</script>

<style scoped>
  .today{
    border-radius: 12px;
    background-color: rgba(20,20,20,0.6) !important;
    backdrop-filter: blur(6px);
    padding: 20px;
    margin-bottom: 15px;
  }

  .day{
    color: #74D9B1;
    font-size: 40px;
    margin-bottom: 0px;
  }

  .date{
    color: white;
    font-size: 20px;
  }
</style>