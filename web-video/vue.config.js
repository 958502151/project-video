const path = require('path')

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    chainWebpack: config => {
        config.resolve.alias.set('@', resolve('src'))

        // svg配置
        const svgRule = config.module.rule('svg')
        // 清除已有的所有loader
        svgRule.uses.clear()
        svgRule
            .test(/\.svg$/)
            .include.add(resolve('./src/icons/svg'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
        const fileRule = config.module.rule('file')
        fileRule.uses.clear()
        fileRule
            .test(/\.svg$/)
            .exclude.add(resolve('./src/icons/svg'))
            .end()
            .use('file-loader')
            .loader('file-loader')
    },
    devServer: {
        proxy: 'http://localhost:8080'
        // proxy: 'http://dc.zookingsoft.com'
    }
}