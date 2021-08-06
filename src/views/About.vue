<template>
    <div class="about">
        sasasasaass
    </div>
</template>
<script>
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
.box {
    width: 60px;
    height: 20px;
    margin-top: 15px;
}
</style>