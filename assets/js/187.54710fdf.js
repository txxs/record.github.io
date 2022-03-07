(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{576:function(t,s,a){"use strict";a.r(s);var n=a(13),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_086-电商网站的商品详情页缓存服务业务背景以及框架结构说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_086-电商网站的商品详情页缓存服务业务背景以及框架结构说明"}},[t._v("#")]),t._v(" 086. 电商网站的商品详情页缓存服务业务背景以及框架结构说明")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("《亿级流量电商详情页系统的大型高并发与高可用缓存架构实战》")]),t._v(" "),a("p",[t._v("本笔记中会忽略这种独立章节的解释内容，本章内容是整套教程中的一部分。后续不再解释")])]),t._v(" "),a("p",[t._v("我们这个课程，基于 hystrix，如何来构建高可用的分布式系统的架构，项目实战")]),t._v(" "),a("ul",[a("li",[t._v("大背景：电商网站、首页、商品详情页、搜索结果页、广告页、促销活动、购物车、订单系统、库存系统、物流系统；电商里面系统太多了")]),t._v(" "),a("li",[t._v("小背景：商品详情页，如何用最快的结果将商品数据填充到一个页面中，然后将页面显示出来")]),t._v(" "),a("li",[t._v("分布式系统：商品详情页中的缓存服务，+ 底层源数据服务，商品信息服务，店铺信息服务，广告信息服务，推荐信息服务，综合起来组成一个分布式的系统")])]),t._v(" "),a("p",[t._v("我们主要是讲解商品详情页中的缓存架构。在该背景下进行讲解；")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("该章节的背景介绍在前面已经讲解过，本人不会写笔记，直接使用原始笔记润色")])]),t._v(" "),a("h2",{attrs:{id:"电商网站的商品详情页系统架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#电商网站的商品详情页系统架构"}},[t._v("#")]),t._v(" 电商网站的商品详情页系统架构")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("小型电商网站的商品详情页系统架构（不是我们要讲解的）")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://txxs.github.io/pic/record/cache-pdp/markdown-img-paste-20190530221029391.png",alt:""}})])]),t._v(" "),a("li",[a("p",[t._v("大型电商网站的商品详情页系统架构")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://txxs.github.io/pic/record/cache-pdp/markdown-img-paste-20190530221045495.png",alt:""}})])]),t._v(" "),a("li",[a("p",[t._v("页面模板")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("举个例子\n\n将数据动态填充/渲染到一个 html 模板中，是什么意思呢？\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("#{name}的页面"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t商品的价格是：#{price}\n\t\t商品的介绍：#{description}\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('\n\n上面这个就可以认为是一个页面模板，里面的很多内容是不确定的，#{name}，#{price}，#{description}，这都是一些模板脚本，不确定里面的值是什么？\n\n将数据填充/渲染到 html 模板中，是什么意思呢？\n\n{\n\t"name": "iphone7 plus（玫瑰金+32G）",\n\t"price": 5599.50\n\t"description": "这个手机特别好用。。。。。。"\n}\n\n'),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("iphone7 plus（玫瑰金+32G）的页面"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t商品的价格是：5599.50\n\t\t商品的介绍：这个手机特别好用。。。。。。\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n上面这个就是一份填充好数据的一个html页面\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br")])])])]),t._v(" "),a("h2",{attrs:{id:"缓存服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存服务"}},[t._v("#")]),t._v(" 缓存服务")]),t._v(" "),a("p",[t._v("缓存服务，订阅一个 MQ 的消息变更，如果有消息变更的话，那么就会发送一个网络请求，调用一个底层的对应的源数据服务的接口，去获取变更后的数据")]),t._v(" "),a("p",[t._v("将获取到的变更后的数据填充到分布式的 redis 缓存中去")]),t._v(" "),a("p",[t._v("高可用这一块儿，最可能出现说可用性不高的情况，是什么呢？就是说，在接收到消息之后，可能在调用各种底层依赖服务的接口时，会遇到各种不稳定的情况")]),t._v(" "),a("p",[t._v("比如底层服务的接口调用超时，预计 200ms 内返回，但是 2s 都没有返回; 底层服务的接口调用失败，比如说卡了 500ms 之后，返回一个报错")]),t._v(" "),a("p",[t._v("在分布式系统中，对于这种大量的底层依赖服务的调用，就可能会出现各种可用性的问题，一旦没有处理好的话，可能就会导致缓存服务自己本身会挂掉，或者故障掉，就会导致什么呢？不可以对外提供服务，严重情况下，甚至会导致说整个商品详情页显示不出来")]),t._v(" "),a("p",[a("strong",[t._v("hystrix 的主题是")]),t._v("：缓存服务接收到变更消息后，去调用各个底层依赖服务时的"),a("strong",[t._v("高可用架构的实现")])]),t._v(" "),a("h2",{attrs:{id:"框架结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#框架结构"}},[t._v("#")]),t._v(" 框架结构")]),t._v(" "),a("p",[t._v("围绕着缓存服务去拉取各种底层的源数据服务的数据，调用其接口时，可能出现的系统不可用的问题")]),t._v(" "),a("p",[t._v("在框架上一切从简：动手搭建 2 个 spring boot 服务，缓存服务和商品服务，缓存服务依赖于商品服务")]),t._v(" "),a("p",[t._v("模拟各种商品服务可能接口调用时出现的各种问题，导致系统不可用的场景，然后用 hystrix 完整的各种技术点全部贯穿在里面，解决了一大堆设计业务背景下的系统不可用问题，hystrix 整个技术体系，知识体系，也就讲解完了")]),t._v(" "),a("p",[t._v("消息队列、redis 咱们都不搞了，只关注这个 hystrix 的场景")]),t._v(" "),a("p",[t._v("简化的分布式系统的架构：spring boot + http client + hystrix")])])}),[],!1,null,null,null);s.default=r.exports}}]);