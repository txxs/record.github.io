(window.webpackJsonp=window.webpackJsonp||[]).push([[1284],{1678:function(s,t,a){"use strict";a.r(t);var e=a(13),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"消息大小考虑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息大小考虑"}},[s._v("#")]),s._v(" 消息大小考虑")]),s._v(" "),a("p",[s._v("crc16()一共可以有：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("^16 -1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65535")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("不同的余数，代表bitmap  有 65535 bit。所以bitmap的大小可以计算为")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65535")]),s._v(" / "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("8bit/byte"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("/1024"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("1k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.99")]),s._v(" Kbytes\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("尽管crc16能得到65535个值，但redis选择16384个slot，是因为16384的消息只占用了2k，而65535则需要8k。")]),s._v(" "),a("p",[s._v("正常的心跳包携带节点的完整配置，可以以幂等方式替换旧配置以更新旧配置。这意味着它们包含原始形式的节点的插槽配置，该节点使用2K的空间和16384个slot，但使用65535的插槽会使用令人望而却步的 8K 的空间。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("65k "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" * "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" bit/byte"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" * "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("1k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 8K bitmap size\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"为什么要传全量的slot状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要传全量的slot状态"}},[s._v("#")]),s._v(" 为什么要传全量的slot状态？")]),s._v(" "),a("p",[s._v("因为分布式场景，基于状态的设计更合理，状态的传播具有幂等性。")]),s._v(" "),a("h1",{attrs:{id:"集群规模设计考虑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集群规模设计考虑"}},[s._v("#")]),s._v(" 集群规模设计考虑")]),s._v(" "),a("p",[s._v("同时，由于其他设计权衡，Redis Cluster 不太可能扩展到超过 1000 个主节点。集群设计最多支持1000个分片，16384是相对比较好的选择，需要保证在最大集群规模下，slot均匀分布场景下，每个分片平均分到的slot不至于太小。\n所以16384是在正确的范围内，以确保每个 master 有足够的插槽，最多 1000 个 maters，但这个数量足够小，可以轻松地将插槽配置作为原始位图传播。")]),s._v(" "),a("p",[s._v("在小集群中，位图将难以压缩，因为当 N 小时，位图将设置的槽位/N 位占很大比例的位。")]),s._v(" "),a("h2",{attrs:{id:"为什么不考虑压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么不考虑压缩"}},[s._v("#")]),s._v(" 为什么不考虑压缩？")]),s._v(" "),a("p",[s._v("集群规模较小的场景下，每个分片负责大量的slot，很难压缩。")]),s._v(" "),a("p",[s._v("简而言之，它是消息大小和主机持有的平均slot数之间权衡的结果。")]),s._v(" "),a("p",[s._v("参考")]),s._v(" "),a("ul",[a("li",[s._v("https://github.com/redis/redis/issues/2576")])])])}),[],!1,null,null,null);t.default=r.exports}}]);