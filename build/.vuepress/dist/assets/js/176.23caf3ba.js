(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{567:function(t,s,a){"use strict";a.r(s);var n=a(13),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_176-商品详情页动态渲染系统-完成多级缓存全链路的测试多个-bug-修复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_176-商品详情页动态渲染系统-完成多级缓存全链路的测试多个-bug-修复"}},[t._v("#")]),t._v(" 176. 商品详情页动态渲染系统：完成多级缓存全链路的测试多个 bug 修复")]),t._v(" "),a("p",[t._v("这里就是之前写好的逻辑进行测试，我这里也不测了，因为 nginx 没有实现，之前在每章写完都测试过。")]),t._v(" "),a("h2",{attrs:{id:"bug-1-无法连接-twemproxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bug-1-无法连接-twemproxy"}},[t._v("#")]),t._v(" bug 1：无法连接 twemproxy")]),t._v(" "),a("p",[t._v("这里唯一需要注意的就是，上一章节的数据直连服务这里测试下。")]),t._v(" "),a("p",[t._v("访问地址："),a("code",[t._v("http://localhost:9110/product/1")]),t._v("，但是发现无法连接上 twemproxy。\n原因如下，listen 中监听的是 127.0.0.1 ，所以不是在本机的时候是连接不上的，只需要修改成局域网 ip 即可")]),t._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@eshop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("detail01 twemproxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("0.4.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# vi conf/nutcracker.yml")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("redis-master")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置一个逻辑名称")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# listen: 127.0.0.1:1111")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 192.168.99.11"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1111")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hash")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fnv1a_64\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("distribution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ketama\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("redis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("servers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 192.168.99.11"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("6401"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1 redis01  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指向两个主集群")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 192.168.99.11"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("6402"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1 redis02\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("redis-slave")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从集群")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 127.0.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1112")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hash")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fnv1a_64\n "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("distribution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ketama\n "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("redis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("servers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 192.168.99.11"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("6403"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1 redis01\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 192.168.99.11"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("6405"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1 redis02\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br")])]),a("p",[t._v("重启 twemproxy")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd /usr/local/twemproxy/twemproxy-0.4.0\n[root@eshop-detail01 twemproxy-0.4.0]# ps -ef | grep nutcracker\nroot      7606     1  0 Jul28 ?        00:00:00 ./src/nutcracker -d -c conf/nutcracker.yml\nroot     31766 26460  0 02:17 pts/0    00:00:00 grep nutcracker\n[root@eshop-detail01 twemproxy-0.4.0]# kill 7606\n[root@eshop-detail01 twemproxy-0.4.0]# ./src/nutcracker -d -c conf/nutcracker.yml\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h2",{attrs:{id:"bug-2-获取商品属性返回的应该是一个列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bug-2-获取商品属性返回的应该是一个列表"}},[t._v("#")]),t._v(" bug 2：获取商品属性返回的应该是一个列表")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" productPropertyJsonStr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" eshopProductService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findProductPropertyByProductId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("productId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringUtils")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNotBlank")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("productPropertyJsonStr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    product"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"productProperty"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" JSON"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("productPropertyJsonStr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" productSpecificationJsonStr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" eshopProductService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findProductSpecificationByProductId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("productId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringUtils")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNotBlank")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("productSpecificationJsonStr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    product"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"productSpecification"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" JSON"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("productSpecificationJsonStr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("获取 ProductProperty 与 ProductSpecification ，一个商品都有多个属性和规格，所以这里也需要修改成数组，\n那么同样的，我觉得数据聚合里面，维度数据这里之前也是错误的，也应该修改成数组")]),t._v(" "),a("h2",{attrs:{id:"bug-改完-测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bug-改完-测试"}},[t._v("#")]),t._v(" bug 改完，测试")]),t._v(" "),a("p",[t._v("访问地址："),a("code",[t._v("http://localhost:9110/product/1")])]),t._v(" "),a("p",[t._v("然后查看 redis 中是否有维度数据")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[root@eshop-detail01 src]# ./redis-cli -h 192.168.99.11 -p 1111\n192.168.99.11:1111> get dim_product_1\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);