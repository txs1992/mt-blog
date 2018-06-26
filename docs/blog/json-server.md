# 使用 Json Server 搭建本地 Mock 服务

> 使用 json-server 开启一个服务非常简单，只需要写一个 json 文件，然后执行 json-server —watch xx.json 就可以开启一个本地的数据服务了。默认端口是 3000， localhost:3000

```js
// data.json
{
    "login": {
        "name": "MT",
        "age": 26
    }
}
 
 
// 使用
json-server data.json
// watch 模式
json-server --watch data.json
```

### 精确匹配

> json-server 支持过滤数据功能，但只支持数组格式数据，例如下面的 JSON 数据，可以使用 userList?id=1 来筛选数据。

```js
{
    "userList": [
        {
            "id": 1,
            "name": "MT",
            "age": 26
        },
        {
            "id": 2,
            "name": "傻馒",
            "age": 24
        },
        {
            "id": 3,
            "name": "小德",
            "age": 26
        }
    ]
}
 
 
// localhost:3000/userList?id=1
// 得出结果
{
    "id": 1,
    "name": "MT",
    "age": 26
}
```

### 分页和区间

> json-server 支持分页功能，使用 _page=1 来获取第几页数据，默认10条数据一页。可以使用 _limit=5 修改每页数据量。配合 _page=1&_limit=3 完成自定义分页功能。使用 _start 和 _end 来获取区间数据，_start 也可以配合 _limit 一起使用。

```js
{
    "cities": [
        {
            "id": 1,
            "cityName": "北京"
        },
        {
            "id": 2,
            "cityName": "上海"
        },
 
        {
            "id": 3,
            "cityName": "天津"
        },
        {
            "id": 4,
            "cityName": "广州"
        },
        {
            "id": 5,
            "cityName": "深圳"
        },
        {
            "id": 6,
            "cityName": "合肥"
        }
    ]
}
 
 
// 获取第二页数据，没页3条数据。
localhost:3000/cities?_page=2&_limit=3
// 获取第 2 到第 5 条数据。
localhost:3000/cities?_start=2&_end=5
```

### 排序

> json-server 使用 _sort 属性表示对那个字段排序，_order=asc/desc 来进行升序或降序。可以配合分页功能一起使用。

```js
{
    "cities": [
        {
            "id": 1,
            "cityName": "北京"
        },
        {
            "id": 2,
            "cityName": "上海"
        },
 
        {
            "id": 3,
            "cityName": "天津"
        },
        {
            "id": 4,
            "cityName": "广州"
        },
        {
            "id": 5,
            "cityName": "深圳"
        },
        {
            "id": 6,
            "cityName": "合肥"
        }
    ]
}
 
 
// 对 id 进行降序
localhost:3000/cities?_sort=id&_order=desc
```

### 条件过滤

> _gte 表示大于等于，_lte 小于等于，_ne 不等于, _like 包含，使用方法是需要过滤的属性加上匹配符号，例如我要筛选年龄大于10小于20的，age_gte=10&age_lte=20

```js
{
    "cities": [
        {
            "id": 1,
            "cityName": "北京"
        },
        {
            "id": 2,
            "cityName": "上海"
        },
 
        {
            "id": 3,
            "cityName": "天津"
        },
        {
            "id": 4,
            "cityName": "广州"
        },
        {
            "id": 5,
            "cityName": "深圳"
        },
        {
            "id": 6,
            "cityName": "合肥"
        }
    ]
}
 
// 筛选出 id 大于 2 并且小于 5 的城市。
localhost:3000/cities?id_gte=3&id_lte=4
 
 
// 筛选 id 大于等于 2 的城市。
localhost:3000/cities?id_get=2
 
 
// 筛选 id 不是 3 的所有城市。
localhost:3000/cities?id_ne=3
 
 
// 筛选出 cityName 包含‘上’字的城市。
localhost:3000/cities?cityName_like=上
```

### 搜索与关系

> 属性 q 匹配所有包含的属性，例如我要过滤所有字段包含州的数据，?q=州。_embed 查找数据中所对应的子数据，如果没有默认空数组。_expand 返回数据对应的父数据，需要注意的是如果你直接查询时例如/provinces?_embed=cities/，如果你的子数组中有一个没有包含父 ID，会导致报错。

```js
{
    "cities": [
        {
            "id": 1,
            "cityName": "广州",
            "provinceId": 2
        },
        {
            "id": 2,
            "cityName": "深圳",
            "provinceId": 2
        },
        {
            "id": 3,
            "cityName": "合肥",
            "provinceId": 1
        }
    ],
    "provinces": [
        {
            "id": 1,
            "provinceName": "安徽"
        },
        {
            "id": 2,
            "provinceName": "广东"
 
        }
    ]
}
 
 
// 查询包含'深圳'字段的数据
localhost:3000/?q=深圳
 
 
// 查询所有省，以及它所包含的市。
localhost:3000/provinces?_embed=cities
 
 
// 查询所有市，以及它所包属于的省。
localhost:3000/cities?_expand=province
```

### 路由与其他

> 使用外部服务，可以使用其他服务器的文件，例如 json-server github/taoxusheng/json/db.json。生产随机数据，使用 js 代码编写。使用 —routes 命令开着自定义路由。

```
/api/posts # → /posts
/api/posts/1  # → /posts/1
/posts/1/show # → /posts/1
/posts/javascript # → /posts?category=javascript
/articles?id=1 # → /posts/1
```

[json-server 仓库地址](https://github.com/typicode/json-server)