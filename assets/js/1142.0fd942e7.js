(window.webpackJsonp=window.webpackJsonp||[]).push([[1142],{1536:function(s,t,a){"use strict";a.r(t);var n=a(13),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[a("strong",[s._v("文章已收录Github精选，欢迎Star")]),s._v("："),a("a",{attrs:{href:"https://github.com/yehongzhi/learningSummary",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/yehongzhi"),a("OutboundLink")],1)])]),s._v(" "),a("h1",{attrs:{id:"概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[s._v("#")]),s._v(" 概念")]),s._v(" "),a("p",[s._v("布隆过滤器(BloomFilter)是由一个叫“布隆”的小伙子在1970年提出的，它是一个很长的二进制向量，主要"),a("strong",[s._v("用于判断一个元素是否在一个集合中")]),s._v("。")]),s._v(" "),a("h1",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[s._v("#")]),s._v(" 原理")]),s._v(" "),a("p",[s._v("在介绍原理之前，要先讲一下"),a("strong",[s._v("Hash函数")]),s._v("的概念。")]),s._v(" "),a("p",[s._v("我们在Java中的HashMap，HashSet其实也接触过hashcode()这个函数，哈希函数是可以将任意大小的输入数据转换成特定大小的输出数据的函数，转换后的数据称为"),a("strong",[s._v("哈希值")]),s._v("。")]),s._v(" "),a("p",[s._v("哈希函数有以下特点：")]),s._v(" "),a("ul",[a("li",[s._v("如果根据同一个哈希函数得到的哈希值不同，那么这两个哈希值的原始输入值肯定不同。")]),s._v(" "),a("li",[s._v("如果根据同一个哈希函数得到的两个哈希值相等，两个哈希值的原始输入值有可能相等，有可能不相等。")])]),s._v(" "),a("p",[s._v("布隆过滤器是由一个很长的二进制向量和一系列的哈希函数组成。那么布隆过滤器是怎么判断一个元素是否在一个集合中的呢？")]),s._v(" "),a("p",[s._v("假设布隆过滤器的底层存储结构是一个长度为16的位数组，初始状态时，它的所有位置都设置为0。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://static.lovebilibili.com/redis_bl_01.png",alt:""}})]),s._v(" "),a("p",[s._v("当有变量添加到布隆过滤器中，通过K个映射函数将变量映射到位数组的K个点，并把这K个点的值设置为1(假设有三个映射函数)。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://static.lovebilibili.com/redis_bl_02.png",alt:""}})]),s._v(" "),a("p",[s._v("查询某个变量是否存在的时候，我们只需要通过同样的K个映射函数，找到对应的K个点，判断K个点上的值是否全都是1，"),a("strong",[s._v("如果全都是1则表示很可能存在")]),s._v("，如果"),a("strong",[s._v("K个点上有任何一个是0则表示一定不存在")]),s._v("。")]),s._v(" "),a("h1",{attrs:{id:"特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[s._v("#")]),s._v(" 特性")]),s._v(" "),a("p",[s._v("第一个问题，为什么说全都是1的情况是很可能存在，而不是一定存在呢？")]),s._v(" "),a("p",[s._v("还记得前面说的哈希函数的特点，根据同一个哈希函数得到相同的哈希值，输入值不一定相等。类似于Java中两个对象的hashcode相等，但是不一定相等的道理。说白了，映射函数得到位数组上映射点全都是1，不一定是要查询的这个变量之前存进来时设置的，也有可能是其他变量映射的点。")]),s._v(" "),a("p",[s._v("所以这里引出了布隆过滤器的其中一个特点，"),a("strong",[s._v("存在一定的误判")]),s._v("。")]),s._v(" "),a("p",[s._v("第二个问题，布隆过滤器能不能删除元素呢？")]),s._v(" "),a("p",[s._v("答案是不能的。因为在位数组上的同一个点有可能有多个输入值映射，如果删除了会影响布隆过滤器里其他元素的判断结果。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://static.lovebilibili.com/redis_bl_03.png",alt:""}})]),s._v(" "),a("p",[s._v("如上图，如果删除obj1，把4,7,15置为0，那么判断obj2是否存在时就会导致因为映射点7是0，结果判断obj2是不存在的，结果出错。")]),s._v(" "),a("p",[s._v("这是第二个特点，"),a("strong",[s._v("不能删除布隆过滤器里的元素。")])]),s._v(" "),a("h1",{attrs:{id:"优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优缺点"}},[s._v("#")]),s._v(" 优缺点")]),s._v(" "),a("p",[a("strong",[s._v("优点：")])]),s._v(" "),a("ul",[a("li",[s._v("在空间和时间方面，都有着巨大的优势。因为不是存完整的数据，是一个二进制向量，能节省大量的内存空间，时间复杂度方面，是根据映射函数查询，假设有K个映射函数，那么时间复杂度就是O(K)。")]),s._v(" "),a("li",[s._v("因为存的不是元素本身，而是二进制向量，所以在一些对"),a("strong",[s._v("保密性")]),s._v("要求严格的场景有一定优势。")])]),s._v(" "),a("p",[a("strong",[s._v("缺点：")])]),s._v(" "),a("ul",[a("li",[s._v("**存在一定的误判。**存进布隆过滤器里的元素越多，误判率越高。")]),s._v(" "),a("li",[s._v("**不能删除布隆过滤器里的元素。**随着使用的时间越来越长，因为不能删除，存进里面的元素越来越多，占用内存越来越多，误判率越来越高，最后不得不重置。")])]),s._v(" "),a("h1",{attrs:{id:"应用于缓存穿透"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用于缓存穿透"}},[s._v("#")]),s._v(" 应用于缓存穿透")]),s._v(" "),a("p",[s._v("**用于缓解缓存穿透。**缓存穿透的问题主要是因为传进来的key在Redis中是不存在的，那么就会直接打在DB上，造成DB压力增大。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://static.lovebilibili.com/redis_hc_2.png",alt:""}})]),s._v(" "),a("p",[s._v("针对这种情况，可以在Redis前加上布隆过滤器，预先把数据库中的数据加入到布隆过滤器中，因为布隆过滤器的底层数据结构是一个二进制向量，所以占用的空间并不是很大。"),a("strong",[s._v("在查询Redis之前先通过布隆过滤器判断是否存在，如果不存在就直接返回，如果存在的话，按照原来的流程还是查询Redis，Redis不存在则查询DB")]),s._v("。")]),s._v(" "),a("p",[s._v("这里主要利用的是"),a("strong",[s._v("布隆过滤器判断结果是不存在的话就一定不存在")]),s._v("这一个特点，但是由于布隆过滤器有一定的误判，所以并不能说完全解决缓存穿透，但是能很大程度缓解缓存穿透的问题。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://static.lovebilibili.com/redis_bl_04.png",alt:""}})]),s._v(" "),a("h1",{attrs:{id:"布隆过滤器插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#布隆过滤器插件"}},[s._v("#")]),s._v(" 布隆过滤器插件")]),s._v(" "),a("p",[s._v("我们知道布隆过滤器的底层原理之后，理论上是可以自己")]),s._v(" "),a("p",[s._v("在Redis4.0后，官方提供了布隆过滤器的插件功能，布隆过滤器可以作为一个插件加载到Redis服务器直接使用。")]),s._v(" "),a("p",[s._v("首先安装Redis，网上有很多安装教程，这里就不多赘述。这里我用的是Redis6.0.10版本。安装完Redis之后，下载插件，使用git命令拉取：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/RedisBloom/RedisBloom.git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("拉取下来之后会得到一个RedisBloom的项目。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://static.lovebilibili.com/redis_bl_05.png",alt:""}})]),s._v(" "),a("p",[s._v("然后cd到文件夹/RedisBloom，使用make命令编译。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://static.lovebilibili.com/redis_bl_06.png",alt:""}})]),s._v(" "),a("p",[s._v("编译完成后生成一个redisbloom.so文件。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://static.lovebilibili.com/redis_bl_07.png",alt:""}})]),s._v(" "),a("p",[s._v("在启动Redis时，加载布隆过滤器模块到服务器中即可。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("./src/redis-server --loadmodule /usr/local/RedisBloom/redisbloom.so\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("最后使用客户端测试一下。")]),s._v(" "),a("div",{staticClass:"language-she line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("redis-6.0.10]$ ./src/redis-cli \n\n127.0.0.1:6379> bf.add user sam\n(integer) 1\n127.0.0.1:6379> bf.add user jack\n(integer) 1\n127.0.0.1:6379> bf.exists user jack\n(integer) 1\n127.0.0.1:6379> bf.exists user tom\n(integer) 0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("布隆过滤器的基本指令如下：")]),s._v(" "),a("ul",[a("li",[s._v("bf.add 添加元素到布隆过滤器")]),s._v(" "),a("li",[s._v("bf.exists 判断元素是否在布隆过滤器")]),s._v(" "),a("li",[s._v("bf.madd 添加多个元素到布隆过滤器")]),s._v(" "),a("li",[s._v("bf.mexists 判断多个元素是否在布隆过滤器")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" bf.madd user mike rose\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" bf.mexists user blue mike\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("在实际开发中，一般都是使用Java程序操作Redis，不太可能直接使用命令行判断，Java程序怎么操作呢？")]),s._v(" "),a("p",[s._v("首先引入依赖，我使用的是SpringBoot2.0，所以引入依赖是3.15.0。")]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("org.redisson"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("redisson-spring-boot-starter"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("3.15.0"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("接着写个main方法示范一下。")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Exception")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Config")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("useSingleServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setAddress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"redis://192.168.0.109:6379"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RedissonClient")]),s._v(" client "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Redisson")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RBloomFilter")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" bloomFilter "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getBloomFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//尝试初始化，预计元素55000000，期望误判率0.03")]),s._v("\n    bloomFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tryInit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("55000000L")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.03")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//添加元素到布隆过滤器中")]),s._v("\n    bloomFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tom"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    bloomFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mike"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    bloomFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rose"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    bloomFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"blue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"布隆过滤器元素总数为："')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" bloomFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//布隆过滤器元素总数为：4")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"是否包含tom："')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" bloomFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("contains")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tom"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//是否包含tom：true")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"是否包含lei："')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" bloomFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("contains")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lei"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//是否包含lei：false")]),s._v("\n    client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h1",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("p",[s._v("布隆过滤器有着明显的优缺点，所以在使用的时候需要充分地考虑场景，还是那句话，没有最好的技术，看菜下饭才是硬道理。除了在缓存穿透中使用之外，其实还可以使用于元素去重，web拦截器等等。")]),s._v(" "),a("p",[s._v("这篇文章就讲到这里，感谢大家的阅读，希望看完之后能有所收获。")]),s._v(" "),a("p",[a("strong",[s._v("觉得有用就点个赞吧，你的点赞是我创作的最大动力")]),s._v("~")]),s._v(" "),a("p",[a("strong",[s._v("我是一个努力让大家记住的程序员。我们下期再见！！！")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://static.lovebilibili.com/dashacha.png",alt:"img"}})]),s._v(" "),a("blockquote",[a("p",[s._v("能力有限，如果有什么错误或者不当之处，请大家批评指正，一起学习交流！")])])])}),[],!1,null,null,null);t.default=e.exports}}]);