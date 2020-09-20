const path = require('path');

module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'assets', // prefix 'dist/'
    filenameHashing: true,
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue'], //확장자를 제거하고 불러낼수 있다.
            alias: {
                '@': path.join(__dirname, 'src'),
                '@assets': path.join(__dirname, 'src/assets'),
                '@page': path.join(__dirname, 'src/page'),
            }
        },
        devtool: 'source-map'
    },
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            title: 'Vue Starter',
            filename: 'index.html'
        }
    },
    devServer: {
        port: 9090,
        proxy: {
            '/rest': {
                target: 'http://localhost:8080'
            }
        }
    },
    // 전역 사용해야 하는 scss 토큰 있으면 아래 구문 주석 해제
    css: {
        loaderOptions: {
            sass: {
                // https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders 여기보면 data 아니고
                // additionalData 로 해야 한다고 되있음(어디는 vue cli 3 까진 data고 4부턴 prependData 라고 되있던데 아님-_-;)
                additionalData: `@import "@/scss/token/globalToken.scss";`//
            }
        }
    }
}

