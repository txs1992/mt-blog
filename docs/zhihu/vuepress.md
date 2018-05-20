# VuePress 快速踩坑

![](https://pic4.zhimg.com/v2-7520d66da30349b0c348a03846985d47_1200x500.jpg)

> 最近有个开源项目非常火，那就是尤小右开发的 VuePress，VuePress 可以让您非常方便的在 Markdown 文档中编写 Vue 代码，并且 VuePress 对编译后的 HTML 文件做了一些针对搜索引擎的优化。另外 VuePress 针对 Markdown 文件做了一些扩展使其功能更加强大，本文将围绕搭建一个 Github 的静态博客展开。

## 为项目加入 VuePress

第一步为您的项目安装 VuePress，如果您的项目代码中并没有`package.json`文件，请先执行`npm init`。

```shell
npm install -D vuepress // 或者 yarn add -D vuepress

// 在项目根目录下新加 docs 文件夹
mkdir docs

// 新建一个 Markdown 文件
echo "# Hello VuePress!" > docs/README.md
```

第二步在`package.json`文件中加入这些脚本，并运行。

```javascript
// package.json
"scripts": {
  "docs:dev": "vuepress dev docs",
  "docs:build": "vuepress build docs"
}

// 本地运行文档
npm run docs:dev

// 编译打包生产静态 HTML 文件
npm run docs:build
```

VuePress 对 Markdown 做了一些扩展，使得我们可以在 Markdown 文件中使用 YAML 语法，VuePress 使用 ---来隔离 Markdown 语法。

```shell
---
// 该语法表示使用当前页面标题自动生成侧边栏
sidebar: auto
---
```

## VuePress 基础配置

> 通过 VuePress 配置文件我们可以使用一些自定义的功能，譬如添加侧边栏，添加导航栏等。首先在`docs`目录下新建一个`.vuepress`目录，并在该目录下方新建`config.js`。

1. VuePress 默认将文件打包在`.vuepress/dist`目录下，我们可以通过`dest`属性修改文件输出目录，例如将文件输出在项目根目录下的`dist`文件夹中。
2. 通过设置`repo`属性，VuePress 会在导航栏中添加一个 Github 仓库的链接。
3. 在 VuePress 中通过设置`title`属性来设置网站的标题，它将会被用作所有页面标题的前缀，在默认主题下，它将应用在导航栏上。
4. 在使用 VuePress 编写博客并发布到 Github pages 的时候，我们可能会遇到下图所显示的问题，页面已经有了，但是样式和 js 没有加载成功。我们可以通过配置`base`属性来解决这个问题，`base `属性的默认值是`/`。假如您准备将代码部署到`https://taoxusheng.github.io/mt-blog/`, 那么`base`属性就应该被设置成`/mt-blog/`。**注意：base 属性的值总是以 / 开始并以 / 结束**。

![](https://pic2.zhimg.com/80/v2-a388e26de196474904df383811069caa_hd.jpg)

```javascript
// dcos/.vuepress/config.js
module.exports = {
  title: 'my-blog',  // 设置网站标题
  dest: './dist',    // 设置输出目录
  base: '/mt-blog/', // 设置站点根路径
  repo: 'https://github.com/TaoXuSheng/mt-blog' // 添加 github 链接
}
```

## 导航栏与侧边栏

> 在 VuePress 中如果想要为您的网站添加导航栏，可以通过设置`themeConfig.nav`来添加导航链接，通过设置`themeConfig.sidebar`属性来添加侧边栏。如果您的导航是一个下拉列表，可以通过`items`属性来设置。

```javascript
// dcos/.vuepress/config.js
module.exports = {
  themeConfig: {
    // 添加导航栏
    nav: [
      { text: 'vue', link: '/' },
      { text: 'css', link: '/blog/' },
      { text: 'js', link: '/zhihu/' },
      {
        text: 'github',
        // 这里是下拉列表展现形式。
        items: [
          { text: 'focus-outside', link: 'https://github.com/TaoXuSheng/focus-outside' },
          { text: 'stylus-converter', link: 'https://github.com/TaoXuSheng/stylus-converter' }
        ]
      }
    ],
    // 为以下路由添加侧边栏
    sidebar: ['/', '/git', '/vue']
  }
}
```

有些时候我们可能需要一个多级侧边栏，例如一个博客系统，将一些类似的文章放在相同的目录下方，我们希望为这些目录的所有文件都添加侧边栏，就像下面这样的一个目录。

```shell
docs
 ├── README.md
 ├── vue
 │    ├─ README.md
 │    ├─ one.md
 │    └─ two.md
 └── css
      ├─ README.md
      ├─ three.md
      └─ four.md
```

对于多级目录的侧边栏，我们需要用使用对象描述的写法，下面的 /git/ 表示在 git 目录，默认指向 /git/README.md 文件。

```javascript
// dcos/.vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: {
      '/vue/': [
        'one',
        'two'
      ],
      '/css/': [
        'three',
        'four'
      ]
    }
  }
}
```

## 在 VuePress 中注册组件

> 在 VuePress 中编写 Vue 代码，和我们通常的编写单文件的方式一致，有些时候我们有可能需要使用 Vue 的 UI 组件库。例如 [Element](http://element.eleme.io/#/)，[Mint](http://mint-ui.github.io/docs/#/!/zh-cn) 等，通常我们在项目中使用这些 UI 组件库的时候，我们都会在`main.js`或`botostrap.js`文件中统一注册。好在 VuePress 中也支持这种功能，我们可以通过创建一个`.vuepress/enhanceApp.js`文件来做一些应用级别的配置，这个文件`exprot default`一个钩子函数，在这个钩子中你可以做一些特殊处理，例如添加全局路由钩子，注册外部组件库。

```javascript
// .vuepress/enhanceApp.js
// 全局注册 Element 组件库
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

export default ({
  Vue,
  options,
  router
}) => {
  Vue.use(Element)
}
```

在 Vue 正常开发中，有些时候我们可能会需要做一些自定义的组件，在 VuePress 中我们可以在`.vuepress/components`目录中编写我们的自定义组件，VuePress 在编译时遍历该目录中所有的`*.vue`文件，并见它们注册为全局组件。

```html
// 注册一个自定义组件
// docs/.vuepress/components/my-hello.vue
<template>
  <div class="cpt-hello">Hello VuePress Demo</div>
</template>
```


这样我们在 Markdown 文件编写 Vue 代码的时候就不需要注册注册这些组件，边可以直接在 Markdown 中使用了。

```vue
// docs/.vuepress/vue/README.md
<template>
  <div class="test-demo">
    {{ msg }}
    <my-hello></my-hello>
    <el-button>button</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello VuePress!'
    }
  }
}
</script>
```

<template>
  <div class="test-demo">
    {{ msg }}
    <my-hello></my-hello>
    <el-button>button</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello VuePress!'
    }
  }
}
</script>

