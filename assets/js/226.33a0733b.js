(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{615:function(s,a,t){"use strict";t.r(a);var n=t(13),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_013-在项目中部署-redis-企业级数据备份方案以及各种踩坑的数据恢复容灾演练"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_013-在项目中部署-redis-企业级数据备份方案以及各种踩坑的数据恢复容灾演练"}},[s._v("#")]),s._v(" 013. 在项目中部署 redis 企业级数据备份方案以及各种踩坑的数据恢复容灾演练")]),s._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#企业级的持久化的配置策略"}},[s._v("企业级的持久化的配置策略")])]),t("li",[t("a",{attrs:{href:"#企业级的数据备份方案"}},[s._v("企业级的数据备份方案")])]),t("li",[t("a",{attrs:{href:"#数据恢复方案"}},[s._v("数据恢复方案")])])])]),t("p"),s._v(" "),t("p",[s._v("到这里为止，其实还是停留在简单学习知识的程度，学会了 redis 的持久化的原理和操作，但是在企业中，持久化到底是怎么去用得呢？")]),s._v(" "),t("p",[s._v("企业级的数据备份和各种灾难下的数据恢复，是怎么做得呢？")]),s._v(" "),t("h2",{attrs:{id:"企业级的持久化的配置策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#企业级的持久化的配置策略"}},[s._v("#")]),s._v(" 企业级的持久化的配置策略")]),s._v(" "),t("p",[s._v("在企业中，RDB 的生成策略，用默认的也差不多，如果有可能改动的地方，可能是如下两个配置：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("save 60 10000：如果你希望尽可能确保说，RDB 最多丢 1 分钟的数据，那么尽量就是每隔 1 分钟都生成一个快照，低峰期，数据量很少，也没必要")])]),s._v(" "),t("li",[t("p",[s._v("AOF 一定要打开，fsync，everysec")]),s._v(" "),t("ul",[t("li",[s._v("auto-aof-rewrite-percentage 100: 就是当前 AOF 大小膨胀到超过上次 100%，上次的两倍")]),s._v(" "),t("li",[s._v("auto-aof-rewrite-min-size 64mb: 根据你的数据量来定，16mb，32mb")])])])]),s._v(" "),t("h2",{attrs:{id:"企业级的数据备份方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#企业级的数据备份方案"}},[s._v("#")]),s._v(" 企业级的数据备份方案")]),s._v(" "),t("p",[s._v("RDB 非常适合做冷备，每次生成之后，就不会再有修改了")]),s._v(" "),t("p",[s._v("数据备份方案：写 crontab 定时调度脚本去做数据备份")]),s._v(" "),t("ol",[t("li",[s._v("小时级：每小时都 copy 一份 rdb 的备份，到一个目录中去，仅仅保留最近 48 小时的备份")]),s._v(" "),t("li",[s._v("日级：每天都保留一份当日的 rdb 的备份，到一个目录中去，仅仅保留最近 1 个月的备份")]),s._v(" "),t("li",[s._v("每天晚上将当前服务器上所有的数据备份，发送一份到远程的云服务上去")])]),s._v(" "),t("p",[s._v("每次 copy 备份的时候，都把太旧的备份给删了")]),s._v(" "),t("p",[s._v("这里只能演示前两条，使用脚本来完成")]),s._v(" "),t("p",[s._v("这里在 /usr/local/redis 目录下完成这个备份实验")]),s._v(" "),t("blockquote",[t("p",[s._v("按小时级备份")])]),s._v(" "),t("p",[s._v("copy/redis_rdb_copy_hourly.sh")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/sh")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成文件夹名称 2019032023")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("cur_date")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%Y%m%d%k"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以防万一，先删除，再创建目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /usr/local/redis/snapshotting/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cur_date")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -p 可以创建多级目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /usr/local/redis/snapshotting/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cur_date")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /var/redis/6379/dump.rdb /usr/local/redis/snapshotting/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cur_date")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成 48 小时前的目录 2019031823")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("del_date")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" -d -48hour +%Y%m%d%k"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /usr/local/redis/snapshotting/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$del_date")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 该命令打开的是一个列表，有多条调度任务就一行一个")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("crontab")]),s._v(" -e\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 每/周日时分 0 秒，也就是每小时执行一次该脚本")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" * * * * "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" /usr/local/redis/copy/redis_rdb_copy_hourly.sh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("blockquote",[t("p",[s._v("按天备份，与前面的脚本一样，只是时间表达式不一样")])]),s._v(" "),t("p",[s._v("copy/redis_rdb_copy_daily.sh")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/sh")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成文件夹名称 20190320")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("cur_date")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%Y%m%d"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以防万一，先删除，再创建目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /usr/local/redis/snapshotting/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cur_date")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -p 可以创建多级目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /usr/local/redis/snapshotting/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cur_date")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /var/redis/6379/dump.rdb /usr/local/redis/snapshotting/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cur_date")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成 一个月前的文件夹")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("del_date")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" -d -1month +%Y%m%d"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /usr/local/redis/snapshotting/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$del_date")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 该命令打开的是一个列表，有多条调度任务就一行一个")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("crontab")]),s._v(" -e\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 每/周日时分 0 秒，也就是每小时执行一次该脚本")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" * * * * "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" /usr/local/redis/copy/redis_rdb_copy_hourly.sh\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" * * * "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" /usr/local/redis/copy/redis_rdb_copy_daily.sh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"数据恢复方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据恢复方案"}},[s._v("#")]),s._v(" 数据恢复方案")]),s._v(" "),t("p",[s._v("这里讲解 5 个场景下的数据恢复方案")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("如果是 redis 进程挂掉")]),s._v(" "),t("p",[s._v("那么重启 redis 进程即可，直接基于 AOF 日志文件恢复数据")])]),s._v(" "),t("li",[t("p",[s._v("如果是 redis 进程所在机器挂掉")]),s._v(" "),t("p",[s._v("那么重启机器后，尝试重启 redis 进程，尝试直接基于 AOF 日志文件进行数据恢复")]),s._v(" "),t("p",[s._v("AOF没有破损，也是可以直接基于 AOF 恢复的")]),s._v(" "),t("p",[s._v("AOF append-only，顺序写入，如果 AOF 文件破损，那么用 redis-check-aof fix")])]),s._v(" "),t("li",[t("p",[s._v("如果 redis 当前最新的 AOF 和 RDB 文件出现了丢失/损坏")]),s._v(" "),t("p",[s._v("那么可以尝试基于该机器上当前的某个最新的 RDB 数据副本进行数据恢复")]),s._v(" "),t("p",[s._v("当前最新的 AOF 和 RDB 文件都出现了丢失/损坏到无法恢复，一般不是机器的故障，是人为")]),s._v(" "),t("p",[s._v("模拟数据恢复-错误的做法：停止 redis之后，先删除 appendonly.aof，然后将我们的 dump.rdb 拷贝过去，然后再重启 redis，这个时候其实不会恢复 dump.rdb 的数据，因为我们开启了 aof，当 aof 不存在的时候，也不会主动去用 dump.rdb 去恢复数据")]),s._v(" "),t("p",[s._v("正确的做法：停止 redis，关闭 aof，拷贝 rdb 备份，重启 redis，确认数据恢复，\n直接在命令行热修改 redis 配置，打开 aof，这个 redis 就会将内存中的数据对应的日志，写入 aof 文件中")]),s._v(" "),t("p",[s._v("热修改命令：redis config set appendonly yes")]),s._v(" "),t("p",[s._v("切记不要停止 redis ，修改配置文件为 yes ，再启动 redis。因为这个时候 aof 文件没有生成的话，数据就又会没有的")])]),s._v(" "),t("li",[t("p",[s._v("如果当前机器上的所有 RDB 文件全部损坏")]),s._v(" "),t("p",[s._v("那么从远程的云服务上拉取最新的 RDB 快照回来恢复数据")])]),s._v(" "),t("li",[t("p",[s._v("如果是发现有重大的数据错误，比如某个小时上线的程序一下子将数据全部污染了，数据全错了\n那么可以选择某个更早的时间点，对数据进行恢复")]),s._v(" "),t("p",[s._v("举个例子，12 点上线了代码，发现代码有 bug，导致代码生成的所有的缓存数据，写入 redis，全部错了，那么你应该找到一份 11 点的 rdb 的冷备，然后按照上面的步骤，去恢复到 11 点的数据，就可以了")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);