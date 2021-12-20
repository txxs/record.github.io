(window.webpackJsonp=window.webpackJsonp||[]).push([[416],{845:function(s,t,a){"use strict";a.r(t);var e=a(13),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"gitweb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitweb"}},[s._v("#")]),s._v(" GitWeb")]),s._v(" "),a("p",[s._v("如果你对项目有 "),a("strong",[s._v("读写权限")]),s._v(" 或 "),a("strong",[s._v("只读权限")]),s._v("，你可能需要建立起一个基于网页的简易查看器。 Git 提供了一个叫做 GitWeb 的 CGI 脚本来做这项工作。")]),s._v(" "),a("p",[a("img",{attrs:{src:"assets/9a8b6b90df8e6f0e06dc547f1174b18a.png",alt:"GitWeb 的网页用户界面"}})]),s._v(" "),a("p",[s._v("如果你想要查看 GitWeb 如何展示你的项目，并且在服务器上安装了轻量级网络服务器比如 "),a("code",[s._v("lighttpd")]),s._v(" 或"),a("code",[s._v("webrick")]),s._v("， Git 提供了一个命令来让你启动一个临时的服务器。 在 Linux 系统的电脑上，lighttpd 通常已经安装了，所以你只需要在项目目录里执行 "),a("code",[s._v("git instaweb")]),s._v(" 命令即可。 如果你使用 Mac 系统， Mac OS X Leopard 系统已经预安装了 "),a("code",[s._v("Ruby")]),s._v("，所以 "),a("code",[s._v("webrick")]),s._v(" 或许是你最好的选择。 如果不想使用 lighttpd 启动 instaweb 命令，你需要在执行时加入 "),a("code",[s._v("–httpd")]),s._v(" 参数。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ git instaweb --httpd=webrick\n[2009-02-21 10:02:21] INFO  WEBrick 1.3.1\n[2009-02-21 10:02:21] INFO  ruby 1.8.6 (2008-03-03) [universal-darwin9.0]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("这个命令启动了一个监听 1234 端口的 HTTP 服务器，并且自动打开了浏览器。 这对你来说十分方便。 当你已经完成了工作并想关闭这个服务器，你可以执行同一个命令，并加上 "),a("code",[s._v("–stop")]),s._v(" 选项：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ git instaweb --httpd=webrick --stop\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果你现在想为你的团队或你托管的开源项目持续的运行这个页面，你需要通过普通的 Web 服务器来设置 CGI 脚本。 一些 Linux 发行版的软件库有 gitweb 包，可以通过 apt 或 yum 来安装，你可以先试试。 接下来我们来快速的了解一下如何手动安装 GitWeb。 首先，你需要获得 Git 的源代码，它包含了 GitWeb ，并可以生成自定义的 CGI 脚本：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git://git.kernel.org/pub/scm/git/git.git\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" git/\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GITWEB_PROJECTROOT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/opt/git"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("prefix")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr gitweb\n    SUBDIR gitweb\n    SUBDIR "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/\nmake"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": `GIT-VERSION-FILE' is up to date.\n    GEN gitweb.cgi\n    GEN static/gitweb.js\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -Rf gitweb /var/www/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("需要注意的是，你需要在命令中指定 GITWEB_PROJECTROOT 变量来让程序知道你的 Git 版本库的位置。 现在，你需要在 Apache 中使用这个 CGI 脚本，你需要为此添加一个虚拟主机：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<VirtualHost *:80>\n    ServerName gitserver\n    DocumentRoot /var/www/gitweb\n    <Directory /var/www/gitweb>\n        Options ExecCGI +FollowSymLinks +SymLinksIfOwnerMatch\n        AllowOverride All\n        order allow,deny\n        Allow from all\n        AddHandler cgi-script cgi\n        DirectoryIndex gitweb.cgi\n    </Directory>\n</VirtualHost>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("再次提醒，GitWeb 可以通过任何一个支持 CGI 或 Perl 的网络服务器架设；如果你需要的话，架设起来应该不会很困难。 现在，你可以访问 http://gitserver/ 在线查看你的版本库。")])])}),[],!1,null,null,null);t.default=n.exports}}]);