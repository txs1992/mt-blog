# VuePress 主题踩坑

这两天刚好有时间，感觉 VuePress 的主题不是很适合博客系统，就看着改了一波，踩了点小坑。

### 如何组织主题目录

首先在 `.vuepress` 目录新建一个 `theme` 文件夹，然后再创建一个 `Layout.vue` 的文件。

```text
.vuepress
   └─ theme
      └─ Layout.vue
```

### 元数据

`Layout` 组件会将 `docs` 目录下所有的 `.md` 文件都执行一次，同时将这个页面的元数据暴露为 `this.$page` 属性，而整个网站的元数据暴露为 `this.$site` 属性，他们会被注入到当前被应用到的主题组件中。

```json
{
  "title": "Hello MT-BLOG",
  "description": "12345，上山打老虎。",
  "base": "/mt-blog/",
  "pages": [],
  "themeConfig": {
    "repo": "TaoXuSheng/mt-blog",
    "nav": [],
    "sidebar": {}
  }
}
```

上图是网站的 `$site` 值，其中 `base`，`title`，`description`，`themeConfig` 等属性是从 `.vuepress/config.js` 文件中 copy 过来的。而 `pages` 则是整个网站的页面元数据。

`docs/README.md` 文件中的内容，其中包含了 YAML、Markdown、Vue 等语法。

```text
---
home: true
title: 12345，上山打老虎
component: home
bgimg: ./mt-blog/docs/bg.jpeg
nav:
  - text: 知乎
    link: /zhihu/
  - text: 博客
    link: /blog/
---
## 标题一

> 整个是首页

<template>
  <div>test</div>
</template>

<script>
export default {
  created () {
    console.log('整个是首页')
  }
}
</script>
```


```json
{
  "path": "/",
  "title": "Home",
  "headers": [
    {
      "level": 2,
      "title": "标题一",
      "slug": "标题一"
    }
  ],
  "frontmatter": {
    "home": true,
    "title": "12345，上山打老虎",
    "component": "home",
    "bgimg": "./mt-blog/docs/bg.jpeg",
    "nav": [
      {
        "text": "知乎",
        "link": "/zhihu/"
      },
      {
        "text": "博客",
        "link": "/blog/"
      }
    ]
  }
}
```

上面是 `docs/README.md` 文件所对应的 `$page` 属性的值，`path` 是 VuePress 当前页面的路径，`headers` 对当前页面中 Markdown 语法的标题，`frontmatter` 是对当前页面的 YAML 语法的解析。其中 vue 相关的代码被直接忽略掉。

### 获取渲染内容

我们可以通过 VuePress 提供的全局组件 `<Content/>` 来渲染当前 `.md` 文件中的内容。
