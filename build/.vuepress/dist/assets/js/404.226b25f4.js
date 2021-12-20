(window.webpackJsonp=window.webpackJsonp||[]).push([[404],{825:function(s,t,a){"use strict";a.r(t);var n=a(13),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"分支的新建与合并"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支的新建与合并"}},[s._v("#")]),s._v(" 分支的新建与合并")]),s._v(" "),a("p",[s._v("让我们来看一个简单的分支新建与分支合并的例子，实际工作中你可能会用到类似的工作流。 你将经历如下步骤：")]),s._v(" "),a("ol",[a("li",[s._v("开发某个网站。")]),s._v(" "),a("li",[s._v("为实现某个新的需求，创建一个分支。")]),s._v(" "),a("li",[s._v("在这个分支上开展工作。")])]),s._v(" "),a("p",[s._v("正在此时，你突然接到一个电话说有个很严重的问题需要紧急修补。 你将按照如下方式来处理：")]),s._v(" "),a("ol",[a("li",[s._v("切换到你的线上分支（production branch）。")]),s._v(" "),a("li",[s._v("为这个紧急任务新建一个分支，并在其中修复它。")]),s._v(" "),a("li",[s._v("在测试通过之后，切换回线上分支，然后合并这个修补分支，最后将改动推送到线上分支。")]),s._v(" "),a("li",[s._v("切换回你最初工作的分支上，继续工作。")])]),s._v(" "),a("h2",{attrs:{id:"新建分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建分支"}},[s._v("#")]),s._v(" 新建分支")]),s._v(" "),a("p",[s._v("首先，我们假设你正在你的项目上工作，并且已经有一些提交。")]),s._v(" "),a("p",[a("img",{attrs:{src:"assets/a17fa76cfe7b366348844f8ccec6f4b1.png",alt:"一个简单的提交历史。"}})]),s._v(" "),a("p",[s._v("如上图，简单的提交历史")]),s._v(" "),a("p",[s._v("现在，你已经决定要解决你的公司使用的问题追踪系统中的 "),a("code",[s._v("#53")]),s._v(" 问题。 想要新建一个分支并同时切换到那个分支上，你可以运行一个带有 "),a("code",[s._v("-b")]),s._v(" 参数的 "),a("code",[s._v("git checkout")]),s._v(" 命令：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('$ git checkout -b iss53\nSwitched to a new branch "iss53"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("它是下面两条命令的简写：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ git branch iss53\n$ git checkout iss53\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("img",{attrs:{src:"assets/3937dc676a7df20958e5885a5f1f6793.png",alt:"创建一个新分支指针。"}})]),s._v(" "),a("p",[s._v("你继续在 "),a("code",[s._v("#53")]),s._v(" 问题上工作，并且做了一些提交。 在此过程中，iss53 分支在不断的向前推进，因为你已经检出到该分支（也就是说，你的 HEAD 指针指向了 iss53 分支）")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ vim index.html\n$ git commit -a -m 'added a new footer [issue 53]'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("img",{attrs:{src:"assets/469a9c87ed69cc6653146a8ae9dc390a.png",alt:"iss53 分支随着工作的进展向前推进。"}})]),s._v(" "),a("p",[s._v("如上图所示：iss53 分支随着工作的进展向前推进")]),s._v(" "),a("p",[s._v("现在你接到那个电话，有个紧急问题等待你来解决。 有了 Git 的帮助，你不必把这个紧急问题和 iss53 的修改混在一起，你也不需要花大力气来还原关于 "),a("code",[s._v("53#")]),s._v(" 问题的修改，然后再添加关于这个紧急问题的修改，最后将这个修改提交到线上分支。 你所要做的 "),a("strong",[s._v("仅仅是切换回 master 分支")]),s._v("。")]),s._v(" "),a("p",[s._v("但是，在你这么做之前，要留意你的 "),a("strong",[s._v("工作目录")]),s._v(" 和 "),a("strong",[s._v("暂存区")]),s._v(" 里那些还没有被提交的修改，"),a("strong",[s._v("它可能会和你即将检出的分支产生冲突从而阻止 Git 切换到该分支")]),s._v("。 最好的方法是，在你切换分支之前，保持好一个干净的状态。 "),a("strong",[s._v("有一些方法可以绕过这个问题")]),s._v("（即，保存进度（stashing） 和 修补提交（commit amending）），我们会在 "),a("a",{attrs:{href:"https://git-scm.com/book/zh/v2/ch00/_git_stashing",target:"_blank",rel:"noopener noreferrer"}},[s._v("储藏与清理"),a("OutboundLink")],1),s._v(" 中看到关于这两个命令的介绍。 现在，我们假设你已经把你的修改全部提交了，这时你可以切换回 master 分支了：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ git checkout master\nSwitched to branch 'master'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("这个时候，你的工作目录和你在开始 "),a("code",[s._v("#53")]),s._v(" 问题之前一模一样，现在你可以专心修复紧急问题了。 "),a("strong",[s._v("请牢记：当你切换分支的时候，Git 会重置你的工作目录，使其看起来像回到了你在那个分支上最后一次提交的样子")]),s._v("。 Git 会自动添加、删除、修改文件以确保此时你的工作目录和这个分支最后一次提交时的样子一模一样。")]),s._v(" "),a("p",[s._v("接下来，你要修复这个紧急问题。 让我们建立一个针对该紧急问题的分支（hotfix branch），在该分支上工作直到问题解决：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b hotfix\nSwitched to a new branch "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hotfix'")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" index.html\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -a -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fixed the broken email address'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("hotfix 1fb7853"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" fixed the broken email address\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" changed, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" insertions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("img",{attrs:{src:"assets/4220dcf39d0e173dbb0e8338fd376e62.png",alt:"基于  分支的紧急问题分支（hotfix branch）。"}})]),s._v(" "),a("p",[s._v("你可以运行你的测试，确保你的修改是正确的，然后 "),a("strong",[s._v("将其合并回你的 master 分支来部署到线上")]),s._v("。 你可以使用 "),a("code",[s._v("git merge")]),s._v(" 命令来达到上述目的：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout master\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge hotfix\nUpdating f42c576"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("3a0874c\nFast-forward\n index.html "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" ++\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" changed, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" insertions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("在 "),a("strong",[s._v("合并的时候")]),s._v("，你应该注意到了 「"),a("strong",[s._v("快进（fast-forward）")]),s._v("」这个词。 "),a("strong",[s._v("由于当前 master 分支所指向的提交是你当前提交（有关 hotfix 的提交）的直接上游")]),s._v("，所以 Git 只是简单的将指针向前移动。 换句话说，当你试图合并两个分支时，如果顺着一个分支走下去能够到达另一个分支，那么 Git 在合并两者的时候，只会简单的将指针向前推进（指针右移），因为这种情况下的合并操作没有需要解决的分歧——这就叫做 「"),a("strong",[s._v("快进（fast-forward）")]),s._v("」。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("由于讲述的不是从零开始，所以记得这里自己测试的时候，两个分支不要修改同一个文件的东西，因为有可能会产生冲突，导致自动合并失败，这个需要仔细查看每次执行命令后的反馈信息")])]),s._v(" "),a("p",[s._v("现在，最新的修改已经在 master 分支所指向的提交快照中，你可以着手发布该修复了。")]),s._v(" "),a("p",[a("img",{attrs:{src:"assets/9f9997c032f526b690fa38af3f018db2.png",alt:" 被快进到 。"}})]),s._v(" "),a("p",[s._v("关于这个紧急问题的解决方案发布之后，你 准"),a("strong",[s._v("备回到被打断之前时的工作中")]),s._v("。 然而，你应该 "),a("strong",[s._v("先删除 hotfix 分支")]),s._v("，"),a("strong",[s._v("因为你已经不再需要它了 —— master 分支已经指向了同一个位置")]),s._v("。 你可以使用带 "),a("code",[s._v("-d")]),s._v(" 选项的 "),a("code",[s._v("git branch")]),s._v(" 命令来删除分支：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ git branch -d hotfix\nDeleted branch hotfix (3a0874c).\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("现在你可以切换回你正在工作的分支继续你的工作，也就是针对 "),a("code",[s._v("#53")]),s._v(" 问题的那个分支（iss53 分支）。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout iss53\nSwitched to branch "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"iss53"')]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" index.html\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -a -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'finished the new footer [issue 53]'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("iss53 ad82d7a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" finished the new footer "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("issue "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("53")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" changed, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" insertion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("img",{attrs:{src:"assets/4cc48529552cf37febf2901f1da8834f.png",alt:"继续在  分支上的工作。"}})]),s._v(" "),a("p",[s._v("你在 hotfix 分支上所做的工作并没有包含到 iss53 分支中。 如果你需要拉取 hotfix 所做的修改，你可以使用 "),a("code",[s._v("git merge master")]),s._v(" 命令 "),a("strong",[s._v("将 master 分支合并入 iss53 分支")]),s._v("，或者你也可以等到 iss53 分支完成其使命，再将其合并回 master 分支。")]),s._v(" "),a("h2",{attrs:{id:"分支的合并"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支的合并"}},[s._v("#")]),s._v(" 分支的合并")]),s._v(" "),a("p",[s._v("假设你已经修正了 "),a("code",[s._v("#53")]),s._v(" 问题，并且打算将你的工作合并入 master 分支。 为此，你需要 "),a("strong",[s._v("合并 iss53 分支到 master 分支")]),s._v("，这和之前你合并 hotfix 分支所做的工作差不多。 你只需要检出到你想合并入的分支，然后运行 git merge 命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout master\nSwitched to branch "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'master'")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge iss53\nMerge made by the "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'recursive'")]),s._v(" strategy.\nindex.html "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" +\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" changed, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" insertion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("这和你之前合并 hotfix 分支的时候看起来有一点不一样。 在这种情况下，你的 "),a("strong",[s._v("开发历史从一个更早的地方开始分叉开来（diverged")]),s._v("）。 因为，master 分支所在提交并不是 iss53 分支所在提交的直接祖先，Git 不得不做一些额外的工作。 出现这种情况的时候，Git 会使用两个分支的末端所指的快照（C4 和 C5）以及这两个分支的工作祖先（C2），做一个 "),a("strong",[s._v("简单的三方合并")]),s._v("。")]),s._v(" "),a("p",[a("img",{attrs:{src:"assets/af3fe76996155b361f8c2c323dfdf344.png",alt:"一次典型合并中所用到的三个快照。"}})]),s._v(" "),a("p",[s._v("和之前将分支指针向前推进所不同的是，"),a("strong",[s._v("Git 将此次三方合并的结果做了一个新的快照并且自动创建一个新的提交指向它")]),s._v("。 这个被称作 "),a("strong",[s._v("一次合并提交")]),s._v("，它的特别之处在于他有不止一个父提交。")]),s._v(" "),a("p",[a("img",{attrs:{src:"assets/59a5716876fae3ad09845218eca67583.png",alt:"一个合并提交。"}})]),s._v(" "),a("p",[s._v("需要指出的是，"),a("strong",[s._v("Git 会自行决定选取哪一个提交作为最优的共同祖先")]),s._v("，并以此作为合并的基础；这和更加古老的 CVS 系统或者 Subversion （1.5 版本之前）不同，在这些古老的版本管理系统中，用户需要自己选择最佳的合并基础。 Git 的这个优势使其在合并操作上比其他系统要简单很多。")]),s._v(" "),a("p",[s._v("既然你的修改已经合并进来了，你已经不再需要 iss53 分支了。 现在你可以在任务追踪系统中关闭此项任务，并删除这个分支。")]),s._v(" "),a("h2",{attrs:{id:"遇到冲突时的分支合并"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#遇到冲突时的分支合并"}},[s._v("#")]),s._v(" 遇到冲突时的分支合并")]),s._v(" "),a("p",[s._v("有时候合并操作不会如此顺利。 如果你 "),a("strong",[s._v("在两个不同的分支中，对同一个文件的同一个部分进行了不同的修改")]),s._v("，Git 就没法干净的合并它们。 如果你对 "),a("code",[s._v("#53")]),s._v(" 问题的修改和有关 hotfix 的修改都涉及到同一个文件的同一处，在合并它们的时候就会产生合并冲突：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge iss53\nAuto-merging index.html\nCONFLICT "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": Merge conflict "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" index.html\nAutomatic merge failed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" fix conflicts and "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" commit the result.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("strong",[s._v("此时 Git 做了合并")]),s._v("，"),a("strong",[s._v("但是没有自动地创建一个新的合并提交")]),s._v("。 Git 会暂停下来， "),a("strong",[s._v("等待你去解决合并产生的冲突")]),s._v("。 你可以在合并冲突后的任意时刻使用 "),a("code",[s._v("git status")]),s._v(" 命令来查看那些因包含合并冲突而处于 "),a("strong",[s._v("未合并（unmerged）状态")]),s._v(" 的文件：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\nOn branch master\nYou have unmerged paths.\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fix conflicts and run "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git commit"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nUnmerged paths:\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git add <file>..."')]),s._v(" to mark resolution"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    both modified:      index.html\n\nno changes added to commit "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git add"')]),s._v(" and/or "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git commit -a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("任何因包含 "),a("strong",[s._v("合并冲突而有待解决的文件")]),s._v("，都会以未合并状态标识出来。 Git 会在有冲突的文件中加入标准的冲突解决标记，这样你可以打开这些包含冲突的文件然后手动解决冲突。 出现冲突的文件会包含一些特殊区段，看起来像下面这个样子：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" HEAD:index.html\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# HEAD 表示当前所在的分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"footer"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("contact "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" email.support@github.com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\t\t\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 上面是当前所在分支的修改，下面是要合并的分支所做的修改")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"footer"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n please contact us at support@github.com\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" iss53:index.html\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("这表示 HEAD 所指示的版本（也就是你的 master 分支所在的位置，因为你在运行 merge 命令的时候已经检出到了这个分支）在这个区段的上半部分（======= 的上半部分），而 iss53 分支所指示的版本在======= 的下半部分。 为了解决冲突，你必须选择使用由 ======= 分割的两部分中的一个，或者你也可以自行合并这些内容。 例如，你可以通过把这段内容换成下面的样子来解决冲突：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<div id="footer">\nplease contact us at email.support@github.com\n</div>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("上述的冲突解决方案仅保留了其中一个分支的修改，并且 "),a("code",[s._v("<<<<<<< , ======= , 和 >>>>>>>")]),s._v(" 这些行被完全删除了。 在你解决了所有文件里的冲突之后，对每个文件使用 "),a("code",[s._v("git add")]),s._v(" 命令来 "),a("strong",[s._v("将其标记为冲突已解决")]),s._v("。 一旦暂存这些原本有冲突的文件，Git 就会将它们标记为冲突已解决。")]),s._v(" "),a("p",[s._v("如果你想使用 "),a("strong",[s._v("图形化工具来解决冲突")]),s._v("，你可以运行 "),a("code",[s._v("git mergetool")]),s._v("，该命令会为你启动一个合适的可视化合并工具，并带领你一步一步解决这些冲突：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" mergetool\n\nThis message is displayed because "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'merge.tool'")]),s._v(" is not configured.\nSee "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git mergetool --tool-help'")]),s._v(" or "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git help config'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" details.\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git mergetool'")]),s._v(" will now attempt to use one of the following tools:  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下面是可选工具")]),s._v("\nopendiff kdiff3 tkdiff xxdiff meld tortoisemerge gvimdiff diffuse diffmerge ecmerge p4merge araxis bc3 codecompare vimdiff emerge\nMerging:\nindex.html\n\nNormal merge conflict "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'index.html'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("local"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": modified "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("remote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": modified "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\nHit "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" to start merge resolution tool "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("opendiff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("如果你想使用除默认工具（在这里 Git 使用 opendiff 做为默认的合并工具，因为作者在 Mac 上运行该程序）外的其他合并工具，你可以在 “"),a("strong",[s._v("下列工具中（one of the following tools）")]),s._v("” 这句后面看到所有支持的合并工具。 然后输入你喜欢的工具名字就可以了。")]),s._v(" "),a("p",[s._v("笔者体验过这个工具合并，感觉不太方便。还不如手动合并来得快速")]),s._v(" "),a("p",[s._v("如果你需要更加高级的工具来解决复杂的合并冲突，我们会在 "),a("a",{attrs:{href:"https://git-scm.com/book/zh/v2/ch00/_advanced_merging",target:"_blank",rel:"noopener noreferrer"}},[s._v("高级合并"),a("OutboundLink")],1),s._v(" 介绍更多关于分支合并的内容。")]),s._v(" "),a("p",[s._v("等你退出合并工具之后，Git 会询问刚才的合并是否成功。 如果你回答是，Git 会暂存那些文件以表明冲突已解决： 你可以再次运行 git status 来确认所有的合并冲突都已被解决：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('$ git status\nOn branch master\nAll conflicts fixed but you are still merging.\n  (use "git commit" to conclude merge)\n\nChanges to be committed:\n\n    modified:   index.html\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("如果你对结果感到满意，并且确定之前有冲突的的文件都已经暂存了，这时你可以输入 git commit 来完成合并提交。 默认情况下提交信息看起来像下面这个样子：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Merge branch 'iss53'\n\nConflicts:\n    index.html\n#\n# It looks like you may be committing a merge.\n# If this is not correct, please remove the file\n#\t.git/MERGE_HEAD\n# and try again.\n\n\n# Please enter the commit message for your changes. Lines starting\n# with '#' will be ignored, and an empty message aborts the commit.\n# On branch master\n# All conflicts fixed but you are still merging.\n#\n# Changes to be committed:\n#\tmodified:   index.html\n#\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("如果你觉得上述的信息不够充分，不能完全体现分支合并的过程，你可以修改上述信息，添加一些细节给未来检视这个合并的读者一些帮助，告诉他们你是如何解决合并冲突的，以及理由是什么。")])])}),[],!1,null,null,null);t.default=e.exports}}]);