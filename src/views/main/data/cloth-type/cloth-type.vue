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
      <template #body="{ column, record }">
        <template v-if="record[column.dataIndex] === true">
          <check-outlined />
        </template>
        <template v-else>
          <close-outlined :style="{ color: '#FF5722' }" />
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

import { CheckOutlined, CloseOutlined } from '@ant-design/icons-vue'

import PageSearch from '../../../../components/page-search'
import PageContent from '../../../../components/page-content'
import PageModal from '../../../../components/page-modal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalFormConfig } from './config/modal.config'

import { DataAPI } from '../../../../constants/requestApi'

import { usePageModal } from '../../../../hooks/usePageModal'
import { usePage } from '../../../../hooks/usePage'

export default defineComponent({
  name: 'FabricTypePage',
  components: {
    PageSearch,
    PageContent,
    PageModal,
    CheckOutlined,
    CloseOutlined,
  },
  setup() {
    const pageName = ref('clothtype')
    const pageTitle = ref('衣服类型')
    const requestUrl = DataAPI.ClothType

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
    }
  },
})
</script>

<style lang="less" scoped>
.icon-color {
  color: #212121;
}
</style>
