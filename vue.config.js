const path = require("path");

module.exports = {
    // 在 vue.config.js 中修改样式变量
    css: {
        // extract: false,
        // sourceMap: true,
        loaderOptions: {
            less: {
                // modifyVars: {
                //     hack: `true; @import "${path.join(__dirname,
                //         "./src/common/restLess.less"    
                //     )}";`

                // },
                modifyVars: {
                    // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
                    hack: `true; @import "${path.join(
                      __dirname,
                      "./src/assets/common/restLess.less"//这个import 的路径必须是绝对路径
                    )}";`
                  }
          
            }
        }
    }
 
}