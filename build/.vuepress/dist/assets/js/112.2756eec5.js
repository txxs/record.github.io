(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{503:function(s,t,a){"use strict";a.r(t);var n=a(13),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_114-为-redis-集群崩溃时的场景部署定制化的熔断策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_114-为-redis-集群崩溃时的场景部署定制化的熔断策略"}},[s._v("#")]),s._v(" 114. 为 redis 集群崩溃时的场景部署定制化的熔断策略")]),s._v(" "),a("p",[s._v("缓存雪崩的解决方案的事中解决方案：发生缓存雪崩的时候")]),s._v(" "),a("p",[s._v("当 redis 集群崩溃的时候，会怎样?")]),s._v(" "),a("ol",[a("li",[s._v("首先大量的超时、等待、报错")]),s._v(" "),a("li",[s._v("如果是短时间内报错，会直接走 fallback 降级，直接返回 null")]),s._v(" "),a("li",[s._v("如果是大面积超时报错，就会开启短路器")])]),s._v(" "),a("p",[s._v("这里就涉及到这几个参数的调整，不推荐使用默认值，需要根据业务场景和一定实际测试得出来的")]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#timeout-超时"}},[s._v("timeout 超时")])]),a("li",[a("a",{attrs:{href:"#熔断策略"}},[s._v("熔断策略")])]),a("li",[a("a",{attrs:{href:"#有关配置代码"}},[s._v("有关配置代码")])]),a("li",[a("a",{attrs:{href:"#hystrix-配置默认值"}},[s._v("hystrix 配置默认值")])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"timeout-超时"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timeout-超时"}},[s._v("#")]),s._v(" timeout 超时")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HystrixCommandProperties"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Setter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("withExecutionTimeoutInMilliseconds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("实际超时参数推荐先使用 hystrix dashboard 统计下 Tp99/95/90 ，\n假设 TP99 在 100ms，设置为 100ms + 10ms 就可以了。\n（在讲 hystrix 的时候，对于这个超时的计算感觉有点复杂，没有太搞明白）")]),s._v(" "),a("p",[s._v("配置超时的意义? 一旦 redis 出现了大面积故障，此时肯定访问耗时超过 100ms 以上，大量等待和超时，\n此时超时的意义就有了，保证了不会让大量请求阻塞过长时间。在 hystrix 中超时就走 fallback 降级了")]),s._v(" "),a("h2",{attrs:{id:"熔断策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#熔断策略"}},[s._v("#")]),s._v(" 熔断策略")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HystrixCommandProperties"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Setter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("withCircuitBreakerRequestVolumeThreshold")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("在滑动窗口中（rolling window），最少有多少个请求（默认为 20），才出发短路")]),s._v(" "),a("p",[s._v("如果设置为 20，那么在一个 10秒 的滑动窗口内，如果只有 19 个请求，就算这 19个 请求都是异常的，\n也不会出发短路器")]),s._v(" "),a("p",[s._v("这个滑动请求数量，也应该根据业务访问量来设置；\n比如平时一般的时候，浏览也可以再每秒 QPS 100，10秒 的滑动窗口也就是 1000，\n一般来说，就可以设置为 1000 左右，该值过大或过小都不太合适")]),s._v(" "),a("p",[s._v("举个例子：假如设置为 20 ，那么在晚上最低峰的时候，刚好是 30 ，而且刚好超时多了一些，\n结果就直接给短路了")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HystrixCommandProperties"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Setter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("withCircuitBreakerErrorThresholdPercentage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("这是异常请求量的百分比，当异常请求达到这个百分比时，就打开短路器，默认为 50 （也就是 50%）")]),s._v(" "),a("p",[s._v("同样，该值也需要根据业务场景来配置，比如 redis 真正崩溃了，那么肯定是百分百都超时异常了，\n但是还有一种情况，可能是网络抖动导致短时间内超时，比如 10秒，1分钟 后就正常了")]),s._v(" "),a("p",[s._v("还有一种业务情况，金融类支付接口：这类接口可能就会设置得很低，因为对异常必须敏感，\n可能就 10% 异常，就开启短路了，因为要求改接口必须稳定，不能容忍任何的延迟或是报错，\n一旦有 10% 异常的话，基本上就可以认为这个接口已经出问题了，再继续提供服务的话，\n有可能造成资金的错乱等问题，造成实际损失；")]),s._v(" "),a("p",[s._v("针对我们的缓存来说，对异常不是特别的敏感，这里设置为 80%")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("RequestVolumeThreshold 与 ErrorThresholdPercentage 是一个组合参数啊，\n需要满足这两个条件才会触发，需要一起考虑")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("HystrixCommandProperties.Setter()\n  .withCircuitBreakerSleepWindowInMilliseconds()\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("在短路之后，需要在多长实际内直接 reject 请求？在这段时间之后，再重新 holf-open 状态，\n尝试允许请求通过以及自动回复。默认值是 5000ms")]),s._v(" "),a("p",[s._v("同样，看场景。比如 redis 崩溃了，能在 5秒 内恢复吗？\n当然短路器开启与多方维度有关系，该值可以短一点，而且还有一个 holf-open 流程状态，\n也不能太短，太短的话，也是没有任何意义的。")]),s._v(" "),a("p",[s._v("本列设置为 1 分钟")]),s._v(" "),a("h2",{attrs:{id:"有关配置代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有关配置代码"}},[s._v("#")]),s._v(" 有关配置代码")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("andCommandPropertiesDefaults")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HystrixCommandProperties"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Setter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("withExecutionTimeoutInMilliseconds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("withCircuitBreakerRequestVolumeThreshold")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("withCircuitBreakerErrorThresholdPercentage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("withCircuitBreakerSleepWindowInMilliseconds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"hystrix-配置默认值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hystrix-配置默认值"}},[s._v("#")]),s._v(" hystrix 配置默认值")]),s._v(" "),a("p",[s._v("在以下类中定义的")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("netflix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hystrix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("HystrixCommandProperties")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);