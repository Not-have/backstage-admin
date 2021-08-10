<template>
    <div :class="{'has-logo':showLogo}">
        <!-- 侧边栏 -->
        <!-- <logo /> -->
        <!-- wrap-class	包裹容器的自定义类名 -->
        <el-scrollbar class="wrap-sidebar">
            <el-menu
                :default-active="activeMenu()"
                :collapse="opened"
                :background-color="backgroundColor"
                :text-color="textColor"
                :unique-opened="false"
                :collapse-transition="false"
                mode="vertical"
            >
                <!-- 内部的结构树 -->
                <sidebar-item
                    v-for="router in routers"
                    :key="router.path"
                    :item="router"
                    :base-path="router.path"
                />
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
import { computed } from 'vue';
import Logo from "./Logo.vue";
import SidebarItem from "./SidebarItem.vue"
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
export default {
    name: 'Sidebar',
    components: {
        Logo,
        SidebarItem
    },
    setup() {
        const store = useStore();
        const router = useRouter();
        const route = useRoute();
        let showLogo = computed(() => {
            return true
        })
        /**
         * @description: 侧边栏是否为展开状态
         * @param {*}
         * @return {*}
         */
        let opened = computed(() => {
            return store.state.app.sidebar.opened
        })
        let backgroundColor = computed(() => {
            return "#304156"
        })
        const textColor = computed(() => {
            return "#fff"
        })
        console.log();
        /**
         * @description: 获取路由信息
         * @param {*}
         * @return {*}
         */
        const routers = computed(() => {
            return router.options.routes
        })
        function activeMenu() {
            const { meta, path } = route;
            if (meta.activeMenu) {
                return meta.activeMenu
            }
            return path
        }
        return { showLogo, opened, backgroundColor, textColor, routers, activeMenu }
    }
}
</script>

<style lang="scss" scoped>
.wrap-sidebar {
    overflow-x: hidden !important;

}
</style>
