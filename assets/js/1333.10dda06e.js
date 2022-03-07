(window.webpackJsonp=window.webpackJsonp||[]).push([[1333],{1726:function(_,t,v){"use strict";v.r(t);var a=v(13),s=Object(a.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"_1-功能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-功能"}},[_._v("#")]),_._v(" 1 功能")]),_._v(" "),v("h2",{attrs:{id:"_1-1-进程间通信"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-进程间通信"}},[_._v("#")]),_._v(" 1.1 进程间通信")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("从通信和信息处理的角度看，运输层向应用层提供通信服务，它属于面向通信部分的最高层，同时也是用户功能中的最底层")])]),_._v(" "),v("li",[v("p",[_._v("当网络的边缘部分中的两个主机使用网络的核心部分的功能进行端到端的通信时,只有位于网络边缘部分的主机的协议栈才有运输层,而网络核心部分中的路由器在转发分组时都只用到下三层的功能")])]),_._v(" "),v("li",[v("p",[_._v("运输层为相互通信的应用进程提供了逻辑通信\n"),v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/c135f36866a86c4246a1421d3245bf1f.png",alt:""}})])])]),_._v(" "),v("h2",{attrs:{id:"_1-2-应用进程间通信"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-应用进程间通信"}},[_._v("#")]),_._v(" 1.2 应用进程间通信")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("两个主机进行通信实际上是两个主机中的应用进程通信")])]),_._v(" "),v("li",[v("p",[_._v("应用进程间通信又称为端到端的通信")])]),_._v(" "),v("li",[v("p",[_._v("运输层的一个很重要的功能就是复用和分用\n应用层不同进程的报文通过不同的端口向下交到运输层，再往下就共用网络层提供的服务。")])]),_._v(" "),v("li",[v("p",[_._v('运输层提供应用进程间的逻辑通信\n"逻辑通信"：运输层之间的通信好像是沿水平方向传送数据。但事实上这两个运输层之间并没有一条水平方向的物理连接。')])]),_._v(" "),v("li",[v("p",[_._v("运输层协议和网络层协议的主要区别\n"),v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/847b3cf004a016651e7878ee336ec7cc.png",alt:""}})])])]),_._v(" "),v("h2",{attrs:{id:"_1-3-运输层的主要功能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-运输层的主要功能"}},[_._v("#")]),_._v(" 1.3 运输层的主要功能")]),_._v(" "),v("ul",[v("li",[_._v("为应用进程之间提供端到端的逻辑通信")]),_._v(" "),v("li",[_._v("对收到的报文进行差错检测")]),_._v(" "),v("li",[_._v("需要有两种不同的运输协议，即面向连接的 TCP 和无连接的 UDP。")])]),_._v(" "),v("h2",{attrs:{id:"_1-4-两种不同的运输协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-两种不同的运输协议"}},[_._v("#")]),_._v(" 1.4 两种不同的运输协议")]),_._v(" "),v("ul",[v("li",[_._v("运输层向高层用户屏蔽了下面网络核心的细节,它使应用进程看见的就是好像在两个运输层实体之间有一条端到端的逻辑通信信道")]),_._v(" "),v("li",[_._v("当运输层采用面向连接的 TCP 协议时，尽管下层的网络都是不可靠的（只提供尽最大努力服务），但这种逻辑通信信道就相当于一条全双工的可靠信道")]),_._v(" "),v("li",[_._v("当运输层采用无连接的 UDP 协议时，这种逻辑通信信道是一条不可靠信道")])]),_._v(" "),v("h1",{attrs:{id:"_2-udp与tcp异同"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-udp与tcp异同"}},[_._v("#")]),_._v(" 2 UDP与TCP异同")]),_._v(" "),v("h2",{attrs:{id:"_2-1-tcp-与-udp"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-tcp-与-udp"}},[_._v("#")]),_._v(" 2.1 TCP 与 UDP")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("两个对等运输实体在通信时传送的数据单位叫作运输协议数据单元 TPDU (Transport Protocol Data Unit)。")])]),_._v(" "),v("li",[v("p",[_._v("TCP 传送的数据单位协议是 TCP 报文段(segment)")])]),_._v(" "),v("li",[v("p",[_._v("UDP（User Datagram Protocol） 传送的数据单位协议是 UDP 报文或用户数据报")])]),_._v(" "),v("li",[v("p",[_._v("TCP/IP 体系中的运输层协议\n"),v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/bc69dec73738a8f0119c650387316f4b.png",alt:""}})])]),_._v(" "),v("li",[v("p",[_._v("UDP 在传送数据之前不需要先建立连接。对方的运输层在收到 UDP 报文后，不需要给出任何确认。虽然 UDP 不提供可靠交付，但在某些情况下 UDP 是一种最有效的工作方式。")])]),_._v(" "),v("li",[v("p",[_._v("TCP 提供面向连接的服务，TCP 不提供广播或多播服务。由于 TCP 要提供"),v("strong",[_._v("可靠的、面向连接")]),_._v("的运输服务，因此不可避免地增加了许多的开销。这不仅使协议数据单元的首部增大很多，还要占用许多的处理机资源")])]),_._v(" "),v("li",[v("p",[_._v("运输层的 UDP 用户数据报与网际层的IP数据报有很大区别。IP 数据报要经过互连网中许多路由器的存储转发，但 UDP 用户数据报是在运输层的端到端抽象的逻辑信道中传送的。")])]),_._v(" "),v("li",[v("p",[_._v("TCP 报文段是在运输层抽象的端到端逻辑信道中传送，这种信道是可靠的全双工信道。但这样的信道却不知道究竟经过了哪些路由器，而这些路由器也根本不知道上面的运输层是否建立了 TCP 连接。")])])]),_._v(" "),v("h2",{attrs:{id:"_3-1-运输层的端口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-运输层的端口"}},[_._v("#")]),_._v(" 3.1 运输层的端口")]),_._v(" "),v("p",[_._v("运行在计算机中的进程是用进程标识符来标志。运行在应用层的各种应用进程却不应当让os指派它的进程标识符。这是因为在因特网上使用os种类很多，而不同os又使用不同格式的进程标识符。为使运行不同os的计算机的应用进程能够互相通信，就必须用统一的方法对 TCP/IP 体系的应用进程进行标志")]),_._v(" "),v("h2",{attrs:{id:"_3-2-需要解决的问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-需要解决的问题"}},[_._v("#")]),_._v(" 3.2 需要解决的问题")]),_._v(" "),v("p",[_._v("由于进程的创建、撤销都是动态的，发送方几乎无法识别其他机器上的进程。\n有时我们会改换接收报文的进程，但无需通知所有发送方。我们往往需要利用目的主机提供的功能来识别终点，而无需知道实现这个功能的进程。\n解决这个问题的方法就是在运输层使用协议端口号(protocol port number)，简称为端口(port)。\n虽然通信的终点是应用进程，但我们可以把端口想象是通信的终点，因为我们只需将要传送的报文交到目的主机的某个合适的目的端口，后续工作（即最后交付目的进程）就由 TCP 完成。")]),_._v(" "),v("h3",{attrs:{id:"软件端口与硬件端口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#软件端口与硬件端口"}},[_._v("#")]),_._v(" 软件端口与硬件端口")]),_._v(" "),v("ul",[v("li",[_._v("在协议栈层间的抽象的协议端口是软件端口")]),_._v(" "),v("li",[_._v("路由器或交换机上的端口是硬件端口")]),_._v(" "),v("li",[_._v("硬件端口是不同硬件设备进行交互的接口，而软件端口是应用层的各种协议进程与运输实体进行层间交互的一种地址")])]),_._v(" "),v("h2",{attrs:{id:"_3-3-tcp-的端口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-tcp-的端口"}},[_._v("#")]),_._v(" 3.3 TCP 的端口")]),_._v(" "),v("p",[_._v("端口用一个 16 位端口号进行标志。端口号只具有本地意义，即端口号只是为了标志本计算机应用层中的各进程。在因特网中不同计算机的相同端口号无任何联系。")]),_._v(" "),v("h2",{attrs:{id:"_3-4-端口的分类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-端口的分类"}},[_._v("#")]),_._v(" 3.4 端口的分类")]),_._v(" "),v("ul",[v("li",[_._v("熟知端口，0~1023")]),_._v(" "),v("li",[_._v("登记端口号，1024~49151，为没有熟知端口号的应用程序使用的。使用这个范围的端口号必须在 IANA 登记，以防止重复")]),_._v(" "),v("li",[_._v("客户端口号或短暂端口号，49152~65535，留给客户进程选择暂时使用。当服务器进程收到客户进程的报文时，就知道了客户进程所使用的动态端口号。通信结束后，这个端口号可供其他客户进程以后使用")])]),_._v(" "),v("h1",{attrs:{id:"_4-tcp-transmission-control-protocol"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-tcp-transmission-control-protocol"}},[_._v("#")]),_._v(" 4 TCP（Transmission Control Protocol）")]),_._v(" "),v("p",[_._v("TCP是"),v("strong",[_._v("传输控制协议")]),_._v("，一种"),v("strong",[_._v("面向连接")]),_._v("的、"),v("strong",[_._v("可靠的")]),_._v("、"),v("strong",[_._v("基于字节流")]),_._v("的传输层通信协议,由IETF的RFC 793定义。")]),_._v(" "),v("h2",{attrs:{id:"_4-1-特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-特点"}},[_._v("#")]),_._v(" 4.1 特点")]),_._v(" "),v("h3",{attrs:{id:"面向连接"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#面向连接"}},[_._v("#")]),_._v(" 面向连接")]),_._v(" "),v("p",[_._v("连接需要先创建再使用，创建连接的三次握手有一定开销。两个使用 TCP的应用在交换数据前必须先建立一个 TCP 连接，在一个 TCP 连接中，仅有两方进行彼此通信，广播和多播不能用于 TCP")]),_._v(" "),v("h3",{attrs:{id:"每条-tcp-连接只能有两个端点-endpoint"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#每条-tcp-连接只能有两个端点-endpoint"}},[_._v("#")]),_._v(" 每条 TCP 连接只能有两个端点(endpoint)")]),_._v(" "),v("p",[_._v("每条 TCP 连接只能是点对点（一对一）")]),_._v(" "),v("h3",{attrs:{id:"可靠交付"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#可靠交付"}},[_._v("#")]),_._v(" 可靠交付")]),_._v(" "),v("h3",{attrs:{id:"全双工通信"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#全双工通信"}},[_._v("#")]),_._v(" 全双工通信")]),_._v(" "),v("h3",{attrs:{id:"面向字节流"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#面向字节流"}},[_._v("#")]),_._v(" 面向字节流")]),_._v(" "),v("p",[_._v("两个应用程序通过 TCP 连接，TCP 不在字节中插入记录标识符。TCP对字节流内容不做任何编解码解释，不知道传输的字节流数据是二进制数据还是 ASCII 字符或其它类型数据，对字节流的编解码由TCP连接双方的应用层协商。\n字节是发送数据的最小单元，TCP协议本身无法区分哪几个字节是完整的消息体，也无法感知是否有多个客户端在使用同一个TCP连接，TCP只是一个读写数据的管道。")]),_._v(" "),v("ul",[v("li",[_._v("TCP 面向流的概念\n"),v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/d6261fff949753fd3854eec394121778.png",alt:""}}),_._v(" "),v("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210710223506585.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_SmF2YUVkZ2U=,size_16,color_FFFFFF,t_70",alt:""}})])]),_._v(" "),v("h2",{attrs:{id:"注意"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[_._v("#")]),_._v(" 注意")]),_._v(" "),v("ul",[v("li",[_._v("TCP 连接是一条虚连接而不是一条真正的物理连接")]),_._v(" "),v("li",[_._v("TCP 对应用进程一次把多长的报文发送到TCP 的缓存中是不关心的")]),_._v(" "),v("li",[_._v("TCP 根据对方给出的窗口值和当前网络拥塞的程度来决定一个报文段应包含多少个字节（而UDP 发送的报文长度是应用进程给出的）")]),_._v(" "),v("li",[_._v("TCP 可把太长的数据块划分短一些再传送\nTCP 也可等待积累有足够多的字节后再构成报文段发送出去")])]),_._v(" "),v("h2",{attrs:{id:"_4-2-tcp-的连接"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-tcp-的连接"}},[_._v("#")]),_._v(" 4.2 TCP 的连接")]),_._v(" "),v("p",[_._v("TCP 把连接作为最基本的抽象，每一条 TCP 连接有两个端点。TCP 连接的端点不是主机、主机的IP 地址、应用进程、运输层的协议端口，TCP 连接的端点叫做套接字(socket)！端口号拼接到(contatenated with) IP 地址即构成了套接字。")]),_._v(" "),v("h3",{attrs:{id:"_4-2-1-套接字-socket"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-1-套接字-socket"}},[_._v("#")]),_._v(" 4.2.1 套接字 (Socket)")]),_._v(" "),v("p",[_._v("Socket = (IP地址: 端口号)    。每一条 TCP 连接唯一地被通信两端的两个端点（即两个套接字）所确定，即：")]),_._v(" "),v("div",{staticClass:"language-bash line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[_._v("TCP 连接 ::"),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),_._v("socket1, socket2"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),_._v(" \n          "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("IP1: port1"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),_._v(", "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("IP2: port2"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),_._v("  \n")])]),_._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[_._v("1")]),v("br"),v("span",{staticClass:"line-number"},[_._v("2")]),v("br")])]),v("p",[_._v("所以一个 socket 就是一个网络通信资源组。")]),_._v(" "),v("h4",{attrs:{id:"socket的多重含义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#socket的多重含义"}},[_._v("#")]),_._v(" Socket的多重含义")]),_._v(" "),v("ul",[v("li",[_._v("应用编程接口 API 称为 socket API，简称为 socket")]),_._v(" "),v("li",[_._v("socket API 中使用的一个函数名也叫作 socket")]),_._v(" "),v("li",[_._v("调用 socket 函数的端点称为 socket")]),_._v(" "),v("li",[_._v("调用 socket 函数时其返回值称为 socket 描述符，可简称为 socket")]),_._v(" "),v("li",[_._v("在操作系统内核中连网协议的 Berkeley 实现，称为 socket 实现")])]),_._v(" "),v("h3",{attrs:{id:"_4-2-2-三次握手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-2-三次握手"}},[_._v("#")]),_._v(" 4.2.2 三次握手")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("TCP建立连接的三次握手\n"),v("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201111201028208.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_SmF2YUVkZ2U=,size_16,color_FFFFFF,t_70#pic_center",alt:""}})])]),_._v(" "),v("li",[v("p",[_._v("第一次握手\n建立连接时，客户端发送syn包(syn=j)到服务器，进入"),v("code",[_._v("SYN_SEND")]),_._v("态，待服务器确认")])])]),_._v(" "),v("blockquote",[v("p",[_._v("SYN：同步序列编号(Synchronize Sequence Numbers)")])]),_._v(" "),v("ul",[v("li",[_._v("第二次握手\n服务器收到syn包，必须确认客户的SYN（ack=j+1），同时自己也发送一个SYN包（syn=k），即SYN+ACK包，服务器进入"),v("code",[_._v("SYN_RECV")]),_._v("态")]),_._v(" "),v("li",[_._v("第三次握手\n客户端收到服务器的SYN＋ACK包，向服务器发送确认包ACK(ack=k+1)，此包发送完毕，客户端和服务器进入"),v("code",[_._v("ESTABLISHED")]),_._v("状态，完成三次握手")])]),_._v(" "),v("p",[_._v("完成三次握手，也就建立了客户端与服务端的连接。客户端与服务器开始传送数据。一个完整的三次握手也就是：请求---应答---再次确认。")]),_._v(" "),v("p",[_._v("那说到现在，到底什么是连接？也就是经过 TCP 三次握手后，双方主机准备好数据传输的资源（比如各种数据结构）。")]),_._v(" "),v("h3",{attrs:{id:"_4-2-3-四次挥手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-3-四次挥手"}},[_._v("#")]),_._v(" 4.2.3 四次挥手")]),_._v(" "),v("p",[_._v("由于TCP连接是全双工，因此每个方向都必须"),v("code",[_._v("单独进行关闭")]),_._v("。")]),_._v(" "),v("h4",{attrs:{id:"原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#原则"}},[_._v("#")]),_._v(" 原则")]),_._v(" "),v("p",[_._v("当一方完成它的数据发送任务后，就能发送一个FIN来终止这个方向的连接。\n收到一个 FIN只代表这一方向上没有数据流动，一个TCP连接在收到一个FIN后仍能发送数据。\n首先进行关闭的一方将执行主动关闭，另一方执行被动关闭。")]),_._v(" "),v("h4",{attrs:{id:"工作流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#工作流程"}},[_._v("#")]),_._v(" 工作流程")]),_._v(" "),v("ul",[v("li",[_._v("客户端A发送一个FIN，以关闭Client A ----\x3e>>Server B的数据传送")]),_._v(" "),v("li",[_._v("B收FIN，发ACK，确认序号为收到的序号加1")]),_._v(" "),v("li",[_._v("B关闭与A的连接，发FIN给A")]),_._v(" "),v("li",[_._v("A发ACK报文确认，并将确认序号设置为收到序号加1\n"),v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/2f85b4f054b6c614e1a9a77464ad1c2a.png",alt:""}})])]),_._v(" "),v("p",[_._v("如下图中上框就是三次挥手，下框内即是四次挥手\n"),v("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210322181905895.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_SmF2YUVkZ2U=,size_16,color_FFFFFF,t_70",alt:""}})]),_._v(" "),v("h3",{attrs:{id:"_4-2-4-为什么建立连接是三次握手-而关闭连接却四次握手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-4-为什么建立连接是三次握手-而关闭连接却四次握手"}},[_._v("#")]),_._v(" 4.2.4 为什么建立连接是三次握手，而关闭连接却四次握手")]),_._v(" "),v("p",[_._v("服务端的"),v("code",[_._v("listen")]),_._v("状态下的socket当收到syn报文的连接请求后，它可把ACK和SYN（ACK起应答作用，SYN起同步作用）放在同一个报文发送。")]),_._v(" "),v("p",[_._v("但关连接时，当收到对方的FIN报文时，仅表示对方没有数据发送给你了，但未必你所有的数据都全部发送给对方了，所以你大可不必立即关闭socket，即你可能还需发送一些数据后，再发FIN来表示你也可以关连接了，所以这里的ACK报文和FIN报文多数情况下都是分开发送的。")]),_._v(" "),v("h2",{attrs:{id:"_4-3-可靠传输"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-可靠传输"}},[_._v("#")]),_._v(" 4.3 可靠传输")]),_._v(" "),v("h3",{attrs:{id:"_4-3-1-工作原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-1-工作原理"}},[_._v("#")]),_._v(" 4.3.1 工作原理")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/0935ecb81f9863bff400570aa438932a.png",alt:"停止等待协议"}})]),_._v(" "),v("h3",{attrs:{id:"注意-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#注意-2"}},[_._v("#")]),_._v(" 注意")]),_._v(" "),v("ul",[v("li",[_._v("在发送完一个分组后,必须"),v("code",[_._v("暂时保留已发送的分组的副本")])]),_._v(" "),v("li",[_._v("分组和确认分组都必须进行编号")]),_._v(" "),v("li",[_._v("超时计时器的重传时间应当比数据在分组传输的平均往返时间更长一些")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/be94878ef0c29f061ed4d45a4ffc8aa3.png",alt:"确认丢失和确认迟到"}})]),_._v(" "),v("h3",{attrs:{id:"_4-3-2-可靠传输的实现"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-2-可靠传输的实现"}},[_._v("#")]),_._v(" 4.3.2 可靠传输的实现")]),_._v(" "),v("p",[_._v("TCP 通过下列方式提供可靠性")]),_._v(" "),v("ul",[v("li",[_._v("将应用数据分割为 TCP 认为最合适发送的数据块")]),_._v(" "),v("li",[_._v("超时重传\n当 TCP 发出一个段后，他启动一个定时器，等待目的端确认收到这个报文段\n若不能及时收到一个确认，将重发这个报文段")]),_._v(" "),v("li",[_._v("当 TCP 收到发自 TCP 链接另一端的数据时，它将发送一个确认（对于收到的请求，给出确认响应）\n这个确认不是立即发送，通常将推迟几分之一秒（之所以推迟，可能是要对包做完校验）")]),_._v(" "),v("li",[_._v("若 TCP 收到包，校验出包有错，丢弃报文段，不给出响应，TCP 发送端会超时重传")]),_._v(" "),v("li",[_._v("对于失序数据进行重排序，然后交给应用层\nTCP 报文段作为 ip 数据报进行传输，而 ip 数据报的到达会失序，因此 TCP 报文段的到达也可能失序。若必要，TCP 将对收到的数据进行重新排列，以正确的顺序交给应用层")]),_._v(" "),v("li",[_._v("对于重复数据，直接丢弃。")]),_._v(" "),v("li",[_._v("TCP 可以进行流量控制，防止较快主机致使较慢主机的缓冲区溢出。")])]),_._v(" "),v("p",[_._v("使用上述的确认和重传机制,我们就可以"),v("strong",[_._v("在不可靠的传输网络上实现可靠的通信")])]),_._v(" "),v("p",[_._v("这种可靠传输协议常称为"),v("strong",[_._v("自动重传请求ARQ")]),_._v(" (Automatic Repeat reQuest)")]),_._v(" "),v("ul",[v("li",[_._v("ARQ表明重传的请求是"),v("strong",[_._v("自动")]),_._v("进行的\n接收方不需要请求发送方重传某个出错的分组")])]),_._v(" "),v("h3",{attrs:{id:"_4-3-3-tcp-可靠通信的具体实现"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-3-tcp-可靠通信的具体实现"}},[_._v("#")]),_._v(" 4.3.3  TCP 可靠通信的具体实现")]),_._v(" "),v("p",[_._v("TCP 连接的每一端都必须设有两个窗口")]),_._v(" "),v("ul",[v("li",[_._v("一个发送窗口")]),_._v(" "),v("li",[_._v("一个接收窗口")])]),_._v(" "),v("p",[_._v("TCP 的可靠传输机制用字节的序号进行控制:所有的确认都是基于序号而不是基于报文段")]),_._v(" "),v("p",[_._v("TCP 两端的四个窗口经常处于动态变化中")]),_._v(" "),v("p",[_._v("TCP 连接的往返时间 "),v("strong",[_._v("RTT")]),_._v(" 也不是固定不变的:需要使用特定的算法估算较为合理的重传时间")]),_._v(" "),v("h2",{attrs:{id:"应用场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[_._v("#")]),_._v(" 应用场景")]),_._v(" "),v("p",[_._v("聊天消息传输、推送，单人语音、视频聊天等。几乎UDP能做的都能做，但需要考虑复杂性、性能问题。")]),_._v(" "),v("h2",{attrs:{id:"限制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#限制"}},[_._v("#")]),_._v(" 限制")]),_._v(" "),v("p",[_._v("无法进行广播、多播等操作")]),_._v(" "),v("h1",{attrs:{id:"_5-tcp-报文段的首部格式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-tcp-报文段的首部格式"}},[_._v("#")]),_._v(" 5 TCP 报文段的首部格式")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/089aee8bee7d09961d61151719407881.png",alt:"TCP 报文段结构"}})]),_._v(" "),v("ul",[v("li",[_._v("源/目的端口——各占 2 字节\n端口是运输层与应用层的服务接口:运输层的"),v("strong",[_._v("复用和分用")]),_._v("都要通过端口实现")]),_._v(" "),v("li",[_._v("序号——占 4 字节\n传送的数据流中的"),v("strong",[_._v("每一个字节都编上一个序号")]),_._v(":序号的值则指的是本报文段所发送数据的第一个字节的序号")]),_._v(" "),v("li",[_._v("确认号——占 4 字节\n期望收到对方下一个报文段的数据的第一个字节的序号")]),_._v(" "),v("li",[_._v("数据偏移（首部长度）——占 4 位\n指出报文段的"),v("strong",[_._v("数据起始处")]),_._v("距离报文段的"),v("strong",[_._v("起始处")]),_._v("有多远:“数据偏移”的单位是 32 位字（以 4 字节为计算单位）")]),_._v(" "),v("li",[_._v("保留——占 6 位\n为今后使用,但目前应置为 0")]),_._v(" "),v("li",[_._v("紧急 URG\nURG = 1:紧急指针字段有效.它告诉系统此报文段中有"),v("strong",[_._v("紧急数据")]),_._v(",应"),v("strong",[_._v("尽快传送")]),_._v("(相当于高优先级的数据)")]),_._v(" "),v("li",[_._v("确认 ACK\n只有当 ACK = 1 时确认号字段才有效;\n当 ACK = 0 时,确认号无效")]),_._v(" "),v("li",[_._v("推送 PSH (PuSH)\n接收 TCP 收到 PSH = 1 的报文段，就尽快地交付接收应用进程，而不再等到整个缓存都填满了后再向上交付")]),_._v(" "),v("li",[_._v("复位 RST (ReSeT)\n当 RST = 1 时:TCP 连接中出现严重差错（如由于主机崩溃或其他原因），必须释放连接，然后再重新建立运输连接")]),_._v(" "),v("li",[_._v("同步 SYN\nSYN = 1:这是一个连接请求或连接接受报文")]),_._v(" "),v("li",[_._v("终止 FIN (FINis)\n用来释放一个连接\nFIN = 1:此报文段的发送端的数据已发送完毕,并要求释放运输连接")]),_._v(" "),v("li",[_._v("窗口字段 —— 占 2 字节\n用来让对方设置发送窗口的依据,单位为字节（"),v("strong",[_._v("发送方的接收窗口")]),_._v("）")]),_._v(" "),v("li",[_._v("检验和 —— 占 2 字节\n检验的范围包括首部和数据两部分\n在计算检验和时,要在 TCP 报文段的前面加上 12 字节的伪首部")]),_._v(" "),v("li",[_._v("紧急指针字段 —— 占 16 位\n指出在本报文段中紧急数据共有多少个字节（紧急数据放在本报文段数据的最前面）")]),_._v(" "),v("li",[_._v("选项 —— 长度可变\nTCP 最初只规定了一种选项:最大报文段长度(MSS).\nMSS 告诉对方 TCP：“我的缓存所能接收的报文段的数据字段的最大长度是 MSS 个字节。”\n"),v("ul",[v("li",[_._v("MSS (Maximum Segment Size)\n是 TCP 报文段中的数据字段的最大长度.\n数据字段加上 TCP 首部,才等于整个的 TCP 报文段。")])])]),_._v(" "),v("li",[_._v("窗口扩大 ——占 3 字节\n有一个字节表示移位值 S。\n新的窗口值等于TCP 首部中的窗口位数增大到(16 + S)，相当于把窗口值向左移动 S 位后获得实际的窗口大小")]),_._v(" "),v("li",[_._v("时间戳选项——占10 字节\n其中最主要的字段时间戳值字段（4 字节）和时间戳回送回答字段（4 字节）")]),_._v(" "),v("li",[_._v("选择确认选项")]),_._v(" "),v("li",[_._v("填充\n这是为了使整个首部长度是 4 字节的整数倍")])]),_._v(" "),v("h1",{attrs:{id:"_6-tcp-的流量控制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-tcp-的流量控制"}},[_._v("#")]),_._v(" 6 TCP 的流量控制")]),_._v(" "),v("h2",{attrs:{id:"_6-1-利用滑动窗口实现流量控制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-利用滑动窗口实现流量控制"}},[_._v("#")]),_._v(" 6.1 利用滑动窗口实现流量控制")]),_._v(" "),v("p",[_._v("一般我们总希望数据传输得更快一些.但如果发送方把数据发送得过快,接收方就可能来不及接收,这就会造成数据的丢失")]),_._v(" "),v("p",[_._v("流量控制(flow control)就是让发送方的发送速率不要太快,既要让接收方来得及接收,也不要使网络发生拥塞\n利用滑动窗口机制可以很方便地在 TCP 连接上实现流量控制")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("TCP 在发送数据时,发送方的发送窗口不能超过接收方给出的接收窗口的数值\nTCP窗口的单位是字节")])]),_._v(" "),v("li",[v("p",[_._v("当接收方接收数据的速度变慢时,就在确认报文中告诉发送方接收窗口的大小\n发送方根据接收窗口的大小确认发送窗口的大小,从而达到控制流量\n"),v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/03bc525df7cd0fa387a481dcde648f12.png",alt:"流量控制举例"}})])]),_._v(" "),v("li",[v("p",[_._v("持续计时器(persistence timer)")]),_._v(" "),v("ul",[v("li",[_._v("TCP 为每一个连接设有一个持续计时器")]),_._v(" "),v("li",[_._v("只要 TCP 连接的一方收到对方的零窗口通知，就启动持续计时器")]),_._v(" "),v("li",[_._v("若持续计时器设置的时间到期，就发送一个零窗口探测报文段（仅携带 1 字节的数据），而对方就在确认这个探测报文段时给出了现在的窗口值\n"),v("ul",[v("li",[_._v("若窗口仍是零，则收到这个报文段的一方就重新设置持续计时器。")]),_._v(" "),v("li",[_._v("若窗口不是零，则死锁的僵局就可以打破了")])])])])])]),_._v(" "),v("h2",{attrs:{id:"_6-2-传输效率"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-传输效率"}},[_._v("#")]),_._v(" 6.2 传输效率")]),_._v(" "),v("p",[_._v("可以用不同的机制来控制 TCP 报文段的发送时机")]),_._v(" "),v("ul",[v("li",[_._v("TCP 维持一个变量，等于最大报文段长度(MSS)\n只要缓存中存放的数据达到MSS 字节，就组装成一个 TCP 报文段发送出去")]),_._v(" "),v("li",[_._v("由发送方的应用进程指明要求发送报文段\n即 TCP 支持的推送(push)操作")]),_._v(" "),v("li",[_._v("发送方的一个计时器期限到了，这时就把当前已有的缓存数据装入报文段（但长度不能超过 MSS）发送出去")])]),_._v(" "),v("h1",{attrs:{id:"_7-tcp的拥塞控制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-tcp的拥塞控制"}},[_._v("#")]),_._v(" 7 TCP的拥塞控制")]),_._v(" "),v("h2",{attrs:{id:"_7-1-原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-原理"}},[_._v("#")]),_._v(" 7.1 原理")]),_._v(" "),v("p",[_._v("在某段时间,若对网络中某资源的需求超过了该资源所能提供的可用部分,网络的性能就要变坏——产生拥塞(congestion)")]),_._v(" "),v("ul",[v("li",[_._v("出现拥塞的条件\n对资源需求 > 可用资源")]),_._v(" "),v("li",[_._v("若网络中有许多资源同时产生拥塞，网络性能就会明显变坏，整个网络的吞吐量将随输入负荷的增大而下降")])]),_._v(" "),v("h3",{attrs:{id:"拥塞控制与流量控制的关系"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#拥塞控制与流量控制的关系"}},[_._v("#")]),_._v(" 拥塞控制与流量控制的关系")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("拥塞控制")]),_._v(" "),v("ul",[v("li",[_._v("所要做的都有一个前提，就是网络能够承受现有的网络负荷")]),_._v(" "),v("li",[_._v("是一个全局性的过程，涉及到所有的主机、所有的路由器，以及与降低网络传输性能有关的所有因素")])])]),_._v(" "),v("li",[v("p",[_._v("流量控制")]),_._v(" "),v("ul",[v("li",[_._v("在给定的发送端和接收端之间的点对点通信量的控制")]),_._v(" "),v("li",[_._v("抑制发送端发数据的速率，以便使接收端来得及接收")])])]),_._v(" "),v("li",[v("p",[_._v("拥塞控制所起的作用\n"),v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/4403f050b0233630ea5034bdc3e98d67.png",alt:""}})])])]),_._v(" "),v("h2",{attrs:{id:"_7-2-拥塞控制的一般原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-拥塞控制的一般原理"}},[_._v("#")]),_._v(" 7.2 拥塞控制的一般原理")]),_._v(" "),v("p",[_._v("拥塞控制是很难设计的，因为它是一个动态的问题")]),_._v(" "),v("p",[_._v("当前网络正朝着高速化的方向发展，这很容易出现缓存不够大而造成分组的丢失。但分组的丢失是网络发生拥塞的征兆而不是原因。")]),_._v(" "),v("p",[_._v("在许多情况下，甚至正是拥塞控制本身成为引起网络性能恶化甚至发生死锁的原因。这点应特别引起重视")]),_._v(" "),v("h2",{attrs:{id:"_7-3-开环控制和闭环控制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-开环控制和闭环控制"}},[_._v("#")]),_._v(" 7.3 开环控制和闭环控制")]),_._v(" "),v("ul",[v("li",[_._v("开环控制方法就是在设计网络时事先将有关发生拥塞的因素考虑周到，力求网络在工作时不产生拥塞")]),_._v(" "),v("li",[_._v("闭环控制是基于反馈环路的概念。属于闭环控制的有以下几种措施\n"),v("ul",[v("li",[_._v("监测网络系统以便检测到拥塞在何时、何处发生。")]),_._v(" "),v("li",[_._v("将拥塞发生的信息传送到可采取行动的地方。")]),_._v(" "),v("li",[_._v("调整网络系统的运行以解决出现的问题。")])])])]),_._v(" "),v("h2",{attrs:{id:"_7-4-拥塞控制方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-拥塞控制方法"}},[_._v("#")]),_._v(" 7.4 拥塞控制方法")]),_._v(" "),v("h3",{attrs:{id:"慢开始和拥塞避免"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#慢开始和拥塞避免"}},[_._v("#")]),_._v(" 慢开始和拥塞避免")]),_._v(" "),v("ul",[v("li",[_._v("发送方维持一个叫做拥塞窗口 cwnd (congestion window)的状态变量\n拥塞窗口的大小取决于网络的拥塞程度，并且动态地在变化\n发送方让自己的发送窗口等于拥塞窗口\n如再考虑到接收方的接收能力，则发送窗口还可能小于拥塞窗口")]),_._v(" "),v("li",[_._v("发送方控制拥塞窗口的原则\n"),v("ul",[v("li",[_._v("网络没有出现拥塞，拥塞窗口就再增大一些，以便把更多的分组发送出去")]),_._v(" "),v("li",[_._v("网络出现拥塞，拥塞窗口就减小一些，以减少注入到网络中的分组数")])])])]),_._v(" "),v("h3",{attrs:{id:"慢开始算法的原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#慢开始算法的原理"}},[_._v("#")]),_._v(" 慢开始算法的原理")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("在主机刚刚开始发送报文段时可先设置拥塞窗口 cwnd = 1，即设置为一个最大报文段 MSS 的数值")])]),_._v(" "),v("li",[v("p",[_._v("在每收到一个对新的报文段的确认后，将拥塞窗口加 1，即增加一个 MSS 的数值")])]),_._v(" "),v("li",[v("p",[_._v("用这样的方法逐步增大发送端的拥塞窗口 cwnd，可以使分组注入到网络的速率更加合理")])]),_._v(" "),v("li",[v("p",[_._v("发送方每收到一个对新报文段的确认（重传的不算在内）就使 cwnd 加 1\n"),v("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210221135936183.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_SmF2YUVkZ2U=,size_16,color_FFFFFF,t_70",alt:""}})])])]),_._v(" "),v("h3",{attrs:{id:"传输轮次-transmission-round"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#传输轮次-transmission-round"}},[_._v("#")]),_._v(" 传输轮次(transmission round)")]),_._v(" "),v("ul",[v("li",[_._v("使用慢开始算法后，每经过一个传输轮次，拥塞窗口 cwnd 就加倍")]),_._v(" "),v("li",[_._v("一个传输轮次所经历的时间其实就是往返时间 RTT")]),_._v(" "),v("li",[_._v("“传输轮次”更加强调：把拥塞窗口 cwnd 所允许发送的报文段都连续发送出去，并收到了对已发送的最后一个字节的确认")]),_._v(" "),v("li",[_._v("例如，拥塞窗口 cwnd = 4，这时的往返时间 RTT 就是发送方连续发送 4 个报文段，并收到这 4 个报文段的确认，总共经历的时间")])]),_._v(" "),v("h3",{attrs:{id:"设置慢开始门限状态变量ssthresh"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设置慢开始门限状态变量ssthresh"}},[_._v("#")]),_._v(" 设置慢开始门限状态变量ssthresh")]),_._v(" "),v("ul",[v("li",[_._v("当 cwnd < ssthresh 时，使用慢开始算法。")]),_._v(" "),v("li",[_._v("当 cwnd > ssthresh 时，停止使用慢开始算法而改用拥塞避免算法。")]),_._v(" "),v("li",[_._v("当 cwnd = ssthresh 时，既可使用慢开始算法，也可使用拥塞避免算法。")]),_._v(" "),v("li",[_._v("拥塞避免算法的思路是让拥塞窗口 cwnd 缓慢地增大，即每经过一个往返时间 RTT 就把发送方的拥塞窗口 cwnd 加 1，而不是加倍，使拥塞窗口 cwnd 按线性规律缓慢增长")])]),_._v(" "),v("h3",{attrs:{id:"当网络出现拥塞时"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#当网络出现拥塞时"}},[_._v("#")]),_._v(" 当网络出现拥塞时")]),_._v(" "),v("ul",[v("li",[_._v("无论在慢开始阶段还是在拥塞避免阶段，只要发送方判断网络出现拥塞（其根据就是没有按时收到确认），就要把慢开始门限 ssthresh 设置为出现拥塞时的发送方窗口值的一半（但不能小于2）")]),_._v(" "),v("li",[_._v("然后把拥塞窗口 cwnd 重新设置为 1，执行慢开始算法")]),_._v(" "),v("li",[_._v("这样做的目的就是要迅速减少主机发送到网络中的分组数，使得发生拥塞的路由器有足够时间把队列中积压的分组处理完毕")])]),_._v(" "),v("h4",{attrs:{id:"_2-1-5-乘法减小-multiplicative-decrease"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-5-乘法减小-multiplicative-decrease"}},[_._v("#")]),_._v(" 2.1.5 乘法减小\v(multiplicative decrease)")]),_._v(" "),v("ul",[v("li",[_._v("不论在慢开始阶段还是拥塞避免阶段，只要出现一次超时（即出现一次网络拥塞），就把慢开始门限值 ssthresh 设置为当前的拥塞窗口值乘以 0.5")]),_._v(" "),v("li",[_._v("当网络频繁出现拥塞时，ssthresh 值就下降得很快，以大大减少注入到网络中的分组数")])]),_._v(" "),v("h4",{attrs:{id:"_2-1-6-加法增大-additive-increase"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-6-加法增大-additive-increase"}},[_._v("#")]),_._v(" 2.1.6 加法增大\v(additive increase)")]),_._v(" "),v("p",[_._v("执行拥塞避免算法后，在收到对所有报文段的确认后（即经过一个往返时间），就把拥塞窗口 cwnd增加一个 MSS 大小，使拥塞窗口缓慢增大，以防止网络过早出现拥塞。")])])}),[],!1,null,null,null);t.default=s.exports}}]);