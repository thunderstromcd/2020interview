## JavaScript

#### 数组与对象的区分

使用instanceof进行区分

> instanceof Array判断原型链上是否有Array

使用isArray()方法进行区分

###### typeof与instanceof

#### ES6

###### let，const，var

let和const没有变量提升，有暂时性死区特性，有块级作用域，const定义常量

var存在变量提升

###### 展开语法

数组的展开语法

不定数量参数

###### 解构赋值

数组结构和对象结构

###### 模板字符串嵌套

模板字符串可以进行嵌套

#### 字符串方法

###### 操作方法

> toUpperCase()，将字母全部大写
>
> toLowerCase()，将字母全部小写
>
> trim()，去除字符串空白
>
> split()，字符串转换为数组，用指定字符截取并返回数组
>
> repeat()，将原字符串重复n次并返回，返回值为一个新的字符串

###### 索引方法

> charAt(index)，查找当前索引值下的字符
>
> charCodeAt(index)，查找当前索引下的字符并返回字符的ASCII码
>
> str[index]，H5新增方法
>
> indexOf(element,index)，从第index个元素开始查找，返回索引值，index可忽略，从头开始查找，找不到返回-1
>
> lastIndexOf(element,index)，逆序查找元素，返回索引值，找不到返回-1
>
> includes(element,index)，从第index个元素开始查找，index可忽略，返回布尔值表示是否找到
>
> startsWith(‘str’)，检测字符串是否以某字符串开头，返回值为布尔值
>
> endsWith(‘str’)，检测字符串是否以某字符串结尾，返回值为布尔值

###### 字符串截取

> slice(start,end)，从start下标值取到end下标值（不包含end），start和end可为负数，表示逆序下标值
>
> substring(start,end)，从start下标值取到end下标值（不包含end），start和end为负数时，转换为0
>
> substr(start,num)，从start下标值开始，截取num个，start可为负数，表示逆序下标值
>
> splice(start,num,...elements)，从start位置开始截取num个元素，再将elements添加到字符串中，返回一个截取元素组成的新的字符串，原字符串发生改变
>

###### 字符串替换

> replace(originalStr,objectStr)，将originalStr替换为objectStr，originalStr可为正则表达式

#### console

```js
//输出一行
console.log()
//计算代码执行时间
console.time(‘for’)//计时开始

console.timeEnd(‘for’)//计时结束
//输出表格
console.table()
//控制是否输出，只有表达式为真时才会进行输出
console.assert(表达式,输出)
//清空所有输出
console.clear()
//输出错误信息
console.error('错误')
//输出警告信息
console.warn('警告')
```

#### 数组方法

###### 数组转字符串

> String()，将数组转化为字符串，以逗号分隔
>
> toString()，将数组转化为字符串，以逗号分隔
>
> join()，将数组转化为字符串，可以指定连接符，默认以逗号分隔

###### 数组操作

> push()，在数组最后添加元素，返回值为数组的长度
>
> pop()，在数组最后删除元素，返回值为删除的元素
>
> unshift()，在数组头部添加元素，返回值为数组的长度
>
> shift()，在数组头部删除元素，返回值为删除的元素
>
> fill(element,start,end)，在数组start到end之间填充element（不包括end）
>
> slice(start,end)，截取数组从start到end之间的元素，返回一个新的数组（不包括end），省略end表示截取从start开始的所有元素
>
> splice(start,num,...elements)，从start位置开始截取num个元素，再将elements添加到数组中，返回一个截取元素组成的新的数组，原数组发生改变
>
> concat(arr)，将两个数组合并
>
> copyWithin(index,start,end)，将start到end（不包含end）的元素复制到index之后的位置

###### 数组清空

> arr = []，该方法会开辟一个新的空数组并让arr的指向发生改变
>
> arr.length = 0，该方法会直接将当前数组变为空数组，更推荐

###### 数组查找

> indexOf(element,index)，查找element，返回索引值，未找到返回-1，index表示开始查找的索引值
>
> lastIndexOf(element,index)，逆序查找element，返回索引值，未找到返回-1，index可为负数
>
> includes(element)，查找element，返回布尔值（严格等于，不进行类型转换）
>
> find(fn)，遍历数组，对数组中的值进行fn函数操作，返回元素的值
>
> ```js
> let arr = [1,2,3,4,5];
> let res = arr.find(item => {
>   return item == 200;
> })
> //数组中没有200，所以res为undefined
> let lessons = [{name:'js'},{name:'css'},{name:'html'}]
> let status = lesson.find(item => {
>   return item.name == 'css';
> })
> //status的值为{name:'css'}
> //find()适合查找引用类型
> ```
>
> findIndex(fn)，用法与find相同，返回索引值

###### 数组排序

> sort(fn)，对数组内的元素进行排序，对原数组进行操作
>
> ```js
> arr.sort((a,b) => {
> return a - b;
> })
> //数组元素升序排列
> ```
>
> reverse()，对数组进行翻转操作

###### 数组遍历

