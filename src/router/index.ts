import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HamePage.vue'
import TestPage from '../pages/TestPage.vue'

const routes = [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/test', name: 'TestPage', component: TestPage }
]


const router = createRouter({
    history: createWebHistory(), // 또는 createWebHashHistory()
    routes,
})

export default router