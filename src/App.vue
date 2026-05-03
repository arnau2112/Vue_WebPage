

<template >
  <div style="width: 100%; height: 100%;" :class="{ dark: darkMode }" v-if="$route.path === '/'">
  <titulo-item  @toggle-background="toggleBackground" @toggle-codis="toggleCodis" @toggle-experience = "toggleExperience" @toggle-grafics="toggleGrafics" @toggle-login="toggleLogin"/>
    <introduction-item/>
    <div id="wrapper">
      <peak-item  v-if="codi"/>
    </div> 
    <experience-item v-if="experience"/>
    <grafics-item v-if="grafics" />
    <!-- <log-form v-if="login"/> -->
    <footer-item/>
   </div>
   <div v-if="$route.path !== '/' && 
              $route.path !== '/login' && 
              $route.path !== '/leaflet' && 
              $route.path !== '/free_time' &&
              $route.path !== '/api_login'">
    <error-item/>
    <api-form v-if="$route.path === '/api_login'"/>
    <leaflet-form v-if="$route.path === '/leaflet'"/>
    <free-time v-if="$route.path === '/free_time'"/>
   </div>
   
  
  <RouterView />

  
  
  

  
</template>

<script>
import TituloItem from './components/TituloItem.vue';
import { RouterLink, RouterView } from 'vue-router';





export default {
   components: { TituloItem},
  data() {
    return {
      darkMode: false,
      codi: false,
      experience: false,
      grafics: false,
      login: false
    };
  },
  methods: {
    toggleBackground() {
      this.darkMode = !this.darkMode;
    },
    toggleCodis() {
      this.codi = !this.codi;
    },
    toggleExperience() {
      this.experience = !this.experience;
    },
    toggleGrafics() {
      this.grafics = !this.grafics;
  },
    toggleLogin() {
      this.login = !this.login; }
}
}


</script>

<style>

  html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color:rgb(230, 216, 186)
}

#app {
  width: 100%;
  height: 100%;
}

 #wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

.dark {
  background-color: #7c7575;
}


#app {
 cursor: url('/cursor.svg') 16 16, crosshair;
}
</style>     