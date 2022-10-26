<template>
  <div>
    <template v-if="!isShowDetailPanel">
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
        @detail-data="handleDetailData"
        @refresh-data="handleRefreshData"
      >
      </page-content>
    </template>
    <template v-else>
      <page-detail
        :page-name="pageName"
        :page-title="pageTitle"
        :request-url="requestUrl"
        :detail-form-config="mergeDetailFormConfig"
        :detail-form-value="detailFormValue"
        @cancel="handleCancel"
      >
      </page-detail>
    </template>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, ref } from 'vue'

import PageSearch from '../../../../components/page-search'
import PageContent from '../../../../components/page-content'
import PageDetail from '../../../../components/page-detail'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { detailFormConfig } from './config/detail.config'

import { usePage } from '../../../../hooks/usePage'
import { usePageDetail } from '../../../../hooks/usePageDetail'

import { UserAPI } from '../../../../constants/requestApi'
import { getCustomerOption } from '../../../../service/main/view/option'
import { OptionList } from '../../../../service/main/view/type'

export default defineComponent({
  name: 'AnthromeasurePage',
  components: {
    PageSearch,
    PageContent,
    PageDetail,
  },
  setup() {
    const pageName = ref('anthroMeasure')
    const pageTitle = ref('顾客量体')
    const requestUrl = UserAPI.AnthroMeasure

    const customerOption = ref<OptionList>([])

    onBeforeMount(async () => {
      const { data: customer } = await getCustomerOption()

      customerOption.value = customer
    })

    const mergeDetailFormConfig = computed(() => {
      const customerIdItem = detailFormConfig.formItems.find(
        (item) => item.field === 'customerId',
      )

      if (customerIdItem) {
        customerIdItem.options = customerOption.value
      }

      return detailFormConfig
    })

    const [
      pageContentRef,
      pageSearchRef,
      handleResetData,
      handleQueryData,
      handleRefreshData,
    ] = usePage()

    const {
      isShowDetailPanel,
      detailFormValue,
      handleCreateData,
      handleDetailData,
      handleCancel,
    } = usePageDetail(requestUrl)

    return {
      pageName,
      pageTitle,
      requestUrl,

      pageContentRef,
      pageSearchRef,

      searchFormConfig,
      contentTableConfig,
      mergeDetailFormConfig,

      isShowDetailPanel,
      detailFormValue,

      handleResetData,
      handleQueryData,
      handleRefreshData,

      handleCreateData,
      handleDetailData,
      handleCancel,
    }
  },
})
</script>

<style lang="less" scoped></style>
