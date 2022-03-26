import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        component: () => import('../components/Dashboard.vue')
    }
]

export const router = createRouter({
    history: createWebHistory,
    routes,
})