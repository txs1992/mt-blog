<template>
  <div class="component-item-list">
    <el-card
      v-for="item in currentItems"
      shadow="always"
      @click.native="handlerClick(item.link)">
      <div class="title">{{ item.title }}</div>
      <div class="description">
        {{ item.description }}
      </div>
      <div class="date">{{ formarter(item.date) }}</div>
    </el-card>
    <el-pagination
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      :page-size="pageSize"
      :page-sizes="pageSizes"
      :current-page="currNum"
      @size-change="pageSize = arguments[0]"
      @current-change="currNum = arguments[0]">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currNum: 1,
      pageSize: 5,
      pageSizes: [5, 10, 20, 50]
    }
  },

  computed: {
    items () {
      return this.$page.frontmatter.items
    },

    total ({ items }) {
      return items.length || 0
    },

    currentItems ({ items, currNum, pageSize }) {
      const start = (currNum - 1) * pageSize
      return items.slice(start, start + pageSize)
    }
  },

  methods: {
    formarter (data) {
      return data.substring(0, 10)
    },

    handlerClick (link) {
      this.$router.push(this.$page.path + link + '.html')
    },

    handleSizeChange (size) {
      console.log(size)
    },

    handleCurrentChange () {

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

    .date {
      text-align: right;
    }
  }

  .el-pagination {
    margin: 30px 0;
    text-align: right;

    .btn-next, .btn-prev {
      background-color: #f6f6f6;
    }

    .el-pager {
      .number, .el-icon {
        background-color: #f6f6f6;
      }
    }
  }
}
</style>
