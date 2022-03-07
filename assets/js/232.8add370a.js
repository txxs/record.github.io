(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{622:function(s,n,e){"use strict";e.r(n);var a=e(13),l=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"_019-对项目的主从-redis-架构进行-qps-压测以及水平扩容支撑更高-qps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_019-对项目的主从-redis-架构进行-qps-压测以及水平扩容支撑更高-qps"}},[s._v("#")]),s._v(" 019. 对项目的主从 redis 架构进行 QPS 压测以及水平扩容支撑更高 QPS")]),s._v(" "),e("p",[s._v("你如果要对自己刚刚搭建好的 redis 做一个基准的压测，测一下你的 redis 的性能和 QPS（query per second 每秒查询次数）")]),s._v(" "),e("p",[s._v("redis 自己提供的 redis-benchmark 压测工具，是最快捷最方便的，用一些简单的操作和场景去压测（主要是简单）")]),s._v(" "),e("p",[s._v("工具路径：/usr/local/redis-3.2.8/src/redis-benchmark")]),s._v(" "),e("p",[s._v("语法如下，除了下面自带的 三个控制并发，次数，大小等，其他的自带的链接参数也是需要的，如你配置了密码。需要带上 -a redis-pass密码")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("./redis-benchmark\n\n-c <clients>       Number of parallel connections (default 50)\n-n <requests>      Total number of requests (default 100000)\n-d <size>          Data size of SET/GET value in bytes (default 2)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("比如：你的高峰期的访问量，在高峰期，瞬时最大用户量会达到 10 万+，供访问 1000万 次，每次 50 byte 数据\n"),e("code",[s._v("-c 100000，-n 10000000，-d 50")])]),s._v(" "),e("p",[s._v("下面是对我的刚才部署好的 redis 测试的数据，这个测试还是需要几分钟时间")]),s._v(" "),e("h2",{attrs:{id:"eshop-cace01-压测数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#eshop-cace01-压测数据"}},[s._v("#")]),s._v(" eshop-cace01 压测数据")]),s._v(" "),e("p",[s._v("1 核 1G，虚拟机，")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("/usr/local/redis-3.2.8/src\n[root@eshop-cache01 src]# ./redis-benchmark -a redis-pass\n以下数据是粘贴的老师的，数据太多，分屏复制都要复制好多次\n====== PING_INLINE ======\n  100000 requests completed in 1.28 seconds\n  50 parallel clients\n  3 bytes payload\n  keep alive: 1\n\n99.78% <= 1 milliseconds\n99.93% <= 2 milliseconds\n99.97% <= 3 milliseconds\n100.00% <= 3 milliseconds\n78308.54 requests per second\n\n====== PING_BULK ======\n  100000 requests completed in 1.30 seconds\n  50 parallel clients\n  3 bytes payload\n  keep alive: 1\n\n99.87% <= 1 milliseconds\n100.00% <= 1 milliseconds\n76804.91 requests per second\n\n====== SET ======\n  100000 requests completed in 2.50 seconds\n  50 parallel clients\n  3 bytes payload\n  keep alive: 1\n\n5.95% <= 1 milliseconds\n99.63% <= 2 milliseconds\n99.93% <= 3 milliseconds\n99.99% <= 4 milliseconds\n100.00% <= 4 milliseconds\n40032.03 requests per second    // 比如这个 set 操作，QPS 为 4 万多\n\n====== GET ======\n  100000 requests completed in 1.30 seconds\n  50 parallel clients\n  3 bytes payload\n  keep alive: 1\n\n99.73% <= 1 milliseconds\n100.00% <= 2 milliseconds\n100.00% <= 2 milliseconds\n76628.35 requests per second  // 比如这个 get 操作，QPS 为 7 万多\n\n====== INCR ======\n  100000 requests completed in 1.90 seconds\n  50 parallel clients\n  3 bytes payload\n  keep alive: 1\n\n80.92% <= 1 milliseconds\n99.81% <= 2 milliseconds\n99.95% <= 3 milliseconds\n99.96% <= 4 milliseconds\n99.97% <= 5 milliseconds\n100.00% <= 6 milliseconds\n52548.61 requests per second\n\n====== LPUSH ======\n  100000 requests completed in 2.58 seconds\n  50 parallel clients\n  3 bytes payload\n  keep alive: 1\n\n3.76% <= 1 milliseconds\n99.61% <= 2 milliseconds\n99.93% <= 3 milliseconds\n100.00% <= 3 milliseconds\n38684.72 requests per second\n\n====== RPUSH ======\n  100000 requests completed in 2.47 seconds\n  50 parallel clients\n  3 bytes payload\n  keep alive: 1\n\n6.87% <= 1 milliseconds\n99.69% <= 2 milliseconds\n99.87% <= 3 milliseconds\n99.99% <= 4 milliseconds\n100.00% <= 4 milliseconds\n40469.45 requests per second\n\n====== LPOP ======\n  100000 requests completed in 2.26 seconds\n  50 parallel clients\n  3 bytes payload\n  keep alive: 1\n\n28.39% <= 1 milliseconds\n99.83% <= 2 milliseconds\n100.00% <= 2 milliseconds\n44306.60 requests per second\n\n====== RPOP ======\n  100000 requests completed in 2.18 seconds\n  50 parallel clients\n  3 bytes payload\n  keep alive: 1\n\n36.08% <= 1 milliseconds\n99.75% <= 2 milliseconds\n100.00% <= 2 milliseconds\n45871.56 requests per second\n\n====== SADD ======\n  100000 requests completed in 1.23 seconds\n  50 parallel clients\n  3 bytes payload\n  keep alive: 1\n\n99.94% <= 1 milliseconds\n100.00% <= 2 milliseconds\n100.00% <= 2 milliseconds\n81168.83 requests per second\n\n====== SPOP ======\n  100000 requests completed in 1.28 seconds\n  50 parallel clients\n  3 bytes payload\n  keep alive: 1\n\n99.80% <= 1 milliseconds\n99.96% <= 2 milliseconds\n99.96% <= 3 milliseconds\n99.97% <= 5 milliseconds\n100.00% <= 5 milliseconds\n78369.91 requests per second\n\n====== LPUSH (needed to benchmark LRANGE) ======\n  100000 requests completed in 2.47 seconds\n  50 parallel clients\n  3 bytes payload\n  keep alive: 1\n\n15.29% <= 1 milliseconds\n99.64% <= 2 milliseconds\n99.94% <= 3 milliseconds\n100.00% <= 3 milliseconds\n40420.37 requests per second\n\n====== LRANGE_100 (first 100 elements) ======\n  100000 requests completed in 3.69 seconds\n  50 parallel clients\n  3 bytes payload\n  keep alive: 1\n\n30.86% <= 1 milliseconds\n96.99% <= 2 milliseconds\n99.94% <= 3 milliseconds\n99.99% <= 4 milliseconds\n100.00% <= 4 milliseconds\n27085.59 requests per second\n\n====== LRANGE_300 (first 300 elements) ======\n  100000 requests completed in 10.22 seconds\n  50 parallel clients\n  3 bytes payload\n  keep alive: 1\n\n0.03% <= 1 milliseconds\n5.90% <= 2 milliseconds\n90.68% <= 3 milliseconds\n95.46% <= 4 milliseconds\n97.67% <= 5 milliseconds\n99.12% <= 6 milliseconds\n99.98% <= 7 milliseconds\n100.00% <= 7 milliseconds\n9784.74 requests per second\n\n====== LRANGE_500 (first 450 elements) ======\n  100000 requests completed in 14.71 seconds\n  50 parallel clients\n  3 bytes payload\n  keep alive: 1\n\n0.00% <= 1 milliseconds\n0.07% <= 2 milliseconds\n1.59% <= 3 milliseconds\n89.26% <= 4 milliseconds\n97.90% <= 5 milliseconds\n99.24% <= 6 milliseconds\n99.73% <= 7 milliseconds\n99.89% <= 8 milliseconds\n99.96% <= 9 milliseconds\n99.99% <= 10 milliseconds\n100.00% <= 10 milliseconds\n6799.48 requests per second\n\n====== LRANGE_600 (first 600 elements) ======\n  100000 requests completed in 18.56 seconds\n  50 parallel clients\n  3 bytes payload\n  keep alive: 1\n\n0.00% <= 2 milliseconds\n0.23% <= 3 milliseconds\n1.75% <= 4 milliseconds\n91.17% <= 5 milliseconds\n98.16% <= 6 milliseconds\n99.04% <= 7 milliseconds\n99.83% <= 8 milliseconds\n99.95% <= 9 milliseconds\n99.98% <= 10 milliseconds\n100.00% <= 10 milliseconds\n5387.35 requests per second\n\n====== MSET (10 keys) ======\n  100000 requests completed in 4.02 seconds\n  50 parallel clients\n  3 bytes payload\n  keep alive: 1\n\n0.01% <= 1 milliseconds\n53.22% <= 2 milliseconds\n99.12% <= 3 milliseconds\n99.55% <= 4 milliseconds\n99.70% <= 5 milliseconds\n99.90% <= 6 milliseconds\n99.95% <= 7 milliseconds\n100.00% <= 8 milliseconds\n24869.44 requests per second\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br"),e("span",{staticClass:"line-number"},[s._v("62")]),e("br"),e("span",{staticClass:"line-number"},[s._v("63")]),e("br"),e("span",{staticClass:"line-number"},[s._v("64")]),e("br"),e("span",{staticClass:"line-number"},[s._v("65")]),e("br"),e("span",{staticClass:"line-number"},[s._v("66")]),e("br"),e("span",{staticClass:"line-number"},[s._v("67")]),e("br"),e("span",{staticClass:"line-number"},[s._v("68")]),e("br"),e("span",{staticClass:"line-number"},[s._v("69")]),e("br"),e("span",{staticClass:"line-number"},[s._v("70")]),e("br"),e("span",{staticClass:"line-number"},[s._v("71")]),e("br"),e("span",{staticClass:"line-number"},[s._v("72")]),e("br"),e("span",{staticClass:"line-number"},[s._v("73")]),e("br"),e("span",{staticClass:"line-number"},[s._v("74")]),e("br"),e("span",{staticClass:"line-number"},[s._v("75")]),e("br"),e("span",{staticClass:"line-number"},[s._v("76")]),e("br"),e("span",{staticClass:"line-number"},[s._v("77")]),e("br"),e("span",{staticClass:"line-number"},[s._v("78")]),e("br"),e("span",{staticClass:"line-number"},[s._v("79")]),e("br"),e("span",{staticClass:"line-number"},[s._v("80")]),e("br"),e("span",{staticClass:"line-number"},[s._v("81")]),e("br"),e("span",{staticClass:"line-number"},[s._v("82")]),e("br"),e("span",{staticClass:"line-number"},[s._v("83")]),e("br"),e("span",{staticClass:"line-number"},[s._v("84")]),e("br"),e("span",{staticClass:"line-number"},[s._v("85")]),e("br"),e("span",{staticClass:"line-number"},[s._v("86")]),e("br"),e("span",{staticClass:"line-number"},[s._v("87")]),e("br"),e("span",{staticClass:"line-number"},[s._v("88")]),e("br"),e("span",{staticClass:"line-number"},[s._v("89")]),e("br"),e("span",{staticClass:"line-number"},[s._v("90")]),e("br"),e("span",{staticClass:"line-number"},[s._v("91")]),e("br"),e("span",{staticClass:"line-number"},[s._v("92")]),e("br"),e("span",{staticClass:"line-number"},[s._v("93")]),e("br"),e("span",{staticClass:"line-number"},[s._v("94")]),e("br"),e("span",{staticClass:"line-number"},[s._v("95")]),e("br"),e("span",{staticClass:"line-number"},[s._v("96")]),e("br"),e("span",{staticClass:"line-number"},[s._v("97")]),e("br"),e("span",{staticClass:"line-number"},[s._v("98")]),e("br"),e("span",{staticClass:"line-number"},[s._v("99")]),e("br"),e("span",{staticClass:"line-number"},[s._v("100")]),e("br"),e("span",{staticClass:"line-number"},[s._v("101")]),e("br"),e("span",{staticClass:"line-number"},[s._v("102")]),e("br"),e("span",{staticClass:"line-number"},[s._v("103")]),e("br"),e("span",{staticClass:"line-number"},[s._v("104")]),e("br"),e("span",{staticClass:"line-number"},[s._v("105")]),e("br"),e("span",{staticClass:"line-number"},[s._v("106")]),e("br"),e("span",{staticClass:"line-number"},[s._v("107")]),e("br"),e("span",{staticClass:"line-number"},[s._v("108")]),e("br"),e("span",{staticClass:"line-number"},[s._v("109")]),e("br"),e("span",{staticClass:"line-number"},[s._v("110")]),e("br"),e("span",{staticClass:"line-number"},[s._v("111")]),e("br"),e("span",{staticClass:"line-number"},[s._v("112")]),e("br"),e("span",{staticClass:"line-number"},[s._v("113")]),e("br"),e("span",{staticClass:"line-number"},[s._v("114")]),e("br"),e("span",{staticClass:"line-number"},[s._v("115")]),e("br"),e("span",{staticClass:"line-number"},[s._v("116")]),e("br"),e("span",{staticClass:"line-number"},[s._v("117")]),e("br"),e("span",{staticClass:"line-number"},[s._v("118")]),e("br"),e("span",{staticClass:"line-number"},[s._v("119")]),e("br"),e("span",{staticClass:"line-number"},[s._v("120")]),e("br"),e("span",{staticClass:"line-number"},[s._v("121")]),e("br"),e("span",{staticClass:"line-number"},[s._v("122")]),e("br"),e("span",{staticClass:"line-number"},[s._v("123")]),e("br"),e("span",{staticClass:"line-number"},[s._v("124")]),e("br"),e("span",{staticClass:"line-number"},[s._v("125")]),e("br"),e("span",{staticClass:"line-number"},[s._v("126")]),e("br"),e("span",{staticClass:"line-number"},[s._v("127")]),e("br"),e("span",{staticClass:"line-number"},[s._v("128")]),e("br"),e("span",{staticClass:"line-number"},[s._v("129")]),e("br"),e("span",{staticClass:"line-number"},[s._v("130")]),e("br"),e("span",{staticClass:"line-number"},[s._v("131")]),e("br"),e("span",{staticClass:"line-number"},[s._v("132")]),e("br"),e("span",{staticClass:"line-number"},[s._v("133")]),e("br"),e("span",{staticClass:"line-number"},[s._v("134")]),e("br"),e("span",{staticClass:"line-number"},[s._v("135")]),e("br"),e("span",{staticClass:"line-number"},[s._v("136")]),e("br"),e("span",{staticClass:"line-number"},[s._v("137")]),e("br"),e("span",{staticClass:"line-number"},[s._v("138")]),e("br"),e("span",{staticClass:"line-number"},[s._v("139")]),e("br"),e("span",{staticClass:"line-number"},[s._v("140")]),e("br"),e("span",{staticClass:"line-number"},[s._v("141")]),e("br"),e("span",{staticClass:"line-number"},[s._v("142")]),e("br"),e("span",{staticClass:"line-number"},[s._v("143")]),e("br"),e("span",{staticClass:"line-number"},[s._v("144")]),e("br"),e("span",{staticClass:"line-number"},[s._v("145")]),e("br"),e("span",{staticClass:"line-number"},[s._v("146")]),e("br"),e("span",{staticClass:"line-number"},[s._v("147")]),e("br"),e("span",{staticClass:"line-number"},[s._v("148")]),e("br"),e("span",{staticClass:"line-number"},[s._v("149")]),e("br"),e("span",{staticClass:"line-number"},[s._v("150")]),e("br"),e("span",{staticClass:"line-number"},[s._v("151")]),e("br"),e("span",{staticClass:"line-number"},[s._v("152")]),e("br"),e("span",{staticClass:"line-number"},[s._v("153")]),e("br"),e("span",{staticClass:"line-number"},[s._v("154")]),e("br"),e("span",{staticClass:"line-number"},[s._v("155")]),e("br"),e("span",{staticClass:"line-number"},[s._v("156")]),e("br"),e("span",{staticClass:"line-number"},[s._v("157")]),e("br"),e("span",{staticClass:"line-number"},[s._v("158")]),e("br"),e("span",{staticClass:"line-number"},[s._v("159")]),e("br"),e("span",{staticClass:"line-number"},[s._v("160")]),e("br"),e("span",{staticClass:"line-number"},[s._v("161")]),e("br"),e("span",{staticClass:"line-number"},[s._v("162")]),e("br"),e("span",{staticClass:"line-number"},[s._v("163")]),e("br"),e("span",{staticClass:"line-number"},[s._v("164")]),e("br"),e("span",{staticClass:"line-number"},[s._v("165")]),e("br"),e("span",{staticClass:"line-number"},[s._v("166")]),e("br"),e("span",{staticClass:"line-number"},[s._v("167")]),e("br"),e("span",{staticClass:"line-number"},[s._v("168")]),e("br"),e("span",{staticClass:"line-number"},[s._v("169")]),e("br"),e("span",{staticClass:"line-number"},[s._v("170")]),e("br"),e("span",{staticClass:"line-number"},[s._v("171")]),e("br"),e("span",{staticClass:"line-number"},[s._v("172")]),e("br"),e("span",{staticClass:"line-number"},[s._v("173")]),e("br"),e("span",{staticClass:"line-number"},[s._v("174")]),e("br"),e("span",{staticClass:"line-number"},[s._v("175")]),e("br"),e("span",{staticClass:"line-number"},[s._v("176")]),e("br"),e("span",{staticClass:"line-number"},[s._v("177")]),e("br"),e("span",{staticClass:"line-number"},[s._v("178")]),e("br"),e("span",{staticClass:"line-number"},[s._v("179")]),e("br"),e("span",{staticClass:"line-number"},[s._v("180")]),e("br"),e("span",{staticClass:"line-number"},[s._v("181")]),e("br"),e("span",{staticClass:"line-number"},[s._v("182")]),e("br"),e("span",{staticClass:"line-number"},[s._v("183")]),e("br"),e("span",{staticClass:"line-number"},[s._v("184")]),e("br"),e("span",{staticClass:"line-number"},[s._v("185")]),e("br"),e("span",{staticClass:"line-number"},[s._v("186")]),e("br"),e("span",{staticClass:"line-number"},[s._v("187")]),e("br"),e("span",{staticClass:"line-number"},[s._v("188")]),e("br"),e("span",{staticClass:"line-number"},[s._v("189")]),e("br"),e("span",{staticClass:"line-number"},[s._v("190")]),e("br"),e("span",{staticClass:"line-number"},[s._v("191")]),e("br"),e("span",{staticClass:"line-number"},[s._v("192")]),e("br"),e("span",{staticClass:"line-number"},[s._v("193")]),e("br"),e("span",{staticClass:"line-number"},[s._v("194")]),e("br"),e("span",{staticClass:"line-number"},[s._v("195")]),e("br"),e("span",{staticClass:"line-number"},[s._v("196")]),e("br"),e("span",{staticClass:"line-number"},[s._v("197")]),e("br"),e("span",{staticClass:"line-number"},[s._v("198")]),e("br"),e("span",{staticClass:"line-number"},[s._v("199")]),e("br"),e("span",{staticClass:"line-number"},[s._v("200")]),e("br"),e("span",{staticClass:"line-number"},[s._v("201")]),e("br"),e("span",{staticClass:"line-number"},[s._v("202")]),e("br"),e("span",{staticClass:"line-number"},[s._v("203")]),e("br"),e("span",{staticClass:"line-number"},[s._v("204")]),e("br"),e("span",{staticClass:"line-number"},[s._v("205")]),e("br"),e("span",{staticClass:"line-number"},[s._v("206")]),e("br"),e("span",{staticClass:"line-number"},[s._v("207")]),e("br"),e("span",{staticClass:"line-number"},[s._v("208")]),e("br"),e("span",{staticClass:"line-number"},[s._v("209")]),e("br"),e("span",{staticClass:"line-number"},[s._v("210")]),e("br"),e("span",{staticClass:"line-number"},[s._v("211")]),e("br"),e("span",{staticClass:"line-number"},[s._v("212")]),e("br"),e("span",{staticClass:"line-number"},[s._v("213")]),e("br"),e("span",{staticClass:"line-number"},[s._v("214")]),e("br"),e("span",{staticClass:"line-number"},[s._v("215")]),e("br"),e("span",{staticClass:"line-number"},[s._v("216")]),e("br"),e("span",{staticClass:"line-number"},[s._v("217")]),e("br"),e("span",{staticClass:"line-number"},[s._v("218")]),e("br"),e("span",{staticClass:"line-number"},[s._v("219")]),e("br"),e("span",{staticClass:"line-number"},[s._v("220")]),e("br"),e("span",{staticClass:"line-number"},[s._v("221")]),e("br"),e("span",{staticClass:"line-number"},[s._v("222")]),e("br"),e("span",{staticClass:"line-number"},[s._v("223")]),e("br"),e("span",{staticClass:"line-number"},[s._v("224")]),e("br"),e("span",{staticClass:"line-number"},[s._v("225")]),e("br"),e("span",{staticClass:"line-number"},[s._v("226")]),e("br"),e("span",{staticClass:"line-number"},[s._v("227")]),e("br")])]),e("h2",{attrs:{id:"eshop-cace02-压测数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#eshop-cace02-压测数据"}},[s._v("#")]),s._v(" eshop-cace02 压测数据")]),s._v(" "),e("p",[s._v("由于数据太长就不粘贴了")]),s._v(" "),e("h2",{attrs:{id:"redis-支持的-qps-数据说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-支持的-qps-数据说明"}},[s._v("#")]),s._v(" redis 支持的 QPS 数据说明")]),s._v(" "),e("p",[s._v("这个很难给出一个数据，刚才也看到了，这个与机器配置，场景（复制操作？简单操作？数据量大小）都有关系。")]),s._v(" "),e("p",[s._v("如搭建一些集群，专门为某个项目，搭建的专用集群，4 核 4G 内存，比较复杂的操作，数据比较大，几万的 QPS 单机做到，差不多了")]),s._v(" "),e("p",[s._v("一般来说 redis 提供的高并发，至少上万，没问题")]),s._v(" "),e("p",[s._v("看看和那些有关系？")]),s._v(" "),e("ul",[e("li",[s._v("机器配置")]),s._v(" "),e("li",[s._v("操作的复杂度")]),s._v(" "),e("li",[s._v("数据量的大小")]),s._v(" "),e("li",[s._v("网络带宽/网络开销")])]),s._v(" "),e("p",[s._v("所以具体是多少 QPS 需要自己去测试，而且与生产环境可能还不一致，\n因为有大量的网络请求的调用。网络开销等")]),s._v(" "),e("p",[s._v("后面讲到的商品详情页的 cache，可能是需要把大串数据拼接在一起，作为一个 json 串，大小可能都几 KB 了，所以根据环境的不同，QPS 也会不一样")]),s._v(" "),e("h2",{attrs:{id:"水平扩容-redis-读节点-提升吞吐量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#水平扩容-redis-读节点-提升吞吐量"}},[s._v("#")]),s._v(" 水平扩容 redis 读节点，提升吞吐量")]),s._v(" "),e("p",[s._v("就按照上一节课讲解的，再在其他服务器上搭建 redis 从节点，假设单个从节点读请 QPS 在 5 万左右，两个 redis 从节点，所有的读请求打到两台机器上去，承载整个集群读 QPS 在 10万+")])])}),[],!1,null,null,null);n.default=l.exports}}]);