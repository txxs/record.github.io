(window.webpackJsonp=window.webpackJsonp||[]).push([[625],{1018:function(e,t,_){"use strict";_.r(t);var l=_(13),v=Object(l.a)({},(function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("p",[e._v("本系列文章将整理到我在GitHub上的《Java面试指南》仓库，更多精彩内容请到我的仓库里查看")]),e._v(" "),_("blockquote",[_("p",[e._v("https://github.com/h2pl/Java-Tutorial")])]),e._v(" "),_("p",[e._v("喜欢的话麻烦点下Star哈")]),e._v(" "),_("p",[e._v("文章将同步到我的个人博客：")]),e._v(" "),_("blockquote",[_("p",[e._v("www.how2playlife.com")])]),e._v(" "),_("p",[e._v("本文是微信公众号【Java技术江湖】的《不可轻视的Java网络编程》其中一篇，本文部分内容来源于网络，为了把本文主题讲得清晰透彻，也整合了很多我认为不错的技术博客内容，引用其中了一些比较好的博客文章，如有侵权，请联系作者。")]),e._v(" "),_("p",[e._v("该系列博文会告诉你如何从计算机网络的基础知识入手，一步步地学习Java网络基础，从socket到nio、bio、aio和netty等网络编程知识，并且进行实战，网络编程是每一个Java后端工程师必须要学习和理解的知识点，进一步来说，你还需要掌握Linux中的网络编程原理，包括IO模型、网络编程框架netty的进阶原理，才能更完整地了解整个Java网络编程的知识体系，形成自己的知识框架。")]),e._v(" "),_("p",[e._v("为了更好地总结和检验你的学习成果，本系列文章也会提供部分知识点对应的面试题以及参考答案。")]),e._v(" "),_("p",[e._v("如果对本系列文章有什么建议，或者是有什么疑问的话，也可以关注公众号【Java技术江湖】联系作者，欢迎你参与本系列博文的创作和修订。")]),e._v(" "),_("h2",{attrs:{id:"为什么要-i-o-多路复用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么要-i-o-多路复用"}},[e._v("#")]),e._v(" 为什么要 I/O 多路复用")]),e._v(" "),_("p",[e._v("当需要从一个叫 "),_("code",[e._v("r_fd")]),e._v(" 的描述符不停地读取数据，并把读到的数据写入一个叫 "),_("code",[e._v("w_fd")]),e._v(" 的描述符时，我们可以用循环使用阻塞 I/O ：")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[e._v('while((n = read(r_fd, buf, BUF_SIZE)) > 0)\n    if(write(w_fd, buf, n) != n)\n        err_sys("write error");\n')])])]),_("p",[e._v("但是，如果要从两个地方读取数据呢？这时，不能再使用会把程序阻塞住的 "),_("code",[e._v("read")]),e._v(" 函数。因为可能在阻塞地等待 "),_("code",[e._v("r_fd1")]),e._v(" 的数据时，来不及处理 "),_("code",[e._v("r_fd2")]),e._v("，已经到达的 "),_("code",[e._v("r_fd2")]),e._v(" 的数据可能会丢失掉。")]),e._v(" "),_("p",[e._v("这个情况下需要使用"),_("strong",[e._v("非阻塞 I/O")]),e._v("。")]),e._v(" "),_("p",[e._v("只要做个标记，把文件描述符标记为非阻塞的，以后再对它使用 "),_("code",[e._v("read")]),e._v(" 函数：如果它还没有数据可读，函数会立即返回并把 errorno 这个变量的值设置为 35，于是我们知道它没有数据可读，然后可以立马去对其他描述符使用 "),_("code",[e._v("read")]),e._v("；如果它有数据可读，我们就读取它数据。对所有要读的描述符都调用了一遍 "),_("code",[e._v("read")]),e._v(" 之后，我们可以等一个较长的时间（比如几秒），然后再从第一个文件描述符开始调用 "),_("code",[e._v("read")]),e._v(" 。这种循环就叫做"),_("strong",[e._v("轮询")]),e._v("（polling）。")]),e._v(" "),_("p",[e._v("这样，不会像使用阻塞 I/O 时那样因为一个描述符 "),_("code",[e._v("read")]),e._v(" 长时间处于等待数据而使程序阻塞。")]),e._v(" "),_("p",[e._v("轮询的缺点是浪费太多 CPU 时间。大多数时候我们没有数据可读，但是还是用了 "),_("code",[e._v("read")]),e._v(" 这个"),_("strong",[e._v("系统调用")]),e._v("，使用系统调用时会从用户态切换到内核态。而大多数情况下我们调用 "),_("code",[e._v("read")]),e._v("，然后陷入内核态，内核发现这个描述符没有准备好，然后切换回用户态并且只得到 EAGAIN （errorno 被设置为 35），做的是无用功。描述符非常多的时候，每次的切换过程就是巨大的浪费。")]),e._v(" "),_("p",[e._v("所以，需要 "),_("strong",[e._v("I/O 多路复用")]),e._v("。I/O 多路复用通过使用一个系统函数，同时等待多个描述符的可读、可写状态。")]),e._v(" "),_("p",[e._v("为了达到这个目的，我们需要做的是：建立一个描述符列表，以及我们分别关心它们的什么事件（可读还是可写还是发生例外情况）；调用一个系统函数，直到这个描述符列表里有至少一个描述符关联的事件发生时，这个函数才会返回。")]),e._v(" "),_("p",[e._v("select, poll, epoll 就是这样的系统函数。")]),e._v(" "),_("h3",{attrs:{id:"select"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#select"}},[e._v("#")]),e._v(" "),_("a",{attrs:{href:"https://jeff.wtf/2017/02/IO-multiplexing/#select",title:"select",target:"_blank",rel:"noopener noreferrer"}},[_("OutboundLink")],1),e._v("select")]),e._v(" "),_("p",[e._v("我们可以在所有 POSIX 兼容的系统里使用 select 函数来进行 I/O 多路复用。我们需要通过 select 函数的参数传递给内核的信息有：")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[e._v("*   我们关心哪些描述符\n*   我们关心它们的什么事件\n*   我们希望等待多长时间\n")])])]),_("p",[e._v("select 的返回时，内核会告诉我们：")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[e._v("*   可读的描述符的个数\n*   哪些描述符发生了哪些事件\n\n#include <sys/select.h>\nint select(int maxfdp1, fd_set* readfds,\n           fd_set* writefds, fd_set* exceptfds,\n           struct timeval* timeout);\n\n// 返回值: 已就绪的描述符的个数。超时时为 0 ，错误时为 -1\n")])])]),_("p",[_("code",[e._v("maxfdp1")]),e._v(" 意思是 “max file descriptor plus 1” ，就是把你要监视的所有文件描述符里最大的那个加上 1 。（它实际上决定了内核要遍历文件描述符的次数，比如你监视了文件描述符 5 和 20 并把 "),_("code",[e._v("maxfdp1")]),e._v(" 设置为 21 ，内核每次都会从描述符 0 依次检查到 20。）")]),e._v(" "),_("p",[e._v("中间的三个参数是你想监视的文件描述符的集合。可以把 fd_set 类型视为 1024 位的二进制数，这意味着 select 只能监视小于 1024 的文件描述符（1024 是由 Linux 的 sys/select.h 里 "),_("code",[e._v("FD_SETSIZE")]),e._v(" 宏设置的值）。在 select 返回后我们通过 "),_("code",[e._v("FD_ISSET")]),e._v(" 来判断代表该位的描述符是否是已准备好的状态。")]),e._v(" "),_("p",[e._v("最后一个参数是等待超时的时长：到达这个时长但是没有任一描述符可用时，函数会返回 0 。")]),e._v(" "),_("p",[e._v("用一个代码片段来展示 select 的用法：")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[e._v('    // 这个例子要监控文件描述符 3, 4 的可读状态，以及 4, 5 的可写状态\n    \n    // 初始化两个 fd_set 以及 timeval\n    fd_set read_set, write_set;\n    FD_ZERO(read_set);\n    FD_ZERO(write_set);\n    timeval t;\n    t.tv_sec = 5;   // 超时为 5 秒\n    t.tv_usec = 0;  // 加 0 微秒\n    \n    // 设置好两个 fd_set\n    int fd1 = 3;\n    int fd2 = 4;\n    int fd3 = 5;\n    int maxfdp1 = 5 + 1;\n    FD_SET(fd1, &read_set);\n    FD_SET(fd2, &read_set);\n    FD_SET(fd2, &write_set);\n    FD_SET(fd3, &write_set);\n    \n    // 准备备用的 fd_set\n    fd_set r_temp = read_set;\n    fd_set w_temp = write_set;\n    \n    while(true){\n        // 每次都要重新设置放入 select 的 fd_set\n        read_set = r_temp;\n        write_set = w_temp;\n    \n        // 使用 select\n        int n = select(maxfdp1, &read_set, &write_set, NULL, &t);\n    \n        // 上面的 select 函数会一直阻塞，直到\n        // 3, 4 可读以及 4, 5 可写这四件事中至少一项发生\n        // 或者等待时间到达 5 秒，返回 0\n    \n        for(int i=0; i<maxfdp1 && n>0; i++){\n            if(FD_ISSET(i, &read_set)){\n                n--;\n                if(i==fd1)\n                    prinf("描述符 3 可读");\n                if(i==fd2)\n                    prinf("描述符 4 可读");\n            }\n            if(FD_ISSET(i, &write_set)){\n                n--;\n                if(i==fd2)\n                    prinf("描述符 3 可写");\n                if(i==fd3)\n                    prinf("描述符 4 可写");\n            }\n        }\n        // 上面的 printf 语句换成对应的 read 或者 write 函数就\n        // 可以立即读取或者写入相应的描述符而不用等待\n    }\n')])])]),_("p",[e._v("可以看到，select 的缺点有：")]),e._v(" "),_("ul",[_("li",[e._v("默认能监视的文件描述符不能大于 1024，也代表监视的总数不超过1024。即使你因为需要监视的描述符大于 1024 而改动内核的 "),_("code",[e._v("FD_SETSIZE")]),e._v(" 值，但由于 select 是每次都会线性扫描整个fd_set，集合越大速度越慢，所以性能会比较差。")]),e._v(" "),_("li",[e._v("select 函数返回时只能看见已准备好的描述符数量，至于是哪个描述符准备好了需要循环用 "),_("code",[e._v("FD_ISSET")]),e._v(" 来检查，当未准备好的描述符很多而准备好的很少时，效率比较低。")]),e._v(" "),_("li",[e._v("select 函数每次执行的时候，都把参数里传入的三个 fd_set 从用户空间复制到内核空间。而每次 fd_set 里要监视的描述符变化不大时，全部重新复制一遍并不划算。同样在每次都是未准备好的描述符很多而准备好的很少时，调用 select 会很频繁，用户/内核间的的数据复制就成了一个大的开销。")])]),e._v(" "),_("p",[e._v("还有一个问题是在代码的写法上给我一些困扰的，就是每次调用 select 前必须重新设置三个 fd_set。 fd_set 类型只是 1024 位的二进制数（实际上结构体里是几个 long 变量的数组；比如 64 位机器上 long 是 64 bit，那么 fd_set 里就是 16 个 long 变量的数组），由一位的 1 和 0 代表一个文件描述符的状态，但是其实调用 select 前后位的 1/0 状态意义是不一样的。")]),e._v(" "),_("p",[e._v("先讲一下几个对 fd_set 操作的函数的作用："),_("code",[e._v("FD_ZERO")]),e._v(" 把 fd_set 所有位设置为 0 ；"),_("code",[e._v("FD_SET")]),e._v(" 把一个位设置为 1 ；"),_("code",[e._v("FD_ISSET")]),e._v(" 判断一个位是否为 1 。")]),e._v(" "),_("p",[e._v("调用 select 前：我们用 "),_("code",[e._v("FD_ZERO")]),e._v(" 把 fd_set 先全部初始化，然后用 "),_("code",[e._v("FD_SET")]),e._v(" 把我们关心的代表描述符的位设置为 1 。我们这时可以用 "),_("code",[e._v("FD_ISSET")]),e._v(" 判断这个位是否被我们设置，这时的含义是"),_("strong",[e._v("我们想要监视的描述符是否被设置为被监视的状态")]),e._v("。")]),e._v(" "),_("p",[e._v("调用 select 时：内核判断 fd_set 里的位并把各个 fd_set 里所有值为 1 的位记录下来，然后把 fd_set 全部设置成 0 ；一个描述符上有对应的事件发生时，把对应 fd_set 里代表这个描述符的位设置为 1 。")]),e._v(" "),_("p",[e._v("在 select 返回之后：我们同样用 "),_("code",[e._v("FD_ISSET")]),e._v(" 判断各个我们关心的位是 0 还是 1 ，这时的含义是，"),_("strong",[e._v("这个位是否是发生了我们关心的事件")]),e._v("。")]),e._v(" "),_("p",[e._v("所以，在下一次调用 select 前，我们不得不把已经被内核改掉的 fd_set 全部重新设置一下。")]),e._v(" "),_("p",[e._v("select 在监视大量描述符尤其是更多的描述符未准备好的情况时性能很差。《Unix 高级编程》里写，用 select 的程序通常只使用 3 到 10 个描述符。")]),e._v(" "),_("h3",{attrs:{id:"poll"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#poll"}},[e._v("#")]),e._v(" "),_("a",{attrs:{href:"https://jeff.wtf/2017/02/IO-multiplexing/#poll",title:"poll",target:"_blank",rel:"noopener noreferrer"}},[_("OutboundLink")],1),e._v("poll")]),e._v(" "),_("p",[e._v("poll 和 select 是相似的，只是给的接口不同。")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[e._v("#include <poll.h>\nint poll(struct pollfd fdarray[], nfds_t nfds, int timeout);\n\n// 返回值: 已就绪的描述符的个数。超时时为 0 ，错误时为 -1\n")])])]),_("p",[_("code",[e._v("fdarray")]),e._v(" 是 "),_("code",[e._v("pollfd")]),e._v(" 的数组。"),_("code",[e._v("pollfd")]),e._v(" 结构体是这样的：")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[e._v("struct pollfd {\n    int fd;         // 文件描述符\n    short events;   // 我期待的事件\n    short revents;  // 实际发生的事件：我期待的事件中发生的；或者异常情况\n};\n")])])]),_("p",[_("code",[e._v("nfds")]),e._v(" 是 "),_("code",[e._v("fdarray")]),e._v(" 的长度，也就是 pollfd 的个数。")]),e._v(" "),_("p",[_("code",[e._v("timeout")]),e._v(" 代表等待超时的毫秒数。")]),e._v(" "),_("p",[e._v("相比 select ，poll 有这些优点：由于 poll 在 pollfd 里用 "),_("code",[e._v("int fd")]),e._v(" 来表示文件描述符而不像 select 里用的 fd_set 来分别表示描述符，所以没有必须小于 1024 的限制，也没有数量限制；由于 poll 用 "),_("code",[e._v("events")]),e._v(" 表示期待的事件，通过修改 "),_("code",[e._v("revents")]),e._v(" 来表示发生的事件，所以不需要像 select 在每次调用前重新设置描述符和期待的事件。")]),e._v(" "),_("p",[e._v("除此之外，poll 和 select 几乎相同。在 poll 返回后，需要遍历 "),_("code",[e._v("fdarray")]),e._v(" 来检查各个 "),_("code",[e._v("pollfd")]),e._v(" 里的 "),_("code",[e._v("revents")]),e._v(" 是否发生了期待的事件；每次调用 poll 时，把 "),_("code",[e._v("fdarray")]),e._v(" 复制到内核空间。在描述符太多而每次准备好的较少时，poll 有同样的性能问题。")]),e._v(" "),_("h3",{attrs:{id:"epoll"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#epoll"}},[e._v("#")]),e._v(" "),_("a",{attrs:{href:"https://jeff.wtf/2017/02/IO-multiplexing/#epoll",title:"epoll",target:"_blank",rel:"noopener noreferrer"}},[_("OutboundLink")],1),e._v("epoll")]),e._v(" "),_("p",[e._v("epoll 是在 Linux 2.5.44 中首度登场的。不像 select 和 poll ，它提供了三个系统函数而不是一个。")]),e._v(" "),_("h4",{attrs:{id:"epoll-create-用来创建一个-epoll-描述符"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#epoll-create-用来创建一个-epoll-描述符"}},[e._v("#")]),e._v(" "),_("a",{attrs:{href:"https://jeff.wtf/2017/02/IO-multiplexing/#epoll-create-%E7%94%A8%E6%9D%A5%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA-epoll-%E6%8F%8F%E8%BF%B0%E7%AC%A6%EF%BC%9A",title:"epoll_create 用来创建一个 epoll 描述符：",target:"_blank",rel:"noopener noreferrer"}},[_("OutboundLink")],1),e._v("epoll_create 用来创建一个 epoll 描述符：")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[e._v("#include <sys/epoll.h>\nint epoll_create(int size);\n\n// 返回值：epoll 描述符\n")])])]),_("p",[_("code",[e._v("size")]),e._v(" 用来告诉内核你想监视的文件描述符的数目，但是它"),_("strong",[e._v("并不是限制了能监视的描述符的最大个数")]),e._v("，而是给内核最初分配的空间一个建议。然后系统会在内核中分配一个空间来存放事件表，并返回一个 "),_("strong",[e._v("epoll 描述符")]),e._v("，用来操作这个事件表。")]),e._v(" "),_("h4",{attrs:{id:"epoll-ctl-用来增-删-改内核中的事件表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#epoll-ctl-用来增-删-改内核中的事件表"}},[e._v("#")]),e._v(" "),_("a",{attrs:{href:"https://jeff.wtf/2017/02/IO-multiplexing/#epoll-ctl-%E7%94%A8%E6%9D%A5%E5%A2%9E-%E5%88%A0-%E6%94%B9%E5%86%85%E6%A0%B8%E4%B8%AD%E7%9A%84%E4%BA%8B%E4%BB%B6%E8%A1%A8%EF%BC%9A",title:"epoll_ctl 用来增/删/改内核中的事件表：",target:"_blank",rel:"noopener noreferrer"}},[_("OutboundLink")],1),e._v("epoll_ctl 用来增/删/改内核中的事件表：")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[e._v("int epoll_ctl(int epfd, int op, int fd, struct epoll_event *event);\n\n// 返回值：成功时返回 0 ，失败时返回 -1\n")])])]),_("p",[_("code",[e._v("epfd")]),e._v(" 是 epoll 描述符。")]),e._v(" "),_("p",[_("code",[e._v("op")]),e._v(" 是操作类型（增加/删除/修改）。")]),e._v(" "),_("p",[_("code",[e._v("fd")]),e._v(" 是希望监视的文件描述符。")]),e._v(" "),_("p",[_("code",[e._v("event")]),e._v(" 是一个 epoll_event 结构体的指针。epoll_event 的定义是这样的：")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[e._v("typedef union epoll_data {\n   void        *ptr;\n   int          fd;\n   uint32_t     u32;\n   uint64_t     u64;\n} epoll_data_t;\n\nstruct epoll_event {\n   uint32_t     events;      // 我期待的事件\n   epoll_data_t data;        // 用户数据变量\n};\n")])])]),_("p",[e._v("这个结构体里，除了期待的事件外，还有一个 "),_("code",[e._v("data")]),e._v(" ，是一个 union，它是用来让我们在得到下面第三个函数的返回值以后方便的定位文件描述符的。")]),e._v(" "),_("h4",{attrs:{id:"epoll-wait-用来等待事件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#epoll-wait-用来等待事件"}},[e._v("#")]),e._v(" "),_("a",{attrs:{href:"https://jeff.wtf/2017/02/IO-multiplexing/#epoll-wait-%E7%94%A8%E6%9D%A5%E7%AD%89%E5%BE%85%E4%BA%8B%E4%BB%B6",title:"epoll_wait 用来等待事件",target:"_blank",rel:"noopener noreferrer"}},[_("OutboundLink")],1),e._v("epoll_wait 用来等待事件")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[e._v("int epoll_wait(int epfd, struct epoll_event *result_events,\n              int maxevents, int timeout);\n\n// 返回值：已就绪的描述符个数。超时时为 0 ，错误时为 -1\n")])])]),_("p",[_("code",[e._v("epfd")]),e._v(" 是 epoll 描述符。")]),e._v(" "),_("p",[_("code",[e._v("result_events")]),e._v(" 是 epoll_event 结构体的指针，它将指向的是所有已经准备好的事件描述符相关联的 epoll_event（在上个步骤里调用 epoll_ctl 时关联起来的）。下面的例子可以让你知道这个参数的意义。")]),e._v(" "),_("p",[_("code",[e._v("maxevents")]),e._v(" 是返回的最大事件个数，也就是你能通过 result_events 指针遍历到的最大的次数。")]),e._v(" "),_("p",[_("code",[e._v("timeout")]),e._v(" 是等待超时的毫秒数。")]),e._v(" "),_("p",[e._v("用一个代码片段来展示 epoll 的用法：\n// 这个例子要监控文件描述符 3, 4 的可读状态，以及 4, 5 的可写状态")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[e._v('/* 通过 epoll_create 创建 epoll 描述符 */\nint epfd = epoll_create(4);\n\nint fd1 = 3;\nint fd2 = 4;\nint fd3 = 5;\n\n/* 通过 epoll_ctl 注册好四个事件 */\nstruct epoll_event ev1;\nev1.events = EPOLLIN;      // 期待它的可读事件发生\nev1.data   = fd1;          // 我们通常就把 data 设置为 fd ，方便以后查看\nepoll_ctl(epfd, EPOLL_CTL_ADD, fd1, &ev1);  // 添加到事件表\n\nstruct epoll_event ev2;\nev2.events = EPOLLIN;\nev2.data   = fd2;\nepoll_ctl(epfd, EPOLL_CTL_ADD, fd2, &ev2);\n\nstruct epoll_event ev3;\nev3.events = EPOLLOUT;     // 期待它的可写事件发生\nev3.data   = fd2;\nepoll_ctl(epfd, EPOLL_CTL_ADD, fd2, &ev3);\n\nstruct epoll_event ev4;\nev4.events = EPOLLOUT;\nev4.data   = fd3;\nepoll_ctl(epfd, EPOLL_CTL_ADD, fd3, &ev4);\n\n/* 通过 epoll_wait 等待事件 */\n# DEFINE MAXEVENTS 4\nstruct epoll_event result_events[MAXEVENTS];\n\nwhile(true){\n    int n = epoll_wait(epfd, &result_events, MAXEVENTS, 5000);\n\n    for(int i=0; i<n; n--){\n        // result_events[i] 一定是 ev1 到 ev4 中的一个\n        if(result_events[i].events&EPOLLIN)\n            printf("描述符 %d 可读", result_events[i].fd);\n        else if(result_events[i].events&EPOLLOUT)\n            printf("描述符 %d 可写", result_events[i].fd)\n    }\n}\n')])])]),_("p",[e._v("所以 epoll 解决了 poll 和 select 的问题：")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("只在 epoll_ctl 的时候把数据复制到内核空间，这保证了每个描述符和事件一定只会被复制到内核空间一次；每次调用 epoll_wait 都不会复制新数据到内核空间。相比之下，select 每次调用都会把三个 fd_set 复制一遍；poll 每次调用都会把 "),_("code",[e._v("fdarray")]),e._v(" 复制一遍。")])]),e._v(" "),_("li",[_("p",[e._v("epoll_wait 返回 n ，那么只需要做 n 次循环，可以保证遍历的每一次都是有意义的。相比之下，select 需要做至少 n 次至多 "),_("code",[e._v("maxfdp1")]),e._v(" 次循环；poll 需要遍历完 fdarray 即做 "),_("code",[e._v("nfds")]),e._v(" 次循环。")])]),e._v(" "),_("li",[_("p",[e._v("在内部实现上，epoll 使用了回调的方法。调用 epoll_ctl 时，就是注册了一个事件：在集合中放入文件描述符以及事件数据，并且加上一个回调函数。一旦文件描述符上的对应事件发生，就会调用回调函数，这个函数会把这个文件描述符加入到"),_("strong",[e._v("就绪队列")]),e._v("上。当你调用 epoll_wait 时，它只是在查看就绪队列上是否有内容，有的话就返回给你的程序。"),_("code",[e._v("select()")]),e._v(" "),_("code",[e._v("poll()")]),e._v(" "),_("code",[e._v("epoll_wait()")]),e._v(" 三个函数在操作系统看来，都是睡眠一会儿然后判断一会儿的循环，但是 select 和 poll 在醒着的时候要遍历整个文件描述符集合，而 epoll_wait 只是看看就绪队列是否为空而已。这是 epoll 高性能的理由，使得其 I/O 的效率不会像使用轮询的 select/poll 随着描述符增加而大大降低。")])])]),e._v(" "),_("blockquote",[_("p",[e._v("注 1 ：select/poll/epoll_wait 三个函数的等待超时时间都有一样的特性：等待时间设置为 0 时函数不阻塞而是立即返回，不论是否有文件描述符已准备好；poll/epoll_wait 中的 timeout 为 -1，select 中的 timeout 为 NULL 时，则无限等待，直到有描述符已准备好才会返回。")])]),e._v(" "),_("blockquote",[_("p",[e._v("注 2 ：有的新手会把文件描述符是否标记为阻塞 I/O 等同于 I/O 多路复用函数是否阻塞。其实文件描述符是否标记为阻塞，决定了你 "),_("code",[e._v("read")]),e._v(" 或 "),_("code",[e._v("write")]),e._v(" 它时如果它未准备好是阻塞等待，还是立即返回 EAGAIN ；而 I/O 多路复用函数除非你把 timeout 设置为 0 ，否则它总是会阻塞住你的程序。")])]),e._v(" "),_("blockquote",[_("p",[e._v("注 3 ：上面的例子只是入门，可能是不准确或不全面的：一是数据要立即处理防止丢失；二是 EPOLLIN/EPOLLOUT 不完全等同于可读可写事件，具体要去搜索 poll/epoll 的事件具体有哪些；三是大多数实际例子里，比如一个 tcp server ，都会在运行中不断增加/删除的文件描述符而不是记住固定的 3 4 5 几个描述符（用这种例子更能看出 epoll 的优势）；四是 epoll 的优势更多的体现在处理大量闲连接的情况，如果场景是处理少量短连接，用 select 反而更好，而且用 select 的代码能运行在所有平台上。")])])])}),[],!1,null,null,null);t.default=v.exports}}]);