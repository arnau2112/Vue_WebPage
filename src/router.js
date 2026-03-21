import { createRouter, createWebHistory } from 'vue-router'
import LogForm from './components/LogForm.vue'
import ApiForm from './components/ApiForm.vue'
import LeafletForm from './components/LeafletForm.vue'

const routes = [
  { path: '/login', component: LogForm },
  {path: '/api_login', component: ApiForm}, // Cambia a /login
  {path: '/leaflet', component: LeafletForm}
]

export default createRouter({
  history: createWebHistory(),
  routes
})