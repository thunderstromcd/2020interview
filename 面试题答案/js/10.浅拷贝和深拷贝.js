// -----------浅拷贝--------------
let obj = {
    a: { b: 1 }
}
// let target ={}
// Object.assign(target,obj)

// obj.a.b =2
// console.log(target);


// -------------深拷贝---------------
function deepClone(target) {
    if (typeof target !== 'Object') {
        throw new Error()
    }
    let isArray = Array.isArray(target)
    let cloneObj = isArray ? [] : {}
    
}
