(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{400:function(t,r,a){t.exports=a.p+"assets/img/markdown-img-paste-20190106174604653.cac090f1.png"},680:function(t,r,a){"use strict";a.r(r);var s=a(13),e=Object(s.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"深度图解剖析-document-数据路由原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#深度图解剖析-document-数据路由原理"}},[t._v("#")]),t._v(" 深度图解剖析 document 数据路由原理")]),t._v(" "),s("h2",{attrs:{id:"什么是数据路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是数据路由"}},[t._v("#")]),t._v(" 什么是数据路由？")]),t._v(" "),s("p",[t._v("我们知道，一个 index 的数据会被分为多片，每片都在一个 shard 中，\n所以一个 document ，只能存在于一个 shard 中")]),t._v(" "),s("p",[t._v("当客户端创建 document 的时候，es 此时就需要决定这个 document 存放在哪一个 shard 上。")]),t._v(" "),s("p",[t._v("这个过程，就称之为 docum routing （数据路由）")]),t._v(" "),s("h2",{attrs:{id:"路由算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由算法"}},[t._v("#")]),t._v(" 路由算法")]),t._v(" "),s("ul",[s("li",[t._v("shard = hash(routing) % number_of_primary_shards")]),t._v(" "),s("li",[t._v("routing = "),s("code",[t._v("_id")]),t._v(" or custom routing value")])]),t._v(" "),s("p",[t._v("举个例子，一个 index 有3个 primary shard，P0，P1，P2")]),t._v(" "),s("p",[t._v("每次增删改查一个 document 的时候，都会带过来一个 routing number，\n默认就是这个 document 的 "),s("code",[t._v("_id")]),t._v("（可能是手动指定，也可能是自动生成）")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("routing = _id")]),t._v("，假设 "),s("code",[t._v("_id=1")])]),t._v(" "),s("li",[t._v("hash(1) % 3 = 0; 假设 hash 值为 6")])]),t._v(" "),s("h2",{attrs:{id:"手动指定-routing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#手动指定-routing"}},[t._v("#")]),t._v(" 手动指定 routing")]),t._v(" "),s("p",[t._v("默认的 routing 就是 "),s("code",[t._v("_id")])]),t._v(" "),s("p",[t._v("也可以在发送请求的时候，手动指定一个 routing value，比如说 "),s("code",[t._v("put /index/type/id?routing=user_id")])]),t._v(" "),s("p",[t._v("手动指定 routing value 是很有用的，可以保证说，某一类 document 一定被路由到一个 shard 上去，\n那么在后续进行应用级别的负载均衡，以及提升批量读取的性能的时候，是很有帮助的")]),t._v(" "),s("h2",{attrs:{id:"primary-shard-数量不可变的谜底"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#primary-shard-数量不可变的谜底"}},[t._v("#")]),t._v(" primary shard 数量不可变的谜底")]),t._v(" "),s("p",[t._v("路由算法限制，更改之后，那么就有部分旧数据的路由错误")]),t._v(" "),s("p",[s("img",{attrs:{src:a(400),alt:""}})])])}),[],!1,null,null,null);r.default=e.exports}}]);