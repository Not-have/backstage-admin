<template>
    <div :class="{'has-logo':showLogo}">
        <!-- 侧边栏 -->
        <!-- <logo /> -->
        <!-- wrap-class	包裹容器的自定义类名 -->
        <el-scrollbar class="wrap-sidebar">
            <!--  -->
            <el-menu
                default-active=""
                :collapse="opened"
                :background-color="backgroundColor"
                :text-color="textColor"
                :unique-opened="false"
                :collapse-transition="true"
                mode="vertical"
            >
                <el-submenu index="1">
                    <template #title>
                        <i class="el-icon-location"></i>
                        <span>导航一</span>
                    </template>
                    <el-menu-item-group>
                        <template #title>分组一</template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <template #title>选项4</template>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <template #title>导航二</template>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <template #title>导航四</template>
                </el-menu-item>
                <el-submenu index="5">
                    <template #title>
                        <i class="el-icon-location"></i>
                        <span>导航一</span>
                    </template>
                    <el-menu-item-group>
                        <template #title>分组一</template>
                        <el-menu-item index="5-1">选项1</el-menu-item>
                        <el-menu-item index="5-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="5-3">选项3</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import Logo from "./Logo.vue"
import { useStore } from 'vuex';
export default {
    name: 'Sidebar',
    components: {
        Logo
    },
    setup() {
        const store = useStore();
        let showLogo = computed(() => {
            return true
        })
        let opened = computed(() => {
            return store.state.app.sidebar.opened
        })
        let backgroundColor = computed(() => {
            return "#304156"
        })
        const textColor = computed(() => {
            return "#fff"
        })
        return { showLogo, opened, backgroundColor,textColor }
    }
}
</script>

<style lang="scss" scoped>
.wrap-sidebar{
    overflow-x: hidden !important;
}
</style>
