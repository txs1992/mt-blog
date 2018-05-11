<template>
  <div class="page-main">
    <nav-menu></nav-menu>
    <div class="page-container">
      <page></page>
    </div>
  </div>
</template>

<script>
import Page from './components/page.vue'
import NavMenu from './components/nav-menu.vue'

export default {
  components: {
    Page,
    NavMenu
  }
}
</script>

<style lang="scss">
@import './styles/base.scss';
@import './styles/theme.scss';

.page-main {
  display: flex;
  height: 100%;
  flex-direction: column;

  .page-container {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: row;
    background: #f6f6f6;

    > aside {
      flex: 1;
    }

    > section {
      flex: 3;
      background: #ccc;
    }
  }
}
</style>
