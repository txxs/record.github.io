(window.webpackJsonp=window.webpackJsonp||[]).push([[305],{689:function(t,e,r){"use strict";r.r(e);var o=r(13),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h3",{attrs:{id:"分布式协调"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分布式协调"}},[t._v("#")]),t._v(" 分布式协调")]),t._v(" "),r("p",[t._v("这个其实是 zookeeper 很经典的一个用法，简单来说，就好比，你 A 系统发送个请求到 mq，然后 B 系统消息消费之后处理了。那 A 系统如何知道 B 系统的处理结果？用 zookeeper 就可以实现分布式系统之间的协调工作。A 系统发送请求之后可以在 zookeeper 上"),r("strong",[t._v("对某个节点的值注册个监听器")]),t._v("，一旦 B 系统处理完了就修改 zookeeper 那个节点的值，A 立马就可以收到通知，完美解决。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://txxs.github.io/pic/javainterview/zookeeper1.png",alt:""}})]),t._v(" "),r("h3",{attrs:{id:"分布式锁"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分布式锁"}},[t._v("#")]),t._v(" 分布式锁")]),t._v(" "),r("p",[t._v("举个栗子。对某一个数据连续发出两个修改操作，两台机器同时收到了请求，但是只能一台机器先执行完另外一个机器再执行。那么此时就可以使用 zookeeper 分布式锁，一个机器接收到了请求之后先获取 zookeeper 上的一把分布式锁，就是可以去创建一个 znode，接着执行操作；然后另外一个机器也"),r("strong",[t._v("尝试去创建")]),t._v("那个 znode，结果发现自己创建不了，因为被别人创建了，那只能等着，等第一个机器执行完了自己再执行。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://txxs.github.io/pic/javainterview/zookeeper2.png",alt:""}})]),t._v(" "),r("h3",{attrs:{id:"元数据-配置信息管理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#元数据-配置信息管理"}},[t._v("#")]),t._v(" 元数据/配置信息管理")]),t._v(" "),r("p",[t._v("zookeeper 可以用作很多系统的配置信息的管理，比如 kafka、storm 等等很多分布式系统都会选用 zookeeper 来做一些元数据、配置信息的管理，包括 dubbo 注册中心不也支持 zookeeper 么？")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://txxs.github.io/pic/javainterview/zookeeper3.png",alt:""}})]),t._v(" "),r("h3",{attrs:{id:"ha高可用性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ha高可用性"}},[t._v("#")]),t._v(" HA高可用性")]),t._v(" "),r("p",[t._v("这个应该是很常见的，比如 hadoop、hdfs、yarn 等很多大数据系统，都选择基于 zookeeper 来开发 HA 高可用机制，就是一个"),r("strong",[t._v("重要进程一般会做主备")]),t._v("两个，主进程挂了立马通过 zookeeper 感知到切换到备用进程。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://txxs.github.io/pic/javainterview/zookeeper4.png",alt:""}})]),t._v(" "),r("p",[t._v("https://github.com/doocs/advanced-java/blob/master/docs/distributed-system/zookeeper-application-scenarios.md")]),t._v(" "),r("p",[t._v("欢迎光临"),r("a",{attrs:{href:"http://www.wangtianyi.top/?utm_source=github&utm_medium=github",target:"_blank",rel:"noopener noreferrer"}},[t._v("我的博客"),r("OutboundLink")],1),t._v("，发现更多技术资源~")])])}),[],!1,null,null,null);e.default=a.exports}}]);