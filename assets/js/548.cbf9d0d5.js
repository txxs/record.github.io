(window.webpackJsonp=window.webpackJsonp||[]).push([[548],{958:function(a,n,e){"use strict";e.r(n);var t=e(13),s=Object(t.a)({},(function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[a._v("#")]),a._v(" 目录")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E6%A8%A1%E5%9D%97%E9%97%B4%E7%9A%84%E8%B0%83%E7%94%A8"}},[a._v("模块间的调用")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%E5%A4%9A%E7%BA%BF%E7%A8%8B%E4%B8%AD%E7%9A%84%E5%9B%9E%E8%B0%83"}},[a._v("多线程中的“回调”")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#java%E5%9B%9E%E8%B0%83%E6%9C%BA%E5%88%B6%E5%AE%9E%E6%88%98"}},[a._v("Java回调机制实战")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E5%AE%9E%E4%BE%8B%E4%B8%80-%EF%BC%9A-%E5%90%8C%E6%AD%A5%E8%B0%83%E7%94%A8"}},[a._v("实例一 ： 同步调用")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#11-%E5%90%8C%E6%AD%A5%E8%B0%83%E7%94%A8%E4%BB%A3%E7%A0%81"}},[a._v("1.1 同步调用代码")])])])])])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%E5%AE%9E%E4%BE%8B%E4%BA%8C%EF%BC%9A%E7%94%B1%E6%B5%85%E5%85%A5%E6%B7%B1"}},[a._v("实例二：由浅入深")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%E5%AE%9E%E4%BE%8B%E4%B8%89%EF%BC%9Atom%E5%81%9A%E9%A2%98"}},[a._v("实例三：Tom做题")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%E5%8F%82%E8%80%83%E6%96%87%E7%AB%A0"}},[a._v("参考文章")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7"}},[a._v("微信公众号")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#java%E6%8A%80%E6%9C%AF%E6%B1%9F%E6%B9%96"}},[a._v("Java技术江湖")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%E4%B8%AA%E4%BA%BA%E5%85%AC%E4%BC%97%E5%8F%B7%EF%BC%9A%E9%BB%84%E5%B0%8F%E6%96%9C"}},[a._v("个人公众号：黄小斜")])])])])]),a._v(" "),e("hr"),a._v(" "),e("h2",{attrs:{id:"title-夯实java基础系列11-深入理解java中的回调机制date-2019-9-11-15-56-26-文章生成时间-一般不改categories-java技术江湖-java基础tags-回调机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#title-夯实java基础系列11-深入理解java中的回调机制date-2019-9-11-15-56-26-文章生成时间-一般不改categories-java技术江湖-java基础tags-回调机制"}},[a._v("#")]),a._v(" title: 夯实Java基础系列11：深入理解Java中的回调机制\ndate: 2019-9-11 15:56:26 # 文章生成时间，一般不改\ncategories:\n- Java技术江湖\n- Java基础\ntags:\n- 回调机制")]),a._v(" "),e("p",[a._v("本系列文章将整理到我在GitHub上的《Java面试指南》仓库，更多精彩内容请到我的仓库里查看")]),a._v(" "),e("blockquote",[e("p",[a._v("https://github.com/h2pl/Java-Tutorial")])]),a._v(" "),e("p",[a._v("喜欢的话麻烦点下Star哈")]),a._v(" "),e("p",[a._v("文章首发于我的个人博客：")]),a._v(" "),e("blockquote",[e("p",[a._v("www.how2playlife.com")])]),a._v(" "),e("p",[a._v("本文是微信公众号【Java技术江湖】的《夯实Java基础系列博文》其中一篇，本文部分内容来源于网络，为了把本文主题讲得清晰透彻，也整合了很多我认为不错的技术博客内容，引用其中了一些比较好的博客文章，如有侵权，请联系作者。\n该系列博文会告诉你如何从入门到进阶，一步步地学习Java基础知识，并上手进行实战，接着了解每个Java知识点背后的实现原理，更完整地了解整个Java技术体系，形成自己的知识框架。为了更好地总结和检验你的学习成果，本系列文章也会提供每个知识点对应的面试题以及参考答案。")]),a._v(" "),e("p",[a._v("如果对本系列文章有什么建议，或者是有什么疑问的话，也可以关注公众号【Java技术江湖】联系作者，欢迎你参与本系列博文的创作和修订。")]),a._v(" "),e("h2",{attrs:{id:"模块间的调用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块间的调用"}},[a._v("#")]),a._v(" 模块间的调用")]),a._v(" "),e("p",[a._v("本部分摘自https://www.cnblogs.com/xrq730/p/6424471.html")]),a._v(" "),e("p",[a._v("在一个应用系统中，无论使用何种语言开发，必然存在模块之间的调用，调用的方式分为几种：")]),a._v(" "),e("p",[a._v("（1）同步调用")]),a._v(" "),e("blockquote",[e("p",[a._v("同步调用是最基本并且最简单的一种调用方式，类A的方法a()调用类B的方法b()，一直等待b()方法执行完毕，a()方法继续往下走。这种调用方式适用于方法b()执行时间不长的情况，因为b()方法执行时间一长或者直接阻塞的话，a()方法的余下代码是无法执行下去的，这样会造成整个流程的阻塞。")])]),a._v(" "),e("p",[a._v("（2）异步调用")]),a._v(" "),e("blockquote",[e("p",[a._v("异步调用是为了解决同步调用可能出现阻塞，导致整个流程卡住而产生的一种调用方式。类A的方法方法a()通过新起线程的方式调用类B的方法b()，代码接着直接往下执行，这样无论方法b()执行时间多久，都不会阻塞住方法a()的执行。")]),a._v(" "),e("p",[a._v("但是这种方式，由于方法a()不等待方法b()的执行完成，在方法a()需要方法b()执行结果的情况下（视具体业务而定，有些业务比如启异步线程发个微信通知、刷新一个缓存这种就没必要），必须通过一定的方式对方法b()的执行结果进行监听。")]),a._v(" "),e("p",[a._v("在Java中，可以使用Future+Callable的方式做到这一点，具体做法可以参见我的这篇文章Java多线程21：多线程下其他组件之CyclicBarrier、Callable、Future和FutureTask。")])]),a._v(" "),e("p",[a._v("（3）回调")]),a._v(" "),e("p",[a._v("1、什么是回调？\n一般来说，模块之间都存在一定的调用关系，从调用方式上看，可以分为三类同步调用、异步调用和回调。同步调用是一种阻塞式调用，即在函数A的函数体里通过书写函数B的函数名来调用之，使内存中对应函数B的代码得以执行。异步调用是一种类似消息或事件的机制解决了同步阻塞的问题，例如 A通知 B后，他们各走各的路，互不影响，不用像同步调用那样， A通知 B后，非得等到 B走完后， A才继续走 。回调是一种双向的调用模式，也就是说，被调用的接口被调用时也会调用对方的接口，例如A要调用B，B在执行完又要调用A。")]),a._v(" "),e("p",[a._v("2、回调的用途\n回调一般用于层间协作，上层将本层函数安装在下层，这个函数就是回调，而下层在一定条件下触发回调。例如作为一个驱动，是一个底层，他在收到一个数据时，除了完成本层的处理工作外，还将进行回调，将这个数据交给上层应用层来做进一步处理，这在分层的数据通信中很普遍。")]),a._v(" "),e("h2",{attrs:{id:"多线程中的-回调"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多线程中的-回调"}},[a._v("#")]),a._v(" 多线程中的“回调”")]),a._v(" "),e("p",[a._v("Java多线程中可以通过callable和future或futuretask结合来获取线程执行后的返回值。实现方法是通过get方法来调用callable的call方法获取返回值。")]),a._v(" "),e("p",[a._v("其实这种方法本质上不是回调，回调要求的是任务完成以后被调用者主动回调调用者的接口。而这里是调用者主动使用get方法阻塞获取返回值。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('public class 多线程中的回调 {\n    //这里简单地使用future和callable实现了线程执行完后\n    public static void main(String[] args) throws ExecutionException, InterruptedException {\n        ExecutorService executor = Executors.newCachedThreadPool();\n        Future<String> future = executor.submit(new Callable<String>() {\n            @Override\n            public String call() throws Exception {\n                System.out.println("call");\n                TimeUnit.SECONDS.sleep(1);\n                return "str";\n            }\n        });\n        //手动阻塞调用get通过call方法获得返回值。\n        System.out.println(future.get());\n        //需要手动关闭，不然线程池的线程会继续执行。\n        executor.shutdown();\n\n    //使用futuretask同时作为线程执行单元和数据请求单元。\n    FutureTask<Integer> futureTask = new FutureTask(new Callable<Integer>() {\n        @Override\n        public Integer call() throws Exception {\n            System.out.println("dasds");\n            return new Random().nextInt();\n        }\n    });\n    new Thread(futureTask).start();\n    //阻塞获取返回值\n    System.out.println(futureTask.get());\n}\n@Test\npublic void test () {\n    Callable callable = new Callable() {\n        @Override\n        public Object call() throws Exception {\n            return null;\n        }\n    };\n    FutureTask futureTask = new FutureTask(callable);\n\n}\n}\n')])])]),e("h2",{attrs:{id:"java回调机制实战"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java回调机制实战"}},[a._v("#")]),a._v(" Java回调机制实战")]),a._v(" "),e("p",[a._v("曾经自己偶尔听说过回调机制，隐隐约约能够懂一些意思，但是当让自己写一个简单的示例程序时，自己就傻眼了。随着工作经验的增加，自己经常听到这儿使用了回调，那儿使用了回调，自己是时候好好研究一下Java回调机制了。网上关于Java回调的文章一抓一大把，但是看完总是云里雾里，不知所云，特别是看到抓取别人的代码走两步时，总是现眼。于是自己决定写一篇关于Java机制的文章，以方便大家和自己更深入的学习Java回调机制。")]),a._v(" "),e("p",[a._v("首先，什么是回调函数，引用百度百科的解释：回调函数就是一个通过函数指针调用的函数。如果你把函数的指针（地址）作为参数传递给另一个函数，当这个指针被用来调用其所指向的函数时，我们就说这是回调函数。回调函数不是由该函数的实现方直接调用，而是在特定的事件或条件发生时由另外的一方调用的，用于对该事件或条件进行响应[2].")]),a._v(" "),e("p",[a._v("不好意思，上述解释我看了好几遍，也没理解其中深刻奥秘，相信一些读者你也一样。光说不练假把式，咱们还是以实战理解脉络。")]),a._v(" "),e("h3",{attrs:{id:"实例一-同步调用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实例一-同步调用"}},[a._v("#")]),a._v(" 实例一 ： 同步调用")]),a._v(" "),e("p",[a._v("本文以底层服务BottomService和上层服务UpperService为示例，利用上层服务调用底层服务，整体执行过程如下：")]),a._v(" "),e("p",[a._v("第一步: 执行UpperService.callBottomService();")]),a._v(" "),e("p",[a._v("第二步: 执行BottomService.bottom();")]),a._v(" "),e("p",[a._v("第三步:执行UpperService.upperTaskAfterCallBottomService()")]),a._v(" "),e("h4",{attrs:{id:"_1-1-同步调用代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-同步调用代码"}},[a._v("#")]),a._v(" 1.1 同步调用代码")]),a._v(" "),e("p",[a._v("同步调用时序图：")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/3796264-6a5b5b898aa3930e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1031/format/webp",alt:""}})]),a._v(" "),e("p",[a._v("同步调用时序图")]),a._v(" "),e("p",[e("strong",[a._v("1.1.1 底层服务类:BottomService.java")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('\npackage synchronization.demo;\n\n/**\n\n* Created by lance on 2017/1/19.\n\n*/\n\npublic class BottomService {\n\npublic String bottom(String param) {\n\ntry { //  模拟底层处理耗时，上层服务需要等待\n\nThread.sleep(3000);\n\n} catch (InterruptedException e) {\n\ne.printStackTrace();\n\n}\n\nreturn param +" BottomService.bottom() execute --\x3e";\n\n}\n\n}\n\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br"),e("span",{staticClass:"line-number"},[a._v("19")]),e("br"),e("span",{staticClass:"line-number"},[a._v("20")]),e("br"),e("span",{staticClass:"line-number"},[a._v("21")]),e("br"),e("span",{staticClass:"line-number"},[a._v("22")]),e("br"),e("span",{staticClass:"line-number"},[a._v("23")]),e("br"),e("span",{staticClass:"line-number"},[a._v("24")]),e("br"),e("span",{staticClass:"line-number"},[a._v("25")]),e("br"),e("span",{staticClass:"line-number"},[a._v("26")]),e("br"),e("span",{staticClass:"line-number"},[a._v("27")]),e("br"),e("span",{staticClass:"line-number"},[a._v("28")]),e("br"),e("span",{staticClass:"line-number"},[a._v("29")]),e("br")])]),e("p",[e("strong",[a._v("1.1.2 上层服务接口: UpperService.java")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("package synchronization.demo;\n\n/**\n\n* Created by lance on 2017/1/19.\n\n*/\n\npublic interface UpperService {\n\npublic void upperTaskAfterCallBottomService(String upperParam);\n\npublic String callBottomService(final String param);\n\n}\n\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br")])]),e("p",[e("strong",[a._v("1.1.3 上层服务接口实现类:UpperServiceImpl.java")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('package synchronization.demo;\n\n/**\n\n* Created by lance on 2017/1/19.\n\n*/\n\npublic class UpperServiceImpl implements UpperService {\n\nprivate BottomService bottomService;\n\n@Override\n\npublic void upperTaskAfterCallBottomService(String upperParam) {\n\nSystem.out.println(upperParam + " upperTaskAfterCallBottomService() execute.");\n\n}\n\npublic UpperServiceImpl(BottomService bottomService) {\n\nthis.bottomService = bottomService;\n\n}\n\n@Override\n\npublic String callBottomService(final String param) {\n\nreturn bottomService.bottom(param + " callBottomService.bottom() execute --\x3e ");\n\n}\n\n}\n\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br"),e("span",{staticClass:"line-number"},[a._v("19")]),e("br"),e("span",{staticClass:"line-number"},[a._v("20")]),e("br"),e("span",{staticClass:"line-number"},[a._v("21")]),e("br"),e("span",{staticClass:"line-number"},[a._v("22")]),e("br"),e("span",{staticClass:"line-number"},[a._v("23")]),e("br"),e("span",{staticClass:"line-number"},[a._v("24")]),e("br"),e("span",{staticClass:"line-number"},[a._v("25")]),e("br"),e("span",{staticClass:"line-number"},[a._v("26")]),e("br"),e("span",{staticClass:"line-number"},[a._v("27")]),e("br"),e("span",{staticClass:"line-number"},[a._v("28")]),e("br"),e("span",{staticClass:"line-number"},[a._v("29")]),e("br"),e("span",{staticClass:"line-number"},[a._v("30")]),e("br"),e("span",{staticClass:"line-number"},[a._v("31")]),e("br"),e("span",{staticClass:"line-number"},[a._v("32")]),e("br"),e("span",{staticClass:"line-number"},[a._v("33")]),e("br"),e("span",{staticClass:"line-number"},[a._v("34")]),e("br"),e("span",{staticClass:"line-number"},[a._v("35")]),e("br"),e("span",{staticClass:"line-number"},[a._v("36")]),e("br")])]),e("p",[e("strong",[a._v("1.1.4 Test测试类:Test.java")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('package synchronization.demo;\n\nimport java.util.Date;\n\n/**\n\n* Created by lance on 2017/1/19.\n\n*/\n\npublic class Test {\n\npublic static void main(String[] args) {\n\nBottomService bottomService = new BottomService();\n\nUpperService upperService = new UpperServiceImpl(bottomService);\n\nSystem.out.println("=============== callBottomService start ==================:" + new Date());\n\nString result = upperService.callBottomService("callBottomService start --\x3e ");\n\n//upperTaskAfterCallBottomService执行必须等待callBottomService()调用BottomService.bottom()方法返回后才能够执行\n\nupperService.upperTaskAfterCallBottomService(result);\n\nSystem.out.println("=============== callBottomService end ====================:" + new Date());\n\n}\n\n}\n\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br"),e("span",{staticClass:"line-number"},[a._v("19")]),e("br"),e("span",{staticClass:"line-number"},[a._v("20")]),e("br"),e("span",{staticClass:"line-number"},[a._v("21")]),e("br"),e("span",{staticClass:"line-number"},[a._v("22")]),e("br"),e("span",{staticClass:"line-number"},[a._v("23")]),e("br"),e("span",{staticClass:"line-number"},[a._v("24")]),e("br"),e("span",{staticClass:"line-number"},[a._v("25")]),e("br"),e("span",{staticClass:"line-number"},[a._v("26")]),e("br"),e("span",{staticClass:"line-number"},[a._v("27")]),e("br"),e("span",{staticClass:"line-number"},[a._v("28")]),e("br"),e("span",{staticClass:"line-number"},[a._v("29")]),e("br"),e("span",{staticClass:"line-number"},[a._v("30")]),e("br"),e("span",{staticClass:"line-number"},[a._v("31")]),e("br"),e("span",{staticClass:"line-number"},[a._v("32")]),e("br")])]),e("p",[e("strong",[a._v("1.1.5 输出结果:")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("=============== callBottomService start ==================:Thu Jan 19 14:59:58 CST 2017\n\ncallBottomService start --\x3e  callBottomService.bottom() execute --\x3e  BottomService.bottom() execute --\x3e upperTaskAfterCallBottomService() execute.\n\n=============== callBottomService end ====================:Thu Jan 19 15:00:01 CST 2017\n\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br")])]),e("p",[a._v("注意输出结果：")]),a._v(" "),e("p",[a._v("是同步方式，Test调用callBottomService()等待执行结束，然后再执行下一步，即执行结束。callBottomService开始执行时间为Thu Jan 19 14:59:58 CST 2017，执行结束时间为Thu Jan 19 15:00:01 CST 2017，耗时3秒钟，与模拟的耗时时间一致，即3000毫秒。")]),a._v(" "),e("h2",{attrs:{id:"实例二-由浅入深"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实例二-由浅入深"}},[a._v("#")]),a._v(" 实例二：由浅入深")]),a._v(" "),e("p",[a._v("前几天公司面试有问道java回调的问题，因为这方面也没有太多研究，所以回答的含糊不清，这回特意来补习一下。看了看网上的回调解释和例子，都那么的绕口，得看半天才能绕回来，其实吧，回调是个很简单的机制。在这里我用简单的语言先来解释一下：假设有两个类，分别是A和B，在A中有一个方法a()，B中有一个方法b()；在A里面调用B中的方法b()，而方法b()中调用了方法a()，这样子就同时实现了b()和a()两个方法的功能。")]),a._v(" "),e("p",[a._v("疑惑：为啥这么麻烦，我直接在类A中的B.b()方法下调用a()方法就行了呗。\n解答：回调更像是一个约定，就是如果我调用了b()方法，那么就必须要回调，而不需要显示调用\n一、Java的回调-浅\n我们用例子来解释：小明和小李相约一起去吃早饭，但是小李起的有点晚要先洗漱，等小李洗漱完成后，通知小明再一起去吃饭。小明就是类A，小李就是类B。一起去吃饭这个事件就是方法a(),小李去洗漱就是方法b()。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('public class XiaoMing { \n   //小明和小李一起吃饭\n   public void eatFood() {\n      XiaoLi xl = new XiaoLi();\n      //A调用B的方法\n      xl.washFace();\n   }\n \n   public void eat() {\n      System.out.print("小明和小李一起去吃大龙虾");\n   }\n}\n那么怎么让小李洗漱完后在通知小明一起去吃饭呢\n\npublic class XiaoMing { \n   //小明和小李一起吃饭\n   public void eatFood() {\n      XiaoLi xl = new XiaoLi();\n      //A调用B的方法\n      xl.washFace();\n      eat();\n   }\n \n   public void eat() {\n      System.out.print("小明和小李一起去吃大龙虾");\n   }\n}\n')])])]),e("p",[a._v("不过上面已经说过了这个不是回调函数，所以不能这样子，正确的方式如下")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('public class XiaoLi{//小李\n   public void washFace() {\n    System.out.print("小李要洗漱");\n    XiaoMing xm = new XiaoMing();\n        //B调用A的方法\n    xm.eat();//洗漱完后，一起去吃饭\n   }\n}\n')])])]),e("p",[a._v("这样子就可以实现washFace()同时也能实现eat()。小李洗漱完后，再通知小明一起去吃饭，这就是回调。")]),a._v(" "),e("p",[a._v("二、Java的回调-中\n可是细心的伙伴可能会发现，小李的代码完全写死了，这样子的场合可能适用和小明一起去吃饭，可是假如小李洗漱完不吃饭了，想和小王上网去，这样子就不适用了。其实上面是伪代码，仅仅是帮助大家理解的，真正情况下是需要利用接口来设置回调的。现在我们继续用小明和小李去吃饭的例子来讲讲接口是如何使用的。")]),a._v(" "),e("p",[a._v("小明和小李相约一起去吃早饭，但是小李起的有点晚要先洗漱，等小李洗漱完成后，通知小明再一起去吃饭。小明就是类A，小李就是类B。不同的是我们新建一个吃饭的接口EatRice，接口中有个抽象方法eat()。在小明中调用这个接口，并实现eat()；小李声明这个接口对象，并且调用这个接口的抽象方法。这里可能有点绕口，不过没关系，看看例子就很清楚了。")]),a._v(" "),e("p",[a._v("EatRice接口：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('public interface EatRice {\n   public void eat(String food);\n}\n小明：\n\npublic class XiaoMing implements EatRice{//小明\n    \n   //小明和小李一起吃饭\n   public void eatFood() {\n    XiaoLi xl = new XiaoLi();\n    //A调用B的方法\n    xl.washFace("大龙虾", this);//this指的是小明这个类实现的EatRice接口\n   }\n \n   @Override\n   public void eat(String food) {\n    // TODO Auto-generated method stub\n    System.out.println("小明和小李一起去吃" + food);\n   }\n}\n小李:\n\npublic class XiaoLi{//小李\n   public void washFace(String food,EatRice er) {\n    System.out.println("小李要洗漱");\n        //B调用了A的方法\n    er.eat(food);\n   }\n}\n测试Demo:\n\npublic class demo {\n   public static void main(String args[]) {\n    XiaoMing xm = new XiaoMing();\n    xm.eatFood();\n   }\n}\n')])])]),e("p",[a._v("测试结果：")]),a._v(" "),e("p",[a._v("这样子就通过接口的形式实现了软编码。通过接口的形式我可以实现小李洗漱完后，和小王一起去上网。代码如下")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('public class XiaoWang implements EatRice{//小王\n    \n   //小王和小李一起去上网\n   public void eatFood() {\n    XiaoLi xl = new XiaoLi();\n    //A调用B的方法\n    xl.washFace("轻舞飞扬上网", this);\n   }\n \n   @Override\n   public void eat(String bar) {\n    // TODO Auto-generated method stub\n    System.out.println("小王和小李一起去" + bar);\n   }\n}\n')])])]),e("h2",{attrs:{id:"实例三-tom做题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实例三-tom做题"}},[a._v("#")]),a._v(" 实例三：Tom做题")]),a._v(" "),e("p",[a._v("数学老师让Tom做一道题，并且Tom做题期间数学老师不用盯着Tom，而是在玩手机，等Tom把题目做完后再把答案告诉老师。")]),a._v(" "),e("blockquote",[e("p",[a._v("1 数学老师需要Tom的一个引用，然后才能将题目发给Tom。")]),a._v(" "),e("p",[a._v("2 数学老师需要提供一个方法以便Tom做完题目以后能够将答案告诉他。")]),a._v(" "),e("p",[a._v("3 Tom需要数学老师的一个引用，以便Tom把答案给这位老师，而不是隔壁的体育老师。")])]),a._v(" "),e("p",[a._v("回调接口，可以理解为老师接口")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("    //回调指的是A调用B来做一件事，B做完以后将结果告诉给A，这期间A可以做别的事情。\n    //这个接口中有一个方法，意为B做完题目后告诉A时使用的方法。\n    //所以我们必须提供这个接口以便让B来回调。\n    //回调接口，\n    public interface CallBack {\n        void tellAnswer(int res);\n    }\n")])])]),e("p",[a._v("数学老师类")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('    //老师类实例化回调接口，即学生写完题目之后通过老师的提供的方法进行回调。\n    //那么学生如何调用到老师的方法呢，只要在学生类的方法中传入老师的引用即可。\n    //而老师需要指定学生答题，所以也要传入学生的实例。\npublic class Teacher implements CallBack{\n    private Student student;\n\n    Teacher(Student student) {\n        this.student = student;\n    }\n\n    void askProblem (Student student, Teacher teacher) {\n        //main方法是主线程运行，为了实现异步回调，这里开启一个线程来操作\n        new Thread(new Runnable() {\n            @Override\n            public void run() {\n                student.resolveProblem(teacher);\n            }\n        }).start();\n        //老师让学生做题以后，等待学生回答的这段时间，可以做别的事，比如玩手机.\\\n        //而不需要同步等待，这就是回调的好处。\n        //当然你可以说开启一个线程让学生做题就行了，但是这样无法让学生通知老师。\n        //需要另外的机制去实现通知过程。\n        // 当然，多线程中的future和callable也可以实现数据获取的功能。\n        for (int i = 1;i < 4;i ++) {\n            System.out.println("等学生回答问题的时候老师玩了 " + i + "秒的手机");\n        }\n    }\n\n    @Override\n    public void tellAnswer(int res) {\n        System.out.println("the answer is " + res);\n    }\n}\n')])])]),e("p",[a._v("学生接口")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("    //学生的接口，解决问题的方法中要传入老师的引用，否则无法完成对具体实例的回调。\n    //写为接口的好处就是，很多个学生都可以实现这个接口，并且老师在提问题时可以通过\n    //传入List<Student>来聚合学生，十分方便。\npublic interface Student {\n    void resolveProblem (Teacher teacher);\n}\n")])])]),e("p",[a._v("学生Tom")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('public class Tom implements Student{\n\n    @Override\n    public void resolveProblem(Teacher teacher) {\n        try {\n            //学生思考了3秒后得到了答案，通过老师提供的回调方法告诉老师。\n            Thread.sleep(3000);\n            System.out.println("work out");\n            teacher.tellAnswer(111);\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n    }\n')])])]),e("p",[a._v("测试类")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("public class Test {\n    public static void main(String[] args) {\n        //测试\n        Student tom = new Tom();\n        Teacher lee = new Teacher(tom);\n        lee.askProblem(tom, lee);\n        //结果\n//        等学生回答问题的时候老师玩了 1秒的手机\n//        等学生回答问题的时候老师玩了 2秒的手机\n//        等学生回答问题的时候老师玩了 3秒的手机\n//        work out\n//        the answer is 111\n    }\n}\n")])])]),e("h2",{attrs:{id:"参考文章"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[a._v("#")]),a._v(" 参考文章")]),a._v(" "),e("p",[a._v("https://blog.csdn.net/fengye454545/article/details/80198446\nhttps://blog.csdn.net/xiaanming/article/details/8703708/\nhttps://www.cnblogs.com/prayjourney/p/9667835.html\nhttps://blog.csdn.net/qq_25652949/article/details/86572948\nhttps://my.oschina.net/u/3703858/blog/1798627")]),a._v(" "),e("h2",{attrs:{id:"微信公众号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#微信公众号"}},[a._v("#")]),a._v(" 微信公众号")]),a._v(" "),e("h3",{attrs:{id:"java技术江湖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java技术江湖"}},[a._v("#")]),a._v(" Java技术江湖")]),a._v(" "),e("p",[a._v("如果大家想要实时关注我更新的文章以及分享的干货的话，可以关注我的公众号【Java技术江湖】一位阿里 Java 工程师的技术小站，作者黄小斜，专注 Java 相关技术：SSM、SpringBoot、MySQL、分布式、中间件、集群、Linux、网络、多线程，偶尔讲点Docker、ELK，同时也分享技术干货和学习经验，致力于Java全栈开发！")]),a._v(" "),e("p",[e("strong",[a._v("Java工程师必备学习资源:")]),a._v(" 一些Java工程师常用学习资源，关注公众号后，后台回复关键字 "),e("strong",[a._v("“Java”")]),a._v(" 即可免费无套路获取。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190805090108984.jpg",alt:"我的公众号"}})]),a._v(" "),e("h3",{attrs:{id:"个人公众号-黄小斜"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#个人公众号-黄小斜"}},[a._v("#")]),a._v(" 个人公众号：黄小斜")]),a._v(" "),e("p",[a._v("作者是 985 硕士，蚂蚁金服 JAVA 工程师，专注于 JAVA 后端技术栈：SpringBoot、MySQL、分布式、中间件、微服务，同时也懂点投资理财，偶尔讲点算法和计算机理论基础，坚持学习和写作，相信终身学习的力量！")]),a._v(" "),e("p",[e("strong",[a._v("程序员3T技术学习资源：")]),a._v(" 一些程序员学习技术的资源大礼包，关注公众号后，后台回复关键字 "),e("strong",[a._v("“资料”")]),a._v(" 即可免费无套路获取。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190829222750556.jpg",alt:""}})])])}),[],!1,null,null,null);n.default=s.exports}}]);