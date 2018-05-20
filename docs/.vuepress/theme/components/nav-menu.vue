<template>
  <div class="component-nav-menu">
    <div class="placeholder"></div>
    <!-- 搜索框 -->
    <div class="search-wrapper">
      <el-autocomplete
        v-model="searchValue"
        value-key="title"
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        background-color="#eee"
        :fetch-suggestions="querySearchTips"
        @select="handleSearchValue">
      </el-autocomplete>
    </div>
    <!-- 导航栏 -->
    <el-menu
      mode="horizontal"
      :default-active="defaultPath"
      @select="handleSelect">
      <template v-for="menu in menuList">
        <el-submenu
          v-if="menu.items"
          :index="menu.text">
          <template
            slot="title">
            {{ menu.text }}
          </template>
          <el-menu-item
            v-for="item in menu.items"
            :key="item.link"
            :index="item.link">
            {{ item.text }}
          </el-menu-item>
        </el-submenu>
        <el-menu-item
          v-else
          :index="menu.link">
          {{ menu.text }}
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pageName: '/',
      searchValue: ''
    }
  },

  computed: {
    menuList () {
      return this.$site.themeConfig.nav || []
    },

    pages () {
      return this.$site.pages || []
    },

    defaultPath () {
      return this.$route.path.replace(/\/(\w+-*\w+)\.html$/, '/')
    }
  },

  methods: {
    handleSelect (path) {
      if (/^http/.test(path)) {
        window.open(path)
      } else {
        this.$router.push(path)
      }
    },

    querySearchTips (qs, callback) {
      if (!qs) return callback([])
      const pages = this.pages.filter(page => page.title)
      const result = pages.filter(page => page.title.toUpperCase().indexOf(qs.toUpperCase()) > -1)
      setTimeout(() => {
        callback(result)
      }, 300)
    },

    handleSearchValue (data) {
      this.$router.push(data.path)
    }
  }
}
</script>

<style lang="scss">
.component-nav-menu {
  display: flex;
  height: 60px;
  padding: 0 50px;
  border-bottom: 1px solid #e0e6ed;

  > .el-menu {
    border: none;
  }

  > .placeholder {
    flex: 1;
  }

  .search-wrapper {
    width: 200px;
    padding: 10px 20px;
  }
}
</style>
