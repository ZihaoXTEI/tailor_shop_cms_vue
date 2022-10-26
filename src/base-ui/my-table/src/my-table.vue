<template>
  <div class="my-table">
    <a-table
      :columns="tableColumns"
      :row-key="(record:any) => record.id"
      :data-source="tableDataSource"
      :pagination="pagination"
      :loading="isLoading"
      v-bind="tabelConfig"
      :scroll="{ x: 'max-content', scrollToFirstRowOnChange: true }"
      @change="handleTableChange"
    >
      <template #bodyCell="{ column, record }">
        <slot
          v-if="column.slotName"
          :name="column.slotName"
          :column="column"
          :record="record"
        ></slot>
      </template>
    </a-table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue'

// import type { ColumnsType } from 'ant-design-vue/es/table/interface'
import type { TablePaginationConfig, TableProps } from 'ant-design-vue'
import { IColumnsType } from './type'
// import { usePagination } from 'vue-request'

export default defineComponent({
  name: 'MyTable',
  props: {
    /**
     * 表格整体配置信息
     */
    tabelConfig: {
      type: Object,
      default: () => ({}),
    },
    /**
     * 表格每列配置信息
     */
    tableColumns: {
      type: Array as PropType<IColumnsType[]>,
      required: true,
    },
    /**
     * 表格数据
     */
    tableDataSource: {
      type: Array,
      required: true,
    },
    /**
     * 表格数据总条数
     */
    tableDataTotal: {
      type: Number,
      required: true,
    },
    /**
     * 分页数据
     */
    pageInfo: {
      type: Object,
      default: () => ({ currentPage: 0, pageSize: 10 }),
    },
  },
  emits: ['update:pageInfo'],
  setup(props, { emit }) {
    const isLoading = ref(false)
    // const {
    //   data: dataSource,
    //   run,
    //   loading,
    //   current,
    //   pageSize,
    // } = usePagination(queryData, {
    //   formatResult: (res) => res.data.results,
    //   pagination: {
    //     currentKey: 'page',
    //     pageSizeKey: 'results',
    //   },
    // })

    // 分页器
    const pagination = computed(() => {
      if (props.tabelConfig.hiddenPagination) {
        return false
      }

      return {
        total: props.tableDataTotal,
        current: props.pageInfo.currentPage,
        pageSize: props.pageInfo.pageSize,
      }
    })

    const handleTableChange: TableProps['onChange'] = (
      pagination: TablePaginationConfig,
      filters: any,
      sorter: any,
    ) => {
      const { current, pageSize } = pagination
      emit('update:pageInfo', { currentPage: current, pageSize })

      // run({
      //   results: pag.pageSize!,
      //   page: pag?.current,
      //   sortField: sorter.field,
      //   sortOrder: sorter.order,
      //   ...filters,
      // });
    }

    return {
      isLoading,
      // dataSource,
      pagination,
      // loading,
      handleTableChange,
    }
  },
})
</script>

<style lang="less" scoped></style>
