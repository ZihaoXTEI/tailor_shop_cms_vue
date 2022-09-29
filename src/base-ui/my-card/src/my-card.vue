<template>
  <a-card :title="cardTitle" class="my-card">
    <div class="item">
      <slot></slot>
    </div>
  </a-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MyCard',
  props: {
    cardTitle: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {}
  },
})
</script>

<style lang="less" scoped>
.my-card {
  margin-bottom: 16px;
}
</style>
