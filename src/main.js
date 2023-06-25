import { createApp } from 'vue'
import './style.css'

//importing methods to use vue router
import {createRouter, createWebHashHistory} from 'vue-router'

//import our routes
import App from './App.vue'
import home from './components/home/home.vue'
import tournaments from './components/Tournaments/tournaments.vue'
import about from './components/About/about.vue'

//create the routes object array
const routes=[
    {
        name: 'home',
        path: '/',
        component: home
    },
    {
        name: 'tournaments',
        path: '/tournaments',
        component: tournaments
    },
    {
        name: 'about',
        path: '/about',
        component: about
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
