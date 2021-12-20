(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{484:function(v,a,t){"use strict";t.r(a);var _=t(13),s=Object(_.a)({},(function(){var v=this,a=v.$createElement,t=v._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"_061-java-程序员、缓存架构以及-storm-大数据实时计算之间的关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_061-java-程序员、缓存架构以及-storm-大数据实时计算之间的关系"}},[v._v("#")]),v._v(" 061. Java 程序员、缓存架构以及 Storm 大数据实时计算之间的关系")]),v._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#缓存架构和-storm-的关系"}},[v._v("缓存架构和 storm 的关系")])]),t("li",[t("a",{attrs:{href:"#java-工程师与-storm-之间的关系是什么"}},[v._v("java 工程师与 storm 之间的关系是什么？")])]),t("li",[t("a",{attrs:{href:"#java-系统与大数据的关系"}},[v._v("java 系统与大数据的关系")])]),t("li",[t("a",{attrs:{href:"#旁白"}},[v._v("旁白")])])])]),t("p"),v._v(" "),t("p",[v._v("接下来，我们是要讲解这个商品详情页缓存架构，缓存预热问题和解决方案，缓存热点数据可能导致整个系统崩溃的问题，以及解决方案")]),v._v(" "),t("p",[v._v("缓存相关的「热」：预热、热数据")]),v._v(" "),t("p",[v._v("在解决方案和架构设计中，会引入大数据的实时计算的技术 storm。为什么要引入这个 storm，难道必须是 storm 吗？我们后面去讲解那个解决方案的时候再说")]),v._v(" "),t("h2",{attrs:{id:"缓存架构和-storm-的关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存架构和-storm-的关系"}},[v._v("#")]),v._v(" 缓存架构和 storm 的关系")]),v._v(" "),t("p",[v._v("因为有些热点数据相关的一些实时处理的一些方案，比如快速预热，热点数据的实时感知和快速降级，全部要用到 storm")]),v._v(" "),t("p",[v._v("因为我们可能需要实时的去计算出热点缓存数据，我们的业务场景是亿级流量、高并发、大量的请求过来\n，这个时候，你要做一些实时的计算，那么必须涉及到分布式的一些技术，才能处理高并发，大量的请求，目前在时候计算的领域，最成熟的大数据的技术，就是 storm")]),v._v(" "),t("h2",{attrs:{id:"java-工程师与-storm-之间的关系是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-工程师与-storm-之间的关系是什么"}},[v._v("#")]),v._v(" java 工程师与 storm 之间的关系是什么？")]),v._v(" "),t("p",[v._v("由于一直在大公司（BAT 等一线公司），所以我（讲师）认识的很多的 java 工程师；\n本身自己之前是做 java 开发和架构，后来开始大数据的架构。")]),v._v(" "),t("p",[v._v("大公司里的很多 java 工程师，都是会用一些大数据的一些技术的，比如 storm、hbase、zookeeper、hive、spark，\n因为在大公司里，容易遇到一些复杂的挑战和场景，比如高并发、海量数据的场景")]),v._v(" "),t("p",[v._v("你做一些 java 相关的项目和系统，可能也会遇到这种问题，很多时候，直接用大数据的一些技术，\n实时计算，你是自己去写个系统，还是用现成的 storm？")]),v._v(" "),t("p",[v._v("我也只是说部分 java 的人，但是也有很多搞 java 的工程师就是纯 java 技术栈")]),v._v(" "),t("h2",{attrs:{id:"java-系统与大数据的关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-系统与大数据的关系"}},[v._v("#")]),v._v(" java 系统与大数据的关系")]),v._v(" "),t("p",[v._v("大数据不仅仅只是大数据工程师要关注的东西，\n大数据也是 Java 程序员在构建各类系统的时候一种全新的思维，以及架构理念，\n比如 Storm、Hive、Spark、ZooKeeper、HBase、Elasticsearch 等等")]),v._v(" "),t("p",[v._v("举例说明：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("Storm：实时计算")]),v._v(" "),t("p",[v._v("实时缓存热点数据统计 -> 缓存预热 -> 缓存热点数据自动降级")])]),v._v(" "),t("li",[t("p",[v._v("Hive：数据仓库")]),v._v(" "),t("p",[v._v("Hadoop 生态栈里面，比如做一个数据仓库的系统，高并发访问下，海量请求日志的批量统计分析，日报周报月报，接口调用情况，业务使用情况，等等")]),v._v(" "),t("p",[v._v("我所知，在一些大公司里面，是有些人是将海量的请求日志打到 hive 里面，做离线的分析，然后反过来去优化自己的系统")])]),v._v(" "),t("li",[t("p",[v._v("Spark：离线批量数据处理")]),v._v(" "),t("p",[v._v("比如从 DB 中一次性批量处理几亿数据，清洗和处理后写入 Redis 中供后续的系统使用，大型互联网公司的用户相关数据")])]),v._v(" "),t("li",[t("p",[v._v("ZooKeeper：分布式系统的协调")]),v._v(" "),t("p",[v._v("分布式锁，分布式选举->高可用 HA 架构，轻量级元数据存储")]),v._v(" "),t("p",[v._v("如：用 java 开发了分布式的系统架构，你的整套系统拆分成了多个部分，每个部分都会负责一些功能，\n互相之间需要交互和协调；")]),v._v(" "),t("p",[v._v("服务 A 说：我在处理某件事情的时候，服务 B 你就别处理了")]),v._v(" "),t("p",[v._v("服务 A 说：我一旦发生了某些状况，希望服务 B 你立即感知到，然后做出相应的对策")])]),v._v(" "),t("li",[t("p",[v._v("HBase：海量数据的在线存储和简单查询，替代 MySQL 分库分表，提供更好的伸缩性")]),v._v(" "),t("p",[v._v("如：java 底层对应的是海量数据，然后要做一些简单的存储和查询，同时数据增多的时候要快速扩容")]),v._v(" "),t("p",[v._v("这种场景下 mysql 分库分表就不太合适了，mysql 分库分表扩容，还是比较麻烦的")])]),v._v(" "),t("li",[t("p",[v._v("Elasticsearch：海量数据的复杂检索以及搜索引擎的构建")]),v._v(" "),t("p",[v._v("支撑有大量数据的各种企业信息化系统的搜索引擎，电商/新闻等网站的搜索引擎，等等")]),v._v(" "),t("p",[v._v('比用 mysql 的 like "%xxxx%"，更加合适一些，性能更加好')])])]),v._v(" "),t("h2",{attrs:{id:"旁白"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#旁白"}},[v._v("#")]),v._v(" 旁白")]),v._v(" "),t("p",[v._v("大家不要说觉得来听课程，就必须每堂课都是代码，代码，代码，就不喜欢听我这些废话")]),v._v(" "),t("p",[v._v("我告诉大家，这些还真不是废话，代码很重要，手写代码，不能出现 copy。\n我可能做为一个过来人，很多项目都做过，很多技术都用过，也做过。")]),v._v(" "),t("p",[v._v("站在我的角度，去给大家讲一讲，行业，一些技术领域的问题")])])}),[],!1,null,null,null);a.default=s.exports}}]);