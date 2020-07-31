// 斐波那契数列(使用generator) 0,1,1,2,3,5...
var fib = function* (num) {
    var a = 0, b = 1, n = 0;
    // 如果计数器小于num就一直执行
    while (n < num) {
        // 产出a
        yield a;
        // 解构赋值
        [a, b] = [b, a + b];
        n++;
    }
    return;
}


for (const val of fib(5)) {
    console.log(val);
}