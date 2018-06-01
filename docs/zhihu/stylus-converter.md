# 从零开始写个 Stylus 转换器

## 背景

> 刚进公司的时候还没有学过什么预编译 CSS，在网上查了一下感觉 Stylus 代码简洁，功能强大，所以在第一个项目中就用了 Stylus。随着时间的推移，后面的项目渐渐的改用了团队成员使用较多的 SCSS，前段时间需要维护那个老项目，用习惯了 SCSS 之后对 Stylus 的缩进语法有些别扭。

> 由于我所在的团队都是使用 SCSS 进行开发，如果别人去维护这个项目，估计还需要点时间去适应 Stylus，从团队角度来说不易于维护。于是就准备将这个项目替换成 SCSS，但是如果手动去转换 Stylus 浪费时间，出错率比较大，而且这种工作只是一次性的。

> 在 Google 和 Github 上面找了一圈，发现有 SCSS 和 Less 的转换工具，但就是没有 Stylus 的转换工具。当时心里在想：要不我自己去写这个工具吧？感觉这个好像很难啊，我能做出来吗？不管了先试试吧。于是 **[stylus-converter](https://github.com/txs1992/stylus-converter)** 这个项目就这样诞生了，只需要执行一条命令就可以将 stylus 转换成 SCSS。目前工具已完成 Stylus 到 SCSS 的转换，下一步会添加 Stylus 到 Less 的转换。

## 使用示例

> 你说了那么多，但是我需要知道你这个工具是否好用，你得拿出实锤让我们看看，如果工具不好用，我才不要浪费时间去学习。好吧，既然各位已经提出意见了，那就满足各位的要求。不知道各位知不知道前两年有个非常火的仿饿了么 APP 的项目，我曾在网上看过这个项目的代码，其中就用到了 Stylus，那我们就用 vue-sell 来试验一波（已经经过 ustbhuangyi 同意），废话不多说直接开干。

```javascript
// 先下载 stylus-converter
npm install -g stylus-converter

// clone vue-sell 项目
git clone git@github.com:ustbhuangyi/vue-sell.git

// 进入 vue-sell 项目目录
cd vue-sell

// 下载项目依赖
npm install

// 修改文件夹
mv src src-temp

// 将目录中的所有 stylus 转换为 scss
stylus-conver -d yes -i src-temp -o src

// 进入 src 目录，打开 main.js 文件
// 将 import 'common/stylus/index.styl';
// 改为 import 'common/stylus/index.scss';

// 下载 loader
npm instll -d node-sass sass-loader

// 嗯！项目已经转换完成，让我们运行一下吧
npm run dev
```

经过上面几个步骤，vue-sell 中的 Stylus 源码已经被转换完成了 SCSS，其中转换的工作只用到 stylus-converter 的只有一条简单的命令而已。

## 如何转换 Stylus 源码

> 看完示例我们已经知道如何去使用这个工具了，但既然标题是**从零开始写个 Stylus 转换器**，那我们就来说说如何去实现这个工具，首先我们要解决的问题就是如何去转换 Stylus 的源码。

### 使用正则来转换代码

最开始的时候想到的是用正则将 Stylus 转换成 SCSS，当时觉得这个工作应该很简单，将 Stylus 转换成 SCSS 只需要给代码尾部加上分号和大括号就可以了。然后花了两天业余时间也没写出 demo，因为后来发现不仅仅只是在尾部价格分号以及大括号这么简单，它们有很多语法是不一样的。例如 Stylus 在定义以及调用 Mixin 和 Function 是一样的。而 SCSS 在定义 Mixin 以及调用 Mixin 的时候语法都是不一样的所以最终还是放弃了使用正则来处理这个任务，后面的篇幅会详细介绍转换中遇到的问题。

### PostCSS 与 AST

在放弃正则之后就在想到底应该怎么去处理 Stylus 呢？一次在和同事的交流中，同事建议让我看看 AST 和 PostCSS。

首先我们先简单了解一下什么是 AST，AST 中文是抽象语法树，是源代码的一种抽象表示，它以树状结构表现源代码的语法结构，简单来说就是将源代码解析成我们可以处理的数据结构。

再来看看 PostCSS，PostCSS 就是提供了使用 JavaScript 代码处理 CSS 的工具，PostCSS 有两个主要的功能。

1. 将 CSS 源码转换成 CSS 抽象语法树 AST
2. 调用插件来处理语法树并得到结果

试用了一下发现 PostCSS 并不能将 Stylus 转换成 AST，因为无法解析 Stylus 语法。

### PostStylus 与 Stylus

不过在查看 PostCSS 仓库的时候以外发现了一个 PostStylus 的插件，PostStylus 是一个处理 Stylus 的 PostCSS 适配器，PostStylus 可以拿到 Stylus 编译后的 CSS 源码，但是却无法获取 Stylus 的语法树。有些好奇 PostStylus 是如何获取到 CSS 源码，接下来让我们看看 PostStylus 以及 Stylus 的源码。

```javascript
/* PostStylus 源码一部分 */
module.exports = function (plugins, warnFn) {
  return function (style) {
    style.on('end', function(err, css) {
      // 调用 PostCSS 处理 CSS 源码，并调用相关插件。
    })
  }
}

/* Stylus 仓库的 renderer.js 代码中的一部分 */
function Renderer (str, options) {
  options = options || {}
  options.use = options.use || []
  options.use = Array.isArray(options.use) ? options.use : [options.use]
  // 处理参数...
}

Renderer.prototype.render = function (fn) {
  var parser = this.parser = new Parser(this.str, this.options)

  // use plugin(s)
  for (var i = 0, len = this.options.use.length; i < len; i++) {
    this.use(this.options.use[i])
  }

  try {
    // 将 stylus 源码解析成 ast。
    var ast = parser.parse()

    // 对 stylus ast 做些处理 ...

  } catch (err) {
  }

  // 获取 end 事件的函数数组
  var listeners = this.listeners('end')
  if (fn) listeners.push(fn);
  for (var i = 0, len = listeners.length; i < len; i++) {
    var ret = listeners[i](null, css)
    if (ret) css = ret;
  }
  if (!fn) return css
}

Renderer.prototype.use = function (fn) {
  fn.call(this, this)
  return this
}
```

我们来看看 PostStylus 是如何得到 CSS 的 AST 对象，经过了哪些步骤？

1. 我们在 webpack 或 glup 中调用 Stylus CLI，将 PostStylus 当做配置项的一个插件传入，并创建一个 Renderer 实例
2. 执行 Renderer 实例的 `render` 函数，遍历 `options.use` 数组，并调用实例的 `use` 方法并传入 PostStylus 插件
3. 以 Renderer 实例调用 PostStylus 插件方法，并将当前实例(`this`)作为参数传入
4. 执行 PostStylus 返回的匿名函数，在 Renderer 实例中注册 `end` 事件
5. 继续执行 `render` 函数代码，调用 Parser 实例并调用 `parse` 方法得到 Stylus AST 对象
6. 处理 AST 对象，获取 `end` 事件的函数数组，遍历数组调用函数，传入已经处理完的 CSS 源码
7. 执行 PostStylus 调用 PostCSS 转换 CSS 源码，并调用插件处理

从上面的步骤中我们可看出 PostStylus 如果处理 Stylus，最重要的是我们知道了如何获取 Stylus 的 AST 对象，
通过调用 Parser 实例的 parse() 方法能获取到 Stylus 的 AST 对象。既然我们已经可以得到 Stylus 的 AST 对象了，那么接下来就是如何处理 AST 了。

## 处理 AST

关于 Stylus 转换成 AST 有哪些节点，可以在[nodes 文件夹](https://github.com/stylus/stylus/tree/dev/lib/nodes)中查看，这里就不一一描述了，接下来说说在转换 AST 的时候遇到了哪些问题，以及如何去解决这些问题，在开始前，先给大家看看转换后的 AST 是怎么样的。

```
/* nodes/selector */
Selector.prototype.toJSON = function () {
  return {
    __type: 'Selector',
    inherits: this.inherits,
    segments: this.segments,
    optional: this.optional,
    val: this.val,
    lineno: this.lineno,
    column: this.column,
    filename: this.filename
  }
}

/* nodes/block */
Block.prototype.toJSON = function() {
  return {
    __type: 'Block',
    scope: this.scope,
    lineno: this.lineno,
    column: this.column,
    filename: this.filename,
    nodes: this.nodes
  }
}
```

上面一段代码是 Selector 节点对象和 Block 节点对象的 `toJSON` 方法，我们来看看两个节点对象相同的的属性有哪些。

1. `__type` 属性表示节点的类型，我们可以针对不同的类型调用不同的处理方法
2. `lineno` 属性表示节点在源码中的行数，根据这个属性来判断是否需要换行
3. `column` 属性表示节点在源码中的列数，前期我根据这个属性来处理缩进，后来发现根据 Block 节点处理缩进更方便

### 处理换行缩进与花括号

处理这些很简单，先从换行开始，每个节点中都有一个 lineno 属性，表示当前节点所在的行，我们只需要使用 oldLineno 变量去记录这个值就好了，oldLineno 默认值是1，每次将节点的 lineno - oldLineno 就能得到换行的数值。

处理缩进，Stylus 中 Block 节点表示代码块，首先我们用一个 `indentationLevel` 变量来表示缩进等级，这个变量默认值是 0，每次遇到 Block 节点的时候将这个变量加一，在处理完 Block 节点的时候讲这个变量减一。为什么要这么做，因为节点是可以嵌套的，一个 Block 节点中可能嵌套着无数个 Block 以及其他节点，然后按照自己喜欢将这个变量乘以 2 或 4，再填充空格就得到缩进了。

处理花括号和缩进一样，也是根据 Block 节点，我们只需要在这个节点的开头后结尾分别加上两个花括号就可以了。

### 处理循环

先对比一下 Stylus 与 SCSS 的循环语法有什么不同之处

```scss
/* stylus */
div
  for str in 1 2 3 4 5
    bar str
  for num in 1..5
    foo num

/* scss */
div {
  @for $num from 1 through 5 {
    foo: $num;
  }
  @for $index from 1 to 5 {
    len: $index;
  }
  @each $str in 1, 2, 3, 4, 5 {
    bar: $str;
  }
}
```

从上面的代码我们可以看出 SCSS 循环的语法有三种，分别是：

1. `@for` <变量名> `from` <start> `through` <end>
2. `@for` <变量名> `from` <start> `to` <end>
3. `@each` <变量名> `in` <表达式>

而 Stylus 的循环语法都是 `for` <变量名> `in` <表达式>，那么怎么将 Stylus 转换成 SCSS 呢？

首先我们来对比一下共性，Stylus 的 `for` <变量名> `in` <表达式> 和 SCSS 的 `@each` <变量名> `in` <表达式> 的形式是一样的，所以我们可以先将 Stylus 中的 `for` 语法全部转换下面这样。

```scss
/* stylus */
for str in 1 2 3 4 5
  bar str
for num in 1..5
  foo num

/* scss */
@each $str in 1 2 3 4 5 {
  bar: $str;
}

@each $num in 1..5 {
  foo: $num;
}
```

这时候我们会发现转换后的 `1..5` 这种语法 SCSS 不支持，怎么办？细心的同学可能已经发现了，Stylus 的 `1..5` 这种形式和 SCSS 的 `1 through 5` 得到的结果是一样的，所以我们在转换后再做一次判断，如果转换后的代码中包含 `..` 我们再将其转换成 `@for` <变量名> `from` <start> `through` <end> 这种形式。

```javascrip
// 转换前
for num in 1..5
  foo num

// 转换后
@each $num in 1..5 {
  foo: $num;
}

// 包含 `..` 进行二次转换
if (/\.\./.test(converText)) {
  converText = converText.replace('@each', '@for').replace('..', 'through').replace('in', 'from')
}

// 最终结果
@for $num from 1 through 5 {
  foo: $num;
}
```

这样 Stylus 的循环语法都已经转换完了，至于 `@for` <变量名> `from` <start> `to` <end> 这种形式，Stylus 中并没有相似的功能，所以我们直接抛弃就好了。

### 处理 Function 与 Mixin

在 Stylus 中 Funcation 与 Mixin 的定义已经执行都是一样的语法，并且 Stylus 会将它们都解析成 Function 节点。而在 SCSS 中两种语法的定义以及使用都是不一样的，我们来看看下面两种语法的对比。

```scss
/* stylus 语法 */
border-radius(val)
  border-radius: val

add(a, b)
  a + b

button
  width add(5px, 10px)
  border-radius(5px)

 /* scss 语法 */
@mixin border-radius($val) {
  border-radius: $val;
}

@function add($a, $b) {
  @return $a + $b;
}

button {
  width: add(5px, 10px);
  @include border-radius(5px);
}
```

前面说到 Stylus 的 Function 和 Mixin 都会被解析成 Function 节点，那我们首先要解决的问题就是要知道谁是 Function 谁是 Mixin。当时做到这里差点就放弃了，不过还是找到了突破点，我们发现 Mixin 中是包含了 CSS 相关的语法的，所以我们判断一下 Function 的子节点中是否包含 CSS 相关的节点，如果有那么它就是 Mixin。然后判断一下如果是 Mixin 前面就加上 `@mixin` 如果是 Function 前面就加上 `@function` 然后在 Block 节点中添加 `@return`， 就这样定义的部分已经解决了。

接下来我们来看看调用的部分，Function 或者 Mixin 的调用，在 Stylus 中都被解析成 Call 节点。不过有了之前的处理定义的经验，我们在调用的地方也可以去借鉴。我们发现在 Stylus 中如果是 Function 它都是在 CSS 属性的后面，或者是作为参数传递，所以只要判断它不是 Property 节点的子节点，且不是一个参数，那么它就是一个 Mixin。然后在调用 Mixin 的时候前面加上 `@include`，这样调用的部分就解决了。

上面的观念是我个人的总结，不一定是最佳方案，如果你有更好的解决方案，可以给我提 issue，谢谢。

### 处理 Boolean

Stylus 的布尔运算和 JavaScript 一样，使用 `&&` `||` `!` 等符号要表示，而 SCSS 中则是使用 `and` `or` `not` 来表示，这个只需要在遇到 Boolean 类型的时候做一个映射转换就好了，我建了一个 Map 结构来对应他们的关系。

``` javascript
const OPEARTION_MAP = {
  '&&': 'and',
  '!': 'not',
  '||': 'or'
}
```

上面列举了四种类型的转换，由于时间与篇幅的原因，这里就不一一详细叙述了，其他的类型转换相对来说都比较简单，有复杂的对比上面四种方案，应该都可以解决。

## 添加 CLI 功能

代码转换的功能完成了，接下来就可以发布了，等等好像还漏了点什么？如果使用这个工具好像还得自己写代码处理文件，用起来好麻烦啊，所以我希望能和 webpack 一样，执行 webpack <entry> <outpu> 就可以得到我想要的结果了，这对用户来说学习成本几乎为零，且使用方便。好吧！那就给它加上 CLI 的功能吧。

### 可执行脚本

Shebang（也称为 Hashbang ）是一个由井号和叹号构成的字符序列 `#!`，其出现在文本文件的第一行的前两个字符。当文件中存在 Shebang，操作系统会分析 Shebang 后面的内容，然后调用对应的解析器来解析文件，下面我们来写一个 node 的可执行脚本。

```javascript
/* 可执行脚本 bin.js */
#!/usr/bin/env node // 告诉操作系统调用 node 来解析文件

console.log('Hello Node Shell !')

/* package.json 这个文件是必须存在的 */
{
  "bin": {
    "cli-demo": "./bin.js"
  }
}
```

写完上面的代码，然后执行 `npm run link`，在全局的 npm 包环境中帮我们建立一个软链。这时我们在命令行中输入 `cli-demo` 就会输出 'Hello Node Shell !'，在我的 CLI 文件中一共使用了下面这些工具库。

- [commander](https://github.com/tj/commander.js) 提供用户命令行输入和参数解析功能
- [optimist](https://github.com/substack/node-optimist) 获取命令行参数解析
- [ora](https://github.com/sindresorhus/ora) 命令行交互功能，例如从 loading 到 success 的状态

### 处理 Vue 模板

由于我开发项目使用的都是 Vue，所以在工具中添加了对于 `.vue` 文件的处理。

```javascript
let result = res.toString()
const styleReg = /<style.*>((\n|.)*)<\/style>/
const matchs = result.match(styleReg)
if (Array.isArray(matchs) && matchs.length >= 2) {
  const text = converter(matchs[1], options)
  const styleText = `<style lang="scss">${text}</style>`
  result = result.replace(styleReg, styleText)
}
```

## 总结

在开发这个项目的过程中，我学习到了很多以前以前没有了解过的知识，例如 AST、可执行脚本，用了一些命令行交互的工具，查看了两个项目的源码。最大的感触就是坚持，是的，在没有做这个项目之前，一直觉得转换语法是一件很高大上的事情，也从没想过我可以做出来。希望这篇文章能够给你带来提升，最后如果您觉得这篇文章对您有用，或是这个工具正好可以帮助到您，请给我的 **[stylus-converter](https://github.com/txs1992/stylus-converter)** 加个 `star` 谢谢。
