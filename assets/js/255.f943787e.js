(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{637:function(_,v,t){"use strict";t.r(v);var a=t(13),s=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"_1-领域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-领域"}},[_._v("#")]),_._v(" 1 领域")]),_._v(" "),t("p",[_._v("用以确定边界。")]),_._v(" "),t("p",[_._v("DDD按规则细分业务领域，细分到一定程度，DDD会将问题范围限定在特定边界，在该边界内建立领域模型，进而用代码实现该领域模型，解决相应业务问题。")]),_._v(" "),t("p",[_._v("领域就是该边界内要解决的"),t("strong",[_._v("业务问题域")]),_._v("。其越大，则业务范围越广。")]),_._v(" "),t("h2",{attrs:{id:"领域模型的特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#领域模型的特点"}},[_._v("#")]),_._v(" 领域模型的特点")]),_._v(" "),t("p",[_._v("对业务领域建模：")]),_._v(" "),t("ul",[t("li",[_._v("细粒度的类，易扩展，易复用")]),_._v(" "),t("li",[_._v("可应对复杂业务逻辑")]),_._v(" "),t("li",[_._v("需要经验")])]),_._v(" "),t("p",[_._v("简单的领域模型：")]),_._v(" "),t("ul",[t("li",[_._v("几乎和DB中的表一一对应")]),_._v(" "),t("li",[_._v("复杂领域模型")]),_._v(" "),t("li",[_._v("使用了继承，组合，设计模式等各种手段")])]),_._v(" "),t("h1",{attrs:{id:"_2-子域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-子域"}},[_._v("#")]),_._v(" 2 子域")]),_._v(" "),t("p",[_._v("领域可再划分为多个子领域，即子域。\n每个子域对应一个更小的问题域或业务范围。")]),_._v(" "),t("p",[_._v("DDD是处理复杂领域的设计思想，它试图分离技术实现的复杂度。每个细分的领域都有一个知识体系，即DDD的领域模型。在所有子域研究完后，就建立了领域模型。")]),_._v(" "),t("p",[_._v("比如酒店行业，一开始的酒店核心系统是单体架构，后来业务发展，开始转型中台，引入微服务。微服务架构就需划分业务领域边界，建立领域模型，并实现微服务落地。\n可根据业务关联度及流程边界将酒店领域细分为：预订，入住，退房，客房服务，点餐等领域事件。")]),_._v(" "),t("ul",[t("li",[_._v("网上预订，入住，退房。是酒店领域一定要有的功能，这就是核心子域。")]),_._v(" "),t("li",[_._v("客房服务，点餐等不影响主要功能的就是支撑子领域。")]),_._v(" "),t("li",[_._v("在预订这个限界上下文内可以建立预订的领域模型的领域模型最后映射到系统就是预订微服务。")])]),_._v(" "),t("p",[_._v("不同行业的业务模型可能不同，但领域建模过程类似，核心思想都是将问题域逐步分解，降低业务理解和系统实现的复杂度。")]),_._v(" "),t("p",[_._v("领域可细分为不同子域，子域可根据自身重要性和功能属性划分为三类子域：")]),_._v(" "),t("h2",{attrs:{id:"_2-1-核心域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-核心域"}},[_._v("#")]),_._v(" 2.1  核心域")]),_._v(" "),t("p",[_._v("决定产品和公司核心竞争力的子域，是业务成功的主要因素和公司的核心竞争力。")]),_._v(" "),t("h2",{attrs:{id:"_2-2-通用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-通用域"}},[_._v("#")]),_._v(" 2.2  通用域")]),_._v(" "),t("p",[_._v("没有太多个性化需求，同时被多个子域使用的通用功能子域。比如认证、权限等，无企业特点限制，无需太多定制化。")]),_._v(" "),t("h2",{attrs:{id:"_2-3-支撑域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-支撑域"}},[_._v("#")]),_._v(" 2.3  支撑域")]),_._v(" "),t("p",[_._v("既不包含决定产品和公司核心竞争力的功能，也不包含通用功能的子域，但又是必需的支撑域。支撑域具有企业特性，但不具通用性，例如数据代码类的数据字典等系统。")]),_._v(" "),t("h2",{attrs:{id:"_2-4-划分核心域-通用域-支撑域的意义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-划分核心域-通用域-支撑域的意义"}},[_._v("#")]),_._v(" 2.4 划分核心域/通用域/支撑域的意义")]),_._v(" "),t("p",[_._v("划分是为了区分不同子域在公司内的不同功能属性和重要性，从而公司可对不同子域采取不同的资源投入和建设策略，其关注度和资源投入策略不同。找到核心域，且重点关注核心域。")]),_._v(" "),t("h1",{attrs:{id:"_3-总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-总结"}},[_._v("#")]),_._v(" 3 总结")]),_._v(" "),t("p",[_._v("领域的核心思想是将问题域逐级细分，降低业务理解和系统实现的复杂度。\n通过领域细分，逐步缩小微服务需要解决的问题域，构建合适的领域模型，映射成系统就是微服务。")])])}),[],!1,null,null,null);v.default=s.exports}}]);