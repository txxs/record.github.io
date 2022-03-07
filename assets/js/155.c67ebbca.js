(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{539:function(n,e,s){"use strict";s.r(e);var t=s(13),a=Object(t.a)({},(function(){var n=this,e=n.$createElement,s=n._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"_156-商品详情页动态渲染系统-spring-cloud-之-sleuth-调用链路追踪"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_156-商品详情页动态渲染系统-spring-cloud-之-sleuth-调用链路追踪"}},[n._v("#")]),n._v(" 156. 商品详情页动态渲染系统：Spring Cloud 之 Sleuth 调用链路追踪")]),n._v(" "),s("p",[n._v("在一个微服务系统中，一个请求过来，可能会经过一个很复杂的调用链路，经过多个服务的依次处理，才能完成。\n在这个调用链路过程中，可能任何一个环节都会出问题，所以如果要进行一些问题的定位，那么就要对每个调用链路进行追踪")]),n._v(" "),s("p",[n._v("课程中使用以下依赖与 "),s("code",[n._v("@EnableZipkinServer")]),n._v(" 注解实现")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("compile 'io.zipkin.java:zipkin-server'\ncompile 'io.zipkin.java:zipkin-autoconfigure-ui'\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br")])]),s("p",[n._v("在 spring boot 2 中此方式不再支持了。由于本人项目中简单的用到过，这里就不再使用此方式，\n有关使用请参考 "),s("a",{attrs:{href:"https://github.com/openzipkin/zipkin",target:"_blank",rel:"noopener noreferrer"}},[n._v("zipkin 官网文档"),s("OutboundLink")],1)]),n._v(" "),s("p",[n._v("cloud 的 sleuth 与 sleuth-zipkin 的用法，请自行百度")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-sleuth</artifactId>\n</dependency>\n<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-sleuth-zipkin</artifactId>\n</dependency>\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br")])])])}),[],!1,null,null,null);e.default=a.exports}}]);