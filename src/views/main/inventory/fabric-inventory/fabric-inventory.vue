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
      <template #fabric="{ column, record }">
        <a-popover placement="top">
          <template #content>
            <p>布料幅宽：{{ record[column.dataIndex].fabricWidth }} 厘米</p>
            <p>布料价格：{{ record[column.dataIndex].fabricPrice }}</p>
            <p>布料适合性别：{{ record[column.dataIndex].fabricGender }}</p>
            <p>布料适合季节：{{ record[column.dataIndex].fabricSeason }}</p>
          </template>
          <template #title>
            <span>布料编号：{{ record[column.dataIndex].id }}</span>
          </template>
          {{ record[column.dataIndex].fabricName }}
        </a-popover>
      </template>
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

import { InventoryAPI } from '../../../../constants/requestApi'

import { usePageModal } from '../../../../hooks/usePageModal'
import { usePage } from '../../../../hooks/usePage'

import { getFabricOption } from '../../../../service/main/view/option'
import { OptionList } from '../../../../service/main/view/type'

export default defineComponent({
  name: 'FabricInventoryPage',
  components: {
    PageSearch,
    PageContent,
    PageModal,
  },
  setup() {
    const pageName = ref('clothtypeConsumption')
    const pageTitle = ref('布料库存')
    const requestUrl = InventoryAPI.FabricInventory

    // 设置 布料名称（FabricName）选择器的 Options
    const fabricOption = ref<OptionList>([])

    onBeforeMount(async () => {
      const { data } = await getFabricOption()
      fabricOption.value = data
    })

    const mergeModalFormConfig = computed(() => {
      const fabricIdItem = modalFormConfig.formItems.find((item) => {
        return item.field === 'fabricId'
      })

      if (fabricIdItem) {
        fabricIdItem.options = fabricOption.value
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
