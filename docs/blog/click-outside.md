<h1 align="center">如何优雅解决 iframe 无法触发 clickOutside</h1>

### 前言

> 在公司的一次小组分享会上，[组长](https://github.com/coolzjy) 给我们分享了一个他在项目中遇到的一个问题。在一个嵌入 iframe 的系统中，当我们点击 Dropdown 展开后，再去点击 iframe 发现无法触发 Dropdown 的 clickOutside 事件，导致 Dropdown 无法收起。

[查看示例](https://jsfiddle.net/_MT_/wLkgu614/29/)

### 为什么无法触发 clickOutside

目前大多数的 UI 组件库，例如 Element、Ant Design、iView 等都是通过鼠标事件来处理， 下面这段是 iView 中的 clickOutside 代码，iView 直接给 Document 绑定了 click 事件，当 click 事件触发时候，判断点击目标是否包含在绑定元素中，如果不是就调用绑定的函数。

```javascript
bind (el, binding, vnode) {
  function documentHandler (e) {
    if (el.contains(e.target)) {
      return false;
    }
    if (binding.expression) {
      binding.value(e);
    }
  }
  el.__vueClickOutside__ = documentHandler;
  document.addEventListener('click', documentHandler);
}
```

但 iframe 中加载的是一个相对独立的 Document，如果直接在父页面中给 Document 绑定 click 事件，点击 iframe 并不会触发该事件。

知道问题出现在哪里，接下来我们来思考怎么解决？

#### 给 iframe 的 body 元素绑定事件

我们可以通过一些特殊的方式给 iframe 绑定上事件，但这种做法不优雅，而且也是存在问题的。我们来想想一下这样一个场景，左边是一个侧边栏(导航栏)，上面是一个 Header 里面有一些 Dropdown 或是 Select 组件，下面是一个页面区域。但这些页面有的是嵌入 iframe，有些是当前系统的页面。如果使用这种方法，我们在切换路由的时候就要不断的去判断这个页面是否包含 iframe，然后绑定/解绑事件。但如果 iframe 和当前系统不是同域，那么这种做法是无效的。

#### 添加遮罩层

我们可以通过给 iframe 添加一个透明遮罩层，点击 Dropdown 的时候显示透明遮罩层，点击 Dropdown 之外的区域或遮罩层，就关闭遮罩层并派发 clickOutside 事件，这样虽然可以触发 clickOutside 事件，但存在一个问题，如果用户点击的区域正好是 iframe 页面中的某个按钮，那么第一次点击是不会生效的，这种做法对于交互不是很友好。

#### 通过 focusin 与 focusout 事件

其实我们可以换一种思路，为什么一定要用鼠标事件呢？focusin 与 focusout 事件就很适合处理当前这种情况，当我们点击非绑定的元素时触发 focusout 事件，如果是就添加一个定时器，延时调用我们绑定的函数。当我们点击绑定元素例如 Dropdown 会触发 focusin 事件，这时候我们判断目标是否包含在绑定元素中，如果包含在绑定元素中就清除定时器。

不过使用 focusin 与 focusout 事件需要解决一个问题，那就是要将绑定的元素变成 focusable，那么怎么将元素变成focusable 呢？通过将 tabindex 属性置为 `-1` , 该元素就变成可由代码获取焦点。需要注意的是，元素变成 focusable 后，当它获取焦点浏览器会给它加上高亮样式，如果不需要这种样式可以将 outline 设置为 none。

不过这种方法虽然很棒，但是也存在一些问题，浏览器兼容性，下面是 MDN 给出的浏览器兼容情况，Firefox 低版本不兼容。

<img
  src="../images/focusout.png">
</img>

### 使用 focus-outside 库

[focus-outside](https://github.com/txs1992/focus-outside) 是我为了解决上述问题所创建的仓库。使用起来也非常方便，它只有两个方法，bind 与 unbind，它不依赖任何其他库，并且支持为多个元素绑定一个函数。

为什么要给多个元素绑定一个函数，这么做是为了兼容 Element，因为 Element 的 Dropdown 会被插入 body 元素中，它的按钮和容器是分离的，当我们点击按钮显示 Dropdown，当我们点击 Dropdown 区域，这时候按钮会失去焦点触发 focusout 事件。事实上我们并不希望这时关闭 Dropdown，所以我将它们视为同一个绑定源。

这里说明下 Element 为什么要将弹出层放在 body 中，如果直接挂在父元素下，会受到父元素样式的影响。比如父元素有 overflow: hidden，弹出菜单就有可能被隐藏掉。

#### 简单使用

```javascript
// import { bind, unbidn } from 'focus-outside'
// 建议使用下面这种别名，防止和你的函数命名冲突了。
import { bind: focusBind, unbind: focusUnbind } from 'focus-outside'

// 如果你是使用 CDN 引入的，应该这么引入
// <script src="https://unpkg.com/focus-outside@0.4.0/lib/index.js"></script>
const { bind: focusBind, unbind: focusUnbind } = FocusOutside

const elm = document.querySelector('#dorpdown-button')
// 绑定函数
focusBind(elm, callback)

function callback () {
  console.log('您点击了 dropdown 按钮外面的区域')
  // 清除绑定
  focusUnbind(elm, callback)
}
```

[查看在线示例](https://jsfiddle.net/_MT_/z0dejc23/9/)

#### 注意

前面说到过元素变成 focusable 后，当它获取焦点浏览器会给它加上高亮样式，如果你不希望看到和这个样式，你只需要将这个元素的 CSS 属性 outline 设置为 none。focsout-outside 0.5 的版本新增 className 参数，为每个绑定的元素添加类名，默认类名是 focus-outside，执行 unbind 函数时候会将这个类名从元素上删除 。

```javascript
<div id="focus-ele"></div>

// js
const elm = document.querySelector('#focus-ele')
// 默认类名是 focus-outside
focusBind(elm, callback, 'my-focus-name')

// css
// 如果你需要覆盖所有的默认样式，可以在这段代码放在全局 CSS 中。
.my-focus-name {
  outline: none;
}
```

#### 在 Vue 中使用

```javascript
// outside.js
export default {
  bind (el, binding) {
    focusBind(el, binding.value)
  },

  unbind (el, binding) {
    focusUnbind(el, binding.value)
  }
}

// xx.vue
<template>
  <div v-outside="handleOutside"></div>
</template>

import outside from './outside.js'

export default {
  directives: { outside },

  methods: {
    handleOutside () {
      // 做点什么...
    }
  }
}
```

[查看在线示例](https://jsfiddle.net/_MT_/57Lmbpe9/)

#### 在 Element 中使用

```javascript
<el-dropdown
  ref="dropdown"
  trigger="click">
  <span class="el-dropdown-link">
    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu
    ref="dropdownContent"
    slot="dropdown">
    <el-dropdown-item>黄金糕</el-dropdown-item>
    <el-dropdown-item>狮子头</el-dropdown-item>
    <el-dropdown-item>螺蛳粉</el-dropdown-item>
    <el-dropdown-item>双皮奶</el-dropdown-item>
    <el-dropdown-item>蚵仔煎</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>

import { bind: focusBind, unbind: focusUnbind } from 'focus-outside'

export default {
  mounted () {
    focusBind(this.$refs.dropdown.$el, this.$refs.dropdown.hide)
    focusBind(this.$refs.dropdownContent.$el, this.$refs.dropdown.hide)
  },

  destoryed () {
    focusUnbind(this.$refs.dropdown.$el, this.$refs.dropdown.hide)
    focusUnbind(this.$refs.dropdownContent.$el, this.$refs.dropdown.hide)
  }
}
```

[查看在线示例](https://jsfiddle.net/_MT_/1wb8nk67/57/)

#### 在 Ant Design 中使用

```javascript
import { Menu, Dropdown, Icon, Button } = antd
import { bind: focusBind, unbind: focusUnbind } = 'focus-outside'

function getItems () {
  return [1,2,3,4].map(item => {
    return <Menu.Item key={item}>{item} st menu item </Menu.Item>
  })
}

class MyMenu extends React.Component {
  constructor (props) {
    super(props)
    this.menuElm = null
  }

  render () {
    return (<Menu ref="menu" onClick={this.props.onClick}>{getItems()}</Menu>)
  }

  componentDidMount () {
    this.menuElm = ReactDOM.findDOMNode(this.refs.menu)
    if (this.menuElm && this.props.outside) focusBind(this.menuElm, this.props.outside)
  }

  componentWillUnmount () {
    if (this.menuElm && this.props.outside) focusUnbind(this.menuElm, this.props.outside)
  }
}

class MyDropdown extends React.Component {

  constructor (props) {
    super(props)
    this.dropdownElm = null
  }

  state = {
    visible: false
  }

  render () {
    const menu = (<MyMenu outside={ this.handleOutside } onClick={ this.handleClick } />)
    return (
      <Dropdown
        ref="divRef"
        visible={this.state.visible}
        trigger={['click']}
        overlay={ menu }>
        <Button style={{ marginLeft: 8 }} onClick={ this.handleClick }>
          Button <Icon type="down" />
        </Button>
      </Dropdown>
    )
  }

  componentDidMount () {
    this.dropdownElm = ReactDOM.findDOMNode(this.refs.divRef)
    if (this.dropdownElm) focusBind(this.dropdownElm, this.handleOutside)
  }

  componentWillUnmount () {
    if (this.dropdownElm) focusUnbind(this.dropdownElm, this.handleOutside)
  }

  handleOutside = () => {
    this.setState({ visible: false })
  }

  handleClick = () => {
    this.setState({ visible: !this.state.visible })
  }
}

ReactDOM.render(
  <MyDropdown/>,
  document.getElementById('container')
)
```

[查看在线示例](https://codepen.io/taoxusheng/pen/KeRyXL?editors=1010)

### 总结

iframe 元素无法触发鼠标事件，在 iframe 中触发 clickOutside, 更好的做法是使用 focusin 与 focusout 事件。将 tabindex 设置为 -1 可以将元素变成 focusable 元素。

相关链接

- [MDN focusin](https://developer.mozilla.org/en-US/docs/Web/Events/focusin)
- [MDN focusout](https://developer.mozilla.org/en-US/docs/Web/Events/focusout)
- [focus-outside](https://github.com/txs1992/focus-outside)
- [说说 tabindex 的那些事儿](http://bubkoo.com/2015/02/01/using-the-tabindex-attribute/)
- [HTML tabindex 属性与 web 网页键盘无障碍访问](https://www.zhangxinxu.com/wordpress/2017/05/html-tabindex/)
