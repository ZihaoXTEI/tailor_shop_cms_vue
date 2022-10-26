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
    </page-content>
    <page-modal
      ref="pageModalRef"
      :page-name="pageName"
      :page-title="pageTitle"
      :request-url="requestUrl"
      :modal-form-config="mergeModalFormConfig"
      :modal-form-value="modalFormValue"
      @refresh-data="handleRefreshData"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, ref } from 'vue'

import PageSearch from '../../../../components/page-search'
import PageContent from '../../../../components/page-content'
import PageModal from '../../../../components/page-modal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalFormConfig } from './config/modal.config'

import { UserAPI } from '../../../../constants/requestApi'

import { usePageModal } from '../../../../hooks/usePageModal'
import { usePage } from '../../../../hooks/usePage'
import { OptionList } from '../../../../service/main/view/type'
import {
  getCustomerOption,
  getFabricOption,
} from '../../../../service/main/view/option'

export default defineComponent({
  name: 'CustomerfavoritePage',
  components: {
    PageSearch,
    PageContent,
    PageModal,
  },
  setup(props) {
    const pageName = ref('customer-favorite')
    const pageTitle = ref('顾客布料收藏')
    const requestUrl = UserAPI.CustomerFavorite

    const fabricOption = ref<OptionList>([])
    const customerOption = ref<OptionList>([])

    onBeforeMount(async () => {
      const { data: fabric } = await getFabricOption()
      const { data: customer } = await getCustomerOption()

      fabricOption.value = fabric
      customerOption.value = customer
    })

    const mergeModalFormConfig = computed(() => {
      for (let i = 0; i < modalFormConfig.formItems.length; i++) {
        if (modalFormConfig.formItems[i].field === 'fabricId') {
          modalFormConfig.formItems[i].options = fabricOption.value
        }

        if (modalFormConfig.formItems[i].field === 'customerId') {
          modalFormConfig.formItems[i].options = customerOption.value
        }
      }

      return modalFormConfig
    })

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
      mergeModalFormConfig,

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
