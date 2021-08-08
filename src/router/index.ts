/*
 * @Author: 李勇
 * @Date: 2021-08-07 00:35:22
 * @LastEditors: 李勇
 * @LastEditTime: 2021-08-08 16:34:02
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
        meta: { title: '测试1', icon: 'el-icon-location' },
        children: [
            {
                path: 'about',
                name: 'About',
                component: () => import('@/views/About.vue'),
                meta: { title: '首页', icon: 'el-icon-s-shop' }
            },
            {
                path: 'threejs',
                name: 'threejs',
                component: () => import("@/views/thressjs/Threejs.vue"),
                meta: { title: '地图', icon: 'el-icon-s-shop' }
            },
        ]
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