> for()循环遍历，自定义下标进行遍历
>
> for...of循环遍历，遍历数组中的值，不能对简单数据类型进行操作
>
> for...in循环遍历，遍历数组中的下标
>
> forEach((item,index,arr) => {})，item表示数组中的值，index表示索引值，arr表示原数组，无返回值
>
> iterator迭代器方法
>
> ```js
> let arr = ['hdcms','houdunren'];
> let keys = arr.keys();
> //keys每一项都是一个对象{value:index,done:true/false}，value表示索引值，done表示是否迭代完成
> //使用keys.next()方法可以进入到下一次迭代
> let values = arr.values();
> //values每一项都是一个对象{value:item,done:true/false}，value表示值，done表示是否迭代完成
> //使用values.next()方法可以进入到下一次迭代
> let entries = arr.entries();
> //entries每一项都是一个对象{value:[index,item],done:true/false}
> //value表示数组包含索引和值，done表示是否迭代完成
> //使用entries.next()方法可以进入到下一次迭代
> ```
>
> every((item,index,arr) => {})，只有每次都返回true的时候才返回true，如果有一次返回false则终止执行
>
> some((item,index,arr) => {})，只要有一次返回true则返回true，如果有一次返回true则终止执行
>
> filter((item,index,arr) => {})，返回一个新的数组，函数返回值为true则将该元素加入数组
>
> map((item,index,arr) => {})，数组映射，返回数组，会改变原数组
>
> ```js
> //不改变原数组的方法
> let newArr = arr.map(item => {
> return Object.assign({click:100},value);//对象的合并操作
> });
> //map第二个参数可以用于改变this的指向
> ```
>
> reduce()方法
>
> ```js
> //pre为上一次函数的返回值，第一次时pre为数组第一个值，item为数组第二个值
> arr.reduce((pre,item,index,arr) => {
> 
> })
> 
> //pre为上一次函数的返回值，第一次时pre为first，item为数组第一个值
> arr.reduce((pre,item,index,arr) => {
> 
> },first)
> //reduce()方法可以完成去重操作
> ```

#### Symbol类型

确保定义的每个Symbol都是唯一的，任何Symbol之间不相等，可以视作特殊的字符串

```js
let hd = Symbol('后盾人');//使用Symbol定义时，即使描述相同也指向不同地址
hd.description;//description即为‘后盾人’
let cms = Symbol.for('hdcms');
let edu = Symbol.for('hdcms');//使用Symbol.for()定义时，如果参数相同，则两个变量指向同一个地址
console.log(cms == edu);//输出值为true
Symbol.keyFor(cms);//返回值为hdcms
Symbol.keyFor(hd);//返回值为undefined，keyFor只能读取Symbol.for()定义的symbol值
```

普通遍历方法无法遍历Symbol属性

Object.getOwnPropertySymbols()，遍历Symbol属性

Reflect.ownKeys()，遍历所有属性，包括Symbol属性

Symbol可以用于定义对象私有属性

#### Set类型

set中的值不能重复

set.size返回Set的长度

add(value)，添加某个值，返回set本身

delete(value)，删除某个值，返回值为布尔值，表示是否删除成功

has(value)，检测set中是否含有某值，返回值为布尔值

clear()，清除set数据结构的所有值，没有返回值

forEach()，遍历set中的所有值并进行相关操作，没有返回值

#### 函数

###### 函数定义

> new关键字定义
>
> 直接function定义
>
> 表达式赋值

###### arguments，剩余参数

###### this指向

> 全局作用域下this为window
>
> 普通函数的this指向window
>
> 对象中的方法中this指向对象本身
>
> 箭头函数的this指向上下文

###### this指向改变

> call(thisChange,...arguments)，将this的指向改变为thisChange并立即执行函数，argument为参数
>
> apply(thisChange,[...arguments])，apply的参数放在数组中传递
>
> bind(thisChange,...arguments)，将this的指向改变为thisChange并返回一个新的函数，不会立即执行

#### 对象

###### 对象创建

> 字面量创建
>
> 工厂函数
>
> 构造函数

###### 属性操作

> 对象.属性 = 属性值，可以直接添加属性
>
> delete 对象.属性，可以删除属性
>
> hasOwnProperty(key)，判断对象自身是否含有该属性
>
> 属性 in 对象，检测自身和原型链上是否有该属性
>
> Object.keys(obj)，获取obj的所有属性名，返回格式为数组
>
> Object.values(obj)，获取obj的所有值，返回格式为数组
>
> Object.entries(obj)，获取obj的属性和值，返回格式为数组

###### 原型操作

> Object.setPrototypeOf(a,b)，将b设置为a的原型

###### 对象合并

> Object.assign(obj1,obj2)，将obj1和obj2合并返回一个新的对象

###### 对象遍历

> for...in循环遍历
>
> for...of循环遍历
>
> ```js
> for(const key in obj){
>   coonsole.log(obj[key]);
> }
> for(const keys of Object.keys(obj)){}
> for(const keys of Object.values(obj)){}
> for(const keys of Object.entries(obj)){}
> //for...of方法只能处理可迭代对象，不能直接遍历对象
> ```

###### 对象拷贝

