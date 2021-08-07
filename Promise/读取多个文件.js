
//引入fs模块
var fs = require("fs")

//创建初始对象Promise
const p = new Promise(function (resolve, reject) {
    fs.readFile("./File.md", (err, data) => {
        resolve(data)
    })
})

//调用方法和回调
p.then(value => {
    return new Promise(function (resolve, reject) {
        fs.readFile("./File1.md", (err, data) => {
            //连接两块数据为一组
            resolve([value, data])
        })
    })
}).then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile("./File2.md", (err, data) => {
            //将第三块数据压入数组
            value.push(data)
            resolve(value)
            console.log(value.join('\r\n'))
        })
    })
})
