<template>
  <div class="component-page">
    <home v-if="$route.path === '/'"></home>
    <div
      v-else
      class="page-content">
      <item-list>
      </item-list>
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

  .page-content {
    min-width: 800px;
    width: 60%;
    height: 100%;
    margin: auto;
    overflow: auto;
  }
}
</style>
