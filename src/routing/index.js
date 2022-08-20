import { createRouter, createWebHistory } from 'vue-router'
import Main from './../views/Main.vue'
import Start from './../views/Start.vue'

import Space from './../views/StartViews/Space.vue'
import Medium from './../views/StartViews/Medium.vue'
import Advanced from './../views/StartViews/Advanced.vue'
import Extreme from './../views/StartViews/Extreme.vue'

const mainRouter = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Main', component: Main},
        {path: '/start', name: 'Start', component: Start},

        {path: '/start/space', name: 'Space', component: Space},
        {path: '/start/medium', name: 'Medium', component: Medium},
        {path: '/start/advanced', name: 'Advanced', component: Advanced},
        {path: '/start/extreme', name: 'Extreme', component: Extreme},
    ]
})

export default mainRouter