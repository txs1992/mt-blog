<template>
  <div class="component-sidebar">
    <el-card :body-style="{ padding: '10px' }">
      <img src="../images/hero.jpeg" class="image">
      <div style="padding: 10px;">
        <!-- <img>好吃</img> -->
        <span>汉堡</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  computed: {
    sidebarList ({ $site: { pages, themeConfig }, $route: { path } }) {
      // console.log(pages.filter(page => page.path.indexOf(path) > -1))
      return themeConfig.sidebar[path]
    }
  }
}
</script>

<style lang="scss">
.component-sidebar {
  padding: 20px;

  .image {
    width: 260px;
    height: 260px;
  }
}
</style>
