<template>
  <div class="component-item-list">
    <el-card
      v-for="item in front.items"
      shadow="always"
      @click.native="handlerClick(item.link)">
      <div class="title">{{ item.title }}</div>
      <div class="description">
        {{ item.description }}
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  computed: {
    front () {
      return this.$page.frontmatter
    }
  },

  methods: {
    handlerClick (link) {
      this.$router.push(this.$page.path + link + '.html')
    }
  }
}
</script>

<style lang="scss">
.component-item-list {
  .el-card {
    margin: 10px;
    cursor: pointer;

    &:hover {
      .title {
        color: #409eff;
      }
    }

    .title {
      font-size: 20px;
      padding-bottom: 4px;
    }
  }
}
</style>
