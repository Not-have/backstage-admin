<template>
    <div v-if="!item.hidden" class="internalBox">
        <template
            v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren) && !item.alwaysShow"
        >
            <app-link
                v-if="onlyOneChild.meta"
                :to="resolvePath(onlyOneChild.path)"
            >
                <el-menu-item
                    :index="resolvePath(onlyOneChild.path)"
                    :class="{'submenu-title-noDropdown':!isNest}"
                >
                    <i
                        :class="item.meta.icon"
                        class="sub-el-icon"
                    ></i>
                    <span class="text">{{item.meta.title}}</span>
                </el-menu-item>
            </app-link>
        </template>

        <el-submenu
            v-else
            :index="resolvePath(item.path)"
            popper-append-to-body
        >
            <template #title>
                <i
                    :class="item.meta.icon"
                    class="sub-el-icon"
                ></i>
                <span class="text" v-show="titleShow">{{item.meta.title}}</span>
            </template>
            <sidebar-item
                v-for="child in item.children"
                :key="child.path"
                :is-nest="true"
                :item="child"
                :base-path="resolvePath(child.path)"
                class="nest-menu"
            />
        </el-submenu>
    </div>
</template>

<script>
import path from 'path'
import { isExternal } from '@/utils/validate'
import AppLink from './Link'
import { computed } from '@vue/runtime-core'
export default {
    name: 'SidebarItem',
    components: { AppLink },
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
    data() {
        this.onlyOneChild = null
    },
    methods: {
        hasOneShowingChild(children = [], parent) {
            const showingChildren = children.filter(item => {
                if (item.hidden) {
                    return false
                } else {
                    this.onlyOneChild = item
                    return true
                }
            })

            if (showingChildren.length === 1) {
                return true
            }

            if (showingChildren.length === 0) {
                this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
                return true
            }
            return false
        },
        resolvePath(routePath) {
            if (isExternal(routePath)) {
                return routePath
            }
            if (isExternal(this.basePath)) {
                return this.basePath
            }
            return path.resolve(this.basePath, routePath)
        }
    },
    computed:{
        // 在关闭的时候，不显示文字
        titleShow:function(){
            return !this.$store.state.app.sidebar.opened
        }
    }
}
</script>
<style lang="scss" scoped>
.sub-el-icon{
    color: currentColor;
    width: 1em !important;
    height: 1em !important;
}
</style>