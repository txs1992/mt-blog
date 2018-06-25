(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{303:function(t,s,n){"use strict";n.r(s);var a=n(1),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),n("p",[n("a",{attrs:{href:"https://github.com/typicode/json-server",target:"_blank",rel:"noopener noreferrer"}},[t._v("json-server 仓库地址"),n("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"使用-json-server-搭建本地-mock-服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-json-server-搭建本地-mock-服务","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用 Json Server 搭建本地 Mock 服务")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("使用 json-server 开启一个服务非常简单，只需要写一个 json 文件，然后执行 json-server —watch xx.json 就可以开启一个本地的数据服务了。默认端口是 3000， localhost:3000")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// data.json")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"login"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token string"}},[t._v('"name"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"MT"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token string"}},[t._v('"age"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("26")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n \n \n"),n("span",{attrs:{class:"token comment"}},[t._v("// 使用")]),t._v("\njson"),n("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("server data"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json\n"),n("span",{attrs:{class:"token comment"}},[t._v("// watch 模式")]),t._v("\njson"),n("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("server "),n("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("watch data"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"精确匹配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#精确匹配","aria-hidden":"true"}},[this._v("#")]),this._v(" 精确匹配")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("json-server 支持过滤数据功能，但只支持数组格式数据，例如下面的 JSON 数据，可以使用 userList?id=1 来筛选数据。")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"userList"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"id"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"name"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"MT"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"age"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("26")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"id"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"name"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"傻馒"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"age"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("24")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"id"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("3")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"name"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"小德"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"age"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("26")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n \n \n"),n("span",{attrs:{class:"token comment"}},[t._v("// localhost:3000/userList?id=1")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 得出结果")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"id"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"name"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"MT"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"age"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("26")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"分页和区间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分页和区间","aria-hidden":"true"}},[this._v("#")]),this._v(" 分页和区间")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("json-server 支持分页功能，使用 _page=1 来获取第几页数据，默认10条数据一页。可以使用 _limit=5 修改每页数据量。配合 _page=1&_limit=3 完成自定义分页功能。使用 _start 和 _end 来获取区间数据，_start 也可以配合 _limit 一起使用。")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"cities"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"id"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"cityName"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"北京"')]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"id"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"cityName"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"上海"')]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n \n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"id"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("3")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"cityName"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"天津"')]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"id"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("4")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"cityName"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"广州"')]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"id"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("5")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"cityName"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"深圳"')]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"id"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("6")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"cityName"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"合肥"')]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n \n \n"),n("span",{attrs:{class:"token comment"}},[t._v("// 获取第二页数据，没页3条数据。")]),t._v("\nlocalhost"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token number"}},[t._v("3000")]),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("cities"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("_page"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("_limit"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token number"}},[t._v("3")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 获取第 2 到第 5 条数据。")]),t._v("\nlocalhost"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token number"}},[t._v("3000")]),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("cities"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("_start"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("_end"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token number"}},[t._v("5")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"排序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#排序","aria-hidden":"true"}},[this._v("#")]),this._v(" 排序")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("json-server 使用 _sort 属性表示对那个字段排序，_order=asc/desc 来进行升序或降序。可以配合分页功能一起使用。")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"cities"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"id"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"cityName"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"北京"')]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"id"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"cityName"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"上海"')]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n \n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"id"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("3")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"cityName"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"天津"')]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"id"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("4")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"cityName"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"广州"')]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"id"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("5")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"cityName"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"深圳"')]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"id"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("6")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"cityName"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"合肥"')]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n \n \n"),n("span",{attrs:{class:"token comment"}},[t._v("// 对 id 进行降序")]),t._v("\nlocalhost"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token number"}},[t._v("3000")]),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("cities"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("_sort"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("id"),n("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("_order"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("desc\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"条件过滤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#条件过滤","aria-hidden":"true"}},[this._v("#")]),this._v(" 条件过滤")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("_gte 表示大于等于，_lte 小于等于，_ne 不等于, _like 包含，使用方法是需要过滤的属性加上匹配符号，例如我要筛选年龄大于10小于20的，age_gte=10&age_lte=20")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"cities"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"id"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"cityName"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"北京"')]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"id"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"cityName"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"上海"')]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n \n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"id"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("3")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"cityName"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"天津"')]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"id"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("4")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"cityName"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"广州"')]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"id"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("5")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"cityName"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"深圳"')]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"id"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("6")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"cityName"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"合肥"')]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n \n"),n("span",{attrs:{class:"token comment"}},[t._v("// 筛选出 id 大于 2 并且小于 5 的城市。")]),t._v("\nlocalhost"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token number"}},[t._v("3000")]),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("cities"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("id_gte"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token number"}},[t._v("3")]),n("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("id_lte"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token number"}},[t._v("4")]),t._v("\n \n \n"),n("span",{attrs:{class:"token comment"}},[t._v("// 筛选 id 大于等于 2 的城市。")]),t._v("\nlocalhost"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token number"}},[t._v("3000")]),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("cities"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("id_get"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n \n \n"),n("span",{attrs:{class:"token comment"}},[t._v("// 筛选 id 不是 3 的所有城市。")]),t._v("\nlocalhost"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token number"}},[t._v("3000")]),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("cities"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("id_ne"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token number"}},[t._v("3")]),t._v("\n \n \n"),n("span",{attrs:{class:"token comment"}},[t._v("// 筛选出 cityName 包含‘上’字的城市。")]),t._v("\nlocalhost"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token number"}},[t._v("3000")]),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("cities"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("cityName_like"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("上\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"搜索与关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搜索与关系","aria-hidden":"true"}},[this._v("#")]),this._v(" 搜索与关系")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("属性 q 匹配所有包含的属性，例如我要过滤所有字段包含州的数据，?q=州。_embed 查找数据中所对应的子数据，如果没有默认空数组。_expand 返回数据对应的父数据，需要注意的是如果你直接查询时例如/provinces?_embed=cities/，如果你的子数组中有一个没有包含父 ID，会导致报错。")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"cities"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"id"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"cityName"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"广州"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"provinceId"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"id"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"cityName"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"深圳"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"provinceId"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"id"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("3")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"cityName"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"合肥"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"provinceId"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v('"provinces"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"id"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"provinceName"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"安徽"')]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"id"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v('"provinceName"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"广东"')]),t._v("\n \n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n \n \n"),n("span",{attrs:{class:"token comment"}},[t._v("// 查询包含'深圳'字段的数据")]),t._v("\nlocalhost"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token number"}},[t._v("3000")]),n("span",{attrs:{class:"token operator"}},[t._v("/")]),n("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("q"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("深圳\n \n \n"),n("span",{attrs:{class:"token comment"}},[t._v("// 查询所有省，以及它所包含的市。")]),t._v("\nlocalhost"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token number"}},[t._v("3000")]),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("provinces"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("_embed"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("cities\n \n \n"),n("span",{attrs:{class:"token comment"}},[t._v("// 查询所有市，以及它所包属于的省。")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"路由与其他"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由与其他","aria-hidden":"true"}},[this._v("#")]),this._v(" 路由与其他")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("使用外部服务，可以使用其他服务器的文件，例如 json-server github/taoxusheng/json/db.json。生产随机数据，使用 js 代码编写。使用 —routes 命令开着自定义路由。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("/api/posts # → /posts\n/api/posts/1  # → /posts/1\n/posts/1/show # → /posts/1\n/posts/javascript # → /posts?category=javascript\n/articles?id=1 # → /posts/1\n")])])])}],!1,null,null,null);s.default=e.exports}}]);