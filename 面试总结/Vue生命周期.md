## Vue生命周期

**beforeCreate**（实例被创建之前的函数

初始化实例的事件和生命周期

**Created**（实例被创建之后的函数

初始化数据并对数据进行计算和转换

判断是否有挂载对象

判断是否有模板选项

将模板编译为html文档并生成虚拟DOM

**beforeMount**（即将挂载编译后的html到对应位置时触发的函数

形成真实DOM

发布HTTP请求页面初始化需要的数据

**Mounted**（将编译好的html挂载到页面后执行的函数

实时监听data数据的变化，如果有数据更新，先重新渲染虚拟DOM，再对真实DOM的对应位置做出更改

**beforeUpdate**（进行数据更新前执行的钩子函数

**updated**（进行数据更新后执行的钩子函数

**beforeDestroy**（vue实例被销毁之前执行的钩子函数

**Destroyed**（vue实例被销毁之后执行的钩子函数