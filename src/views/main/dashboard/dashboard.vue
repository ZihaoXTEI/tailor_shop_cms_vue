<template>
  <div class="dashboard">
    <!-- 顶部数据统计区域 -->
    <a-row :gutter="10">
      <template v-for="item in topPanelData" :key="item.title">
        <a-col :md="12" :lg="6" :xl="6">
          <statistical-panel :panel-data="item"></statistical-panel>
        </a-col>
      </template>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'DashboardPage',
  setup() {
    const topPanelData = reactive([
      {
        amount: 'sale',
        title: '商品总销量',
        tips: '所有商品的总销量',
        subtitle: '商品总销量',
        number1: 509989,
        number2: 509989,
      },
      {
        amount: 'sale',
        title: '商品总销量',
        tips: '所有商品的总销量',
        subtitle: '商品总销量',
        number1: 509989,
        number2: 509989,
      },
      {
        amount: 'saleroom',
        title: '商品总销售额',
        tips: '所有商品的总销售额',
        subtitle: '商品总销售额',
        number1: 43118530,
        number2: 43118530,
      },
      {
        amount: 'saleroom',
        title: '商品总销售额',
        tips: '所有商品的总销售额',
        subtitle: '商品总销售额',
        number1: 43118530,
        number2: 43118530,
      },
    ])
    return {
      topPanelData,
    }
  },
})
</script>

<style lang="less" scoped></style>
