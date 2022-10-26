<template>
  <a-space>
    <a-input-number v-model:value="rangeValue.min" v-bind="otherOptions" />
    -
    <a-input-number v-model:value="rangeValue.max" v-bind="otherOptions" />
  </a-space>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, watch } from 'vue'

export default defineComponent({
  name: 'MyInputRange',
  props: {
    value: {
      type: Array as PropType<(number | string)[]>,
      required: true,
    },
    otherOptions: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ['update:value'],
  setup(props, { emit }) {
    const rangeValue = reactive({ min: 0, max: 0 })

    watch(rangeValue, (newValue) => {
      const { min, max } = newValue
      if (min > max) {
        rangeValue.min = max
        rangeValue.max = min
        emit('update:value', [max, min])
      } else {
        emit('update:value', [min, max])
      }
    })

    return { rangeValue }
  },
})
</script>

<style lang="less" scoped></style>
