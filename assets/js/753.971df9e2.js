(window.webpackJsonp=window.webpackJsonp||[]).push([[753],{1148:function(s,t,a){"use strict";a.r(t);var r=a(13),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("#目录\n"),a("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4685968-34f845d539264d16.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}}),s._v(" "),a("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4685968-2dcb1f1680786bc9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}}),s._v("\n#无SpringMVC全局异常时的流程图\n"),a("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4685968-11e86660294cec5c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}}),s._v("\n#SpringMVC全局异常流程图\n"),a("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4685968-29cfa37601caf919.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"其实是一个ModelAndView对象"}}),s._v("\n#配置文件")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("applicationcontext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xml\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("xml version"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0"')]),s._v(" encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"UTF-8"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("beans xmlns"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://www.springframework.org/schema/beans"')]),s._v("\n       xmlns"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("xsi"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://www.w3.org/2001/XMLSchema-instance"')]),s._v(" xmlns"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("aop"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://www.springframework.org/schema/aop"')]),s._v("\n       xmlns"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("tx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://www.springframework.org/schema/tx"')]),s._v(" xmlns"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("jdbc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://www.springframework.org/schema/jdbc"')]),s._v("\n       xmlns"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("context"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://www.springframework.org/schema/context"')]),s._v("\n       xmlns"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("task"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://www.springframework.org/schema/task"')]),s._v("\n       xsi"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("schemaLocation"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v('"http'),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("schema"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("context http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("schema"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("context"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("spring"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xsd\n     http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("schema"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("beans http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("schema"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("beans"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("spring"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("beans"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xsd\n     http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("schema"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("tx http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("schema"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("tx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("spring"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("tx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xsd\n     http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("schema"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("aop http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("schema"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("aop"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("spring"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("aop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xsd http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("schema"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("task http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("schema"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("task"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("spring"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v('xsd"'),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("context"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("component"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("scan base"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"com.mmall"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" 扫描controller的职责交给dispatcher"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("servlet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("所以排除 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("context"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("exclude"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("filter type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"annotation"')]),s._v(" expression"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"org.springframework.stereotype.Controller"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("context"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("component"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("scan"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("aop"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("aspectj"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("autoproxy"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" spring schedule "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("context"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("property"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("placeholder location"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"classpath:datasource.properties"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("task"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("annotation"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("driven"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("resource")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"applicationContext-spring-session.xml"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("resource")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"applicationContext-datasource.xml"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("beans"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("dispacher"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("servlet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xml\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("xml version"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0"')]),s._v(" encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"UTF-8"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("beans xmlns"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://www.springframework.org/schema/beans"')]),s._v("\n       xmlns"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("xsi"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://www.w3.org/2001/XMLSchema-instance"')]),s._v(" xmlns"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://www.springframework.org/schema/p"')]),s._v("\n       xmlns"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("context"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://www.springframework.org/schema/context"')]),s._v("\n       xmlns"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("mvc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://www.springframework.org/schema/mvc"')]),s._v(" xmlns"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("aop"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://www.springframework.org/schema/aop"')]),s._v("\n       xsi"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("schemaLocation"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v('"http'),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("schema"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("beans http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("schema"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("beans"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("spring"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("beans"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xsd\n\thttp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("schema"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("context http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("schema"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("context"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("spring"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xsd\n\thttp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("schema"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mvc\n\thttp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("schema"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mvc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("spring"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("mvc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v('xsd"'),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" springmvc扫描包指定到controller，防止重复扫描 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("context"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("component"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("scan base"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"com.mmall.controller"')]),s._v(" annotation"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("config"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),s._v(" use"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("filters"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("context"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("include"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("filter type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"annotation"')]),s._v(" expression"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"org.springframework.stereotype.Controller"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("context"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("component"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("scan"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("mvc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("annotation"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("driven"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("mvc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("message"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("converters"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("bean "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"org.springframework.http.converter.StringHttpMessageConverter"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("property name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"supportedMediaTypes"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("plain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("charset"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("UTF"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("charset"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("UTF"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("list"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("property"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bean"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("bean "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"org.springframework.http.converter.json.MappingJacksonHttpMessageConverter"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("property name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"supportedMediaTypes"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("application"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("charset"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("UTF"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("list"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("property"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bean"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mvc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("message"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("converters"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mvc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("annotation"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("driven"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("mvc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("interceptors"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" 定义在这里的，所有的都会拦截"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("mvc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("interceptor"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("manage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("manage"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*--\x3e\n            \x3c!--manage/b.do  /manage/*--\x3e\n            \x3c!--manage/product/save.do /manage/**--\x3e\n            \x3c!--manage/order/detail.do /manage/**--\x3e\n            <mvc:mapping path="/manage/**"/>\n            \x3c!--<mvc:exclude-mapping path="/manage/user/login.do"/>--\x3e\n            <bean class="com.mmall.controller.common.interceptor.AuthorityInterceptor" />\n        </mvc:interceptor>\n\n    </mvc:interceptors>\n</beans>\n\n')])])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);