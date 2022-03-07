(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{517:function(n,s,t){"use strict";t.r(s);var i=t(13),e=Object(i.a)({},(function(){var n=this,s=n.$createElement,t=n._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"_136-商品详情页动态渲染系统-双机房部署接入层与应用层-nginx-lua"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_136-商品详情页动态渲染系统-双机房部署接入层与应用层-nginx-lua"}},[n._v("#")]),n._v(" 136. 商品详情页动态渲染系统：双机房部署接入层与应用层 Nginx+Lua")]),n._v(" "),t("p",[t("img",{attrs:{src:"https://txxs.github.io/pic/record/cache-pdp/markdown-img-paste-20190716231655831.png",alt:""}})]),n._v(" "),t("p",[n._v("会分两个目录来安装 OpenResty:")]),n._v(" "),t("ul",[t("li",[n._v("distribution_nginx：分发层，使用端口 80")]),n._v(" "),t("li",[n._v("app_nginx：应用层，使用端口 8000")])]),n._v(" "),t("p",[n._v("基本目录：/usr/servers/")]),n._v(" "),t("p",[n._v("安装 "),t("RouterLink",{attrs:{to:"/design/cache-pdp/052.html"}},[n._v("openResty + lua 请参考这里")]),n._v("，按照之前的安装方式，安装在这里的指定目录下，部署内容不包括工程化 nginx+lua 项目结构")],1),n._v(" "),t("p",[n._v("过程中需要注意的是路径，比如下面这个 --prefix 的路径一定要是对应的 nginx 路径，否则就装成之前的了")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("./configure --prefix=/usr/servers/distribution_nginx --with-http_realip_module  --with-pcre  --with-luajit --add-module=./bundle/ngx_cache_purge-2.3/ --add-module=./bundle/nginx_upstream_check_module-0.3.0/ -j2\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br")])]),t("p",[n._v("验证的时候使用下面的，如 distribution_nginx 目录下的 nginx，才表示没有安装错目录")]),n._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v("root@eshop-detail01 nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# /usr/servers/distribution_nginx/nginx/sbin/nginx -t")]),n._v("\nnginx: the configuration "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("file")]),n._v(" /usr/servers/distribution_nginx/nginx/conf/nginx.conf syntax is ok\nnginx: configuration "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("file")]),n._v(" /usr/servers/distribution_nginx/nginx/conf/nginx.conf "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[n._v("test")]),n._v(" is successful\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br")])]),t("p",[n._v("同样启动也是启动对应目录下的")]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("/usr/servers/distribution_nginx/nginx/sbin/nginx\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br")])]),t("p",[n._v("启动后访问：http://192.168.99.11/lua 表示搭建第一个成功")]),n._v(" "),t("p",[n._v("只搭建了一个目前，后续几个照样搭建。")]),n._v(" "),t("p",[n._v("在搭建 app_nginx 的时候，需要把 nginx.conf 中的端口号修改为 8000，还有 lua.conf 中的也修改为 8000，才能正常启动")]),n._v(" "),t("p",[n._v("安装完毕后，访问一下地址是可以访问到的")]),n._v(" "),t("ul",[t("li",[n._v("http://192.168.99.11/lua")]),n._v(" "),t("li",[n._v("http://192.168.99.11:8000/lua")]),n._v(" "),t("li",[n._v("http://192.168.99.12/lua")]),n._v(" "),t("li",[n._v("http://192.168.99.12:8000/lua")])])])}),[],!1,null,null,null);s.default=e.exports}}]);