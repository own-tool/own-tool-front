<template>
  <div class="dayCell" :class="getDayClasses(day)">
    <p class="dayCell__day">
        <span class="dayCell__monthName">{{ monthName(day.getMonth()) }}</span>
        <span class="dayCell__dayNumber">{{ day.getDate() }}</span>
    </p>
    
    <ul class="dayCell__items">
        <li class="dayCell__item"> </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CalendarDayCell',
  props: {

    day: {
        type: Date
    }
  },

  created(){

  },

  methods: {
    getDayClasses(day){
        let classes = ['day']

        classes.push('day_' + this.dayCode(day.getDay()))

        if (day.getDate() == 1) {
            classes.push('firstDay')
        }

        //check today
        let today = new Date()
        if (today.getFullYear() == day.getFullYear() && today.getMonth() == day.getMonth() && today.getDate() == day.getDate()){
            classes.push('today')
        }


        //check the last day
        let referenceDay = new Date(day)

        referenceDay.setMonth(referenceDay.getMonth() + 1 )
        referenceDay.setDate(0)

        if (day.getDate() == referenceDay.getDate()) {
            classes.push('lastDay')
        }

        return classes
    },

    dayName(dayNumber) {
        let days = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
        return days[dayNumber]
    },

    dayCode(dayNumber) {
        let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        return days[dayNumber]
    },

    monthName(monthNumber) {
        let months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

        return months[monthNumber].substring(0, 3)
    }
  }
}
</script>

<style>
    .dayCell {
        background-color: #dedede;
        position: relative;

        padding-right: 2rem;
        min-height: 5rem;
    }


    .dayCell.firstDay {
        
    }

    .dayCell.day_saturday, .dayCell.day_sunday {
        background-color: #cccccc;
    }


    .dayCell.today {
         background-color: #ffffff;
    }

    .dayCell .dayCell__monthName {
        display: none;
    }

    .dayCell .dayCell__day {
        position: absolute;
        top: 0;
        right: 0;
        margin: 0.5em 0.5em 0 0;
        text-align: center;

        font-size: 0.8em;
        font-weight: bold;
    }

    .dayCell.firstDay .dayCell__monthName {
        display: inline;
        font-weight: bold;
        margin-right: 0.25em;
        text-transform: uppercase;
    }

    .dayCell.firstDay .dayCell__day {
        border-bottom: 1px solid black;
    }

    .dayCell__items {
        list-style: none;
        font-size: 0.6em;
        text-transform: uppercase;
    }


</style>
