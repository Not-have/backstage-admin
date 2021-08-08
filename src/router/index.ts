/*
 * @Author: 李勇
 * @Date: 2021-08-07 00:35:22
 * @LastEditors: 李勇
 * @LastEditTime: 2021-08-07 17:06:30
 * @Description(说明): 
 * @FilePath: /backstage-admin/src/router/index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';


const routes: Array<any> = [
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/login/Login.vue"),
        hidden: true
    },
    {
        path: '/',
        component: Layout,
        redirect: '/about',
        children: [{
            path: 'about',
            name: 'About',
            component: () => import('@/views/About.vue'),
            meta: { title: '首页', icon: 'dashboard' }
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
