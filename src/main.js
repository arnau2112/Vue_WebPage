import { createApp } from 'vue'
import router from './router' // Importa el router de router.js



import App from './App.vue'
import PeakItem from './components/PeakItem.vue'
import TiutloItem from './components/TituloItem.vue'
import IntroductionItem from './components/IntroductionItem.vue'
import ExperienceItem from './components/ExperienceItem.vue'
import GraficsItem from './components/GraficsItem.vue'
import FooterItem from './components/FooterItem.vue'
import LogForm from './components/LogForm.vue'
import ErrorItem from './components/ErrorItem.vue'
import ApiForm from './components/ApiForm.vue'
import LeafletForm from './components/LeafletForm.vue'





const app = createApp(App)

app.use(router);

app.component('peak-item', PeakItem)
app.component('titulo-item', TiutloItem)
app.component('introduction-item', IntroductionItem)
app.component('experience-item', ExperienceItem)
app.component('grafics-item', GraficsItem)
app.component('footer-item', FooterItem)
app.component('log-form', LogForm)
app.component('error-item', ErrorItem)
app.component('api-form', ApiForm)
app.component('leaflet-form', LeafletForm)

app.mount('#app')
