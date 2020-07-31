// 使用ES6proxy 实现 arr[-1] = arr[arr.length - 1]

const createAry = function(args){
    
    let handler = {
        get: function(target,propKey,reciever){
            // 使用Reflect查找属性名 
            // 此时数组的属性名为字符串,转换后判断他是否为负数
            return Reflect.get(target,propKey<0 ? (+propKey + target.length) : propKey,reciever)
        },
        set :function (target,propKey,value,reciever){
            return Reflect.set(target,propKey<0 ? (+propKey + target.length) : propKey,value,reciever)
        }
    }
    return new Proxy(args,handler)
}
// 创建一数组
var ary= createAry([1,2,3,4])
// 測試
console.log(ary[-1]);

ary[-1]='a'
console.log(ary[-1]);