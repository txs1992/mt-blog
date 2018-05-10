<template>
  <div class="component-page">
    <home></home>
  </div>
</template>

<script>
import Home from './Home.vue'

export default {
  watch: {
    '$route': {
      immediate: true,
      handler (v) {
        console.log(this.$page.frontmatter)
      }
    }
  },

  components: {
    Home
  }
}
</script>

<style lang="scss">
.component-page {
  width: 100%;
  height: 100%;
}
</style>