## 部署到 Github pages

> 当我们将文档写好后就到了我们最关心的地方了，怎么将打包后的代码推送到远程仓库的 gh-pages 分支上，网上应该有很多文章描述怎么做，但是很多方法比较麻烦，还好有工具已经为我们解决了这个麻烦了。

```javascript
// 1.下载 gh-pages 包
npm install -D gh-pages

// 2. 在 package.json 文件上添加脚本命令
"scripts": {
  "docs:dev": "vuepress dev docs",
  "docs:build": "vuepress build docs",
  // 上面我修改了 VuePress 的输出目录，所以您如果没有修改 .vuepress/config.js
  // 的 dest 属性，应该将这里的 dist 改为 .vuepress/dist
  "deploy": "gh-pages -d dist",
  "deploy:build": "npm run docs:build && gh-pages -d dist"
}

// 3. 打包并推送到 gh-pages 分支
npm run deploy:build

// 4.打开你的 Github pages, 地址是 https://<yourname>/github.io/<repo>
```

## 总结

> 相比较 Hexo 而言 VuePress 上手更加容易，功能也更强大，例如在 VuePress 可以注册自定义组件，而且 VuePress 中编写 Vue 和平时一样学习成本几乎为零。所以如果您正在开源一款 Vue 相关的库或是其他项目，您都可以使用 VuePress 作为您的文档编辑工具。虽然并没有完全将 VuePress 内容讲完，学完该篇文章相信你可以对 VuePress 有个大概的了解，您至少可以快速搭建一个博客，如果您想对 VuePress 有更多了解，请参考 Vuepress 中文 API。最后安利一波我正在做的开源项目 [stylus-converter](https://github.com/TaoXuSheng/stylus-converter)，有兴趣的同学可以一起参与，祝各位生活愉快，五一小长假玩的开心。
