(window.webpackJsonp=window.webpackJsonp||[]).push([[574],{965:function(a,e,n){"use strict";n.r(e);var t=n(13),l=Object(t.a)({},(function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"table-of-contents"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[a._v("#")]),a._v(" Table of Contents")]),a._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#hashmap"}},[a._v("HashMap")]),a._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#%E5%AE%9A%E4%B9%89"}},[a._v("定义")])]),a._v(" "),n("li",[n("a",{attrs:{href:"#%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0"}},[a._v("构造函数")])]),a._v(" "),n("li",[n("a",{attrs:{href:"#%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84"}},[a._v("数据结构")])]),a._v(" "),n("li",[n("a",{attrs:{href:"#%E5%AD%98%E5%82%A8%E5%AE%9E%E7%8E%B0%EF%BC%9Aputkeyvlaue"}},[a._v("存储实现：put(key,vlaue)")])]),a._v(" "),n("li",[n("a",{attrs:{href:"#jdk18%E7%9A%84hashmap%EF%BC%9Aput%E6%96%B9%E6%B3%95"}},[a._v("JDK1.8的hashmap：put方法")])]),a._v(" "),n("li",[n("a",{attrs:{href:"#%E6%89%A9%E5%AE%B9"}},[a._v("扩容")])]),a._v(" "),n("li",[n("a",{attrs:{href:"#%E8%AF%BB%E5%8F%96%E5%AE%9E%E7%8E%B0%EF%BC%9Agetkey"}},[a._v("读取实现：get(key)")])])])]),a._v(" "),n("li",[n("a",{attrs:{href:"#hashtable"}},[a._v("HashTable")]),a._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#%E5%AE%9A%E4%B9%89-1"}},[a._v("定义")])]),a._v(" "),n("li",[n("a",{attrs:{href:"#%E6%9E%84%E9%80%A0%E6%96%B9%E6%B3%95"}},[a._v("构造方法")])]),a._v(" "),n("li",[n("a",{attrs:{href:"#%E4%B8%BB%E8%A6%81%E6%96%B9%E6%B3%95"}},[a._v("主要方法")])])])]),a._v(" "),n("li",[n("a",{attrs:{href:"#hashtable%E4%B8%8Ehashmap%E7%9A%84%E5%BC%82%E5%90%8C%E7%82%B9"}},[a._v("HashTable与HashMap的异同点")])]),a._v(" "),n("li",[n("a",{attrs:{href:"#%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%9Ahashmap%E5%92%8Chashtable%E7%9A%84%E5%8C%BA%E5%88%AB"}},[a._v("面试题：HashMap和HashTable的区别")])]),a._v(" "),n("li",[n("a",{attrs:{href:"#%E5%8F%82%E8%80%83%E6%96%87%E7%AB%A0"}},[a._v("参考文章")])]),a._v(" "),n("li",[n("a",{attrs:{href:"#%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7"}},[a._v("微信公众号")]),a._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#java%E6%8A%80%E6%9C%AF%E6%B1%9F%E6%B9%96"}},[a._v("Java技术江湖")])]),a._v(" "),n("li",[n("a",{attrs:{href:"#%E4%B8%AA%E4%BA%BA%E5%85%AC%E4%BC%97%E5%8F%B7%EF%BC%9A%E9%BB%84%E5%B0%8F%E6%96%9C"}},[a._v("个人公众号：黄小斜")])])])])]),a._v(" "),n("p",[a._v("本文参考http://cmsblogs.com/?p=176")]),a._v(" "),n("p",[a._v("《Java集合详解系列》是我在完成夯实Java基础篇的系列博客后准备开始整理的新系列文章。\n为了更好地诠释知识点，形成体系文章，本系列文章整理了很多优质的博客内容，如有侵权请联系我，一定删除。")]),a._v(" "),n("p",[a._v("这些文章将整理到我在GitHub上的《Java面试指南》仓库，更多精彩内容请到我的仓库里查看")]),a._v(" "),n("p",[a._v("如果对本系列文章有什么建议，或者是有什么疑问的话，也可以关注公众号【Java技术江湖】联系作者，欢迎你参与本系列博文的创作和修订。")]),a._v(" "),n("blockquote",[n("p",[a._v("https://github.com/h2pl/Java-Tutorial")])]),a._v(" "),n("p",[a._v("喜欢的话麻烦点下Star、fork哈")]),a._v(" "),n("p",[a._v("本系列文章将整理于我的个人博客：")]),a._v(" "),n("blockquote",[n("p",[a._v("www.how2playlife.com")])]),a._v(" "),n("h2",{attrs:{id:"hashmap"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hashmap"}},[a._v("#")]),a._v(" HashMap")]),a._v(" "),n("p",[a._v("HashMap也是我们使用非常多的Collection，它是基于哈希表的 Map 接口的实现，以key-value的形式存在。在HashMap中，key-value总是会当做一个整体来处理，系统会根据hash算法来来计算key-value的存储位置，我们总是可以通过key快速地存、取value。下面就来分析HashMap的存取。")]),a._v(" "),n("h3",{attrs:{id:"定义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[a._v("#")]),a._v(" 定义")]),a._v(" "),n("p",[a._v("HashMap实现了Map接口，继承AbstractMap。其中Map接口定义了键映射到值的规则，而AbstractMap类提供 Map 接口的骨干实现，以最大限度地减少实现此接口所需的工作，其实AbstractMap类已经实现了Map，这里标注Map LZ觉得应该是更加清晰吧！")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("public class HashMap<K,V>\n    extends AbstractMap<K,V>\n    implements Map<K,V>, Cloneable, Serializable\n")])])]),n("h3",{attrs:{id:"构造函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#构造函数"}},[a._v("#")]),a._v(" 构造函数")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("  HashMap提供了三个构造函数：\n\n  HashMap()：构造一个具有默认初始容量 (16) 和默认加载因子 (0.75) 的空 HashMap。\n\n  HashMap(int initialCapacity)：构造一个带指定初始容量和默认加载因子 (0.75) 的空 HashMap。\n\n  HashMap(int initialCapacity, float loadFactor)：构造一个带指定初始容量和加载因子的空 HashMap。\n")])])]),n("p",[a._v("在这里提到了两个参数：初始容量，加载因子。")]),a._v(" "),n("blockquote",[n("p",[a._v("这两个参数是影响HashMap性能的重要参数，其中容量表示哈希表中桶的数量，初始容量是创建哈希表时的容量，加载因子是哈希表在其容量自动增加之前可以达到多满的一种尺度，它衡量的是一个散列表的空间的使用程度，负载因子越大表示散列表的装填程度越高，反之愈小。")]),a._v(" "),n("p",[a._v("对于使用链表法的散列表来说，查找一个元素的平均时间是O(1+a)，因此如果负载因子越大，对空间的利用更充分，然而后果是查找效率的降低；如果负载因子太小，那么散列表的数据将过于稀疏，对空间造成严重浪费。系统默认负载因子为0.75，一般情况下我们是无需修改的。")])]),a._v(" "),n("p",[a._v("HashMap是一种支持快速存取的数据结构，要了解它的性能必须要了解它的数据结构。")]),a._v(" "),n("h3",{attrs:{id:"数据结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数据结构"}},[a._v("#")]),a._v(" 数据结构")]),a._v(" "),n("blockquote",[n("p",[a._v("我们知道在Java中最常用的两种结构是数组和模拟指针(引用)，几乎所有的数据结构都可以利用这两种来组合实现，HashMap也是如此。实际上HashMap是一个“链表散列”，如下是它的数据结构：")])]),a._v(" "),n("p",[a._v("HashMap数据结构图")]),a._v(" "),n("p",[a._v("下图的table数组的每个格子都是一个桶。负载因子就是map中的元素占用的容量百分比。比如负载因子是0.75，初始容量（桶数量）为16时，那么允许装填的元素最大个数就是16*0.75 = 12，这个最大个数也被成为阈值，就是map中定义的threshold。超过这个阈值时，map就会自动扩容。")]),a._v(" "),n("h3",{attrs:{id:"存储实现-put-key-vlaue"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#存储实现-put-key-vlaue"}},[a._v("#")]),a._v(" 存储实现：put(key,vlaue)")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("  首先我们先看源码\n\npublic V put(K key, V value) {\n        //当key为null，调用putForNullKey方法，保存null与table第一个位置中，这是HashMap允许为null的原因\n        if (key == null)\n            return putForNullKey(value);\n        //计算key的hash值，此处对原来元素的hashcode进行了再次hash\n        int hash = hash(key.hashCode());                  ------(1)\n        //计算key hash 值在 table 数组中的位置\n        int i = indexFor(hash, table.length);             ------(2)\n        //从i出开始迭代 e,找到 key 保存的位置\n        for (Entry<K, V> e = table[i]; e != null; e = e.next) {\n            Object k;\n            //判断该条链上是否有hash值相同的(key相同)\n            //若存在相同，则直接覆盖value，返回旧value\n            if (e.hash == hash && ((k = e.key) == key || key.equals(k))) {\n                V oldValue = e.value;    //旧值 = 新值\n                e.value = value;\n                e.recordAccess(this);\n                return oldValue;     //返回旧值\n            }\n        }\n        //修改次数增加1\n        modCount++;\n        //将key、value添加至i位置处\n        addEntry(hash, key, value, i);\n        return null;\n    }\n")])])]),n("p",[a._v("通过源码我们可以清晰看到HashMap保存数据的过程为：首先判断key是否为null，若为null，则直接调用putForNullKey方法。")]),a._v(" "),n("p",[a._v("若不为空则先计算key的hash值，然后根据hash值搜索在table数组中的索引位置，如果table数组在该位置处有元素，则通过比较是否存在相同的key，若存在则覆盖原来key的value，==否则将该元素保存在链头（最先保存的元素放在链尾）==。")]),a._v(" "),n("p",[a._v("若table在该处没有元素，则直接保存。这个过程看似比较简单，其实深有内幕。有如下几点：")]),a._v(" "),n("blockquote",[n("p",[a._v("1、 先看迭代处。此处迭代原因就是为了防止存在相同的key值，若发现两个hash值（key）相同时，HashMap的处理方式是用新value替换旧value，这里并没有处理key，这就解释了HashMap中没有两个相同的key。")]),a._v(" "),n("p",[a._v("2、 在看（1）、（2）处。这里是HashMap的精华所在。首先是hash方法，该方法为一个纯粹的数学计算，就是计算h的hash值。")])]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("static int hash(int h) {\n        h ^= (h >>> 20) ^ (h >>> 12);\n        return h ^ (h >>> 7) ^ (h >>> 4);\n    }\n")])])]),n("p",[a._v("我们知道对于HashMap的table而言，数据分布需要均匀（最好每项都只有一个元素，这样就可以直接找到），不能太紧也不能太松，太紧会导致查询速度慢，太松则浪费空间。计算hash值后，怎么才能保证table元素分布均与呢？我们会想到取模，但是由于取模的消耗较大，HashMap是这样处理的：调用indexFor方法。")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("static int indexFor(int h, int length) {\n        return h & (length-1);\n    }\n")])])]),n("p",[a._v("HashMap的底层数组长度总是2的n次方，在构造函数中存在：capacity <<= 1;这样做总是能够保证HashMap的底层数组长度为2的n次方。当length为2的n次方时，h&(length - 1)就相当于对length取模，而且速度比直接取模快得多，这是HashMap在速度上的一个优化。至于为什么是2的n次方下面解释。")]),a._v(" "),n("p",[a._v("==对length取模来得到hash是常用的hash索引方法，这里采用位运算的话效率更高。==")]),a._v(" "),n("p",[a._v("我们回到indexFor方法，该方法仅有一条语句：h&(length - 1)，这句话除了上面的取模运算外还有一个非常重要的责任：均匀分布table数据和充分利用空间。")]),a._v(" "),n("p",[a._v("这里我们假设length为16(2^n)和15，h为5、6、7。")]),a._v(" "),n("p",[a._v("当n=15时，6和7的结果一样，这样表示他们在table存储的位置是相同的，也就是产生了碰撞，6、7就会在一个位置形成链表，这样就会导致查询速度降低。诚然这里只分析三个数字不是很多，那么我们就看0-15。")]),a._v(" "),n("blockquote",[n("p",[a._v("而当length = 16时，length – 1 = 15 即1111，那么进行低位&运算时，值总是与原来hash值相同，而进行高位运算时，其值等于其低位值。所以说当length = 2^n时，不同的hash值发生碰撞的概率比较小，这样就会使得数据在table数组中分布较均匀，查询速度也较快。")]),a._v(" "),n("p",[a._v("这里我们再来复习put的流程：当我们想一个HashMap中添加一对key-value时，系统首先会计算key的hash值，然后根据hash值确认在table中存储的位置。若该位置没有元素，则直接插入。否则迭代该处元素链表并依此比较其key的hash值。")]),a._v(" "),n("p",[a._v("如果两个hash值相等且key值相等(e.hash == hash && ((k = e.key) == key || key.equals(k))),则用新的Entry的value覆盖原来节点的value。如果两个hash值相等但key值不等 ，则将该节点插入该链表的链头。具体的实现过程见addEntry方法，如下：")])]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("void addEntry(int hash, K key, V value, int bucketIndex) {\n        //获取bucketIndex处的Entry\n        Entry<K, V> e = table[bucketIndex];\n        //将新创建的 Entry 放入 bucketIndex 索引处，并让新的 Entry 指向原来的 Entry \n        table[bucketIndex] = new Entry<K, V>(hash, key, value, e);\n        //若HashMap中元素的个数超过极限了，则容量扩大两倍\n        if (size++ >= threshold)\n            resize(2 * table.length);\n    }\n")])])]),n("p",[a._v("这个方法中有两点需要注意：")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("后面添加的entry反而会接到前面。\n")])])]),n("p",[a._v("一、是链的产生。")]),a._v(" "),n("p",[a._v("这是一个非常优雅的设计。系统总是将新的Entry对象添加到bucketIndex处。如果bucketIndex处已经有了对象，那么新添加的Entry对象将指向原有的Entry对象，形成一条Entry链，但是若bucketIndex处没有Entry对象，也就是e==null,那么新添加的Entry对象指向null，也就不会产生Entry链了。")]),a._v(" "),n("p",[a._v("二、扩容问题。")]),a._v(" "),n("p",[a._v("随着HashMap中元素的数量越来越多，发生碰撞的概率就越来越大，所产生的链表长度就会越来越长，这样势必会影响HashMap的速度，为了保证HashMap的效率，系统必须要在某个临界点进行扩容处理。")]),a._v(" "),n("p",[a._v("该临界点在当HashMap中元素的数量等于table数组长度*加载因子。但是扩容是一个非常耗时的过程，因为它需要重新计算这些数据在新table数组中的位置并进行复制处理。所以如果我们已经预知HashMap中元素的个数，那么预设元素的个数能够有效的提高HashMap的性能。")]),a._v(" "),n("h3",{attrs:{id:"jdk1-8的hashmap-put方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jdk1-8的hashmap-put方法"}},[a._v("#")]),a._v(" JDK1.8的hashmap：put方法")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("final V putVal(int hash, K key, V value, boolean onlyIfAbsent,\n                   boolean evict) {\n        Node<K,V>[] tab; Node<K,V> p; int n, i;\n        if ((tab = table) == null || (n = tab.length) == 0)\n            n = (tab = resize()).length;\n        if ((p = tab[i = (n - 1) & hash]) == null)\n            tab[i] = newNode(hash, key, value, null);\n        else {\n            Node<K,V> e; K k;\n            if (p.hash == hash &&\n                ((k = p.key) == key || (key != null && key.equals(k))))\n                e = p;\n                //如果p是红黑树节点，则用另外的处理方法\n            else if (p instanceof TreeNode)\n                e = ((TreeNode<K,V>)p).putTreeVal(this, tab, hash, key, value);\n            else {\n                for (int binCount = 0; ; ++binCount) {\n                    if ((e = p.next) == null) {\n                        p.next = newNode(hash, key, value, null);\n                        if (binCount >= TREEIFY_THRESHOLD - 1) // -1 for 1st\n                        //当链表节点数超过8个，则直接进行红黑树化。\n                            treeifyBin(tab, hash);\n                        break;\n                    }\n                    if (e.hash == hash &&\n                        ((k = e.key) == key || (key != null && key.equals(k))))\n                        break;\n                    p = e;\n                }\n            }\n            if (e != null) { // existing mapping for key\n                V oldValue = e.value;\n                if (!onlyIfAbsent || oldValue == null)\n                    e.value = value;\n                afterNodeAccess(e);\n                return oldValue;\n            }\n        }\n        ++modCount;\n        if (++size > threshold)\n            resize();\n        afterNodeInsertion(evict);\n        return null;\n    }\n")])])]),n("p",[a._v("JDK1.8在链表长度超过8时会转换为红黑树。\n转换方法如下：")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("final void treeifyBin(Node<K,V>[] tab, int hash) {\n        int n, index; Node<K,V> e;\n        if (tab == null || (n = tab.length) < MIN_TREEIFY_CAPACITY)\n        //如果节点数变小小于红黑树的节点数阈值时，调整空间\n            resize();\n        else if ((e = tab[index = (n - 1) & hash]) != null) {\n            TreeNode<K,V> hd = null, tl = null;\n            do {\n            //该方法直接返回一个红黑树结点。\n                TreeNode<K,V> p = replacementTreeNode(e, null);\n                if (tl == null)\n                    hd = p;\n                else {\n                //从链表头开始依次插入红黑树\n                    p.prev = tl;\n                    tl.next = p;\n                }\n                tl = p;\n            } while ((e = e.next) != null);\n            if ((tab[index] = hd) != null)\n                hd.treeify(tab);\n        }\n    }\n    \n        // For treeifyBin\nTreeNode<K,V> replacementTreeNode(Node<K,V> p, Node<K,V> next) {\n    return new TreeNode<>(p.hash, p.key, p.value, next);\n}\n")])])]),n("h3",{attrs:{id:"扩容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#扩容"}},[a._v("#")]),a._v(" 扩容")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v('final Node<K,V>[] resize() {\n        Node<K,V>[] oldTab = table;\n        int oldCap = (oldTab == null) ? 0 : oldTab.length;\n        int oldThr = threshold;\n        int newCap, newThr = 0;\n        if (oldCap > 0) {\n            //如果原容量大于最大空间，则让阈值为最大值。因为不能再扩容了，最大容量就是整数最大值。\n            if (oldCap >= MAXIMUM_CAPACITY) {\n                threshold = Integer.MAX_VALUE;\n                return oldTab;\n            }\n            //两倍扩容，阈值也跟着变为两倍\n            else if ((newCap = oldCap << 1) < MAXIMUM_CAPACITY &&\n                     oldCap >= DEFAULT_INITIAL_CAPACITY)\n                newThr = oldThr << 1; // double threshold\n        }\n        else if (oldThr > 0) // initial capacity was placed in threshold\n            newCap = oldThr;\n        else {               // zero initial threshold signifies using defaults\n            newCap = DEFAULT_INITIAL_CAPACITY;\n            newThr = (int)(DEFAULT_LOAD_FACTOR * DEFAULT_INITIAL_CAPACITY);\n        }\n        if (newThr == 0) {\n            float ft = (float)newCap * loadFactor;\n            newThr = (newCap < MAXIMUM_CAPACITY && ft < (float)MAXIMUM_CAPACITY ?\n                      (int)ft : Integer.MAX_VALUE);\n        }\n        threshold = newThr;\n        @SuppressWarnings({"rawtypes","unchecked"})\n            Node<K,V>[] newTab = (Node<K,V>[])new Node[newCap];\n        table = newTab;\n        if (oldTab != null) {\n            for (int j = 0; j < oldCap; ++j) {\n                Node<K,V> e;\n                if ((e = oldTab[j]) != null) {\n                    oldTab[j] = null;\n                    if (e.next == null)\n                        //当后面没有节点时，直接插入即可 //每个元素重新计算索引位置，此处的hash值并没有变，只是改变索引值\n                        newTab[e.hash & (newCap - 1)] = e;\n                    else if (e instanceof TreeNode)\n                        ((TreeNode<K,V>)e).split(this, newTab, j, oldCap);\n                    else { // preserve order\n                    //否则，就从头到尾依次将节点进行索引然后插入新数组，这样插入后的链表顺序会和原来的顺序相反。\n                        Node<K,V> loHead = null, loTail = null;\n                        Node<K,V> hiHead = null, hiTail = null;\n                        Node<K,V> next;\n                        do {\n                            next = e.next;\n                            if ((e.hash & oldCap) == 0) {\n                                if (loTail == null)\n                                    loHead = e;\n                                else\n                                    loTail.next = e;\n                                loTail = e;\n                            }\n                            else {\n                                if (hiTail == null)\n                                    hiHead = e;\n                                else\n                                    hiTail.next = e;\n                                hiTail = e;\n                            }\n                        } while ((e = next) != null);\n                        if (loTail != null) {\n                            loTail.next = null;\n                            newTab[j] = loHead;\n                        }\n                        if (hiTail != null) {\n                            hiTail.next = null;\n                            newTab[j + oldCap] = hiHead;\n                        }\n                    }\n                }\n            }\n        }\n        return newTab;\n    }\n')])])]),n("h3",{attrs:{id:"读取实现-get-key"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#读取实现-get-key"}},[a._v("#")]),a._v(" 读取实现：get(key)")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("        相对于HashMap的存而言，取就显得比较简单了。通过key的hash值找到在table数组中的索引处的Entry，然后返回该key对应的value即可。\n\npublic V get(Object key) {\n        // 若为null，调用getForNullKey方法返回相对应的value\n        if (key == null)\n            return getForNullKey();\n        // 根据该 key 的 hashCode 值计算它的 hash 码  \n        int hash = hash(key.hashCode());\n        // 取出 table 数组中指定索引处的值\n        for (Entry<K, V> e = table[indexFor(hash, table.length)]; e != null; e = e.next) {\n            Object k;\n            //若搜索的key与查找的key相同，则返回相对应的value\n            if (e.hash == hash && ((k = e.key) == key || key.equals(k)))\n                return e.value;\n        }\n        return null;\n    }\n")])])]),n("blockquote",[n("p",[a._v("在这里能够根据key快速的取到value除了和HashMap的数据结构密不可分外，还和Entry有莫大的关系，在前面就提到过，HashMap在存储过程中并没有将key，value分开来存储，而是当做一个整体key-value来处理的，这个整体就是Entry对象。")]),a._v(" "),n("p",[a._v("同时value也只相当于key的附属而已。在存储的过程中，系统根据key的hashcode来决定Entry在table数组中的存储位置，在取的过程中同样根据key的hashcode取出相对应的Entry对象。")]),a._v(" "),n("p",[a._v("在java中与有两个类都提供了一个多种用途的hashTable机制，他们都可以将可以key和value结合起来构成键值对通过put(key,value)方法保存起来，然后通过get(key)方法获取相对应的value值。")])]),a._v(" "),n("h2",{attrs:{id:"hashtable"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hashtable"}},[a._v("#")]),a._v(" HashTable")]),a._v(" "),n("p",[a._v("一个是前面提到的HashMap，还有一个就是马上要讲解的HashTable。对于HashTable而言，它在很大程度上和HashMap的实现差不多，如果我们对HashMap比较了解的话，对HashTable的认知会提高很大的帮助。他们两者之间只存在几点的不同，这个后面会阐述。")]),a._v(" "),n("h3",{attrs:{id:"定义-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#定义-2"}},[a._v("#")]),a._v(" 定义")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v('  HashTable在Java中的定义如下：\n\npublic class Hashtable<K,V>\n    extends Dictionary<K,V>\n    implements Map<K,V>, Cloneable, java.io.Serializable\n      从中可以看出HashTable继承Dictionary类，实现Map接口。其中Dictionary类是任何可将键映射到相应值的类（如 Hashtable）的抽象父类。每个键和每个值都是一个对象。在任何一个 Dictionary 对象中，每个键至多与一个值相关联。Map是"key-value键值对"接口。\n\n\n\n  HashTable采用"拉链法"实现哈希表，它定义了几个重要的参数：table、count、threshold、loadFactor、modCount。\n\n\n\n  table：为一个Entry[]数组类型，Entry代表了“拉链”的节点，每一个Entry代表了一个键值对，哈希表的"key-value键值对"都是存储在Entry数组中的。\n\n\n\n  count：HashTable的大小，注意这个大小并不是HashTable的容器大小，而是他所包含Entry键值对的数量。\n\n\n\n  threshold：Hashtable的阈值，用于判断是否需要调整Hashtable的容量。threshold的值="容量*加载因子"。\n\n\n\n  loadFactor：加载因子。\n\n\n\n  modCount：用来实现“fail-fast”机制的（也就是快速失败）。所谓快速失败就是在并发集合中，其进行迭代操作时，若有其他线程对其进行结构性的修改，这时迭代器会立马感知到，并且立即抛出ConcurrentModificationException异常，而不是等到迭代完成之后才告诉你（你已经出错了）。\n')])])]),n("h3",{attrs:{id:"构造方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#构造方法"}},[a._v("#")]),a._v(" 构造方法")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v('  在HashTabel中存在5个构造函数。通过这5个构造函数我们构建出一个我想要的HashTable。\n\npublic Hashtable() {\n        this(11, 0.75f);\n    }\n      默认构造函数，容量为11，加载因子为0.75。\n\npublic Hashtable(int initialCapacity) {\n        this(initialCapacity, 0.75f);\n    }\n      用指定初始容量和默认的加载因子 (0.75) 构造一个新的空哈希表。\n\npublic Hashtable(int initialCapacity, float loadFactor) {\n        //验证初始容量\n        if (initialCapacity < 0)\n            throw new IllegalArgumentException("Illegal Capacity: "+\n                                               initialCapacity);\n        //验证加载因子\n        if (loadFactor <= 0 || Float.isNaN(loadFactor))\n            throw new IllegalArgumentException("Illegal Load: "+loadFactor);\n\n        if (initialCapacity==0)\n            initialCapacity = 1;\n\n        this.loadFactor = loadFactor;\n\n        //初始化table，获得大小为initialCapacity的table数组\n        table = new Entry[initialCapacity];\n        //计算阀值\n        threshold = (int)Math.min(initialCapacity * loadFactor, MAX_ARRAY_SIZE + 1);\n        //初始化HashSeed值\n        initHashSeedAsNeeded(initialCapacity);\n    }\n')])])]),n("p",[a._v("​")]),a._v(" "),n("blockquote",[n("p",[a._v("用指定初始容量和指定加载因子构造一个新的空哈希表。其中initHashSeedAsNeeded方法用于初始化hashSeed参数，其中hashSeed用于计算key的hash值，它与key的hashCode进行按位异或运算。这个hashSeed是一个与实例相关的随机值，主要用于解决hash冲突。")])]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("private int hash(Object k) {\n        return hashSeed ^ k.hashCode();\n    }\n")])])]),n("p",[a._v("构造一个与给定的 Map 具有相同映射关系的新哈希表。")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("public Hashtable(Map<? extends K, ? extends V> t) {\n        //设置table容器大小，其值==t.size * 2 + 1\n        this(Math.max(2*t.size(), 11), 0.75f);\n        putAll(t);\n    }\n")])])]),n("h3",{attrs:{id:"主要方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#主要方法"}},[a._v("#")]),a._v(" 主要方法")]),a._v(" "),n("p",[a._v("HashTable的API对外提供了许多方法，这些方法能够很好帮助我们操作HashTable，但是这里我只介绍两个最根本的方法：put、get。")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("  首先我们先看put方法：将指定 key 映射到此哈希表中的指定 value。注意这里键key和值value都不可为空。\n\npublic synchronized V put(K key, V value) {\n        // 确保value不为null\n        if (value == null) {\n            throw new NullPointerException();\n        }\n\n        /*\n         * 确保key在table[]是不重复的\n         * 处理过程：\n         * 1、计算key的hash值，确认在table[]中的索引位置\n         * 2、迭代index索引位置，如果该位置处的链表中存在一个一样的key，则替换其value，返回旧值\n         */\n        Entry tab[] = table;\n        int hash = hash(key);    //计算key的hash值\n        int index = (hash & 0x7FFFFFFF) % tab.length;     //确认该key的索引位置\n        //迭代，寻找该key，替换\n        for (Entry<K,V> e = tab[index] ; e != null ; e = e.next) {\n            if ((e.hash == hash) && e.key.equals(key)) {\n                V old = e.value;\n                e.value = value;\n                return old;\n            }\n        }\n\n        modCount++;\n        if (count >= threshold) {  //如果容器中的元素数量已经达到阀值，则进行扩容操作\n            rehash();\n            tab = table;\n            hash = hash(key);\n            index = (hash & 0x7FFFFFFF) % tab.length;\n        }\n\n        // 在索引位置处插入一个新的节点\n        Entry<K,V> e = tab[index];\n        tab[index] = new Entry<>(hash, key, value, e);\n        //容器中元素+1\n        count++;\n        return null;\n    }\n")])])]),n("blockquote",[n("p",[a._v("put方法的整个处理流程是：计算key的hash值，根据hash值获得key在table数组中的索引位置，然后迭代该key处的Entry链表（我们暂且理解为链表），若该链表中存在一个这个的key对象，那么就直接替换其value值即可，否则在将改key-value节点插入该index索引位置处")])]),a._v(" "),n("p",[a._v("在HashTabled的put方法中有两个地方需要注意：")]),a._v(" "),n("p",[a._v("1、HashTable的扩容操作，在put方法中，如果需要向table[]中添加Entry元素，会首先进行容量校验，如果容量已经达到了阀值，HashTable就会进行扩容处理rehash()，如下:")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("protected void rehash() {\n        int oldCapacity = table.length;\n        //元素\n        Entry<K,V>[] oldMap = table;\n\n        //新容量=旧容量 * 2 + 1\n        int newCapacity = (oldCapacity << 1) + 1;\n        if (newCapacity - MAX_ARRAY_SIZE > 0) {\n            if (oldCapacity == MAX_ARRAY_SIZE)\n                return;\n            newCapacity = MAX_ARRAY_SIZE;\n        }\n\n        //新建一个size = newCapacity 的HashTable\n        Entry<K,V>[] newMap = new Entry[];\n\n        modCount++;\n        //重新计算阀值\n        threshold = (int)Math.min(newCapacity * loadFactor, MAX_ARRAY_SIZE + 1);\n        //重新计算hashSeed\n        boolean rehash = initHashSeedAsNeeded(newCapacity);\n\n        table = newMap;\n        //将原来的元素拷贝到新的HashTable中\n        for (int i = oldCapacity ; i-- > 0 ;) {\n            for (Entry<K,V> old = oldMap[i] ; old != null ; ) {\n                Entry<K,V> e = old;\n                old = old.next;\n\n                if (rehash) {\n                    e.hash = hash(e.key);\n                }\n                int index = (e.hash & 0x7FFFFFFF) % newCapacity;\n                e.next = newMap[index];\n                newMap[index] = e;\n            }\n        }\n    }\n")])])]),n("p",[a._v("在这个rehash()方法中我们可以看到容量扩大两倍+1，同时需要将原来HashTable中的元素一一复制到新的HashTable中，这个过程是比较消耗时间的，同时还需要重新计算hashSeed的，毕竟容量已经变了。")]),a._v(" "),n("p",[a._v("这里对阀值啰嗦一下：比如初始值11、加载因子默认0.75，那么这个时候阀值threshold=8，当容器中的元素达到8时，HashTable进行一次扩容操作，容量 = 8 * 2 + 1 =17，而阀值threshold=17*0.75 = 13，当容器元素再一次达到阀值时，HashTable还会进行扩容操作，依次类推。")]),a._v(" "),n("p",[a._v("下面是计算key的hash值，这里hashSeed发挥了作用。")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("private int hash(Object k) {\n        return hashSeed ^ k.hashCode();\n    }\n")])])]),n("p",[a._v("相对于put方法，get方法就会比较简单，处理过程就是计算key的hash值，判断在table数组中的索引位置，然后迭代链表，匹配直到找到相对应key的value,若没有找到返回null。")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("public synchronized V get(Object key) {\n        Entry tab[] = table;\n        int hash = hash(key);\n        int index = (hash & 0x7FFFFFFF) % tab.length;\n        for (Entry<K,V> e = tab[index] ; e != null ; e = e.next) {\n            if ((e.hash == hash) && e.key.equals(key)) {\n                return e.value;\n            }\n        }\n        return null;\n    }\n")])])]),n("h2",{attrs:{id:"hashtable与hashmap的异同点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hashtable与hashmap的异同点"}},[a._v("#")]),a._v(" HashTable与HashMap的异同点")]),a._v(" "),n("p",[a._v("HashTable和HashMap存在很多的相同点，但是他们还是有几个比较重要的不同点。")]),a._v(" "),n("blockquote",[n("p",[a._v("第一：我们从他们的定义就可以看出他们的不同，HashTable基于Dictionary类，而HashMap是基于AbstractMap。Dictionary是什么？它是任何可将键映射到相应值的类的抽象父类，而AbstractMap是基于Map接口的骨干实现，它以最大限度地减少实现此接口所需的工作。")]),a._v(" "),n("p",[a._v("第二：HashMap可以允许存在一个为null的key和任意个为null的value，但是HashTable中的key和value都不允许为null。如下：")]),a._v(" "),n("p",[a._v("当HashMap遇到为null的key时，它会调用putForNullKey方法来进行处理。对于value没有进行任何处理，只要是对象都可以。")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("if (key == null)\n            return putForNullKey(value);\n      而当HashTable遇到null时，他会直接抛出NullPointerException异常信息。\n")])])])]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("if (value == null) {\n    throw new NullPointerException();\n}\n")])])]),n("blockquote",[n("p",[a._v("第三：Hashtable的方法是同步的，而HashMap的方法不是。所以有人一般都建议如果是涉及到多线程同步时采用HashTable，没有涉及就采用HashMap，但是在Collections类中存在一个静态方法：synchronizedMap()，该方法创建了一个线程安全的Map对象，并把它作为一个封装的对象来返回，所以通过Collections类的synchronizedMap方法是可以我们你同步访问潜在的HashMap。这样君该如何选择呢？？？")])]),a._v(" "),n("h2",{attrs:{id:"面试题-hashmap和hashtable的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#面试题-hashmap和hashtable的区别"}},[a._v("#")]),a._v(" 面试题：HashMap和HashTable的区别")]),a._v(" "),n("p",[a._v("HashMap线程不安全，HashTable是线程安全的。HashMap内部实现没有任何线程同步相关的代码，所以相对而言性能要好一点。如果在多线程中使用HashMap需要自己管理线程同步。HashTable大部分对外接口都使用synchronized包裹，所以是线程安全的，但是性能会相对差一些。")]),a._v(" "),n("p",[a._v("二者的基类不一样。HashMap派生于AbstractMap，HashTable派生于Dictionary。它们都实现Map, Cloneable, Serializable这些接口。AbstractMap中提供的基础方法更多，并且实现了多个通用的方法，而在Dictionary中只有少量的接口，并且都是abstract类型。")]),a._v(" "),n("p",[a._v("key和value的取值范围不同。HashMap的key和value都可以为null，但是HashTablekey和value都不能为null。对于HashMap如果get返回null，并不能表明HashMap不存在这个key，如果需要判断HashMap中是否包含某个key，就需要使用containsKey这个方法来判断。")]),a._v(" "),n("p",[a._v("算法不一样。HashMap的initialCapacity为16，而HashTable的initialCapacity为11。HashMap中初始容量必须是2的幂,如果初始化传入的initialCapacity不是2的幂，将会自动调整为大于出入的initialCapacity最小的2的幂。HashMap使用自己的计算hash的方法(会依赖key的hashCode方法)，HashTable则使用key的hashCode方法得到。")]),a._v(" "),n("h2",{attrs:{id:"参考文章"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[a._v("#")]),a._v(" 参考文章")]),a._v(" "),n("p",[a._v("http://cmsblogs.com/?p=176")]),a._v(" "),n("p",[a._v("http://mini.eastday.com/mobile/180310183019559.html#")]),a._v(" "),n("p",[a._v("https://blog.csdn.net/lihua5419/article/details/87691965")]),a._v(" "),n("p",[a._v("https://www.cnblogs.com/aeolian/p/8468632.html")]),a._v(" "),n("h2",{attrs:{id:"微信公众号"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#微信公众号"}},[a._v("#")]),a._v(" 微信公众号")]),a._v(" "),n("h3",{attrs:{id:"java技术江湖"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#java技术江湖"}},[a._v("#")]),a._v(" Java技术江湖")]),a._v(" "),n("p",[a._v("如果大家想要实时关注我更新的文章以及分享的干货的话，可以关注我的公众号【Java技术江湖】一位阿里 Java 工程师的技术小站，作者黄小斜，专注 Java 相关技术：SSM、SpringBoot、MySQL、分布式、中间件、集群、Linux、网络、多线程，偶尔讲点Docker、ELK，同时也分享技术干货和学习经验，致力于Java全栈开发！")]),a._v(" "),n("p",[n("strong",[a._v("Java工程师必备学习资源:")]),a._v(" 一些Java工程师常用学习资源，关注公众号后，后台回复关键字 "),n("strong",[a._v("“Java”")]),a._v(" 即可免费无套路获取。")]),a._v(" "),n("p",[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190805090108984.jpg",alt:"我的公众号"}})]),a._v(" "),n("h3",{attrs:{id:"个人公众号-黄小斜"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#个人公众号-黄小斜"}},[a._v("#")]),a._v(" 个人公众号：黄小斜")]),a._v(" "),n("p",[a._v("作者是 985 硕士，蚂蚁金服 JAVA 工程师，专注于 JAVA 后端技术栈：SpringBoot、MySQL、分布式、中间件、微服务，同时也懂点投资理财，偶尔讲点算法和计算机理论基础，坚持学习和写作，相信终身学习的力量！")]),a._v(" "),n("p",[n("strong",[a._v("程序员3T技术学习资源：")]),a._v(" 一些程序员学习技术的资源大礼包，关注公众号后，后台回复关键字 "),n("strong",[a._v("“资料”")]),a._v(" 即可免费无套路获取。")]),a._v(" "),n("p",[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190829222750556.jpg",alt:""}})]),a._v(" "),n("p",[a._v("​")])])}),[],!1,null,null,null);e.default=l.exports}}]);