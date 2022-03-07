(window.webpackJsonp=window.webpackJsonp||[]).push([[1244],{1645:function(_,v,e){"use strict";e.r(v);var o=e(13),t=Object(o.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("blockquote",[e("p",[_._v("本文来自公号程序猿阿星投稿，JavaGuide 对其做了补充完善。")])]),_._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[_._v("#")]),_._v(" 前言")]),_._v(" "),e("p",[e("code",[_._v("MySQL")]),_._v(" 日志 主要包括错误日志、查询日志、慢查询日志、事务日志、二进制日志几大类。其中，比较重要的还要属二进制日志 "),e("code",[_._v("binlog")]),_._v("（归档日志）和事务日志 "),e("code",[_._v("redo log")]),_._v("（重做日志）和 "),e("code",[_._v("undo log")]),_._v("（回滚日志）。")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/18702524676/CND5/image/mysql/03/01.png",alt:""}})]),_._v(" "),e("p",[_._v("今天就来聊聊 "),e("code",[_._v("redo log")]),_._v("（重做日志）、"),e("code",[_._v("binlog")]),_._v("（归档日志）、两阶段提交、"),e("code",[_._v("undo log")]),_._v(" （回滚日志）。")]),_._v(" "),e("h2",{attrs:{id:"redo-log"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redo-log"}},[_._v("#")]),_._v(" redo log")]),_._v(" "),e("p",[e("code",[_._v("redo log")]),_._v("（重做日志）是"),e("code",[_._v("InnoDB")]),_._v("存储引擎独有的，它让"),e("code",[_._v("MySQL")]),_._v("拥有了崩溃恢复能力。")]),_._v(" "),e("p",[_._v("比如 "),e("code",[_._v("MySQL")]),_._v(" 实例挂了或宕机了，重启时，"),e("code",[_._v("InnoDB")]),_._v("存储引擎会使用"),e("code",[_._v("redo log")]),_._v("恢复数据，保证数据的持久性与完整性。")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/18702524676/CND5/image/mysql/03/02.png",alt:""}})]),_._v(" "),e("p",[e("code",[_._v("MySQL")]),_._v(" 中数据是以页为单位，你查询一条记录，会从硬盘把一页的数据加载出来，加载出来的数据叫数据页，会放入到 "),e("code",[_._v("Buffer Pool")]),_._v(" 中。")]),_._v(" "),e("p",[_._v("后续的查询都是先从 "),e("code",[_._v("Buffer Pool")]),_._v(" 中找，没有命中再去硬盘加载，减少硬盘 "),e("code",[_._v("IO")]),_._v(" 开销，提升性能。")]),_._v(" "),e("p",[_._v("更新表数据的时候，也是如此，发现 "),e("code",[_._v("Buffer Pool")]),_._v(" 里存在要更新的数据，就直接在 "),e("code",[_._v("Buffer Pool")]),_._v(" 里更新。")]),_._v(" "),e("p",[_._v("然后会把“在某个数据页上做了什么修改”记录到重做日志缓存（"),e("code",[_._v("redo log buffer")]),_._v("）里，接着刷盘到 "),e("code",[_._v("redo log")]),_._v(" 文件里。")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/18702524676/CND5/image/mysql/03/03.png",alt:""}})]),_._v(" "),e("blockquote",[e("p",[_._v("图片笔误提示：第4步 “清空 redo log buffe 刷盘到 redo 日志中”这句话中的 buffe 应该是 buffer。")])]),_._v(" "),e("p",[_._v("理想情况，事务一提交就会进行刷盘操作，但实际上，刷盘的时机是根据策略来进行的。")]),_._v(" "),e("blockquote",[e("p",[_._v("小贴士：每条 redo 记录由“表空间号+数据页号+偏移量+修改数据长度+具体修改的数据”组成")])]),_._v(" "),e("h3",{attrs:{id:"刷盘时机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#刷盘时机"}},[_._v("#")]),_._v(" 刷盘时机")]),_._v(" "),e("p",[e("code",[_._v("InnoDB")]),_._v(" 存储引擎为 "),e("code",[_._v("redo log")]),_._v(" 的刷盘策略提供了 "),e("code",[_._v("innodb_flush_log_at_trx_commit")]),_._v(" 参数，它支持三种策略：")]),_._v(" "),e("ul",[e("li",[e("strong",[_._v("0")]),_._v(" ：设置为 0 的时候，表示每次事务提交时不进行刷盘操作")]),_._v(" "),e("li",[e("strong",[_._v("1")]),_._v(" ：设置为 1 的时候，表示每次事务提交时都将进行刷盘操作（默认值）")]),_._v(" "),e("li",[e("strong",[_._v("2")]),_._v(" ：设置为 2 的时候，表示每次事务提交时都只把 redo log buffer 内容写入 page cache")])]),_._v(" "),e("p",[e("code",[_._v("innodb_flush_log_at_trx_commit")]),_._v(" 参数默认为 1 ，也就是说当事务提交时会调用 "),e("code",[_._v("fsync")]),_._v(" 对 redo log 进行刷盘")]),_._v(" "),e("p",[_._v("另外，"),e("code",[_._v("InnoDB")]),_._v(" 存储引擎有一个后台线程，每隔"),e("code",[_._v("1")]),_._v(" 秒，就会把 "),e("code",[_._v("redo log buffer")]),_._v(" 中的内容写到文件系统缓存（"),e("code",[_._v("page cache")]),_._v("），然后调用 "),e("code",[_._v("fsync")]),_._v(" 刷盘。")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/18702524676/CND5/image/mysql/03/04.png",alt:""}})]),_._v(" "),e("p",[_._v("也就是说，一个没有提交事务的 "),e("code",[_._v("redo log")]),_._v(" 记录，也可能会刷盘。")]),_._v(" "),e("p",[e("strong",[_._v("为什么呢？")])]),_._v(" "),e("p",[_._v("因为在事务执行过程 "),e("code",[_._v("redo log")]),_._v(" 记录是会写入"),e("code",[_._v("redo log buffer")]),_._v(" 中，这些 "),e("code",[_._v("redo log")]),_._v(" 记录会被后台线程刷盘。")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/18702524676/CND5/image/mysql/03/05.png",alt:""}})]),_._v(" "),e("p",[_._v("除了后台线程每秒"),e("code",[_._v("1")]),_._v("次的轮询操作，还有一种情况，当 "),e("code",[_._v("redo log buffer")]),_._v(" 占用的空间即将达到 "),e("code",[_._v("innodb_log_buffer_size")]),_._v(" 一半的时候，后台线程会主动刷盘。")]),_._v(" "),e("p",[_._v("下面是不同刷盘策略的流程图。")]),_._v(" "),e("h4",{attrs:{id:"innodb-flush-log-at-trx-commit-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#innodb-flush-log-at-trx-commit-0"}},[_._v("#")]),_._v(" innodb_flush_log_at_trx_commit=0")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/18702524676/CND5/image/mysql/03/06.png",alt:""}})]),_._v(" "),e("p",[_._v("为"),e("code",[_._v("0")]),_._v("时，如果"),e("code",[_._v("MySQL")]),_._v("挂了或宕机可能会有"),e("code",[_._v("1")]),_._v("秒数据的丢失。")]),_._v(" "),e("h4",{attrs:{id:"innodb-flush-log-at-trx-commit-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#innodb-flush-log-at-trx-commit-1"}},[_._v("#")]),_._v(" innodb_flush_log_at_trx_commit=1")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/18702524676/CND5/image/mysql/03/07.png",alt:""}})]),_._v(" "),e("p",[_._v("为"),e("code",[_._v("1")]),_._v("时， 只要事务提交成功，"),e("code",[_._v("redo log")]),_._v("记录就一定在硬盘里，不会有任何数据丢失。")]),_._v(" "),e("p",[_._v("如果事务执行期间"),e("code",[_._v("MySQL")]),_._v("挂了或宕机，这部分日志丢了，但是事务并没有提交，所以日志丢了也不会有损失。")]),_._v(" "),e("h4",{attrs:{id:"innodb-flush-log-at-trx-commit-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#innodb-flush-log-at-trx-commit-2"}},[_._v("#")]),_._v(" innodb_flush_log_at_trx_commit=2")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/18702524676/CND5/image/mysql/03/09.png",alt:""}})]),_._v(" "),e("p",[_._v("为"),e("code",[_._v("2")]),_._v("时， 只要事务提交成功，"),e("code",[_._v("redo log buffer")]),_._v("中的内容只写入文件系统缓存（"),e("code",[_._v("page cache")]),_._v("）。")]),_._v(" "),e("p",[_._v("如果仅仅只是"),e("code",[_._v("MySQL")]),_._v("挂了不会有任何数据丢失，但是宕机可能会有"),e("code",[_._v("1")]),_._v("秒数据的丢失。")]),_._v(" "),e("h3",{attrs:{id:"日志文件组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#日志文件组"}},[_._v("#")]),_._v(" 日志文件组")]),_._v(" "),e("p",[_._v("硬盘上存储的 "),e("code",[_._v("redo log")]),_._v(" 日志文件不只一个，而是以一个"),e("strong",[_._v("日志文件组")]),_._v("的形式出现的，每个的"),e("code",[_._v("redo")]),_._v("日志文件大小都是一样的。")]),_._v(" "),e("p",[_._v("比如可以配置为一组"),e("code",[_._v("4")]),_._v("个文件，每个文件的大小是 "),e("code",[_._v("1GB")]),_._v("，整个 "),e("code",[_._v("redo log")]),_._v(" 日志文件组可以记录"),e("code",[_._v("4G")]),_._v("的内容。")]),_._v(" "),e("p",[_._v("它采用的是环形数组形式，从头开始写，写到末尾又回到头循环写，如下图所示。")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/18702524676/CND5/image/mysql/03/10.png",alt:""}})]),_._v(" "),e("p",[_._v("在个"),e("strong",[_._v("日志文件组")]),_._v("中还有两个重要的属性，分别是 "),e("code",[_._v("write pos、checkpoint")])]),_._v(" "),e("ul",[e("li",[e("strong",[_._v("write pos")]),_._v(" 是当前记录的位置，一边写一边后移")]),_._v(" "),e("li",[e("strong",[_._v("checkpoint")]),_._v(" 是当前要擦除的位置，也是往后推移")])]),_._v(" "),e("p",[_._v("每次刷盘 "),e("code",[_._v("redo log")]),_._v(" 记录到"),e("strong",[_._v("日志文件组")]),_._v("中，"),e("code",[_._v("write pos")]),_._v(" 位置就会后移更新。")]),_._v(" "),e("p",[_._v("每次 "),e("code",[_._v("MySQL")]),_._v(" 加载"),e("strong",[_._v("日志文件组")]),_._v("恢复数据时，会清空加载过的 "),e("code",[_._v("redo log")]),_._v(" 记录，并把 "),e("code",[_._v("checkpoint")]),_._v(" 后移更新。")]),_._v(" "),e("p",[e("code",[_._v("write pos")]),_._v(" 和 "),e("code",[_._v("checkpoint")]),_._v(" 之间的还空着的部分可以用来写入新的 "),e("code",[_._v("redo log")]),_._v(" 记录。")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/18702524676/CND5/image/mysql/03/11.png",alt:""}})]),_._v(" "),e("p",[_._v("如果 "),e("code",[_._v("write pos")]),_._v(" 追上 "),e("code",[_._v("checkpoint")]),_._v(" ，表示"),e("strong",[_._v("日志文件组")]),_._v("满了，这时候不能再写入新的 "),e("code",[_._v("redo log")]),_._v(" 记录，"),e("code",[_._v("MySQL")]),_._v(" 得停下来，清空一些记录，把 "),e("code",[_._v("checkpoint")]),_._v(" 推进一下。")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/18702524676/CND5/image/mysql/03/12.png",alt:""}})]),_._v(" "),e("h3",{attrs:{id:"redo-log-小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redo-log-小结"}},[_._v("#")]),_._v(" redo log 小结")]),_._v(" "),e("p",[_._v("相信大家都知道 "),e("code",[_._v("redo log")]),_._v(" 的作用和它的刷盘时机、存储形式。")]),_._v(" "),e("p",[_._v("现在我们来思考一个问题： "),e("strong",[_._v("只要每次把修改后的数据页直接刷盘不就好了，还有 "),e("code",[_._v("redo log")]),_._v(" 什么事？")])]),_._v(" "),e("p",[_._v("它们不都是刷盘么？差别在哪里？")]),_._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[_._v("1")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[_._v("Byte")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[_._v("8")]),_._v("bit\n"),e("span",{pre:!0,attrs:{class:"token number"}},[_._v("1")]),_._v(" KB "),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[_._v("1024")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[_._v("Byte")]),_._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[_._v("1")]),_._v(" MB "),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[_._v("1024")]),_._v(" KB\n"),e("span",{pre:!0,attrs:{class:"token number"}},[_._v("1")]),_._v(" GB "),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[_._v("1024")]),_._v(" MB\n"),e("span",{pre:!0,attrs:{class:"token number"}},[_._v("1")]),_._v(" TB "),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[_._v("1024")]),_._v(" GB\n")])]),_._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[_._v("1")]),e("br"),e("span",{staticClass:"line-number"},[_._v("2")]),e("br"),e("span",{staticClass:"line-number"},[_._v("3")]),e("br"),e("span",{staticClass:"line-number"},[_._v("4")]),e("br"),e("span",{staticClass:"line-number"},[_._v("5")]),e("br")])]),e("p",[_._v("实际上，数据页大小是"),e("code",[_._v("16KB")]),_._v("，刷盘比较耗时，可能就修改了数据页里的几 "),e("code",[_._v("Byte")]),_._v(" 数据，有必要把完整的数据页刷盘吗？")]),_._v(" "),e("p",[_._v("而且数据页刷盘是随机写，因为一个数据页对应的位置可能在硬盘文件的随机位置，所以性能是很差。")]),_._v(" "),e("p",[_._v("如果是写 "),e("code",[_._v("redo log")]),_._v("，一行记录可能就占几十 "),e("code",[_._v("Byte")]),_._v("，只包含表空间号、数据页号、磁盘文件偏移\n量、更新值，再加上是顺序写，所以刷盘速度很快。")]),_._v(" "),e("p",[_._v("所以用 "),e("code",[_._v("redo log")]),_._v(" 形式记录修改内容，性能会远远超过刷数据页的方式，这也让数据库的并发能力更强。")]),_._v(" "),e("blockquote",[e("p",[_._v("其实内存的数据页在一定时机也会刷盘，我们把这称为页合并，讲 "),e("code",[_._v("Buffer Pool")]),_._v("的时候会对这块细说")])]),_._v(" "),e("h2",{attrs:{id:"binlog"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binlog"}},[_._v("#")]),_._v(" binlog")]),_._v(" "),e("p",[e("code",[_._v("redo log")]),_._v(" 它是物理日志，记录内容是“在某个数据页上做了什么修改”，属于 "),e("code",[_._v("InnoDB")]),_._v(" 存储引擎。")]),_._v(" "),e("p",[_._v("而 "),e("code",[_._v("binlog")]),_._v(" 是逻辑日志，记录内容是语句的原始逻辑，类似于“给 ID=2 这一行的 c 字段加 1”，属于"),e("code",[_._v("MySQL Server")]),_._v(" 层。")]),_._v(" "),e("p",[_._v("不管用什么存储引擎，只要发生了表数据更新，都会产生 "),e("code",[_._v("binlog")]),_._v(" 日志。")]),_._v(" "),e("p",[_._v("那 "),e("code",[_._v("binlog")]),_._v(" 到底是用来干嘛的？")]),_._v(" "),e("p",[_._v("可以说"),e("code",[_._v("MySQL")]),_._v("数据库的"),e("strong",[_._v("数据备份、主备、主主、主从")]),_._v("都离不开"),e("code",[_._v("binlog")]),_._v("，需要依靠"),e("code",[_._v("binlog")]),_._v("来同步数据，保证数据一致性。")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/18702524676/CND5/image/mysql/04/01.png",alt:""}})]),_._v(" "),e("p",[e("code",[_._v("binlog")]),_._v("会记录所有涉及更新数据的逻辑操作，并且是顺序写。")]),_._v(" "),e("h3",{attrs:{id:"记录格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#记录格式"}},[_._v("#")]),_._v(" 记录格式")]),_._v(" "),e("p",[e("code",[_._v("binlog")]),_._v(" 日志有三种格式，可以通过"),e("code",[_._v("binlog_format")]),_._v("参数指定。")]),_._v(" "),e("ul",[e("li",[e("strong",[_._v("statement")])]),_._v(" "),e("li",[e("strong",[_._v("row")])]),_._v(" "),e("li",[e("strong",[_._v("mixed")])])]),_._v(" "),e("p",[_._v("指定"),e("code",[_._v("statement")]),_._v("，记录的内容是"),e("code",[_._v("SQL")]),_._v("语句原文，比如执行一条"),e("code",[_._v("update T set update_time=now() where id=1")]),_._v("，记录的内容如下。")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/18702524676/CND5/image/mysql/04/02.png",alt:""}})]),_._v(" "),e("p",[_._v("同步数据时，会执行记录的"),e("code",[_._v("SQL")]),_._v("语句，但是有个问题，"),e("code",[_._v("update_time=now()")]),_._v("这里会获取当前系统时间，直接执行会导致与原库的数据不一致。")]),_._v(" "),e("p",[_._v("为了解决这种问题，我们需要指定为"),e("code",[_._v("row")]),_._v("，记录的内容不再是简单的"),e("code",[_._v("SQL")]),_._v("语句了，还包含操作的具体数据，记录内容如下。")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/18702524676/CND5/image/mysql/04/03.png",alt:""}})]),_._v(" "),e("p",[e("code",[_._v("row")]),_._v("格式记录的内容看不到详细信息，要通过"),e("code",[_._v("mysqlbinlog")]),_._v("工具解析出来。")]),_._v(" "),e("p",[e("code",[_._v("update_time=now()")]),_._v("变成了具体的时间"),e("code",[_._v("update_time=1627112756247")]),_._v("，条件后面的@1、@2、@3 都是该行数据第 1 个~3 个字段的原始值（"),e("strong",[_._v("假设这张表只有 3 个字段")]),_._v("）。")]),_._v(" "),e("p",[_._v("这样就能保证同步数据的一致性，通常情况下都是指定为"),e("code",[_._v("row")]),_._v("，这样可以为数据库的恢复与同步带来更好的可靠性。")]),_._v(" "),e("p",[_._v("但是这种格式，需要更大的容量来记录，比较占用空间，恢复与同步时会更消耗"),e("code",[_._v("IO")]),_._v("资源，影响执行速度。")]),_._v(" "),e("p",[_._v("所以就有了一种折中的方案，指定为"),e("code",[_._v("mixed")]),_._v("，记录的内容是前两者的混合。")]),_._v(" "),e("p",[e("code",[_._v("MySQL")]),_._v("会判断这条"),e("code",[_._v("SQL")]),_._v("语句是否可能引起数据不一致，如果是，就用"),e("code",[_._v("row")]),_._v("格式，否则就用"),e("code",[_._v("statement")]),_._v("格式。")]),_._v(" "),e("h3",{attrs:{id:"写入机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#写入机制"}},[_._v("#")]),_._v(" 写入机制")]),_._v(" "),e("p",[e("code",[_._v("binlog")]),_._v("的写入时机也非常简单，事务执行过程中，先把日志写到"),e("code",[_._v("binlog cache")]),_._v("，事务提交的时候，再把"),e("code",[_._v("binlog cache")]),_._v("写到"),e("code",[_._v("binlog")]),_._v("文件中。")]),_._v(" "),e("p",[_._v("因为一个事务的"),e("code",[_._v("binlog")]),_._v("不能被拆开，无论这个事务多大，也要确保一次性写入，所以系统会给每个线程分配一个块内存作为"),e("code",[_._v("binlog cache")]),_._v("。")]),_._v(" "),e("p",[_._v("我们可以通过"),e("code",[_._v("binlog_cache_size")]),_._v("参数控制单个线程 binlog cache 大小，如果存储内容超过了这个参数，就要暂存到磁盘（"),e("code",[_._v("Swap")]),_._v("）。")]),_._v(" "),e("p",[e("code",[_._v("binlog")]),_._v("日志刷盘流程如下")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/18702524676/CND5/image/mysql/04/04.png",alt:""}})]),_._v(" "),e("ul",[e("li",[e("strong",[_._v("上图的 write，是指把日志写入到文件系统的 page cache，并没有把数据持久化到磁盘，所以速度比较快")])]),_._v(" "),e("li",[e("strong",[_._v("上图的 fsync，才是将数据持久化到磁盘的操作")])])]),_._v(" "),e("p",[e("code",[_._v("write")]),_._v("和"),e("code",[_._v("fsync")]),_._v("的时机，可以由参数"),e("code",[_._v("sync_binlog")]),_._v("控制，默认是"),e("code",[_._v("0")]),_._v("。")]),_._v(" "),e("p",[_._v("为"),e("code",[_._v("0")]),_._v("的时候，表示每次提交事务都只"),e("code",[_._v("write")]),_._v("，由系统自行判断什么时候执行"),e("code",[_._v("fsync")]),_._v("。")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/18702524676/CND5/image/mysql/04/05.png",alt:""}})]),_._v(" "),e("p",[_._v("虽然性能得到提升，但是机器宕机，"),e("code",[_._v("page cache")]),_._v("里面的 binglog 会丢失。")]),_._v(" "),e("p",[_._v("为了安全起见，可以设置为"),e("code",[_._v("1")]),_._v("，表示每次提交事务都会执行"),e("code",[_._v("fsync")]),_._v("，就如同"),e("strong",[_._v("binlog 日志刷盘流程")]),_._v("一样。")]),_._v(" "),e("p",[_._v("最后还有一种折中方式，可以设置为"),e("code",[_._v("N(N>1)")]),_._v("，表示每次提交事务都"),e("code",[_._v("write")]),_._v("，但累积"),e("code",[_._v("N")]),_._v("个事务后才"),e("code",[_._v("fsync")]),_._v("。")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/18702524676/CND5/image/mysql/04/06.png",alt:""}})]),_._v(" "),e("p",[_._v("在出现"),e("code",[_._v("IO")]),_._v("瓶颈的场景里，将"),e("code",[_._v("sync_binlog")]),_._v("设置成一个比较大的值，可以提升性能。")]),_._v(" "),e("p",[_._v("同样的，如果机器宕机，会丢失最近"),e("code",[_._v("N")]),_._v("个事务的"),e("code",[_._v("binlog")]),_._v("日志。")]),_._v(" "),e("h2",{attrs:{id:"两阶段提交"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#两阶段提交"}},[_._v("#")]),_._v(" 两阶段提交")]),_._v(" "),e("p",[e("code",[_._v("redo log")]),_._v("（重做日志）让"),e("code",[_._v("InnoDB")]),_._v("存储引擎拥有了崩溃恢复能力。")]),_._v(" "),e("p",[e("code",[_._v("binlog")]),_._v("（归档日志）保证了"),e("code",[_._v("MySQL")]),_._v("集群架构的数据一致性。")]),_._v(" "),e("p",[_._v("虽然它们都属于持久化的保证，但是侧重点不同。")]),_._v(" "),e("p",[_._v("在执行更新语句过程，会记录"),e("code",[_._v("redo log")]),_._v("与"),e("code",[_._v("binlog")]),_._v("两块日志，以基本的事务为单位，"),e("code",[_._v("redo log")]),_._v("在事务执行过程中可以不断写入，而"),e("code",[_._v("binlog")]),_._v("只有在提交事务时才写入，所以"),e("code",[_._v("redo log")]),_._v("与"),e("code",[_._v("binlog")]),_._v("的写入时机不一样。")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/18702524676/CND5/image/mysql/05/01.png",alt:""}})]),_._v(" "),e("p",[_._v("回到正题，"),e("code",[_._v("redo log")]),_._v("与"),e("code",[_._v("binlog")]),_._v("两份日志之间的逻辑不一致，会出现什么问题？")]),_._v(" "),e("p",[_._v("我们以"),e("code",[_._v("update")]),_._v("语句为例，假设"),e("code",[_._v("id=2")]),_._v("的记录，字段"),e("code",[_._v("c")]),_._v("值是"),e("code",[_._v("0")]),_._v("，把字段"),e("code",[_._v("c")]),_._v("值更新成"),e("code",[_._v("1")]),_._v("，"),e("code",[_._v("SQL")]),_._v("语句为"),e("code",[_._v("update T set c=1 where id=2")]),_._v("。")]),_._v(" "),e("p",[_._v("假设执行过程中写完"),e("code",[_._v("redo log")]),_._v("日志后，"),e("code",[_._v("binlog")]),_._v("日志写期间发生了异常，会出现什么情况呢？")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/18702524676/CND5/image/mysql/05/02.png",alt:""}})]),_._v(" "),e("p",[_._v("由于"),e("code",[_._v("binlog")]),_._v("没写完就异常，这时候"),e("code",[_._v("binlog")]),_._v("里面没有对应的修改记录。因此，之后用"),e("code",[_._v("binlog")]),_._v("日志恢复数据时，就会少这一次更新，恢复出来的这一行"),e("code",[_._v("c")]),_._v("值是"),e("code",[_._v("0")]),_._v("，而原库因为"),e("code",[_._v("redo log")]),_._v("日志恢复，这一行"),e("code",[_._v("c")]),_._v("值是"),e("code",[_._v("1")]),_._v("，最终数据不一致。")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/18702524676/CND5/image/mysql/05/03.png",alt:""}})]),_._v(" "),e("p",[_._v("为了解决两份日志之间的逻辑一致问题，"),e("code",[_._v("InnoDB")]),_._v("存储引擎使用"),e("strong",[_._v("两阶段提交")]),_._v("方案。")]),_._v(" "),e("p",[_._v("原理很简单，将"),e("code",[_._v("redo log")]),_._v("的写入拆成了两个步骤"),e("code",[_._v("prepare")]),_._v("和"),e("code",[_._v("commit")]),_._v("，这就是"),e("strong",[_._v("两阶段提交")]),_._v("。")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/18702524676/CND5/image/mysql/05/04.png",alt:""}})]),_._v(" "),e("p",[_._v("使用"),e("strong",[_._v("两阶段提交")]),_._v("后，写入"),e("code",[_._v("binlog")]),_._v("时发生异常也不会有影响，因为"),e("code",[_._v("MySQL")]),_._v("根据"),e("code",[_._v("redo log")]),_._v("日志恢复数据时，发现"),e("code",[_._v("redo log")]),_._v("还处于"),e("code",[_._v("prepare")]),_._v("阶段，并且没有对应"),e("code",[_._v("binlog")]),_._v("日志，就会回滚该事务。")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/18702524676/CND5/image/mysql/05/05.png",alt:""}})]),_._v(" "),e("p",[_._v("再看一个场景，"),e("code",[_._v("redo log")]),_._v("设置"),e("code",[_._v("commit")]),_._v("阶段发生异常，那会不会回滚事务呢？")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/18702524676/CND5/image/mysql/05/06.png",alt:""}})]),_._v(" "),e("p",[_._v("并不会回滚事务，它会执行上图框住的逻辑，虽然"),e("code",[_._v("redo log")]),_._v("是处于"),e("code",[_._v("prepare")]),_._v("阶段，但是能通过事务"),e("code",[_._v("id")]),_._v("找到对应的"),e("code",[_._v("binlog")]),_._v("日志，所以"),e("code",[_._v("MySQL")]),_._v("认为是完整的，就会提交事务恢复数据。")]),_._v(" "),e("h2",{attrs:{id:"undo-log"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#undo-log"}},[_._v("#")]),_._v(" undo log")]),_._v(" "),e("blockquote",[e("p",[_._v("这部分内容为 JavaGuide 的补充：")])]),_._v(" "),e("p",[_._v("我们知道如果想要保证事务的原子性，就需要在异常发生时，对已经执行的操作进行"),e("strong",[_._v("回滚")]),_._v("，在 MySQL 中，恢复机制是通过 "),e("strong",[_._v("回滚日志（undo log）")]),_._v(" 实现的，所有事务进行的修改都会先记录到这个回滚日志中，然后再执行相关的操作。如果执行过程中遇到异常的话，我们直接利用 "),e("strong",[_._v("回滚日志")]),_._v(" 中的信息将数据回滚到修改之前的样子即可！并且，回滚日志会先于数据持久化到磁盘上。这样就保证了即使遇到数据库突然宕机等情况，当用户再次启动数据库的时候，数据库还能够通过查询回滚日志来回滚将之前未完成的事务。")]),_._v(" "),e("p",[_._v("另外，"),e("code",[_._v("MVCC")]),_._v(" 的实现依赖于："),e("strong",[_._v("隐藏字段、Read View、undo log")]),_._v("。在内部实现中，"),e("code",[_._v("InnoDB")]),_._v(" 通过数据行的 "),e("code",[_._v("DB_TRX_ID")]),_._v(" 和 "),e("code",[_._v("Read View")]),_._v(" 来判断数据的可见性，如不可见，则通过数据行的 "),e("code",[_._v("DB_ROLL_PTR")]),_._v(" 找到 "),e("code",[_._v("undo log")]),_._v(" 中的历史版本。每个事务读到的数据版本可能是不一样的，在同一个事务中，用户只能看到该事务创建 "),e("code",[_._v("Read View")]),_._v(" 之前已经提交的修改和该事务本身做的修改")]),_._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[_._v("#")]),_._v(" 总结")]),_._v(" "),e("blockquote",[e("p",[_._v("这部分内容为 JavaGuide 的补充：")])]),_._v(" "),e("p",[_._v("MySQL InnoDB 引擎使用 "),e("strong",[_._v("redo log(重做日志)")]),_._v(" 保证事务的"),e("strong",[_._v("持久性")]),_._v("，使用 "),e("strong",[_._v("undo log(回滚日志)")]),_._v(" 来保证事务的"),e("strong",[_._v("原子性")]),_._v("。")]),_._v(" "),e("p",[e("code",[_._v("MySQL")]),_._v("数据库的"),e("strong",[_._v("数据备份、主备、主主、主从")]),_._v("都离不开"),e("code",[_._v("binlog")]),_._v("，需要依靠"),e("code",[_._v("binlog")]),_._v("来同步数据，保证数据一致性。")]),_._v(" "),e("h2",{attrs:{id:"站在巨人的肩膀上"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#站在巨人的肩膀上"}},[_._v("#")]),_._v(" 站在巨人的肩膀上")]),_._v(" "),e("ul",[e("li",[_._v("《MySQL 实战 45 讲》")]),_._v(" "),e("li",[_._v("《从零开始带你成为 MySQL 实战优化高手》")]),_._v(" "),e("li",[_._v("《MySQL 是怎样运行的：从根儿上理解 MySQL》")]),_._v(" "),e("li",[_._v("《MySQL 技术 Innodb 存储引擎》")])]),_._v(" "),e("h2",{attrs:{id:"mysql-好文推荐"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql-好文推荐"}},[_._v("#")]),_._v(" MySQL 好文推荐")]),_._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/R-1km7r0z3oWfwYQV8iiqA",target:"_blank",rel:"noopener noreferrer"}},[_._v("CURD 这么多年，你有了解过 MySQL 的架构设计吗？"),e("OutboundLink")],1)]),_._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/7Kab4IQsNcU_bZdbv_MuOg",target:"_blank",rel:"noopener noreferrer"}},[_._v("浅谈 MySQL InnoDB 的内存组件"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=t.exports}}]);