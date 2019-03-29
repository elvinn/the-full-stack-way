(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{349:function(a,t,s){"use strict";s.r(t);var e=s(5),n=Object(e.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"es6-开发环境配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es6-开发环境配置","aria-hidden":"true"}},[a._v("#")]),a._v(" ES6 开发环境配置")]),a._v(" "),s("p",[a._v("随着时间的推移，浏览器对 ES6 支持度已经越来越高了，超过 90% 的 ES6 语法特性都实现了。虽然有些浏览器对 ES6 的支持程度已经很高了（Chrome59 97%，Safari10 99%），但是很多人使用的 IE 对 ES6 的支持任然很不理想（IE11 11%），所以在实际工程应用中，我们还需要将 ES6 转化成 ES5。各大浏览器的最新版本，对 ES6 的支持可以查看"),s("a",{attrs:{href:"https://kangax.github.io/compat-table/es6/",target:"_blank",rel:"noopener noreferrer"}},[a._v("此处"),s("OutboundLink")],1),a._v("。")]),a._v(" "),s("h2",{attrs:{id:"环境支持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境支持","aria-hidden":"true"}},[a._v("#")]),a._v(" 环境支持")]),a._v(" "),s("p",[a._v("Node 是 JavaScript 的服务器运行环境（runtime）。它对 ES6 的支持度更高。除了那些默认打开的功能，还有一些语法功能已经实现了，但是默认没有打开。使用下面的命令，可以查看 Node 已经实现的 ES6 特性。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("node --v8-options | grep harmony\n")])])]),s("p",[a._v("上面命令的输出结果，会因为版本的不同而有所不同。")]),a._v(" "),s("h2",{attrs:{id:"转码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转码","aria-hidden":"true"}},[a._v("#")]),a._v(" 转码")]),a._v(" "),s("p",[a._v("通过特定的转码器，如 babel，或在线的转换器，将 ES6 转换成 ES5 再进行部署。")]),a._v(" "),s("p",[a._v("Babel 是一个广泛使用的 ES6 转码器，可以将 ES6 代码转为 ES5 代码，从而在现有环境执行。这意味着，你可以用 ES6 的方式编写程序，又不用担心现有环境是否支持。相对于之前的 babel5,babel6 不再是一个整的大的 package, 而是拆分了很多个小的 packages 可供选择安装，可以根据项目进行自定义。下面介绍 babel 的开发环境的配置。")]),a._v(" "),s("h3",{attrs:{id:"_1-命令行使用（手动编译）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令行使用（手动编译）","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. 命令行使用（手动编译）")]),a._v(" "),s("h4",{attrs:{id:"_1-安装-babel-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装-babel-cli","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. 安装 babel-cli")]),a._v(" "),s("p",[a._v("支持命令行使用 babel")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("npm install --save-dev babel-cli\n")])])]),s("p",[a._v("完成之后，我们还不能编译 ES6 文件，因为 babel 不再包含任何 transform 功能，babel6 里把它们作为插件（plugin）分割出去，需要我们自己定义。")]),a._v(" "),s("h4",{attrs:{id:"_2-安装-babel-preset-env"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装-babel-preset-env","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. 安装 babel-preset-env")]),a._v(" "),s("p",[a._v("要想编译 ES6 文件，我们必须安装相关的插件，babel-preset-env 打包了所有用于转换 ES6 的插件，安装 babel-preset-env:")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("npm install --save-dev babel-preset-env\n")])])]),s("p",[a._v("babel 还有 babel-preset-es2015，babel-preset-es2016 等插件，每一年的 preset 仅编译那一年的批准的规则，而 babel-preset-env 则包含 es2015，es2016，es2017 和 latest。")]),a._v(" "),s("h4",{attrs:{id:"_3-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 3. 配置")]),a._v(" "),s("p",[a._v("安装完 babel-preset-env 之后，还需要一步，在 package.json 或. babelrc 文件启用 babel-preset-env:")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"babel"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"presets"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"env"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h4",{attrs:{id:"_4-编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-编译","aria-hidden":"true"}},[a._v("#")]),a._v(" 4. 编译")]),a._v(" "),s("p",[a._v("完成以上安装后，就可以编译文件了：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# 转码结果输出到标准输出\nbabel example.js\n\n# 转码结果写入一个文件 --out-file 或 -o 参数指定输出文件\nbabel example.js --out-file compiled.js\n\n# 转码整个目录 --out-dir 或 -d 参数指定输出目录\nbabel src --out-dir lib\n\n# 忽略 spec 和 test 文件\nbabel src --out-dir lib --ignore spec.js,test.js\n\n# -s 参数生成 source map 文件\nbabel src -d lib -s\n")])])]),s("p",[s("a",{attrs:{href:"http://babeljs.io/docs/usage/cli/",target:"_blank",rel:"noopener noreferrer"}},[a._v("更多选项"),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"_2-webstorm-编译（ide）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-webstorm-编译（ide）","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. "),s("a",{attrs:{href:"https://blog.jetbrains.com/webstorm/2015/05/ecmascript-6-in-webstorm-transpiling/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Webstorm 编译（IDE）"),s("OutboundLink")],1)]),a._v(" "),s("h4",{attrs:{id:"_1-开启-es6-语法支持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-开启-es6-语法支持","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. 开启 ES6 语法支持")]),a._v(" "),s("p",[a._v("Webstorm 已经支持 ES6 语法了，但是默认情况下没有开启，需要我么手动开启，打开 settings->Languages & Frameworks->JavaScript 在选项中设置为 ES6。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://s3-us-west-2.amazonaws.com/notion-static/98afff036241449d8e14f19f6d88f3da/Untitled",alt:""}})]),a._v(" "),s("h4",{attrs:{id:"_2-安装-babel-cli-和-babel-preset-env"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装-babel-cli-和-babel-preset-env","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. 安装 babel-cli 和 babel-preset-env")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("npm install --save-dev babel-preset-env babel-cli\n")])])]),s("h4",{attrs:{id:"_3-配置-babel-file-watcher"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置-babel-file-watcher","aria-hidden":"true"}},[a._v("#")]),a._v(" 3. 配置 babel File Watcher")]),a._v(" "),s("p",[a._v("File Watcher 是一个 Webstorm 内置工具，可以在文件发生变化时自动执行命令行工具，对于 babel，已经有预存的配置，我们激活配置即可使用：")]),a._v(" "),s("p",[a._v("settings->Tools->File watchers")]),a._v(" "),s("p",[a._v("点击'+'按钮，选择 babel，在 File watcher 配置中，指定 babel-cli 在 node_modules 中的路径：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://s3-us-west-2.amazonaws.com/notion-static/055b7c1ea93144e8b7f837e389690ad4/Untitled",alt:""}})]),a._v(" "),s("p",[a._v("在 Webstorm 2017.1 中，编译过的文件存放在 dist 文件夹中。当然，你也可以在 package.json 或者. babelrc 配置文件中指定，添加适合你工程的配置。")]),a._v(" "),s("h3",{attrs:{id:"_3-vs-code-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-vs-code-配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 3. VS Code 配置")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("安装 babel-cli 和 babel-preset-env")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("npm install --save-dev babel-cli babel-preset-env\n")])])])]),a._v(" "),s("li",[s("p",[a._v("配置 package.json，设置生成 souremaps")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"build"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"babel src -d dist --source-maps"')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("在. vscode 目录下的 tasks.json 文件中写入如下配置，如果没有这个文件，就创建一个。")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.1.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"command"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"npm"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"isShellCommand"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"showOutput"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"always"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"suppressTaskName"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"tasks"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"taskName"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"build"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n            // 此处第二个参数 "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"build"')]),a._v(" 要与上一步中的 scripts 中的编译脚本的名字一样\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"args"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"run"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"build"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"isBuildCommand"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("打开 "),s("code",[a._v(".vscode")]),a._v(" 目录下的 "),s("code",[a._v("launch.json")]),a._v(" 文件，在 "),s("code",[a._v("configurations")]),a._v(" 中添加如下配置，通过使用 "),s("code",[a._v("preLaunchTask")]),a._v(" 在启动前进行编译，如果没有 "),s("code",[a._v("launch.json")]),a._v(" 文件，打开调试，在启动程序一栏，下拉，添加配置即可。")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[a._v("    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"configurations"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n         "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"node"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n         "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"request"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"launch"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n         "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"启动程序"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n         "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"program"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"${workspaceRoot}/src/index.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n         "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"stopOnEntry"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n         "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"args"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n         "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"cwd"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"${workspaceRoot}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n         "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"preLaunchTask"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"build"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n         "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"runtimeExecutable"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token null"}},[a._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n         "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"runtimeArgs"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"--nolazy"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n         "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"env"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n           "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"NODE_ENV"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"development"')]),a._v("\n         "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n         "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"sourceMaps"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n         "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"outFiles"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n           "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"${workspaceRoot}/dist"')]),a._v("\n         "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n")])])]),s("p",[s("img",{attrs:{src:"https://s3-us-west-2.amazonaws.com/notion-static/2201753df572490882dfa3750113e32c/Untitled",alt:""}})])]),a._v(" "),s("li",[s("p",[a._v("启动调试或者按 F5，就可以在输出目录下看到编译好的文件")])])]),a._v(" "),s("h3",{attrs:{id:"_4-浏览器环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-浏览器环境","aria-hidden":"true"}},[a._v("#")]),a._v(" 4. 浏览器环境")]),a._v(" "),s("p",[a._v("Babel 也可以用于浏览器环境。但是，从 Babel 6.0 开始，不再直接提供浏览器版本，而是要用构建工具构建出来。如果你没有或不想使用构建工具，可以使用 babel-standalone 模块提供的浏览器版本，将其插入网页。")]),a._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[a._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("script")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.4.4/babel.min.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("script")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("text/babel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[a._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Your ES6 code")]),a._v("\n ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),s("p",[a._v("注意，网页实时将 ES6 代码转为 ES5，对性能会有影响。生产环境需要加载已经转码完成的脚本。")]),a._v(" "),s("p",[a._v("更多转换方法请参考 "),s("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/intro",target:"_blank",rel:"noopener noreferrer"}},[a._v("《ECMAScript 6 入门》"),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"_5-关于-babel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-关于-babel","aria-hidden":"true"}},[a._v("#")]),a._v(" 5. 关于 Babel")]),a._v(" "),s("h4",{attrs:{id:"_1-babel-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-babel-node","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. babel-node")]),a._v(" "),s("p",[a._v("babel-cli 工具自带一个 babel-node 命令，提供一个支持 ES6 的 REPL(Read-Eval-Print-Loop) 环境。它支持 Node 的 REPL 环境的所有功能，而且可以直接运行 ES6 代码。")]),a._v(" "),s("p",[a._v("它不用单独安装，而是随 babel-cli 一起安装。然后，执行 babel-node 就进入 REPL 环境。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# 进入 REAL 环境\nbabel-node\n\n# babel-node 命令可以直接运行 ES6 脚本 (.js 可以省略)\nbabel-node test.js\n\n# babel-node 也可以安装在项目中\nnpm install --save-dev babel-cli\n")])])]),s("h4",{attrs:{id:"_2-babel-polyfill"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-babel-polyfill","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. babel-polyfill")]),a._v(" "),s("p",[a._v("这将模拟一个完整的 ES2015 + 环境，旨在用于应用程序而不是库 / 工具。Babel 默认只转换新的 JavaScript 句法（syntax），而不转换新的 API，比如 Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise 等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign）都不会转码。")]),a._v(" "),s("p",[a._v("举例来说，ES6 在 Array 对象上新增了 Array.from 方法。Babel 就不会转码这个方法。如果想让这个方法运行，必须使用 babel-polyfill，为当前环境提供一个垫片。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('# 因为它是一个填充工具（在源码之前运行），所以它是一个 dependency，而不是 devDependency\nnpm install --save babel-polyfill\n\n# 然后在程序的入口包含 polyfill，确保在其他引用声明之前调用\n# node\nrequire("babel-polyfill");\n# es6\nimport("babel-polyfill");\n\n')])])]),s("p",[a._v("当使用 webpack 时，在 webpack.config.js 文件的入口数组中添加")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// babel-polyfill")]),a._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    entry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'babel-polyfill'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./app/js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])])},[],!1,null,null,null);t.default=n.exports}}]);