> 浅拷贝
>
> ​	for...in循环
>
> ​	解构赋值
>
> ​	Object.assign()
>
> 深拷贝
>
> ```js
> function deepCopy(obj){
>   let res = obj instanceof Array ? [] : {};
>   for(const [key,value] of Object.entries(obj)){
>     res[key] = value instanceof Object ? deepCopy(value):value;
>   }
>   return res;
> }
> ```

###### 面向对象的封装与抽象

> 使用闭包和块级作用域进行封装

###### 对象的属性特性

> Object.getOwnPropertyDescriptor(obj,key)，获取obj对象的key属性的描述
>
> value属性的值
>
> writable属性是否可写，true/false
>
> enumerable属性是否可遍历，true/false
>
> configurable属性是否可被删除和重新配置特征，true/false
>
> Object.defineProperty(obj,key,{})，对属性特征进行修改，{}内的内容与属性特征一致
>
> Object.defineProperties(obj,{key1:{},key2:{}})，对属性特征进行批量修改
>
> Object.preventExtensions(obj)，禁止向对象中添加属性和方法
>
> Object.isExtensiable(obj)，判断是否可以向对象中添加属性和方法
>
> Object.seal(obj)，封闭对象，不可添加删除和重新配置属性特征
>
> Object.isSealed(obj)，判断对象是否处于封闭状态
>
> Object.freeze(obj)，冻结对象，不可添加删除修改和重新配置属性特征
>
> Object.frozen(obj)，判断对象是否处于冻结状态

###### 对象访问器

```js
const user = {
  data:{name:'hd',age:10},
  //使用访问器
  set age(value){
    if(typeof value != 'number' || value < 10 || value > 100){
      throw new Error('年龄格式错误');
    }
    this.data.age = value;
  },
  get age(value){
    return this.data.age + '岁';
  }
};
user.age = 999;//在设置属性值时会通过访问器查看属性值是否合理
//get访问器可以生成计算属性
//构造函数和class语法糖中使用访问器
```

###### 代理（Proxy）

```js
//对象代理
const hd = {name:'后盾人'};
//使用Proxy代理hd
const proxy = new Proxy(hd,{
  get(obj,property){//obj表示目标对象，property表示要访问的属性
    return obj[property];
  },
  set(obj,property,value){
    obj[property] = value;
    return true;
  }
});
//函数代理
function fn(num){
  return num = 1 ? 1 : num * fn(num - 1);
}
const proxy = new Proxy(fn,{
  apply(func,args){
    console.time('run');
    func.apply(this,args);
    console.timeEnd('run');
  }
});
//数组代理
const arr = [假装有内容];
let proxy = new Proxy(arr,{
  get(array,key){
    const title = array[key].title;
    const len = 5;
    return title.length>len?title..substr(0,len)+'.'.repeat(3):title;
  }
})
```

###### 数据的双向绑定

```html
<input type="text" v-model="title">
<input type="text" v-model="title">
<h4 v-bind="title">
  这里也会发生更新
</h4>
<script>
	function View(){
    let proxy = new Proxy({},{
      get(obj,property){},
      set(obj,property,value){
        document.querySelectorAll(`[v-model="${property}"]`)
        .forEach(item => {
          item.value = value;
        });
        document.querySelectorAll(`[v-bind="${property}"]`)
        .forEach(item => {
          item.innerHTML = value;
        });
      }
    });
    this.init = function(){
      const els = document.querySelectorAll('[v-model]');
      els.forEach(item => {
      	item.addEventListener('keyup',function(){
      		proxy[this.getAttribute('v-model')] = this.value;
        })
      })
    }
  }
  new View().init();
</script>
```

###### JOSN数据

> JSON.stringify(obj,[],num)，将数据转换为JSON格式，[]中填放想要保留的属性，num表示每个属性的缩进值
>
> toJSON函数可以规定转换成JSON时的相关配置
>
> JSON.parse(json,(key,value) => {})，将JSON解析为js可用的数据格式，在转换时可以使用函数进行相关操作，函数必须有返回值

#### 异步编程

图片的异步加载

###### 任务排序

因为要确保文件之间的依赖关系，所以必须使用嵌套和回调

###### Promise

pending表示准备阶段

resolved表示成功状态

rejected表示拒绝状态

```js
new Promise((resolve,reject) => {
  resolve('操作成功');
  reject('操作失败');
}).then(
	value => {
    console.log('成功进行业务处理');
  },
  reason => {
    console.log('拒绝的业务处理');
  }
)
```

> then()定义返回的promise对象的下一步
>
> catch()对前面promise对象错误的统一捕获处理
>
> finally()无论成功失败都会执行
>
> resolve()默认执行成功
>
> reject()默认执行失败
>
> all()批量处理Promise，只有在之前的Promise都成功时执行
>
> allSettled()批量处理Promise，存在不成功也会执行
>
> race()控制请求超时

###### async与await

```js
async function hd(){
  let name = await new Promise(resolve => {
    setTimeout(() => {
      resolve('后盾人');
    },2000);
  });
  let site = await new Promise(resolve => {
    setTimeout(() => {
      resolve(name + 'houdunren.com');
    },2000);
  });
  console.log(site);
};
hd();
```

