import { createApp } from 'vue'


import App from './App.vue'
import PeakItem from './components/PeakItem.vue'
import TiutloItem from './components/TituloItem.vue'
import IntroductionItem from './components/IntroductionItem.vue'
import ExperienceItem from './components/ExperienceItem.vue'
import GraficsItem from './components/GraficsItem.vue'
import FooterItem from './components/FooterItem.vue'






const app = createApp(App)
app.component('peak-item', PeakItem)
app.component('titulo-item', TiutloItem)
app.component('introduction-item', IntroductionItem)
app.component('experience-item', ExperienceItem)
app.component('grafics-item', GraficsItem)
app.component('footer-item', FooterItem)

app.mount('#app')
