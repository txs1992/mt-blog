<template>
  <div class="component-home">
    Home
    {{ title }}
  </div>
</template>

<script>
export default {
  computed: {
    front ({ $page: { frontmatter } }) {
      return frontmatter
    },

    title ({ front }) {
      return front.title
    }
  }
}
</script>

<style lang="scss">
.component-home {
  width: 100%;
  height: 100%;
  // background-color: #ccc;
  background-size: 50%;
  background-image: url(../images/bg.jpeg);
}
</style>
