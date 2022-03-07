(window.webpackJsonp=window.webpackJsonp||[]).push([[989],{1384:function(v,_,t){"use strict";t.r(_);var p=t(13),r=Object(p.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",{attrs:{align:"center"}},[t("a",{attrs:{href:"https://programmercarl.com/other/kstar.html",target:"_blank"}},[t("img",{attrs:{src:"https://code-thinking-1253855093.file.myqcloud.com/pics/20210924105952.png",width:"1000"}})])]),t("p",{attrs:{align:"center"}},[t("strong",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s/tqCxrMEU-ajQumL1i8im9A"}},[v._v("参与本项目")]),v._v("，贡献其他语言版本的代码，拥抱开源，让更多学习算法的小伙伴们收益！")])]),v._v(" "),t("h1",{attrs:{id:"动态规划理论基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动态规划理论基础"}},[v._v("#")]),v._v(" 动态规划理论基础")]),v._v(" "),t("p",[v._v("动态规划刷题大纲")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://code-thinking.cdn.bcebos.com/pics/动态规划-总结大纲1.jpg",width:"600"}})]),v._v(" "),t("h2",{attrs:{id:"什么是动态规划"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是动态规划"}},[v._v("#")]),v._v(" 什么是动态规划")]),v._v(" "),t("p",[v._v("动态规划，英文：Dynamic Programming，简称DP，如果某一问题有很多重叠子问题，使用动态规划是最有效的。")]),v._v(" "),t("p",[v._v("所以动态规划中每一个状态一定是由上一个状态推导出来的，"),t("strong",[v._v("这一点就区分于贪心")]),v._v("，贪心没有状态推导，而是从局部直接选最优的，")]),v._v(" "),t("p",[v._v("在"),t("a",{attrs:{href:"https://programmercarl.com/%E8%B4%AA%E5%BF%83%E7%AE%97%E6%B3%95%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("关于贪心算法，你该了解这些！"),t("OutboundLink")],1),v._v("中我举了一个背包问题的例子。")]),v._v(" "),t("p",[v._v("例如：有N件物品和一个最多能背重量为W 的背包。第i件物品的重量是weight[i]，得到的价值是value[i] 。"),t("strong",[v._v("每件物品只能用一次")]),v._v("，求解将哪些物品装入背包里物品价值总和最大。")]),v._v(" "),t("p",[v._v("动态规划中dp[j]是由dp[j-weight[i]]推导出来的，然后取max(dp[j], dp[j - weight[i]] + value[i])。")]),v._v(" "),t("p",[v._v("但如果是贪心呢，每次拿物品选一个最大的或者最小的就完事了，和上一个状态没有关系。")]),v._v(" "),t("p",[v._v("所以贪心解决不了动态规划的问题。")]),v._v(" "),t("p",[t("strong",[v._v("其实大家也不用死扣动规和贪心的理论区别，后面做做题目自然就知道了")]),v._v("。")]),v._v(" "),t("p",[v._v("而且很多讲解动态规划的文章都会讲最优子结构啊和重叠子问题啊这些，这些东西都是教科书的上定义，晦涩难懂而且不实用。")]),v._v(" "),t("p",[v._v("大家知道动规是由前一个状态推导出来的，而贪心是局部直接选最优的，对于刷题来说就够用了。")]),v._v(" "),t("p",[v._v("上述提到的背包问题，后序会详细讲解。")]),v._v(" "),t("h2",{attrs:{id:"动态规划的解题步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动态规划的解题步骤"}},[v._v("#")]),v._v(" 动态规划的解题步骤")]),v._v(" "),t("p",[v._v("做动规题目的时候，很多同学会陷入一个误区，就是以为把状态转移公式背下来，照葫芦画瓢改改，就开始写代码，甚至把题目AC之后，都不太清楚dp[i]表示的是什么。")]),v._v(" "),t("p",[t("strong",[v._v("这就是一种朦胧的状态，然后就把题给过了，遇到稍稍难一点的，可能直接就不会了，然后看题解，然后继续照葫芦画瓢陷入这种恶性循环中")]),v._v("。")]),v._v(" "),t("p",[v._v("状态转移公式（递推公式）是很重要，但动规不仅仅只有递推公式。")]),v._v(" "),t("p",[t("strong",[v._v("对于动态规划问题，我将拆解为如下五步曲，这五步都搞清楚了，才能说把动态规划真的掌握了！")])]),v._v(" "),t("ol",[t("li",[v._v("确定dp数组（dp table）以及下标的含义")]),v._v(" "),t("li",[v._v("确定递推公式")]),v._v(" "),t("li",[v._v("dp数组如何初始化")]),v._v(" "),t("li",[v._v("确定遍历顺序")]),v._v(" "),t("li",[v._v("举例推导dp数组")])]),v._v(" "),t("p",[v._v("一些同学可能想为什么要先确定递推公式，然后在考虑初始化呢？")]),v._v(" "),t("p",[t("strong",[v._v("因为一些情况是递推公式决定了dp数组要如何初始化！")])]),v._v(" "),t("p",[v._v("后面的讲解中我都是围绕着这五点来进行讲解。")]),v._v(" "),t("p",[v._v("可能刷过动态规划题目的同学可能都知道递推公式的重要性，感觉确定了递推公式这道题目就解出来了。")]),v._v(" "),t("p",[v._v("其实 确定递推公式 仅仅是解题里的一步而已！")]),v._v(" "),t("p",[v._v("一些同学知道递推公式，但搞不清楚dp数组应该如何初始化，或者正确的遍历顺序，以至于记下来公式，但写的程序怎么改都通过不了。")]),v._v(" "),t("p",[v._v("后序的讲解的大家就会慢慢感受到这五步的重要性了。")]),v._v(" "),t("h2",{attrs:{id:"动态规划应该如何debug"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动态规划应该如何debug"}},[v._v("#")]),v._v(" 动态规划应该如何debug")]),v._v(" "),t("p",[v._v("相信动规的题目，很大部分同学都是这样做的。")]),v._v(" "),t("p",[v._v("看一下题解，感觉看懂了，然后照葫芦画瓢，如果能正好画对了，万事大吉，一旦要是没通过，就怎么改都通过不了，对 dp数组的初始化，递推公式，遍历顺序，处于一种黑盒的理解状态。")]),v._v(" "),t("p",[v._v("写动规题目，代码出问题很正常！")]),v._v(" "),t("p",[t("strong",[v._v("找问题的最好方式就是把dp数组打印出来，看看究竟是不是按照自己思路推导的！")])]),v._v(" "),t("p",[v._v("一些同学对于dp的学习是黑盒的状态，就是不清楚dp数组的含义，不懂为什么这么初始化，递推公式背下来了，遍历顺序靠习惯就是这么写的，然后一鼓作气写出代码，如果代码能通过万事大吉，通过不了的话就凭感觉改一改。")]),v._v(" "),t("p",[v._v("这是一个很不好的习惯！")]),v._v(" "),t("p",[t("strong",[v._v("做动规的题目，写代码之前一定要把状态转移在dp数组的上具体情况模拟一遍，心中有数，确定最后推出的是想要的结果")]),v._v("。")]),v._v(" "),t("p",[v._v("然后再写代码，如果代码没通过就打印dp数组，看看是不是和自己预先推导的哪里不一样。")]),v._v(" "),t("p",[v._v("如果打印出来和自己预先模拟推导是一样的，那么就是自己的递归公式、初始化或者遍历顺序有问题了。")]),v._v(" "),t("p",[v._v("如果和自己预先模拟推导的不一样，那么就是代码实现细节有问题。")]),v._v(" "),t("p",[t("strong",[v._v("这样才是一个完整的思考过程，而不是一旦代码出问题，就毫无头绪的东改改西改改，最后过不了，或者说是稀里糊涂的过了")]),v._v("。")]),v._v(" "),t("p",[v._v("这也是我为什么在动规五步曲里强调推导dp数组的重要性。")]),v._v(" "),t("p",[v._v("举个例子哈：在「代码随想录」刷题小分队微信群里，一些录友可能代码通过不了，会把代码抛到讨论群里问：我这里代码都已经和题解一模一样了，为什么通过不了呢？")]),v._v(" "),t("p",[v._v("发出这样的问题之前，其实可以自己先思考这三个问题：")]),v._v(" "),t("ul",[t("li",[v._v("这道题目我举例推导状态转移公式了么？")]),v._v(" "),t("li",[v._v("我打印dp数组的日志了么？")]),v._v(" "),t("li",[v._v("打印出来了dp数组和我想的一样么？")])]),v._v(" "),t("p",[t("strong",[v._v("如果这灵魂三问自己都做到了，基本上这道题目也就解决了")]),v._v("，或者更清晰的知道自己究竟是哪一点不明白，是状态转移不明白，还是实现代码不知道该怎么写，还是不理解遍历dp数组的顺序。")]),v._v(" "),t("p",[v._v("然后在问问题，目的性就很强了，群里的小伙伴也可以快速知道提问者的疑惑了。")]),v._v(" "),t("p",[t("strong",[v._v("注意这里不是说不让大家问问题哈， 而是说问问题之前要有自己的思考，问题要问到点子上！")])]),v._v(" "),t("p",[t("strong",[v._v("大家工作之后就会发现，特别是大厂，问问题是一个专业活，是的，问问题也要体现出专业！")])]),v._v(" "),t("p",[v._v("如果问同事很不专业的问题，同事们会懒的回答，领导也会认为你缺乏思考能力，这对职场发展是很不利的。")]),v._v(" "),t("p",[v._v("所以大家在刷题的时候，就锻炼自己养成专业提问的好习惯。")]),v._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),t("p",[v._v("这一篇是动态规划的整体概述，讲解了什么是动态规划，动态规划的解题步骤，以及如何debug。")]),v._v(" "),t("p",[v._v("动态规划是一个很大的领域，今天这一篇讲解的内容是整个动态规划系列中都会使用到的一些理论基础。")]),v._v(" "),t("p",[v._v("在后序讲解中针对某一具体问题，还会讲解其对应的理论基础，例如背包问题中的01背包，leetcode上的题目都是01背包的应用，而没有纯01背包的问题，那么就需要在把对应的理论知识讲解一下。")]),v._v(" "),t("p",[v._v("大家会发现，我讲解的理论基础并不是教科书上各种动态规划的定义，错综复杂的公式。")]),v._v(" "),t("p",[v._v("这里理论基础篇已经是非常偏实用的了，每个知识点都是在解题实战中非常有用的内容，大家要重视起来哈。")]),v._v(" "),t("p",[v._v("今天我们开始新的征程了，你准备好了么？")]),v._v(" "),t("hr"),v._v(" "),t("div",{attrs:{align:"center"}},[t("img",{attrs:{src:"https://code-thinking.cdn.bcebos.com/pics/01二维码一.jpg",width:"500"}})])])}),[],!1,null,null,null);_.default=r.exports}}]);