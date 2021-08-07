# The-note-of-ES6-11

## ES6语法(es6-11) ##

一、ES6简介

+ ECMAScript：ECMA-262标准化的脚本程序设计语言   ECMA:欧洲计算机制造商协会

  ![image-20210722132809392](ES6-11.assets/image-20210722132809392.png)

  ---

+ 关键字

  + let  ：==好用，声明变量==
    + 变量不能重复声明
    + 块级作用域
  + ==const：声明对象==
    + 声明必须赋初值，值不允许修改
    + 标识符一般是大写

+ 解构赋值：ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称 为解构赋值。

  + ```javascript
    //解构赋值:频繁使用对象方法和数组元素可以使用
            const arr = ["刘德华","邓小平","张学友"]
            let [a,b,c] = arr
            console.log(a,b,c)
    
            //复杂结构
            let wangfei = {
                name:"王菲",
                age:18,
                songs:["红豆","传奇"],
                history:{
                    nameF:"李亚鹏",
                    ageF:29
                }
            }
            let {songs:[one],history:{nameF,ageF}} = wangfei
            let {name} = wangfei
            console.log(one,nameF,age,name)
    ```

+ ==模板字符串==

  + 用`(反引号) 标识：字符串可以出现换行符和用${xxx}输出变量（拼接字符串）

  + ```javascript
     //模板字符串   拼接字符串
            let star = "王宁"
            let result = `${star}有牙签`
            console.log(result)
    ```

+ ==简化对象写法==

  + 允许在大括号里面直接写入变量和函数，作为对象的属性和方法

  + ```javascript
    let wangfei = {
        name,
        age,
        change(){
            console.log("牙签")
        }
    }
    ```

+ 箭头函数

  + ===>定义函数，形参只有一个可以省略小括号，函数体只有一条语句可以省略花括号==

    ==箭头函数this指向声明时所在作用域下的this的值，用来声明回调函数很适合==

    不能作为构造函数实例化，不能使用arguments

  + ```javascript
    <script>
            let fn = (a,b)=>{
                //这里的this是 指向 window
                console.log(this)
                return a+b
            }
    
            var d = fn(2,3);
            console.log(d)
        </script>
    ```

+ rest参数

  + rest参数,用于获取函数的实参，用来代替argumemnts(适合不定个数参数函数的场景)
  + ![image-20210722142959787](ES6-11.assets/image-20210722142959787.png)

+ spread扩展运算符

  + ...     三个点      好比rest参数的逆运算，将数组或对象转为逗号分隔的参数序列

  + ```javas
    let one = [2,6,8]
    let two = [3,5,7]
    let three = [...one,...two]    //输出three = [2,6,8,3,5,7]
    ```

+ ==Symbol的基本使用（唯一性问题）==

  + 表示独一无二的值，类似于字符串的数据类型

  + 不能和其他数据进行运算

  + ```javas
    //创建Symbol    括号里面是描述值
            let s = Symbol("周扬青");
            let s1 = Symbol("罗志祥")
            //用Symbol定义
            let s2 = Symbol.for("吴亦凡")
            
    六种数据类型：USONB
    	undefined 
    	string 
    	object
    	null number
    	boolean
    ```

  + 内置值

    ![image-20210722162236044](ES6-11.assets/image-20210722162236044.png)

    

+ 迭代器(遍历器 iterator ) :遍历数据

  + ==遍历命令：for...of...==

    原生具备iterator接口数据：Array 、Arguments、Set、Map、String、TypedArray、NodeList

  + ```javascript
    //声明一个数组
            const xiyou = ['唐僧','孙悟空','猪八戒','沙僧'];
    
            //使用 for...of 遍历数组
             for(let v of xiyou){
                 console.log(v);
             }
    ```

+ 生成器

  + ES6提供的一种异步编程的解决方案:解决层层回调的问题

    ```javascript
    function * gen(){
        yield "一只没有耳朵"
        yield "一只没有尾巴"
        return "真奇怪！"
    }
    let iterator = gen();
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    
    代码说明：
    1) * 的位置没有限制
    2) 生成器函数返回的结果是迭代器对象，调用迭代器对象的 next 方法可以得到
    yield 语句后的值
    3) yield 相当于函数的暂停标记，也可以认为是函数的分隔符，每调用一次 next
    方法，执行一段代码
    4) next 方法可以传递实参，作为 yield 语句的返回值
    ```

  + 例子

    ```javas
        <script>
            //模拟获取  用户数据  订单数据  商品数据 
            //整个流程是1秒1秒完成的、一步一步来属于异步工作
            function getUsers(){
                setTimeout(()=>{
                    let data = '用户数据';
                    //调用 next 方法, 并且将数据传入 第二次调用
                    iterator.next(data);
                }, 1000);
            }
            function getOrders(){
                setTimeout(()=>{
                    let data = '订单数据';
                    iterator.next(data);
                }, 1000)
            }
            function getGoods(){
                setTimeout(()=>{
                    let data = '商品数据';
                    iterator.next(data);
                }, 1000)
            }
    
            //生成器
            function * gen(){
                let users = yield getUsers();
                console.log(users)
                let orders = yield getOrders();
                console.log(orders)
                let goods = yield getGoods();
                console.log(goods)
            }
            
            //调用生成器函数
            let iterator = gen();
            //第一次调用
            iterator.next();
    
        </script>
    ```

    

+ Promise
  + 异步编程的新解决方案。语法上 Promise 是一个构造函数， 用来封装异步操作并可以获取其成功或失败的结果。
  
  + 1) Promise 构造函数: Promise (excutor) {}
  
  + 2) Promise.prototype.then 方法
  
  + 3) Promise.prototype.catch 方法
  
  + Promise基础语法
  
    ```javascript
    <script>
            //resolve   reject 是两个函数，一个是成功函数、一个是失败函数
            const p = new Promise(function(resolve,reject){
               /*  console.log(resolve,reject);
                let data = "数据库中的用户数据";
                //console.log()
                resolve(data); */
                let err = "数据读取失败";
                reject(err)
            })
    
            //调用promise对象的then方法
            p.then(function(value){
                console.log(value);
            },function(reason){
                console.log(reason);
            })
        </script>
    ```
  
  + 对比两种读取文件的方式
  
    ```javascript
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
        //回调函数中第一个值是resolve，第二个值是reject
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
    
    //then方法链式调用
            p.then(value => {
    
            }).then(value => {
    
            });
    //catch方法调用、输出错误、console.error直接输出红×;console.warn输出警告
            p.catch(function(reason){
                console.error(reason);
            });
    ```
  
  + Promise封装ajax
  
    ```javas
    <script>
            const p = new Promise((resolve,reject)=>{
                //1.创建对象
                const xhr = new XMLHttpRequest();
                //2.初始化
                xhr.open("GET","https://api.apiopen.top/getJoke");
                //3.发送
                xhr.send();
                //4.绑定事件，处理响应结果
                xhr.onreadystatechange = function(){
                    //判断
                    if(xhr.readyState === 4){
                        if(xhr.status >= 200 && xhr.status < 300){
                            //状态码表示成功
                            resolve(xhr.response);
                        }else{
                            //如果失败
                            reject(xhr.status)
                        }
                    }
                }
            })
            p.then(function(value){
                console.log(value)
            },function(err){
                console.log("失败状态码："+err)
            })
        </script>
    ```
  
    

+ Set集合、ES6的新数据结构(类似数组)

  ```javas
   //新的数据结构Set集合，类数据结构
          let s1 = new Set([1, 2, 5, 6, 6])
          let s2 = new Set([12, 5, 98, 45, 2])
  
          //元素个数
          console.log(s2.size);
          //添加新的元素
          s2.add('喜事儿');
          //删除元素
          s2.delete('坏事儿');
          //检测
          console.log(s2.has('糟心事'));
          //清空
          s2.clear();
          //遍历数据
          for (let v of s2) {
              console.log(v);
          }
  
          //1. 数组去重 Set集合本身具有去重效果
  
          //2. 交集
          let s4 = [...s1].filter(item =>
              /* if (s2.has(item)) {
                  return true;
              } else {
                  return false;
              } */
              //简写
              s2.has(item)
          )
          
          //3. 并集
          let s6 = new Set([...s1, ...s2])
          
          //4. 差集  :交集后的取反，拿自己有别人没有的东西
          let s7 = [...s1].filter(item => {
              if (s2.has(item)) {
                  return false;
              } else {
                  return true;
              }
          })
  ```

  

+ Map(类似对象，也是键值对的集合)

  ```javas
  //声明 Map
          let m = new Map();
  
          //添加元素
          m.set('name', '尚硅谷');
          m.set('change', function () {
              console.log("我们可以改变你!!");
          });
          
          //键值对中键是一个对象
          let key = {
              school: 'ATGUIGU'
          };
          m.set(key, ['北京', '上海', '深圳']);
          
          //size
          // console.log(m.size);
  
          //删除
          // m.delete('name');
  
          //获取
          // console.log(m.get('change'));
          // console.log(m.get(key));
  
          //清空
          // m.clear();
  
          //遍历
          for (let v of m) {
              console.log(v);
          }
  ```

  

+ 数值扩展

  ```javascript
  1.进制
  let b = 0b1010;//二进制
  let o = 0o777;//八进制
  let d = 100;//十进制
  let x = 0xff;//十六进制
  
  2.Number.EPSILON 是 JavaScript 表示的最小精度
  简单判断小数的计算
  eg：
  	  function equal(a, b){
               if(Math.abs(a-b) < Number.EPSILON){
                   return true;
               }else{
                   return false;
              }
        }
        console.log(0.1 + 0.2 === 0.3); //false
        console.log(equal(0.1 + 0.2, 0.3))  //true
  
  3.Number.isFinite  检测一个数值是否为有限数
  Number.isNaN 检测一个数值是否为 NaN 
  
  Number.parseInt Number.parseFloat    字符串转整数、或者取小数
           console.log(Number.parseInt('52113.14love'));
           console.log(Number.parseFloat('3.1415926神奇'));
  
  Number.isInteger 判断一个数是否为整数
  Math.trunc 将数字的小数部分抹掉  
  Math.sign 判断一个数到底为正数1 负数-1  还是零0  、
  
  Object.is 比较两个值是否严格相等，与『===』行为基本一致（+0 与 NaN）
  Object.assign 对象的合并，将源对象的所有可枚举属性，复制到目标对象
  ```

  

+ ES6模块化语法

  export 命令用于规定模块的对外接口 

  ```javas
  //第一种：分别暴露
  export let school = '尚硅谷';
  export function teach() {
      console.log("我们可以教给你开发技能");
  }
  
  //第二种：统一暴露
  let school = '尚硅谷';
  function findJob(){
      console.log("我们可以帮助你找工作!!");
  }
  export {school, findJob};
  
  //第三种：默认暴露
  export default {
      school: 'ATGUIGU',
      change: function(){
          console.log("我们可以改变你!!");
      }
  }
  ```

  

  import 命令用于输入其他模块提供的功能

  ```javas
  1. 通用的导入方式
          //引入 m1.js 模块内容
           import * as m1 from "./src/js/m1.js";
          //引入 m2.js 模块内容
           import * as m2 from "./src/js/m2.js";
          //引入 m3.js 
           import * as m3 from "./src/js/m3.js";
  
  2. 解构赋值形式
           import {school, teach} from "./src/js/m1.js";
           import {school as guigu, findJob} from "./src/js/m2.js";
           import {default as m3} from "./src/js/m3.js";
  
  3. 简便形式  针对默认暴露
         import m3 from "./src/js/m3.js";
         
  ```



+ async 和 await (两种语法结合可以让异步代码像同步代码一样)

  + ==async 函数的返回值为 promise 对象==
    +  promise 对象的结果由 async 函数执行的返回值决定 
  + await 表达式
    + 1. ==await 必须写在 async 函数中== 
      2. ==await 右侧的表达式一般为 promise 对象== 
      3. ==await 返回的是 promise 成功的值==
      4. await 的 promise 失败了, 就会抛出异常, 需要通过 try...catch 捕获处理

  + ```javascript
        <script>
             // 发送 AJAX 请求, 返回的结果是 Promise 对象
             function sendAJAX(url) {
                return new Promise((resolve, reject) => {
                    //1. 创建对象
                    const xhr = new XMLHttpRequest();
                    //2. 初始化
                    xhr.open('GET', url);
                    //3. 发送
                    xhr.send();
                    //4. 事件绑定
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState === 4) {
                            if (xhr.status >= 200 && xhr.status < 300) {
                                //成功啦
                                resolve(xhr.response);
                            }else{
                                //如果失败
                                reject(xhr.status);
                            }
                        }
                    }
                })
            }
        
            //promise then 方法测试
            // sendAJAX("https://api.apiopen.top/getJoke").then(value=>{
            //     console.log(value);
            // }, reason=>{})
      
            // async 与 await 测试  axios
            async function main(){
                //发送 AJAX 请求
                let result = await sendAJAX("https://api.apiopen.top/getJoke");
                //再次测试
                let tianqi = await sendAJAX('https://www.tianqiapi.com/api/?version=v1&city=%E5%8C%97%E4%BA%AC&appid=23941491&appsecret=TXoD5e8P')
    
                console.log(tianqi);
            }
    
            main();
            
        </script>
    
    1. Object.values()方法返回一个给定对象的所有可枚举属性值的数组
    2. Object.entries()方法返回一个给定对象自身可遍历属性 [key,value] 的数组
    ```

  + 
