(window.webpackJsonp=window.webpackJsonp||[]).push([[1331],{1729:function(_,i,v){"use strict";v.r(i);var a=v(13),t=Object(a.a)({},(function(){var _=this,i=_.$createElement,v=_._self._c||i;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[_._v("计网的目的是实现计算机资源共享,即共享硬件,软件,数据。")]),_._v(" "),v("h1",{attrs:{id:"第一章"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第一章"}},[_._v("#")]),_._v(" 第一章")]),_._v(" "),v("p",[_._v("处在互联网边缘的部分就是连接在互联网上的所有的主机。这些主机又称为端系统(end system)。")]),_._v(" "),v("h2",{attrs:{id:"_1-网络边缘端系统之间的通信方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-网络边缘端系统之间的通信方式"}},[_._v("#")]),_._v(" 1 网络边缘端系统之间的通信方式")]),_._v(" "),v("ul",[v("li",[_._v("C/S方式\n"),v("ul",[v("li",[_._v("客户(client)和服务器(server)都是指通信中所涉及的两个应用进程。")]),_._v(" "),v("li",[_._v("客户服务器方式所描述的是进程之间服务和被服务的关系。")]),_._v(" "),v("li",[_._v("客户是服务的请求方，服务器是服务的提供方。")])])]),_._v(" "),v("li",[_._v("P2P方式\n"),v("ul",[v("li",[_._v("对等连接(peer-to-peer，简写为 P2P)是指两个主机在通信时并不区分哪一个是服务请求方还是服务提供方。")]),_._v(" "),v("li",[_._v("只要两个主机都运行了对等连接软件（P2P 软件），它们就可以进行平等的、对等连接通信。")]),_._v(" "),v("li",[_._v("双方都可以下载对方已经存储在硬盘中的共享文档。")])])])]),_._v(" "),v("h2",{attrs:{id:"_2-带宽、时延"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-带宽、时延"}},[_._v("#")]),_._v(" 2 带宽、时延")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("带宽表示通信线路传送数据的能力,是数字信道所能传送的“最高数据率”的同义语，单位是“比特每秒”，或 b/s (bit/s)"),v("br"),_._v("\n更常用的带宽单位是\n千比每秒，即 kb/s （10^3 b/s）\n兆比每秒，即 Mb/s（10^6 b/s）\n吉比每秒，即 Gb/s（10^9 b/s）\n太比每秒，即 Tb/s（10^12 b/s）")])]),_._v(" "),v("li",[v("p",[_._v("时延")]),_._v(" "),v("ul",[v("li",[_._v("发送时延（传输时延）\n发送数据时，数据块从结点进入到传输媒体所需要的时间。\n也就是从发送数据帧的第一个比特算起，到该帧的最后一个比特发送完毕所需的时间。\n"),v("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4685968-1dbcf3bc630c75d4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"发送时延计算公式"}})]),_._v(" "),v("li",[_._v("传播时延"),v("br"),_._v("\n电磁波在信道中传播一定的距离而需要花费的时间。\n信号传输速率（即发送速率）和信号在信道上的传播速率是完全不同的概念。\n"),v("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4685968-ae51523c99e2b17f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"传播时延计算公式"}})]),_._v(" "),v("li",[_._v("处理时延"),v("br"),_._v("\n交换结点为存储转发而进行一些必要的处理所花费的时间。")]),_._v(" "),v("li",[_._v("排队时延"),v("br"),_._v("\n结点缓存队列中分组排队所经历的时延。排队时延的长短往往取决于网络中当时的通信量。")])])])]),_._v(" "),v("p",[_._v("数据经历的总时延就是发送时延、传播时延、处理时延和排队时延之和：\n"),v("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4685968-a34bffe0e9f30a4f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"总时延计算公式"}}),_._v(" "),v("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4685968-d982fe7a2299cb8e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"四种时延产生的地方 "}}),_._v("\n对于高速网络链路，我们提高的仅仅是数据的发送速率而不是比特在链路上的传播速率。\n提高链路带宽减小了数据的发送时延")]),_._v(" "),v("h2",{attrs:{id:"_3osi-开放系统互联模型-七层体系结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3osi-开放系统互联模型-七层体系结构"}},[_._v("#")]),_._v(" ３OSI(开放系统互联模型)七层体系结构")]),_._v(" "),v("p",[_._v("包括应用层、表示层、会话层、运输层、网络层、数据链路层和物理层。")]),_._v(" "),v("p",[_._v("所谓“开放系统”，即只要遵循 OSI 标准，一个系统就可以和位于世界上任何地方的、也遵循这同一标准的其他任何系统进行通信。\n但是法律上的国际标准 OSI 并没有得到市场的认可")]),_._v(" "),v("ul",[v("li",[_._v("OSI 的专家们在完成 OSI 标准时没有商业驱动力")]),_._v(" "),v("li",[_._v("OSI 的协议实现起来过分复杂，且运行效率很低")]),_._v(" "),v("li",[_._v("OSI 标准的制定周期太长，因而使得按 OSI 标准生产的设备无法及时进入市场")]),_._v(" "),v("li",[_._v("OSI 的层次划分并也不太合理，有些功能在多个层次中重复出现")])]),_._v(" "),v("p",[_._v("网络协议(network protocol)，简称为协议，是为进行网络中的数据交换而建立的规则、标准或约定。")]),_._v(" "),v("p",[_._v("体系结构(architecture)是计算机网络的各层及其协议的集合。是这个计算机网络及其构件所应完成的功能的精确定义。")]),_._v(" "),v("h2",{attrs:{id:"_4-tcp-ip四层网络体系结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-tcp-ip四层网络体系结构"}},[_._v("#")]),_._v(" 4 TCP/IP四层网络体系结构")]),_._v(" "),v("ul",[v("li",[_._v("应用层\n应用进程间的通信和交互，交互的数据单元为报文")]),_._v(" "),v("li",[_._v("传输层\n负责端到端的数据传输等，提供通用的数据传输服务，传输控制协议（TCP）数据传输的单位是报文段，用户数据报协议（UDP）数据传输的单位是用户数据报")]),_._v(" "),v("li",[_._v("网络层\n负责端到端的寻址和建立连接，把报文段或用户数据报封装成分组或包进行传送")]),_._v(" "),v("li",[_._v("网络接口层（链路层）\n实现什么样的接口")])]),_._v(" "),v("h2",{attrs:{id:"_5-理解五层协议的网络体系结构及各层的主要功能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-理解五层协议的网络体系结构及各层的主要功能"}},[_._v("#")]),_._v(" 5 理解五层协议的网络体系结构及各层的主要功能")]),_._v(" "),v("ul",[v("li",[_._v("应用层\n应用进程间的通信和交互，交互的数据单元为报文")]),_._v(" "),v("li",[_._v("运输层\n提供通用的数据传输服务，传输控制协议（TCP）数据传输的单位是报文段，用户数据报协议（UDP）数据传输的单位是用户数据报")]),_._v(" "),v("li",[_._v("网络层\n把报文段或用户数据报封装成分组或包进行传送")]),_._v(" "),v("li",[_._v("数据链路层，把IP数据报组装成帧")]),_._v(" "),v("li",[_._v("物理层\n实现什么样的接口")])]),_._v(" "),v("h2",{attrs:{id:"_6-区分实体、协议与服务的概念及联系"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-区分实体、协议与服务的概念及联系"}},[_._v("#")]),_._v(" 6 区分实体、协议与服务的概念及联系")]),_._v(" "),v("ul",[v("li",[_._v("实体\n表示任何可发送或接收信息的硬件或软件进程。")]),_._v(" "),v("li",[_._v("协议\n控制两个对等实体进行通信的规则的集合")])]),_._v(" "),v("p",[_._v("在协议的控制下，两个对等实体间的通信使得本层能够向上一层提供服务。\n要实现本层协议，还需要使用下层所提供的服务。\n本层的服务用户只能看见服务而无法看见下面的协议。\n下面的协议对上面的服务用户是透明的。\n协议是“水平的”，即协议是控制对等实体之间通信的规则。\n服务是“垂直的”，即服务是由下层向上层通过层间接口提供的。\n同一系统相邻两层的实体进行交互的地方，称为服务访问点 SAP (Service Access Point)。"),v("br"),_._v(" "),v("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4685968-d0100b0722cd068d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"实体、协议、服务\v和服务访问点"}})]),_._v(" "),v("h1",{attrs:{id:"第二章"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第二章"}},[_._v("#")]),_._v(" 第二章")]),_._v(" "),v("h2",{attrs:{id:"_1-物理层的主要任务"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-物理层的主要任务"}},[_._v("#")]),_._v(" 1 物理层的主要任务")]),_._v(" "),v("p",[_._v("确定与传输媒体的接口有关的一些特性")]),_._v(" "),v("ul",[v("li",[_._v("机械特性    指明接口所用接线器的形状和尺寸、引线数目和排列、固定和锁定装置等等。")]),_._v(" "),v("li",[_._v("电气特性    指明在接口电缆的各条线上出现的电压的范围。")]),_._v(" "),v("li",[_._v("功能特性    指明某条线上出现的某一电平的电压表示何种意义。")]),_._v(" "),v("li",[_._v("过程特性    指明对于不同功能的各种可能事件的出现顺序。")])]),_._v(" "),v("h2",{attrs:{id:"_2-香农公式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-香农公式"}},[_._v("#")]),_._v(" 2 香农公式")]),_._v(" "),v("p",[_._v("香农(Shannon)公式：带宽受限、有噪声的信道的极限、无差错的信息传输速率。\n信道的极限信息传输速率 C 可表达为\nC = W log2(1+S/N)  b/s\nW 为信道的带宽（以 Hz 为单位）；\nS 为信道内所传信号的平均功率；\nN 为信道内部的高斯噪声功率。")]),_._v(" "),v("ul",[v("li",[_._v("信道的带宽或信道中的信噪比越大，则信息的极限传输速率就越高。")]),_._v(" "),v("li",[_._v("只要信息传输速率低于信道的极限信息传输速率，就一定可以找到某种办法来实现无差错的传输。")]),_._v(" "),v("li",[_._v("若信道带宽 W 或信噪比 S/N 没有上限（当然实际信道不可能是这样的），则信道的极限信息传输速率 C 也就没有上限。")]),_._v(" "),v("li",[_._v("实际信道上能够达到的信息传输速率要比香农的极限传输速率低不少。")])]),_._v(" "),v("h2",{attrs:{id:"_3-时分复用、频分复用、波分复用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-时分复用、频分复用、波分复用"}},[_._v("#")]),_._v(" 3 时分复用、频分复用、波分复用")]),_._v(" "),v("ul",[v("li",[_._v("频分复用 FDM\n"),v("ul",[v("li",[_._v("用户在分配到一定的频带后，在通信过程中自始至终都占用这个频带")]),_._v(" "),v("li",[_._v("频分复用的所有用户在同样的时间占用不同的带宽资源（请注意，这里的“带宽”是频率带宽而不是数据的发送速率）\n"),v("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4685968-ad2bb4a4b63effcb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"频分复用图解"}})])])]),_._v(" "),v("li",[_._v("时分复用\n"),v("ul",[v("li",[_._v("将时间划分为一段段等长的时分复用帧（TDM 帧）。每一个时分复用的用户在每一个 TDM 帧中占用固定序号的时隙")]),_._v(" "),v("li",[_._v("每一个用户所占用的时隙是周期性地出现（其周期就是 TDM  帧的长度）")]),_._v(" "),v("li",[_._v("TDM 信号也称为等时信号")]),_._v(" "),v("li",[_._v("时分复用的所有用户是在不同的时间占用同样的频带宽度\n"),v("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4685968-78aa22bf46d8cdc1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"时分复用图解"}}),_._v("\n使用时分复用系统传送计算机数据时，由于计算机数据的突发性质，用户对分配到的子信道的利用率一般是不高的。")])])]),_._v(" "),v("li",[_._v("波分复用WDM\v(Wavelength Division Multiplexing)\n波分复用就是光的频分复用")])]),_._v(" "),v("h2",{attrs:{id:"_4-码分多址cdma-code-division-multiple-access"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-码分多址cdma-code-division-multiple-access"}},[_._v("#")]),_._v(" 4 码分多址CDMA(Code Division Multiple Access)")]),_._v(" "),v("p",[_._v("各用户使用经过特殊挑选的不同码型，因此彼此不会造成干扰。\n这种系统发送的信号有很强的抗干扰能力，其频谱类似于白噪声，不易被敌人发现。\n每一个比特时间划分为 m 个短的间隔，称为码片(chip)。")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("优点")]),_._v(" "),v("ul",[v("li",[_._v("提高通信的话音质量和数据传输的可靠性")]),_._v(" "),v("li",[_._v("减少干扰对通信的影响")]),_._v(" "),v("li",[_._v("增大通信系统的容量（是使用GSM的4~5倍）")]),_._v(" "),v("li",[_._v("降低手机的平均发生功率")])])]),_._v(" "),v("li",[v("p",[_._v("码片序列")]),_._v(" "),v("ul",[v("li",[_._v("每个站被指派一个唯一的 m bit 码片序列，其中“0”用“-1”表示，“1”用“+1”表示，例如：\nS 站的码片序列：(–1 –1 –1 +1 +1 –1 +1 +1)")]),_._v(" "),v("li",[_._v("各用于使用相同频率载波，利用各自码片序列编码数据")]),_._v(" "),v("li",[_._v("编码信号 =（原始数据）*（码片序列）\n如发送比特 1，则发送自己的 m bit 码片序列。\n如发送比特 0，则发送该码片序列的二进制反码\n例如，S 站的 8 bit 码片序列是 00011011，也即：(–1 –1 –1 +1 +1 –1 +1 +1) 。\n发送比特 1 （+1）时，就发送序列 00011011，\n发送比特 0 （-1）时，就发送序列 11100100。")])])]),_._v(" "),v("li",[v("p",[_._v("重要特点")]),_._v(" "),v("ul",[v("li",[_._v("每个站分配的码片序列不仅必须各不相同，并且还必须互相正交(orthogonal)。")]),_._v(" "),v("li",[_._v("在实用的系统中是使用伪随机码序列。")])])])])])}),[],!1,null,null,null);i.default=t.exports}}]);