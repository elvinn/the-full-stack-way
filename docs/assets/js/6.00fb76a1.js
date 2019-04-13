(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{208:function(t,s,a){t.exports=a.p+"assets/img/dom-style-styleSheets.40d542e3.png"},209:function(t,s,a){t.exports=a.p+"assets/img/dom-style-cssRules.b069b80d.png"},210:function(t,s,a){t.exports=a.p+"assets/img/dom-style-offset.3acae33f.png"},211:function(t,s,a){t.exports=a.p+"assets/img/dom-style-client.c92dcad7.png"},333:function(t,s,a){"use strict";a.r(s);var e=a(2),n=Object(e.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"样式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#样式","aria-hidden":"true"}},[t._v("#")]),t._v(" 样式")]),t._v(" "),e("p",[t._v("这里涉及的内容主要是用 JavaScript 操作 document 中的样式。")]),t._v(" "),e("h2",{attrs:{id:"访问元素的样式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#访问元素的样式","aria-hidden":"true"}},[t._v("#")]),t._v(" 访问元素的样式")]),t._v(" "),e("p",[t._v("任何支持 style 特性的 HTML 元素在 JavaScript 中都有一个对应的 style 属性。这个 style 对象是 CSSStyleDeclaration 的实例，包含着 "),e("code",[t._v("通过 HTML 的 style 特性指定")]),t._v(" 的所有样式信息，但不包含通过外部样式表或嵌入样式表指定的样式。")]),t._v(" "),e("div",{staticClass:"language-JavaScript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myDiv "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myDiv"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置背景颜色")]),t._v("\nmyDiv"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("backgroundColor "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"red"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("此外，通过 cssText 属性可以访问 style 特性中的 CSS 代码。在读取模式下，cssText 返回浏览器对 style 特性中 CSS 代码的内部表示。在写入模式下，赋给 cssText 的值会重写整个 style 特性的值，也就是说，以前通过 style 特性指定的样式信息都将丢失。")]),t._v(" "),e("div",{staticClass:"language-JavaScript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("myDiv"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cssText "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"width: 25px; height: 100px; background-color: green"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myDiv"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cssText"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("设置 cssText 是为元素应用多项变化最快捷的方式，因为可以一次性地应用所有变化。")]),t._v(" "),e("h2",{attrs:{id:"计算样式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#计算样式","aria-hidden":"true"}},[t._v("#")]),t._v(" 计算样式")]),t._v(" "),e("p",[t._v("虽然 style 对象能够提供元素的样式信息，但是不包含外部样式表和内嵌样式表层叠的样式，也就是说我们通过 style 得到的样式可能不是元素最终展现的样式。我们可以通过 "),e("code",[t._v("document.defaultView.getComputedStyle()")]),t._v(' 来获得元素的计算样式。这个方法接受两个参数：要取得计算样式的元素和一个伪元素字符串（例如 ":after"）。如果不需要伪元素信息，第二个参数可以是 null。'),e("code",[t._v("getComputedStyle()")]),t._v(" 方法返回一个对象，其中包含当前元素的所有计算的样式。")]),t._v(" "),e("p",[t._v("IE 不支持 getComputedStyle() 方法，但它有一种类似的概念。在 IE 中，每个具有 style 属性 的元素还有一个 currentStyle 属性。这个属性是 CSSStyleDeclaration 的实例，包含当前元素全 部计算后的样式。")]),t._v(" "),e("div",{staticClass:"language-JavaScript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myDiv "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myDiv"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// IE: var computedStyle = myDiv.currentStyle;")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" computedStyle "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("defaultView"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getComputedStyle")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myDiv"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("computedStyle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("backgroundColor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("computedStyle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("computedStyle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("computedStyle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("border"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("所有计算的样式都是只读的，不能修改计算后样式对 象中的 CSS 属性。计算后的样式也包含属于浏览器内部样式表的样式信息，因此任何具有默认值 的 CSS 属性都会表现在计算后的样式中。")]),t._v(" "),e("h2",{attrs:{id:"操作样式表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作样式表","aria-hidden":"true"}},[t._v("#")]),t._v(" 操作样式表")]),t._v(" "),e("p",[t._v("有些时候我们需要大范围的更改样式，比如更换网页的主题，直接访问某些元素的样式就十分不方便了，此时就需要直接对样式表进行操作。")]),t._v(" "),e("p",[t._v("应用于文档的所有样式表是通过 document.styleSheets 集合来表示的。通过这个集合的 length 属性可以获知文档中样式表的数量，而通过方括号语法或 item() 方法可以访问每一个样式表。不同浏览器的 document.styleSheets 返回的样式表也不同。所有浏览器都会包含 "),e("code",[t._v("<style>")]),t._v(" 元素和 "),e("code",[t._v("rel")]),t._v(' 特性被设置为 "stylesheet" 的 '),e("code",[t._v("<link>")]),t._v(" 元素引入的样式表。")]),t._v(" "),e("p",[t._v("选择一个网站，在控制台中可以打印出这个网站的样式表。我们可以看出，document.styleSheets 返回了一个列表，列表中每个元素都是 CSSStyleSheet 类型。我们可以  从 CSSStyleSheet 中看出样式表的一些基本属性，如 link 引入的样式表的 URL(href)，样式表中包含的样式规则(cssRules/rules)等。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(208),alt:"demo"}})]),t._v(" "),e("p",[t._v("CSSRule 对象表示样式表中的每一条规则，它包含了一些属性：")]),t._v(" "),e("ul",[e("li",[t._v("cssText：返回整条规则对应的文本。由于浏览器对样式表的内部处理方式不同，返回的文本 可能会与样式表中实际的文本不一样；Safari 始终都会将文本转换成全部小写。IE 不支持这个 属性。")]),t._v(" "),e("li",[t._v("parentRule：如果当前规则是导入的规则，这个属性引用的就是导入规则；否则，这个值为 null。IE 不支持这个属性。")]),t._v(" "),e("li",[t._v("parentStyleSheet：当前规则所属的样式表。IE 不支持这个属性。")]),t._v(" "),e("li",[t._v("selectorText：返回当前规则的选择符文本。由于浏览器对样式表的内部处理方式不同，返回 的文本可能会与样式表中实际的文本不一样（例如，Safari 3 之前的版本始终会将文本转换成全 部小写）。在 Firefox、Safari、Chrome 和 IE 中这个属性是只读的。Opera 允许修改 selectorText。")]),t._v(" "),e("li",[t._v("style：一个 CSSStyleDeclaration 对象，可以通过它设置和取得规则中特定的样式值。")]),t._v(" "),e("li",[t._v("type：表示规则类型的常量值。对于样式规则，这个值是 1。IE 不支持这个属性。")])]),t._v(" "),e("p",[e("code",[t._v("注意，cssText 是只读的，而 style.cssText 也可以被重写。")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(209),alt:"demo"}})]),t._v(" "),e("h2",{attrs:{id:"创建规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建规则","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建规则")]),t._v(" "),e("p",[t._v("DOM 规定，要向现有样式表中添加新规则，需要使用 insertRule()方法。这个方法接受两个参 数：规则文本和表示在哪里插入规则的索引。")]),t._v(" "),e("div",{staticClass:"language-JavaScript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("` sheet"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertRule")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"body { background-color: silver }"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//DOM 方法")]),t._v("\n")])])]),e("p",[t._v("`")]),t._v(" "),e("h2",{attrs:{id:"删除规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除规则","aria-hidden":"true"}},[t._v("#")]),t._v(" 删除规则")]),t._v(" "),e("p",[t._v("从样式表中删除规则的方法是 deleteRule()，这个方法接受一个参数：要删除的规则的位置。")]),t._v(" "),e("div",{staticClass:"language-JavaScript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("sheet"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteRule")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// DOM 方法")]),t._v("\nsheet"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeRule")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 仅对 IE 有效")]),t._v("\n")])])]),e("h2",{attrs:{id:"偏移量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#偏移量","aria-hidden":"true"}},[t._v("#")]),t._v(" 偏移量")]),t._v(" "),e("p",[t._v("元素的可见大小由其高度、宽度决定，包括所有内边距、滚动条和边框大小（注意，不包括外边距）。")]),t._v(" "),e("p",[t._v("通过下列 4 个属性可以取得元素的偏移量。")]),t._v(" "),e("ul",[e("li",[t._v("offsetHeight：元素在垂直方向上占用的空间大小，以像素计。包括元素的高度、（可见的） 水平滚动条的高度、上边框高度和下边框高度。")]),t._v(" "),e("li",[t._v("offsetWidth：元素在水平方向上占用的空间大小，以像素计。包括元素的宽度、（可见的）垂直滚动条的宽度、左边框宽度和右边框宽度。")]),t._v(" "),e("li",[t._v("offsetLeft：元素的左外边框至包含元素的左内边框之间的像素距离")]),t._v(" "),e("li",[t._v("offsetTop：元素的上外边框至包含元素的上内边框之间的像素距离。")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(210),alt:"demo"}})]),t._v(" "),e("p",[t._v("其中，offsetLeft 和 offsetTop 属性与包含元素有关，包含元素的引用保存在 offsetParent 属性中。offsetParent 属性不一定与 parentNode 的值相等。")]),t._v(" "),e("p",[t._v("要想知道某个元素在页面上的偏移量，将这个元素的 offsetLeft 和 offsetTop 与其 offsetParent 的相同属性相加，如此循环直至根元素，就可以得到一个基本准确的值。")]),t._v(" "),e("div",{staticClass:"language-JavaScript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementLeft")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("element")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" actualLeft "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" element"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetLeft"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" current "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" element"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetParent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    actualLeft "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" current"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetLeft"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    current "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" current"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetParent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" actualLeft"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("所有这些偏移量属性都是只读的，而且每次访问它们都需要重新计算。因此，应 该尽量避免重复访问这些属性。如果需要重复使用其中某些属性的值，可以将它们保 存在局部变量中，以提高性能。")]),t._v(" "),e("h2",{attrs:{id:"客户区大小"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#客户区大小","aria-hidden":"true"}},[t._v("#")]),t._v(" 客户区大小")]),t._v(" "),e("p",[t._v("元素的客户区大小（client dimension），指的是元素内容及其内边距所占据的空间大小。主要属性有 clientWidth 和 clientHeight。其中，clientWidth 属性是元素内容区宽度加 上左右内边距宽度；clientHeight 属性是元素内容区高度加上上下内边距高度。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(211),alt:"demo"}})])])},[],!1,null,null,null);s.default=n.exports}}]);