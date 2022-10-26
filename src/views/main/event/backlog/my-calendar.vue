<template>
  <div>
    <a-calendar v-model:value="value" @select="handleSelectDate">
      <!-- 日期显示内容 -->
      <template #dateCellRender="{ current }">
        <ul class="events">
          <li v-for="item in getListData(current)" :key="item.content">
            <a-badge :status="item.type" :text="item.content" />
          </li>
        </ul>
      </template>
      <!-- 月份显示内容 -->
      <template #monthCellRender="{ current }">
        <div v-if="getMonthData(current)" class="notes-month">
          <section>{{ getMonthData(current) }}</section>
          <span>Backlog number</span>
        </div>
      </template>
    </a-calendar>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import dayjs, { Dayjs } from 'dayjs'

export default defineComponent({
  name: 'MyCalendar',
  setup() {
    const value = ref<Dayjs>()

    const getListData = (value: Dayjs) => {
      let listData: any[] = []
      if (value.date() === 8) {
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
        ]
      } else if (value.date() === 15) {
        listData = [
          { type: 'warning', content: 'This is warning event' },
          {
            type: 'success',
            content: 'This is very long usual event。。....',
          },
          { type: 'error', content: 'This is error event 1.' },
          { type: 'error', content: 'This is error event 2.' },
          { type: 'error', content: 'This is error event 3.' },
          { type: 'error', content: 'This is error event 4.' },
        ]
      }

      return listData || []
    }

    const getMonthData = (value: Dayjs) => {
      if (value.month() === 8) {
        return 1394
      }
    }

    const handleSelectDate = (value: Dayjs) => {
      console.log(dayjs(value).format('DD/MM/YYYY'))
    }

    return {
      value,
      getListData,
      getMonthData,
      handleSelectDate,
    }
  },
})
</script>

<style lang="less" scoped>
.events {
  list-style: none;
  margin: 0;
  padding: 0;
}
.events .ant-badge-status {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  text-overflow: ellipsis;
  font-size: 12px;
}
.notes-month {
  text-align: center;
  font-size: 28px;
}
.notes-month section {
  font-size: 28px;
}
</style>
