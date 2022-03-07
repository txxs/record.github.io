(window.webpackJsonp=window.webpackJsonp||[]).push([[751],{1142:function(e,t,s){"use strict";s.r(t);var n=s(13),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("#使用**@CookieValue"),s("strong",[e._v("注解映射")]),e._v("cookie"),s("strong",[e._v("值\n"),s("em",[s("strong",[e._v("@CookieValue")])]),e._v(" 注解能将一个方法参数与一个")]),e._v("HTTP cookie**的值进行绑定,即可自动解析cookie。\n看一个这样的场景：以下的这个cookie存储在一个HTTP请求中：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("\tt=4CBCBDA72BB84FC8BE0515344C6FDF46\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("下面的代码演示了拿到 t 这个cookie值的方法：\n定义@RequestMapping注解的处理方法")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('    @RequestMapping(path = "/logout/", method = {RequestMethod.GET, RequestMethod.POST})\n    @ResponseBody\n    public String logout(@CookieValue("ticket") String ticket) {\n        userService.logout(ticket);\n        return "redirect:/";\n    }\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("p",[e._v("若注解的目标方法参数不是 String 类型，则类型转换会自动进行\n这个注解可以注解到处理器方法上，在Servlet环境和Portlet环境都能使用。")])])}),[],!1,null,null,null);t.default=a.exports}}]);