(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{420:function(s,t,a){"use strict";a.r(t);var r=a(13),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"订单数据越来越多-数据库越来越慢该怎么办"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#订单数据越来越多-数据库越来越慢该怎么办"}},[s._v("#")]),s._v(" 订单数据越来越多，数据库越来越慢该怎么办？")]),s._v(" "),a("p",[s._v("在前面几节课，我们一起学习了在并发持续高速增长的情况下，如何来逐步升级存储。今天这节课我们来聊一聊，如何应对数据的持续增长，特别是像订单数据这种会随着时间一直累积的数据。")]),s._v(" "),a("p",[s._v("为什么数据量越大数据库就越慢？你得理解这里面的根本原因。")]),s._v(" "),a("p",[s._v("我们知道，无论是「增删改查」哪个操作，其实都是查找问题，因为你都得先找到数据才能对数据做操作。那存储系统性能问题，其实就是 "),a("strong",[s._v("查找快慢")]),s._v(" 的问题。")]),s._v(" "),a("p",[s._v("无论是什么样的存储系统，一次查询所耗费的时间，都取决于两个因素：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("查找的时间复杂度；")])]),s._v(" "),a("li",[a("p",[s._v("数据总量。")])])]),s._v(" "),a("p",[s._v("这也是为什么大厂面试时总喜欢问 "),a("strong",[s._v("时间复杂度")]),s._v(" 相关问题的原因。查找的时间复杂度又取决于两个因素：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("查找算法；")])]),s._v(" "),a("li",[a("p",[s._v("存储数据的数据结构。")])])]),s._v(" "),a("p",[s._v("你看，这两个知识点也是面试问题中的常客吧？所以人家面试官并不是非要问你一些用不上的问题来为难你，这些知识点真的不是用不上，而是你不知道怎么用。")]),s._v(" "),a("p",[s._v("们把话题拉回来。对于我们大多数做业务的系统，用的都是现成的数据库，数据的存储结构和查找算法都是由数据库来实现的，业务系统基本没法去改变它。比如说，我们讲过 MySQL 的 InnoDB 存储引擎，它的存储结构是 B+ 树，查找算法大多就是树的查找，查找的 "),a("strong",[s._v("时间复杂度就是 O(log n)")]),s._v("，"),a("strong",[s._v("这些都是固定的。那我们唯一能改变的，就是数据总量了")]),s._v("。")]),s._v(" "),a("p",[s._v("所以，"),a("strong",[s._v("解决海量数据导致存储系统慢的问题，思想非常简单，就是一个「拆」字，把一大坨数据拆分成 N 个小坨，学名叫「分片（Shard）」")]),s._v("。拆开之后，每个分片里的数据就没那么多了，然后让查找尽量落在某一个分片上，这样来提升查找性能。")]),s._v(" "),a("p",[s._v("所有分布式存储系统解决海量数据查找问题都是遵循的这个思想，但是光有思想还不够，还需要落地，下面我们就来说如何拆分数据的问题。")]),s._v(" "),a("h2",{attrs:{id:"存档历史订单数据提升查询性能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存档历史订单数据提升查询性能"}},[s._v("#")]),s._v(" 存档历史订单数据提升查询性能")]),s._v(" "),a("p",[s._v("我们在开发业务系统的时候，很多数据都是具备时间属性的，并且随着系统运行，累计增长越来越多，数据量达到一定程度就会越来越慢，比如说电商中的订单数据，就是这种情况。按照我们刚刚说的思想，这个时候就需要拆分数据了。")]),s._v(" "),a("p",[s._v("我们的订单数据一般都是保存在 MySQL 中的订单表里面，说到拆分 MySQL 的表，大多数同学的第一反应都是「分库分表」，别着急，咱现在的数据量还没到非得分库分表那一步呢，下一节课我会和你讲分库分表。"),a("strong",[s._v("当单表的订单数据太多，多到影响性能的时候，首选的方案是，归档历史订单。")])]),s._v(" "),a("p",[s._v("所谓归档，"),a("strong",[s._v("其实也是一种拆分数据的策略")]),s._v("。简单地说，就是把大量的历史订单移到另外一张历史订单表中。为什么这么做呢？因为像订单这类具有时间属性的数据，都存在 "),a("strong",[s._v("热尾效应")]),s._v("。大多数情况下访问的都是最近的数据，但订单表里面大量的数据都是不怎么常用的老数据。")]),s._v(" "),a("p",[s._v("因为新数据只占数据总量中很少的一部分，所以把新老数据分开之后，新数据的数据量就会少很多，查询速度也就会快很多。老数据虽然和之前比起来没少多少，查询速度提升不明显，但是，因为老数据访很少会被访问到，所以慢一点儿也问题不大。")]),s._v(" "),a("p",[s._v("这样拆分的另外一个好处是，"),a("strong",[s._v("拆分订单时，需要改动的代码非常少")]),s._v("。大部分对订单表的操作都是在订单完成之前，这些业务逻辑都是完全不用修改的。即使像退货退款这类订单完成后的操作，也是有时限的，那这些业务逻辑也不需要修改，原来该怎么操作订单表还怎么操作。")]),s._v(" "),a("p",[s._v("基本上只有 "),a("strong",[s._v("查询统计类的功能")]),s._v("，会查到历史订单，这些 "),a("strong",[s._v("需要稍微做一些调整")]),s._v("，按照时间，选择去订单表还是历史订单表查询就可以了。很多电商大厂在它逐步发展壮大的过程中，都用这种订单拆分的方案撑了好多年。你可能还有印象，几年前你在京东、淘宝查自己的订单时，都有一个查「三个月前订单」的选项，其实就是查订单历史表。")]),s._v(" "),a("p",[s._v("归档历史订单，大致的流程是这样的：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://txxs.github.io/pic/record/back-end-storage/8804684b6b54c69b7f19c3758a2e425f.png",alt:"img"}})]),s._v(" "),a("ol",[a("li",[a("p",[s._v("首先我们需要创建一个和订单表结构一模一样的历史订单表；")])]),s._v(" "),a("li",[a("p",[s._v("然后，把订单表中的历史订单数据 "),a("strong",[s._v("分批查出来")]),s._v("，插入到历史订单表中去。这个过程你怎么实现都可以，用存储过程、写个脚本或者写个导数据的小程序都行，用你最熟悉的方法就行。如果你的数据库已经做了主从分离，那最好是去从库查询订单，再写到主库的历史订单表中去，这样对主库的压力会小一点儿。")])]),s._v(" "),a("li",[a("p",[s._v("现在，订单表和历史订单表都有历史订单数据，"),a("strong",[s._v("先不要着急去删除订单表中的数据")]),s._v("，你应该测试和上线支持历史订单表的新版本代码。因为两个表都有历史订单，所以现在这个数据库可以支持新旧两个版本的代码，如果新版本的代码有 Bug，你还可以立刻回滚到旧版本，不至于影响线上业务。")])]),s._v(" "),a("li",[a("p",[s._v("等新版本代码上线并验证无误之后，就可以删除订单表中的历史订单数据了。")])]),s._v(" "),a("li",[a("p",[s._v("最后，还需要上线一个迁移数据的程序或者脚本，定期把过期的订单从订单表搬到历史订单表中去。")])])]),s._v(" "),a("p",[a("strong",[s._v("类似于订单商品表这类订单的相关的子表")]),s._v("，也是需要按照同样的方式归档到各自的历史表中，由于它们都是用订单 ID 作为外键来关联到订单主表的，随着订单主表中的订单一起归档就可以了。")]),s._v(" "),a("p",[s._v("这个过程中，我们要注意的问题是，要做到对线上业务的影响尽量的小。迁移这么大量的数据，或多或少都会影响数据库的性能，你应该尽量放在闲时去迁移，"),a("strong",[s._v("迁移之前一定做好备份")]),s._v("，这样如果不小心误操作了，也能用备份来恢复。")]),s._v(" "),a("h2",{attrs:{id:"如何批量删除大量数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何批量删除大量数据"}},[s._v("#")]),s._v(" 如何批量删除大量数据？")]),s._v(" "),a("p",[s._v("这里面还有一个很重要的细节问题：如何从订单表中删除已经迁走的历史订单数据？我们直接执行一个删除历史订单的 SQL 行不行？像这样删除三个月前的订单：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" orders\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("timestamp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" SUBDATE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CURDATE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTERVAL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("month")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("大概率你会遇到错误，提示删除失败，因为需要删除的数据量太大了，所以需要分批删除。比如说我们每批删除 1000 条记录，那分批删除的 SQL 可以这样写：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" orders\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("timestamp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" SUBDATE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CURDATE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTERVAL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("month")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("执行删除语句的时候，"),a("strong",[s._v("最好在每次删除之间停顿一会儿")]),s._v("，避免给数据库造成太大的压力。上面这个删除语句已经可以用了，反复执行这个 SQL，直到全部删除历史订单是可以完成删除任务的。但是这个 SQL 还是有优化空间的，这个 SQL 每执行一次，都要先去 timestamp 对应的索引上找出符合条件的记录，然后再把这些记录按照订单 ID 排序，之后删除前 1000 条记录。")]),s._v(" "),a("p",[s._v("其实每次都排序是没必要的，所以我们可以先通过一次查询，找到符合条件的历史订单中最大的那个订单 ID，然后在删除语句中把删除的条件转换成按主键删除。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" orders\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("timestamp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" SUBDATE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CURDATE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTERVAL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("month")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" orders\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" ?\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("这样每次删除的时候，由于条件变成了主键比较，我们知道在 MySQL 的 InnoDB 存储引擎中，"),a("strong",[s._v("表数据结构就是按照主键组织的一颗 B+ 树")]),s._v("，而 B+ 树本身就是有序的，所以不仅查找非常快，也不需要再进行额外的排序操作了。当然这样做的 "),a("strong",[s._v("前提条件是订单 ID 必须和订单时间正相关")]),s._v(" 才行，大多数订单 ID 的生成规则都可以满足这个条件，所以问题不大。")]),s._v(" "),a("p",[s._v("然后我们再说一下，为什么在删除语句中非得加一个排序呢？因为按 ID 排序后，我们每批删除的记录，基本都是 ID 连续的一批记录，由于 B+ 树的有序性，这些 ID 相近的记录，在磁盘的物理文件上，大致也是放在一起的，这样删除效率会比较高，也便于 MySQL 回收页。")]),s._v(" "),a("p",[s._v("大量的历史订单数据删除完成之后，如果你检查一下 MySQL 占用的磁盘空间，你会发现它占用的磁盘空间并没有变小，这是什么原因呢？这也是和 InnoDB 的物理存储结构有关系。")]),s._v(" "),a("p",[s._v("虽然逻辑上每个表是一颗 B+ 树，但是物理上，每条记录都是存放在磁盘文件中的，这些记录通过一些位置指针来组织成一颗 B+ 树。"),a("strong",[s._v("当 MySQL 删除一条记录的时候，只能是找到记录所在的文件中位置，然后把文件的这块区域标记为空闲，然后再修改 B+ 树中相关的一些指针，完成删除")]),s._v("。其实那条被删除的记录还是躺在那个文件的那个位置，所以并不会释放磁盘空间。")]),s._v(" "),a("p",[s._v("这么做也是没有办法的办法，因为文件就是一段连续的二进制字节，类似于数组，它不支持从文件中间删除一部分数据。如果非要这么删除，只能是把这个位置之后的所有数据往前挪，这样等于是要移动大量数据，非常非常慢。所以，删除的时候，只能是标记一下，并不真正删除，后续写入新数据的时候再重用这块儿空间。")]),s._v(" "),a("p",[s._v("理解了这个原理，你就很容易知道，不仅是 MySQL，很多其他的数据库都会有类似的问题。这个问题也没什么特别好的办法解决，磁盘空间足够的话，就这样吧，至少数据删了，查询速度也快了，基本上是达到了目的。")]),s._v(" "),a("p",[s._v("如果说我们数据库的磁盘空间很紧张，非要把这部分磁盘空间释放出来，可以执行一次 "),a("code",[s._v("OPTIMIZE TABLE")]),s._v(" 释放存储空间。对于 InnoDB 来说，"),a("strong",[s._v("执行 OPTIMIZE TABLE 实际上就是把这个表重建一遍，执行过程中会一直锁表")]),s._v("，也就是说这个时候下单都会被卡住，这个是需要注意的。另外，这么优化有个前提条件，MySQL 的配置必须是每个表独立一个表空间（"),a("code",[s._v("innodb_file_per_table = ON")]),s._v("），如果所有表都是放在一起的，执行 OPTIMIZE TABLE 也不会释放磁盘空间。")]),s._v(" "),a("p",[s._v("重建表的过程中，索引也会重建，这样表数据和索引数据都会更紧凑，不仅占用磁盘空间更小，查询效率也会有提升。那对于频繁插入删除大量数据的这种表，如果能接受锁表，定期执行 OPTIMIZE TABLE 是非常有必要的。")]),s._v(" "),a("p",[s._v("如果说，我们的系统可以接受暂时停服，最快的方法是这样的：")]),s._v(" "),a("ol",[a("li",[s._v("直接新建一个临时订单表，")]),s._v(" "),a("li",[s._v("然后把当前订单复制到临时订单表中，")]),s._v(" "),a("li",[s._v("再把旧的订单表改名，")]),s._v(" "),a("li",[s._v("最后把临时订单表的表名改成正式订单表。")])]),s._v(" "),a("p",[s._v("这样，相当于我们手工把订单表重建了一次，但是，不需要漫长的删除历史订单的过程了。我把执行过程的 SQL 放在下面供你参考：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 新建一个临时订单表")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" orders_temp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" orders"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 把当前订单复制到临时订单表中")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" orders_temp\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" orders\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("timestamp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" SUBDATE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CURDATE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTERVAL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("month")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 修改替换表名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rename")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" orders "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" orders_to_be_droppd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" orders_temp "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" orders"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 删除旧表")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" orders_to_be_dropp\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),a("p",[s._v("对于订单这类具有时间属性的数据，会随时间累积，数据量越来越多，"),a("strong",[s._v("为了提升查询性能需要对数据进行拆分")]),s._v("，首选的拆分方法是 "),a("strong",[s._v("把旧数据归档到历史表中去")]),s._v("。这种拆分方法能起到很好的效果，更重要的是对系统的改动小，升级成本低。")]),s._v(" "),a("p",[s._v("在迁移历史数据过程中，如果可以停服，最快的方式是重建一张新的订单表，然后把三个月内的订单数据复制到新订单表中，再通过修改表名让新的订单表生效。如果只能在线迁移，那需要分批迭代删除历史订单数据，删除的时候注意控制删除节奏，避免给线上数据库造成太大压力。")]),s._v(" "),a("p",[s._v("最后，我要再一次提醒你，线上数据操作非常危险，在操作之前一定要做好数据备份。")]),s._v(" "),a("h2",{attrs:{id:"思考题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思考题"}},[s._v("#")]),s._v(" 思考题")]),s._v(" "),a("p",[s._v("在数据持续增长的过程中，今天介绍的这种「归档历史订单」的数据拆分方法，和直接进行分库分表相比，比如说按照订单创建时间，自动拆分成每个月一张表，两种方法各有什么优点和缺点")]),s._v(" "),a("p",[s._v("答：这个问题我在本节课中也提到了，简单的总结一下。按月自动拆分订单的好处是，不需要做数据搬运，相对实现比较简单，数据分得更碎，"),a("strong",[s._v("缺点是跨月查询比较麻烦")]),s._v("，但好处是容量也更大（因为分片更多）。归档历史订单的方法，实现起来更复杂，容量要小一些，但是对 "),a("strong",[s._v("查询更加友好")]),s._v("。")])])}),[],!1,null,null,null);t.default=e.exports}}]);