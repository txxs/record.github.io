(window.webpackJsonp=window.webpackJsonp||[]).push([[531],{929:function(s,t,a){"use strict";a.r(t);var n=a(13),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("JDK 提供的这些容器大部分在 "),a("code",[s._v("java.util.concurrent")]),s._v(" 包中。")]),s._v(" "),a("ul",[a("li",[a("strong",[a("code",[s._v("ConcurrentHashMap")])]),s._v(" : 线程安全的 "),a("code",[s._v("HashMap")])]),s._v(" "),a("li",[a("strong",[a("code",[s._v("CopyOnWriteArrayList")])]),s._v(" : 线程安全的 "),a("code",[s._v("List")]),s._v("，在读多写少的场合性能非常好，远远好于 "),a("code",[s._v("Vector")]),s._v("。")]),s._v(" "),a("li",[a("strong",[a("code",[s._v("ConcurrentLinkedQueue")])]),s._v(" : 高效的并发队列，使用链表实现。可以看做一个线程安全的 "),a("code",[s._v("LinkedList")]),s._v("，这是一个非阻塞队列。")]),s._v(" "),a("li",[a("strong",[a("code",[s._v("BlockingQueue")])]),s._v(" : 这是一个接口，JDK 内部通过链表、数组等方式实现了这个接口。表示阻塞队列，非常适合用于作为数据共享的通道。")]),s._v(" "),a("li",[a("strong",[a("code",[s._v("ConcurrentSkipListMap")])]),s._v(" : 跳表的实现。这是一个 Map，使用跳表的数据结构进行快速查找。")])]),s._v(" "),a("h2",{attrs:{id:"concurrenthashmap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concurrenthashmap"}},[s._v("#")]),s._v(" ConcurrentHashMap")]),s._v(" "),a("p",[s._v("我们知道 "),a("code",[s._v("HashMap")]),s._v(" 不是线程安全的，在并发场景下如果要保证一种可行的方式是使用 "),a("code",[s._v("Collections.synchronizedMap()")]),s._v(" 方法来包装我们的 "),a("code",[s._v("HashMap")]),s._v("。但这是通过使用一个全局的锁来同步不同线程间的并发访问，因此会带来不可忽视的性能问题。")]),s._v(" "),a("p",[s._v("所以就有了 "),a("code",[s._v("HashMap")]),s._v(" 的线程安全版本—— "),a("code",[s._v("ConcurrentHashMap")]),s._v(" 的诞生。")]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("ConcurrentHashMap")]),s._v(" 中，无论是读操作还是写操作都能保证很高的性能：在进行读操作时(几乎)不需要加锁，而在写操作时通过锁分段技术只对所操作的段加锁而不影响客户端对其它段的访问。")]),s._v(" "),a("h2",{attrs:{id:"copyonwritearraylist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyonwritearraylist"}},[s._v("#")]),s._v(" CopyOnWriteArrayList")]),s._v(" "),a("h3",{attrs:{id:"copyonwritearraylist-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyonwritearraylist-简介"}},[s._v("#")]),s._v(" CopyOnWriteArrayList 简介")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CopyOnWriteArrayList")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RandomAccess")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cloneable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Serializable")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("在很多应用场景中，读操作可能会远远大于写操作。由于读操作根本不会修改原有的数据，因此对于每次读取都进行加锁其实是一种资源浪费。我们应该允许多个线程同时访问 "),a("code",[s._v("List")]),s._v(" 的内部数据，毕竟读取操作是安全的。")]),s._v(" "),a("p",[s._v("这和我们之前在多线程章节讲过 "),a("code",[s._v("ReentrantReadWriteLock")]),s._v(" 读写锁的思想非常类似，也就是读读共享、写写互斥、读写互斥、写读互斥。JDK 中提供了 "),a("code",[s._v("CopyOnWriteArrayList")]),s._v(" 类比相比于在读写锁的思想又更进一步。为了将读取的性能发挥到极致，"),a("code",[s._v("CopyOnWriteArrayList")]),s._v(" 读取是完全不用加锁的，并且更厉害的是：写入也不会阻塞读取操作。只有写入和写入之间需要进行同步等待。这样一来，读操作的性能就会大幅度提升。"),a("strong",[s._v("那它是怎么做的呢？")])]),s._v(" "),a("h3",{attrs:{id:"copyonwritearraylist-是如何做到的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyonwritearraylist-是如何做到的"}},[s._v("#")]),s._v(" CopyOnWriteArrayList 是如何做到的？")]),s._v(" "),a("p",[a("code",[s._v("CopyOnWriteArrayList")]),s._v(" 类的所有可变操作（add，set 等等）都是通过创建底层数组的新副本来实现的。当 List 需要被修改的时候，我并不修改原有内容，而是对原有数据进行一次复制，将修改的内容写入副本。写完之后，再将修改完的副本替换原来的数据，这样就可以保证写操作不会影响读操作了。")]),s._v(" "),a("p",[s._v("从 "),a("code",[s._v("CopyOnWriteArrayList")]),s._v(" 的名字就能看出 "),a("code",[s._v("CopyOnWriteArrayList")]),s._v(" 是满足 "),a("code",[s._v("CopyOnWrite")]),s._v(" 的。所谓 "),a("code",[s._v("CopyOnWrite")]),s._v(" 也就是说：在计算机，如果你想要对一块内存进行修改时，我们不在原有内存块中进行写操作，而是将内存拷贝一份，在新的内存中进行写操作，写完之后呢，就将指向原来内存指针指向新的内存，原来的内存就可以被回收掉了。")]),s._v(" "),a("h3",{attrs:{id:"copyonwritearraylist-读取和写入源码简单分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyonwritearraylist-读取和写入源码简单分析"}},[s._v("#")]),s._v(" CopyOnWriteArrayList 读取和写入源码简单分析")]),s._v(" "),a("h4",{attrs:{id:"copyonwritearraylist-读取操作的实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyonwritearraylist-读取操作的实现"}},[s._v("#")]),s._v(" CopyOnWriteArrayList 读取操作的实现")]),s._v(" "),a("p",[s._v("读取操作没有任何同步控制和锁操作，理由就是内部数组 "),a("code",[s._v("array")]),s._v(" 不会发生修改，只会被另外一个 "),a("code",[s._v("array")]),s._v(" 替换，因此可以保证数据安全。")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/** The array, accessed only via getArray/setArray. */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("transient")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("volatile")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@SuppressWarnings")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"unchecked"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h4",{attrs:{id:"_3-3-2-copyonwritearraylist-写入操作的实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-copyonwritearraylist-写入操作的实现"}},[s._v("#")]),s._v(" 3.3.2 CopyOnWriteArrayList 写入操作的实现")]),s._v(" "),a("p",[a("code",[s._v("CopyOnWriteArrayList")]),s._v(" 写入操作 "),a("code",[s._v("add()")]),s._v("方法在添加集合的时候加了锁，保证了同步，避免了多线程写的时候会 copy 出多个副本出来。")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * Appends the specified element to the end of this list.\n     *\n     * @param e element to be appended to this list\n     * @return {@code true} (as specified by {@link Collection#add})\n     */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),s._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ReentrantLock")]),s._v(" lock "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        lock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("lock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//加锁")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" elements "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" len "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" elements"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" newElements "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Arrays")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("copyOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("elements"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" len "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//拷贝新数组")]),s._v("\n            newElements"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("len"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("newElements"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("finally")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            lock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("unlock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//释放锁")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("h2",{attrs:{id:"concurrentlinkedqueue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concurrentlinkedqueue"}},[s._v("#")]),s._v(" ConcurrentLinkedQueue")]),s._v(" "),a("p",[s._v("Java 提供的线程安全的 "),a("code",[s._v("Queue")]),s._v(" 可以分为"),a("strong",[s._v("阻塞队列")]),s._v("和"),a("strong",[s._v("非阻塞队列")]),s._v("，其中阻塞队列的典型例子是 "),a("code",[s._v("BlockingQueue")]),s._v("，非阻塞队列的典型例子是 "),a("code",[s._v("ConcurrentLinkedQueue")]),s._v("，在实际应用中要根据实际需要选用阻塞队列或者非阻塞队列。 "),a("strong",[s._v("阻塞队列可以通过加锁来实现，非阻塞队列可以通过 CAS 操作实现。")])]),s._v(" "),a("p",[s._v("从名字可以看出，"),a("code",[s._v("ConcurrentLinkedQueue")]),s._v("这个队列使用链表作为其数据结构．"),a("code",[s._v("ConcurrentLinkedQueue")]),s._v(" 应该算是在高并发环境中性能最好的队列了。它之所有能有很好的性能，是因为其内部复杂的实现。")]),s._v(" "),a("p",[a("code",[s._v("ConcurrentLinkedQueue")]),s._v(" 内部代码我们就不分析了，大家知道 "),a("code",[s._v("ConcurrentLinkedQueue")]),s._v(" 主要使用 CAS 非阻塞算法来实现线程安全就好了。")]),s._v(" "),a("p",[a("code",[s._v("ConcurrentLinkedQueue")]),s._v(" 适合在对性能要求相对较高，同时对队列的读写存在多个线程同时进行的场景，即如果对队列加锁的成本较高则适合使用无锁的 "),a("code",[s._v("ConcurrentLinkedQueue")]),s._v(" 来替代。")]),s._v(" "),a("h2",{attrs:{id:"blockingqueue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blockingqueue"}},[s._v("#")]),s._v(" BlockingQueue")]),s._v(" "),a("h3",{attrs:{id:"blockingqueue-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blockingqueue-简介"}},[s._v("#")]),s._v(" BlockingQueue 简介")]),s._v(" "),a("p",[s._v("上面我们己经提到了 "),a("code",[s._v("ConcurrentLinkedQueue")]),s._v(" 作为高性能的非阻塞队列。下面我们要讲到的是阻塞队列——"),a("code",[s._v("BlockingQueue")]),s._v("。阻塞队列（"),a("code",[s._v("BlockingQueue")]),s._v("）被广泛使用在“生产者-消费者”问题中，其原因是 "),a("code",[s._v("BlockingQueue")]),s._v(" 提供了可阻塞的插入和移除的方法。当队列容器已满，生产者线程会被阻塞，直到队列未满；当队列容器为空时，消费者线程会被阻塞，直至队列非空时为止。")]),s._v(" "),a("p",[a("code",[s._v("BlockingQueue")]),s._v(" 是一个接口，继承自 "),a("code",[s._v("Queue")]),s._v("，所以其实现类也可以作为 "),a("code",[s._v("Queue")]),s._v(" 的实现来使用，而 "),a("code",[s._v("Queue")]),s._v(" 又继承自 "),a("code",[s._v("Collection")]),s._v(" 接口。下面是 "),a("code",[s._v("BlockingQueue")]),s._v(" 的相关实现类：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-12-9/51622268.jpg",alt:"BlockingQueue 的实现类"}})]),s._v(" "),a("p",[s._v("下面主要介绍一下 3 个常见的 "),a("code",[s._v("BlockingQueue")]),s._v(" 的实现类："),a("code",[s._v("ArrayBlockingQueue")]),s._v("、"),a("code",[s._v("LinkedBlockingQueue")]),s._v(" 、"),a("code",[s._v("PriorityBlockingQueue")]),s._v(" 。")]),s._v(" "),a("h3",{attrs:{id:"arrayblockingqueue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arrayblockingqueue"}},[s._v("#")]),s._v(" ArrayBlockingQueue")]),s._v(" "),a("p",[a("code",[s._v("ArrayBlockingQueue")]),s._v(" 是 "),a("code",[s._v("BlockingQueue")]),s._v(" 接口的有界队列实现类，底层采用数组来实现。")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArrayBlockingQueue")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AbstractQueue")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BlockingQueue")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Serializable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("code",[s._v("ArrayBlockingQueue")]),s._v(" 一旦创建，容量不能改变。其并发控制采用可重入锁 "),a("code",[s._v("ReentrantLock")]),s._v(" ，不管是插入操作还是读取操作，都需要获取到锁才能进行操作。当队列容量满时，尝试将元素放入队列将导致操作阻塞;尝试从一个空队列中取一个元素也会同样阻塞。")]),s._v(" "),a("p",[a("code",[s._v("ArrayBlockingQueue")]),s._v(" 默认情况下不能保证线程访问队列的公平性，所谓公平性是指严格按照线程等待的绝对时间顺序，即最先等待的线程能够最先访问到 "),a("code",[s._v("ArrayBlockingQueue")]),s._v("。而非公平性则是指访问 "),a("code",[s._v("ArrayBlockingQueue")]),s._v(" 的顺序不是遵守严格的时间顺序，有可能存在，当 "),a("code",[s._v("ArrayBlockingQueue")]),s._v(" 可以被访问时，长时间阻塞的线程依然无法访问到 "),a("code",[s._v("ArrayBlockingQueue")]),s._v("。如果保证公平性，通常会降低吞吐量。如果需要获得公平性的 "),a("code",[s._v("ArrayBlockingQueue")]),s._v("，可采用如下代码：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArrayBlockingQueue")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" blockingQueue "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArrayBlockingQueue")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"linkedblockingqueue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linkedblockingqueue"}},[s._v("#")]),s._v(" LinkedBlockingQueue")]),s._v(" "),a("p",[a("code",[s._v("LinkedBlockingQueue")]),s._v(" 底层基于"),a("strong",[s._v("单向链表")]),s._v("实现的阻塞队列，可以当做无界队列也可以当做有界队列来使用，同样满足 FIFO 的特性，与 "),a("code",[s._v("ArrayBlockingQueue")]),s._v(" 相比起来具有更高的吞吐量，为了防止 "),a("code",[s._v("LinkedBlockingQueue")]),s._v(" 容量迅速增，损耗大量内存。通常在创建 "),a("code",[s._v("LinkedBlockingQueue")]),s._v(" 对象时，会指定其大小，如果未指定，容量等于 "),a("code",[s._v("Integer.MAX_VALUE")]),s._v(" 。")]),s._v(" "),a("p",[a("strong",[s._v("相关构造方法:")])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     *某种意义上的无界队列\n     * Creates a {@code LinkedBlockingQueue} with a capacity of\n     * {@link Integer#MAX_VALUE}.\n     */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LinkedBlockingQueue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MAX_VALUE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     *有界队列\n     * Creates a {@code LinkedBlockingQueue} with the given (fixed) capacity.\n     *\n     * @param capacity the capacity of this queue\n     * @throws IllegalArgumentException if {@code capacity} is not greater\n     *         than zero\n     */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LinkedBlockingQueue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" capacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("capacity "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IllegalArgumentException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("capacity "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" capacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        last "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" head "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("h3",{attrs:{id:"priorityblockingqueue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#priorityblockingqueue"}},[s._v("#")]),s._v(" PriorityBlockingQueue")]),s._v(" "),a("p",[a("code",[s._v("PriorityBlockingQueue")]),s._v(" 是一个支持优先级的无界阻塞队列。默认情况下元素采用自然顺序进行排序，也可以通过自定义类实现 "),a("code",[s._v("compareTo()")]),s._v(" 方法来指定元素排序规则，或者初始化时通过构造器参数 "),a("code",[s._v("Comparator")]),s._v(" 来指定排序规则。")]),s._v(" "),a("p",[a("code",[s._v("PriorityBlockingQueue")]),s._v(" 并发控制采用的是可重入锁 "),a("code",[s._v("ReentrantLock")]),s._v("，队列为无界队列（"),a("code",[s._v("ArrayBlockingQueue")]),s._v(" 是有界队列，"),a("code",[s._v("LinkedBlockingQueue")]),s._v(" 也可以通过在构造函数中传入 "),a("code",[s._v("capacity")]),s._v(" 指定队列最大的容量，但是 "),a("code",[s._v("PriorityBlockingQueue")]),s._v(" 只能指定初始的队列大小，后面插入元素的时候，"),a("strong",[s._v("如果空间不够的话会自动扩容")]),s._v("）。")]),s._v(" "),a("p",[s._v("简单地说，它就是 "),a("code",[s._v("PriorityQueue")]),s._v(" 的线程安全版本。不可以插入 null 值，同时，插入队列的对象必须是可比较大小的（comparable），否则报 "),a("code",[s._v("ClassCastException")]),s._v(" 异常。它的插入操作 put 方法不会 block，因为它是无界队列（take 方法在队列为空的时候会阻塞）。")]),s._v(" "),a("p",[a("strong",[s._v("推荐文章：")]),s._v(" "),a("a",{attrs:{href:"https://javadoop.com/post/java-concurrent-queue",target:"_blank",rel:"noopener noreferrer"}},[s._v("《解读 Java 并发队列 BlockingQueue》"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"concurrentskiplistmap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concurrentskiplistmap"}},[s._v("#")]),s._v(" ConcurrentSkipListMap")]),s._v(" "),a("p",[s._v("下面这部分内容参考了极客时间专栏"),a("a",{attrs:{href:"https://time.geekbang.org/column/intro/126?code=zl3GYeAsRI4rEJIBNu5B/km7LSZsPDlGWQEpAYw5Vu0=&utm_term=SPoster",title:"《数据结构与算法之美》",target:"_blank",rel:"noopener noreferrer"}},[s._v("《数据结构与算法之美》"),a("OutboundLink")],1),s._v("以及《实战 Java 高并发程序设计》。")]),s._v(" "),a("p",[s._v("为了引出 "),a("code",[s._v("ConcurrentSkipListMap")]),s._v("，先带着大家简单理解一下跳表。")]),s._v(" "),a("p",[s._v("对于一个单链表，即使链表是有序的，如果我们想要在其中查找某个数据，也只能从头到尾遍历链表，这样效率自然就会很低，跳表就不一样了。跳表是一种可以用来快速查找的数据结构，有点类似于平衡树。它们都可以对元素进行快速的查找。但一个重要的区别是：对平衡树的插入和删除往往很可能导致平衡树进行一次全局的调整。而对跳表的插入和删除只需要对整个数据结构的局部进行操作即可。这样带来的好处是：在高并发的情况下，你会需要一个全局锁来保证整个平衡树的线程安全。而对于跳表，你只需要部分锁即可。这样，在高并发环境下，你就可以拥有更好的性能。而就查询的性能而言，跳表的时间复杂度也是 "),a("strong",[s._v("O(logn)")]),s._v(" 所以在并发数据结构中，JDK 使用跳表来实现一个 Map。")]),s._v(" "),a("p",[s._v("跳表的本质是同时维护了多个链表，并且链表是分层的，")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-12-9/93666217.jpg",alt:"2级索引跳表"}})]),s._v(" "),a("p",[s._v("最低层的链表维护了跳表内所有的元素，每上面一层链表都是下面一层的子集。")]),s._v(" "),a("p",[s._v("跳表内的所有链表的元素都是排序的。查找时，可以从顶级链表开始找。一旦发现被查找的元素大于当前链表中的取值，就会转入下一层链表继续找。这也就是说在查找过程中，搜索是跳跃式的。如上图所示，在跳表中查找元素 18。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-12-9/32005738.jpg",alt:"在跳表中查找元素18"}})]),s._v(" "),a("p",[s._v("查找 18 的时候原来需要遍历 18 次，现在只需要 7 次即可。针对链表长度比较大的时候，构建索引查找效率的提升就会非常明显。")]),s._v(" "),a("p",[s._v("从上面很容易看出，"),a("strong",[s._v("跳表是一种利用空间换时间的算法。")])]),s._v(" "),a("p",[s._v("使用跳表实现 "),a("code",[s._v("Map")]),s._v(" 和使用哈希算法实现 "),a("code",[s._v("Map")]),s._v(" 的另外一个不同之处是：哈希并不会保存元素的顺序，而跳表内所有的元素都是排序的。因此在对跳表进行遍历时，你会得到一个有序的结果。所以，如果你的应用需要有序性，那么跳表就是你不二的选择。JDK 中实现这一数据结构的类是 "),a("code",[s._v("ConcurrentSkipListMap")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("ul",[a("li",[s._v("《实战 Java 高并发程序设计》")]),s._v(" "),a("li",[s._v("https://javadoop.com/post/java-concurrent-queue")]),s._v(" "),a("li",[s._v("https://juejin.im/post/5aeebd02518825672f19c546")])])])}),[],!1,null,null,null);t.default=e.exports}}]);