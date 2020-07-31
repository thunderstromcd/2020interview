// 4.设计一个方法提取对象中所有value大于2的键值对并返回最新的对象
function getThem(obj){
    // 将对象拆为二维数组
    var ary=Object.entries(obj);
    // 循环外层数组 注意这里的箭头函数 极其巧妙
    var a = ary.filter(([k,v])=>{return v>2})
    // Object.entries()的逆用 二维数组转为对象
    return Object.fromEntries(a);
}

// ------------------简化写法
function foo(obj){
    return Object.fromEntries(
        Object.entries(obj).filter(([k,v])=>{return v>2})
    )
}
// ------------------简化写法
var obj ={ a: 1, b: 3, c: 4,d:4}
console.log(getThem(obj));

console.log(foo(obj));