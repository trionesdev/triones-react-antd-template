const CracoAntDesignPlugin = require("craco-antd");

const path = require("path");
const fs = require('fs')
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
    plugins: [
        {
            plugin: CracoAntDesignPlugin,
            options: {
                modifyLessRule: function (lessRule, _context) {
                    lessRule.test = /\.(module)\.(less)$/;
                    lessRule.exclude = /node_modules/;
                    return lessRule;
                },
                cssLoaderOptions: {
                    modules: {
                        localIdentName: '[name]__[local]--[hash:base64:5]'
                    }
                },
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            'layout-header-background': '#333'
                        },
                        javascriptEnabled: true,
                    },
                },
            }
        },
    ],
    webpack: {
        alias: {
            "@": resolve("src")
        },

    },
    devServer: {
        historyApiFallback: true,
        // noInfo: false,
        // port:3100,
        proxy: {
            "/api/*": {
                //target: "http://localhost:8080/",
                target: "http://dubhe-gateway.moensun.cn/",
                changeOrigin: true,
                secure: false,
            },
            "/boss-api/*": {
                target: "http://localhost:8080/",
                // target: "http://dubhe-gateway.moensun.cn/",
                changeOrigin: true,
                secure: false,
                //pathRewrite: {'^/api' : ''}
            }
        }
    },
    babel: {
        plugins: []
    },
}
