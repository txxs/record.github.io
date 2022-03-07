(window.webpackJsonp=window.webpackJsonp||[]).push([[1347],{1738:function(a,t,s){"use strict";s.r(t);var i=s(13),l=Object(i.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h3",{attrs:{id:"kill-pid和kill-9-pid的区别是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kill-pid和kill-9-pid的区别是什么"}},[a._v("#")]),a._v(" kill pid和kill -9 pid的区别是什么？")]),a._v(" "),s("p",[a._v("kill pid")]),a._v(" "),s("p",[a._v("代表通知应用程序自行关闭。系统会发生一个SIGTERM命令给进程对应的应用程序，让应用程序释放自己的资源后，自行关闭。大部分应用程序可能接受后会释放资源，自行停止，也有一些程序不会理会。")]),a._v(" "),s("p",[a._v("kill -9 pid")]),a._v(" "),s("p",[a._v("代表强制关闭进程。系统会发送一个SIGKILL命令给进程。")]),a._v(" "),s("p",[a._v("一般建议先执行kill pid，然后过一两秒后等程序做一些释放资源的操作，然后再使用kill -9命令强制删除。")]),a._v(" "),s("p",[a._v("https://www.cnblogs.com/aspirant/p/11543456.html")]),a._v(" "),s("h3",{attrs:{id:"僵尸进程和孤儿进程是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#僵尸进程和孤儿进程是什么"}},[a._v("#")]),a._v(" 僵尸进程和孤儿进程是什么？")]),a._v(" "),s("p",[a._v("僵尸进程就是子进程调用exit退出或者是运行时发生致命错误，结束运行时，一般会把进程的退出状态通知给操作系统，操作系统发送SIGCHLD信号告诉父进程“子进程退出了”，父进程一般会使用wait系统调用以获得子进程的退出状态，这样内核就可以在内存中释放子进程了，但是如果父进程没有进行wait系统调用，子进程就会驻留在内存，成为僵尸进程。")]),a._v(" "),s("p",[a._v("孤儿进程就是父进程退出，但是它的子进程还在进行，这些子进程就会变成孤儿进程，被init进程(进程号为1)所收养，由它来管理和收集子进程的状态。由于孤儿进程有init进程循环的wait()调用回收资源，所以不会产生什么危害。")]),a._v(" "),s("h5",{attrs:{id:"linux指令使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux指令使用"}},[a._v("#")]),a._v(" Linux指令使用")]),a._v(" "),s("p",[a._v("统计access.log中ip访问次数前十的")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("cat access.log | awk '{ print $1}' | sort -n | uniq -c | sort - r |head 10 \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("统计当前目录下（包含子目录） java 的文件的代码总行数。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("wc -l `find . -name \"*.java\"` | awk '{ sum=sum+$1 } END { print sum }'\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"linux进程间通信的方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux进程间通信的方式"}},[a._v("#")]),a._v(" Linux进程间通信的方式？")]),a._v(" "),s("p",[a._v("《Linux 的进程间通信》 https://zhuanlan.zhihu.com/p/58489873")]),a._v(" "),s("p",[a._v("浅析进程间通信的几种方式（含实例源码） https://zhuanlan.zhihu.com/p/94856678")]),a._v(" "),s("p",[a._v("https://mp.weixin.qq.com/s/WgZaS5w5IXa3IBGRsPKtbQ")])])}),[],!1,null,null,null);t.default=l.exports}}]);