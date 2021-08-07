//引入fs模块
const fs = require("fs")

//1.调用方法读取文件
fs.readFile("./File.md", (err, data) => {
    //如果失败, 则抛出错误
    if (err) { throw err; }
    //如果没有出错, 则输出内容
    console.log(data.toString());

})

//2.使用Promise封装
const p = new Promise(function (resolve, reject) {
    fs.readFile("./File.md", (err, data) => {
        //如果失败, 则抛出错误
        if (err) reject(err)
        //如果没有出错, 则输出内容
        resolve(data)
    })
})
//调用Promise
p.then(function(value){
    console.log(value.toString())
},function(reason){
    console.log("读取失败！")
})

