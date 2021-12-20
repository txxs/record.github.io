(window.webpackJsonp=window.webpackJsonp||[]).push([[429],{853:function(s,t,a){"use strict";a.r(t);var n=a(13),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"脚本-github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#脚本-github"}},[s._v("#")]),s._v(" 脚本 GitHub")]),s._v(" "),a("p",[s._v("所以现在我们已经介绍了 GitHub 的大部分功能与工作流程，但是任意一个小组或项目都会去自定义，因为他们想要创造或扩展想要整合的服务。")]),s._v(" "),a("p",[s._v("对我们来说很幸运的是，GitHub 在许多方面都真的很方便 Hack。 在本节中我们将会 "),a("strong",[s._v("介绍如何使用 GitHub 钩子系统与 API 接口")]),s._v("，使 GitHub 按照我们的设想来工作。")]),s._v(" "),a("h2",{attrs:{id:"钩子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#钩子"}},[s._v("#")]),s._v(" 钩子")]),s._v(" "),a("p",[s._v("GitHub 仓库管理中的钩子与服务区块是 GitHub 与外部系统交互最简单的方式。")]),s._v(" "),a("h2",{attrs:{id:"服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务"}},[s._v("#")]),s._v(" 服务")]),s._v(" "),a("p",[s._v("首先我们来看一下服务。 钩子与服务整合 "),a("strong",[s._v("都可以在仓库的设置区块")]),s._v(" 中找到，就在我们之前添加协作者与改变项目的默认分支的地方。 在 「Webhooks and Services」 标签下你会看到与 下图类似的内容")]),s._v(" "),a("p",[a("img",{attrs:{src:"assets/a519de6c2296a4512b8bd211664222e0.png",alt:"服务与钩子"}})]),s._v(" "),a("p",[s._v("有许多可以选择的服务，大多数是整合到其他的商业与开源系统中。 它们中的大多数是为了整合持续集成服务、BUG 与问题追踪系统、聊天室系统与文档系统。 我们将会通过设置一个非常简单的例子来介绍。 如果从 “Add Service” 选择  “email”，会得到一个类似下图的内容")]),s._v(" "),a("p",[a("img",{attrs:{src:"assets/daf5209e800060e6127ddf4c17526e27.png",alt:"电子邮件服务"}})]),s._v(" "),a("p",[s._v("在本例中，如果我们点击  “Add service”  按钮，"),a("strong",[s._v("每次有人推送内容到仓库时，指定的电子邮件地址都会收到一封邮件。 服务可以监听许多不同类型的事件，但是大多数只监听推送事件然后使用那些数据做一些事情")]),s._v("。")]),s._v(" "),a("p",[s._v("如果有一个正在使用的系统想要整合到 GitHub，应当先检查这里看有没有已有的可用的服务整合。 例如，如果正使用 Jenkins 来测试你的代码库，当每次有人推送到你的仓库时你可以启用 Jenkins 内置的整合启动测试运行。")]),s._v(" "),a("p",[s._v("注意：新版 GitHub 没有找到这个页面，应该被 「Notifications：settings/notifications」替代了")]),s._v(" "),a("h2",{attrs:{id:"钩子-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#钩子-2"}},[s._v("#")]),s._v(" 钩子")]),s._v(" "),a("p",[s._v("如果需要做一些更具体的事，或者想要整合一个不在这个列表中的服务或站点，可以转而使用更通用的钩子系统。 GitHub 仓库钩子是非常简单的。 "),a("strong",[s._v("指定一个 URL 然后 GitHub 在任一期望的事件发生时就会发送一个 HTTP 请求到那个 URL 。")])]),s._v(" "),a("p",[s._v("通常做这件事的方式是可以设置一个小的 web 服务来监听 GitHub 钩子请求然后使用收到的数据做一些事情。")]),s._v(" "),a("p",[s._v("下图新增一个钩子的配置页面")]),s._v(" "),a("p",[a("img",{attrs:{src:"assets/46bd9a66255c7ca7285a9db5bd98e8d8.png",alt:"Web 钩子配置"}})]),s._v(" "),a("p",[s._v("注意：新版 GitHub 钩子配置路径为 「Webhooks ：settings/hooks」")]),s._v(" "),a("p",[s._v("Web 钩子的设置非常简单。 大多数情况下只需要输入一个 URL 与一个密钥然后点击  「Add webhook」。 有几个选项可以指定在哪个事件时想要 GitHub 发送请求 — 默认的行为是只有当某人推送新代码到仓库的任一分支时的 push 事件获得一个请求。")]),s._v(" "),a("p",[s._v("让我们看一个设置处理 web 钩子的 web 服务的小例子。 我们将会使用 Ruby web 框架 Sinatra，因为它相当简洁，应该能够轻松地看到我们正在做什么。")]),s._v(" "),a("p",[s._v("假设我们 "),a("strong",[s._v("想要在某个特定的人推送到我们的项目的特定分支并修改一个特定文件时得到一封邮件")]),s._v("。 我们可以相当容易地使用类似下面的代码做到：")]),s._v(" "),a("div",{staticClass:"language-ruby line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("require")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sinatra'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("require")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'json'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("require")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mail'")]),s._v("\n\npost "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/payload'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n  push "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("parse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解析 JSON")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 搜集我们正在寻找的数据")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取推送的人 和 分支名称")]),s._v("\n  pusher "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" push"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pusher"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  branch "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" push"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ref"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取此次提交中新增、更新、移除 过的文件列表")]),s._v("\n  files "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" push"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"commits"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("map "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("commit"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n    commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'added'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'modified'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'removed'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n  files "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" files"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("flatten"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("uniq\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查是否符合我们设置的条件")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" pusher "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'schacon'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v("\n     branch "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ref/heads/special-branch'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v("\n     files"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("include")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'special-file.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果满足，则发送邮件")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Mail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("deliver "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n      from     "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tchacon@example.com'")]),s._v("\n      to       "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tchacon@example.com'")]),s._v("\n      subject  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Scott Changed the File'")]),s._v("\n      body     "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ALARM"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])]),a("p",[s._v("这里我们拿到一个 "),a("strong",[s._v("GitHub 传送给我们的 JSON 请求")]),s._v(" 然后查找推送者，他们推送到了什么分支以及推送的所有提交都改动了哪些文件。 然后我们检查它是否与我们的条件区配，如果匹配则发送一封邮件。")]),s._v(" "),a("p",[s._v("为了开发与测试类似这样的东西，在设置钩子的地方有一个漂亮的开发者控制台。 可以看到 GitHub 为那个 webhook 的最后几次请求。 对每一个钩子，当它发送后都可以深入挖掘，检测它是否是成功的与请求及回应的消息头与消息体。 这使得测试与调试钩子非常容易。")]),s._v(" "),a("p",[s._v("下图是 Web 钩子调试信息")]),s._v(" "),a("p",[a("img",{attrs:{src:"assets/1a2f1fbe3dc322d72a7cd3501d81defe.png",alt:"Web 钩子调试信息"}})]),s._v(" "),a("p",[s._v("开发者控制台的另一个很棒的功能是可以轻松地 "),a("strong",[s._v("重新发送任何请求来测试你的服务")]),s._v("。")]),s._v(" "),a("p",[s._v("关于如何编写 web 钩子与所有可监听的不同事件类型的更多信息，请访问在 https://developer.github.com/webhooks/  的 GitHub 开发者文档。")]),s._v(" "),a("h2",{attrs:{id:"github-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-api"}},[s._v("#")]),s._v(" GitHub API")]),s._v(" "),a("p",[s._v("服务与钩子给你 "),a("strong",[s._v("提供了一种方式来接收关于在仓库中发生的事件的推送通知")]),s._v("，但是 "),a("strong",[s._v("如何获取相关事件的详情呢")]),s._v("？如何自动化一些诸如添加协作者或给问题加标签的事情呢？")]),s._v(" "),a("p",[s._v("这是 GitHub API 派上用场的地方。 在自动化流行的趋势下，GitHub 提供了大量的 API 接口，可以进行几乎任何能在网站上进行的操作。 在本节中我们将会学习如何授权与连接到 API，如何通过 API 在一个问题上评论与如何修改一个 Pull Request 的状态。")]),s._v(" "),a("h3",{attrs:{id:"基本用途"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本用途"}},[s._v("#")]),s._v(" 基本用途")]),s._v(" "),a("p",[s._v("可以做的最基本的事情是向一个不需要授权的接口上发送一个简单的 GET 请求。 该接口可能是一个用户或开源项目的只读信息。 例如，如果我们想要知道更多关于名为  「schacon」  的用户信息，我们可以运行类似下面的东西：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('$ curl https://api.github.com/users/schacon\n{\n  "login": "schacon",\n  "id": 70,\n  "avatar_url": "https://avatars.githubusercontent.com/u/70",\n# …\n  "name": "Scott Chacon",\n  "company": "GitHub",\n  "following": 19,\n  "created_at": "2008-01-27T17:19:28Z",\n  "updated_at": "2014-06-10T02:37:23Z"\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("有大量类似这样的接口来获得关于组织、项目、问题、提交的信息 — 差不多就是你能在 GitHub 上看到的所有东西。 甚至可以使用 API 来渲染任意 Markdown 或寻找一个 "),a("code",[s._v(".gitignore")]),s._v(" 模板。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('$ curl https://api.github.com/gitignore/templates/Java\n{\n  "name": "Java",\n  "source": "*.class\n\n# Mobile Tools for Java (J2ME)\n.mtj.tmp/\n\n# Package Files #\n*.jar\n*.war\n*.ear\n\n# virtual machine crash logs, see http://www.java.com/en/download/help/error_hotspot.xml\nhs_err_pid*\n"\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h3",{attrs:{id:"在一个问题上评论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在一个问题上评论"}},[s._v("#")]),s._v(" 在一个问题上评论")]),s._v(" "),a("p",[s._v("然而，如果想要在网站上进行一个操作，如在 Issue 或 Pull Request 上评论，或者想要查看私有内容或与其交互，你需要 "),a("strong",[s._v("授权")]),s._v("。")]),s._v(" "),a("p",[s._v("这里提供了几种授权方式。 你可以使用 "),a("strong",[s._v("仅需用户名与密码的基本授权")]),s._v("，但是通常更好的主意是 "),a("strong",[s._v("使用一个个人访问令牌")]),s._v("。 可以从设置页的  「Applications」标签 "),a("strong",[s._v("生成访问令牌")]),s._v("。")]),s._v(" "),a("p",[a("img",{attrs:{src:"assets/4f43e0b55af46bf61f72d16a449a01d7.png",alt:"访问令牌"}})]),s._v(" "),a("p",[s._v("注意：新版 GitHub 路径为「Settings / Developer settings / Personal access tokens」")]),s._v(" "),a("p",[s._v("它会询问这个令牌的作用域与一个描述。 确保使用一个好的描述信息，这样当脚本或应用不再使用时你会很放心地移除。")]),s._v(" "),a("p",[a("strong",[s._v("GitHub 只会显示令牌一次，所以记得一定要拷贝它")]),s._v("。 现在可以在脚本中使用它代替使用用户名写密码来授权。 这很漂亮，因为可以限制想要做的范围并且令牌是可废除的。")]),s._v(" "),a("p",[s._v("这也会有一个提高频率上限的附加优点。 如果没有授权的话，你会被限制在一小时最多发起 60 次请求。 如果授权则可以一小时最多发起 5000 次请求。")]),s._v(" "),a("p",[s._v("所以让我们利用它来对我们的其中一个问题进行评论。 想要对一个特定问题 "),a("code",[s._v("Issue #6")]),s._v(" 留下一条评论。 必须使用刚刚生成的令牌作为 Authorization 头信息，发送一个到 "),a("code",[s._v("repos/<user>/<repo>/issues/<num>/comments")]),s._v(" 的 HTTP POST 请求。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('$ curl -H "Content-Type: application/json" \\\n       -H "Authorization: token TOKEN" \\\n       --data \'{"body":"A new comment, :+1:"}\' \\\n       https://api.github.com/repos/schacon/blink/issues/6/comments\n{\n  "id": 58322100,\n  "html_url": "https://github.com/schacon/blink/issues/6#issuecomment-58322100",\n  ...\n  "user": {\n    "login": "tonychacon",\n    "id": 7874698,\n    "avatar_url": "https://avatars.githubusercontent.com/u/7874698?v=2",\n    "type": "User",\n  },\n  "created_at": "2014-10-08T07:48:19Z",\n  "updated_at": "2014-10-08T07:48:19Z",\n  "body": "A new comment, :+1:"\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("现在如果进入到那个问题，可以看到我们刚刚发布的评论")]),s._v(" "),a("p",[a("img",{attrs:{src:"assets/498e476711dad0deaf10f23b091ce619.png",alt:"API 评论"}})]),s._v(" "),a("p",[s._v("可以使用 API 去做任何可以在网站上做的事情 — 创建与设置里程碑、指派人员到 Issues 与 Pull Requests，创建与修改标签、访问提交数据、创建新的提交与分支、打开关闭或合并 Pull Requests、创建与编辑团队、在 Pull Request 中评论某行代码、搜索网站等等。")]),s._v(" "),a("h3",{attrs:{id:"修改-pull-request-的状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-pull-request-的状态"}},[s._v("#")]),s._v(" 修改 Pull Request 的状态")]),s._v(" "),a("p",[s._v("如果使用 Pull Requests 的话我们将要看到的最后一个例子会很有用。 每一个提交可以有一个或多个与它关联的状态，有 API 来添加与查询状态。")]),s._v(" "),a("p",[s._v("大多数 "),a("strong",[s._v("持续集成")]),s._v(" 与 "),a("strong",[s._v("测试服务")]),s._v(" 通过测试推送的代码后使用这个 API 来回应，然后报告提交是否通过了全部测试。 你也可以使用该接口来检查提交信息是否经过合适的格式化、提交者是否遵循了所有你的贡献准则、提交是否经过有效的签名 — 种种这类事情。")]),s._v(" "),a("p",[s._v("假设在仓库中设置了一个 web 钩子访问一个用来检查提交信息中的 "),a("code",[s._v("Signed-off-by")]),s._v(" 字符串的小的 web 服务。")]),s._v(" "),a("div",{staticClass:"language-ruby line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("require")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'httparty'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("require")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sinatra'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("require")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'json'")]),s._v("\n\npost "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/payload'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n  push "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("parse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# parse the JSON")]),s._v("\n  repo_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" push"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'repository'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'full_name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 翻看每一条提交信息")]),s._v("\n  push"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"commits"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("each")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("commit"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查找 Signed-off-by 字符串")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/Signed-off-by/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("match commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'message'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      state "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'success'")]),s._v("\n      description "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Successfully signed off!'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n      state "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'failure'")]),s._v("\n      description "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'No signoff found.'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 发送 post 请求查看状态")]),s._v("\n    sha "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    status_url "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://api.github.com/repos/'),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[s._v("#{")]),s._v("repo_name"),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[s._v("}")])]),s._v("/statuses/"),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[s._v("#{")]),s._v("sha"),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[s._v("}")])]),s._v('"')]),s._v("\n\n    status "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"state"')]),s._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"description"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"target_url"')]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://example.com/how-to-signoff"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"context"')]),s._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"validate/signoff"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HTTParty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("post"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("status_url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token symbol"}},[s._v(":body")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("to_json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token symbol"}},[s._v(":headers")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type'")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'application/json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'User-Agent'")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tonychacon/signoff'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Authorization'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"token '),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[s._v("#{")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ENV")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'TOKEN'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[s._v("}")])]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br")])]),a("p",[s._v("希望这相当容易做。 在这个 web 钩子处理器中我们浏览刚刚推送上来的每一个提交，在提交信息中查找字符串 "),a("em",[s._v("Signed-off-by")]),s._v(" 并且最终使用 HTTP 向  "),a("code",[s._v("/repos/<user>/<repo>/statuses/<commit_sha>")]),s._v("  API 接口发送一个带有状态的 POST 请求。")]),s._v(" "),a("p",[s._v("在本例中可以发送一个状态（"),a("em",[s._v("success")]),s._v(", "),a("em",[s._v("failure")]),s._v(", "),a("em",[s._v("error")]),s._v("）、一个发生了什么的描述信息、一个用户可以了解更多信息的目标 URL 与一个 「context」 以防一个单独的提交有多个状态。 例如，一个测试服务可以提供一个状态与一个类似这样的验证服务也可能提供一个状态 — 「context」 字段是用来区别它们的。")]),s._v(" "),a("p",[s._v("如果某人在 GitHub 中打开了一个新的 Pull Request 并且这个钩子已经设置，会看到类似如下的信息")]),s._v(" "),a("p",[s._v("通过 API 的提交状态：")]),s._v(" "),a("p",[a("img",{attrs:{src:"assets/b882a5c86cc5d367040076c58eb925ed.png",alt:"提交状态"}})]),s._v(" "),a("p",[s._v("现在可以看到一个小的绿色对勾标记在提交信息中有 「Signed-off-by」 的提交旁边，红色的对勾标记在作者忘记签名的提交旁边。 也可以看到 Pull Request 显示在那个分支上的最后提交的状态，如果失败的话会警告你。 如果对测试结果使用这个 API 那么就不会不小心合并某些未通过测试的最新提交。")]),s._v(" "),a("h3",{attrs:{id:"octokit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#octokit"}},[s._v("#")]),s._v(" Octokit")]),s._v(" "),a("p",[s._v("尽管我们在这些例子中都是通过 curl 与基本的 HTTP 请求来做几乎所有的事情，还有一些以更自然的方式利用 API 的开源库存在着。 在写这篇文章的时候，被支持的语言包括 Go、Objective-C、Ruby 与 .NET。 访问 http://github.com/octokit 了解更多相关信息，它们帮你处理了更多 HTTP 相关的内容。")]),s._v(" "),a("p",[s._v("希望这些工具能帮助你自定义与修改 GitHub 来更好地为特定的工作流程工作。 关于全部 API 的完整文档与常见任务的指南，请查阅 "),a("a",{attrs:{href:"https://developer.github.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://developer.github.com"),a("OutboundLink")],1),s._v("。")])])}),[],!1,null,null,null);t.default=e.exports}}]);