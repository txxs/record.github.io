(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{616:function(s,a,t){"use strict";t.r(a);var n=t(13),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_007-单机版-redis-的安装以及-redis-生产环境启动方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_007-单机版-redis-的安装以及-redis-生产环境启动方案"}},[s._v("#")]),s._v(" 007. 单机版 redis 的安装以及 redis 生产环境启动方案")]),s._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#安装单机版-redis"}},[s._v("安装单机版 redis")])]),t("li",[t("a",{attrs:{href:"#redis-的生产环境启动方案"}},[s._v("redis 的生产环境启动方案")])]),t("li",[t("a",{attrs:{href:"#redis-cli的使用"}},[s._v("redis cli的使用")])]),t("li",[t("a",{attrs:{href:"#小结"}},[s._v("小结")])])])]),t("p"),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("都在 /usr/local 目录中安装和下载软件。有的会自动安装到目录。\n有一部分就是我们手工安装到该目录下的")])]),s._v(" "),t("h2",{attrs:{id:"安装单机版-redis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装单机版-redis"}},[s._v("#")]),s._v(" 安装单机版 redis")]),s._v(" "),t("p",[s._v("大家可以自己去官网下载，当然也可以用课程提供的压缩包")]),s._v(" "),t("p",[s._v("安装依赖 tcl，如果先安装 redis 的话，会报错，所以需要安装一下 tcl")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://downloads.sourceforge.net/tcl/tcl8.6.1-src.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xzvf tcl8.6.1-src.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v("  /usr/local/tcl8.6.1/unix/\n./configure  \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("安装 redis")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("使用 redis-3.2.8.tar.gz（截止 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),s._v(" 年 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" 月的最新稳定版）\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf redis-3.2.8.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" redis-3.2.8\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("在等待很长时间后，最后有一个错误信息")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("!!! WARNING The following tests failed:\n\n*** [err]: Server is able to generate a stack trace on selected systems in tests/integration/logging.tcl\nexpected stack trace not found into log file\n*** [err]: Test replication partial resync: no backlog (diskless: yes, reconnect: 1) in tests/integration/replication-psync.tcl\nExpected condition '[s -1 sync_partial_err] > 0' to be true ([s -1 sync_partial_err] > 0)\nCleanup: may take some time... OK\nmake[1]: *** [test] Error 1\nmake[1]: Leaving directory `/usr/local/redis-3.2.8/src'\nmake: *** [test] Error 2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("该错误。暂时不知道是否影响安装，但是这里的命令是 && 连接的，所以后面的 make install 没有被执行。")]),s._v(" "),t("p",[s._v("这里单独执行 make install。完成安装试试")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@eshop-cache01 redis-3.2.8"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# make install")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" src "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\nmake"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": Entering directory `/usr/local/redis-3.2.8/src"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\nHint: It'")]),s._v("s a good idea to run "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'make test'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    INSTALL "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n    INSTALL "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n    INSTALL "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n    INSTALL "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n    INSTALL "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\nmake"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": Leaving directory /usr/local/redis-3.2.8/src\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("安装还是会出现提示说 test 没有通过，但是这里是一个 Hint（提示），经过后面启动方案测试后，可以正常启动")]),s._v(" "),t("h2",{attrs:{id:"redis-的生产环境启动方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-的生产环境启动方案"}},[s._v("#")]),s._v(" redis 的生产环境启动方案")]),s._v(" "),t("p",[s._v("如果一般的学习课程，你就随便用 redis-server 启动一下 redis，做一些实验，这样的话没什么意义")]),s._v(" "),t("p",[s._v("在生产环境是要把 redis 作为一个系统的 daemon 进程去运行的，每次系统启动 redis 进程一起启动")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("redis/utils 目录下，有个 redis_init_script 脚本")])]),s._v(" "),t("li",[t("p",[s._v("将 redis_init_script 脚本拷贝到 /etc/init.d 目录中")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" redis_init_script /etc/init.d/\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将文件修改为 redis_6379，6379 是 redis 的默认端口号")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/init.d/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" redis_init_script redis_6379\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("端口号的配置也在该脚本中配置的 "),t("code",[s._v("REDISPORT=6379")])])]),s._v(" "),t("li",[t("p",[s._v("创建两个目录：")]),s._v(" "),t("ul",[t("li",[s._v("/etc/redis（存放 redis 的配置文件）")]),s._v(" "),t("li",[s._v("/var/redis/6379（存放 redis 的持久化文件）")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /etc/redis\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /var/redis/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /var/redis/6379\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("修改 redis 配置文件 redis.conf")]),s._v(" "),t("p",[s._v("该文件默认在 redis 安装目录下，拷贝到 /etc/redis 目录中，修改名称为 6379.conf")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /usr/local/redis-3.2.8/redis.conf /etc/redis/\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/redis/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" redis.conf "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(".conf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("这里为什么要这样修改呢？是因为 redis_init_script 脚本中的 conf 配置指定了该目录下的 端口号.conf 文件")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PIDFILE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/run/redis_"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${REDISPORT}")]),s._v(".pid\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CONF")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/etc/redis/'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${REDISPORT}")]),s._v('.conf"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("修改 redis.conf（6379.conf） 中的部分配置为生产环境")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("daemonize\t"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\t\t\t\t\t\t\t          // 让redis以daemon进程运行\npidfile /var/run/redis_6379.pid     // 设置redis的pid文件位置\nport  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\t\t\t\t\t\t            // 设置 redis的监听端口号\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v(" /var/redis/6379\t\t\t\t      //设置持久化文件的存储位置\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("建议在 windows 下使用文本编辑器搜索修改后在上传覆盖")])]),s._v(" "),t("li",[t("p",[s._v("启动 redis")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行 redis_6379 脚本")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/init.d\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果没有执行权限的话，修改执行权限 ，可以使用 chmod u+x redis_6379")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod 777 redis_6379")]),s._v("\n./redis_6379 start\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("确认 redis 进程是否启动，"),t("code",[s._v("ps -ef | grep redis")])])]),s._v(" "),t("li",[t("p",[s._v("让 redis 跟随系统启动自动启动")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("使用 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" 命令开启该文件的系统服务,\n可以在 redis_6379 配置文件中上面添加  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" 的注释信息\n如下，不要在 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/sh 上面添加")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/sh")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Simple Redis init.d script conceived to work on Linux systems")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# as it does use of the /proc filesystem.")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chkconfig:   2345 90 10")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# description:  Redis is a persistent key-value database")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("添加完成之后，使用以下命令开启随系统启动")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" redis_6379 on\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("a",{attrs:{href:"https://www.cnblogs.com/qmfsun/p/3847459.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("有关 chkconfig 命令的更多信息"),t("OutboundLink")],1),s._v(" 参考百度")])])]),s._v(" "),t("h2",{attrs:{id:"redis-cli的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-cli的使用"}},[s._v("#")]),s._v(" redis cli的使用")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止本机的 6379 端口的 redis 进程")]),s._v("\nredis-cli "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭指定机器的 redis，不加 shutdown 命令的话就是登陆到 cli")]),s._v("\nredis-cli -h "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ping redis 的端口，看是否正常")]),s._v("\nredis-cli PING\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认连接本机 6379 的redis")]),s._v("\nredis-cli\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 cli 中可以使用 redis 的命令，下面使用最贱的 set 和 get 命令测试")]),s._v("\nSET k1 v1\nGET k1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h2",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),t("p",[s._v("redis 的技术包括 4 块：")]),s._v(" "),t("ul",[t("li",[s._v("各种数据结构和命令的使用，包括 java api 的使用")]),s._v(" "),t("li",[s._v("一些特殊的解决方案的使用，pub/sub 消息系统、分布式锁、输入的自动完成，等等")]),s._v(" "),t("li",[s._v("日常的管理相关的命令")]),s._v(" "),t("li",[s._v("企业级的集群部署和架构")])]),s._v(" "),t("p",[s._v("我们这套课程，实际上是针对企业级的大型缓存架构，用的项目是真实的大型电商网站的详情页系统（缓存）")]),s._v(" "),t("p",[s._v("我们首先讲解的第一块，其实就是企业级的大型缓存架构中的 redis 集群架构（海量数据、高并发、高可用），最最流行，最最常用的分布式缓存系统")]),s._v(" "),t("p",[s._v("所以前面三块的知识不在本课程范围内，当然后面我们做商品详情页系统的业务开发的时候，当然也会去用 redis 的一些命令。")]),s._v(" "),t("p",[s._v("redis 基础知识可以通过教程、书籍、视频去学习")]),s._v(" "),t("p",[s._v("本课程会重点讲解 redis 持久化、主从架构、复制原理、集群架构、数据分布式存储原理、哨兵原理、高可用架构")]),s._v(" "),t("p",[s._v("本课程与网上一些 redis 的教程有什么不同呢？持久化、集群、哨兵这些都是泛泛而讲，简单带你搭建一下，而我会深入集群架构的底层原理，哨兵的底层原理，用一线的经验告诉你 redis 的大规模的架构师如何去支撑海量数据、高并发、高可用的")])])}),[],!1,null,null,null);a.default=e.exports}}]);