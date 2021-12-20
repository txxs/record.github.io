(window.webpackJsonp=window.webpackJsonp||[]).push([[461],{878:function(s,a,t){"use strict";t.r(a);var e=t(13),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"包文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#包文件"}},[s._v("#")]),s._v(" 包文件")]),s._v(" "),t("p",[s._v("让我们重新回到示例 Git 版本库的对象数据库。 目前为止，可以看到有 11 个对象——4 个数据对象、3 个树对象、3 个提交对象和 1 个标签对象：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" .git/objects -type f\n.git/objects/01/55eb4229851634a0f03eb265b69f5a2d56f341 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tree 2")]),s._v("\n.git/objects/1a/410efbd13591db07496601ebc7a059dd55cfe9 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# commit 3")]),s._v("\n.git/objects/1f/7a7a472abf3dd9643fd615f6da379c4acb3e3a "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# test.txt v2")]),s._v("\n.git/objects/3c/4e9cd789d88d8d89c1073707c3585e41b0e614 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tree 3")]),s._v("\n.git/objects/83/baae61804e65cc73a7201a7252750c76066a30 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# test.txt v1")]),s._v("\n.git/objects/95/85191f37f7b0fb9444f35a9bf50de191beadc2 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tag")]),s._v("\n.git/objects/ca/c0cab538b970a37ea1e769cbbde608743bc96d "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# commit 2")]),s._v("\n.git/objects/d6/70460b4b4aece5915caf5c68d12f560a9fe3e4 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 'test content'")]),s._v("\n.git/objects/d8/329fc1cc938780ffdd9f94e0d364e0ea74f579 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tree 1")]),s._v("\n.git/objects/fa/49b077972391ad58037050f2a75f74e3671e92 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# new.txt")]),s._v("\n.git/objects/fd/f4fc3344e67ab068f836878b6c4951e3b15f3d "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# commit 1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("Git 使用 zlib 压缩这些文件的内容，而且我们并没有存储太多东西，所以上文中的文件一共只占用了 925 字节。 接下来，我们会指引你添加一些大文件到版本库中，以此展示 Git 的一个很有趣的功能。 为了便于展示，我们要把之前在 Grit 库中用到过的 repo.rb 文件添加进来——这是一个大小约为 22K 的源代码文件：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" https://raw.githubusercontent.com/mojombo/grit/master/lib/grit/repo.rb "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" repo.rb\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" repo.rb\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'added repo.rb'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("master 484a592"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" added repo.rb\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" files changed, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("709")]),s._v(" insertions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("+"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" deletions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n delete mode "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100644")]),s._v(" bak/test.txt\n create mode "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100644")]),s._v(" repo.rb\n rewrite test.txt "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("%"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("如果你查看生成的树对象，可以看到 repo.rb 文件对应的数据对象的 SHA-1 值：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cat-file -p master^"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("tree"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100644")]),s._v(" blob fa49b077972391ad58037050f2a75f74e3671e92      new.txt\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100644")]),s._v(" blob 033b4468fa6b2a9547a70d88d1bbe8bf3f9ed0d5      repo.rb\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100644")]),s._v(" blob e3f094f522629ae358806b17daf78246c27c007b      test.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("接下来你可以使用 git cat-file 命令查看这个对象有多大：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cat-file -s 033b4468fa6b2a9547a70d88d1bbe8bf3f9ed0d5\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22044")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("现在，稍微修改这个文件，然后看看会发生什么：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'# testing'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" repo.rb\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -am "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'modified repo a bit'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("master 2431da6"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" modified repo.rb a bit\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" changed, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" insertion"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("+"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("查看这个提交生成的树对象，你会看到一些有趣的东西：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cat-file -p master^"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("tree"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100644")]),s._v(" blob fa49b077972391ad58037050f2a75f74e3671e92      new.txt\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100644")]),s._v(" blob b042a60ef7dff760008df33cee372b945b6e884e      repo.rb\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100644")]),s._v(" blob e3f094f522629ae358806b17daf78246c27c007b      test.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("repo.rb 对应一个与之前完全不同的数据对象，这意味着，虽然你只是在一个 400 行的文件后面加入一行新内容，Git 也 "),t("strong",[s._v("会用一个全新的对象来存储新的文件内容")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cat-file -s b042a60ef7dff760008df33cee372b945b6e884e\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22054")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("strong",[s._v("你的磁盘上现在有两个几乎完全相同、大小均为 22K 的对象")]),s._v("。 如果 Git 只完整保存其中一个，再保存另一个对象与之前版本的差异内容，岂不更好？")]),s._v(" "),t("p",[s._v("事实上 Git 可以那样做。 Git 最初向磁盘中存储对象时所使用的格式被称为 "),t("strong",[s._v("松散（loose）")]),s._v(" 对象格式。 但是，Git 会时不时地将多个这些对象打包成一个称为  "),t("strong",[s._v("包文件（packfile）")]),s._v(" 的二进制文件，"),t("strong",[s._v("以节省空间和提高效率")]),s._v("。 当版本库中有太多的松散对象，或者你手动执行  "),t("code",[s._v("git gc")]),s._v("  命令，或者你向远程服务器执行推送时，Git 都会这样做。 要看到打包过程，你可以手动执行  "),t("code",[s._v("git gc")]),s._v("  命令让 Git 对对象进行打包：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" gc\nCounting objects: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(", done.\nDelta compression using up to "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" threads.\nCompressing objects: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v("/14"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", done.\nWriting objects: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("/18"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", done.\nTotal "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", reused "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("这个时候再查看 objects 目录，你会发现大部分的对象都不见了，与此同时出现了一对新文件：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" .git/objects -type f\n.git/objects/bd/9dbf5aae1a3862dd1526723246b20206e5fc37\n.git/objects/d6/70460b4b4aece5915caf5c68d12f560a9fe3e4\n.git/objects/info/packs\n.git/objects/pack/pack-978e03944f5c581011e6998cd0e9e30000905586.idx\n.git/objects/pack/pack-978e03944f5c581011e6998cd0e9e30000905586.pack\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("仍保留着的几个对象是未被任何提交记录引用的数据对象——在此例中是你之前创建的  "),t("strong",[s._v("what is up, doc?")]),s._v(" 和  "),t("strong",[s._v("test content")]),s._v(" 这两个示例数据对象。 因为你从没将它们添加至任何提交记录中，所以 **Git 认为它们是悬空（dangling）**的，不会将它们打包进新生成的包文件中。")]),s._v(" "),t("p",[t("strong",[s._v("剩下的文件是新创建的包文件和一个索引")]),s._v("。 "),t("strong",[s._v("包文件包含了刚才从文件系统中移除的所有对象的内容")]),s._v("。 "),t("strong",[s._v("索引文件包含了包文件的偏移信息，我们通过索引文件就可以快速定位任意一个指定对象")]),s._v("。 有意思的是运行 gc 命令前磁盘上的对象大小约为 22K，而这个新生成的包文件大小仅有 7K。 通过打包对象减少了 ⅔ 的磁盘占用空间。")]),s._v(" "),t("p",[t("strong",[s._v("Git 是如何做到这点的？")]),s._v(" Git 打包对象时，会查找命名及大小相近的文件，并只保存文件不同版本之间的差异内容。 你可以查看包文件，观察它是如何节省空间的。 "),t("code",[s._v("git verify-pack")]),s._v("  这个底层命令可以让你查看已打包的内容：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" verify-pack -v .git/objects/pack/pack-978e03944f5c581011e6998cd0e9e30000905586.idx\n2431da676938450a4d72e260db3bf7b0f587bbc1 commit "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("223")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("155")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("\n69bcdaff5328278ab1c0812ce0e07fa7d26a96d7 commit "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("214")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("152")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("167")]),s._v("\n80d02664cb23ed55b226516648c7ad5d0a3deb90 commit "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("214")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("145")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("319")]),s._v("\n43168a18b7613d1281e5560855a83eb8fde3d687 commit "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("213")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("146")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("464")]),s._v("\n092917823486a802e94d727c820a9024e14a1fc2 commit "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("214")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("146")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("610")]),s._v("\n702470739ce72005e2edff522fde85d52a65df9b commit "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("165")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("118")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("756")]),s._v("\nd368d0ac0678cbe6cce505be58126d3526706e54 tag    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("130")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("122")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("874")]),s._v("\nfe879577cb8cffcdf25441725141e310dd7d239b tree   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("136")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("136")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("996")]),s._v("\nd8329fc1cc938780ffdd9f94e0d364e0ea74f579 tree   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("36")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("46")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1132")]),s._v("\ndeef2e1b793907545e50a2ea2ddb5ba6c58c4506 tree   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("136")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("136")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1178")]),s._v("\nd982c7cb2c2a972ee391a85da481fc1f9127a01d tree   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1314")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  deef2e1b793907545e50a2ea2ddb5ba6c58c4506\n3c4e9cd789d88d8d89c1073707c3585e41b0e614 tree   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1331")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  deef2e1b793907545e50a2ea2ddb5ba6c58c4506\n0155eb4229851634a0f03eb265b69f5a2d56f341 tree   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("71")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("76")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1350")]),s._v("\n83baae61804e65cc73a7201a7252750c76066a30 blob   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1426")]),s._v("\nfa49b077972391ad58037050f2a75f74e3671e92 blob   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1445")]),s._v("\nb042a60ef7dff760008df33cee372b945b6e884e blob   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22054")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5799")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1463")]),s._v("\n033b4468fa6b2a9547a70d88d1bbe8bf3f9ed0d5 blob   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7262")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  b042a60ef7dff760008df33cee372b945b6e884e\n1f7a7a472abf3dd9643fd615f6da379c4acb3e3a blob   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7282")]),s._v("\nnon delta: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" objects\nchain length "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" objects\n.git/objects/pack/pack-978e03944f5c581011e6998cd0e9e30000905586.pack: ok\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br")])]),t("p",[s._v("此处，033b4 这个数据对象（即 repo.rb 文件的第一个版本，如果你还记得的话）引用了数据对象 b042a，即该文件的第二个版本。 命令输出内容的第三列显示的是各个对象在包文件中的大小，可以看到 b042a 占用了 22K 空间，而 033b4 仅占用 9 字节。 同样有趣的地方在于，第二个版本完整保存了文件内容，而原始的版本反而是以差异方式保存的——这是因为大部分情况下需要快速访问文件的最新版本。")]),s._v(" "),t("p",[s._v("最妙之处是你可以随时重新打包。 Git 时常会自动对仓库进行重新打包以节省空间。当然你也可以随时手动执行 git gc 命令来这么做。")])])}),[],!1,null,null,null);a.default=n.exports}}]);