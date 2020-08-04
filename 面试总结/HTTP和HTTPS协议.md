#### HTTP协议（应用层）

（Hyper Text Transfer Protocol）超文本传输协议，是基于TCP的应用层协议

抓包工具（fiddler）

#### HTTP请求报文和响应报文

##### 请求报文

请求行

请求头

头和主体之间要空一行

请求主体（可以没有）

###### 请求行

请求方法GET、POST、HEAD、PUT、DELETE、TRACE、OPTIONS

请求路径

请求所用协议（协议版本HTTP1.1）

###### 请求方法

GET（请求资源）

POST（提交资源）

HEAD（获取响应头）

PUT（替换资源）

DELETE（删除资源）

TRACE（回显服务器收到的请求，用于测试或诊断）

OPTIONS（允许客户端查看服务器的性能）

###### 请求路径（URL）

格式：schema://host[:post#]/path/.../[?query-string]

> schema：协议，如http，https，ftp
>
> host：域名或者IP地址
>
> port：端口
>
> path：资源路径
>
> query-string：发送的参数

##### 响应报文

响应行

响应头

头和主体之间要空一行

响应主体

###### 响应行

协议版本

状态码

状态描述

###### 状态码

1XX 提示信息，请求被成功接收

2XX 成功，请求被成功处理（200，请求成功）

3XX 重定向相关（304，协商缓存没有修改）

4XX 客户端错误（404，找不到IP）

5XX 服务器端错误（500，服务器出错）

###### 响应头

Server HTTP服务器的软件信息

Date 响应报文的时间

Expires 指定缓存过期时间

Set-Cookie 设置cookie

#### HTTPS协议

添加了ssl协议进行数据加密

使用对称+非对称的加密方式，使用哈希散列算法，使用了CA认证

首先客户端向服务器端索要公钥，然后客户端随机生成一个数字，使用公钥对该数字进行加密，之后将该数字作为加密解密的秘钥

中间人问题

#### HTTP 2.0 和 HTTP1.1 相比有哪些新特性

二进制分帧

多路复用

头部压缩

服务器推送

#### HTTP 和 WebSocket的区别

websocket可以使服务端自主地发送消息到客户端

websocket是持续的长链接