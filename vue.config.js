const path = require("path");
function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    // lintOnSave: false,
    // runtimeCompiler: true,
    // assetsDir: "public",
    // productionSourceMap: true,
    // 开发服务器http代理
    devServer: {
        host: "localhost",
        port: 8080,
        https: false,
        open:true,
        proxy:{
            "/api":{
                target:"https://nicemusic-api.lxhcool.cn/",
                changeOrigin:true,
                pathRewrite:{
                    "^/api":""
                }
            }
        }
    },
};
