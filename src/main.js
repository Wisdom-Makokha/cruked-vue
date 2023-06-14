import { createApp } from 'vue'
import './style.css'
import {createRouter, createWebHashHistory} from 'vue-router'
import App from './App.vue'
import home from './components/home/home.vue'

//create a list of our routes
const routes=[
    {
        name: 'home',
        path: '/home',
        component: home
    }
];

//create the router instance and pass the routes
const router = createRouter
(
    {
        history: createWebHashHistory(),
        routes: routes
    }
);

//create an instance of our application
//mount it to the app id in index.html
//make the application to use our router
createApp(App).use(router).mount('#app')
