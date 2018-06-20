<template>
  <div class="page-my" id="resume">
    <div class="relate-me">
      <div class="avatar"></div>
      <el-card class="avatar-wrapper">
        <img
          class="avatar"
          src="../.vuepress/theme/images/hero.jpeg">
        </img>
      </el-card>
      <div class="block">
        <div class="title">基本信息</div>
        <ul class="items">
          <li>24 岁</li>
          <li>汉族</li>
          <li>上海普陀</li>
          <li>13888888888</li>
          <li>xx@ele.me</li>
        </ul>
      </div>
      <div class="block">
        <div class="title">技能特长</div>
        <ul class="items">
          <li>24 岁</li>
          <li>汉族</li>
          <li>上海普陀</li>
          <li>13888888888</li>
          <li>xx@ele.me</li>
        </ul>
      </div>
      <div class="block">
        <div class="title">兴趣爱好</div>
        <ul class="items">
          <li>24 岁</li>
          <li>汉族</li>
          <li>上海普陀</li>
          <li>13888888888</li>
          <li>xx@ele.me</li>
        </ul>
      </div>
    </div>
    <div class="description">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello VuePress!'
    }
  }
}
</script>

<style lang="scss">
.page-my {
  display: flex;

  .relate-me {
    flex: 1;
    background: #052a46;

    .avatar-wrapper {
      width: 162px;
      height: 192px;
      margin: 50px auto;

      .el-card__body {
        padding: 6px;
      }

      .avatar {
        width: 150px;
        height: 180px;
      }
    }

    .block {
      padding: 0 20px;
      color: #fff;

      .title {
        font-size: 18px;
        font-weight: bold;
        background: #1870bd;
        padding: 8px;
      }

      .items {
        padding-left: 28px;
      }
    }

    .block:last-child {
      margin-bottom: 50px;
    }
  }

  .description {
    flex: 2;
    background: #fbfbfb;
  }
}
</style>
