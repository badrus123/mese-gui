/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('./fontawesome');

import Vue from "vue"

import VueRouter from 'vue-router'

Vue.use(VueRouter);

import routes from './routes'

//import store from './store'

//import App from "./components/AdminApp"

import GlobalComponentFunction from './mixin/GlobalComponentFunction'

import axios from 'axios'

Vue.mixin(GlobalComponentFunction)
/*
*
* BOOTSTRAP VUE
*
 */
import {
    CollapsePlugin,
    ButtonPlugin,
    NavbarPlugin,
    ModalPlugin,
    DropdownPlugin,
    ListGroupPlugin,
    InputGroupPlugin,
    FormInputPlugin,
    TabsPlugin,
    BadgePlugin,
    TooltipPlugin,
    FormCheckboxPlugin,
    LayoutPlugin,
    ImagePlugin
} from 'bootstrap-vue'

Vue.use(CollapsePlugin)
Vue.use(ButtonPlugin)
Vue.use(NavbarPlugin)
Vue.use(ModalPlugin)
Vue.use(DropdownPlugin)
Vue.use(ListGroupPlugin)
Vue.use(InputGroupPlugin)
Vue.use(FormInputPlugin)
Vue.use(TabsPlugin)
Vue.use(BadgePlugin)
Vue.use(TooltipPlugin)
Vue.use(FormCheckboxPlugin)
Vue.use(LayoutPlugin)
Vue.use(ImagePlugin)
// Optionally install the BootstrapVue icon components plugin
import 'bootstrap-vue/dist/bootstrap-vue.css'

/*
Sweet alert 2
 */
import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);

/*
*
* ELEMENT UI
*
 */
import 'element-ui/lib/theme-chalk/index.css'
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import { Select, Input, Option } from 'element-ui';

Vue.component(Select.name, Select);
Vue.component(Option.name, Option);
Vue.component(Input.name, Input);
locale.use(lang);

import {ServerTable, ClientTable} from 'vue-tables-2';
Vue.use(ClientTable, {});
Vue.use(ServerTable, {});
window._ = require('lodash');
import Donut from 'vue-css-donut-chart';
import 'vue-css-donut-chart/dist/vcdonut.css';
Vue.use(Donut);
/*
moment
 */
import VueMoment from 'vue-moment'
Vue.use(VueMoment)

/*
* vuelidate
*/
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

/*
vue sortable
 */


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


// declare a response interceptor
axios.interceptors.response.use((response) => {
    // do something with the response data
    //console.log('Response was received');

    return response;
}, error => {
    // handle the response error
    //console.log('Response Error', error.response.data.message);
    // this.$bvToast.toast(error.response.data.message, {
    //     title: "Error",
    //     autoHideDelay: 5000,
    //     appendToast: false,
    //     variant: "danger",
    //     solid: true
    // });


    return Promise.reject(error);
});


export const router = new VueRouter({
    mode: 'history',
    routes
});


router.beforeEach((to, from, next) => {
    next()
});


import { BToast } from 'bootstrap-vue'
Vue.component('b-toast', BToast)

Vue.mixin({
    methods: {
        popToast(title, msg,type) {
            this.$bvToast.toast(msg, {
                title: title,
                autoHideDelay: 5000,
                appendToast: false,
                variant: type,
                solid: true
            });
        },
        formatNum: (val, format) => {
            if(!format){
                format = { style: 'currency', currency: 'USD' };
            }
            return new Intl.NumberFormat('en-US',format).format(val)
        }
    }
});


window.BASE_API = '/api/'
