/**
 * Created by wangqiang on 2017/9/1.
 */
var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './index.js'),
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'app.js',
    },
    module:{
        loaders:[
            {
                test: /\.(js|jsx)$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'babel-loader'//loader的名称（必须）

            }
        ]
    }
};
