(window.webpackJsonp=window.webpackJsonp||[]).push([[1188],{1582:function(t,s,_){"use strict";_.r(s);var a=_(13),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("blockquote",[_("p",[t._v("全是干货的技术号：\n本文已收录在github，欢迎 star/fork：\nhttps://github.com/Wasabi1234/Java-Interview-Tutorial")])]),t._v(" "),_("ul",[_("li",[t._v("面试频率可不低哦，大家务必掌握，避免阴沟翻船！"),_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200825225748108.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_SmF2YUVkZ2U=,size_16,color_FFFFFF,t_70#pic_center",alt:""}})])]),t._v(" "),_("p",[t._v("临时表在我们需要保存一些临时数据时非常有用。\n临时表只在"),_("code",[t._v("当前连接")]),t._v("可见，当关闭连接时，MySQL会自动删除表并释放所有空间。")]),t._v(" "),_("blockquote",[_("p",[t._v("临时表在MySQL 3.23版本添加。")])]),t._v(" "),_("p",[t._v("如果你使用Java的MySQL客户端程序连接MySQL数据库服务器来创建临时表，那么只有在关闭客户端程序时才会销毁临时表，当然也可手动销毁。")]),t._v(" "),_("h1",{attrs:{id:"实例"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("建表\n"),_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200825223741329.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_SmF2YUVkZ2U=,size_1,color_FFFFFF,t_70#pic_center",alt:""}})])]),t._v(" "),_("li",[_("p",[t._v("插入数据\n"),_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200825223534264.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_SmF2YUVkZ2U=,size_1,color_FFFFFF,t_70#pic_center",alt:""}})])]),t._v(" "),_("li",[_("p",[t._v("查询"),_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200825223508176.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_SmF2YUVkZ2U=,size_16,color_FFFFFF,t_70#pic_center",alt:""}})])])]),t._v(" "),_("p",[t._v("当使用 SHOW TABLES显示数据表列表时，无法看到所建的表。")]),t._v(" "),_("p",[t._v("若退出当前MySQL会话，再使用 SELECT命令来读取原先创建的临时表数据，那你会发现数据库中没有该表的存在，因为在你退出时该临时表已经被销毁了。")]),t._v(" "),_("h1",{attrs:{id:"删除mysql-临时表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#删除mysql-临时表"}},[t._v("#")]),t._v(" 删除MySQL 临时表")]),t._v(" "),_("p",[t._v("默认情况下，当断开与数据库的连接后，临时表就会自动被销毁。当然也可以在当前MySQL会话使用 DROP TABLE 命令来手动删除临时表。")]),t._v(" "),_("p",[t._v("以下是手动删除临时表的实例：\n"),_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200825224115177.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_SmF2YUVkZ2U=,size_1,color_FFFFFF,t_70#pic_center",alt:""}})]),t._v(" "),_("h1",{attrs:{id:"场景案例"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#场景案例"}},[t._v("#")]),t._v(" 场景案例")]),t._v(" "),_("p",[t._v("比如你的系统有高并发同时写库的需求。假设10w条数据量同时写入：")]),t._v(" "),_("ol",[_("li",[t._v("多线程，建临时表，分别写到临时表，再入库")]),t._v(" "),_("li",[t._v("从源端控制，不允许同时写入多条")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200825235213822.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_SmF2YUVkZ2U=,size_1,color_FFFFFF,t_70#pic_center",alt:""}})])])}),[],!1,null,null,null);s.default=e.exports}}]);