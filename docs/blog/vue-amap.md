# 在 Vue 中使用高德地图的一些问题

![](https://github.com/1969290646/blog/blob/master/doc/201801/source/banner.png)

## 前言

前段时间做了一个和地图相关的项目，项目中有多个地图页面，这些地图页面有一个侧边栏，一个筛选组件，根据筛选组件的条件请求数据，然后在地图上放覆盖物。在实际开发中遇到了一些问题做了一些总结。

## zoom 缩放

虽然说高德地图提供了丰富的 API 以及 UI 组件库供我们使用，但是实际需求中，产品总是会提出一些匪夷所思的需求，这些需求在现有的 API 中没有实现，我们就需要自己去做一些封装。在地图中有一类组件经常会被使用到，那就是 Zoom 组件，通过点击放大与缩小按钮来操作地图。

产品提出需求，在不同页面中缩放的级别可能不同，到这里大家可能要说了，要实现上面的功能其实很简单，在创建地图实例的时候设置 `zooms` 就可以了，确实是这样。只是我这里有些不同，我的项目是多个页面共用一个地图实例，所以这个 `zooms` 不能被所有的页面通用。

## zoom 事件的问题

用过高德地图的同学可能会说，这个也很简单啊，注册高德地图的 `zoomstart` 事件就可以了，如果你用 `zoomstart` 事件来做处理会导致一些问题。

```javascript
const ZOOM_MAX = 15
const ZOOM_MIN = 12
const Z00M_DEFAULT = 14

export default {
	...
	// 监听事件
	created () {
		this.map.on('zoomstart', this.zoomStartHandler)
		this.map.setZoom(Z00M_DEFAULT)
	},

	beforeDestroy () {
		this.map.off('zoomstart', this.zoomStartHandler)
	},

	methods: {
		zoomStartHandler () {
			const zoom = this.map.getZoom()
			if (zoom > ZOOM_MAX) {
				this.map.setZoom(ZOOM_MAX)
			} else if (zoom < ZOOM_MIN) {
				this.map.setZoom(ZOOM_MIN)
			}
		}
	}
}
```

如代码所示，有一个地图页面缩放只能是在 12 - 15 之间，默认缩放级别是 13，当你缩放级别大于 15 的时候将级别设置为 15，当缩放级别小于 12 的时候讲级别设置为 12，看上去似乎没什么问题。如果你这时候你快速放大地图，就会发现地图超出 15 后并没有停止，而是继续放大。

这是为什么呢？因为这与高德地图的 `zoom` 事件有关，`zoomstart` 事件触发后，在没有触发 `zoomend` 事件之前不会重新触发，`zoomchange` 这个事件是触发在 `zoomend` 事件之前，而如果你快速缩放地图你会发现，即使地图已经开始变化了，但是 `zoomchange` 并没有触发，只是在地图缩放快要结束前才会触发。

地图第一次放大的时候 zoom 值是 15，第二次缩放的时候是 16 但是由于还没有触发 `zoomend` 事件，`zoomstart` 事件不会再触发，所以地图会继续缩放。而如果你使用 `zoomchange` 或 `zoomend` 事件来处理，那么地图先放大然后再缩小，对用户的使用体验非常差。

另外高德地图的缩放还有一个问题，那就是 ZOOM 组件和双击地图缩放，在 `zoomstart` 事件中获取的值是不一样的。ZOOM 组件点击获取的值是缩放后的值，而双击地图缩放获取的值是缩放前的值，具体原因是什么还不清楚，大家可以自己测试一下。

既然监听 `zoom` 事件没办法做到这个功能，哪应该怎么办呢？首先我们需要将 `doubleClickZoom` 和 `scrollWheel` 属性设置为 `false`，然后我们自己写一个 Zoom 组件，这样我们可以不关心 `zoom` 事件，只需要关心组件的值即可。

```html
<div class="cpt-zoom">
	<button @click="zoomIn">+</button>
	<span>{{ zoom }}</span>
	<button @click="zoomOut">-</button>
</div>

export default {
	props: {
		min: Number,
		max: Number,
		map: {
			type: Object,
			required: true
		}
	},

	data () {
		return {
			zoom: this.map.getZoom()
		}
	},

	methods: {
		zoomIn () {
			const { map, max } = this
			if (map.getZoom() < this.max) {
				map.zoomIn()
				this.zoom = map.getZoom()
			}
		},

		zoomOut () {
			// 处理
		}
	}
}
```

## 渲染优化

前面说过这个项目中有一个功能就是渲染覆盖物，数据是通过浏览器窗口中的地图区域来获取的，最开始为了方便想当然的将渲染功能做成了一个组件，当时需要渲染的覆盖物数据大约在 200 多条左右，渲染所需要的时间大约在 1 秒钟左右。一个月后产品说这里看到的数据太少，要将地图缩放两个级别，高德地图缩放一个级别，地图中的面积大约放大 4 倍，也就是说我需要渲染原来数据的 8 倍，大约在 2000 条数据左右。这时却发现渲染时间高达十几秒，这么长的的渲染时间，别说用户了，我自己都受不了，肯定不行。

现在最重要的问题就是提升渲染性能，最少要做到渲染 1000 条数据的时候不能超过 1 秒钟，
想要提升性能就要找出问题出现在哪里，用 console.time 以及 console.timeEnd 打印的结果都差不多，大约是 300 毫秒左右，这个数据显然不准确。

问题出现在哪里了，一点头绪都没有，后来和同事探讨发现问题出现在 Vue 身上，因为当数据发生变化之后，Vue 会将所有数据递归遍历一遍，同时为数据添加 getter/setter 方法。每次请求的数据传给组件时都会被遍历，其次，组件的 data 中还保存了 覆盖物的数组，也就是说这些覆盖物的数组也将被遍历。

了解到原因后，问题就很好解决了，将地图渲染的数据从 Vue 中抽离，需要渲染的时候单独调用渲染方法不再将数据交给 Vue 处理。

下面是关数据被 Vue 管理和不被 Vue 管理的一个性能测试。

![](https://github.com/1969290646/blog/blob/master/doc/201801/source/test.png)

[测试链接](https://jsperf.com/test-vue-prop-data)
