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
    isBlog ({ $route }) {
      return $route.path === '/blog/'
    },
  },

  watch: {
    '$route': {
      immediate: true,
      handler (v) {
      }
    }
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

  .page-content {
    width: 60%;
    min-width: 800px;
    margin: 15px auto;
  }
}
</style>
