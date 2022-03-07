(window.webpackJsonp=window.webpackJsonp||[]).push([[1164],{1566:function(s,a,t){"use strict";t.r(a);var n=t(13),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_1-屈服于现实的磁盘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-屈服于现实的磁盘"}},[s._v("#")]),s._v(" 1 屈服于现实的磁盘")]),s._v(" "),t("p",[s._v("MQ都使用磁盘来存储消息。这样服务器下电也不会丢数据。绝大多数用于生产系统的服务器，都会使用多块磁盘组成磁盘阵列，这样即使其中的一块异常，也可把数据从其他磁盘中恢复。")]),s._v(" "),t("p",[s._v("另外磁盘也便宜，就可用较低成本，存储海量消息。所以，不仅仅是MQ，几乎所有存储系统的数据，都需保存到磁盘。")]),s._v(" "),t("p",[s._v("但磁盘读写很慢。SSD可读写几千次/s，若程序在处理业务请求时直接读写磁盘，假设处理每次请求需要读写3～5次，即使每次请求数据量不大，程序最多也就能处理1000次/s左右请求。")]),s._v(" "),t("p",[s._v("而内存随机读写速度是磁盘10万倍！内存作为缓存来加速程序访问速度，是所有高性能系统都会采用的方案。")]),s._v(" "),t("p",[s._v("缓存思想简单，就是把低速存储的数据，复制一份放到高速存储，加速数据访问。使用也简单")]),s._v(" "),t("ul",[t("li",[s._v("在做业务系统时，在一些执行较慢方法上加个@Cacheable\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200808042313664.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_SmF2YUVkZ2U=,size_1,color_FFFFFF,t_70",alt:""}})])]),s._v(" "),t("h1",{attrs:{id:"_2-缓存最佳实践"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-缓存最佳实践"}},[s._v("#")]),s._v(" 2 缓存最佳实践")]),s._v(" "),t("p",[s._v("采用@Cacheable注解缓存的命中率如何？\n怎样才能提高缓存命中率？\n缓存是否总能返回最新的数据？\n如果缓存返回了过期的数据该怎么办？")]),s._v(" "),t("h2",{attrs:{id:"只读缓存-vs-读写缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#只读缓存-vs-读写缓存"}},[s._v("#")]),s._v(" 只读缓存 VS 读写缓存")]),s._v(" "),t("p",[s._v("唯一区别：更新数据时，是否经过缓存。")]),s._v(" "),t("p",[s._v("Kafka使用的PageCache，是个典型的读写缓存。os会利用系统空闲物理内存给文件读写做缓存，这缓存叫做PageCache。应用程序在写文件时，os会先把数据写入PageCache，成功写进后，对于用户代码，写入就结束了。")]),s._v(" "),t("p",[s._v("然后，os再异步更新数据到磁盘。应用程序在读文件时，os是先尝试从PageCache查数据，找到就直接返回，找不到会触发一个缺页中断，然后os把数据从文件读取到PageCache，再返回给应用程序。")]),s._v(" "),t("p",[s._v("数据写到PageCache后，并不是同时写到磁盘，这其间有个延迟。\nos可保证即使程序异常退出，os也会把这部分数据同步到磁盘。但若服务器都突然掉下电，这部分数据就丢了。")]),s._v(" "),t("p",[s._v("读写缓存的设计，本身就不可靠，牺牲数据一致性换取性能。当然，程序可以调用sync等系统调用，强制操作系统立即把缓存数据同步到磁盘文件中去，但是该同步过程很慢，也失去了缓存意义。")]),s._v(" "),t("p",[s._v("写缓存实现非常复杂。应用程序不停更新PageCache数据，os需记录哪些数据变化，同时还要在另外一个线程，把缓存中变化的数据更新到磁盘。\n在提供并发读写同时异步更新数据，这过程要保证数据一致性，且有非常好性能，可为强人锁男。\n所以不推荐使用读写缓存。")]),s._v(" "),t("p",[s._v("那为什Kafka可使用PageCache提升性能？\n这由MQ特点决定。")]),s._v(" "),t("p",[s._v("MQ读写比例大致1:1，因大部分MQ都是一收一发。这种读写比例，只读缓存既无法给写加速，读加速也有限，并不能提升多少性能。\nKafka并不是只靠磁盘保证数据可靠性，它更依赖在不同节点上的多副本保证数据可靠性，这样即使某服务器掉电丢失一部分文件内容，也可从其他节点找到正确数据，不会丢消息。")]),s._v(" "),t("p",[s._v("而且PageCache读写缓存是os实现，Kafka只要按照正确姿势使用即可，不涉及实现复杂度问题。所以，Kafka其实在设计上，充分利用PageCache读写缓存的优势，且规避了PageCache一些劣势，达到很好效果。")]),s._v(" "),t("p",[s._v("和Kafka一样，大部分其他MQ，也会采用读写缓存加速消息写入，只是实现方式不同。")]),s._v(" "),t("p",[s._v("不同于MQ，大部分业务类程序，读写比都是严重不均衡，一般读频率远高于写数，一般都几倍到几十倍。使用只读缓存来加速系统才是明智选择。")]),s._v(" "),t("p",[s._v("设计只读缓存又该考虑哪些问题呢？")]),s._v(" "),t("h1",{attrs:{id:"维护缓存数据时效性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#维护缓存数据时效性"}},[s._v("#")]),s._v(" 维护缓存数据时效性")]),s._v(" "),t("p",[s._v("对只读缓存，缓存中数据源只有一个途径：磁盘。当数据需更新时，磁盘数据和缓存副本都需更新。在分布式系统中，除非是使用事务（性能差）或者一些分布式一致性算法（复杂）保证数据一致性。否则，由于节点宕机、网络传输故障等，是无法保证缓存中数据和磁盘中的数据完全一致的。")]),s._v(" "),t("p",[s._v("若出现数据不一致，数据一定是以磁盘上那份拷贝为准的。\n需解决问题：尽量让缓存数据与磁盘数据保持同步。")]),s._v(" "),t("h1",{attrs:{id:"何时更新缓存数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#何时更新缓存数据"}},[s._v("#")]),s._v(" 何时更新缓存数据")]),s._v(" "),t("p",[s._v("在更新磁盘数据同时，更新下缓存数据不就行？想法没任何问题，缓存中数据会一直保持最新。但在并发环境，实现起来不太容易。")]),s._v(" "),t("h2",{attrs:{id:"同步更新-vs异步更新缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#同步更新-vs异步更新缓存"}},[s._v("#")]),s._v(" 同步更新 VS异步更新缓存")]),s._v(" "),t("ul",[t("li",[s._v("如果同步，更新磁盘成功了，但更新缓存失败了，你是不是要反复重试保证更新成功？如果多次重试都失败，那这次更新是算成功还是失败？")]),s._v(" "),t("li",[s._v("如果是异步，怎么保证更新时序？")])]),s._v(" "),t("p",[s._v("比如，我先把一个文件中某个数据设成0，然后又设为1，这时文件中数据肯定是1，但缓存中数据不一定是1。因为把缓存中数据更新为0，和更新为1是两个并发的异步操作，无法保证谁先执行。\n这些问题都会导致缓存数据和磁盘数据不一致，而且，在下次更新这条数据前，这个不一致问题一直存在。\n当然，这些问题也不是不能解决，比如使用分布式事务，只是牺牲性能、实现复杂度，代价很大。")]),s._v(" "),t("p",[s._v("另一种较简单方法")]),s._v(" "),t("h2",{attrs:{id:"定时刷盘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定时刷盘"}},[s._v("#")]),s._v(" 定时刷盘")]),s._v(" "),t("p",[s._v("一般每次同步时直接全量更新，因为是在异步线程中更新，同步速度即使慢点也不是大问题。\n如果缓存数据太大，更新慢到无法接受，也可选择增量更新，每次只更新从上次缓存同步至今这段时间内变化的数据，代价是实现起来会稍微有些复杂。")]),s._v(" "),t("p",[s._v("如果说，某次同步过程中发生了错误，等到下一个同步周期也会自动把数据纠正过来。这种定时同步缓存的方法，缺点是缓存更新不那么及时，优点是实现起来非常简单，鲁棒性非常好。")]),s._v(" "),t("p",[s._v("更简单的方法")]),s._v(" "),t("h2",{attrs:{id:"ttl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ttl"}},[s._v("#")]),s._v(" TTL")]),s._v(" "),t("p",[s._v("从不更新缓存数据，而是给缓存中的每条数据设较短的过期时间，数据过期后即使还存在缓存，也认为不再有效，需从磁盘再次加载这数据，变相实现数据更新。")]),s._v(" "),t("p",[s._v("很多情况下，缓存数据更新不及时，系统也能够接受。\n比如你刚发了一封邮件，收件人过了一会儿才收到。或你改了自己头像，在一段时间内，你的好友看到还是旧头像，都可接受。\n这种对数据一致性没有那么敏感场景，一定要选择后两种方法。")]),s._v(" "),t("p",[s._v("而像交易系统，对数据一致性敏感。\n比如，你给别人转了一笔钱，别人查询自己余额却没变化，这肯定无法接受。对这样系统，一般都不使用缓存或使用提到的第一种方法，在更新数据时同时更新缓存。")]),s._v(" "),t("h1",{attrs:{id:"缓存置换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存置换"}},[s._v("#")]),s._v(" 缓存置换")]),s._v(" "),t("p",[s._v("除考虑数据一致性，还需关注内存有限，要优先缓存哪些数据，让缓存命中率最高。")]),s._v(" "),t("p",[s._v("当程序要访问某些数据时，如果这些数据在缓存，那直接访问缓存中数据，这次访问速度很快，称为缓存命中；\n如果这些数据不在缓存=》只能去磁盘=》较慢=》“缓存穿透”。\n显然，缓存命中率越高，程序总体性能越好。")]),s._v(" "),t("p",[s._v("那用什么策略选择缓存的数据，能使缓存命中率尽量高？")]),s._v(" "),t("p",[s._v("如果你的系统是那种可预测未来访问哪些数据的，比如有的系统它会定期做数据同步，每次同步数据范围都一样，这样的系统，缓存策略简单，你要访问什么数据，就缓存什么数据，甚至可做到百分百命中。\n但大部分系统没办法准确预测会有哪些数据会被访问，只能使用一些策略尽可能地提高命中率。")]),s._v(" "),t("p",[s._v("一般都会在数据首次被访问时，顺便把这条数据放到缓存。\n随访问数据越来越多，总有把缓存占满时，这时就需要把缓存中一些数据删除，以存放新数据，这过程称为缓存置换。\n问题就成了：当缓存满，删除哪些数据，会使缓存命中率更高，采用什么置换策略呢。\n命中率最高的置换策略，一定是根据你的业务定制化的。\n比如，你如果知道某些数据已删除，永远不会再访问，那优先置换这些数据肯定没问题。\n再比如，有会话的系统，你知道现在哪些用户是在线，哪些用户已离线，那优先置换那些已离线用户的数据，尽量保留在线用户的数据也是好策略。")]),s._v(" "),t("ul",[t("li",[s._v("另外就是使用通用置换算法LRU\n最近刚刚被访问的数据，它在将来被访问的可能性也很大，而很久都没被访问过的数据，未来再被访问的几率也不大。")])]),s._v(" "),t("p",[s._v("LRU原理简单，总把最长时间未被访问的数据置换出去。别看这么简单，效果非常非常好。")]),s._v(" "),t("p",[s._v("Kafka使用的PageCache，是由Linux内核实现，它的置换算法的就是一种LRU变种体：LRU 2Q。设计JMQ缓存策略时，也是采用一种改进LRU算法。\nLRU淘汰最近最少使用的页，JMQ根据消息这种流数据存储的特点，在淘汰时增个考量维度：页面位置与尾部的距离。因为越是靠近尾部的数据，被访问的概率越大。")]),s._v(" "),t("p",[s._v("综合考虑下的淘汰算法，不仅命中率更高，还能有效地避免“挖坟”问题：例如某个客户端正在从很旧的位置开始向后读取批历史数据，内存中缓存很快都会被替换成这些历史数据，相当于大部分缓存资源都被消耗，这会导致其他客户端访问命中率下降。加入位置权重后，比较旧的页面会很快被淘汰掉，减少“挖坟”对系统影响。所以经常看到很多挖坟贴不再提供任何服务功能，甚至还会被删除。")]),s._v(" "),t("h1",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("p",[s._v("按读写性质，可分为读写缓存和只读缓存，读写缓存实现复杂，且只在MQ等少数情况适用。\n只读缓存适用的范围更广，实现更简单。")]),s._v(" "),t("p",[s._v("在实现只读缓存的时候，你需要考虑的第一个问题是如何来更新缓存。这里面有三种方法")]),s._v(" "),t("ol",[t("li",[s._v("在更新数据的同时去更新缓存")]),s._v(" "),t("li",[s._v("定期来更新全部缓存")]),s._v(" "),t("li",[s._v("给缓存中的每个数据设置一个有效期，让它自然过期以达到更新的目的")])]),s._v(" "),t("p",[s._v("这三种方法在更新的及时性上和实现的复杂度这两方面，都是依次递减的，你可以按需选择。")]),s._v(" "),t("p",[s._v("对于缓存的置换策略，最优的策略一定是你根据业务来设计的定制化的置换策略，当然你也可以考虑LRU这样通用的缓存置换算法。")]),s._v(" "),t("h1",{attrs:{id:"手写lru缓存置换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手写lru缓存置换"}},[s._v("#")]),s._v(" 手写LRU缓存置换")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * KV存储抽象\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Storage")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("K")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("V")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * 根据提供的key来访问数据\n     * @param key 数据Key\n     * @return 数据值\n     */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("V")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("K")]),s._v(" key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * LRU缓存。你需要继承这个抽象类来实现LRU缓存。\n * @param <K> 数据Key\n * @param <V> 数据值\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("abstract")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LruCache")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("K")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("V")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Storage")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("K")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("V")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 缓存容量")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" capacity"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 低速存储，所有的数据都可以从这里读到")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Storage")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("K")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("V")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" lowSpeedStorage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LruCache")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" capacity"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Storage")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("K")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("V")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" lowSpeedStorage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("capacity "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" capacity"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lowSpeedStorage "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" lowSpeedStorage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br")])]),t("p",[s._v("需继承LruCache，实现自己的LRU缓存。lowSpeedStorage是提供给你可用的低速存储，你不需要实现它。")]),s._v(" "),t("ul",[t("li",[s._v("https://github.com/swgithub1006/mqlearning")]),s._v(" "),t("li",[s._v("https://gist.github.com/imgaoxin/ed59397c895b5a8a9572408b98542015")])])])}),[],!1,null,null,null);a.default=e.exports}}]);