(window.webpackJsonp=window.webpackJsonp||[]).push([[594],{986:function(n,s,a){"use strict";a.r(s);var r=a(13),t=Object(r.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"table-of-contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[n._v("#")]),n._v(" Table of Contents")]),n._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#forkjoin%E6%A1%86%E6%9E%B6%E4%BB%8B%E7%BB%8D"}},[n._v("Fork/Join框架介绍")])]),n._v(" "),a("li",[a("a",{attrs:{href:"#%E7%AE%80%E4%BB%8B"}},[n._v("简介")])]),n._v(" "),a("li",[a("a",{attrs:{href:"#%E5%B7%A5%E4%BD%9C%E7%AA%83%E5%8F%96%E7%AE%97%E6%B3%95%E4%BB%8B%E7%BB%8D"}},[n._v("工作窃取算法介绍")])])]),n._v(" "),a("p",[n._v("本文转自：https://www.imooc.com/article/24822")]),n._v(" "),a("p",[n._v("本系列文章将整理到我在GitHub上的《Java面试指南》仓库，更多精彩内容请到我的仓库里查看")]),n._v(" "),a("blockquote",[a("p",[n._v("https://github.com/h2pl/Java-Tutorial")])]),n._v(" "),a("p",[n._v("喜欢的话麻烦点下Star哈")]),n._v(" "),a("p",[n._v("文章同步发于我的个人博客：")]),n._v(" "),a("blockquote",[a("p",[n._v("www.how2playlife.com")])]),n._v(" "),a("p",[n._v("本文是微信公众号【Java技术江湖】的《Java并发指南》其中一篇，本文大部分内容来源于网络，为了把本文主题讲得清晰透彻，也整合了很多我认为不错的技术博客内容，引用其中了一些比较好的博客文章，如有侵权，请联系作者。")]),n._v(" "),a("p",[n._v("该系列博文会告诉你如何全面深入地学习Java并发技术，从Java多线程基础，再到并发编程的基础知识，从Java并发包的入门和实战，再到JUC的源码剖析，一步步地学习Java并发编程，并上手进行实战，以便让你更完整地了解整个Java并发编程知识体系，形成自己的知识框架。")]),n._v(" "),a("p",[n._v("为了更好地总结和检验你的学习成果，本系列文章也会提供一些对应的面试题以及参考答案。")]),n._v(" "),a("p",[n._v("如果对本系列文章有什么建议，或者是有什么疑问的话，也可以关注公众号【Java技术江湖】联系作者，欢迎你参与本系列博文的创作和修订。\n")]),n._v(" "),a("h2",{attrs:{id:"fork-join框架介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fork-join框架介绍"}},[n._v("#")]),n._v(" Fork/Join框架介绍")]),n._v(" "),a("p",[n._v("Fork/Join框架是Java7提供的一个用于并行执行任务的框架， 是一个把大任务分割成若干个小任务，最终汇总每个小任务结果后得到大任务结果的框架。使用工作窃取（work-stealing）算法，主要用于实现“分而治之”。")]),n._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[n._v("#")]),n._v(" 简介")]),n._v(" "),a("p",[n._v("通常，使用Java来开发一个简单的并发应用程序时，会创建一些"),a("strong",[n._v("Runnable")]),n._v("对象，然后创建对应的"),a("strong",[n._v("Thread")]),n._v(" 对象来控制程序中这些线程的创建、执行以及线程的状态。自从Java 5开始引入了"),a("strong",[n._v("Executor")]),n._v("和"),a("strong",[n._v("ExecutorService")]),n._v("接口以及实现这两个接口的类（比如"),a("strong",[n._v("ThreadPoolExecutor")]),n._v("）之后，使得Java在并发支持上得到了进一步的提升。")]),n._v(" "),a("p",[a("strong",[n._v("执行器框架（Executor Framework）"),a("strong",[n._v("将任务的创建和执行进行了分离，通过这个框架，只需要实现")]),n._v("Runnable")]),n._v("接口的对象和使用"),a("strong",[n._v("Executor")]),n._v("对象，然后将"),a("strong",[n._v("Runnable")]),n._v("对象发送给执行器。执行器再负责运行这些任务所需要的线程，包括线程的创建，线程的管理以及线程的结束。")]),n._v(" "),a("p",[a("strong",[n._v("Java 7")]),n._v("则又更进了一步，它包括了ExecutorService接口的另一种实现，用来解决特殊类型的问题，它就是"),a("strong",[n._v("Fork/Join框架")]),n._v("，有时也称"),a("strong",[n._v("分解/合并框架")]),n._v("。")]),n._v(" "),a("p",[a("strong",[n._v("Fork/Join框架")]),n._v("是用来解决能够通过**分治技术（Divide and Conquer Technique）**将问题拆分成小任务的问题。在一个任务中，先检查将要解决的问题的大小，如果大于一个设定的大小，那就将问题拆分成可以通过框架来执行的小任务。如果问题的大小比设定的大小要小，就可以直接在任务里解决这个问题，然后，根据需要返回任务的结果。下面的图形总结了这个原理。")]),n._v(" "),a("p",[a("a",{attrs:{href:"http://ifeve.com/wp-content/uploads/2014/02/Java-Concurrency-Cook-Book-5.1.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://ifeve.com/wp-content/uploads/2014/02/Java-Concurrency-Cook-Book-5.1-300x141.png",alt:"Java Concurrency Cook Book 5.1"}}),a("OutboundLink")],1)]),n._v(" "),a("p",[n._v("没有固定的公式来决定问题的"),a("strong",[n._v("参考大小（Reference Size）")]),n._v("，从而决定一个任务是需要进行拆分或不需要拆分，拆分与否仍是依赖于任务本身的特性。可以使用在任务中将要处理的元素的数目和任务执行所需要的时间来决定参考大小。测试不同的参考大小来决定解决问题最好的一个方案，将"),a("strong",[n._v("ForkJoinPool")]),n._v("类看作一个特殊的 "),a("strong",[n._v("Executor")]),n._v(" 执行器类型。这个框架基于以下两种操作。")]),n._v(" "),a("ul",[a("li",[n._v("**分解（Fork）**操作：当需要将一个任务拆分成更小的多个任务时，在框架中执行这些任务；")]),n._v(" "),a("li",[n._v("**合并（Join）**操作：当一个主任务等待其创建的多个子任务的完成执行。")])]),n._v(" "),a("p",[a("strong",[n._v("Fork/Join框架和执行器框架（Executor Framework）"),a("strong",[n._v("主要的区别在于")]),n._v("工作窃取算法（Work-Stealing Algorithm）")]),n._v("。与执行器框架不同，使用Join操作让一个主任务等待它所创建的子任务的完成，执行这个任务的线程称之为"),a("strong",[n._v("工作者线程（Worker Thread）")]),n._v("。工作者线程寻找其他仍未被执行的任务，然后开始执行。通过这种方式，这些线程在运行时拥有所有的优点，进而提升应用程序的性能。")]),n._v(" "),a("p",[n._v("为了达到这个目标，通过"),a("strong",[n._v("Fork/Join框架")]),n._v("执行的任务有以下限制。")]),n._v(" "),a("ul",[a("li",[n._v("任务只能使用"),a("strong",[n._v("fork()"),a("strong",[n._v("和")]),n._v("join()")]),n._v(" 操作当作同步机制。如果使用其他的同步机制，工作者线程就不能执行其他任务，当然这些任务是在同步操作里时。比如，如果在"),a("strong",[n._v("Fork/Join 框架")]),n._v("中将一个任务休眠，正在执行这个任务的工作者线程在休眠期内不能执行另一个任务。")]),n._v(" "),a("li",[n._v("任务不能执行I/O操作，比如文件数据的读取与写入。")]),n._v(" "),a("li",[n._v("任务不能抛出非运行时异常（Checked Exception），必须在代码中处理掉这些异常。")])]),n._v(" "),a("p",[a("strong",[n._v("Fork/Join****框架")]),n._v("的核心是由下列两个类组成的。")]),n._v(" "),a("ul",[a("li",[n._v("**ForkJoinPool：**这个类实现了ExecutorService接口和工作窃取算法（Work-Stealing Algorithm）。它管理工作者线程，并提供任务的状态信息，以及任务的执行信息。")]),n._v(" "),a("li",[a("strong",[n._v("ForkJoinTask："),a("strong",[n._v("这个类是一个将在")]),n._v("ForkJoinPool")]),n._v("中执行的任务的基类。")])]),n._v(" "),a("p",[a("strong",[n._v("Fork/Join框架")]),n._v("提供了在一个任务里执行"),a("strong",[n._v("fork()"),a("strong",[n._v("和")]),n._v("join()"),a("strong",[n._v("操作的机制和控制任务状态的方法。通常，为了实现")]),n._v("Fork/Join")]),n._v("任务，需要实现一个以下两个类之一的子类。")]),n._v(" "),a("ul",[a("li",[n._v("**RecursiveAction：**用于任务没有返回结果的场景。")]),n._v(" "),a("li",[n._v("**RecursiveTask：**用于任务有返回结果的场景。")])]),n._v(" "),a("h2",{attrs:{id:"工作窃取算法介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作窃取算法介绍"}},[n._v("#")]),n._v(" 工作窃取算法介绍")]),n._v(" "),a("p",[n._v("工作窃取（work-stealing）算法优点是充分利用线程进行并行计算，并减少了线程间的竞争，其缺点是在某些情况下还是存在竞争，比如双端队列里只有一个任务时。并且消耗了更多的系统资源，比如创建多个线程和多个双端队列。")]),n._v(" "),a("p",[a("img",{attrs:{src:"https://img.mukewang.com/5abf3c33000156c304140358.png",alt:"图片描述",title:"并发之Fork/Join框架使用及注意点_"}})]),n._v(" "),a("p",[a("strong",[n._v("Fork/Join框架基础类")])]),n._v(" "),a("ul",[a("li",[n._v("ForkJoinPool： 用来执行Task，或生成新的ForkJoinWorkerThread，执行 ForkJoinWorkerThread 间的 work-stealing 逻辑。ForkJoinPool 不是为了替代 ExecutorService，而是它的补充，在某些应用场景下性能比 ExecutorService 更好。")]),n._v(" "),a("li",[n._v("ForkJoinTask： 执行具体的分支逻辑，声明以同步/异步方式进行执行")]),n._v(" "),a("li",[n._v("ForkJoinWorkerThread： 是 ForkJoinPool 内的 worker thread，执行")]),n._v(" "),a("li",[n._v("ForkJoinTask, 内部有 ForkJoinPool.WorkQueue来保存要执行的ForkJoinTask。")]),n._v(" "),a("li",[n._v("ForkJoinPool.WorkQueue：保存要执行的ForkJoinTask。")])]),n._v(" "),a("p",[a("strong",[n._v("基本思想")])]),n._v(" "),a("ul",[a("li",[n._v("ForkJoinPool 的每个工作线程都维护着一个工作队列（WorkQueue），这是一个双端队列（Deque），里面存放的对象是任务（ForkJoinTask）。")]),n._v(" "),a("li",[n._v("每个工作线程在运行中产生新的任务（通常是因为调用了 fork()）时，会放入工作队列的队尾，并且工作线程在处理自己的工作队列时，使用的是 LIFO 方式，也就是说每次从队尾取出任务来执行。")]),n._v(" "),a("li",[n._v("每个工作线程在处理自己的工作队列同时，会尝试窃取一个任务（或是来自于刚刚提交到 pool 的任务，或是来自于其他工作线程的工作队列），窃取的任务位于其他线程的工作队列的队首，也就是说工作线程在窃取其他工作线程的任务时，使用的是 FIFO 方式。")]),n._v(" "),a("li",[n._v("在遇到 join() 时，如果需要 join 的任务尚未完成，则会先处理其他任务，并等待其完成。")]),n._v(" "),a("li",[n._v("在既没有自己的任务，也没有可以窃取的任务时，进入休眠。")])]),n._v(" "),a("p",[a("strong",[n._v("代码演示")])]),n._v(" "),a("p",[n._v("大家学习时，通常借助的例子都类似于下面这段：")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('@Slf4j\npublic class ForkJoinTaskExample extends RecursiveTask<Integer> {\n\n    public static final int threshold = 2;\n    private int start;\n    private int end;\n\n    public ForkJoinTaskExample(int start, int end) {\n        this.start = start;\n        this.end = end;\n    }\n\n    @Override\n    protected Integer compute() {\n        int sum = 0;\n\n        //如果任务足够小就计算任务\n        boolean canCompute = (end - start) <= threshold;\n        if (canCompute) {\n            for (int i = start; i <= end; i++) {\n                sum += i;\n            }\n        } else {\n            // 如果任务大于阈值，就分裂成两个子任务计算\n            int middle = (start + end) / 2;\n            ForkJoinTaskExample leftTask = new ForkJoinTaskExample(start, middle);\n            ForkJoinTaskExample rightTask = new ForkJoinTaskExample(middle + 1, end);\n\n            // 执行子任务\n            leftTask.fork();\n            rightTask.fork();\n\n            // 等待任务执行结束合并其结果\n            int leftResult = leftTask.join();\n            int rightResult = rightTask.join();\n\n            // 合并子任务\n            sum = leftResult + rightResult;\n        }\n        return sum;\n    }\n\n    public static void main(String[] args) {\n        ForkJoinPool forkjoinPool = new ForkJoinPool();\n\n        //生成一个计算任务，计算1+2+3+4\n        ForkJoinTaskExample task = new ForkJoinTaskExample(1, 100);\n\n        //执行一个任务\n        Future<Integer> result = forkjoinPool.submit(task);\n\n        try {\n            log.info("result:{}", result.get());\n        } catch (Exception e) {\n            log.error("exception", e);\n        }\n    }\n}\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br"),a("span",{staticClass:"line-number"},[n._v("53")]),a("br"),a("span",{staticClass:"line-number"},[n._v("54")]),a("br"),a("span",{staticClass:"line-number"},[n._v("55")]),a("br"),a("span",{staticClass:"line-number"},[n._v("56")]),a("br"),a("span",{staticClass:"line-number"},[n._v("57")]),a("br"),a("span",{staticClass:"line-number"},[n._v("58")]),a("br")])]),a("p",[a("strong",[n._v("重点注意")])]),n._v(" "),a("p",[n._v("需要特别注意的是：")]),n._v(" "),a("ol",[a("li",[a("p",[n._v("ForkJoinPool 使用submit 或 invoke 提交的区别：invoke是同步执行，调用之后需要等待任务完成，才能执行后面的代码；submit是异步执行，只有在Future调用get的时候会阻塞。")])]),n._v(" "),a("li",[a("p",[n._v("这里继承的是RecursiveTask，还可以继承RecursiveAction。前者适用于有返回值的场景，而后者适合于没有返回值的场景")])]),n._v(" "),a("li",[a("p",[n._v("这一点是最容易忽略的地方，其实这里执行子任务调用fork方法并不是最佳的选择，最佳的选择是invokeAll方法。")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("leftTask.fork();  \nrightTask.fork();\n\n替换为\n\ninvokeAll(leftTask, rightTask);\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br")])])])]),n._v(" "),a("p",[n._v("具体说一下原理：对于Fork/Join模式，假如Pool里面线程数量是固定的，那么调用子任务的fork方法相当于A先分工给B，然后A当监工不干活，B去完成A交代的任务。所以上面的模式相当于浪费了一个线程。那么如果使用invokeAll相当于A分工给B后，A和B都去完成工作。这样可以更好的利用线程池，缩短执行的时间。")])])}),[],!1,null,null,null);s.default=t.exports}}]);