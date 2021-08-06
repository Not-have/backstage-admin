<template>
    <div class="navbar">
        <hamburger @click.native="toggleClick" class="hamburger-container" :is-active="opened" />
        <breadcrumb class="breadcrumb-containerv" />
        <div class="right-menu">
            <el-dropdown>
                <span class="el-dropdown-link">
                    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>黄金糕</el-dropdown-item>
                        <el-dropdown-item>狮子头</el-dropdown-item>
                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                        <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>
<script>

import Hamburger from "@/components/common/Hamburger/index.vue";
import Breadcrumb from "@/components/common/Breadcrumb/index.vue";
import { computed, toRefs } from 'vue';
import { useStore } from 'vuex';
export default {
    name: 'Navbar',
    components: {
        Hamburger,
        Breadcrumb
    },
    setup() {
        const store = useStore();
        /**
         * @description: 收缩侧边栏菜单
         * @param {*} 
         * @return {*} 
         */
        let toggleClick = () => {
            store.dispatch("app/toggleSideBar");

        }
        let opened = computed(() => {
            return !store.state.app.sidebar.opened
        })
        return { toggleClick, opened }
    }
}
</script>

<style lang="scss" scoped>
.navbar {
    height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    .hamburger-container {
        float: left;
        line-height: 46px;
        height: 100%;
        cursor: pointer;
        transition: background 0.3s;
        -webkit-tap-highlight-color: transparent;
        &:hover {
            background: rgba(0, 0, 0, 0.025);
        }
    }
    .breadcrumb-containerv {
        float: left;
    }
    .right-menu {
        float: right;
        line-height: 50px;
    }
}
</style>
