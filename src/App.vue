

<template >
    <div style="width: 100%; height: 100%;" :class="{ dark: darkMode }">
  <titulo-item  @toggle-background="toggleBackground" @toggle-codis="toggleCodis" @toggle-experience = "toggleExperience" @toggle-grafics="toggleGrafics"/>
  <introduction-item/>
  <div id="wrapper">
    <peak-item v-if="codi"
      v-for="(x) in peaks"
      v-bind:peak-name="x.name"
      v-bind:peak-url="x.url"
      v-bind:peak-url2="x.url2"/>
  </div> 
  <experience-item v-if="experience"/>
  <grafics-item v-if="grafics" />
  <footer-item/>
  </div>
</template>

<script>
import TituloItem from './components/TituloItem.vue';





export default {
   components: { TituloItem},
  data() {
    return {
     peaks: [
        { name: 'Tsunami calculator', url: '/code1.jpg', url2: 'https://github.com/arnau2112/Visor_TFG_C-diz' },
        { name: 'PlugIN Add Photos QGIS', url: '/code2.jpg', url2: 'https://github.com/arnau2112/Plugin-Add-Photos-QGIS' },
        { name: 'Format Images Application', url: '/code1.jpg' , url2: 'https://github.com/arnau2112/Formatear_Imagenes_App'},
        { name: 'Visor Tsunami', url: '/code2.jpg', url2: 'https://github.com/arnau2112/Visor_TFG_C-diz' },
        { name: 'Calculadora Escales', url: '/code1.jpg', url2: 'https://github.com/arnau2112/Calculadora_Escales' }, 
      ],
      darkMode: false,
      codi: false,
      experience: false,
      grafics: false
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
  }
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