<template>
  <div class="component-item-list">
    <el-card
      v-for="item in currentItems"
      shadow="hover"
      @click.native="handlerClick(item.link)">
      <div class="title">{{ item.title }}</div>
      <div class="card-content">
        <img v-if="item.img" :src="item.img" class="image">
        <div class="description">
          {{ item.description }}
        </div>
      </div>
      <div class="date">
        <i class="el-icon-date"></i>
        {{ formarter(item.date) }}
      </div>
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

    total () {
      return this.items.length || 0
    },

    currentItems () {
      const { items, currNum, pageSize } = this
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
      font-weight: bold;
      padding-bottom: 8px;
    }

    .date {
      text-align: right;
    }

    .card-content {
      display: flex;

      .image {
        width: 35%;
        height: 140px;
        border-radius: 6px;
        margin: 10px 20px 0px 10px;
      }

      .description {
        flex: 1;
        margin-top: 10px;
      }
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
