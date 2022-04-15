import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

vue.config.productionTip = false

vue.options.API = {
  URL: '',
  KEY: '',
}

/* eslint-disable no-new */
new vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
})
