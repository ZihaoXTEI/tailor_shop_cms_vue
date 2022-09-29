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
    ></page-content>
    <page-modal
      ref="pageModalRef"
      :page-name="pageName"
      :page-title="pageTitle"
      :request-url="createUrl"
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

import { UserAPI } from '../../../../constants/requestApi'
import { ClientType } from '../../../../types/entityType'

import { usePageModal } from '../../../../hooks/usePageModal'
import { usePage } from '../../../../hooks/usePage'

export default defineComponent({
  name: 'StaffPage',
  components: {
    PageSearch,
    PageContent,
    PageModal,
  },
  setup() {
    const pageName = ref('staff')
    const pageTitle = ref('职员')
    const requestUrl = UserAPI.Staff
    const createUrl = `${UserAPI.User}${ClientType.CMS}`

    const createCallback = () => {
      const nickItem = modalFormConfig.formItems.find(
        (item) => item.field === 'nickname',
      )

      if (nickItem) {
        nickItem.otherOptions = {
          disabled: false,
        }
      }
    }

    const editCallback = () => {
      const nickItem = modalFormConfig.formItems.find(
        (item) => item.field === 'nickname',
      )

      if (nickItem) {
        nickItem.otherOptions = {
          disabled: true,
        }
      }
    }

    const [
      pageContentRef,
      pageSearchRef,
      handleResetData,
      handleQueryData,
      handleRefreshData,
    ] = usePage()

    const [pageModalRef, modalFormValue, handleCreateData, handleEditData] =
      usePageModal(requestUrl, createCallback, editCallback)

    return {
      pageName,
      pageTitle,
      requestUrl,
      createUrl,

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

<style lang="less" scoped></style>
