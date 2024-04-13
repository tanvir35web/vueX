import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import store from './store';  // import vue x  store

createApp(App).use(store).mount('#app');