import Vue from 'vue'
import VueRouter from 'vue-router'

//COMMON
import Home from '../pages/App/HomePage.vue'

//CALENDAR @todo import route-calendar
import CalendarGrid from '../pages/Calendar/CalendarGridPage.vue'
//import CalendarDetail from '../pages/Calendar/CalendarDetailPage.vue'
//import CalendarForm from '../pages/Calendar/CalendarFormPage.vue'

//NOTES
import NoteFolderList from '../pages/Notes/NoteFolderListPage.vue'
//import NoteDetail from '../pages/Notes/NoteDetailPage.vue'
//import NoteForm from '../pages/Notes/NoteFormPage.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: CalendarGrid
  },
  {
    path: '/notes',
    name: 'notes',
    component: NoteFolderList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
