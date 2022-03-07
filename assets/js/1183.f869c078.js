(window.webpackJsonp=window.webpackJsonp||[]).push([[1183],{1584:function(t,s,a){"use strict";a.r(s);var n=a(13),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200804095113868.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_SmF2YUVkZ2U=,size_1,color_FFFFFF,t_70",alt:""}}),t._v("\n丢失消息则丢了数据，这是我们不能接受的，否则MQ意义何在？")]),t._v(" "),a("p",[t._v("因此主流MQ其实都提供了可靠性投递机制，确保即使网络异常，消息也能可靠传递，而不会丢失。")]),t._v(" "),a("p",[t._v("如果发现还是丢失消息了，多半是开发者问题，很可能没有正确配置MQ。不同MQ在保证消息可靠传递方面的实现原理其实也是一样的。")]),t._v(" "),a("h1",{attrs:{id:"_1-验证丢失的消息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-验证丢失的消息"}},[t._v("#")]),t._v(" 1 验证丢失的消息")]),t._v(" "),a("p",[t._v("大公司一般都通过分布式链路追踪系统，很方便追踪每条消息。\n如果是中小公司，也有个简单方案验证。即利用MQ的有序性：")]),t._v(" "),a("ol",[a("li",[t._v("在Producer端，给每个发出的消息附加一个连续递增的序号")]),t._v(" "),a("li",[t._v("然后在Consumer端检查这序号的连续性")])]),t._v(" "),a("ul",[a("li",[t._v("Consumer收到消息序号严格递增，则无消息丢失")]),t._v(" "),a("li",[t._v("若存在序号不连续，则丢了消息\n通过缺失的序号还能确定到底丢失的哪条消息")])]),t._v(" "),a("p",[t._v("大多MQ客户端支持拦截器，可在Pro发消息前的拦截器中注入序号到消息中，在Con收消息的拦截器中检测序号连续性。")]),t._v(" "),a("ul",[a("li",[t._v("好处\n消息验证代码不会侵入业务代码。系统稳定后也方便将验证逻辑关闭/删除。")])]),t._v(" "),a("p",[t._v("分布式系统下实现验证方法，须注意：")]),t._v(" "),a("ul",[a("li",[t._v("Kafka、RocketMQ不保证在Topic上的严格顺序，只保证分区上的消息有序，所以在发消息时须指定分区。且在每个分区单独验证消息序号连续性。")])]),t._v(" "),a("p",[t._v("如果系统的Producer多实例，由于并不好协调多Producer之间的发送顺序，所以也需要每个Producer分别生成消息序号，且需要附加Producer标识，在Con端按每个Pro分别验证序号连续性。")]),t._v(" "),a("p",[t._v("Consumer实例数量最好和分区数量一一对应，如此便可方便在Con内验证消息序号连续性。")]),t._v(" "),a("h1",{attrs:{id:"_2-确保消息可靠传递"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-确保消息可靠传递"}},[t._v("#")]),t._v(" 2 确保消息可靠传递")]),t._v(" "),a("p",[t._v("有小伙伴要问了，到底哪些地方会导致丢消息，又该如何避免呢？")]),t._v(" "),a("ul",[a("li",[t._v("消息从生产到消费完成的阶段\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200803223104526.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_SmF2YUVkZ2U=,size_1,color_FFFFFF,t_70",alt:""}})])]),t._v(" "),a("h2",{attrs:{id:"_2-1-生产阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-生产阶段"}},[t._v("#")]),t._v(" 2.1 生产阶段")]),t._v(" "),a("p",[t._v("在Producer创建消息出来，通过网络传输发送到Broker。")]),t._v(" "),a("p",[t._v("MQ通过最常用的请求确认机制保证消息可靠传递：\n调用发消息方法时，MQ客户端把消息发至于Broker，Broker收到后，给客户端返回确认响应，表明已收。客户端收到响应后，完成一次正常消息的发送。")]),t._v(" "),a("p",[t._v("只要Pro收到Broker的确认，即可保证消息在生产阶段不会丢失。")]),t._v(" "),a("ul",[a("li",[t._v("有些MQ长时间未收到发送确认响应后，会自动重试")]),t._v(" "),a("li",[t._v("若重试失败，以返回值或者异常方式通知用户")])]),t._v(" "),a("p",[t._v("写发消息代码时，注意正确处理返回值或捕获异常，即可保证该阶段消息不会丢失。")]),t._v(" "),a("h3",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("p",[t._v("以Kafka为例看可靠发送消息：")]),t._v(" "),a("p",[t._v("同步发送时，只要注意捕获异常即可。")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RecordMetadata")]),t._v(" metadata "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" producer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("record")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"消息发送成功。"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Throwable")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"消息发送失败！"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("异步发送，则需在回调方法检查。\n很多丢消息的原因即在使用异步发送时，却未在回调里检查发送结果。")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("producer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("record")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metadata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exception"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metadata "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"消息发送成功。"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"消息发送失败！"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exception"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h2",{attrs:{id:"_2-2-存储阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-存储阶段"}},[t._v("#")]),t._v(" 2.2 存储阶段")]),t._v(" "),a("p",[t._v("消息在Broker端存储，如果是集群，消息会在该阶段被复制到其他副本。")]),t._v(" "),a("p",[t._v("正常情况下，只要Broker正常运行，就不会丢失消息。\n但若Broker异常，比如进程卡死或服务器宕机，则可能丢失消息。")]),t._v(" "),a("p",[t._v("如果对消息可靠性要求非常高，可通过配置Broker参数避免因为宕机丢消息。")]),t._v(" "),a("p",[t._v("对单节点Broker，需配置Broker参数：在收消息后，将消息写进磁盘后再给Pro发确认响应，这即使宕机，也不会丢消息，恢复后还可继续消费。")]),t._v(" "),a("ul",[a("li",[t._v("如在RocketMQ中，需将默认的异步刷盘方式flushDiskType\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200804010423196.png",alt:""}})]),t._v(" "),a("li",[t._v("配置为SYNC_FLUSH同步刷盘。"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200804010600375.png",alt:""}})])]),t._v(" "),a("p",[t._v("若Broker属多节点集群，需配置Broker集群：至少将消息发到2个以上节点，再给客户端发确认响应。如此一来，当某Broker宕机，其它Broker可替代宕机节点，也不会发生消息丢失。")]),t._v(" "),a("h2",{attrs:{id:"_2-3-消费阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-消费阶段"}},[t._v("#")]),t._v(" 2.3 消费阶段")]),t._v(" "),a("p",[t._v("Con从Broker拉消息，经过网络传输发到Con。")]),t._v(" "),a("p",[t._v("该阶段采用和生产阶段类似的确认机制保证可靠传递。\n客户端从Broker拉取消息后，执行用户的消费业务逻辑，成功后，才会给Broker发送消费确认响应。如果Broker没有收到消费确认响应，下次拉消息的时候还会返回同一条消息，确保消息不会在网络传输过程中丢失，也不会因为客户端在执行消费逻辑中出错导致丢失。")]),t._v(" "),a("p",[t._v("编写消费代码时注意，不要在收到消息后就立即发消费确认，而在执行完所有消费业务逻辑后，再发送消费确认。\n见如下以Python语言消费RabbitMQ消息为例，实现可靠的消费代码：")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" properties"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" [x] 收到消息 %r"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在这儿处理收到的消息")]),t._v("\n    database"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" [x] 消费完成"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 完成消费业务逻辑后发送消费确认响应")]),t._v("\n    ch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("basic_ack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("delivery_tag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("delivery_tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \nchannel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("basic_consume"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("queue"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" on_message_callback"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("在消费的回调方法callback中，正确顺序是")]),t._v(" "),a("ol",[a("li",[t._v("先把消息存到数据库")]),t._v(" "),a("li",[t._v("然后再发送消费确认响应")])]),t._v(" "),a("p",[t._v("这样如果保存消息到数据库失败，就不会执行消费确认代码，下次拉到的还是该消息，直至消费成功。")]),t._v(" "),a("h1",{attrs:{id:"_3-总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-总结"}},[t._v("#")]),t._v(" 3 总结")]),t._v(" "),a("p",[t._v("一条消息从发送到消费整个流程，MQ如何确保消息可靠投递不丢失。该过程可分三阶段，每阶段都需正确编写代码且正确配置，才能配合MQ可靠机制，确保消息不丢失。")]),t._v(" "),a("ul",[a("li",[t._v("生产阶段，需捕获消息发送的错误，并重发消息")]),t._v(" "),a("li",[t._v("存储阶段，可通过配置刷盘和复制相关的参数，让消息写进多个副本的磁盘，确保消息不会因某Broker宕机或磁盘损坏而丢失")]),t._v(" "),a("li",[t._v("消费阶段，要在处理完全部消费业务逻辑后，再发消费确认")])]),t._v(" "),a("p",[t._v("理解这几阶段原理后，若再出现丢消息，可通过在代码中加日志，定位哪个阶段出问题了，再进一步分析。")]),t._v(" "),a("h1",{attrs:{id:"_4-面试场景快问快答"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-面试场景快问快答"}},[t._v("#")]),t._v(" 4 面试场景快问快答")]),t._v(" "),a("h2",{attrs:{id:"两消费者先后去拉消息-是否会拉到同条"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两消费者先后去拉消息-是否会拉到同条"}},[t._v("#")]),t._v(" 两消费者先后去拉消息，是否会拉到同条")]),t._v(" "),a("p",[t._v("拉消息时，消费者A pull后，没有发确认给Broker就宕机（或因代码问题超时阻塞），这时消息应该还在Broker，消费者B如果此时pull，是否会拉取到那条给消费者A的消息？即\n首先，MQ一般都有协调机制，不会让这情况出现。但由于网络不确定性，这情况极小概率也会出现。\n在同一消费组内，A消费者拉走index=10的消息，还没发确认，这时这分区的消费位置还是10，B消费者来拉消息，可能有2种情况：")]),t._v(" "),a("ol",[a("li",[t._v("超时前，Broker认为该分区还被A占用，会拒绝B请求")]),t._v(" "),a("li",[t._v("超时后，Broker认为A已经超时没返回，此次消费失败，但当前消费位置还是10，B再来拉消息，会给它返回10这条消息")])]),t._v(" "),a("h2",{attrs:{id:"消费者处理重复消息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消费者处理重复消息"}},[t._v("#")]),t._v(" 消费者处理重复消息")]),t._v(" "),a("p",[t._v("若消息在网络传输过程发送错误，由于发送方收不到确认，会通过重发保证消息不丢失。但若确认响应在网络传输时丢失，也会导致重发消息。即无论Broker、Consumer都可能收到重复消息，编写消费代码时，就得考虑这情况。\n在消费消息的代码中，该如何处理这种重复消息，才不会影响业务逻辑的正确性呢？")]),t._v(" "),a("p",[t._v("产生重复消息原因：")]),t._v(" "),a("ol",[a("li",[t._v("发送消息阶段，发送重复的消息")]),t._v(" "),a("li",[t._v("消费消息阶段，消费重复的消息")])]),t._v(" "),a("blockquote",[a("p",[t._v("一般消息中都会存在个唯一性东西。不管是MQ本身的msgId\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200804013853518.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_SmF2YUVkZ2U=,size_16,color_FFFFFF,t_70",alt:""}}),t._v("\n还是业务订单号之类，可在DB中存在一个消费表，对这唯一性东西建立唯一索引。\n每次处理消费者逻辑前先insert，让DB帮我们去重。")])]),t._v(" "),a("p",[t._v("解决方案：业务端去重")]),t._v(" "),a("ul",[a("li",[t._v("建立一个消息表，consumer消费之前，拿到消息做insert操作，用消息id做唯一主键，重复消费会导致主键冲突")]),t._v(" "),a("li",[t._v("利用redis，给消息分配一个全局id，只要消费过该消息，将消息以K-V（< id,message>）形式写入redis，消费消息之前，根据key去redis查询是否有对应记录。")])]),t._v(" "),a("p",[t._v("当Pro发消息给Broker时（send方法），此方法会在Broker收到消息并正常储存后才返回，期间应该会阻塞，即如果Broker配置同步刷盘，可能会增加调用时间（只能出现对消息敏感场景）。")]),t._v(" "),a("p",[t._v("=======================\n消费端支持幂等操作，业务上一般有难度。可考虑消费端增加去冗余机制，例如缓存最新消费成功的N条消息的SN，收到消息后，先确认是否是消费过的消息，如果是，直接ACK并放弃消费。\n思路没问题。")]),t._v(" "),a("p",[t._v("=======================\n幂等性是一种办法，如果做不到幂等性，那么在消费端需要存储消费的消息ID，关键这个ID什么时候存？")]),t._v(" "),a("ul",[a("li",[t._v("如果是消费前存，那么消费失败，下次消费同样消息，是否会认为上次已经成功？")]),t._v(" "),a("li",[t._v("如果在消费成功后存，那么消费会不会出现部分成功情况？除非满足事务ACID特性。\n如果靠ID连续性检查，是不是一个producer只对应一个consumer？")])]),t._v(" "),a("p",[t._v("不用，Producer发消息时带着ProducerId并要指定分区发送，Consumer消费时，需按照每个Producer来检查序号连续性。")]),t._v(" "),a("p",[t._v("=======================\n如果Producer的某条消息ack因网络故障丢失，那么Producer此时重发消息的唯一标识应该和之前那条消息一样，那只需在Consumer接受消息前判断是否有相同标识的消息，如果有则拦截。\n还可在消费端业务逻辑接口中做幂等判断，前面那种可以做到不侵入到业务代码。")]),t._v(" "),a("p",[t._v("非常好！但需要考虑，在分布式环境中“Consumer接受消息前判断是否有相同标识的消息”该如何实现呢？")]),t._v(" "),a("p",[t._v("=======================\n检测消息丢失是在还没上线之前做的测试，但是会不会可能在线下没出现消息不一致，但是在线上的时候出现消息丢失了？线上检测消息丢失逻辑会关闭，那线上是会有其他的检测机制么？\n这个检测逻辑可以在线上做，不会影响业务。")])])}),[],!1,null,null,null);s.default=r.exports}}]);