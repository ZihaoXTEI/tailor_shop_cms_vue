<template>
  <div class="order-progress-card">
    <my-card>
      <a-timeline>
        <a-timeline-item color="green">
          <p>裁剪</p>
          <p class="date">完成日期：2022年10月01日</p>
        </a-timeline-item>
        <a-timeline-item color="green">
          Create a services site 2015-09-01
        </a-timeline-item>
        <a-timeline-item color="red">
          <p>Solve initial network problems 1</p>
          <p>Solve initial network problems 2</p>
        </a-timeline-item>
        <a-timeline-item>
          <p>Technical testing 1</p>
          <p>Technical testing 2</p>
        </a-timeline-item>
        <a-timeline-item color="gray">
          <p>Technical testing 1</p>
        </a-timeline-item>
      </a-timeline>

      <a-divider orientation="left">更新</a-divider>
      <a-row :gutter="[6, 6]" wrap type="flex" justify="space-between">
        <a-col :flex="1">
          <a-tag color="green">成衣</a-tag>
        </a-col>

        <a-col :flex="3">
          <a-select
            v-model:value="staffId"
            label-in-value
            style="width: 100%; min-width: 90px"
            size="small"
            placeholder="选择员工"
            :filter-option="false"
          >
          </a-select>
        </a-col>

        <a-col :flex="3">
          <a-select
            v-model:value="orderStatus"
            style="width: 100%; min-width: 90px"
            size="small"
            placeholder="选择订单完成状态"
            :options="options"
            @change="handleChange"
          ></a-select>
        </a-col>

        <a-col flex="40px">
          <a-popconfirm
            title="确定保存此次更改吗？"
            ok-text="保存"
            cancel-text="取消"
          >
            <a-button shape="round" size="small">
              <template #icon>
                <save-outlined />
              </template>
            </a-button>
          </a-popconfirm>
        </a-col>
      </a-row>
    </my-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import type { SelectProps } from 'ant-design-vue'
import { SaveOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  name: 'OrderProgressCard',
  components: {
    SaveOutlined,
  },
  setup() {
    const options = ref<SelectProps['options']>([
      {
        value: 'tailored',
        label: '已裁剪',
      },
      {
        value: 'sewed',
        label: '已缝纫',
      },
      {
        value: 'ironed',
        label: '已整烫',
      },
      {
        value: 'finished',
        label: '已成衣',
      },
    ])

    const staffId = ref<string>('')
    const orderStatus = ref<string>('')

    const handleChange = (value: string) => {
      console.log(value)
    }
    return {
      staffId,
      orderStatus,
      options,
      handleChange,
    }
  },
})
</script>

<style lang="less" scoped>
.date {
  color: #757575;
}
</style>
