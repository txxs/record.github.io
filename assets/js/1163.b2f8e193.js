(window.webpackJsonp=window.webpackJsonp||[]).push([[1163],{1561:function(t,s,n){"use strict";n.r(s);var a=n(13),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("异步与同步模型最大的区别：")]),t._v(" "),n("ul",[n("li",[t._v("同步模型会阻塞线程等待资源")]),t._v(" "),n("li",[t._v("异步模型不会阻塞线程，它是等资源准备好后，再通知业务代码来完成后续的资源处理逻辑。可很好解决IO等待的问题")])]),t._v(" "),n("p",[t._v("业务系统大都是IO密集型。相对的是计算密集型系统。")]),t._v(" "),n("p",[t._v("IO密集型系统主要时间都在执行IO操作，包括网络IO和磁盘IO，以及与计算机连接的一些外围设备访问。\n与之相对的计算密集型系统，大多时间在使用CPU执行计算操作。\n业务系统，很少有非常耗时的计算，更多的是网络收发数据，读写磁盘和数据库这些IO操作。这样的系统基本都是IO密集型，适合使用异步提升性能。")]),t._v(" "),n("p",[t._v("应用程序最常使用的IO资源，主要包括磁盘IO和网络IO。由于现在的SSD的速度越来越快，对本地磁盘读写，异步意义越来越小。所以，使用异步设计的方法来提升IO性能，我们更需关注如何实现高性能异步网络传输。")]),t._v(" "),n("h1",{attrs:{id:"理想的异步网络框架"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#理想的异步网络框架"}},[t._v("#")]),t._v(" 理想的异步网络框架")]),t._v(" "),n("p",[t._v("程序如果要实现通过网络传输数据，需用到开发语言提供的网络通信类库。\n大部分语言提供的网络通信基础类库都是同步。一个TCP连接建立后，用户代码会获得个收发数据的通道。每个通道会在内存中开辟两片区域用于收发数据缓存。")]),t._v(" "),n("p",[t._v("发送数据的过程较简单，直接往通道写数据。用户代码在发送时写入的数据会暂存在缓存，然后os会通过网卡，把发送缓存中的数据传输到对端服务器。")]),t._v(" "),n("p",[t._v("只要缓存不满，或者说，我们发送数据的速度没有超过网卡传输速度的上限，那这个发送数据的操作耗时，只不过是一次内存写入的时间，这个时间是非常快的。所以，发送数据的时候同步发送就可以了，没有必要异步。")]),t._v(" "),n("p",[t._v("比较麻烦的是接收数据。对于数据的接收方来说，它并不知道什么时候会收到数据。\n直接想到的方法就是，用一个线程阻塞等数据，当有数据来，操作系统会先把数据写入接收缓存，然后给接收数据的线程发个通知，线程收到通知后结束等待，开始读取数据。处理完这一批数据后，继续阻塞等待下一批数据，周而复始处理收到的数据。\n"),n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200806003514931.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_SmF2YUVkZ2U=,size_1,color_FFFFFF,t_70",alt:""}})]),t._v(" "),n("p",[t._v("这就是同步网络IO的模型。同步网络IO模型在处理少量连接的时候，没有问题。\n但要同时处理多连接，就力不从心。")]),t._v(" "),n("p",[t._v("因为每个连接都需要阻塞个线程等待数据，大量连接数就会需要相同数量的数据接收线程。当这些TCP连接都在进行数据收发时，会有大量线程抢占CPU，造成频繁CPU上下文切换，导致CPU负载升高，系统性能较慢。")]),t._v(" "),n("p",[t._v("所以需使用异步模型解决网络IO问题。\n一个好的异步网络框架，希望达到效果，只用少量线程就能处理大量连接，有数据到来时能第一时间处理即可。\n对开发者，最简单的就是，事先定义好收到数据后的处理逻辑，把这个处理逻辑作为一个回调方法，在连接建立前就通过框架提供的API设置好。当收到数据的时候，由框架自动来执行这个回调方法就好了。\n"),n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200806003537605.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_SmF2YUVkZ2U=,size_1,color_FFFFFF,t_70",alt:""}})]),t._v(" "),n("p",[t._v("有这么简单的框架？")]),t._v(" "),n("h1",{attrs:{id:"使用netty异步网络通信"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用netty异步网络通信"}},[t._v("#")]),t._v(" 使用Netty异步网络通信")]),t._v(" "),n("p",[t._v("Netty框架的API设计就是这样的。\n看一下如何使用Netty实现异步接收数据。")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建一组线性")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventLoopGroup")]),t._v(" group "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NioEventLoopGroup")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化Server")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServerBootstrap")]),t._v(" serverBootstrap "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServerBootstrap")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    serverBootstrap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("group")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("group"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    serverBootstrap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("channel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NioServerSocketChannel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    serverBootstrap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("localAddress")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InetSocketAddress")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9999")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置收到数据后的处理的Handler")]),t._v("\n    serverBootstrap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("childHandler")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChannelInitializer")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SocketChannel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("initChannel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SocketChannel")]),t._v(" socketChannel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            socketChannel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pipeline")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addLast")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyHandler")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 绑定端口，开始提供服务")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChannelFuture")]),t._v(" channelFuture "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" serverBootstrap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sync")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    channelFuture"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("channel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("closeFuture")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sync")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printStackTrace")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    group"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("shutdownGracefully")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sync")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br")])]),n("p",[t._v("在本地9999端口，启动了一个Socket Server来接收数据。")]),t._v(" "),n("ol",[n("li",[t._v("首先创建EventLoopGroup对象，命名为group，group对象可简单理解为一组线程。用来执行收发数据的业务逻辑")]),t._v(" "),n("li",[t._v("然后，使用Netty提供的ServerBootstrap来初始化一个Socket Server，绑定到本地9999端口")]),t._v(" "),n("li",[t._v("真正启动服务前，给serverBootstrap传个MyHandler对象，自定义的一个类，需继承Netty的ChannelInboundHandlerAdapter。在MyHandler里，可定义收到数据后的处理逻辑。这个设置Handler的过程，就是我刚刚讲的，预先来定义回调方法的过程")]),t._v(" "),n("li",[t._v("最后即可真正绑定本地端口，启动Socket服务")])]),t._v(" "),n("p",[t._v("服务启动后，若有客户端请求连接，Netty会自动接受并创建个Socket连接。代码中，并没有像一些同步网络框架需要用户自己调用Accept()方法接受创建连接，Netty中的这个过程是自动的。")]),t._v(" "),n("p",[t._v("当收到客户端数据后，Netty会在第一行提供的EventLoopGroup对象中，获取一个IO线程，在该IO线程中调用接收数据的回调方法，执行接收数据的业务逻辑，在这该例中就是传入的MyHandler中的方法。")]),t._v(" "),n("p",[t._v("Netty本身是全异步设计，异步会带来额外复杂度，所以例子代码看起来较复杂。但是你看，其实它提供了一组非常友好API。")]),t._v(" "),n("p",[t._v("真正需要业务代码来实现的就两个部分：")]),t._v(" "),n("ol",[n("li",[t._v("把服务初始化并启动")]),t._v(" "),n("li",[t._v("实现收发消息的业务逻辑MyHandler")])]),t._v(" "),n("p",[t._v("而像线程控制、缓存管理、连接管理这些异步网络IO中通用复杂问题，Netty已自动帮你处理，所以非常多的开源项目使用Netty作为其底层的网络IO框架。")]),t._v(" "),n("p",[t._v("Netty自己维护一组线程来执行数据收发的业务逻辑。如果你的业务需更灵活实现，自己来维护收发数据的线程，可以选择更加底层的Java NIO。毕竟Netty也是基于NIO封装实现。")]),t._v(" "),n("h1",{attrs:{id:"使用nio来实现异步网络通信"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用nio来实现异步网络通信"}},[t._v("#")]),t._v(" 使用NIO来实现异步网络通信")]),t._v(" "),n("p",[t._v("Java的NIO提供一个Selector对象，来解决一个线程在多个网络连接上的多路复用问题。什么意思呢？在NIO中，每个已经建立好的连接用一个Channel对象来表示。我们希望能实现，在一个线程里，接收来自多个Channel的数据。也就是说，这些Channel中，任何一个Channel收到数据后，第一时间能在同一个线程里面来处理。")]),t._v(" "),n("p",[t._v("一个线程对应多个Channel，有可能出现这俩情况：")]),t._v(" "),n("ol",[n("li",[t._v("线程在忙着处理收到的数据，这时候Channel中又收到了新数据")]),t._v(" "),n("li",[t._v("线程没事干，所有的Channel都没收到数据，也不能确定哪个Channel会在什么时候收到数据\n"),n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200806015618602.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_SmF2YUVkZ2U=,size_1,color_FFFFFF,t_70",alt:""}})])]),t._v(" "),n("p",[t._v("Selecor通过一种类似事件机制解决这问题。")]),t._v(" "),n("ol",[n("li",[t._v("首先需要把你的连接，即Channel绑定到Selector")]),t._v(" "),n("li",[t._v("然后可在接收数据的线程调用Selector.select()等待数据到来。select方法是一个阻塞方法，这线程会一直卡在这，直到这些Channel中的任意一个有数据来，就会结束等待返回数据。它的返回值是一个迭代器，可从这个迭代器里面获取所有Channel收到的数据，然后来执行你的数据接收的业务逻辑。")])]),t._v(" "),n("p",[t._v("可选择直接在这个线程里面来执行接收数据的业务逻辑，也可将任务分发给其他的线程来执行，如何选择完全可以由你的代码来控制。")]),t._v(" "),n("h1",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("p",[t._v("同步网络IO，一般都是一个线程对应一个Channel接收数据，难支持高并发和高吞吐。\n这时，我们需异步网络IO框架解决问题。")]),t._v(" "),n("p",[t._v("Netty和NIO这两种异步网络框架，Netty自动地解决了线程控制、缓存管理、连接管理这些问题，用户只需要实现对应的Handler来处理收到的数据即可。\n而NIO是更加底层的API，它提供了Selector机制，用单个线程同时管理多个连接，解决了多路复用这个异步网络通信的核心问题。")]),t._v(" "),n("p",[t._v("JAVA的网络有个比喻形式的总结，分享给大家：\n例子：有一个养鸡的农场，里面养着来自各个农户（Thread）的鸡（Socket），每家农户都在农场中建立了自己的鸡舍（SocketChannel）\n1、BIO：Block IO，每个农户盯着自己的鸡舍，一旦有鸡下蛋，就去做捡蛋处理；\n2、NIO：No-Block IO-单Selector，农户们花钱请了一个饲养员（Selector），并告诉饲养员（register）如果哪家的鸡有任何情况（下蛋）均要向这家农户报告（select keys）；\n3、NIO：No-Block IO-多Selector，当农场中的鸡舍逐渐增多时，一个饲养员巡视（轮询）一次所需时间就会不断地加长，这样农户知道自己家的鸡有下蛋的情况就会发生较大的延迟。怎么解决呢？没错，多请几个饲养员（多Selector），每个饲养员分配管理鸡舍，这样就可以减轻一个饲养员的工作量，同时农户们可以更快的知晓自己家的鸡是否下蛋了；\n4、Epoll模式：如果采用Epoll方式，农场问题应该如何改进呢？其实就是饲养员不需要再巡视鸡舍，而是听到哪间鸡舍的鸡打鸣了（活跃连接），就知道哪家农户的鸡下蛋了；\n5、AIO：Asynchronous I/O, 鸡下蛋后，以前的NIO方式要求饲养员通知农户去取蛋，AIO模式出现以后，事情变得更加简单了，取蛋工作由饲养员自己负责，然后取完后，直接通知农户来拿即可，而不需要农户自己到鸡舍去取蛋。")]),t._v(" "),n("p",[t._v("Netty服务端会存在两个线程池NioEventLoopGroup，一个线程池主要用来处理客户端的连接，一般设置单线程NioEventLoop，在Linux中可能是EpollEventLoop，要是服务端监控多个端口可以设置多个线程，服务端接收到客户端的连接会创建Channel通道，Channel通道中会有收发缓存，服务端会定时监控Channel通道是否已经断开，在一定时间没有收到客户端的心跳包，把客户端的Channel从服务端移除，还可以设置服务端接收连接的队列，还有一个处理线程池NioEventLoopGroup，里面会有多个线程NioEventLoop，然后每个NioEventLoop都会有一个Selector，然后可以多个channel绑定到NioEventLoop的Selector中，即一个Channel只能被一个NioEventLoop处理，一个NioEventLoop可以处理多个Channel，即收到Channel数据，NioEventLoop执行Handler，包括解码、拆包等Handler，服务端返回响应消息对Channel进行编码等Handler。")]),t._v(" "),n("h1",{attrs:{id:"netty本基于nio实现。针对接收数据流程-netty如何用nio实现的呢"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#netty本基于nio实现。针对接收数据流程-netty如何用nio实现的呢"}},[t._v("#")]),t._v(" Netty本基于NIO实现。针对接收数据流程，Netty如何用NIO实现的呢？")]),t._v(" "),n("p",[t._v("接收数据这个流程Netty是一个NioEventLoop会有一个Selector，原先的Nio是只有一个Selector进行处理所有的连接收发事件，这样的话比如NioEventLoopGroup中有10个NioEventLoop，这样的话就有10个Selector，比如有10000读写请求，每个Selector就可以维持1000。")])])}),[],!1,null,null,null);s.default=e.exports}}]);