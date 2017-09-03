// "use strict";
import Vue from 'vue';
// import VueRouter from 'vue-router'
// import VueResource from 'vue-resource'
import App from './App.vue';
// import routes from './router.config'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(Mint);

// Vue.use(VueRouter)
// Vue.use(VueResource)
//
//
// var router = new VueRouter({
//     routes
// })

new Vue({
    el : '#app',
    // router,
    render : function(h){
        return h(App)
    }
});
