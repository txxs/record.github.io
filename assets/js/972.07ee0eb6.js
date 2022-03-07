(window.webpackJsonp=window.webpackJsonp||[]).push([[972],{1366:function(t,s,a){"use strict";a.r(s);var n=a(13),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",{attrs:{align:"center"}},[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/RsdcQ9umo09R6cfnwXZlrQ"}},[a("img",{attrs:{src:"https://img.shields.io/badge/PDF下载-代码随想录-blueviolet",alt:""}})]),t._v(" "),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/b66DFkOp8OOxdZC_xLZxfw"}},[a("img",{attrs:{src:"https://img.shields.io/badge/刷题-微信群-green",alt:""}})]),t._v(" "),a("a",{attrs:{href:"https://space.bilibili.com/525438321"}},[a("img",{attrs:{src:"https://img.shields.io/badge/B站-代码随想录-orange",alt:""}})]),t._v(" "),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/QVF6upVMSbgvZy8lHZS3CQ"}},[a("img",{attrs:{src:"https://img.shields.io/badge/知识星球-代码随想录-blue",alt:""}})])]),t._v(" "),a("p",{attrs:{align:"center"}},[a("strong",[t._v("欢迎大家"),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/tqCxrMEU-ajQumL1i8im9A"}},[t._v("参与本项目")]),t._v("，贡献其他语言版本的代码，拥抱开源，让更多学习算法的小伙伴们收益！")])]),t._v(" "),a("h1",{attrs:{id:"空间复杂度分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#空间复杂度分析"}},[t._v("#")]),t._v(" 空间复杂度分析")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://programmercarl.com/%E5%89%8D%E5%BA%8F/%E5%85%B3%E4%BA%8E%E6%97%B6%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6%EF%BC%8C%E4%BD%A0%E4%B8%8D%E7%9F%A5%E9%81%93%E7%9A%84%E9%83%BD%E5%9C%A8%E8%BF%99%E9%87%8C%EF%BC%81.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("关于时间复杂度，你不知道的都在这里！"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://programmercarl.com/%E5%89%8D%E5%BA%8F/On%E7%9A%84%E7%AE%97%E6%B3%95%E5%B1%85%E7%84%B6%E8%B6%85%E6%97%B6%E4%BA%86%EF%BC%8C%E6%AD%A4%E6%97%B6%E7%9A%84n%E7%A9%B6%E7%AB%9F%E6%98%AF%E5%A4%9A%E5%A4%A7%EF%BC%9F.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("$O(n)$的算法居然超时了，此时的n究竟是多大？"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://programmercarl.com/%E5%89%8D%E5%BA%8F/%E9%80%9A%E8%BF%87%E4%B8%80%E9%81%93%E9%9D%A2%E8%AF%95%E9%A2%98%E7%9B%AE%EF%BC%8C%E8%AE%B2%E4%B8%80%E8%AE%B2%E9%80%92%E5%BD%92%E7%AE%97%E6%B3%95%E7%9A%84%E6%97%B6%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6%EF%BC%81.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("通过一道面试题目，讲一讲递归算法的时间复杂度！"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("那么一直还没有讲空间复杂度，所以打算陆续来补上，内容不难，大家可以读一遍文章就有整体的了解了。")]),t._v(" "),a("p",[t._v("什么是空间复杂度呢？")]),t._v(" "),a("p",[t._v("是对一个算法在运行过程中占用内存空间大小的量度，记做$S(n)=O(f(n)$。")]),t._v(" "),a("p",[t._v("空间复杂度(Space Complexity)记作S(n) 依然使用大O来表示。利用程序的空间复杂度，可以对程序运行中需要多少内存有个预先估计。")]),t._v(" "),a("p",[t._v("关注空间复杂度有两个常见的相关问题")]),t._v(" "),a("ol",[a("li",[t._v("空间复杂度是考虑程序（可执行文件）的大小么？")])]),t._v(" "),a("p",[t._v("很多同学都会混淆程序运行时内存大小和程序本身的大小。这里强调一下"),a("strong",[t._v("空间复杂度是考虑程序运行时占用内存的大小，而不是可执行文件的大小。")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("空间复杂度是准确算出程序运行时所占用的内存么？")])]),t._v(" "),a("p",[t._v("不要以为空间复杂度就已经精准的掌握了程序的内存使用大小，很多因素会影响程序真正内存使用大小，例如编译器的内存对齐，编程语言容器的底层实现等等这些都会影响到程序内存的开销。")]),t._v(" "),a("p",[t._v("所以空间复杂度是预先大体评估程序内存使用的大小。")]),t._v(" "),a("p",[t._v("说到空间复杂度，我想同学们在OJ（online judge）上应该遇到过这种错误，就是超出内存限制，一般OJ对程序运行时的所消耗的内存都有一个限制。")]),t._v(" "),a("p",[t._v("为了避免内存超出限制，这也需要我们对算法占用多大的内存有一个大体的预估。")]),t._v(" "),a("p",[t._v("同样在工程实践中，计算机的内存空间也不是无限的，需要工程师对软件运行时所使用的内存有一个大体评估，这都需要用到算法空间复杂度的分析。")]),t._v(" "),a("p",[t._v("来看一下例子，什么时候的空间复杂度是$O(1)$呢，C++代码如下：")]),t._v(" "),a("div",{staticClass:"language-CPP line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("第一段代码可以看出，随着n的变化，所需开辟的内存空间并不会随着n的变化而变化。即此算法空间复杂度为一个常量，所以表示为大$O(1)$。")]),t._v(" "),a("p",[t._v("什么时候的空间复杂度是$O(n)$？")]),t._v(" "),a("p",[t._v("当消耗空间和输入参数n保持线性增长，这样的空间复杂度为$O(n)$，来看一下这段C++代码")]),t._v(" "),a("div",{staticClass:"language-CPP line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("我们定义了一个数组出来，这个数组占用的大小为n，虽然有一个for循环，但没有再分配新的空间，因此，这段代码的空间复杂度主要看第一行即可，随着n的增大，开辟的内存大小呈线性增长，即 $O(n)$。")]),t._v(" "),a("p",[t._v("其他的 $O(n^2)$， $O(n^3)$ 我想大家应该都可以以此例举出来了，"),a("strong",[t._v("那么思考一下 什么时候空间复杂度是 $O(\\log n)$呢？")])]),t._v(" "),a("p",[t._v("空间复杂度是logn的情况确实有些特殊，其实是在"),a("strong",[t._v("递归的时候，会出现空间复杂度为logn的情况")]),t._v("。")]),t._v(" "),a("p",[t._v("至于如何求递归的空间复杂度，我会在专门写一篇文章来介绍的，敬请期待！")]),t._v(" "),a("hr"),t._v(" "),a("ul",[a("li",[t._v("作者微信："),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/b66DFkOp8OOxdZC_xLZxfw",target:"_blank",rel:"noopener noreferrer"}},[t._v("程序员Carl"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("B站视频："),a("a",{attrs:{href:"https://space.bilibili.com/525438321",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码随想录"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("知识星球："),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/QVF6upVMSbgvZy8lHZS3CQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码随想录"),a("OutboundLink")],1),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://code-thinking.cdn.bcebos.com/pics/01二维码.jpg",width:"450"}})])])])])}),[],!1,null,null,null);s.default=r.exports}}]);