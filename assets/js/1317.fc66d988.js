(window.webpackJsonp=window.webpackJsonp||[]).push([[1317],{1709:function(s,a,e){"use strict";e.r(a);var t=e(13),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("Tomcat本身是一个“HTTP服务器 + Servlet容器”，想深入理解Tomcat工作原理，理解HTTP协议的工作原理是基础。")]),s._v(" "),e("h1",{attrs:{id:"http的本质"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http的本质"}},[s._v("#")]),s._v(" HTTP的本质")]),s._v(" "),e("p",[s._v("HTTP协议是浏览器与服务器之间的数据传送协议。作为应用层协议，HTTP是基于TCP/IP协议来传递数据的（HTML文件、图片、查询结果等），HTTP协议不涉及数据包（Packet）传输，主要规定了客户端和服务器之间的通信格式。")]),s._v(" "),e("p",[s._v("假如浏览器需要从远程HTTP服务器获取一个HTML文本，在这个过程中，浏览器实际上要做两件事情。")]),s._v(" "),e("ul",[e("li",[s._v("与服务器建立Socket连接\n浏览器从地址栏获取用户输入的网址和端口，去连接远端的服务器，这样就能通信了。")]),s._v(" "),e("li",[s._v("生成"),e("strong",[s._v("请求数据")]),s._v("并通过Socket发送出去\n这个请求数据长什么样？请求什么内容？浏览器需告诉服务端什么？")])]),s._v(" "),e("p",[s._v("首先，你要让服务端知道你是想获取内容 or 提交内容\n然后，你需要告诉服务端你想要哪个内容。")]),s._v(" "),e("p",[s._v("要把这些信息以何格式放入请求？这就是HTTP协议要解决的问题。\n即"),e("strong",[s._v("HTTP协议本质是一种浏览器与服务器之间约定好的通信格式")]),s._v("。\n浏览器与服务器之间具体是怎么工作的？")]),s._v(" "),e("h1",{attrs:{id:"http工作原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http工作原理"}},[s._v("#")]),s._v(" HTTP工作原理")]),s._v(" "),e("ul",[e("li",[s._v("一次HTTP请求过程\n"),e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210714225935750.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMzNTg5NTEw,size_16,color_FFFFFF,t_70",alt:""}})])]),s._v(" "),e("ol",[e("li",[s._v("用户通过浏览器操作，比如输入www.google.cn，并回车，于是浏览器获取该事件")]),s._v(" "),e("li",[s._v("浏览器向服务端发出TCP连接请求")]),s._v(" "),e("li",[s._v("服务程序接受浏览器的连接请求，并经过TCP三次握手建立连接")]),s._v(" "),e("li",[s._v("浏览器将请求数据打包成一个HTTP协议格式的数据包")]),s._v(" "),e("li",[s._v("浏览器将该数据包推入网络，数据包经过网络传输，最终达到端服务程序")]),s._v(" "),e("li",[s._v("服务端程序拿到这个数据包后，同样以HTTP协议格式解包，获取到客户端的意图")]),s._v(" "),e("li",[s._v("得知客户端意图后进行处理，比如提供静态文件或者调用服务端程序获得动态结果")]),s._v(" "),e("li",[s._v("服务器将响应结果（可能是HTML或者图片等）按照HTTP协议格式打包")]),s._v(" "),e("li",[s._v("服务器将响应数据包推入网络，数据包经过网络传输最终达到到浏览器")]),s._v(" "),e("li",[s._v("浏览器拿到数据包后，以HTTP协议的格式解包，然后解析数据，假设这里的数据是HTML")]),s._v(" "),e("li",[s._v("浏览器将HTML文件展示在页面上")])]),s._v(" "),e("p",[s._v("Tomcat作为一个HTTP服务器，在这个过程中主要")]),s._v(" "),e("ul",[e("li",[s._v("接受连接")]),s._v(" "),e("li",[s._v("解析请求数据")]),s._v(" "),e("li",[s._v("处理请求")]),s._v(" "),e("li",[s._v("发送响应")])]),s._v(" "),e("h1",{attrs:{id:"http格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http格式"}},[s._v("#")]),s._v(" HTTP格式")]),s._v(" "),e("h2",{attrs:{id:"请求数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求数据"}},[s._v("#")]),s._v(" 请求数据")]),s._v(" "),e("p",[s._v("你有没有注意到，在浏览器和HTTP服务器之间通信的过程中，首先要将数据打包成HTTP协议的格式，那HTTP协议的数据包具体长什么样呢？")]),s._v(" "),e("h3",{attrs:{id:"组成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组成"}},[s._v("#")]),s._v(" 组成")]),s._v(" "),e("p",[s._v("HTTP请求数据由三部分组成，分别是请求行、请求报头、请求正文。\n比如一个简单的登录请求，浏览器会发如下HTTP请求：")]),s._v(" "),e("h4",{attrs:{id:"请求行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求行"}},[s._v("#")]),s._v(" 请求行")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("GET /login?callBack"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("xxx HTTP/1.1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"请求报头"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求报头"}},[s._v("#")]),s._v(" 请求报头")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("Accept: text/html,application/xhtml+xml,application/xml"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("q")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.9")]),s._v(",image/avif,image/webp,image/apng,*/*"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("q")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.8")]),s._v(",application/signed-exchange"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("v")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("b3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("q")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.9")]),s._v("\nAccept-Encoding: gzip, deflate, br\nAccept-Language: zh-CN,zh"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("q")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.9")]),s._v(",en-US"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("q")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.8")]),s._v(",en"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("q")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.7")]),s._v("\nCache-Control: max-age"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nConnection: keep-alive\nHost: www.nowcoder.com\nUser-Agent: Mozilla/5.0 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Macintosh"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Intel Mac OS X 10_15_7"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h4",{attrs:{id:"请求正文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求正文"}},[s._v("#")]),s._v(" 请求正文")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"country"')]),s._v(":86, "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"22"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("当这个HTTP请求数据到达Tomcat后，Tomcat会把HTTP请求数据字节流解析成一个Request对象，这个Request对象封装了HTTP所有的请求信息。\n接着Tomcat把这个Request对象交给Web应用去处理，处理完后得到一个Response对象，Tomcat会把这个Response对象转成HTTP格式的响应数据并发送给浏览器。")]),s._v(" "),e("h2",{attrs:{id:"http响应"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http响应"}},[s._v("#")]),s._v(" HTTP响应")]),s._v(" "),e("p",[s._v("HTTP的响应也是由三部分组成：状态行、响应报头、报文主体。")]),s._v(" "),e("h4",{attrs:{id:"状态行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#状态行"}},[s._v("#")]),s._v(" 状态行")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("HTTP/1.1 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v(" OK\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"响应报头"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#响应报头"}},[s._v("#")]),s._v(" 响应报头")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("Connection: keep-alive\nContent-Length: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nContent-Type: text/html"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("charset")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("UTF-8\nDate: Thu, "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" Jul "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" 02:37:13 GMT\nServer: openresty\nX-Backend-Response: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.002")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h4",{attrs:{id:"报文主体"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#报文主体"}},[s._v("#")]),s._v(" 报文主体")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code")]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"})]),e("h1",{attrs:{id:"cookie和session"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cookie和session"}},[s._v("#")]),s._v(" Cookie和Session")]),s._v(" "),e("h2",{attrs:{id:"无状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#无状态"}},[s._v("#")]),s._v(" 无状态")]),s._v(" "),e("p",[s._v("HTTP协议本身是无状态的，不同请求间协议内容无相关性，即本次请求与上次请求没有内容的依赖关系，本次响应也只针对本次请求的数据，至于服务器应用程序为用户保存的状态是属于应用层，与HTTP协议本身无关！")]),s._v(" "),e("p",[s._v("无状态，就是为完成某一操作，请求里包含了所有信息，服务端无需保存请求的状态，即无需保存session，无session的好处是带来了服务端良好的可伸缩性，方便failover，请求被LB转到不同server实例也没有区别。这样看，正是REST架构风格，才有了HTTP的无状态特性。REST和HTTP1.1其实都出自同一人之手。")]),s._v(" "),e("p",[s._v("http最初设计成无状态的是因为只是用来浏览静态文件的，无状态协议已经足够，也没什么负担。\n但随着web发展，它需要变得有状态，但是不是就要修改HTTP协议使之有状态？\n不需要：")]),s._v(" "),e("ul",[e("li",[s._v("因为我们经常长时间逗留在某一个网页，然后才进入到另一个网页，如果在这两个页面之间维持状态，代价很高")]),s._v(" "),e("li",[s._v("其次，历史让http无状态，但是现在对http提出了新的要求，按照软件领域的通常做法是，保留历史经验，在http协议上再加上一层实现我们的目的。所以引入cookie、session等机制来实现这种有状态的连接。")])]),s._v(" "),e("p",[s._v("在分布式场景下，为减少Session不一致，一般将Session存储到Redis，而非直接存储在server实例。")]),s._v(" "),e("p",[s._v("现在的Web容器都支持将session存储在第三方中间件（如Redis）中，为什么大多都绕过容器，直接在应用中将会话数据存入中间件中？\n因为用Web容器的Session方案需要侵入特定的Web容器，用Spring Session可能比较简单，它使得程序员甚至感觉不到Servlet容器的存在，可以专心开发Web应用。它是通过Servlet规范中的Filter机制拦截了所有Servlet请求，偷梁换柱，将标准Servlet请求对象包装，换成自己的Request包装类对象，当程序员通过包装后的Request对象的getSession方法拿Session时，是通过Spring拿Session，和Web容器无关。")]),s._v(" "),e("p",[s._v("有了 session 就够了吗？这还有一个问题：Web应用不知道你是谁。\n比如你登录淘宝，在购物车添加了三件商品，刷新一下网页，这时系统提示你仍然处未登录状态，购物车也空了！\n因此HTTP协议需要一种技术让请求与请求之间建立联系，服务器需要知道这个请求来自谁，于是出现了Cookie。")]),s._v(" "),e("h2",{attrs:{id:"cookie"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[s._v("#")]),s._v(" Cookie")]),s._v(" "),e("p",[s._v("Cookie是HTTP报文的一个请求头，Web应用可以将用户的标识信息或者其他一些信息（用户名等）存储在Cookie。用户经过验证后，每次HTTP请求报文中都包含Cookie，这样服务器读取这个Cookie请求头就知道用户是谁了。\nCookie本质上就是一份存储在用户本地的文件，里面包含了每次请求中都需要传递的信息。")]),s._v(" "),e("h2",{attrs:{id:"session"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#session"}},[s._v("#")]),s._v(" Session")]),s._v(" "),e("p",[s._v("由于Cookie以明文的方式存储在本地，而Cookie中往往带有用户信息，这样就造成了非常大的安全隐患，于是产生了Session。")]),s._v(" "),e("h3",{attrs:{id:"如何理解session"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何理解session"}},[s._v("#")]),s._v(" 如何理解Session")]),s._v(" "),e("p",[s._v("可理解为服务器端开辟的存储空间，里面保存了用户的状态，用户信息以Session的形式存储在服务端。当用户请求到来时，服务端可以把用户的请求和用户的Session对应起来。")]),s._v(" "),e("h3",{attrs:{id:"session如何对应请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#session如何对应请求"}},[s._v("#")]),s._v(" Session如何对应请求")]),s._v(" "),e("p",[s._v("通过Cookie，浏览器在Cookie中填个了类似sessionid的字段标识请求。")]),s._v(" "),e("h3",{attrs:{id:"工作过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工作过程"}},[s._v("#")]),s._v(" 工作过程")]),s._v(" "),e("ul",[e("li",[s._v("服务端创建Session同时，为该Session生成唯一的sessionid")]),s._v(" "),e("li",[s._v("通过set-cookie放在HTTP的响应头")]),s._v(" "),e("li",[s._v("浏览器将sessionid写到cookie里")]),s._v(" "),e("li",[s._v("当浏览器再次发送请求时，自动携带该sessionid")]),s._v(" "),e("li",[s._v("服务器接受到请求后，根据sessionid找到相应Session")]),s._v(" "),e("li",[s._v("找到Session后，即可在Session中获取或添加内容")]),s._v(" "),e("li",[s._v("这些内容只会保存在服务器，发到客户端的只有sessionid，这样相对安全，也节省网络流量，无需在Cookie中存储大量用户信息")])]),s._v(" "),e("h3",{attrs:{id:"session创建与存储"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#session创建与存储"}},[s._v("#")]),s._v(" Session创建与存储")]),s._v(" "),e("p",[s._v("在服务器端程序运行的过程中创建的，不同语言实现的应用程序有不同的创建Session的方法。")]),s._v(" "),e("p",[s._v("在Java中，是Web应用程序在调用HttpServletRequest的getSession方法时，由Web容器（比如Tomcat）创建的。")]),s._v(" "),e("p",[s._v("Tomcat的Session管理器提供了多种持久化方案来存储Session，通常会采用高性能的存储方式，比如Redis，并且通过集群部署的方式，防止单点故障，从而提升高可用。同时，Session有过期时间，因此Tomcat会开启后台线程定期的轮询，如果Session过期了就将Session失效。")]),s._v(" "),e("p",[s._v("引入session是因为cookie存在客户端，有安全隐患；但是session id也是通过cookie由客户端发送到服务端，虽然敏感的用户信息没有在网络上传输了，但是攻击者拿到sessionid也可以冒充受害者发送请求，这就是为什么我们需要https，加密后攻击者就拿不到sessionid了，另外CSRF也是一种防止session劫持的方式。\ntoken比如jwt token，本质也就是个加密的cookie。")]),s._v(" "),e("ul",[e("li",[s._v("Cookie本质上就是一份存储在用户本地的文件，包含每次请求中都需要传递的信息")])]),s._v(" "),e("h1",{attrs:{id:"http长连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http长连接"}},[s._v("#")]),s._v(" HTTP长连接")]),s._v(" "),e("p",[s._v("HTTP协议和其他应用层协议一样，本质上是一种通信格式。类比现实生活：")]),s._v(" "),e("ul",[e("li",[s._v("HTTP是通信的方式\nHTTP是信封")]),s._v(" "),e("li",[s._v("HTML是通信的目的\n信封里面的信（HTML）才是内容，但没有信封，信也没办法寄出去。")])]),s._v(" "),e("p",[s._v("像Cookie这些信息就像在信封表面的那些发信人相关个人信息。\nTCP连接就是送信员，负责真正的传输数据信息。无状态表示每次寄信都是新的信封。\n在服务端看来这些信之间是没有关系的，并且服务端通过阅读这封信就得到它要的全部信息，无需从其它地方（比如Session）获取这封信的更多上下文信息，服务端就知道怎么处理和回信。")]),s._v(" "),e("p",[s._v("HTTP协议就是浏览器与服务器之间的沟通语言，具体交互过程是请求、处理和响应。")]),s._v(" "),e("p",[s._v("在HTTP/1.0时期，每次HTTP请求都会创建一个新的TCP连接，请求完成后之后这个TCP连接就会被关闭。\n这种通信模式的效率不高，所以在HTTP/1.1中，引入了HTTP长连接的概念。")]),s._v(" "),e("p",[s._v("使用长连接的HTTP协议，会在响应头加入"),e("code",[s._v("Connection:keep-alive")]),s._v("。\n这样当浏览器完成一次请求后，浏览器和服务器之间的TCP连接不会关闭，再次访问这个服务器上的网页时，浏览器会继续使用这一条已经建立的连接，也就是说两个请求可能共用一个TCP连接。")]),s._v(" "),e("p",[e("strong",[s._v("keep-alive")]),s._v("表示TCP的连接可复用，指的是利用已有传输通道进行HTTP协议内容的传输，省去创建、关闭连接的开销以达到提升性能效果（类似线程池的复用线程）。\nConnection:keep-alive只是建立TCP层的状态，省去了下一次的TCP三次握手，而HTTP本身还是继续保持无状态。\n应用程序其实一般不关心这次HTTP请求的TCP传输细节，只关心HTTP协议的内容，因此只要复用TCP连接时做好必要的数据重置，是不算有状态的。")]),s._v(" "),e("p",[s._v("HTTP的无状态性与共用TCP连接发送多个请求之间没有冲突，这些请求之间相对独立，唯一的关系可能只有发送的先后顺序关系。\nHTTP/1.1中的长连接没有解决 head of line blocking，请求是按顺序排队处理的，前面的HTTP请求处理会阻塞后面的HTTP请求，虽然HTTP pipelining对连接请求做了改善，但是复杂度太大，并没有普及，以至于后面的连接必须等待前面的返回了才能够发送。这个问题直到HTTP/2.0采取二进制分帧编码方式才彻底解决。")]),s._v(" "),e("ul",[e("li",[s._v("HTTP 1.0\n买一个信封只能传送一个来回的信。")]),s._v(" "),e("li",[s._v("HTPP 1.1 "),e("strong",[s._v("keep–alive")]),s._v("\n买一个信封可重复使用，但前提是得等到服务端把这个信封里的信处理完，并送回来！")])])])}),[],!1,null,null,null);a.default=n.exports}}]);