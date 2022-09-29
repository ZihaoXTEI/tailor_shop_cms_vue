<template>
  <div class="page-content">
    <my-card :card-title="pageTitle + '数据列表'">
      <!-- 操作 区域 -->
      <div class="operation-container">
        <a-tooltip placement="top" class="item">
          <template #title>
            <span>刷新数据</span>
          </template>
          <a-button
            type="text"
            shape="circle"
            class="refresh-btn"
            @click="handleRefreshBtnClick"
          >
            <template #icon><redo-outlined /></template>
          </a-button>
        </a-tooltip>

        <a-button type="primary" class="item" @click="handleCreateBtnClick">
          <template #icon><plus-outlined /></template>
          添加{{ pageTitle }}
        </a-button>
      </div>

      <!-- Table 区域 -->
      <my-table
        v-bind="contentTableConfig"
        v-model:pageInfo="pageInfo"
        :table-data-source="dataSource"
        :table-data-total="dataTotal"
      >
        <!-- 数据状态 -->
        <template #status="{ record }">
          <a-tag :color="record.status === 1 ? 'blue' : 'red'">
            {{ record.status === 1 ? '正常' : '无效' }}
          </a-tag>
        </template>

        <!-- 季节 -->
        <template #season="{ column, record }">
          <template v-if="record[column.dataIndex] === Season.SPRING">
            <a-tag color="#87d068"> 春天 </a-tag>
          </template>
          <template v-else-if="record[column.dataIndex] === Season.SUMMER">
            <a-tag color="#4CAF50"> 夏天 </a-tag>
          </template>
          <template v-else-if="record[column.dataIndex] === Season.AUTUMN">
            <a-tag color="#FFC107"> 秋天 </a-tag>
          </template>
          <template v-else-if="record[column.dataIndex] === Season.WINTER">
            <a-tag color="#BDBDBD"> 冬天 </a-tag>
          </template>
        </template>

        <!-- 性别 -->
        <template #gender="{ column, record }">
          <template v-if="record[column.dataIndex] === Gender.MALE">
            <span>
              <svg class="ali-icon" aria-hidden="true" style="color: #2196f3">
                <use xlink:href="#icon-nan"></use>
              </svg>
              男
            </span>
          </template>
          <template v-else-if="record[column.dataIndex] === Gender.FEMALE">
            <span>
              <svg class="ali-icon" aria-hidden="true" style="color: #ffc0cb">
                <use xlink:href="#icon-nv"></use>
              </svg>
              女
            </span>
          </template>
          <template v-else-if="record[column.dataIndex] === Gender.BOTH">
            <span>
              <svg class="ali-icon" aria-hidden="true">
                <use xlink:href="#icon-hu"></use>
              </svg>
              中性
            </span>
          </template>
        </template>

        <!-- 数据创建时间 -->
        <template #createAt="{ record }">
          {{ formatUTCString(record.createAt) }}
        </template>

        <!-- 数据最后修改时间 -->
        <template #updateAt="{ record }">
          {{ formatUTCString(record.updateAt) }}
        </template>

        <!-- <template #bodyCell="{ column, record }">
          <slot
            v-if="column.key"
            :name="column.key"
            :column="column"
            :record="record"
          ></slot>
        </template> -->

        <!-- 操作列 -->
        <template #action="{ column, record }">
          <span class="table-action">
            <a-button
              type="link"
              size="small"
              class="item"
              @click="handleEditBtnClick(record.id ?? record.userId)"
            >
              <template #icon><edit-outlined /></template>
              编辑
            </a-button>

            <a-button type="link" size="small" danger class="item">
              <template #icon><delete-outlined /></template>
              删除
            </a-button>
          </span>
        </template>

        <!-- 其它自定义列 -->
        <template
          v-for="item in otherSlotName"
          :key="item.slotName"
          #[item.slotName]="{ column, record }"
        >
          <template v-if="item.slotName">
            <slot
              :name="item.slotName"
              :column="column"
              :record="record"
            ></slot>
          </template>
        </template>
      </my-table>
    </my-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, PropType, ref, watch } from 'vue'

import {
  RedoOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons-vue'

import type { ITable } from '../../../base-ui/my-table/src/type'
import { getDataList } from '../../../service/main/main'

import { formatUTCString } from '../../../utils/dateFormat'
import { Season, Gender } from '../../../types/entityType'

export default defineComponent({
  name: 'PageContent',
  components: {
    RedoOutlined,
    PlusOutlined,
    EditOutlined,
    DeleteOutlined,
  },
  props: {
    pageName: {
      type: String,
      required: true,
    },
    pageTitle: {
      type: String,
      default: '数据列表',
    },
    requestUrl: {
      type: String,
      required: true,
    },
    contentTableConfig: {
      type: Object as PropType<ITable>,
      required: true,
    },
  },
  emits: ['createData', 'editData', 'refreshData'],
  setup(props, { emit }) {
    // 分页属性
    const pageInfo = ref({ currentPage: 1, pageSize: 5 })
    // 监听分页属性改变，重新获取对应表格数据
    watch(pageInfo, async () => {
      await getPageData()
    })

    // 获取表格数据
    const getPageData = async (queryInfo: any = {}) => {
      const result = await getDataList(`${props.requestUrl}list/`, {
        skip: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
        take: pageInfo.value.pageSize,
        ...queryInfo,
      })

      console.log(result.data)

      const { list, total } = result.data
      dataSource.value = list
      dataTotal.value = total
    }

    // 列表数据
    const dataSource = ref([])
    // 数据总条数
    const dataTotal = ref(0)
    onBeforeMount(async () => {
      await getPageData()
    })

    // 添加数据按钮点击事件
    const handleCreateBtnClick = () => {
      emit('createData')
    }

    // 编辑数据按钮点击事件
    const handleEditBtnClick = (id: string | number) => {
      console.log(id)
      emit('editData', id)
    }

    // 刷新数据按钮点击事件
    const handleRefreshBtnClick = async () => {
      // const { list, total } = await getPageData({ skip: 0, take: 10 })
      await getPageData({ skip: 0, take: 10 })

      emit('refreshData')
    }

    const defaultSlotName = [
      'status',
      'createAt',
      'updateAt',
      'action',
      'season',
      'gender',
    ]
    // 筛选出其它动态插槽
    const otherSlotName: any = props.contentTableConfig?.tableColumns.filter(
      (item) => {
        if (item.slotName) {
          return !defaultSlotName.includes(item.slotName as string)
        } else {
          return false
        }
      },
    )

    return {
      dataSource,
      dataTotal,
      pageInfo,

      otherSlotName,

      Season,
      Gender,

      formatUTCString,

      getPageData,

      handleCreateBtnClick,
      handleEditBtnClick,
      handleRefreshBtnClick,
    }
  },
})
</script>

<style lang="less" scoped>
.operation-container {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 6px;

  .item {
    margin-left: 6px;
  }

  .refresh-btn:hover {
    transform: rotate(90deg);
  }
}

.table-action {
  display: flex;
  justify-content: space-between;
}
</style>
