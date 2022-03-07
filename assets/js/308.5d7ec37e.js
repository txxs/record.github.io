(window.webpackJsonp=window.webpackJsonp||[]).push([[308],{702:function(t,a,_){"use strict";_.r(a);var v=_(13),r=Object(v.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"业务上适当规避"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#业务上适当规避"}},[t._v("#")]),t._v(" 业务上适当规避")]),t._v(" "),_("ol",[_("li",[t._v("根据某些规则对部分用户直接返回没抢到。比如有些用户曾经被系统识别为恶意用户、垃圾用户、僵尸用户，直接告诉用户已经抢完")]),t._v(" "),_("li",[t._v("分散不同客户端打开活动入口的时间。比如将1秒内的流量分散到10秒")])]),t._v(" "),_("h2",{attrs:{id:"技术上硬核抗压"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#技术上硬核抗压"}},[t._v("#")]),t._v(" 技术上硬核抗压")]),t._v(" "),_("ol",[_("li",[t._v("限流策略。比如在压力测试中我们测到系统QPS达到了极限，那么超过的部分直接返回已经抢完，通过Nginx的lua脚本可以查redis看到QPS数据从而可以动态调节")]),t._v(" "),_("li",[t._v("异步削峰。对Redis中的红包预减数量，立即返回抢红包成功请用户等待，然后把发送消息发给消息队列，进行流量的第二次削峰，让后台服务慢慢处理")]),t._v(" "),_("li",[t._v("服务逻辑。比如业务逻辑是使用事务控制对数据库的创建订单记录，减库存的操作，那么创建操作要放到减库存操作之前，从而避免减数量update的行锁持有时间")]),t._v(" "),_("li",[t._v("机器配置。当然是服务器机器配置约高越好，数据库配置越猛越好，高并发抢红包主要是CPU与网络IO的负载较高，要选择偏向CPU与网络IO性能的机器")])]),t._v(" "),_("h3",{attrs:{id:"架构和实现细节"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#架构和实现细节"}},[t._v("#")]),t._v(" 架构和实现细节")]),t._v(" "),_("ul",[_("li",[t._v("前端模块（页面静态化、CDN、客户端缓存）")]),t._v(" "),_("li",[t._v("排队模块（Redis、队列实现异步下单）")]),t._v(" "),_("li",[t._v("服务模块（事务处理业务逻辑、避免并发问题）")]),t._v(" "),_("li",[t._v("防刷模块（验证码、限制用户频繁访问）")])]),t._v(" "),_("h3",{attrs:{id:"模块解析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模块解析"}},[t._v("#")]),t._v(" 模块解析")]),t._v(" "),_("h4",{attrs:{id:"前端模块"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前端模块"}},[t._v("#")]),t._v(" 前端模块")]),t._v(" "),_("ol",[_("li",[t._v("页面静态化，将后台渲染模板的方式改成使用HTML文件与AJAX异步请求的方式，减少服务端渲染开销，同时将秒杀页面提前放到CDN")]),t._v(" "),_("li",[t._v("客户端缓存，配置Cache-Control来让客户端缓存一定时间页面，提升用户体验")]),t._v(" "),_("li",[t._v("静态资源优化，CSS/JS/图片压缩，提升用户体验")])]),t._v(" "),_("h4",{attrs:{id:"排队模块"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#排队模块"}},[t._v("#")]),t._v(" 排队模块")]),t._v(" "),_("ol",[_("li",[t._v("对Redis中的抢购对象预减库存，然后立即返回抢购成功请用户等待，这里利用了Redis将大部分请求拦截住，少部分流量进入下一阶段")]),t._v(" "),_("li",[t._v("如果参与秒杀的商品太多，进入下一阶段的流量依然比较大，则需要使用消息队列，Redis过滤之后的请求直接放入到消息队列，让消息队列进行流量的第二次削峰")])]),t._v(" "),_("h4",{attrs:{id:"服务模块"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#服务模块"}},[t._v("#")]),t._v(" 服务模块")]),t._v(" "),_("ol",[_("li",[t._v("消息队列的消费者，业务逻辑是使用事务控制对数据库的下订单，减库存操作，且下订单操作要放到减库存操作之前，可以避免减库存update的行锁持有时间")])]),t._v(" "),_("h4",{attrs:{id:"防刷模块"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#防刷模块"}},[t._v("#")]),t._v(" 防刷模块")]),t._v(" "),_("ol",[_("li",[t._v("针对恶意用户写脚本去刷，在Redis中保存用户IP与商品ID进行限制")]),t._v(" "),_("li",[t._v("针对普通用户疯狂的点击，使用JS控制抢购按钮，每几秒才能点击一次")]),t._v(" "),_("li",[t._v("在后台生成数学计算型的验证码，使用Graphics、BufferedImage实现图片，ScriptEngineManager计算表达式")])]),t._v(" "),_("h4",{attrs:{id:"异常流程的处理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#异常流程的处理"}},[t._v("#")]),t._v(" 异常流程的处理")]),t._v(" "),_("ol",[_("li",[t._v("如果在秒杀的过程中由于服务崩溃导致秒杀活动中断，那么没有好的办法，只能立即尝试恢复崩溃服务或者申请另寻时间重新进行秒杀活动")]),t._v(" "),_("li",[t._v("如果在下订单的过程中由于用户的某些限制导致下单失败，那么应该回滚事务，立即告诉用户失败原因")])]),t._v(" "),_("h3",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),_("h4",{attrs:{id:"原则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#原则"}},[t._v("#")]),t._v(" 原则")]),t._v(" "),_("p",[t._v("业务优化思路：业务上适当规避"),_("br"),t._v("\n技术优化思路：尽量将请求拦截在数据库的上游，因为一旦大量请求进入数据库，性能会急剧下降"),_("br"),t._v("\n架构原则：合适、简单、演化（以上内容是最终版本，初版可以说没有用到队列，直接使用缓存-数据库这样的架构）")]),t._v(" "),_("h4",{attrs:{id:"难点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#难点"}},[t._v("#")]),t._v(" 难点")]),t._v(" "),_("ol",[_("li",[t._v("如何将高并发大流量一步步从业务和技术方面有条不紊地应对过来")]),t._v(" "),_("li",[t._v("如何在代码中处理好异常情况以及应急预案的准备")])]),t._v(" "),_("h4",{attrs:{id:"坑"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#坑"}},[t._v("#")]),t._v(" 坑")]),t._v(" "),_("ol",[_("li",[t._v("以上的解决方案能通过利用Redis与消息队列集群来承载非常高的并发量，但是运维成本高。比如Redis与消息队列都必须用到集群才能保证稳定性，会导致运维成本太高。所以需要有专业的运维团队维护。")]),t._v(" "),_("li",[t._v("避免同一用户同时下多个订单，需要写好业务逻辑或在订单表中加上用户ID与商品ID的唯一索引；避免卖超问题，在更新数量的sql上需要加上>0条件")])]),t._v(" "),_("h4",{attrs:{id:"优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优化"}},[t._v("#")]),t._v(" 优化")]),t._v(" "),_("ol",[_("li",[t._v("将7层负载均衡Nginx与4层负载均衡LVS一起使用进一步提高并发量")]),t._v(" "),_("li",[t._v("以上是应用架构上的优化，在部署的Redis、消息队列、数据库、虚拟机偏向选择带宽与硬盘读写速度高的")]),t._v(" "),_("li",[t._v("提前预热，将最新的静态资源同步更新到CDN的所有节点上，在Redis中提前加载好需要售卖的产品信息")]),t._v(" "),_("li",[t._v("使用分布式限流减少Redis访问压力，在Nginx中配置并发连接数与速度限制")])]),t._v(" "),_("p",[t._v("欢迎光临"),_("a",{attrs:{href:"http://www.wangtianyi.top/?utm_source=github&utm_medium=github",target:"_blank",rel:"noopener noreferrer"}},[t._v("我的博客"),_("OutboundLink")],1),t._v("，发现更多技术资源~")])])}),[],!1,null,null,null);a.default=r.exports}}]);