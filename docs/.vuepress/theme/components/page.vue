<template>
  <div class="component-page">
    <home v-if="$route.path === '/'"></home>
    <div
      v-else
      class="page-content">
      <item-list v-if="isBlog"></item-list>
      <Content/>
    </div>
  </div>
</template>

<script>
import Home from './Home.vue'
import ItemList from './item-list.vue'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/prism.js'

export default {
  computed: {
    isBlog () {
      return this.$route.path === '/blog/'
    },
  },

  components: {
    Home,
    ItemList
  }
}
</script>

<style lang="scss">
.component-page {
  width: 100%;
  height: 100%;
  overflow: auto;
  font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;

  .page-content {
    width: 800px;
    margin: 15px auto;

    .custom {
      img {
        max-width: 800px;
        max-height: 500px;
      }
    }
  }
}
</style>
