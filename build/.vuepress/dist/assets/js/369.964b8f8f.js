(window.webpackJsonp=window.webpackJsonp||[]).push([[369],{785:function(s,t,a){"use strict";a.r(t);var n=a(13),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"使用-mysql-来达到热更新-ik-词库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-mysql-来达到热更新-ik-词库"}},[s._v("#")]),s._v(" 使用 mysql 来达到热更新 ik 词库")]),s._v(" "),a("h2",{attrs:{id:"什么是热更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是热更新"}},[s._v("#")]),s._v(" 什么是热更新？")]),s._v(" "),a("p",[s._v("修改扩展词的时候，每次都需要手动在配置文件中增加，并且需要重启 es 才能生效，\nes 是分布式的，可能有数百个节点，你不能每次都一个一个节点上面去修改。")]),s._v(" "),a("p",[s._v("es 不停机，直接我们在外部某个地方添加新的词语，es 中立即热加载到这些新词语，这就是热更新效果")]),s._v(" "),a("h2",{attrs:{id:"热更新的方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#热更新的方案"}},[s._v("#")]),s._v(" 热更新的方案")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("修改 ik 分词器源码，然后手动支持从 mysql 中每隔一定时间，自动加载新的词库")])]),s._v(" "),a("li",[a("p",[s._v("基于 ik 分词器原生支持的热更新方案")]),s._v(" "),a("p",[s._v("部署一个 web 服务器，提供一个 http 接口，通过 modified 和 tag 两个 http 响应头，来提供词语的热更新\n这个远程更新的可以在源码中找到。使用数据库加载的时候就可以参考这个是怎么把词语放到内存中的")])])]),s._v(" "),a("p",[s._v("用第一种方案，第二种 ik git 社区官方都不建议采用，觉得不太稳定")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("下载源码")]),s._v(" "),a("p",[s._v("https://github.com/medcl/elasticsearch-analysis-ik/tree/v5.2.0\nik 分词器，是个标准的 java maven 工程")])]),s._v(" "),a("li",[a("p",[s._v("修改源码")]),s._v(" "),a("p",[s._v("主要思路：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Dictionary")]),s._v("类，"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("169")]),s._v("行："),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Dictionary")]),s._v(" 单例类的初始化方法，在这里需要创建一个我们自定义的线程，并且启动它\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HotDictReloadThread")]),s._v(" 类：就是死循环，不断调用 "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Dictionary")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSingleton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("reLoadMainDict")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("，去重新加载词典\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Dictionary")]),s._v("类，"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("389")]),s._v("行："),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("loadMySQLExtDict")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Dictionary")]),s._v("类，"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("683")]),s._v("行："),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("loadMySQLStopwordDict")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("然后再写个配置文件和 ik 的词库配置放一起，里面可以配置 mysql 的相关参数配置\n"),a("code",[s._v("org.wltea.analyzer.dic.Dictionary")]),s._v(" 主要的入口点在这个类里面，大概看了一下代码量少，有中文注释，比较容易看懂")])]),s._v(" "),a("li",[a("p",[s._v("mvn package 打包代码")]),s._v(" "),a("p",[s._v("target\\releases\\elasticsearch-analysis-ik-5.2.0.zip")])]),s._v(" "),a("li",[a("p",[s._v("解压缩 ik 压缩包：将 mysql 驱动 jar，放入 ik 的目录下")])]),s._v(" "),a("li",[a("p",[s._v("修改 jdbc 相关配置")])]),s._v(" "),a("li",[a("p",[s._v("重启 es")])])]),s._v(" "),a("p",[s._v("观察日志，日志中就会显示我们打印的那些东西，比如加载了什么配置，加载了什么词语，什么停用词")]),s._v(" "),a("p",[s._v("在 mysql 中添加词库与停用词并分词实验，验证热更新是否生效")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("该课程包含了一个已经实现 mysql 热更新的项目包。由于代码不是很复杂，就不提供该包了")])])])}),[],!1,null,null,null);t.default=e.exports}}]);