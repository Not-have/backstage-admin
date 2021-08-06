const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    lintOnSave: false,
    productionSourceMap: false,
    devServer: {
        port: 8899,
        open: false,
        overlay: {
            warnings: false,
            errors: true
        },
        before: require('./mock/mock-server')
    },
    chainWebpack(config) {
        // 可以提高首屏速度，建议开启预加载
        config.plugin('preload').tap(() => [
            {
                rel: 'preload',
                fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
                include: 'initial'
            }
        ])
        config.module
            .rule('svg')
            .exclude.add(resolve('src/assets/svg'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/assets/svg'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
    }
}
