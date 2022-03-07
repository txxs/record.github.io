(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{668:function(e,t,a){"use strict";a.r(t);var s=a(13),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"table-of-contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[e._v("#")]),e._v(" Table of Contents")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E5%88%9D%E6%AD%A5%E8%AE%A4%E8%AF%86rocketmq%E7%9A%84%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97"}},[e._v("初步认识RocketMQ的核心模块")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#%E9%94%99%E8%AF%AF%E7%9A%84%E6%96%B9%E6%A1%880"}},[e._v("错误的方案0")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#%E6%96%B9%E6%A1%881%E4%B8%9A%E5%8A%A1%E6%96%B9%E8%87%AA%E5%B7%B1%E5%AE%9E%E7%8E%B0"}},[e._v("方案1–业务方自己实现")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#%E6%96%B9%E6%A1%882--rocketmq-%E4%BA%8B%E5%8A%A1%E6%B6%88%E6%81%AF"}},[e._v("方案2 – RocketMQ 事务消息")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#%E4%BA%BA%E5%B7%A5%E4%BB%8B%E5%85%A5"}},[e._v("人工介入")])])]),e._v(" "),a("p",[e._v("本文转载自 linkedkeeper.com")]),e._v(" "),a("p",[e._v("本文内容参考网络，侵删")]),e._v(" "),a("p",[e._v("本系列文章将整理到我在GitHub上的《Java面试指南》仓库，更多精彩内容请到我的仓库里查看")]),e._v(" "),a("blockquote",[a("p",[e._v("https://github.com/h2pl/Java-Tutorial")])]),e._v(" "),a("p",[e._v("喜欢的话麻烦点下Star哈")]),e._v(" "),a("p",[e._v("本文也将同步到我的个人博客：")]),e._v(" "),a("blockquote",[a("p",[e._v("www.how2playlife.com")])]),e._v(" "),a("p",[e._v("更多Java技术文章将陆续在微信公众号【Java技术江湖】更新，敬请关注。")]),e._v(" "),a("p",[e._v("该系列博文会告诉你什么是分布式系统，这对后端工程师来说是很重要的一门学问，我们会逐步了解常见的分布式技术、以及一些较为常见的分布式系统概念，同时也需要进一步了解zookeeper、分布式事务、分布式锁、负载均衡等技术，以便让你更完整地了解分布式技术的具体实战方法，为真正应用分布式技术做好准备。")]),e._v(" "),a("p",[e._v("如果对本系列文章有什么建议，或者是有什么疑问的话，也可以关注公众号【Java技术江湖】联系作者，欢迎你参与本系列博文的创作和修订。")]),e._v(" "),a("h1",{attrs:{id:"初步认识rocketmq的核心模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初步认识rocketmq的核心模块"}},[e._v("#")]),e._v(" 初步认识RocketMQ的核心模块")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/4943997-9842b6eec46bd737.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/328",alt:""}})]),e._v(" "),a("p",[e._v("rocketmq模块")]),e._v(" "),a("p",[a("strong",[e._v("rocketmq-broker：接受生产者发来的消息并存储（通过调用rocketmq-store），消费者从这里取得消息。")])]),e._v(" "),a("p",[a("strong",[e._v("rocketmq-client：提供发送、接受消息的客户端API。")])]),e._v(" "),a("p",[a("strong",[e._v("rocketmq-namesrv：NameServer，类似于Zookeeper，这里保存着消息的TopicName，队列等运行时的元信息。（有点NameNode的味道）")])]),e._v(" "),a("p",[a("strong",[e._v("rocketmq-common：通用的一些类，方法，数据结构等")])]),e._v(" "),a("p",[a("strong",[e._v("rocketmq-remoting：基于Netty4的client/server + fastjson序列化 + 自定义二进制协议")])]),e._v(" "),a("p",[a("strong",[e._v("rocketmq-store：消息、索引存储等")])]),e._v(" "),a("p",[a("strong",[e._v("rocketmq-filtersrv：消息过滤器Server，需要注意的是，要实现这种过滤，需要上传代码到MQ！【一般而言，我们利用Tag足以满足大部分的过滤需求，如果更灵活更复杂的过滤需求，可以考虑filtersrv组件】")])]),e._v(" "),a("p",[a("strong",[e._v("rocketmq-tools：命令行工具")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/ZJOE80/p/7810533.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("分布式消息队列RocketMQ--事务消息--解决分布式事务"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("说到分布式事务，就会谈到那个经典的”账号转账”问题：2个账号，分布处于2个不同的DB，或者说2个不同的子系统里面，A要扣钱，B要加钱，如何保证原子性？")]),e._v(" "),a("p",[e._v("一般的思路都是通过消息中间件来实现“最终一致性”：A系统扣钱，然后发条消息给中间件，B系统接收此消息，进行加钱。")]),e._v(" "),a("p",[e._v("但这里面有个问题：A是先update DB，后发送消息呢？ 还是先发送消息，后update DB？")]),e._v(" "),a("p",[e._v("假设先update DB成功，发送消息网络失败，重发又失败，怎么办？ \n假设先发送消息成功，update DB失败。消息已经发出去了，又不能撤回，怎么办？")]),e._v(" "),a("p",[e._v("所以，这里下个结论： 只要发送消息和update DB这2个操作不是原子的，无论谁先谁后，都是有问题的。")]),e._v(" "),a("p",[e._v("那这个问题怎么解决呢？")]),e._v(" "),a("h1",{attrs:{id:"错误的方案0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误的方案0"}},[e._v("#")]),e._v(" 错误的方案0")]),e._v(" "),a("p",[e._v("有人可能想到了，我可以把“发送消息”这个网络调用和update DB放在同1个事务里面，如果发送消息失败，update DB自动回滚。这样不就保证2个操作的原子性了吗？")]),e._v(" "),a("p",[e._v("这个方案看似正确，其实是错误的，原因有2：")]),e._v(" "),a("p",[e._v("（1）网络的2将军问题：发送消息失败，发送方并不知道是消息中间件真的没有收到消息呢？还是消息已经收到了，只是返回response的时候失败了？")]),e._v(" "),a("p",[e._v("如果是已经收到消息了，而发送端认为没有收到，执行update db的回滚操作。则会导致A账号的钱没有扣，B账号的钱却加了。")]),e._v(" "),a("p",[e._v("（2）把网络调用放在DB事务里面，可能会因为网络的延时，导致DB长事务。严重的，会block整个DB。这个风险很大。")]),e._v(" "),a("p",[e._v("基于以上分析，我们知道，这个方案其实是错误的！")]),e._v(" "),a("h1",{attrs:{id:"方案1-业务方自己实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案1-业务方自己实现"}},[e._v("#")]),e._v(" 方案1–业务方自己实现")]),e._v(" "),a("p",[e._v("假设消息中间件没有提供“事务消息”功能，比如你用的是Kafka。那如何解决这个问题呢？")]),e._v(" "),a("p",[e._v("解决方案如下： \n（1）Producer端准备1张消息表，把update DB和insert message这2个操作，放在一个DB事务里面。")]),e._v(" "),a("p",[e._v("（2）准备一个后台程序，源源不断的把消息表中的message传送给消息中间件。失败了，不断重试重传。允许消息重复，但消息不会丢，顺序也不会打乱。")]),e._v(" "),a("p",[e._v("（3）Consumer端准备一个判重表。处理过的消息，记在判重表里面。实现业务的幂等。但这里又涉及一个原子性问题：如果保证消息消费 + insert message到判重表这2个操作的原子性？")]),e._v(" "),a("p",[e._v("消费成功，但insert判重表失败，怎么办？关于这个，在Kafka的源码分析系列，第1篇， exactly once问题的时候，有过讨论。")]),e._v(" "),a("p",[e._v("通过上面3步，我们基本就解决了这里update db和发送网络消息这2个操作的原子性问题。")]),e._v(" "),a("p",[e._v("但这个方案的一个缺点就是：需要设计DB消息表，同时还需要一个后台任务，不断扫描本地消息。导致消息的处理和业务逻辑耦合额外增加业务方的负担。")]),e._v(" "),a("h1",{attrs:{id:"方案2-rocketmq-事务消息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案2-rocketmq-事务消息"}},[e._v("#")]),e._v(" 方案2 – RocketMQ 事务消息")]),e._v(" "),a("p",[e._v("为了能解决该问题，同时又不和业务耦合，RocketMQ提出了“事务消息”的概念。")]),e._v(" "),a("p",[e._v("具体来说，就是把消息的发送分成了2个阶段：Prepare阶段和确认阶段。")]),e._v(" "),a("p",[e._v("具体来说，上面的2个步骤，被分解成3个步骤： \n(1) 发送Prepared消息 \n(2) update DB \n(3) 根据update DB结果成功或失败，Confirm或者取消Prepared消息。")]),e._v(" "),a("p",[e._v("可能有人会问了，前2步执行成功了，最后1步失败了怎么办？这里就涉及到了RocketMQ的关键点：RocketMQ会定期（默认是1分钟）扫描所有的Prepared消息，询问发送方，到底是要确认这条消息发出去？还是取消此条消息？")]),e._v(" "),a("p",[e._v("具体代码实现如下：")]),e._v(" "),a("p",[e._v("也就是定义了一个checkListener，RocketMQ会回调此Listener，从而实现上面所说的方案。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// 也就是上文所说的，当RocketMQ发现`Prepared消息`时，会根据这个Listener实现的策略来决断事务\nTransactionCheckListener transactionCheckListener = new TransactionCheckListenerImpl();\n// 构造事务消息的生产者\nTransactionMQProducer producer = new TransactionMQProducer("groupName");\n// 设置事务决断处理类\nproducer.setTransactionCheckListener(transactionCheckListener);\n// 本地事务的处理逻辑，相当于示例中检查Bob账户并扣钱的逻辑\nTransactionExecuterImpl tranExecuter = new TransactionExecuterImpl();\nproducer.start()\n// 构造MSG，省略构造参数\nMessage msg = new Message(......);\n// 发送消息\nSendResult sendResult = producer.sendMessageInTransaction(msg, tranExecuter, null);\nproducer.shutdown();\n\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br")])]),a("p",[e._v("然后执行本地事务，具体代码如下")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("public TransactionSendResult sendMessageInTransaction(.....)  {\n    // 逻辑代码，非实际代码\n    // 1.发送消息\n    sendResult = this.send(msg);\n    // sendResult.getSendStatus() == SEND_OK\n    // 2.如果消息发送成功，处理与消息关联的本地事务单元\n    LocalTransactionState localTransactionState = tranExecuter.executeLocalTransactionBranch(msg, arg);\n    // 3.结束事务\n    this.endTransaction(sendResult, localTransactionState, localException);\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://img-blog.csdn.net/20180624145825253?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2E3MjQ4ODg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:""}})]),e._v(" "),a("p",[e._v("上面所说的消息中间件上注册的listener，超时以后会回调producer的接口以确定事务执行情况")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdn.net/20180624145955411?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2E3MjQ4ODg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70",alt:""}})]),e._v(" "),a("p",[e._v("总结：对比方案2和方案1，RocketMQ最大的改变，其实就是把“扫描消息表”这个事情，不让业务方做，而是消息中间件帮着做了。")]),e._v(" "),a("p",[e._v("至于消息表，其实还是没有省掉。因为消息中间件要询问发送方，事物是否执行成功，还是需要一个“变相的本地消息表”，记录事物执行状态。")]),e._v(" "),a("h1",{attrs:{id:"人工介入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#人工介入"}},[e._v("#")]),e._v(" 人工介入")]),e._v(" "),a("p",[e._v("可能有人又要说了，无论方案1，还是方案2，发送端把消息成功放入了队列，但消费端消费失败怎么办？")]),e._v(" "),a("p",[e._v("消费失败了，重试，还一直失败怎么办？是不是要自动回滚整个流程？")]),e._v(" "),a("p",[e._v("答案是人工介入。从工程实践角度讲，这种整个流程自动回滚的代价是非常巨大的，不但实现复杂，还会引入新的问题。比如自动回滚失败，又怎么处理？")]),e._v(" "),a("p",[e._v("对应这种极低概率的case，采取人工处理，会比实现一个高复杂的自动化回滚系统，更加可靠，也更加简单。")])])}),[],!1,null,null,null);t.default=r.exports}}]);