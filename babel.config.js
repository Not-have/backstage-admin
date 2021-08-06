/*
 * @Author: 李勇
 * @Date: 2021-08-05 14:10:23
 * @LastEditors: 李勇
 * @LastEditTime: 2021-08-05 14:10:59
 * @Description(说明): 引入css文件
 * @FilePath: /案例f:/vue3-admin/babel.config.js
 */

module.exports = {
    plugins: [
        [
            "import",
            {
                libraryName: 'element-plus',
                customStyleName: (name) => {
                    return `element-plus/lib/theme-chalk/${name}.css`;
                }
            }
        ]
    ]
}