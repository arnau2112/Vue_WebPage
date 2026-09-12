import { createRouter, createWebHistory } from 'vue-router'
import LogForm from './components/LogForm.vue'
import ApiForm from './components/ApiForm.vue'
import LeafletForm from './components/LeafletForm.vue'
import FreeTime from './components/FreeTime.vue'
import SpotifyForm from './components/SpotifyForm.vue'

const routes = [
  { path: '/login', component: LogForm },
  {path: '/api_login', component: ApiForm}, 
  {path: '/leaflet', component: LeafletForm},
  {path: '/free_time', component: FreeTime},
  {path: '/spotify', component: SpotifyForm}
]

export default createRouter({
  history: createWebHistory(),
  routes
})