<template>
  <div>
    
<!--
    Hello calendar !
    
    <p>TODAY : {{ this.today }}</p>
    <p>FROM : {{ this.from }} -- {{ this.from.getDay() }}  -- {{ this.from.getDate() }}</p>
    <p>TO : {{ this.to }}</p>

    <hr>
-->
    <div class="calendarGrid">

      <div class="calendarGrid__header">Lundi</div>
      <div class="calendarGrid__header">Mardi</div>
      <div class="calendarGrid__header">Mercredi</div>
      <div class="calendarGrid__header">Jeudi</div>
      <div class="calendarGrid__header">Vendredi</div>
      <div class="calendarGrid__header">Samedi</div>
      <div class="calendarGrid__header">Dimanche</div>

    <template v-for="day in list" >
      <CalendarDayCell :key="day.toString()" :day="day" />
    </template>
    </div>

    <p><button>Next...</button></p>
    
  </div>
</template>

<script>
import CalendarDayCell from '@/components/Calendar/CalendarDayCell'

export default {
  name: 'CalendarGridPage',
  
  components: {
    CalendarDayCell
  },

  data() {
    return {
      'today': null,
      'from': null,
      'to': null,

      'list': []
    }
  },

  created() {
    this.today = new Date()
    this.from = new Date(`${this.today.getUTCFullYear()}-01-01T00:00:00`)

    //nearest monday 
    if (this.from.getDay() == 0) {
      this.from.setDate(this.from.getDate() + 1);
    } else if (this.from.getDay() > 1) {
      this.from.setDate(this.from.getDate() - this.from.getDay() +1);
    }

    this.to = new Date(`${this.today.getUTCFullYear()}-12-31T23:59:59`)

    for(let i=0; i < 500; i++){
      let anotherDay = new Date(this.from)
      anotherDay.setDate(this.from.getDate() + i);

      this.list.push(anotherDay)
    }

    
  }
}
</script>

<style>
.calendarGrid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
  

  

}

.calendarGrid__header {
  font-size: 0.8em;
  text-align: center;

  padding: 0.5em;
  text-overflow: ellipsis;

  text-transform: uppercase;
  font-weight: bold;
  overflow: hidden;
}


</style>
