(window.webpackJsonp=window.webpackJsonp||[]).push([[561],{952:function(a,n,t){"use strict";t.r(n);var e=t(13),r=Object(e.a)({},(function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[a._v("#")]),a._v(" 目录")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E4%BB%8Ejvm%E7%BB%93%E6%9E%84%E5%BC%80%E5%A7%8B%E8%B0%88%E5%A4%9A%E6%80%81"}},[a._v("从JVM结构开始谈多态")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#jvm-%E7%9A%84%E7%BB%93%E6%9E%84"}},[a._v("JVM 的结构")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#java-%E7%9A%84%E6%96%B9%E6%B3%95%E8%B0%83%E7%94%A8%E6%96%B9%E5%BC%8F"}},[a._v("Java 的方法调用方式")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E5%B8%B8%E9%87%8F%E6%B1%A0%EF%BC%88constant-pool%EF%BC%89"}},[a._v("常量池（constant pool）")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E5%9B%BE-2-%E5%B8%B8%E9%87%8F%E6%B1%A0%E5%90%84%E8%A1%A8%E7%9A%84%E5%85%B3%E7%B3%BB"}},[a._v("图 2. 常量池各表的关系")])])])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E6%96%B9%E6%B3%95%E8%A1%A8%E4%B8%8E%E6%96%B9%E6%B3%95%E8%B0%83%E7%94%A8"}},[a._v("方法表与方法调用")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E6%B8%85%E5%8D%95-1"}},[a._v("清单 1")])])])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E6%8E%A5%E5%8F%A3%E8%B0%83%E7%94%A8"}},[a._v("接口调用")]),a._v(" "),t("ul",[t("li",[a._v("[图 5.Dancer 的方法表（"),t("a",{attrs:{href:"https://www.ibm.com/developerworks/cn/java/j-lo-polymorph/image011.jpg",target:"_blank",rel:"noopener noreferrer"}},[a._v("查看大图"),t("OutboundLink")],1),a._v("）](#图-5dancer-的方法表（[查看大图]httpswwwibmcomdeveloperworkscnjavaj-lo-polymorphimage011jpg）)")])])])])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E7%BB%A7%E6%89%BF%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86"}},[a._v("继承的实现原理")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E9%87%8D%E8%BD%BD%E5%92%8C%E9%87%8D%E5%86%99%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86"}},[a._v("重载和重写的实现原理")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E5%8F%82%E8%80%83%E6%96%87%E7%AB%A0"}},[a._v("参考文章")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7"}},[a._v("微信公众号")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#java%E6%8A%80%E6%9C%AF%E6%B1%9F%E6%B9%96"}},[a._v("Java技术江湖")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E4%B8%AA%E4%BA%BA%E5%85%AC%E4%BC%97%E5%8F%B7%EF%BC%9A%E9%BB%84%E5%B0%8F%E6%96%9C"}},[a._v("个人公众号：黄小斜")])])])])]),a._v(" "),t("hr"),a._v(" "),t("h2",{attrs:{id:"title-夯实java基础系列23-深入理解java继承、封装、多态的底层实现原理date-2019-9-23-15-56-26-文章生成时间-一般不改categories-java技术江湖-java基础tags-继承-封装-多态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#title-夯实java基础系列23-深入理解java继承、封装、多态的底层实现原理date-2019-9-23-15-56-26-文章生成时间-一般不改categories-java技术江湖-java基础tags-继承-封装-多态"}},[a._v("#")]),a._v(" title: 夯实Java基础系列23：深入理解Java继承、封装、多态的底层实现原理\ndate: 2019-9-23 15:56:26 # 文章生成时间，一般不改\ncategories:\n- Java技术江湖\n- Java基础\ntags:\n- 继承\n- 封装\n- 多态")]),a._v(" "),t("p",[a._v("本系列文章将整理到我在GitHub上的《Java面试指南》仓库，更多精彩内容请到我的仓库里查看")]),a._v(" "),t("blockquote",[t("p",[a._v("https://github.com/h2pl/Java-Tutorial")])]),a._v(" "),t("p",[a._v("喜欢的话麻烦点下Star哈")]),a._v(" "),t("p",[a._v("文章首发于我的个人博客：")]),a._v(" "),t("blockquote",[t("p",[a._v("www.how2playlife.com")])]),a._v(" "),t("p",[a._v("本文是微信公众号【Java技术江湖】的《夯实Java基础系列博文》其中一篇，本文部分内容来源于网络，为了把本文主题讲得清晰透彻，也整合了很多我认为不错的技术博客内容，引用其中了一些比较好的博客文章，如有侵权，请联系作者。\n该系列博文会告诉你如何从入门到进阶，一步步地学习Java基础知识，并上手进行实战，接着了解每个Java知识点背后的实现原理，更完整地了解整个Java技术体系，形成自己的知识框架。为了更好地总结和检验你的学习成果，本系列文章也会提供每个知识点对应的面试题以及参考答案。")]),a._v(" "),t("p",[a._v("如果对本系列文章有什么建议，或者是有什么疑问的话，也可以关注公众号【Java技术江湖】联系作者，欢迎你参与本系列博文的创作和修订。")]),a._v(" "),t("h2",{attrs:{id:"从jvm结构开始谈多态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从jvm结构开始谈多态"}},[a._v("#")]),a._v(" 从JVM结构开始谈多态")]),a._v(" "),t("p",[a._v("Java 对于方法调用动态绑定的实现主要依赖于方法表，但通过类引用调用和接口引用调用的实现则有所不同。总体而言，当某个方法被调用时，JVM 首先要查找相应的常量池，得到方法的符号引用，并查找调用类的方法表以确定该方法的直接引用，最后才真正调用该方法。以下分别对该过程中涉及到的相关部分做详细介绍。")]),a._v(" "),t("h3",{attrs:{id:"jvm-的结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm-的结构"}},[a._v("#")]),a._v(" JVM 的结构")]),a._v(" "),t("p",[a._v("典型的 Java 虚拟机的运行时结构如下图所示")]),a._v(" "),t("p",[a._v("图 1.JVM 运行时结构")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.ibm.com/developerworks/cn/java/j-lo-polymorph/image003.jpg",alt:"图 1.JVM 运行时结构"}})]),a._v(" "),t("p",[a._v("此结构中，我们只探讨和本文密切相关的方法区 (method area)。当程序运行需要某个类的定义时，载入子系统 (class loader subsystem) 装入所需的 class 文件，并在内部建立该类的类型信息，这个类型信息就存贮在方法区。类型信息一般包括该类的方法代码、类变量、成员变量的定义等等。可以说，类型信息就是类的 Java 文件在运行时的内部结构，包含了改类的所有在 Java 文件中定义的信息。")]),a._v(" "),t("p",[a._v("注意到，该类型信息和 class 对象是不同的。class 对象是 JVM 在载入某个类后于堆 (heap) 中创建的代表该类的对象，可以通过该 class 对象访问到该类型信息。比如最典型的应用，在 Java 反射中应用 class 对象访问到该类支持的所有方法，定义的成员变量等等。可以想象，JVM 在类型信息和 class 对象中维护着它们彼此的引用以便互相访问。两者的关系可以类比于进程对象与真正的进程之间的关系。")]),a._v(" "),t("h3",{attrs:{id:"java-的方法调用方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-的方法调用方式"}},[a._v("#")]),a._v(" Java 的方法调用方式")]),a._v(" "),t("p",[a._v("Java 的方法调用有两类，动态方法调用与静态方法调用。静态方法调用是指对于类的静态方法的调用方式，是静态绑定的；而动态方法调用需要有方法调用所作用的对象，是动态绑定的。类调用 (invokestatic) 是在编译时刻就已经确定好具体调用方法的情况，而实例调用 (invokevirtual) 则是在调用的时候才确定具体的调用方法，这就是动态绑定，也是多态要解决的核心问题。")]),a._v(" "),t("p",[a._v("JVM 的方法调用指令有四个，分别是 invokestatic，invokespecial，invokesvirtual 和 invokeinterface。前两个是静态绑定，后两个是动态绑定的。本文也可以说是对于 JVM 后两种调用实现的考察。")]),a._v(" "),t("h3",{attrs:{id:"常量池-constant-pool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常量池-constant-pool"}},[a._v("#")]),a._v(" 常量池（constant pool）")]),a._v(" "),t("p",[a._v("常量池中保存的是一个 Java 类引用的一些常量信息，包含一些字符串常量及对于类的符号引用信息等。Java 代码编译生成的类文件中的常量池是静态常量池，当类被载入到虚拟机内部的时候，在内存中产生类的常量池叫运行时常量池。")]),a._v(" "),t("p",[a._v("常量池在逻辑上可以分成多个表，每个表包含一类的常量信息，本文只探讨对于 Java 调用相关的常量池表。")]),a._v(" "),t("p",[a._v("CONSTANT_Utf8_info")]),a._v(" "),t("p",[a._v("字符串常量表，该表包含该类所使用的所有字符串常量，比如代码中的字符串引用、引用的类名、方法的名字、其他引用的类与方法的字符串描述等等。其余常量池表中所涉及到的任何常量字符串都被索引至该表。")]),a._v(" "),t("p",[a._v("CONSTANT_Class_info")]),a._v(" "),t("p",[a._v("类信息表，包含任何被引用的类或接口的符号引用，每一个条目主要包含一个索引，指向 CONSTANT_Utf8_info 表，表示该类或接口的全限定名。")]),a._v(" "),t("p",[a._v("CONSTANT_NameAndType_info")]),a._v(" "),t("p",[a._v("名字类型表，包含引用的任意方法或字段的名称和描述符信息在字符串常量表中的索引。")]),a._v(" "),t("p",[a._v("CONSTANT_InterfaceMethodref_info")]),a._v(" "),t("p",[a._v("接口方法引用表，包含引用的任何接口方法的描述信息，主要包括类信息索引和名字类型索引。")]),a._v(" "),t("p",[a._v("CONSTANT_Methodref_info")]),a._v(" "),t("p",[a._v("类方法引用表，包含引用的任何类型方法的描述信息，主要包括类信息索引和名字类型索引。")]),a._v(" "),t("h5",{attrs:{id:"图-2-常量池各表的关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#图-2-常量池各表的关系"}},[a._v("#")]),a._v(" 图 2. 常量池各表的关系")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.ibm.com/developerworks/cn/java/j-lo-polymorph/image005.jpg",alt:"图 2. 常量池各表的关系"}})]),a._v(" "),t("p",[a._v("可以看到，给定任意一个方法的索引，在常量池中找到对应的条目后，可以得到该方法的类索引（class_index）和名字类型索引 (name_and_type_index), 进而得到该方法所属的类型信息和名称及描述符信息（参数，返回值等）。注意到所有的常量字符串都是存储在 CONSTANT_Utf8_info 中供其他表索引的。")]),a._v(" "),t("h3",{attrs:{id:"方法表与方法调用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法表与方法调用"}},[a._v("#")]),a._v(" 方法表与方法调用")]),a._v(" "),t("p",[a._v("方法表是动态调用的核心，也是 Java 实现动态调用的主要方式。它被存储于方法区中的类型信息，包含有该类型所定义的所有方法及指向这些方法代码的指针，注意这些具体的方法代码可能是被覆写的方法，也可能是继承自基类的方法。")]),a._v(" "),t("p",[a._v("如有类定义 Person, Girl, Boy,")]),a._v(" "),t("h5",{attrs:{id:"清单-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#清单-1"}},[a._v("#")]),a._v(" 清单 1")]),a._v(" "),t("pre",{attrs:{name:"code"}},[a._v(' class Person { \n public String toString(){ \n    return "I\'m a person."; \n     } \n public void eat(){} \n public void speak(){} \n\n } \n\n class Boy extends Person{ \n public String toString(){ \n    return "I\'m a boy"; \n     } \n public void speak(){} \n public void fight(){} \n } \n\n class Girl extends Person{ \n public String toString(){ \n    return "I\'m a girl"; \n     } \n public void speak(){} \n public void sing(){} \n }')]),a._v(" "),t("p",[a._v("当这三个类被载入到 Java 虚拟机之后，方法区中就包含了各自的类的信息。Girl 和 Boy 在方法区中的方法表可表示如下：")]),a._v(" "),t("p",[a._v("图 3.Boy 和 Girl 的方法表")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.ibm.com/developerworks/cn/java/j-lo-polymorph/image007.jpg",alt:"图 3.Boy 和 Girl 的方法表"}})]),a._v(" "),t("p",[a._v("可以看到，Girl 和 Boy 的方法表包含继承自 Object 的方法，继承自直接父类 Person 的方法及各自新定义的方法。注意方法表条目指向的具体的方法地址，如 Girl 的继承自 Object 的方法中，只有 toString() 指向自己的实现（Girl 的方法代码），其余皆指向 Object 的方法代码；其继承自于 Person 的方法 eat() 和 speak() 分别指向 Person 的方法实现和本身的实现。")]),a._v(" "),t("p",[a._v("Person 或 Object 的任意一个方法，在它们的方法表和其子类 Girl 和 Boy 的方法表中的位置 (index) 是一样的。这样 JVM 在调用实例方法其实只需要指定调用方法表中的第几个方法即可。")]),a._v(" "),t("p",[a._v("如调用如下：")]),a._v(" "),t("p",[a._v("清单 2")]),a._v(" "),t("pre",{attrs:{name:"code"}},[a._v(" class Party{ \n…\n void happyHour(){ \n Person girl = new Girl(); \n girl.speak(); \n…\n     } \n }")]),a._v(" "),t("p",[a._v("当编译 Party 类的时候，生成 "),t("code",[a._v("girl.speak()")]),a._v("的方法调用假设为：")]),a._v(" "),t("p",[a._v("Invokevirtual #12")]),a._v(" "),t("p",[a._v("设该调用代码对应着 girl.speak(); #12 是 Party 类的常量池的索引。JVM 执行该调用指令的过程如下所示：")]),a._v(" "),t("p",[a._v("图 4. 解析调用过程")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.ibm.com/developerworks/cn/java/j-lo-polymorph/image009.jpg",alt:"图 4. 解析调用过程"}})]),a._v(" "),t("p",[a._v("JVM 首先查看 Party 的常量池索引为 12 的条目（应为 CONSTANT_Methodref_info 类型，可视为方法调用的符号引用），进一步查看常量池（CONSTANT_Class_info，CONSTANT_NameAndType_info ，CONSTANT_Utf8_info）可得出要调用的方法是 Person 的 speak 方法（注意引用 girl 是其基类 Person 类型），查看 Person 的方法表，得出 speak 方法在该方法表中的偏移量 15（offset），这就是该方法调用的直接引用。")]),a._v(" "),t("p",[a._v("当解析出方法调用的直接引用后（方法表偏移量 15），JVM 执行真正的方法调用：根据实例方法调用的参数 this 得到具体的对象（即 girl 所指向的位于堆中的对象），据此得到该对象对应的方法表 (Girl 的方法表 )，进而调用方法表中的某个偏移量所指向的方法（Girl 的 speak() 方法的实现）。")]),a._v(" "),t("h3",{attrs:{id:"接口调用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#接口调用"}},[a._v("#")]),a._v(" 接口调用")]),a._v(" "),t("p",[a._v("因为 Java 类是可以同时实现多个接口的，而当用接口引用调用某个方法的时候，情况就有所不同了。Java 允许一个类实现多个接口，从某种意义上来说相当于多继承，这样同样的方法在基类和派生类的方法表的位置就可能不一样了。")]),a._v(" "),t("p",[a._v("清单 3")]),a._v(" "),t("pre",{attrs:{name:"code"}},[a._v('interface IDance{ \n   void dance(); \n } \n\n class Person { \n public String toString(){ \n   return "I\'m a person."; \n     } \n public void eat(){} \n public void speak(){} \n\n } \n\n class Dancer extends Person \n implements IDance { \n public String toString(){ \n   return "I\'m a dancer."; \n     } \n public void dance(){} \n } \n\n class Snake implements IDance{ \n public String toString(){ \n   return "A snake."; \n     } \n public void dance(){ \n //snake dance \n     } \n }')]),a._v(" "),t("h5",{attrs:{id:"图-5-dancer-的方法表-查看大图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#图-5-dancer-的方法表-查看大图"}},[a._v("#")]),a._v(" 图 5.Dancer 的方法表（"),t("a",{attrs:{href:"https://www.ibm.com/developerworks/cn/java/j-lo-polymorph/image011.jpg",target:"_blank",rel:"noopener noreferrer"}},[a._v("查看大图"),t("OutboundLink")],1),a._v("）")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.ibm.com/developerworks/cn/java/j-lo-polymorph/image011_small.JPG",alt:"图 5.Dancer 的方法表"}})]),a._v(" "),t("p",[a._v("可以看到，由于接口的介入，继承自于接口 IDance 的方法 dance（）在类 Dancer 和 Snake 的方法表中的位置已经不一样了，显然我们无法通过给出方法表的偏移量来正确调用 Dancer 和 Snake 的这个方法。这也是 Java 中调用接口方法有其专有的调用指令（invokeinterface）的原因。")]),a._v(" "),t("p",[a._v("Java 对于接口方法的调用是采用搜索方法表的方式，对如下的方法调用")]),a._v(" "),t("p",[a._v("invokeinterface #13")]),a._v(" "),t("p",[a._v("JVM 首先查看常量池，确定方法调用的符号引用（名称、返回值等等），然后利用 this 指向的实例得到该实例的方法表，进而搜索方法表来找到合适的方法地址。")]),a._v(" "),t("p",[a._v("因为每次接口调用都要搜索方法表，所以从效率上来说，接口方法的调用总是慢于类方法的调用的。")]),a._v(" "),t("p",[a._v("执行结果如下：\n"),t("img",{attrs:{src:"https://img-blog.csdn.net/20160330162239971",alt:"这里写图片描述"}}),a._v("\n可以看到"),t("code",[a._v("System.out.println(dancer);")]),a._v(" 调用的是Person的toString方法。")]),a._v(" "),t("h2",{attrs:{id:"继承的实现原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#继承的实现原理"}},[a._v("#")]),a._v(" 继承的实现原理")]),a._v(" "),t("p",[a._v("Java 的继承机制是一种复用类的技术，从原理上来说，是更好的使用了组合技术，因此要理解继承，首先需要了解类的组合技术是如何实现类的复用的。")]),a._v(" "),t("p",[a._v("使用组合技术复用类\n假设现在的需求是要创建一个具有基本类型，String 类型以及一个其他非基本类型的对象。该如何处理呢？")]),a._v(" "),t("p",[a._v("对于基本类型的变量，在新类中成员变量处直接定义即可，但对于非基本类型变量，不仅需要在类中声明其引用，并且还需要手动初始化这个对象。")]),a._v(" "),t("p",[a._v("这里需要注意的是，编译器并不会默认将所有的引用都创建对象，因为这样的话在很多情况下会增加不必要的负担，因此，在合适的时机初始化合适的对象，可以通过以下几个位置做初始化操作：")]),a._v(" "),t("p",[a._v("在定义对象的地方，先于构造方法执行。\n在构造方法中。\n在正要使用之前，这个被称为惰性初始化。\n使用实例初始化。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v('class Soap {\n    private String s;\n    Soap() {\n        System.out.println("Soap()");\n        s = "Constructed";\n    }\n    public String tiString(){\n        return s;\n    }\n}\n\npublic class Bath {\n    // s1 初始化先于构造函数\n    private String s1 = "Happy", s2 = "Happy", s3, s4;\n    private Soap soap;\n    private int i;\n    private float f;\n    \n    public Both() {\n        System.out.println("inSide Both");\n        s3 = "Joy";\n        f = 3.14f;\n        soap = new Soap();\n    }\n    \n    {\n        i = 88;\n    }\n    \n    public String toString() {\n        if(s4 == null){\n            s4 = "Joy"\n        }\n        return "s1 = " + s1 +"\\n" +\n               "s2 = " + s2 +"\\n" +\n               "s3 = " + s3 +"\\n" +\n               "s4 = " + s4 +"\\n" +\n               "i = " + i +"\\n" +\n               "f = " + f +"\\n" +\n               "soap = " + soap;\n    }\n}\n')])])]),t("p",[a._v("继承\nJava 中的继承由 extend 关键字实现，组合的语法比较平实，而继承是一种特殊的语法。当一个类继承自另一个类时，那么这个类就可以拥有另一个类的域和方法。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v('class Cleanser{\n    private String s = "Cleanser";\n    \n    public void append(String a){\n        s += a;\n    }\n    public void apply(){\n        append("apply");\n    }\n    public void scrub(){\n        append("scrub");\n    }\n    public String toString(){\n        return s;\n    }\n    public static void main(String args){\n        Cleanser c = new Cleanser();\n        \n        c.apply();\n        System.out.println(c);\n    }\n}\n\npublic class Deter extends Cleanser{\n    public void apply(){\n        append("Deter.apply");\n        super.scrub();\n    }\n    public void foam(){\n        append("foam");\n    }\n    public static void main(String args){\n        Deter d = new Deter();\n        \n        d.apply();\n        d.scrub();\n        d.foam();\n        System.out.println(d);\n        Cleanser.main(args);\n    }\n}\n')])])]),t("p",[a._v("上面的代码中，展示了继承语法中的一些特性：")]),a._v(" "),t("p",[a._v("子类可以直接使用父类中公共的方法和成员变量（通常为了保护数据域，成员变量均为私有）\n子类中可以覆盖父类中的方法，也就是子类重写了父类的方法，此时若还需要调用被覆盖的父类的方法，则需要用到 super 来指定是调用父类中的方法。\n子类中可以自定义父类中没有的方法。\n可以发现上面两个类中均有 main 方法，命令行中调用的哪个类就执行哪个类的 main 方法，例如：java Deter。\n继承语法的原理\n接下来我们将通过创建子类对象来分析继承语法在我们看不到的地方做了什么样的操作。")]),a._v(" "),t("p",[a._v("可以先思考一下，如何理解使用子类创建的对象呢，首先这个对象中包含子类的所有信息，但是也包含父类的所有公共的信息。")]),a._v(" "),t("p",[a._v("下面来看一段代码，观察一下子类在创建对象初始化的时候，会不会用到父类相关的方法。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v('class Art{\n    Art() {\n        System.out.println("Art Construct");\n    }\n}\n\nclass Drawing extends Art {\n    Drawing() {\n        System.out.println("Drawing Construct");\n    }\n}\n\npublic class Cartoon extends Drawing {\n    public Cartoon() {\n        System.out.println("Cartoon construct");\n    }\n    public void static main(String args) {\n        Cartoon c = new Cartoon();\n    }\n}\n/*output:\nArt Construct\nDrawing Construct\nCartoon construct\n*/\n')])])]),t("p",[a._v("通过观察代码可以发现，在实例化Cartoon时，事实上是从最顶层的父类开始向下逐个实例化，也就是最终实例化了三个对象。编译器会默认在子类的构造方法中增加调用父类默认构造方法的代码。")]),a._v(" "),t("p",[a._v("因此，继承可以理解为编译器帮我们完成了类的特殊组合技术，即在子类中存在一个父类的对象，使得我们可以用子类对象调用父类的方法。而在开发者看来只不过是使用了一个关键字。")]),a._v(" "),t("p",[a._v("注意：虽然继承很接近组合技术，但是继承拥有其他更多的区别于组合的特性，例如父类的对象我们是不可见的，对于父类中的方法也做了相应的权限校验等。")]),a._v(" "),t("p",[a._v("那么，如果类中的构造方法是带参的，该如何操作呢？（使用super关键字显示调用）")]),a._v(" "),t("p",[a._v("见代码：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v('class Game {\n    Game(int i){\n        System.out.println("Game Construct");\n    }\n}\n\nclass BoardGame extends Game {\n    BoardGame(int j){\n        super(j);\n        System.out.println("BoardGame Construct");\n    }\n}\npublic class Chess extends BoardGame{\n    Chess(){\n        super(99);\n        System.out.println("Chess construct");\n    }\n    public static void main(String args) {\n        Chess c = new Chess();\n    }\n}\n/*output:\nGame Construct\nBoardGame Construct\nChess construc\n*/\n')])])]),t("h2",{attrs:{id:"重载和重写的实现原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重载和重写的实现原理"}},[a._v("#")]),a._v(" 重载和重写的实现原理")]),a._v(" "),t("p",[a._v("刚开始学习Java的时候，就了解了Java这个比较有意思的特性：重写 和 重载。开始的有时候从名字上还总是容易弄混。我相信熟悉Java这门语言的同学都应该了解这两个特性，可能只是从语言层面上了解这种写法，但是jvm是如何实现他们的呢 ?")]),a._v(" "),t("p",[a._v("重载官方给出的介绍：")]),a._v(" "),t("blockquote",[t("p",[a._v("一.  overload:\nThe Java programming language supports overloading methods, and Java can distinguish between methods with different method signatures. This means that methods within a class can have the same name if they have different parameter lists .")]),a._v(" "),t("p",[a._v("Overloaded methods are differentiated by the number and the type of the arguments passed into the method.")]),a._v(" "),t("p",[a._v("You cannot declare more than one method with the same name and the same number and type of arguments, because the compiler cannot tell them apart.")]),a._v(" "),t("p",[a._v("The compiler does not consider return type when differentiating methods, so you cannot declare two methods with the same signature even if they have a different return type.")])]),a._v(" "),t("p",[a._v("首先看一段代码，来看看代码的执行结果：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v('public class OverrideTest {\n \n    class Father{}\n \n    class Sun extends Father {}\n \n    public void doSomething(Father father){\n        System.out.println("Father do something");\n    }\n \n    public void doSomething(Sun father){\n        System.out.println("Sun do something");\n    }\n \n    public static void main(String [] args){\n        OverrideTest overrideTest = new OverrideTest();\n        Father sun = overrideTest.new Sun();\n        Father father = overrideTest.new Father();\n        overrideTest.doSomething(father);\n        overrideTest.doSomething(sun);\n    }\n}\n')])])]),t("p",[a._v("看下这段代码的执行结果，最后会打印：")]),a._v(" "),t("p",[a._v("Father do something\nFather do something")]),a._v(" "),t("p",[a._v("为什么会打印出这样的结果呢？ 首先要介绍两个概念：静态分派和动态分派")]),a._v(" "),t("p",[a._v("静态分派：依赖静态类型来定位方法执行版本的分派动作称为静态分派")]),a._v(" "),t("p",[a._v("动态分派：运行期根据实际类型确定方法执行版本的分派过程。")]),a._v(" "),t("p",[a._v("他们的区别是：")]),a._v(" "),t("p",[a._v("1.  静态分派发生在编译期，动态分派发生在运行期；")]),a._v(" "),t("p",[a._v("2.  private,static,final 方法发生在编译期，并且不能被重写，一旦发生了重写，将会在运行期处理。")]),a._v(" "),t("p",[a._v("3.  重载是静态分派，重写是动态分派")]),a._v(" "),t("p",[a._v("回到上面的问题，因为重载是发生在编译期，所以在编译期已经确定两次 doSomething 方法的参数都是Father类型，在class文件中已经指向了Father类的符号引用，所以最后会打印两次Father do something。")]),a._v(" "),t("blockquote",[t("p",[a._v("二. override:\nAn instance method in a subclass with the same signature (name, plus the number and the type of its parameters) and return type as an instance method in the superclass overrides the superclass's method.")]),a._v(" "),t("p",[a._v('The ability of a subclass to override a method allows a class to inherit from a superclass whose behavior is "close enough" and then to modify behavior as needed. The overriding method has the same name, number and type of parameters, and return type as the method that it overrides. An overriding method can also return a subtype of the type returned by the overridden method. This subtype is called a covariant return type.')])]),a._v(" "),t("p",[a._v("还是上面那个代码，稍微改动下")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v('public class OverrideTest {\n \n    class Father{}\n \n    class Sun extends Father {}\n \n    public void doSomething(){\n        System.out.println("Father do something");\n    }\n \n    public void doSomething(){\n        System.out.println("Sun do something");\n    }\n \n    public static void main(String [] args){\n        OverrideTest overrideTest = new OverrideTest();\n        Father sun = overrideTest.new Sun();\n        Father father = overrideTest.new Father();\n        overrideTest.doSomething();\n        overrideTest.doSomething();\n    }\n}\n')])])]),t("p",[a._v("​\n最后会打印：")]),a._v(" "),t("p",[a._v("Father do something")]),a._v(" "),t("p",[a._v("Sun do something")]),a._v(" "),t("p"),a._v(" "),t("p",[a._v("相信大家都会知道这个结果，那么这个结果jvm是怎么实现的呢？")]),a._v(" "),t("p",[a._v("在编译期，只会识别到是调用Father类的doSomething方法，到运行期才会真正找到对象的实际类型。")]),a._v(" "),t("p",[a._v("首先该方法的执行，jvm会调用invokevirtual指令，该指令会找栈顶第一个元素所指向的对象的实际类型，如果该类型存在调用的方法，则会走验证流程，否则继续找其父类。这也是为什么子类可以直接调用父类具有访问权限的方法的原因。简而言之，就是在运行期才会去确定对象的实际类型，根据这个实际类型确定方法执行版本，这个过程称为动态分派。override 的实现依赖jvm的动态分派。")]),a._v(" "),t("h2",{attrs:{id:"参考文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[a._v("#")]),a._v(" 参考文章")]),a._v(" "),t("p",[a._v("https://blog.csdn.net/dj_dengjian/article/details/80811348\nhttps://blog.csdn.net/chenssy/article/details/12757911\nhttps://blog.csdn.net/fan2012huan/article/details/51007517\nhttps://blog.csdn.net/fan2012huan/article/details/50999777\nhttps://www.cnblogs.com/serendipity-fly/p/9469289.html\nhttps://blog.csdn.net/m0_37264516/article/details/86709537")]),a._v(" "),t("h2",{attrs:{id:"微信公众号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微信公众号"}},[a._v("#")]),a._v(" 微信公众号")]),a._v(" "),t("h3",{attrs:{id:"java技术江湖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java技术江湖"}},[a._v("#")]),a._v(" Java技术江湖")]),a._v(" "),t("p",[a._v("如果大家想要实时关注我更新的文章以及分享的干货的话，可以关注我的公众号【Java技术江湖】一位阿里 Java 工程师的技术小站，作者黄小斜，专注 Java 相关技术：SSM、SpringBoot、MySQL、分布式、中间件、集群、Linux、网络、多线程，偶尔讲点Docker、ELK，同时也分享技术干货和学习经验，致力于Java全栈开发！")]),a._v(" "),t("p",[t("strong",[a._v("Java工程师必备学习资源:")]),a._v(" 一些Java工程师常用学习资源，关注公众号后，后台回复关键字 "),t("strong",[a._v("“Java”")]),a._v(" 即可免费无套路获取。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190805090108984.jpg",alt:"我的公众号"}})]),a._v(" "),t("h3",{attrs:{id:"个人公众号-黄小斜"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#个人公众号-黄小斜"}},[a._v("#")]),a._v(" 个人公众号：黄小斜")]),a._v(" "),t("p",[a._v("作者是 985 硕士，蚂蚁金服 JAVA 工程师，专注于 JAVA 后端技术栈：SpringBoot、MySQL、分布式、中间件、微服务，同时也懂点投资理财，偶尔讲点算法和计算机理论基础，坚持学习和写作，相信终身学习的力量！")]),a._v(" "),t("p",[t("strong",[a._v("程序员3T技术学习资源：")]),a._v(" 一些程序员学习技术的资源大礼包，关注公众号后，后台回复关键字 "),t("strong",[a._v("“资料”")]),a._v(" 即可免费无套路获取。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190829222750556.jpg",alt:""}})])])}),[],!1,null,null,null);n.default=r.exports}}]);