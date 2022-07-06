import { createApp } from 'vue'
import router from './router'
import MainComponent from "./components/MainComponent.vue"
import '../assets/css/style.css'
import '../assets/css/gridButton.css'

const app = createApp(MainComponent)

app.use(router)
app.directive('focus', {
  mounted(el) {
    el.focus()
  }
})
app.mount('#app')
