<template>
  <my-card>
    <my-calendar></my-calendar>
  </my-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import MyCalendar from './my-calendar.vue'

export default defineComponent({
  name: 'BacklogPage',
  components: {
    MyCalendar,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="less" scoped></style>
