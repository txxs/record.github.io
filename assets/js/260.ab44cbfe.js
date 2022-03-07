(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{648:function(_,v,t){"use strict";t.r(v);var a=t(13),s=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"_1-ddd分层架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-ddd分层架构"}},[_._v("#")]),_._v(" 1 DDD分层架构")]),_._v(" "),t("h2",{attrs:{id:"_1-1-分层架构的基本原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-分层架构的基本原则"}},[_._v("#")]),_._v(" 1.1 分层架构的基本原则")]),_._v(" "),t("p",[t("strong",[_._v("每层只与位于其下方的层发生耦合。")])]),_._v(" "),t("h2",{attrs:{id:"_1-2-分层架构的分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-分层架构的分类"}},[_._v("#")]),_._v(" 1.2 分层架构的分类")]),_._v(" "),t("ul",[t("li",[_._v("严格分层架构(Strict Layers Architecture)\n某层只能与其直接下层耦合，即我的奴隶的奴隶，不是我的奴隶。")]),_._v(" "),t("li",[_._v("松散分层架构(Relaxed Layers Architecture)\n允许任意上层与任意下层耦合。由于用户接口层和应用服务通常需要与基础设施打交道，许多系统都是该架构。")])]),_._v(" "),t("blockquote",[t("p",[_._v("较低层有时也可与较高层耦合，但只限于采用观察者 (Observer)模式或者调停者(Mediator)模式场景。\n较低层"),t("strong",[_._v("绝不能直接访问")]),_._v("较高层。例如，在使用调停者模式时，较高层可能实现了较低层的接口，然后将实现对象作为参数传递到较低层。当较低层调用该实现时， 它并不知道实现出自何处。")])]),_._v(" "),t("h2",{attrs:{id:"_1-3-分层架构演进"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-分层架构演进"}},[_._v("#")]),_._v(" 1.3 分层架构演进")]),_._v(" "),t("h3",{attrs:{id:"_1-3-1-传统四层架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-传统四层架构"}},[_._v("#")]),_._v(" 1.3.1 传统四层架构")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201010103034893.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_SmF2YUVkZ2U=,size_16,color_FFFF00,t_70#pic_center",alt:""}})]),_._v(" "),t("p",[_._v("将领域模型和业务逻辑分离出来，并减少对基础设施、用户界面甚至应用层逻辑的依赖，因为它们不属业务逻辑。将一个夏杂的系统分为不同的层，每层都应该具有良好的内聚性，并且只依赖于比其自身更低的层。")]),_._v(" "),t("p",[_._v("传统分层架构的"),t("strong",[_._v("基础设施层")]),_._v("位于底层，持久化和消息机制便位于该层。\n这里的消息包含")]),_._v(" "),t("ul",[t("li",[_._v("MQ消息")]),_._v(" "),t("li",[_._v("SMTP")]),_._v(" "),t("li",[_._v("文本消息(SMS)")])]),_._v(" "),t("p",[_._v("可将基础设施层中所有组件看作应用程序的低层服务，较高层与该层发生耦合以复用技术基础设施。即便如此，依然应"),t("code",[_._v("避免核心的领域模型对象与基础设施层直接耦合")]),_._v("。")]),_._v(" "),t("h3",{attrs:{id:"_1-3-2-改良版四层架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-改良版四层架构"}},[_._v("#")]),_._v(" 1.3.2 改良版四层架构")]),_._v(" "),t("h4",{attrs:{id:"传统架构的缺陷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#传统架构的缺陷"}},[_._v("#")]),_._v(" 传统架构的缺陷")]),_._v(" "),t("p",[_._v("DDD初创开发团队发现，将基础设施层放在最底层存在缺点，比如此时领域层中的一些技术实现就很困难：")]),_._v(" "),t("ul",[t("li",[_._v("违背分层架构的基本原则")]),_._v(" "),t("li",[_._v("难以编写测试用例")])]),_._v(" "),t("p",[_._v("何解？\n使用"),t("strong",[_._v("依赖反转设计原则")]),_._v("：低层服务（如基础设施层）应依赖高层组件（比如用户界面层、应用层和领域层）所提供的接口。")]),_._v(" "),t("h4",{attrs:{id:"应用依赖反转原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用依赖反转原则"}},[_._v("#")]),_._v(" 应用依赖反转原则")]),_._v(" "),t("ul",[t("li",[_._v("依赖反转原则后的分层方式：基础设施层在最上方，可实现所有其他层中定义的接口\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201010221054540.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_SmF2YUVkZ2U=,size_16,color_FFFFFF,t_70#pic_center",alt:""}})])]),_._v(" "),t("blockquote",[t("p",[_._v("依赖反转原则真的可以支持所有层吗？\n有人认为依赖反转原则中只存在两层：最上方和最下方，上层实现下层定义的抽象接口。因此上图的基础设施层将位于最上方，而用户接口层、应用层和领域层应作"),t("strong",[_._v("同层且都位于下方")]),_._v("。对此大家可保留自己意见。")])]),_._v(" "),t("h1",{attrs:{id:"_2-各层职责"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-各层职责"}},[_._v("#")]),_._v(" 2 各层职责")]),_._v(" "),t("h2",{attrs:{id:"_2-1-用户接口层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-用户接口层"}},[_._v("#")]),_._v(" 2.1 用户接口层")]),_._v(" "),t("p",[_._v("一般包括用户接口、Web 服务等。")]),_._v(" "),t("p",[_._v("只处理用户显示和用户请求，不应包含领域或业务逻辑。\n有人认为，既然用户接口需验证用户输入，就无可避免应该包含业务逻辑。事实上，用户接口所进行的验证和对领域模型的验证不同：对那些粗制滥造且只面向领域模型的验证行为，应该予以限制。")]),_._v(" "),t("p",[_._v("如果用户接口使用了领域模型中的对象，那么此时"),t("strong",[_._v("领域对象仅限于数据渲染展现")]),_._v("。在采用这种方式时，可使用展现模型对用户接口与领域对象进行解耦。\n由于用户可能是人，也可能是其他系统，有时用户接口层将采用开放主机服务的方式向外提供API。\n"),t("strong",[_._v("用户接口层是应用层的直接用户。")]),_._v("\n用户接口层在于前后端调用的适配。若你的微服务要提供服务给很多外部应用，而对每个外部应用的入参出参都不同，你不可能开发一堆一对一的应用服务，这时Facade接口就起到了很好的作用，包括DO和DTO对象的组装和转换。")]),_._v(" "),t("h2",{attrs:{id:"_2-2-应用层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-应用层"}},[_._v("#")]),_._v(" 2.2 应用层")]),_._v(" "),t("p",[_._v("主要包含应用服务，理论上"),t("strong",[_._v("不应有业务规则或逻辑")]),_._v("，而主要是面向用例和流程相关的操作。")]),_._v(" "),t("ul",[t("li",[_._v("应用层位于领域层之上，因为领域层包含多个聚合，所以它可协调"),t("strong",[_._v("多个聚合服务和领域对象完成服务编排和组合")]),_._v("，协作完成业务。")]),_._v(" "),t("li",[_._v("应用层也是微服务间的交互通道，它可调用其它微服务，完成"),t("strong",[_._v("微服务间的服务组合和编排")]),_._v("。")])]),_._v(" "),t("p",[_._v("开发设计时，不要将本该放在领域层的业务逻辑放到应用层。因为"),t("strong",[_._v("庞大的应用层会使领域模型失焦，时间一长，微服务就会退化为MVC架构，导致业务逻辑混乱")]),_._v("。")]),_._v(" "),t("p",[_._v("应用服务是在应用层，负责")]),_._v(" "),t("ul",[t("li",[_._v("服务的组合、编排、转发、转换和传递，处理业务用例的执行顺序以及结果的拼装，以粗粒度服务通过API网关发布到前端")]),_._v(" "),t("li",[_._v("安全认证")]),_._v(" "),t("li",[_._v("权限校验")]),_._v(" "),t("li",[_._v("事务控制")]),_._v(" "),t("li",[_._v("发送或订阅领域事件")])]),_._v(" "),t("h2",{attrs:{id:"_2-3-领域层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-领域层"}},[_._v("#")]),_._v(" 2.3 领域层")]),_._v(" "),t("p",[_._v("主要包含聚合根、实体、值对象、领域服务等领域模型中的领域对象。")]),_._v(" "),t("p",[_._v("实现核心业务逻辑，通过各种校验保证业务正确性。领域层主要体现领域模型的业务能力，它用来表达业务概念、业务状态和业务规则。")]),_._v(" "),t("p",[_._v("领域模型的业务逻辑主要由实体和领域服务实现：")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("实体采用充血模型")]),_._v(" 实现所有与之相关的业务功能。")])]),_._v(" "),t("p",[_._v("实体和领域服务在实现业务逻辑上不是同级，当领域中的某些功能，单一实体或值对象无法实现，就会用到领域服务，它可组合聚合内的多个实体或值对象，实现复杂业务逻辑。")]),_._v(" "),t("h2",{attrs:{id:"_2-4-基础层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-基础层"}},[_._v("#")]),_._v(" 2.4 基础层")]),_._v(" "),t("p",[_._v("为其它各层提供通用技术基础服务：")]),_._v(" "),t("ul",[t("li",[_._v("三方工具")]),_._v(" "),t("li",[_._v("驱动")]),_._v(" "),t("li",[_._v("MQ")]),_._v(" "),t("li",[_._v("API网关")]),_._v(" "),t("li",[_._v("文件")]),_._v(" "),t("li",[_._v("缓存")]),_._v(" "),t("li",[_._v("DB\n最常用的")])]),_._v(" "),t("p",[_._v("基础层包含基础服务，它采用依赖反转，封装基础资源服务，实现应用层、领域层与基础层解耦。")]),_._v(" "),t("p",[_._v("MVC架构由于上层应用对DB强耦合，很多公司在架构演进最怕换DB，一旦更换，可能需重写一堆代码。\n但采用依赖反转，应用层即可通过解耦保持独立核心业务逻辑。当DB变更，只需更换DB基础服务。")]),_._v(" "),t("h1",{attrs:{id:"_3-微服务架构演进"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-微服务架构演进"}},[_._v("#")]),_._v(" 3 微服务架构演进")]),_._v(" "),t("p",[_._v("领域模型中对象的层次从内到外依次是：值对象、实体、聚合和限界上下文。")]),_._v(" "),t("p",[_._v("实体或值对象的简单变更，一般不会让领域模型和微服务发生大变。但聚合的重组或拆分却可以。因为聚合内业务功能内聚，能独立完成特定业务。那聚合的重组或拆分，势必引起业务模块和系统功能变化。")]),_._v(" "),t("p",[_._v("可以聚合为基础单元，完成领域模型和微服务架构的演进。\n聚合可作为整体，在不同领域模型间重组或拆分，或直接将一个聚合独立为微服务。")]),_._v(" "),t("h2",{attrs:{id:"微服务架构的演进案例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微服务架构的演进案例"}},[_._v("#")]),_._v(" 微服务架构的演进案例")]),_._v(" "),t("p",[_._v("现有\n微服务 1：包含聚合 a、b、c\n微服务2：\n微服务3：包含聚合 d、e、f")]),_._v(" "),t("ul",[t("li",[_._v("当发现微服务1中聚合a的功能经常被高频访问，以致拖累了整个微服务1的性能，可把聚合a，从微服务1中剥离，独立为微服务2以应对高性能场景")]),_._v(" "),t("li",[_._v("随业务发展，发现微服务3的领域模型变化，聚合d会更适合放到微服务1的领域模型。即可将聚合d整体迁移到微服务1。注意定义好聚合间的代码边界")]),_._v(" "),t("li",[_._v("架构演进后，微服务1从最初包含聚合a、b、c，演进为包含聚合b、c、d的新领域模型和微服务")])]),_._v(" "),t("p",[_._v("可见，好的聚合和代码模型的边界设计，可让你快速应对业务变化，轻松实现领域模型和微服务架构演进。")]),_._v(" "),t("h1",{attrs:{id:"微服务内服务的演进"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微服务内服务的演进"}},[_._v("#")]),_._v(" 微服务内服务的演进")]),_._v(" "),t("p",[_._v("在微服务内部，实体的方法被领域服务组合和封装，领域服务又被应用服务组合和封装。在服务逐层组合和封装的过程中，你会发现这样一个有趣的现象。\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201011030454710.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_SmF2YUVkZ2U=,size_16,color_FFFFFF,t_70#pic_center",alt:""}}),_._v("\n服务设计时，你并不一定能完整预测有哪些下层服务会被多少个上层服务组装，因此领域层通常只提供一些原子服务，比如领域服务a、b、c。但随系统功能增强和外部接入越来越多，应用服务不断丰富。终有一日，你会发现领域服务b和c同时多次被多个应用服务调用了，执行顺序也基本一致。这时你可以考虑将b和c合并，再将应用服务中b、c的功能下沉到领域层，演进为新的领域服务（b+c）。这样既减少了服务的数量，也减轻了上层服务组合和编排的复杂度。")]),_._v(" "),t("p",[_._v("这就是服务演进，领域模型会越来越能适应需求快速变化。")]),_._v(" "),t("h1",{attrs:{id:"从mvc跨越到ddd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从mvc跨越到ddd"}},[_._v("#")]),_._v(" 从MVC跨越到DDD")]),_._v(" "),t("p",[_._v("由于层间松耦合，可专注本层设计，而不必关心其它层，也不必担心自己的设计会影响其它层。即DDD成功降低层与层之间的依赖。")]),_._v(" "),t("p",[_._v("分层架构使得程序结构更清晰，升级和维护更容易。修改某层代码时，只要本层接口参数不变，其它层不必修改。即使本层接口发生变化，也只影响相邻的上层，修改工作量小且可控。")]),_._v(" "),t("p",[_._v("传统企业应用大多是单体架构，而单体架构则大多是三层架构。三层架构解决了程序内代码间调用复杂、代码职责不清的问题，但这种分层是逻辑概念，在物理上它是中心化的集中式架构，并不适合分布式微服务架构。")]),_._v(" "),t("p",[_._v("DDD分层要类似三层架构，只是在DDD中，这些要素被重新划分了层，确定了层与层之间的交互规则和职责边界。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201011030552460.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_SmF2YUVkZ2U=,size_16,color_FFFFFF,t_70#pic_center",alt:""}}),_._v("\nDDD分层架构相比MVC（只有API）在用户接口层新增了DTO，给前端提供了更多的可使用数据和更高的展示灵活性。")]),_._v(" "),t("p",[_._v("DDD分层架构对三层架构的业务逻辑层进行了更清晰的划分，改善了三层架构核心业务逻辑混乱，代码改动相互影响大的情况。")]),_._v(" "),t("p",[_._v("MVC架构向DDD分层架构演进，主要发生在业务逻辑层和数据访问层。\nDDD分层架构将业务逻辑层的服务拆分到了应用层和领域层：")]),_._v(" "),t("ul",[t("li",[_._v("应用层快速响应前端的变化")]),_._v(" "),t("li",[_._v("领域层实现领域模型的能力")])]),_._v(" "),t("p",[_._v("数据访问层和基础层之间：")]),_._v(" "),t("ul",[t("li",[_._v("三层架构数据访问采用DAO方式")]),_._v(" "),t("li",[_._v("DDD分层架构的数据库等基础资源访问，采用了仓储（Repository）设计模式，通过依赖倒置实现各层对基础资源的解耦。")])]),_._v(" "),t("blockquote",[t("p",[_._v("仓储本身属基础层，但考虑到一个聚合对应一个仓储，为了以后聚合代码整体迁移方便，在微服务代码目录设计时，在聚合目录下增加一个Repository的仓储目录，跟仓储相关的代码都在这个目录下。\n这个目录下的代码与聚合的其它业务代码是分开的。如果未来换数据库，只需将Repository目录下的代码替换。而如果聚合需要整体迁移到其它微服务中去，仓储的代码也会一并迁移。")])]),_._v(" "),t("p",[_._v("仓储又分为两部分：仓储接口和仓储实现。仓储接口放在领域层中，仓储实现放在基础层。原来三层架构通用的第三方工具包、驱动、Common、Utility、Config等通用的公共的资源类统一放到了基础层。")]),_._v(" "),t("p",[_._v("MVC 到 DDD 具体操作如下：")]),_._v(" "),t("h3",{attrs:{id:"抽象数据存储层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#抽象数据存储层"}},[_._v("#")]),_._v(" 抽象数据存储层")]),_._v(" "),t("p",[_._v("一般将Data Access层做抽象，降低系统对DB的直接依赖。\n举个例子：")]),_._v(" "),t("ul",[t("li",[_._v("新建Account实体对象：一个实体（Entity）是拥有ID的域对象，除了拥有数据之外，同时拥有行为。Entity和数据库储存格式无关。")])]),_._v(" "),t("p",[_._v("对象储存接口类AccountRepository：Repository只负责Entity对象的存储和读取，而Repository的实现类完成数据库存储的细节。通过加入Repository接口，"),t("strong",[_._v("底层数据库连接可以通过不同的实现类而替换")]),_._v("。")]),_._v(" "),t("blockquote",[t("p",[_._v("参考")]),_._v(" "),t("ul",[t("li",[_._v("《实现领域驱动设计》")]),_._v(" "),t("li",[_._v("DDD分层架构：有效降低层与层之间的依赖")]),_._v(" "),t("li",[_._v("https://zhuanlan.zhihu.com/p/343388831")]),_._v(" "),t("li",[_._v("https://zhuanlan.zhihu.com/p/342826364")])])])])}),[],!1,null,null,null);v.default=s.exports}}]);