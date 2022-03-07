(window.webpackJsonp=window.webpackJsonp||[]).push([[1173],{1574:function(a,t,s){"use strict";s.r(t);var n=s(13),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"kafka知识点-面试题总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kafka知识点-面试题总结"}},[a._v("#")]),a._v(" Kafka知识点&面试题总结")]),a._v(" "),s("h3",{attrs:{id:"kafka-是什么-主要应用场景有哪些"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kafka-是什么-主要应用场景有哪些"}},[a._v("#")]),a._v(" Kafka 是什么？主要应用场景有哪些？")]),a._v(" "),s("p",[a._v("Kafka 是一个分布式流式处理平台。这到底是什么意思呢？")]),a._v(" "),s("p",[a._v("流平台具有三个关键功能：")]),a._v(" "),s("ol",[s("li",[s("strong",[a._v("消息队列")]),a._v("：发布和订阅消息流，这个功能类似于消息队列，这也是 Kafka 也被归类为消息队列的原因。")]),a._v(" "),s("li",[s("strong",[a._v("容错的持久方式存储记录消息流")]),a._v("： Kafka 会把消息持久化到磁盘，有效避免了消息丢失的风险。")]),a._v(" "),s("li",[s("strong",[a._v("流式处理平台：")]),a._v(" 在消息发布的时候进行处理，Kafka 提供了一个完整的流式处理类库。")])]),a._v(" "),s("p",[a._v("Kafka 主要有两大应用场景：")]),a._v(" "),s("ol",[s("li",[s("strong",[a._v("消息队列")]),a._v(" ：建立实时流数据管道，以可靠地在系统或应用程序之间获取数据。")]),a._v(" "),s("li",[s("strong",[a._v("数据处理：")]),a._v(" 构建实时的流数据处理程序来转换或处理数据流。")])]),a._v(" "),s("h3",{attrs:{id:"和其他消息队列相比-kafka的优势在哪里"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#和其他消息队列相比-kafka的优势在哪里"}},[a._v("#")]),a._v(" 和其他消息队列相比,Kafka的优势在哪里？")]),a._v(" "),s("p",[a._v("我们现在经常提到 Kafka 的时候就已经默认它是一个非常优秀的消息队列了，我们也会经常拿它跟 RocketMQ、RabbitMQ 对比。我觉得 Kafka 相比其他消息队列主要的优势如下：")]),a._v(" "),s("ol",[s("li",[s("strong",[a._v("极致的性能")]),a._v(" ：基于 Scala 和 Java 语言开发，设计中大量使用了批量处理和异步的思想，最高可以每秒处理千万级别的消息。")]),a._v(" "),s("li",[s("strong",[a._v("生态系统兼容性无可匹敌")]),a._v(" ：Kafka 与周边生态系统的兼容性是最好的没有之一，尤其在大数据和流计算领域。")])]),a._v(" "),s("p",[a._v("实际上在早期的时候 Kafka 并不是一个合格的消息队列，早期的 Kafka 在消息队列领域就像是一个衣衫褴褛的孩子一样，功能不完备并且有一些小问题比如丢失消息、不保证消息可靠性等等。当然，这也和 LinkedIn 最早开发 Kafka 用于处理海量的日志有很大关系，哈哈哈，人家本来最开始就不是为了作为消息队列滴，谁知道后面误打误撞在消息队列领域占据了一席之地。")]),a._v(" "),s("p",[a._v("随着后续的发展，这些短板都被 Kafka 逐步修复完善。所以，"),s("strong",[a._v("Kafka 作为消息队列不可靠这个说法已经过时！")])]),a._v(" "),s("h3",{attrs:{id:"队列模型了解吗-kafka-的消息模型知道吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#队列模型了解吗-kafka-的消息模型知道吗"}},[a._v("#")]),a._v(" 队列模型了解吗？Kafka 的消息模型知道吗？")]),a._v(" "),s("blockquote",[s("p",[a._v("题外话：早期的 JMS 和 AMQP 属于消息服务领域权威组织所做的相关的标准，我在 "),s("a",{attrs:{href:"https://github.com/Snailclimb/JavaGuide",target:"_blank",rel:"noopener noreferrer"}},[a._v("JavaGuide"),s("OutboundLink")],1),a._v("的 "),s("a",{attrs:{href:"https://github.com/Snailclimb/JavaGuide#%E6%95%B0%E6%8D%AE%E9%80%9A%E4%BF%A1%E4%B8%AD%E9%97%B4%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"}},[a._v("《消息队列其实很简单》"),s("OutboundLink")],1),a._v("这篇文章中介绍过。但是，这些标准的进化跟不上消息队列的演进速度，这些标准实际上已经属于废弃状态。所以，可能存在的情况是：不同的消息队列都有自己的一套消息模型。")])]),a._v(" "),s("h4",{attrs:{id:"队列模型-早期的消息模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#队列模型-早期的消息模型"}},[a._v("#")]),a._v(" 队列模型：早期的消息模型")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/%E9%98%9F%E5%88%97%E6%A8%A1%E5%9E%8B23.png",alt:"队列模型"}})]),a._v(" "),s("p",[s("strong",[a._v("使用队列（Queue）作为消息通信载体，满足生产者与消费者模式，一条消息只能被一个消费者使用，未被消费的消息在队列中保留直到被消费或超时。")]),a._v(" 比如：我们生产者发送 100 条消息的话，两个消费者来消费一般情况下两个消费者会按照消息发送的顺序各自消费一半（也就是你一个我一个的消费。）")]),a._v(" "),s("p",[s("strong",[a._v("队列模型存在的问题：")])]),a._v(" "),s("p",[a._v("假如我们存在这样一种情况：我们需要将生产者产生的消息分发给多个消费者，并且每个消费者都能接收到完整的消息内容。")]),a._v(" "),s("p",[a._v("这种情况，队列模型就不好解决了。很多比较杠精的人就说：我们可以为每个消费者创建一个单独的队列，让生产者发送多份。这是一种非常愚蠢的做法，浪费资源不说，还违背了使用消息队列的目的。")]),a._v(" "),s("h4",{attrs:{id:"发布-订阅模型-kafka-消息模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发布-订阅模型-kafka-消息模型"}},[a._v("#")]),a._v(" 发布-订阅模型:Kafka 消息模型")]),a._v(" "),s("p",[a._v("发布-订阅模型主要是为了解决队列模型存在的问题。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/java-guide-blog/%E5%8F%91%E5%B8%83%E8%AE%A2%E9%98%85%E6%A8%A1%E5%9E%8B.png",alt:"发布订阅模型"}})]),a._v(" "),s("p",[a._v("发布订阅模型（Pub-Sub） 使用"),s("strong",[a._v("主题（Topic）")]),a._v(" 作为消息通信载体，类似于"),s("strong",[a._v("广播模式")]),a._v("；发布者发布一条消息，该消息通过主题传递给所有的订阅者，"),s("strong",[a._v("在一条消息广播之后才订阅的用户则是收不到该条消息的")]),a._v("。")]),a._v(" "),s("p",[s("strong",[a._v("在发布 - 订阅模型中，如果只有一个订阅者，那它和队列模型就基本是一样的了。所以说，发布 - 订阅模型在功能层面上是可以兼容队列模型的。")])]),a._v(" "),s("p",[s("strong",[a._v("Kafka 采用的就是发布 - 订阅模型。")])]),a._v(" "),s("blockquote",[s("p",[s("strong",[a._v("RocketMQ 的消息模型和 Kafka 基本是完全一样的。唯一的区别是 Kafka 中没有队列这个概念，与之对应的是 Partition（分区）。")])])]),a._v(" "),s("h3",{attrs:{id:"什么是producer、consumer、broker、topic、partition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是producer、consumer、broker、topic、partition"}},[a._v("#")]),a._v(" 什么是Producer、Consumer、Broker、Topic、Partition？")]),a._v(" "),s("p",[a._v("Kafka 将生产者发布的消息发送到 "),s("strong",[a._v("Topic（主题）")]),a._v(" 中，需要这些消息的消费者可以订阅这些 "),s("strong",[a._v("Topic（主题）")]),a._v("，如下图所示：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/KafkaTopicPartitioning.png",alt:"Kafka Topic Partition"}})]),a._v(" "),s("p",[a._v("上面这张图也为我们引出了，Kafka 比较重要的几个概念：")]),a._v(" "),s("ol",[s("li",[s("strong",[a._v("Producer（生产者）")]),a._v(" : 产生消息的一方。")]),a._v(" "),s("li",[s("strong",[a._v("Consumer（消费者）")]),a._v(" : 消费消息的一方。")]),a._v(" "),s("li",[s("strong",[a._v("Broker（代理）")]),a._v(" : 可以看作是一个独立的 Kafka 实例。多个 Kafka Broker 组成一个 Kafka Cluster。")])]),a._v(" "),s("p",[a._v("同时，你一定也注意到每个 Broker 中又包含了 Topic 以及 Partition 这两个重要的概念：")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("Topic（主题）")]),a._v(" : Producer 将消息发送到特定的主题，Consumer 通过订阅特定的 Topic(主题) 来消费消息。")]),a._v(" "),s("li",[s("strong",[a._v("Partition（分区）")]),a._v(" : Partition 属于 Topic 的一部分。一个 Topic 可以有多个 Partition ，并且同一 Topic 下的 Partition 可以分布在不同的 Broker 上，这也就表明一个 Topic 可以横跨多个 Broker 。这正如我上面所画的图一样。")])]),a._v(" "),s("blockquote",[s("p",[a._v("划重点："),s("strong",[a._v("Kafka 中的 Partition（分区） 实际上可以对应成为消息队列中的队列。这样是不是更好理解一点？")])])]),a._v(" "),s("h3",{attrs:{id:"kafka-的多副本机制了解吗-带来了什么好处"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kafka-的多副本机制了解吗-带来了什么好处"}},[a._v("#")]),a._v(" Kafka 的多副本机制了解吗？带来了什么好处？")]),a._v(" "),s("p",[a._v("还有一点我觉得比较重要的是 Kafka 为分区（Partition）引入了多副本（Replica）机制。分区（Partition）中的多个副本之间会有一个叫做 leader 的家伙，其他副本称为 follower。我们发送的消息会被发送到 leader 副本，然后 follower 副本才能从 leader 副本中拉取消息进行同步。")]),a._v(" "),s("blockquote",[s("p",[a._v("生产者和消费者只与 leader 副本交互。你可以理解为其他副本只是 leader 副本的拷贝，它们的存在只是为了保证消息存储的安全性。当 leader 副本发生故障时会从 follower 中选举出一个 leader,但是 follower 中如果有和 leader 同步程度达不到要求的参加不了 leader 的竞选。")])]),a._v(" "),s("p",[s("strong",[a._v("Kafka 的多分区（Partition）以及多副本（Replica）机制有什么好处呢？")])]),a._v(" "),s("ol",[s("li",[a._v("Kafka 通过给特定 Topic 指定多个 Partition, 而各个 Partition 可以分布在不同的 Broker 上, 这样便能提供比较好的并发能力（负载均衡）。")]),a._v(" "),s("li",[a._v("Partition 可以指定对应的 Replica 数, 这也极大地提高了消息存储的安全性, 提高了容灾能力，不过也相应的增加了所需要的存储空间。")])]),a._v(" "),s("h3",{attrs:{id:"zookeeper-在-kafka-中的作用知道吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-在-kafka-中的作用知道吗"}},[a._v("#")]),a._v(" Zookeeper 在 Kafka 中的作用知道吗？")]),a._v(" "),s("blockquote",[s("p",[s("strong",[a._v("要想搞懂 zookeeper 在 Kafka 中的作用 一定要自己搭建一个 Kafka 环境然后自己进 zookeeper 去看一下有哪些文件夹和 Kafka 有关，每个节点又保存了什么信息。")]),a._v(" 一定不要光看不实践，这样学来的也终会忘记！这部分内容参考和借鉴了这篇文章：https://www.jianshu.com/p/a036405f989c 。")])]),a._v(" "),s("p",[a._v("下图就是我的本地 Zookeeper ，它成功和我本地的 Kafka 关联上（以下文件夹结构借助 idea 插件 Zookeeper tool 实现）。")]),a._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/zookeeper-kafka.jpg"}}),a._v(" "),s("p",[a._v("ZooKeeper 主要为 Kafka 提供元数据的管理的功能。")]),a._v(" "),s("p",[a._v("从图中我们可以看出，Zookeeper 主要为 Kafka 做了下面这些事情：")]),a._v(" "),s("ol",[s("li",[s("strong",[a._v("Broker 注册")]),a._v(" ：在 Zookeeper 上会有一个专门"),s("strong",[a._v("用来进行 Broker 服务器列表记录")]),a._v("的节点。每个 Broker 在启动时，都会到 Zookeeper 上进行注册，即到 "),s("code",[a._v("/brokers/ids")]),a._v(" 下创建属于自己的节点。每个 Broker 就会将自己的 IP 地址和端口等信息记录到该节点中去")]),a._v(" "),s("li",[s("strong",[a._v("Topic 注册")]),a._v(" ： 在 Kafka 中，同一个"),s("strong",[a._v("Topic 的消息会被分成多个分区")]),a._v("并将其分布在多个 Broker 上，"),s("strong",[a._v("这些分区信息及与 Broker 的对应关系")]),a._v("也都是由 Zookeeper 在维护。比如我创建了一个名字为 my-topic 的主题并且它有两个分区，对应到 zookeeper 中会创建这些文件夹："),s("code",[a._v("/brokers/topics/my-topic/Partitions/0")]),a._v("、"),s("code",[a._v("/brokers/topics/my-topic/Partitions/1")])]),a._v(" "),s("li",[s("strong",[a._v("负载均衡")]),a._v(" ：上面也说过了 Kafka 通过给特定 Topic 指定多个 Partition, 而各个 Partition 可以分布在不同的 Broker 上, 这样便能提供比较好的并发能力。 对于同一个 Topic 的不同 Partition，Kafka 会尽力将这些 Partition 分布到不同的 Broker 服务器上。当生产者产生消息后也会尽量投递到不同 Broker 的 Partition 里面。当 Consumer 消费的时候，Zookeeper 可以根据当前的 Partition 数量以及 Consumer 数量来实现动态负载均衡。")]),a._v(" "),s("li",[a._v("......")])]),a._v(" "),s("h3",{attrs:{id:"kafka-如何保证消息的消费顺序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kafka-如何保证消息的消费顺序"}},[a._v("#")]),a._v(" Kafka 如何保证消息的消费顺序？")]),a._v(" "),s("p",[a._v("我们在使用消息队列的过程中经常有业务场景需要严格保证消息的消费顺序，比如我们同时发了 2 个消息，这 2 个消息对应的操作分别对应的数据库操作是：")]),a._v(" "),s("ol",[s("li",[a._v("更改用户会员等级。")]),a._v(" "),s("li",[a._v("根据会员等级计算订单价格。")])]),a._v(" "),s("p",[a._v("假如这两条消息的消费顺序不一样造成的最终结果就会截然不同。")]),a._v(" "),s("p",[a._v("我们知道 Kafka 中 Partition(分区)是真正保存消息的地方，我们发送的消息都被放在了这里。而我们的 Partition(分区) 又存在于 Topic(主题) 这个概念中，并且我们可以给特定 Topic 指定多个 Partition。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/KafkaTopicPartionsLayout.png",alt:""}})]),a._v(" "),s("p",[a._v("每次添加消息到 Partition(分区) 的时候都会采用尾加法，如上图所示。 "),s("strong",[a._v("Kafka 只能为我们保证 Partition(分区) 中的消息有序。")])]),a._v(" "),s("blockquote",[s("p",[a._v("消息在被追加到 Partition(分区)的时候都会分配一个特定的偏移量（offset）。Kafka 通过偏移量（offset）来保证消息在分区内的顺序性。")])]),a._v(" "),s("p",[a._v("所以，我们就有一种很简单的保证消息消费顺序的方法："),s("strong",[a._v("1 个 Topic 只对应一个 Partition")]),a._v("。这样当然可以解决问题，但是破坏了 Kafka 的设计初衷。")]),a._v(" "),s("p",[a._v("Kafka 中发送 1 条消息的时候，可以指定 topic, partition, key,data（数据） 4 个参数。如果你发送消息的时候指定了 Partition 的话，所有消息都会被发送到指定的 Partition。并且，同一个 key 的消息可以保证只发送到同一个 partition，这个我们可以采用表/对象的 id 来作为 key 。")]),a._v(" "),s("p",[a._v("总结一下，对于如何保证 Kafka 中消息消费的顺序，有了下面两种方法：")]),a._v(" "),s("ol",[s("li",[a._v("1 个 Topic 只对应一个 Partition。")]),a._v(" "),s("li",[a._v("（推荐）发送消息的时候指定 key/Partition。")])]),a._v(" "),s("p",[a._v("当然不仅仅只有上面两种方法，上面两种方法是我觉得比较好理解的，")]),a._v(" "),s("h3",{attrs:{id:"kafka-如何保证消息不丢失"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kafka-如何保证消息不丢失"}},[a._v("#")]),a._v(" Kafka 如何保证消息不丢失")]),a._v(" "),s("h4",{attrs:{id:"生产者丢失消息的情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生产者丢失消息的情况"}},[a._v("#")]),a._v(" 生产者丢失消息的情况")]),a._v(" "),s("p",[a._v("生产者(Producer) 调用"),s("code",[a._v("send")]),a._v("方法发送消息之后，消息可能因为网络问题并没有发送过去。")]),a._v(" "),s("p",[a._v("所以，我们不能默认在调用"),s("code",[a._v("send")]),a._v("方法发送消息之后消息发送成功了。为了确定消息是发送成功，我们要判断消息发送的结果。但是要注意的是  Kafka 生产者(Producer) 使用  "),s("code",[a._v("send")]),a._v(" 方法发送消息实际上是异步的操作，我们可以通过 "),s("code",[a._v("get()")]),a._v("方法获取调用结果，但是这样也让它变为了同步操作，示例代码如下：")]),a._v(" "),s("blockquote",[s("p",[s("strong",[a._v("详细代码见我的这篇文章："),s("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&mid=2247486269&idx=2&sn=ec00417ad641dd8c3d145d74cafa09ce&chksm=cea244f6f9d5cde0c8eb233fcc4cf82e11acd06446719a7af55230649863a3ddd95f78d111de&token=1633957262&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"}},[a._v("Kafka系列第三篇！10 分钟学会如何在 Spring Boot 程序中使用 Kafka 作为消息队列?"),s("OutboundLink")],1)])])]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SendResult")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" sendResult "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" kafkaTemplate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("topic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("sendResult"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getRecordMetadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  logger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"生产者成功发送消息到"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" sendResult"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getProducerRecord")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("topic")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-> "')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" sendRe\n              sult"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getProducerRecord")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[a._v("但是一般不推荐这么做！可以采用为其添加回调函数的形式，示例代码如下：")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ListenableFuture")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SendResult")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" future "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" kafkaTemplate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("topic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        future"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("addCallback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("result "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" logger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"生产者成功发送消息到topic:{} partition:{}的消息"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getRecordMetadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("topic")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getRecordMetadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("partition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                ex "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" logger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"生产者发送消失败，原因：{}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" ex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("如果消息发送失败的话，我们检查失败的原因之后重新发送即可！")]),a._v(" "),s("p",[s("strong",[a._v("另外这里推荐为 Producer 的"),s("code",[a._v("retries")]),a._v("（重试次数）设置一个比较合理的值，一般是 3 ，但是为了保证消息不丢失的话一般会设置比较大一点。设置完成之后，当出现网络问题之后能够自动重试消息发送，避免消息丢失。另外，建议还要设置重试间隔，因为间隔太小的话重试的效果就不明显了，网络波动一次你3次一下子就重试完了")])]),a._v(" "),s("h4",{attrs:{id:"消费者丢失消息的情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#消费者丢失消息的情况"}},[a._v("#")]),a._v(" 消费者丢失消息的情况")]),a._v(" "),s("p",[a._v("我们知道消息在被追加到 Partition(分区)的时候都会分配一个特定的偏移量（offset）。偏移量（offset)表示 Consumer 当前消费到的 Partition(分区)的所在的位置。Kafka 通过偏移量（offset）可以保证消息在分区内的顺序性。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/kafka-offset.jpg",alt:"kafka offset"}})]),a._v(" "),s("p",[a._v("当消费者拉取到了分区的某个消息之后，消费者会自动提交了 offset。自动提交的话会有一个问题，试想一下，当消费者刚拿到这个消息准备进行真正消费的时候，突然挂掉了，消息实际上并没有被消费，但是 offset 却被自动提交了。")]),a._v(" "),s("p",[s("strong",[a._v("解决办法也比较粗暴，我们手动关闭自动提交 offset，每次在真正消费完消息之后再自己手动提交 offset 。")]),a._v(" 但是，细心的朋友一定会发现，这样会带来消息被重新消费的问题。比如你刚刚消费完消息之后，还没提交 offset，结果自己挂掉了，那么这个消息理论上就会被消费两次。")]),a._v(" "),s("h4",{attrs:{id:"kafka-弄丢了消息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kafka-弄丢了消息"}},[a._v("#")]),a._v(" Kafka 弄丢了消息")]),a._v(" "),s("p",[a._v("我们知道 Kafka 为分区（Partition）引入了多副本（Replica）机制。分区（Partition）中的多个副本之间会有一个叫做 leader 的家伙，其他副本称为 follower。我们发送的消息会被发送到 leader 副本，然后 follower 副本才能从 leader 副本中拉取消息进行同步。生产者和消费者只与 leader 副本交互。你可以理解为其他副本只是 leader 副本的拷贝，它们的存在只是为了保证消息存储的安全性。")]),a._v(" "),s("p",[s("strong",[a._v("试想一种情况：假如 leader 副本所在的 broker 突然挂掉，那么就要从 follower 副本重新选出一个 leader ，但是 leader 的数据还有一些没有被 follower 副本的同步的话，就会造成消息丢失。")])]),a._v(" "),s("p",[s("strong",[a._v("设置 acks = all")])]),a._v(" "),s("p",[a._v("解决办法就是我们设置  "),s("strong",[a._v("acks = all")]),a._v("。acks 是 Kafka 生产者(Producer)  很重要的一个参数。")]),a._v(" "),s("p",[a._v("acks 的默认值即为1，代表我们的消息被leader副本接收之后就算被成功发送。当我们配置 "),s("strong",[a._v("acks = all")]),a._v(" 代表则所有副本都要接收到该消息之后该消息才算真正成功被发送。")]),a._v(" "),s("p",[s("strong",[a._v("设置 replication.factor >= 3")])]),a._v(" "),s("p",[a._v("为了保证 leader 副本能有 follower 副本能同步消息，我们一般会为 topic 设置 "),s("strong",[a._v("replication.factor >= 3")]),a._v("。这样就可以保证每个 分区(partition) 至少有 3 个副本。虽然造成了数据冗余，但是带来了数据的安全性。")]),a._v(" "),s("p",[s("strong",[a._v("设置 min.insync.replicas > 1")])]),a._v(" "),s("p",[a._v("一般情况下我们还需要设置 "),s("strong",[a._v("min.insync.replicas> 1")]),a._v(" ，这样配置代表消息至少要被写入到 2 个副本才算是被成功发送。"),s("strong",[a._v("min.insync.replicas")]),a._v(" 的默认值为 1 ，在实际生产中应尽量避免默认值 1。")]),a._v(" "),s("p",[a._v("但是，为了保证整个 Kafka 服务的高可用性，你需要确保 "),s("strong",[a._v("replication.factor > min.insync.replicas")]),a._v(" 。为什么呢？设想一下假如两者相等的话，只要是有一个副本挂掉，整个分区就无法正常工作了。这明显违反高可用性！一般推荐设置成 "),s("strong",[a._v("replication.factor = min.insync.replicas + 1")]),a._v("。")]),a._v(" "),s("p",[s("strong",[a._v("设置 unclean.leader.election.enable = false")])]),a._v(" "),s("blockquote",[s("p",[s("strong",[a._v("Kafka 0.11.0.0版本开始 unclean.leader.election.enable 参数的默认值由原来的true 改为false")])])]),a._v(" "),s("p",[a._v("我们最开始也说了我们发送的消息会被发送到 leader 副本，然后 follower 副本才能从 leader 副本中拉取消息进行同步。多个 follower 副本之间的消息同步情况不一样，当我们配置了 "),s("strong",[a._v("unclean.leader.election.enable = false")]),a._v("  的话，当 leader 副本发生故障时就不会从  follower 副本中和 leader 同步程度达不到要求的副本中选择出  leader ，这样降低了消息丢失的可能性。")]),a._v(" "),s("h3",{attrs:{id:"kafka-如何保证消息不重复消费"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kafka-如何保证消息不重复消费"}},[a._v("#")]),a._v(" Kafka 如何保证消息不重复消费")]),a._v(" "),s("p",[s("strong",[a._v("kafka出现消息重复消费的原因：")])]),a._v(" "),s("ul",[s("li",[a._v("服务端侧已经消费的数据没有成功提交 offset（根本原因）。")]),a._v(" "),s("li",[a._v("Kafka 侧 由于服务端处理业务时间长或者网络链接等等原因让 Kafka 认为服务假死，触发了分区 rebalance。")])]),a._v(" "),s("p",[s("strong",[a._v("解决方案：")])]),a._v(" "),s("ul",[s("li",[a._v("消费消息服务做幂等校验，比如 Redis 的set、MySQL 的主键等天然的幂等功能。这种方法最有效。")]),a._v(" "),s("li",[a._v("将 "),s("strong",[s("code",[a._v("enable.auto.commit")])]),a._v(" 参数设置为 false，关闭自动提交，开发者在代码中手动提交 offset。那么这里会有个问题："),s("strong",[a._v("什么时候提交offset合适？")]),a._v(" "),s("ul",[s("li",[a._v("处理完消息再提交：依旧有消息重复消费的风险，和自动提交一样")]),a._v(" "),s("li",[a._v("拉取到消息即提交：会有消息丢失的风险。允许消息延时的场景，一般会采用这种方式。然后，通过定时任务在业务不繁忙（比如凌晨）的时候做数据兜底。")])])])]),a._v(" "),s("h3",{attrs:{id:"reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[a._v("#")]),a._v(" Reference")]),a._v(" "),s("ul",[s("li",[a._v("Kafka 官方文档： https://kafka.apache.org/documentation/")]),a._v(" "),s("li",[a._v("极客时间—《Kafka核心技术与实战》第11节：无消息丢失配置怎么实现？")])])])}),[],!1,null,null,null);t.default=e.exports}}]);