import { createStore } from 'vuex'
import getters from './getters'
const modulesFiles = require.context('./modeules', true, /\.js$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
    const value = modulesFiles(modulePath);
    // @ts-ignore
    modules[moduleName] = value.default
    return modules
}, {})

export default createStore({
    modules,
    getters
})
