(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{278:function(e,t,a){e.exports=a.p+"assets/img/event-loop.a6f067ba.png"},387:function(e,t,a){"use strict";a.r(t);var l=a(28),r=Object(l.a)({},(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("h1",{attrs:{id:"事件循环"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#事件循环"}},[e._v("#")]),e._v(" 事件循环")]),e._v(" "),l("h2",{attrs:{id:"任务队列"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#任务队列"}},[e._v("#")]),e._v(" 任务队列")]),e._v(" "),l("p",[e._v("Node 事件循环阶段示意图：")]),e._v(" "),l("p",[l("img",{attrs:{src:a(278),alt:""}})]),e._v(" "),l("p",[e._v("阶段说明：")]),e._v(" "),l("ul",[l("li",[e._v("timers 阶段: 这个阶段执行 setTimeout(callback) 和 setInterval(callback)预定的 callback")]),e._v(" "),l("li",[e._v("I/O callbacks 阶段: 执行除了 close 事件的 callbacks、被 timers(定时器，setTimeout、setInterval 等)设定的 callbacks、setImmediate()设定的 callbacks 之外的 callbacks")]),e._v(" "),l("li",[e._v("idle, prepare 阶段: node 内部的一些调用")]),e._v(" "),l("li",[e._v("poll 阶段: 获取新的 I/O 事件，适当的条件下 node 将阻塞在这里")]),e._v(" "),l("li",[e._v("check 阶段: 执行 setImmediate() 设定的 callbacks")]),e._v(" "),l("li",[e._v("close callbacks 阶段: 比如 socket.on(‘close’, callback)的 callback 会在这个阶段执行")])]),e._v(" "),l("h3",{attrs:{id:"timers"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#timers"}},[e._v("#")]),e._v(" timers")]),e._v(" "),l("p",[e._v("一个 timer 指定一个下限时间而不是准确时间，在达到这个下限时间后执行回调。在指定的时间过后，timers 会尽早的执行回调，但是系统调度或者其他回调的执行可能会延迟它们。")]),e._v(" "),l("blockquote",[l("p",[e._v("从技术上来说，poll 阶段控制 timers 什么时候执行，而执行的具体位置在 timers。")])]),e._v(" "),l("p",[e._v("下限的时间有一个范围：[1, 2147483647]，如果设定的时间不在这个范围，将被设置为 1。")]),e._v(" "),l("h3",{attrs:{id:"i-o-callbacks"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#i-o-callbacks"}},[e._v("#")]),e._v(" I/O callbacks")]),e._v(" "),l("p",[e._v("这个阶段执行一些系统操作的回调，比如说 TCP 连接发生错误。")]),e._v(" "),l("h3",{attrs:{id:"idle-prepare"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#idle-prepare"}},[e._v("#")]),e._v(" idle, prepare")]),e._v(" "),l("p",[e._v("该阶段只供 libuv 内部调用，这里可以忽略。")]),e._v(" "),l("h3",{attrs:{id:"poll"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#poll"}},[e._v("#")]),e._v(" poll")]),e._v(" "),l("p",[e._v("这个阶段是轮询时间，用于等待还未返回的 I/O 事件，比如服务器的回应、用户移动鼠标等等。")]),e._v(" "),l("p",[e._v("这个阶段的时间会比较长。如果没有其他异步任务要处理（比如到期的定时器），会一直停留在这个阶段，等待 I/O 请求返回结果。")]),e._v(" "),l("p",[e._v("在 node.js 里，任何异步方法（除 timer,close,setImmediate 之外）完成时，都会将其 callback 加到 poll queue 里,并立即执行。")]),e._v(" "),l("p",[e._v("poll 阶段有两个主要的功能：")]),e._v(" "),l("ul",[l("li",[e._v("处理 poll 队列（poll queue）的事件(callback)")]),e._v(" "),l("li",[e._v("控制 timers 中的 callback 的执行")])]),e._v(" "),l("ul",[l("li",[l("p",[e._v("poll 队列不为空的时候，事件循环肯定是先遍历队列并同步执行回调，直到队列清空或执行回调数达到系统上限。")])]),e._v(" "),l("li",[l("p",[e._v("poll 队列为空的时候，这里有两种情况。")]),e._v(" "),l("ul",[l("li",[e._v("如果代码已经被 setImmediate()设定了回调，那么事件循环直接结束 poll 阶段进入 check 阶段来执行 check 队列里的回调。")]),e._v(" "),l("li",[e._v("如果代码没有被设定 setImmediate()设定回调：\n"),l("ul",[l("li",[e._v("如果有被设定的 timers，那么此时事件循环会检查 timers，如果有一个或多个 timers 下限时间已经到达，那么事件循环将绕回 timers 阶段，并执行 timers 的有效回调队列。")]),e._v(" "),l("li",[e._v("如果没有被设定 timers，这个时候事件循环是阻塞在 poll 阶段等待回调被加入 poll 队列。")])])])])])]),e._v(" "),l("h3",{attrs:{id:"check"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#check"}},[e._v("#")]),e._v(" check")]),e._v(" "),l("p",[e._v("这个阶段允许在 poll 阶段结束后立即执行回调。如果 poll 阶段空闲，并且有被 setImmediate()设定的回调，那么事件循环直接跳到 check 执行而不是阻塞在 poll 阶段等待回调被加入。")]),e._v(" "),l("p",[e._v("setImmediate()实际上是一个特殊的 timer，跑在事件循环中的一个独立的阶段。它使用 libuv 的 API 来设定在 poll 阶段结束后立即执行回调。")]),e._v(" "),l("p",[e._v("注：setImmediate()具有最高优先级，只要 poll 队列为空，代码被 setImmediate()，无论是否有 timers 达到下限时间，setImmediate()的代码都先执行。")]),e._v(" "),l("h3",{attrs:{id:"close-callbacks"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#close-callbacks"}},[e._v("#")]),e._v(" close callbacks")]),e._v(" "),l("p",[e._v("该阶段执行关闭请求的回调函数，比如 socket.on('close', ...)。")]),e._v(" "),l("h3",{attrs:{id:"参考文章"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[e._v("#")]),e._v(" 参考文章")]),e._v(" "),l("ul",[l("li",[l("a",{attrs:{href:"https://segmentfault.com/a/1190000013102056",target:"_blank",rel:"noopener noreferrer"}},[e._v("由 setTimeout 和 setImmediate 执行顺序的随机性窥探 Node 的事件循环机制"),l("OutboundLink")],1)]),e._v(" "),l("li",[l("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2018/02/node-event-loop.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node 定时器详解"),l("OutboundLink")],1)]),e._v(" "),l("li",[l("a",{attrs:{href:"https://juejin.im/post/5b73d7a6518825610072b42b#heading-3",target:"_blank",rel:"noopener noreferrer"}},[e._v("微任务、宏任务与 Event-Loop"),l("OutboundLink")],1)]),e._v(" "),l("li",[l("a",{attrs:{href:"https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/",target:"_blank",rel:"noopener noreferrer"}},[e._v("The Node.js Event Loop, Timers, and process.nextTick()"),l("OutboundLink")],1)]),e._v(" "),l("li",[l("a",{attrs:{href:"https://jsblog.insiderattack.net/promises-next-ticks-and-immediates-nodejs-event-loop-part-3-9226cbe7a6aa",target:"_blank",rel:"noopener noreferrer"}},[e._v("Promises, Next-Ticks and Immediates— NodeJS Event Loop Part 3"),l("OutboundLink")],1)]),e._v(" "),l("li",[l("a",{attrs:{href:"https://jsblog.insiderattack.net/handling-io-nodejs-event-loop-part-4-418062f917d1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Handling IO — NodeJS Event Loop Part 4"),l("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);