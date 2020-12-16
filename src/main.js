// Vue App
import { createApp } from 'vue'
import App from './App.vue'

// Firebase App
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/performance";

// Firebase Init
fetch('/__/firebase/init.json').then(async response => {
  firebase.initializeApp(await response.json());
  firebase.analytics().logEvent('tutorial_completed');
  firebase.performance();
});

// Vue init
createApp(App).mount('#app')
