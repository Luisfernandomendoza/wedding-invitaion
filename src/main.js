import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

require('./styles/main-styles.scss')
createApp(App).use(store).mount('#app')
