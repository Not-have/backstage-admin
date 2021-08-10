<template>
    <div
        class="append-wrapper"
        :class="{'whetherTheSidebarIsExpanded':whetherTheSidebarIsExpanded}"
    >
        <!-- 侧边栏 -->
        <sidebar class="sidebar-container" />
        <!-- 窗口 -->
        <div class="main-container">
            <!-- 顶部栏  面包屑 -->
            <div :class="{'fixed-header':fixedHeader}">
                <navbar />
            </div>
            <!-- 内容 -->
            <app-main class="content" />
        </div>
    </div>
</template>

<script>
import { computed } from "vue";
import { Navbar, AppMain, Sidebar } from "./components";
import { useStore } from 'vuex';
export default {
    name: 'Layout',
    components: {
        Navbar,
        AppMain,
        Sidebar
    },
    setup() {
        const store = useStore();
        let fixedHeader = computed(() => {
            return true
        })
        let whetherTheSidebarIsExpanded = computed(() => {
            return store.state.app.sidebar.opened
        })
        return { fixedHeader, whetherTheSidebarIsExpanded }
    }
}
</script>

<style lang="scss" scoped>
@import "~@/style/mixin.scss";
@import "~@/style/element-plus.scss";
.fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
}
.append-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
}
.content {
    position: absolute;
    height: 100%;
    top: 0;
    left: #{$sideBarWidth};
    width: calc(100% - #{$sideBarWidth});
}

/**
侧边栏（.sidebar-container 这个是侧边栏的类名）：
1、侧边栏默认宽度事$sideBarWidth决定
2、当侧边栏收缩之后，根据父级类名去决定的
*/
.sidebar-container {
    transition: width 0.28s;
    width: $sideBarWidth !important;
    height: 100%;
    background-color: $menuBg;
}
/* 解决elementUI菜单的右边1px的空白 */
.sidebar-container ::v-deep .el-menu {
    border: 0 !important;
    
}

.whetherTheSidebarIsExpanded .sidebar-container {
    width: 54px !important;
    overflow-x: hidden;
}
.whetherTheSidebarIsExpanded .fixed-header {
    width: calc(100% - 54px);
}
.whetherTheSidebarIsExpanded .content {
    left: 54px;
    width: calc(100% - 54px) !important;
}
.whetherTheSidebarIsExpanded
    .sidebar-container
    ::v-deep
    .el-submenu__icon-arrow,
.sub-el-icon {
    display: none;
}
</style>

