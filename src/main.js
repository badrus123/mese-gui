import Vue from "vue"
import App from './js/components/AdminApp.vue'
import { router } from './js/app.js'
import store from './js/store/index.js'

const app = new Vue({
    router,
    components: {App},
    store,
    render: h => h(App)
}).$mount("#app");
