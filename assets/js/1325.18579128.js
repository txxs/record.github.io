(window.webpackJsonp=window.webpackJsonp||[]).push([[1325],{1720:function(t,r,a){"use strict";a.r(r);var e=a(13),o=Object(e.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"思维导图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思维导图"}},[t._v("#")]),t._v(" 思维导图")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/6/30/17305cc05ba3465c?w=894&h=436&f=png&s=45997",alt:"在这里插入图片描述"}})]),t._v(" "),a("h1",{attrs:{id:"一、reactor模式介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、reactor模式介绍"}},[t._v("#")]),t._v(" 一、Reactor模式介绍")]),t._v(" "),a("p",[t._v("本文主要参考Doug Lea(大神)的“"),a("strong",[t._v("Scalable IO in Java")]),t._v("”中讲述的Reactor模式。")]),t._v(" "),a("p",[t._v("原文地址："),a("a",{attrs:{href:"http://gee.cs.oswego.edu/dl/cpjslides/nio.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://gee.cs.oswego.edu/dl/cpjslides/nio.pdf"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("有兴趣的可以看看这本书，受益匪浅！")]),t._v(" "),a("h2",{attrs:{id:"_1-1-什么是reactor模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-什么是reactor模式"}},[t._v("#")]),t._v(" 1.1 什么是Reactor模式")]),t._v(" "),a("p",[t._v('Reactor模式一般翻译成"'),a("strong",[t._v("反应器模式")]),t._v('"，也有人称为"'),a("strong",[t._v("分发者模式")]),t._v('"。它是将客户端请求提交到一个或者多个服务处理程序的设计模式。工作原理是由'),a("strong",[t._v("一个线程来接收所有的请求")]),t._v("，然后"),a("strong",[t._v("派发这些请求到相关的工作线程中")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"_1-2-为什么使用reactor模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-为什么使用reactor模式"}},[t._v("#")]),t._v(" 1.2 为什么使用Reactor模式")]),t._v(" "),a("p",[t._v("在java中，没有NIO出现之前都是使用socket编程。socket的接收请求是阻塞的，需要处理完一个请求才能处理下一个请求，所以在面对高并发的服务请求时，性能就会很差。")]),t._v(" "),a("p",[t._v("那有人就会说使用多线程（如下图所示）。接收到一个请求，就创建一个线程处理，这样就不会阻塞了。实际上这样的确是可以在提升性能上起到一定的作用，"),a("strong",[t._v("但是当请求很多的时候，就会创建大量的线程，维护线程需要资源的消耗，线程之间的切换也需要消耗性能")]),t._v("。而且系统创建线程的数量也是有限的，所以当高并发时，会直接把系统拖垮。\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/6/30/17305cc05ef76206?w=736&h=316&f=png&s=203508",alt:"在这里插入图片描述"}}),t._v("\n由于以上的问题，提出了Reactor模式。")]),t._v(" "),a("p",[t._v("基于Java，Doug Lea（Java并发包作者）提出了三种形式，"),a("strong",[t._v("单Reactor单线程，单Reactor多线程和多Reactor多线程")]),t._v("。")]),t._v(" "),a("h1",{attrs:{id:"二、reactor模式的演进过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、reactor模式的演进过程"}},[t._v("#")]),t._v(" 二、Reactor模式的演进过程")]),t._v(" "),a("p",[t._v("在介绍三种Reactor模式前，先简单地说明三个角色：")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("Reactor")]),t._v("：负责响应事件，将事件分发到绑定了对应事件的Handler，如果是连接事件，则分发到Acceptor。")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("Handler")]),t._v("：事件处理器。负责执行对应事件对应的业务逻辑。")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("Acceptor")]),t._v("：绑定了 connect 事件，当客户端发起connect请求时，Reactor会将accept事件分发给Acceptor处理。")])]),t._v(" "),a("h2",{attrs:{id:"_2-1-单reactor单线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-单reactor单线程"}},[t._v("#")]),t._v(" 2.1 单Reactor单线程")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/6/30/17305cc05bf6fbe7?w=714&h=310&f=png&s=84409",alt:"在这里插入图片描述"}})]),t._v(" "),a("h3",{attrs:{id:"工作流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作流程"}},[t._v("#")]),t._v(" 工作流程")]),t._v(" "),a("blockquote",[a("p",[t._v("只有一个"),a("code",[t._v("select")]),t._v("循环接收请求，客户端（client）注册进来由"),a("code",[t._v("Reactor")]),t._v("接收注册事件，然后再由reactor分发（dispatch）出去，由下面的处理器（Handler）去处理。")])]),t._v(" "),a("h3",{attrs:{id:"通俗解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通俗解释"}},[t._v("#")]),t._v(" 通俗解释")]),t._v(" "),a("p",[t._v("一个餐厅里只有一个既是前台也是服务员的人，负责接待客人，也负责把客人点的菜下达给厨师。")]),t._v(" "),a("h3",{attrs:{id:"单reactor单线程的特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单reactor单线程的特点"}},[t._v("#")]),t._v(" 单Reactor单线程的特点")]),t._v(" "),a("p",[t._v("单线程的问题实际上是很明显的。只要其中一个Handler方法阻塞了，那就会导致所有的client的Handler都被阻塞了，也会导致注册事件也无法处理，无法接收新的请求。所以这种模式用的比较少，因为不能充分利用到多核的资源。")]),t._v(" "),a("p",[t._v("这种模式仅仅只能处理Handler比较快速完成的场景。")]),t._v(" "),a("h2",{attrs:{id:"_2-2-单reactor多线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-单reactor多线程"}},[t._v("#")]),t._v(" 2.2 单Reactor多线程")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/6/30/17305cc05fac64c3?w=721&h=496&f=png&s=181611",alt:"在这里插入图片描述"}})]),t._v(" "),a("h3",{attrs:{id:"工作流程-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作流程-2"}},[t._v("#")]),t._v(" 工作流程")]),t._v(" "),a("blockquote",[a("p",[t._v("在"),a("strong",[t._v("单Reactor多线程")]),t._v("中，注册接收事件都是由"),a("code",[t._v("Reactor")]),t._v("来做，其它的计算，编解码由一个线程池来做。从图中可以看出工作线程是多线程的，监听注册事件的"),a("code",[t._v("Reactor")]),t._v("还是单线程。")])]),t._v(" "),a("h3",{attrs:{id:"通俗解释-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通俗解释-2"}},[t._v("#")]),t._v(" 通俗解释")]),t._v(" "),a("p",[t._v("相当于餐厅里有一个前台，多个服务员。前台只负责接待客人，服务员只负责服务客人。")]),t._v(" "),a("h3",{attrs:{id:"单reactor多线程的特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单reactor多线程的特点"}},[t._v("#")]),t._v(" 单Reactor多线程的特点")]),t._v(" "),a("p",[t._v("对比"),a("strong",[t._v("单Reactor单线程")]),t._v("模型，多线程Reactor模式在Handler读写处理时，交给工作线程池处理，不会导致Reactor无法执行，因为Reactor分发和Handler处理是分开的，能充分地利用资源。从而提升应用的性能。")]),t._v(" "),a("p",[t._v("缺点：\nReactor只在主线程中运行，承担所有事件的监听和响应，如果短时间的高并发场景下，依然会造成性能瓶颈。")]),t._v(" "),a("h2",{attrs:{id:"_2-3-多reactor多线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-多reactor多线程"}},[t._v("#")]),t._v(" 2.3 多Reactor多线程")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/6/30/17305cc05faeebc1?w=686&h=483&f=png&s=121267",alt:"在这里插入图片描述"}})]),t._v(" "),a("h3",{attrs:{id:"工作流程-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作流程-3"}},[t._v("#")]),t._v(" 工作流程")]),t._v(" "),a("blockquote",[a("p",[t._v("1、mainReactor负责监听客户端请求，专门处理新连接的建立，将建立好的连接注册到subReactor。\n2、subReactor 将分配的连接加入到队列进行监听，当有新的事件发生时，会调用连接相对应的Handler进行处理。")])]),t._v(" "),a("h3",{attrs:{id:"通俗解释-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通俗解释-3"}},[t._v("#")]),t._v(" 通俗解释")]),t._v(" "),a("p",[t._v("相当于餐厅里有多个前台和多个服务员，前台只负责接待客人，服务员只负责服务客人。")]),t._v(" "),a("h3",{attrs:{id:"多reactor多线程的特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多reactor多线程的特点"}},[t._v("#")]),t._v(" 多Reactor多线程的特点")]),t._v(" "),a("p",[t._v("mainReactor 主要是用来处理客户端请求连接建立的操作。\nsubReactor主要做和建立起来的连接做数据交互和事件业务处理操作，每个subReactor一个线程来处理。")]),t._v(" "),a("blockquote",[a("p",[t._v("这样的模型使得每个模块更加专一，耦合度更低，能支持更高的并发量。许多框架也使用这种模式，比如接下来要讲的Netty框架就采用了这种模式。")])]),t._v(" "),a("h1",{attrs:{id:"三、在netty中的应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、在netty中的应用"}},[t._v("#")]),t._v(" 三、在Netty中的应用")]),t._v(" "),a("p",[t._v("Netty可谓是框架中精品中的极品，要用一张图或者一段话来总结概括不太可能，所以下面我仅分析一下Netty框架的架构模型。在下一篇文章再继续深入探究Netty。\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/6/30/17305cc0641d4ed5?w=855&h=726&f=png&s=400825",alt:"在这里插入图片描述"}}),t._v("\n这个架构实际上跟多Reactor多线程模型比较像。")]),t._v(" "),a("blockquote",[a("p",[t._v("1、BossGroup相当于mainReactor，负责建立连接并且把连接注册到WorkGroup中。WorkGroup负责处理连接对应的读写事件。")])]),t._v(" "),a("blockquote",[a("p",[t._v("2、BossGroup和WorkGroup是两个线程池，里面有多个NioEventGroup(实际上是线程)，默认BossGroup和WorkGroup里的线程数是cpu核数的两倍（源码中有体现）。")])]),t._v(" "),a("blockquote",[a("p",[t._v("3、每一个NioEventGroup都是一个无限循环，负责监听相对应的事件。")])]),t._v(" "),a("blockquote",[a("p",[t._v("4、Pipeline(通道)里包含多个ChannelHandler(业务处理)，按顺序执行。")])]),t._v(" "),a("h1",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[t._v("#")]),t._v(" 写在最后")]),t._v(" "),a("p",[t._v("其实上面的这些模型都只是一种思想，很多人可能觉得学习思想不是很重要。实际上要学习一门技术，要先有天上飞的理论才有落地的产品。世界上的事物大多都是如此。")]),t._v(" "),a("p",[t._v("最后借用大神"),a("strong",[t._v("Doug Lea")]),t._v("的名言：")]),t._v(" "),a("blockquote",[a("p",[t._v("分享知识和分享苹果是不一样的，苹果会越分越少，而自己的知识并不会因为给了别人就减少了，知识的分享更能激荡出不一样的火花。")])]),t._v(" "),a("p",[a("strong",[t._v("创作不易")]),t._v("，觉得有用就"),a("strong",[t._v("点个赞")]),t._v("吧。")]),t._v(" "),a("p",[t._v("下一篇讲Netty框架，想第一时间看到我更新的文章，可以微信搜索公众号「"),a("code",[t._v("java技术爱好者")]),t._v("」，"),a("strong",[t._v("拒绝做一条咸鱼，我是一个努力让大家记住的程序员。我们下期再见！！！")]),t._v(" "),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/6/30/17305cc08a7ed5d7?w=1180&h=528&f=png&s=152520",alt:"在这里插入图片描述"}})]),t._v(" "),a("blockquote",[a("p",[t._v("能力有限，如果有什么错误或者不当之处，请大家批评指正，一起学习交流！")])])])}),[],!1,null,null,null);r.default=o.exports}}]);