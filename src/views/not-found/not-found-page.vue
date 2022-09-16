<template>
  <div class="text">404</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NotFoundPage',
  setup() {
    return {}
  },
})
</script>

<style lang="less" scoped>
.text {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-weight: 700;
  text-align: center;
}
</style>
