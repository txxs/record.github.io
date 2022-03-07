(window.webpackJsonp=window.webpackJsonp||[]).push([[585],{999:function(t,a,v){"use strict";v.r(a);var _=v(13),s=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"table-of-contents"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[t._v("#")]),t._v(" Table of Contents")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#1%E5%A4%9A%E7%BA%BF%E7%A8%8B%E7%9A%84%E4%BC%98%E7%82%B9"}},[t._v("1多线程的优点")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#11%E8%B5%84%E6%BA%90%E5%88%A9%E7%94%A8%E7%8E%87%E6%9B%B4%E5%A5%BD%E6%A1%88%E4%BE%8B"}},[t._v("1.1资源利用率更好案例")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#12%E7%A8%8B%E5%BA%8F%E5%93%8D%E5%BA%94%E6%9B%B4%E5%BF%AB"}},[t._v("1.2程序响应更快")])])])]),t._v(" "),v("li",[v("a",{attrs:{href:"#2%E5%A4%9A%E7%BA%BF%E7%A8%8B%E7%9A%84%E4%BB%A3%E4%BB%B7"}},[t._v("2多线程的代价")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#21%E8%AE%BE%E8%AE%A1%E6%9B%B4%E5%A4%8D%E6%9D%82"}},[t._v("2.1设计更复杂")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#22%E4%B8%8A%E4%B8%8B%E6%96%87%E5%88%87%E6%8D%A2%E7%9A%84%E5%BC%80%E9%94%80"}},[t._v("2.2上下文切换的开销")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#23%E5%A2%9E%E5%8A%A0%E8%B5%84%E6%BA%90%E6%B6%88%E8%80%97"}},[t._v("2.3增加资源消耗")])])])]),t._v(" "),v("li",[v("a",{attrs:{href:"#3%E7%AB%9E%E6%80%81%E6%9D%A1%E4%BB%B6%E4%B8%8E%E4%B8%B4%E7%95%8C%E5%8C%BA"}},[t._v("3竞态条件与临界区")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#4%E7%BA%BF%E7%A8%8B%E7%9A%84%E8%BF%90%E8%A1%8C%E4%B8%8E%E5%88%9B%E5%BB%BA"}},[v("strong",[t._v("4")]),t._v("线程的运行与创建")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#5%E7%BA%BF%E7%A8%8B%E7%9A%84%E7%8A%B6%E6%80%81%E5%92%8C%E4%BC%98%E5%85%88%E7%BA%A7"}},[t._v("5线程的状态和优先级")])])]),t._v(" "),v("p",[t._v("本系列文章将整理到我在GitHub上的《Java面试指南》仓库，更多精彩内容请到我的仓库里查看")]),t._v(" "),v("blockquote",[v("p",[t._v("https://github.com/h2pl/Java-Tutorial")])]),t._v(" "),v("p",[t._v("喜欢的话麻烦点下Star哈")]),t._v(" "),v("p",[t._v("文章同步发于我的个人博客：")]),t._v(" "),v("blockquote",[v("p",[t._v("www.how2playlife.com")])]),t._v(" "),v("p",[t._v("本文是微信公众号【Java技术江湖】的《Java并发指南》其中一篇，本文大部分内容来源于网络，为了把本文主题讲得清晰透彻，也整合了很多我认为不错的技术博客内容，引用其中了一些比较好的博客文章，如有侵权，请联系作者。")]),t._v(" "),v("p",[t._v("该系列博文会告诉你如何全面深入地学习Java并发技术，从Java多线程基础，再到并发编程的基础知识，从Java并发包的入门和实战，再到JUC的源码剖析，一步步地学习Java并发编程，并上手进行实战，以便让你更完整地了解整个Java并发编程知识体系，形成自己的知识框架。")]),t._v(" "),v("p",[t._v("为了更好地总结和检验你的学习成果，本系列文章也会提供一些对应的面试题以及参考答案。")]),t._v(" "),v("p",[t._v("如果对本系列文章有什么建议，或者是有什么疑问的话，也可以关注公众号【Java技术江湖】联系作者，欢迎你参与本系列博文的创作和修订。\n")]),t._v(" "),v("h2",{attrs:{id:"_1多线程的优点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1多线程的优点"}},[t._v("#")]),t._v(" 1多线程的优点")]),t._v(" "),v("ol",[v("li",[v("ul",[v("li",[t._v("资源利用率更好")])])]),t._v(" "),v("li",[v("ul",[v("li",[t._v("程序设计在某些情况下更简单")])])]),t._v(" "),v("li",[v("ul",[v("li",[t._v("程序响应更快")])])])]),t._v(" "),v("h3",{attrs:{id:"_1-1资源利用率更好案例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1资源利用率更好案例"}},[t._v("#")]),t._v(" 1.1资源利用率更好案例")]),t._v(" "),v("p",[v("strong",[t._v("方式1")]),t._v("\n从磁盘读取一个文件需要5秒，处理一个文件需要2秒。处理两个文件则需要14秒")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("1    5秒读取文件A2    2秒处理文件A3    5秒读取文件B4    2秒处理文件B5    ---------------------6    总共需要14秒\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("p",[v("strong",[t._v("方式2")]),t._v("\n从磁盘中读取文件的时候，大部分的CPU非常的空闲。它可以做一些别的事情。通过改变操作的顺序，就能够更好的使用CPU资源。看下面的顺序：")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("1    5秒读取文件A2    5秒读取文件B + 2秒处理文件A3    2秒处理文件B4    ---------------------5    总共需要12秒\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("p",[v("strong",[t._v("总结：多线程并发效率提高2秒")])]),t._v(" "),v("h3",{attrs:{id:"_1-2程序响应更快"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2程序响应更快"}},[t._v("#")]),t._v(" 1.2程序响应更快")]),t._v(" "),v("p",[t._v("设想一个服务器应用，它在某一个端口监听进来的请求。当一个请求到来时，它把请求传递给工作者线程(worker thread)，然后立刻返回去监听。而工作者线程则能够处理这个请求并发送一个回复给客户端。")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v(" while(server is active){\n        listenThread for request\n       hand request to workerThread\n    }\n")])])]),v("p",[t._v("这种方式，服务端线程迅速地返回去监听。因此，更多的客户端能够发送请求给服务端。这个服务也变得响应更快。")]),t._v(" "),v("h2",{attrs:{id:"_2多线程的代价"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2多线程的代价"}},[t._v("#")]),t._v(" 2多线程的代价")]),t._v(" "),v("h3",{attrs:{id:"_2-1设计更复杂"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1设计更复杂"}},[t._v("#")]),t._v(" 2.1设计更复杂")]),t._v(" "),v("p",[t._v("多线程一般都复杂。在多线程访问共享数据的时候，这部分代码需要特别的注意。线程之间的交互往往非常复杂。不正确的线程同步产生的错误非常难以被发现，并且重现以修复。")]),t._v(" "),v("h3",{attrs:{id:"_2-2上下文切换的开销"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2上下文切换的开销"}},[t._v("#")]),t._v(" 2.2上下文切换的开销")]),t._v(" "),v("p",[v("strong",[t._v("上下文切换")]),t._v("当CPU从执行一个线程切换到执行另外一个线程的时候，它需要先存储当前线程的本地的数据，程序指针等，然后载入另一个线程的本地数据，程序指针等，最后才开始执行。")]),t._v(" "),v("p",[t._v("CPU会在一个上下文中执行一个线程，然后切换到另外一个上下文中执行另外一个线程。")]),t._v(" "),v("p",[t._v("上下文切换并不廉价。如果没有必要，应该减少上下文切换的发生。")]),t._v(" "),v("h3",{attrs:{id:"_2-3增加资源消耗"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3增加资源消耗"}},[t._v("#")]),t._v(" 2.3增加资源消耗")]),t._v(" "),v("p",[v("strong",[t._v("每个线程需要消耗的资源：")])]),t._v(" "),v("p",[t._v("CPU，内存（维持它本地的堆栈），操作系统资源（管理线程）")]),t._v(" "),v("h2",{attrs:{id:"_3竞态条件与临界区"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3竞态条件与临界区"}},[t._v("#")]),t._v(" 3竞态条件与临界区")]),t._v(" "),v("p",[t._v("当多个线程竞争同一资源时，如果对资源的访问顺序敏感，就称存在竞态条件。导致竞态条件发生的代码区称作临界区。")]),t._v(" "),v("p",[v("strong",[t._v("多线程同时执行下面的代码可能会出错：")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("public class Counter {\n\tprotected long count = 0;\n \n\tpublic void add(long value) {\n\t\tthis.count = this.count + value;\n\t}\n}\n")])])]),v("p",[t._v("想象下线程A和B同时执行同一个Counter对象的add()方法，我们无法知道操作系统何时会在两个线程之间切换。JVM并不是将这段代码视为单条指令来执行的，而是按照下面的顺序")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("从内存获取 this.count 的值放到寄存器\n将寄存器中的值增加value\n将寄存器中的值写回内存\n \n \n \n观察线程A和B交错执行会发生什么\n \n\tthis.count = 0;\n   A:\t读取 this.count 到一个寄存器 (0)\n   B:\t读取 this.count 到一个寄存器 (0)\n   B: \t将寄存器的值加2\n   B:\t回写寄存器值(2)到内存. this.count 现在等于 2\n   A:\t将寄存器的值加3\n")])])]),v("p",[t._v("由于两个线程是交叉执行的，两个线程从内存中读出的初始值都是0。然后各自加了2和3，并分别写回内存。最终的值可能并不是期望的5，而是最后写回内存的那个线程的值，上面例子中最后写回内存可能是线程A，也可能是线程B")]),t._v(" "),v("h2",{attrs:{id:"_4线程的运行与创建"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4线程的运行与创建"}},[t._v("#")]),t._v(" "),v("strong",[t._v("4")]),t._v("线程的运行与创建")]),t._v(" "),v("p",[v("strong",[t._v("Java 创建线程对象有两种方法：")])]),t._v(" "),v("ul",[v("li",[t._v("继承 Thread 类创建线程对象")]),t._v(" "),v("li",[t._v("实现 Runnable 接口类创建线程对象")])]),t._v(" "),v("p",[v("strong",[t._v("注意：")])]),t._v(" "),v("p",[t._v("在java中，每次程序运行至少启动2个线程。一个是main线程，一个是垃圾收集线程。因为每当使用java命令执行一个类的时候，实际上都会启动一个jvm，每一个jvm实际上就是在操作系统中启动了一个进程。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181031104947230.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pob3U5MjA3ODYzMTI=,size_16,color_FFFFFF,t_70",alt:""}})]),t._v(" "),v("h2",{attrs:{id:"_5线程的状态和优先级"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5线程的状态和优先级"}},[t._v("#")]),t._v(" 5线程的状态和优先级")]),t._v(" "),v("p",[v("strong",[t._v("线程优先级")]),t._v("1 到 10 ，其中 1 是最低优先级，10 是最高优先级。")]),t._v(" "),v("p",[v("strong",[t._v("状态")])]),t._v(" "),v("ul",[v("li",[t._v("new（新建）")]),t._v(" "),v("li",[t._v("runnnable（可运行）")]),t._v(" "),v("li",[t._v("blocked（阻塞）")]),t._v(" "),v("li",[t._v("waiting（等待）")]),t._v(" "),v("li",[t._v("time waiting （定时等待）")]),t._v(" "),v("li",[t._v("terminated（终止）")])]),t._v(" "),v("p",[v("strong",[t._v("状态转换")])]),t._v(" "),v("p",[v("strong",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181031105627437.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pob3U5MjA3ODYzMTI=,size_16,color_FFFFFF,t_70",alt:""}})])]),t._v(" "),v("p",[v("strong",[t._v("线程状态流程如下：")])]),t._v(" "),v("ul",[v("li",[t._v("线程创建后，进入 new 状态")]),t._v(" "),v("li",[t._v("调用 start 或者 run 方法，进入 runnable 状态")]),t._v(" "),v("li",[t._v("JVM 按照线程优先级及时间分片等执行 runnable 状态的线程。开始执行时，进入 running 状态")]),t._v(" "),v("li",[t._v("如果线程执行 sleep、wait、join，或者进入 IO 阻塞等。进入 wait 或者 blocked 状态")]),t._v(" "),v("li",[t._v("线程执行完毕后，线程被线程队列移除。最后为 terminated 状态")])]),t._v(" "),v("p",[v("strong",[t._v("代码")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v('public class MyThreadInfo extends Thread {\n \n\t@Override // 可以省略\n\tpublic void run() {\n\t\tSystem.out.println("run");\n\t\t// System.exit(1);\n\t}\n \n\tpublic static void main(String[] args) {\n\t\tMyThreadInfo thread = new MyThreadInfo();\n\t\tthread.start();\n \n\t\tSystem.out.println("线程唯一标识符：" + thread.getId());\n\t\tSystem.out.println("线程名称：" + thread.getName());\n\t\tSystem.out.println("线程状态：" + thread.getState());\n\t\tSystem.out.println("线程优先级：" + thread.getPriority());\n\t}\n}\n \n结果：\n线程唯一标识符：9\n线程名称：Thread-0\nrun\n线程状态：RUNNABLE\n')])])])])}),[],!1,null,null,null);a.default=s.exports}}]);