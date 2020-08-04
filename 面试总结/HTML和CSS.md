#### href和src

href是指向外部资源

src是下载资源并且嵌入文档

#### XSS攻击和CSRF攻击

##### XSS攻击（跨站脚本攻击）

恶意web用户将代码植入到提供给其他用户使用的页面中

反射型（非持续型）：多数发生在搜索框，登录框之类的地方

存储型（持续性）：多数发生在留言板，评论区之类的地方

###### 危害

盗取cookie

浏览器劫持BEEF

产生流量攻击DDOS

##### CSRF攻击（跨站请求伪造）

##### XSS和CSRF的区别

XSS利用站点内的信任用户

CSRF通过伪装来自受信任用户的请求来利用信任该用户的网站

##### 如何预防XSS，CSRF攻击

###### XSS

将特殊字符进行转码

###### CSRF

生成特殊字符串进行用户标识

#### 实现高是宽的一半

padding:25% 0;

#### CSS 画个扇形或环

```html
<style>
  *{
    box-sizing: border-box;
  }
  .box {
    width: 100px;
    height: 200px;
    overflow: hidden;
    margin: 200px auto;
  }
  .rotate {
    width: 100px;
    height: 200px;
    overflow: hidden;
    transform-origin: right center;
    transform: rotate(10deg);
  }
  .circle {
    width: 200%;
    height: 100%;
    border-radius: 50%;
    background-color: black;
    border: 10px solid black;
  }
</style>
<div class="box">
  <div class="rotate">
    <div class="circle"></div>
  </div>
</div>
```

#### localStorage, session Storage和cookie的区别

localStorage、sessionStorage、cookie都保存在客户端，且同源

localStorage生命周期是永久，存放数据大小为一般为5MB，而且它仅在客户端中保存，不参与和服务器的通信

sessionStorage仅在当前会话下有效，存放数据大小为一般为5MB，而且它仅在客户端中保存，不参与和服务器的通信

不同浏览器无法共享localStorage或sessionStorage中的信息，相同浏览器的不同页面间可以共享相同的 localStorage（页面属于相同域名和端口），但是不同页面或标签页间无法共享sessionStorage的信息

cookie在设置的cookie过期时间之前一直有效，存放数据大小为4K左右 ，有个数限制，与服务器端通信，每次都会携带在HTTP头中

> cookie的优点：具有极高的扩展性和可用性
>
> ​	1.通过良好的编程，控制保存在cookie中的session对象的大小
>
> ​	2.通过加密和安全传输技术，减少cookie被破解的可能性
>
> ​	3.只有在cookie中存放不敏感的数据，即使被盗取也不会有很大的损失
>
> ​	4.控制cookie的生命期，使之不会永远有效
>
> cookie的缺点：
>
> ​	1.cookie的长度和数量的限制，每个domain最多只能有20条cookie，每个cookie长度不能超过4KB
>
> ​	2.安全性问题，如果cookie被人拦掉了，那个人就可以获取到所有session信息，加密的话也不起什么作用
>
> ​	3.有些状态不可能保存在客户端，例如，为了防止重复提交表单，我们需要在服务端保存一个计数器，若把计数器保存在客户端，则起不到什么作用

#### 浏览器的缓存机制（强缓存200和协商缓存304）

###### 浏览器缓存获取

（1）先根据这个资源的http header判断它是否命中强缓存，如果命中，则直接从本地缓存中获取资源，不会则向服务器请求资源

（2）当强缓存没有命中时，客户端会发送请求到服务器，服务器通过另一些request header验证这个资源是否命中协商缓存，这个过程成为http再验证，如果命中，服务器直接返回请求而不返回资源，而是告诉客户端之间从缓存中获取，客户端收到返回后就直接从客户端获取资源

（3）强缓存和协商缓存的共同之处在于，如果命中缓存，服务器不会返回资源，区别是强缓存不发送请求到服务器，但是协商缓存会发送请求到服务器

（4）当协商缓存没有命中时，服务器会返回资源给客户端

（5）当ctrl+F5强制刷新网页时，直接从服务器加载，跳过强缓存和协商缓存

（6）当F5刷新页面时，跳过强缓存但会检查协商缓存

###### 强缓存

（1）Expires该字段是http1.0时的规范，值是一个绝对时间的GMT格式的时间字符串，代表缓存的过期时间

（2）Cache-Control:max-age该字段是http1.1的规范，强缓存利用的是max-age的值来实现缓存资源的最大生命周期，单位是秒

###### 协商缓存

（1）Last-Modified资源最后的更新时间，随着服务器的response返回

（2）If-Modified-Since通过比较两个时间来判断资源在两次请求期间是否有过修改，如果没有就命中协商请求

（3）ETag资源内容的唯一标识，随着服务器的response返回

（4）If-None-Match服务器通过请求头部的If-None-Match与当前资源的ETag是否一致来表示资源在两次请求中是否有过修改，如果没有修改，则命中协商缓存

#### 前端的性能优化

###### 影响性能的因素

延迟、带宽、静态资源、DNS解析时间、TCP握手时间、SSL握手时间

###### 性能优化工具

PageSpeedInsights

Chrome User Experience Report

Fireperf

###### 优化方法

延迟

> 使用CDN
>
> 优化Cache

带宽

> 延迟加载资源——懒加载图片
>
> 提前加载资源——关键资源preload、prefetch
>
> 不加载资源

优化资源文件大小

> 数据压缩优化
>
> ​	Broti，Http2.0头文件压缩和HPACK
>
> Minification
>
> ​	牺牲代码可读性，减少文件体积
>
> Tree Shaking
>
> ​	确保在输出文件中不包含dead code
>
> 移除昂贵的Library

DNS优化

> 限制Domain数量
>
> DNS prefetch

减少TCP创建开销

> 减少页面重定向——SPA

###### 具体方法

减少http请求

设置协商缓存或者强缓存

延迟加载

提前加载

使用CDN

文件压缩

减少DOM操作

图片处理Sprites

只引用需要的代码