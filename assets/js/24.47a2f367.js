(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{266:function(s,t,e){"use strict";e.r(t);var a=e(0),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"一，下载-windows-镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一，下载-windows-镜像"}},[s._v("#")]),s._v(" 一，下载 Windows 镜像")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("微软官方 - "),e("a",{attrs:{href:"https://www.microsoft.com/zh-cn/software-download",target:"_blank",rel:"noopener noreferrer"}},[s._v("软件下载"),e("OutboundLink")],1),s._v("\n微软官方提供了包括 Windows10、8、7 的最新镜像下载，可以根据自己的需求选择。")])]),s._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://msdn.itellyou.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("MSDN, 我告诉你"),e("OutboundLink")],1),s._v("\n这个网站提供了各个版本的Windows系统下载，这些镜像是从微软官方的服务器上获取的，全部都是未经改写的正版纯净原装系统。")])])]),s._v(" "),e("h2",{attrs:{id:"二，制作启动盘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二，制作启动盘"}},[s._v("#")]),s._v(" 二，制作启动盘")]),s._v(" "),e("p",[s._v("准备一个 8G 或 8G 以上大小的 U 盘，插入电脑。")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("使用 "),e("code",[s._v("diskutil list")]),s._v(" 列出当前系统所挂载的存储设备，根据磁盘的大小找到你的 U 盘，一般是最后几个设备，比如这里我挂载的 U 盘是 disk2。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://xpic.devtoken.club/blog/Xnip2019-07-28_13-48-29.png",alt:""}})])]),s._v(" "),e("li",[e("p",[s._v("格式化 U 盘，输入下列命令，这里将 disk2 改为你的设备编号。")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('diskutil eraseDisk MS-DOS "WINDOWS10" MBR disk2\n')])])]),e("p",[s._v("成功会输出："),e("code",[s._v("Finished erase on disk2")])])]),s._v(" "),e("li",[e("p",[s._v("拷贝 Windows 镜像到 U 盘中。")]),s._v(" "),e("p",[s._v("如果直接拷贝 Windows ISO  文件到 U 盘，会出现文件过大，拷贝失败的情况。这里可以先双击下载好的 Windows ISO 文件，挂载镜像，会在 Finder 左侧出现一个磁盘一样的条目，记住名字，使用下面的命令拷贝文件。")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cp -rp /Volumes/VolumeName/* /Volumes/WINDOWS10/ \n")])])]),e("p",[s._v("运行命令后，需要等待一段时间，等运行结束就可以了。")]),s._v(" "),e("p",[s._v("Windows 启动盘制作完成。")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);