<template>
  <div>
    <a-row :gutter="6" :wrap="true">
      <template v-for="i in 5" :key="i">
        <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8">
          <order-progress-card
            card-title="订单编号：2025248555"
          ></order-progress-card
        ></a-col>
      </template>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import OrderProgressCard from './order-progress-card.vue'

export default defineComponent({
  name: 'ProgressPage',
  components: {
    OrderProgressCard,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="less" scoped></style>
