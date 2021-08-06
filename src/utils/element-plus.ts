/*
 * @Author: 李勇
 * @Date: 2021-07-23 18:10:06
 * @LastEditors: 李勇
 * @LastEditTime: 2021-08-05 18:08:20
 * @Description(说明): https://www.cnblogs.com/qt-fei/p/14258016.html
 *                     按需导入
 * @FilePath: /案例f:/vue3-admin/src/utils/element-plus.ts
 */
import { ElButton, ElDropdown, ElDropdownItem, ElScrollbar, ElMenu, ElSubmenu, ElMenuItem, ElMessageBox } from 'element-plus'
export const components: any[] = [
    ElButton,
    ElDropdown,
    ElDropdownItem,
    ElScrollbar,
    ElMenu,
    ElSubmenu,
    ElMenuItem
]
export const plugins: any[] = [ElMessageBox]