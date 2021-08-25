import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';


const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');

/**
 * 按需导入Element Plus组件和插件
 */
import 'element-plus/lib/theme-chalk/index.css';
import { components, plugins } from '@/utils/element-plus';
components.forEach(component => {
    app.component(component.name, component)
})
plugins.forEach(plugin => {
    app.use(plugin)
})
/**
 * elementUI-plus全局样式的修改
 */
import "./style/element-plus.scss";
/**
 * 导入svg图
 */
import SvgIcon from '@/assets/svg/SvgIcon.vue';
app.component("svg-icon", SvgIcon);
const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().map(requireContext);
const req = require.context("./assets/svg/resources", false, /\.svg$/);
requireAll(req);

/**
 * 导入全局的样式
 */
import "@/style/index.scss";

if (process.env.NODE_ENV === 'production') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { mockXHR } = require('../mock')
    mockXHR()
}
