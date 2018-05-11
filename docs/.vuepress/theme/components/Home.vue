<template>
  <div class="component-home">
    <div class="center">
      <img class="hero" src="../images/hero.jpeg"></img>
      <div class="title">{{ front.title }}</div>
      <div class="description">
        {{ front.description }}
      </div>
      <div class="button-wrapper">
        <el-button
          v-for="item in nav"
          round
          :key="item.text"
          @click="handlerClick(item)">
          {{ item.text }}
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    front () {
      return this.$page.frontmatter
    },

    nav () {
      return this.front.nav || []
    }
  },

  methods: {
    handlerClick ({ link = '' }) {
      if (/^http/.test(link)) {
        window.open(link)
      } else {
        this.$router.push(link)
      }
    }
  }
}
</script>

<style lang="scss">
.component-home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #909399;

  .center {
    height: 50%;
    text-align: center;

    .hero {
      width: 120px;
      height: 120px;
      border-radius: 60px;
      border: 4px solid #f2f6fc;
    }

    .title {
      padding: 6px 0;
      font-size: 32px;
      color: #606266;
    }

    .description {
      margin-bottom: 10px;
      padding: 4px 0;
      border-bottom: 1px solid #ccc;
    }

    .button-wrapper {
      display: flex;
      flex-direction: row;
    }
  }
}
</style>
