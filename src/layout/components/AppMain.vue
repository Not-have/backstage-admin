<template>
    <section class="app-main">
        <transition name="fade-transform" mode="out-in">
            <!-- 从/page/1 => /page/2, 由于这两个路由的$route.path并不一样, 所以组件被强制不复用
                则相关钩子加载顺序为:beforeRouteUpdate => created => mounted
                从/page?id=1 => /page?id=2, 由于这两个路由的 $route.path一样, 所以和没设置 key 属性一样,会复用组件,则相关钩子加载顺序为: beforeRouteUpdate -->
            <router-view :key="key" />
        </transition>
    </section>
</template>

<script>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router"
export default {
    name: 'AppMain',
    setup() {
        const route = useRoute();
        const router = useRouter();
        const key = computed(() => {
            return router.path
        })
        return { key }
    }
}
</script>

<style scoped>
@import "~@/style/scroll-bar.css";
.app-main {
    height: calc(100vh - 50px);
    width: 100%;
    overflow: auto;
}
</style>
