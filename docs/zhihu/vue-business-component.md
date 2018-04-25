# 谈谈 Vue 业务组件

![](https://pic4.zhimg.com/v2-40883abc48d9993e58315294e51c6bd8_r.jpg)

春节的假期刚刚过去不久，大脑还没有从假期综合症中缓过来，就迎来了开工的日子，不知道各位有没有收到开工大红包？有没有被虐狗？

## 什么是组件

Web 页面上的每个独立的**可视/可交互**区域视为一个组件，组件就好像我们的 PC 组装机一样，整个机器（应用）由不同的部件组成，例如显示器、主板、内存、显卡、硬盘等等。页面就是由一个个类似这样的部分组成的，比如导航、列表、弹窗、级联、下拉菜单等。页面只不过是这些组件的容器，组件自由组合形成功能完整的界面，当不需要某个组件，或者想要替换某个组件时，可以随时进行替换和删除，而不影响整个应用的运行。

## 项目结构约定

1. 每个 Vue 组件的代码建议不要超出 200 行，如果超出建议拆分组件
2. 拆分文件目录，将页面、通用组件、工具、通用样式、路由等单独放在一个文件夹中。
3. 统一 Vue 文件的书写格式参考 [Vue 组件风格](https://github.com/pablohpsilva/vuejs-component-style-guide/blob/master/README-CN.md) 或 [风格指南（官方）](https://cn.vuejs.org/v2/style-guide/)。

例如我的项目结构：

```shell
src
 ├── assets			# 图片、icon 等静态资源
 ├── common			# state、工具函数、公共常量
 ├── components			# 公共组件
 ├── mixins			# 公共 mixin 文件
 ├── pages			# 页面组件
 ├── router			# 路由
 └── styles			# 公共样式文件
```

## 业务组件设计

我们在项目开发中必然会使用到一些通用的组件，例如弹窗、级联、下拉菜单等。好在有很多 UI 组件库例如 [element-ui](http://element.eleme.io/#/zh-CN/component/cascader)、[Mint UI](http://mint-ui.github.io/#!/zh-cn)、[framework7](http://vue.framework7.cn/)，这些 UI 组件库已经帮我们实现了最基础的功能，我们只需要拿来用就可以了。然而现实开发中，产品总是会脑洞大开，提出这样或那样的需求，很显然这些 UI 库并不能实现所有的业务需求。所以这个时候我们就需要自己设计一个组件，或是在某个 UI 组件的基础上再进行一层封装。

### 封装组件

譬如下拉多选，element-ui 的 select 组件虽然可以实现这个功能，但是 select 组件多选会将选中项作为标签放在 input 中，当选项过多会导致标签换行，并不美观。所以我们需要自己封装一个 dropdown-list 组件，我们只需要将 element-ui 的 dropdown 组件做一个简单的封装就可以实现这个功能。

```html
// dropdown-list.vue
<template>
  <el-dropdown
    class="cpt-dropdown-list"
    trigger="click"
    :hide-on-click="false"
    @command="commandHandler">
    <span class="dropdown-link">{{ text }}</span>
    <el-dropdown-menu
      slot="dropdown"
      class="cpt-dropdown-list-wrap">
      <el-dropdown-item
        v-for="item in options"
        :key="item.key"
        :command="item"
        :class="{ active: isActive(item) }">
        {{ item.label }}
        <i v-show="isActive(item)" class="el-icon-check"></i>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  props: {
    text: String,
    options: Array,
    selected: Array
  },

  methods: {
    isActive (data) {
      return this.selected.some(item => item.key === data.key)
    },

    commandHandler (data) {
      const temp = this.selected.slice()
      const index = temp.findIndex(item => item.key === data.key)
      if (index > -1) {
        temp.splice(index, 1)
      } else {
        temp.push(data)
      }
      this.$emit('update:selected', temp)
    }
  }
}
</script>

<style lang="scss">
.cpt-dropdown-list {
  display: inline-block;

  .dropdown-link {
    color: #409eff;
    cursor: pointer;
  }
}
</style>

// base.scss
.cpt-dropdown-list-wrap {
  max-height: 300px;
  overflow: auto;

  .el-dropdown-menu__item {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;

    &, &:hover {
      color: #606266;
      background-color: #fff;
    }

    .el-icon-check {
      margin-left: 10px;
      line-height: unset;
    }

    &.active {
      color: #409eff;
    }
  }
}
```

[查看在线示例](https://codesandbox.io/s/81l2p9zzk8)

### 样式作用域空间

使用 componet- 或 page- 作为前缀加上组件名称作为组件样式作用域空间。为什么要有样式作用域空间？因为随着项目不断的扩大，不同组件相同类名出现的可能性也越来越大，在某些场景下会导致样式冲突。譬如下面的例子：

```html
// primary-button.vue
<template functional>
  <div class="button">
    blue
  </div>
</template>

<style lang="css">
.button {
  color: blue;
}
</style>

// warning-button.vue
<template functional>
  <div class="button">
    red
  </div>
</template>

<style lang="css">
.button {
  color: red;
}
</style>

//home.vue
<template>
  <div class="page-home">
    <button @click="isRed = !isRed">click me</button>
    <warning-button v-if="isRed"></warning-button>
    <primary-button v-else></primary-button>
  </div>
</template>

<script>
import WarningButton from './warning-button.vue'
import PrimaryButton from './primary-button.vue'

export default {
  data () {
    return {
      isRed: true
    }
  },

  components: {
    WarningButton,
    PrimaryButton
  }
}
</script>
```

[查看在线示例](https://codesandbox.io/s/4rqn0kj180)

像上面的例子，我们期望通过切换 isRed 的值来切换不同背景色的按钮组件，初始化的时候 warning-button 组件背景色是红色，连续点击两次按钮切换回来 ，这时 warning-button 组件的背景色却变成了蓝色。这是因为切换 isRed 的时候加载了 primary-button 组件的样式，primary-button 组件的样式在 warning-button 组件之后加载，导致 warning-button 组件的样式被覆盖了。上面的例子过于简单，但实际开发中是有可能遇到这种问题的，所以我们应该为组件添加样式作用域空间来避免这种情况。

### 第三方库

在实际开发中，我们会使用一些第三方的库，例如 [Lodash](https://lodash.com/)、[ECharts](http://echarts.baidu.com/)、[高德地图](http://lbs.amap.com/api/javascript-api/summary/) 等。但产品可能提出一些第三方库本身不支持的功能，我们就需要在原有的基础上解析封装。例如我之前接手一个高德地图的项目，大部分页面都有高德地图功能，所以我在多个页面中共享一个地图实例。产品提出新需求，在不同页面中缩放的级别可能不同，而高德地图本身的 Zoom 组件不能实现该功能，所以我们需要自己封装这个功能。

```html
<template>
  <div class="cpt-zoom">
    <button @click="zoomIn">+</button>
    <span>{{ zoom }}</span>
    <button @click="zoomOut">-</button>
  </div>
</template>

<script>
export default {
  props: {
    min: Number,
    max: Number,
    map: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      zoom: this.map.getZoom()
    };
  },

  methods: {
    zoomIn() {
      // 处理
    },

    zoomOut() {
      // 处理
    }
  }
};
</script>
```

[查看在线示例](https://jsfiddle.net/cbgatuzL/24/)

## 最后

在日常的业务组件的开发中，个人总结了几点：
1. 这个功能是否通用（最少会被两个或以上页面引用）？如果功能只会在一个页面中使用，建议将该组件放在当前页面的文件夹中。
2. 这个功能是否是独立，如果不是可以将这个组件拆封成多个组件，如果这些子组件没用被单独引用可以将它们放在同一个文件夹中。还有一种情况，如果这个组价代码过多超出 200 行，这时我们也应该将功能拆分出去，这样会方便阅读也便于维护。
3. 为组件添加样式作用域空间，避免样式冲突。
4. 只在业务需要该功能的时候添加，在开发中我时常会犯一个错误“以后可能会用到”。实际上我们认为这个功能可能会用上，所以过早的编写了该功能，最后发现它们只会静静的待在哪里，为组件添加了很多无用的代码。
5. 如果组件本身没有 data，且没有复杂的计算属性，建议写成函数式组件。

上面提到的一些封装组件的建议，只是我个人在开发中做的一些总结，如果有什么不对的地方欢迎指出，最后祝大家 2018 开工大吉，狗年汪汪汪。

[原文地址](https://zhuanlan.zhihu.com/p/33999571)
