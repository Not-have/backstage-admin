<template>
    <div v-if="!item.hidden">
        <!-- 一个孩子元素 -->
        <template v-if="hasOneShowingChild">
            {{onlyOneChild}}
            <el-menu-item
                :index="resolvePath(onlyOneChild.path)"
                :class="{'submenu-title-noDropdown':!isNest}"
            >
                <item
                    :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)"
                    :title="onlyOneChild.meta.title"
                />
            </el-menu-item>
        </template>
        <!-- 多个孩子元素 -->

    </div>
</template>

<script>
/**
 * 注：这块要引入path，需要在tsconfig.json中添加node，如下：
 * "types": [
        "node",
        "webpack-env",
        "jest"
    ],
 */
import path from 'path'
import { computed, reactive, ref, toRefs } from 'vue'
import { isExternal } from "@/utils/validate"
export default {
    name: 'SidebarItem',
    components: {

    },
    props: {
        item: {
            type: Object,
            required: true
        },
        isNest: {
            type: Boolean,
            default: false
        },
        basePath: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        /**
         * @description: 
         * @param {*} children
         * @param {*} parent
         * @return {*}
         */
        const hasOneShowingChild = computed(() => {
            if (props.item.children) {
                const showingChildren = props.item.children.filter((item) => {
                    if (item.hidden) {
                        return false
                    } else {
                        return true
                    }
                })
                if (showingChildren.length === 0) {
                    return true
                }
                if (showingChildren.length === 1) {
                    return true
                }
            }
            return false
        })

        let onlyOneChild = computed(() => {
            let obj = {}
            const showChild = props.item.children.filter(item => {
                if (!item.hidden) {
                    obj = item
                    return true
                }
            })
            if (showChild.length === 0) {
                return { ...props.item, path: '', noShowingChildren: true }
            } else {
                return obj
            }
        })

        function resolvePath(routePath) {
            if (isExternal(routePath)) {
                return routePath
            }
            if (isExternal(props.basePath)) {
                return props.basePath
            }
            return path.resolve(props.basePath, routePath)
        }
        return { hasOneShowingChild, onlyOneChild, resolvePath }
    }
}
</script>

<style scoped>
</style>
