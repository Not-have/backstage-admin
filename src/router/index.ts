import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';


const routes: Array<RouteRecordRaw> = [
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/login/Login.vue")
    },
    {
        path: '/',
        component: Layout,
        redirect: '/about',
        children: [{
            path: 'about',
            name: 'About',
            component: () => import('@/views/About.vue'),
            meta: { title: 'Dashboard', icon: 'dashboard' }
        }]
    },
    // {
    //     path: "/threejs",
    //     name: "threejs",
    //     component: () => import("@/views/thressjs/Threejs.vue")
    // },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
