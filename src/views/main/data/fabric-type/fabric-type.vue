<template>
  <div>
    <page-search
      ref="pageSearchRef"
      :search-form-config="searchFormConfig"
      @reset-data="handleResetData"
      @query-data="handleQueryData"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :page-name="pageName"
      :page-title="pageTitle"
      :request-url="requestUrl"
      :content-table-config="contentTableConfig"
      @create-data="handleCreateData"
      @edit-data="handleEditData"
      @refresh-data="handleRefreshData"
    >
      <template #fabricCategory="{ column, record }">
        <template
          v-if="record[column.dataIndex] === FabricCategory.SHELL_FABRIC"
        >
          <a-tag color="#F44336"> {{ FabricCategory.SHELL_FABRIC }} </a-tag>
        </template>
        <template
          v-else-if="record[column.dataIndex] === FabricCategory.LINING"
        >
          <a-tag color="#7C4DFF"> {{ FabricCategory.LINING }} </a-tag>
        </template>
        <template
          v-else-if="record[column.dataIndex] === FabricCategory.PADDING"
        >
          <a-tag color="#FF9800"> {{ FabricCategory.PADDING }} </a-tag>
        </template>
        <template
          v-else-if="record[column.dataIndex] === FabricCategory.INTERMASS"
        >
          <a-tag color="#607D8B"> {{ FabricCategory.INTERMASS }} </a-tag>
        </template>
      </template>
    </page-content>
    <page-modal
      ref="pageModalRef"
      :page-name="pageName"
      :page-title="pageTitle"
      :request-url="requestUrl"
      :modal-form-config="modalFormConfig"
      :modal-form-value="modalFormValue"
      @refresh-data="handleRefreshData"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import PageSearch from '../../../../components/page-search'
import PageContent from '../../../../components/page-content'
import PageModal from '../../../../components/page-modal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalFormConfig } from './config/modal.config'

import { DataAPI } from '../../../../constants/requestApi'

import { usePageModal } from '../../../../hooks/usePageModal'
import { usePage } from '../../../../hooks/usePage'
import { FabricCategory } from '../../../../types/entityType'

export default defineComponent({
  name: 'FabricTypePage',
  components: {
    PageSearch,
    PageContent,
    PageModal,
  },
  setup() {
    const pageName = ref('fabrictype')
    const pageTitle = ref('布料类型')
    const requestUrl = DataAPI.FabricType

    const [
      pageContentRef,
      pageSearchRef,
      handleResetData,
      handleQueryData,
      handleRefreshData,
    ] = usePage()

    const [pageModalRef, modalFormValue, handleCreateData, handleEditData] =
      usePageModal(requestUrl)

    return {
      pageName,
      pageTitle,
      requestUrl,

      pageContentRef,
      pageModalRef,
      pageSearchRef,

      searchFormConfig,
      contentTableConfig,
      modalFormConfig,

      modalFormValue,

      handleResetData,
      handleQueryData,
      handleRefreshData,

      handleCreateData,
      handleEditData,

      FabricCategory,
    }
  },
})
</script>

<style lang="less" scoped></style>
