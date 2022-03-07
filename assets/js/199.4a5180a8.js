(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{582:function(t,s,n){"use strict";n.r(s);var a=n(13),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_098-基于-timeout-机制来为商品服务接口的调用超时提供安全保护"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_098-基于-timeout-机制来为商品服务接口的调用超时提供安全保护"}},[t._v("#")]),t._v(" 098. 基于 timeout 机制来为商品服务接口的调用超时提供安全保护")]),t._v(" "),n("p",[t._v("一般来说在调用依赖服务的接口的时候，比较常见的一个问题就是 "),n("strong",[t._v("超时")])]),t._v(" "),n("p",[t._v("调用各种依赖服务，特别是在大公司，你所调用的服务你可能都不知道是谁写的，不知道这个人的技术水平，\n特别是分布式系统中，多个团队大型协作，服务是谁的，你不了解，很有可能是一个实习生写的。")]),t._v(" "),n("p",[t._v("如果你不对各种依赖服务调用做超时控制，那么很有可能你的服务就被各种垃圾依赖服务的性能给拖死了。")]),t._v(" "),n("p",[t._v("笔者在之前也说过一个血的教训：一个定时任务的系统中，用 quartz，大概有 200 多个定时任务，\n里面会调用第三方的依赖服务，运行一段时间之后，所有任务都不正常了，感觉假死一般。\n最后找到问题就是默认的 quartz 线程数量是 25 个，这 25 个线程在运行一个月左右就都被卡死了，\n通过 jconsole 找到有调用我们公司其他部门的服务，有第三方邮件发送接口的，\n由于之前对超时不重视，该系统经过了一年才找到这个问题根源（之前都不知道用 jconsole）")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Setter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("withGroupKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HystrixCommandGroupKey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Factory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("asKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test-group"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("andCommandPropertiesDefaults")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HystrixCommandProperties"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Setter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("withExecutionTimeoutInMilliseconds")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 超时配置")]),t._v("\n                        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("withExecutionTimeoutEnabled")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否开启超时")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 修改为 2 秒超时")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("p",[t._v("一般超时配置就这两个，但是有一个需要注意的点：当超时之后，如果你有降级机制，则会调用降级方法返回结果")]),t._v(" "),n("p",[t._v("对于超时的实验前面已经做过很多了，这里就不再写测试用例了")])])}),[],!1,null,null,null);s.default=e.exports}}]);