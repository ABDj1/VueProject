import Vue from 'vue'
import Vuelidate from "vuelidate/src";
import App from './App.vue'
import './registerServiceWorker'
import router from './router/index'
import dateFilter from "./filters/date.filters"
import messagePlugin from '@/utils/message.plugin'
import store from './store'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app/dist/index.cjs'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter('date', dateFilter);

firebase.initializeApp( {
  apiKey: "AIzaSyCqnDXFKE-pa-ztScC1-e_urZtYmSiU5IY",
  authDomain: "vue7code.firebaseapp.com",
  databaseURL: "https://vue7code.firebaseio.com",
  projectId: "vue7code",
  storageBucket: "vue7code.appspot.com",
  messagingSenderId: "748104824737",
  appId: "1:748104824737:web:3db6c6efea71711ae3bde0",
  measurementId: "G-5EWJYW5F82"
});

let app
firebase.auth().onAuthStateChanged(() => {
 if (!app){
   app = new Vue({
     router,
     store,
     render: h => h(App)
   }).$mount('#app');
 }
});


