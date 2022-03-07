(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{618:function(s,a,t){"use strict";t.r(a);var e=t(13),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_021-redis-哨兵架构的相关基础知识的讲解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_021-redis-哨兵架构的相关基础知识的讲解"}},[s._v("#")]),s._v(" 021. redis 哨兵架构的相关基础知识的讲解")]),s._v(" "),t("h2",{attrs:{id:"哨兵的介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#哨兵的介绍"}},[s._v("#")]),s._v(" 哨兵的介绍")]),s._v(" "),t("p",[s._v("sentinal 中文名是哨兵")]),s._v(" "),t("p",[s._v("哨兵是 redis 集群架构中非常重要的一个组件，主要功能如下")]),s._v(" "),t("ul",[t("li",[s._v("集群监控：负责监控 redis master 和 slave 进程是否正常工作")]),s._v(" "),t("li",[s._v("消息通知：如果某个 redis 实例有故障，那么哨兵负责发送消息作为报警通知给管理员")]),s._v(" "),t("li",[s._v("故障转移：如果 master node 挂掉了，会自动转移到 slave node 上")]),s._v(" "),t("li",[s._v("配置中心：如果故障转移发生了，通知 client 客户端新的 master 地址")])]),s._v(" "),t("p",[s._v("哨兵本身也是分布式的，作为一个哨兵集群去运行，互相协同工作")]),s._v(" "),t("ul",[t("li",[s._v("故障转移时，判断一个 master node 是宕机了，需要大部分的哨兵都同意才行，涉及到了分布式选举的问题")]),s._v(" "),t("li",[s._v("即使部分哨兵节点挂掉了，哨兵集群还是能正常工作的，因为如果一个作为高可用机制重要组成部分的故障转移系统本身是单点的，那就很坑爹了")])]),s._v(" "),t("p",[s._v("目前采用的是 sentinal 2 版本，相对于 sentinal 1 来说，重写了很多代码，主要是让故障转移的机制和算法变得更加健壮和简单")]),s._v(" "),t("h2",{attrs:{id:"哨兵的核心知识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#哨兵的核心知识"}},[s._v("#")]),s._v(" 哨兵的核心知识")]),s._v(" "),t("ul",[t("li",[s._v("哨兵至少需要 3 个实例，来保证自己的健壮性")]),s._v(" "),t("li",[s._v("哨兵 + redis 主从的部署架构，是不会保证数据零丢失的，只能保证 redis 集群的高可用性")]),s._v(" "),t("li",[s._v("对于哨兵 + redis 主从这种复杂的部署架构，尽量在测试环境和生产环境，都进行充足的测试和演练")])]),s._v(" "),t("p",[s._v("需要进行充足的测试，可用把生产数据拿过来进行容灾演练")]),s._v(" "),t("h2",{attrs:{id:"为什么-redis-哨兵集群只有-2-个节点无法正常工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么-redis-哨兵集群只有-2-个节点无法正常工作"}},[s._v("#")]),s._v(" 为什么 redis 哨兵集群只有 2 个节点无法正常工作？")]),s._v(" "),t("p",[s._v("哨兵集群必须部署 2 个以上节点，如果哨兵集群仅仅部署了个 2 个哨兵实例，且 Configuration: quorum = 1 （只有一个节点投票通过就算选举成功）")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+----+         +----+\n| M1 |---------| R1 |\n| S1 |         | S2 |\n+----+         +----+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("master 宕机，s1 和 s2 中只要有 1 个哨兵认为 master 宕机就可以切换，同时 s1 和 s2 中会选举出一个哨兵来执行故障转移")]),s._v(" "),t("p",[s._v("这个时候，需要 majority，也就是大多数哨兵都是运行的，2 个哨兵的 majority 就是 2（因为至少是 2 个节点以上，2 的 majority=2，3的 majority=2，5 的 majority=3，4 的 majority=2），2 个哨兵都运行着，就可以允许执行故障转移")]),s._v(" "),t("p",[s._v("但是如果整个 M1 和 S1 运行的机器宕机了，那么哨兵只有 1 个了，此时就没有 majority 来允许执行故障转移，虽然另外一台机器还有一个 R1，但是故障转移不会执行")]),s._v(" "),t("h2",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])]),s._v(" "),t("p",[s._v("4、经典的 3 节点哨兵集群")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("       +----+\n       | M1 |\n       | S1 |\n       +----+\n          |\n+----+    |    +----+\n| R2 |----+----| R3 |\n| S2 |         | S3 |\n+----+         +----+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("Configuration: quorum = 2，majority")]),s._v(" "),t("p",[s._v("如果 M1 所在机器宕机了，那么三个哨兵还剩下 2 个，S2 和 S3 可以一致认为 master 宕机，然后选举出一个来执行故障转移")]),s._v(" "),t("p",[s._v("同时 3 个哨兵的 majority 是 2，所以还剩下的 2 个哨兵运行着，就可以允许执行故障转移")])])}),[],!1,null,null,null);a.default=r.exports}}]);