(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{631:function(s,a,t){"use strict";t.r(a);var n=t(13),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_031-redis-cluster-的自动化-slave-迁移实现更强的高可用架构的部署方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_031-redis-cluster-的自动化-slave-迁移实现更强的高可用架构的部署方案"}},[s._v("#")]),s._v(" 031. redis cluster 的自动化 slave 迁移实现更强的高可用架构的部署方案")]),s._v(" "),t("p",[s._v("slave 的自动迁移：比如现在有 10 个 master，每个有 1 个 slave，新增了 3 个 slave 作为冗余，有的 master 就有 2 个 slave 了（出现了salve冗余），其他的 master 还是只有 1 个 slave")]),s._v(" "),t("p",[s._v("如果某个 master 的 slave 挂了，那么 redis cluster 会自动迁移一个冗余的 slave 给那个 master")]),s._v(" "),t("p",[s._v("这样的好处：如果你每个 master 只有一个 slave，万一说一个 slave 死了，然后很快，master也死了，那可用性还是降低了，增强了高可用性")]),s._v(" "),t("blockquote",[t("p",[s._v("测试")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看集群中只有一个的 slave")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@eshop-cache01 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis-trib.rb check eshop-cache01:7001")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Performing Cluster Check "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("using node eshop-cache01:7001"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 7001 也只有一个")]),s._v("\nM: b49a4562f0164bbf9c8fc9c6059e09e420ee7abf eshop-cache01:7001\n   slots:0-5460 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5461")]),s._v(" slots"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" master\n   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" additional replica"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nM: 536e275ff8e2130c8f3c298e16c4dbdc9f765e76 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.172:7005\n   slots:5461-6825,12288-16383 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5461")]),s._v(" slots"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" master\n   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" additional replica"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nS: 728e473d6e5e36ddb051c600c7708f23733c46f7 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.172:7008\n   slots: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" slots"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" slave\n   replicates b49a4562f0164bbf9c8fc9c6059e09e420ee7abf\nS: 4051750a5828342877f31679189697741683e3c4 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.172:7006\n   slots: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" slots"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" slave\n   replicates 536e275ff8e2130c8f3c298e16c4dbdc9f765e76\nS: 50545f07b14843655452a08420316d11ecd12743 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.171:7004\n   slots: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" slots"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" slave\n   replicates 0e6a3d40e63cb19f2606709a8b61ed4a6e511fcc\nS: 45db2a3a0c71a628bde2bb8d6f5a9ebd4489e387 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.170:7002\n   slots: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" slots"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" slave\n   replicates 0e6a3d40e63cb19f2606709a8b61ed4a6e511fcc\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 7003 有两个")]),s._v("\nM: 0e6a3d40e63cb19f2606709a8b61ed4a6e511fcc "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.171:7003\n   slots:6826-12287 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5462")]),s._v(" slots"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" master\n   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" additional replica"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OK"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" All nodes agree about slots configuration.\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Check "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" slots"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Check slots coverage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OK"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" All "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16384")]),s._v(" slots covered.\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看 7001 的 slave 是哪个节点")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@eshop-cache01 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis-cli -h 192.168.99.170 -p 7001")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.170:700"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v(" info replication\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Replication")]),s._v("\nrole:master\nconnected_slaves:1\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以看到 7008 是他的 slave，那么我们把 7008 的给干掉")]),s._v("\nslave0:ip"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.172,port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7008")]),s._v(",state"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("online,offset"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2745")]),s._v(",lag"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nmaster_repl_offset:2745\nrepl_backlog_active:1\nrepl_backlog_size:1048576\nrepl_backlog_first_byte_offset:2\nrepl_backlog_histlen:2744\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.170:700"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br")])]),t("p",[s._v("kill 掉 7008 的 slave 节点")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@eshop-cache03 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ps -ef | grep redis")]),s._v("\nroot      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1369")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":55 ?        00:00:23 /usr/local/bin/redis-server "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.172:7005 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("cluster"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nroot      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1374")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":55 ?        00:00:08 /usr/local/bin/redis-server "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.172:7006 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("cluster"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nroot      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1418")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":10 ?        00:00:06 /usr/local/bin/redis-server "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.172:7008 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("cluster"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nroot      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1441")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1427")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":39 pts/1    00:00:00 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" redis\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@eshop-cache03 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kill 1418")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("kill 掉之后，再检查集群状态，可以看到一开始是连接不上 7008 的，\n稍等一会 7003 原本有 2 个 slave，现在自动迁移成 7001 的 slave 了")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@eshop-cache01 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis-trib.rb check eshop-cache01:7001")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ERR"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Sorry, can't connect to node "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.172:7008\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Performing Cluster Check "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("using node eshop-cache01:7001"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nM: b49a4562f0164bbf9c8fc9c6059e09e420ee7abf eshop-cache01:7001\n   slots:0-5460 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5461")]),s._v(" slots"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" master\n   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" additional replica"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nM: 536e275ff8e2130c8f3c298e16c4dbdc9f765e76 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.172:7005\n   slots:5461-6825,12288-16383 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5461")]),s._v(" slots"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" master\n   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" additional replica"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nS: 4051750a5828342877f31679189697741683e3c4 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.172:7006\n   slots: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" slots"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" slave\n   replicates 536e275ff8e2130c8f3c298e16c4dbdc9f765e76\nS: 50545f07b14843655452a08420316d11ecd12743 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.171:7004\n   slots: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" slots"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" slave\n   replicates 0e6a3d40e63cb19f2606709a8b61ed4a6e511fcc\nS: 45db2a3a0c71a628bde2bb8d6f5a9ebd4489e387 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.170:7002\n   slots: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" slots"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" slave\n   replicates 0e6a3d40e63cb19f2606709a8b61ed4a6e511fcc\nM: 0e6a3d40e63cb19f2606709a8b61ed4a6e511fcc "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.171:7003\n   slots:6826-12287 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5462")]),s._v(" slots"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" master\n   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" additional replica"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OK"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" All nodes agree about slots configuration.\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Check "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" slots"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Check slots coverage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OK"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" All "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16384")]),s._v(" slots covered.\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@eshop-cache01 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis-trib.rb check eshop-cache01:7001")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Performing Cluster Check "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("using node eshop-cache01:7001"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nM: b49a4562f0164bbf9c8fc9c6059e09e420ee7abf eshop-cache01:7001\n   slots:0-5460 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5461")]),s._v(" slots"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" master\n   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" additional replica"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nM: 536e275ff8e2130c8f3c298e16c4dbdc9f765e76 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.172:7005\n   slots:5461-6825,12288-16383 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5461")]),s._v(" slots"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" master\n   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" additional replica"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nS: 4051750a5828342877f31679189697741683e3c4 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.172:7006\n   slots: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" slots"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" slave\n   replicates 536e275ff8e2130c8f3c298e16c4dbdc9f765e76\nS: 50545f07b14843655452a08420316d11ecd12743 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.171:7004\n   slots: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" slots"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" slave\n   replicates 0e6a3d40e63cb19f2606709a8b61ed4a6e511fcc\nS: 45db2a3a0c71a628bde2bb8d6f5a9ebd4489e387 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.170:7002\n   slots: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" slots"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" slave\n   replicates b49a4562f0164bbf9c8fc9c6059e09e420ee7abf\nM: 0e6a3d40e63cb19f2606709a8b61ed4a6e511fcc "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.171:7003\n   slots:6826-12287 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5462")]),s._v(" slots"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" master\n   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" additional replica"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OK"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" All nodes agree about slots configuration.\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Check "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" slots"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Check slots coverage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OK"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" All "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16384")]),s._v(" slots covered.\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br")])]),t("p",[s._v("恢复 7008 的节点，再次查看集群状态，可以发现 7001 变成了 2 个 slave 节点")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@eshop-cache01 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis-trib.rb check eshop-cache01:7001")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Performing Cluster Check "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("using node eshop-cache01:7001"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nM: b49a4562f0164bbf9c8fc9c6059e09e420ee7abf eshop-cache01:7001\n   slots:0-5460 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5461")]),s._v(" slots"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" master\n   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" additional replica"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nM: 536e275ff8e2130c8f3c298e16c4dbdc9f765e76 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.172:7005\n   slots:5461-6825,12288-16383 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5461")]),s._v(" slots"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" master\n   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" additional replica"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nS: 728e473d6e5e36ddb051c600c7708f23733c46f7 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.172:7008\n   slots: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" slots"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" slave\n   replicates b49a4562f0164bbf9c8fc9c6059e09e420ee7abf\nS: 4051750a5828342877f31679189697741683e3c4 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.172:7006\n   slots: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" slots"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" slave\n   replicates 536e275ff8e2130c8f3c298e16c4dbdc9f765e76\nS: 50545f07b14843655452a08420316d11ecd12743 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.171:7004\n   slots: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" slots"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" slave\n   replicates 0e6a3d40e63cb19f2606709a8b61ed4a6e511fcc\nS: 45db2a3a0c71a628bde2bb8d6f5a9ebd4489e387 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.170:7002\n   slots: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" slots"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" slave\n   replicates b49a4562f0164bbf9c8fc9c6059e09e420ee7abf\nM: 0e6a3d40e63cb19f2606709a8b61ed4a6e511fcc "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.171:7003\n   slots:6826-12287 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5462")]),s._v(" slots"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" master\n   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" additional replica"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OK"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" All nodes agree about slots configuration.\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Check "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" slots"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Check slots coverage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OK"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" All "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16384")]),s._v(" slots covered.\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);