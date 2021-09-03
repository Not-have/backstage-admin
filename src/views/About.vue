<template>
    <div class="about">
        <span class="iconfont icon-cake-1"></span>
    </div>
</template>
<script>
import "@/assets/icon/iconfont.css";
import { onMounted } from 'vue';
import { getList } from "@/api/table.ts"
export default {
    setup() {
        onMounted(() => {
            getList().then(res => {
                console.log(res);
            })
        })
    }
}
</script>
<style scoped>
.about {
    height: 100%;
    width: 100%;
}
.box {
    width: 60px;
    height: 20px;
    margin-top: 15px;
}
.icon-cake-1 {
    color: black;
}
</style>