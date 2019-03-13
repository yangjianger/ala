module.exports = {
    configureWebpack: {
        externals: {
            "BMap": "BMap"
        },
    },
    devServer: {
        proxy: 'http://ala.pandanote.cn'
    }
}