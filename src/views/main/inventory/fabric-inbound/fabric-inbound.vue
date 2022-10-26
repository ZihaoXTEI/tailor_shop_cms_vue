<template>
  <div>
    <template v-if="!isShowDetailPanel">
      <page-search
        ref="pageSearchRef"
        :search-form-config="mergeSearchFormConfig"
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

import { InventoryAPI } from '../../../../constants/requestApi'
import {
  getFabricOption,
  getStaffOption,
  getSupplierOption,
} from '../../../../service/main/view/option'
import { OptionList } from '../../../../service/main/view/type'
import { IForm } from '../../../../base-ui/my-form'

export default defineComponent({
  name: 'FabricInboundPage',
  components: {
    PageSearch,
    PageContent,
    PageDetail,
  },
  setup() {
    const pageName = ref('fabricInbound')
    const pageTitle = ref('布料入库')
    const requestUrl = InventoryAPI.FabricInbound

    const fabricOption = ref<OptionList>([])
    const supplierOption = ref<OptionList>([])
    const staffOption = ref<OptionList>([])

    onBeforeMount(async () => {
      // 修复 Select 没有 Option 的 bug
      isShowDetailPanel.value = true

      const { data: fabric } = await getFabricOption()
      const { data: supplier } = await getSupplierOption()
      const { data: staff } = await getStaffOption()

      fabricOption.value = fabric
      supplierOption.value = supplier
      staffOption.value = staff

      isShowDetailPanel.value = false
      // 修复 Select 没有 Option 的 bug
      // nextTick(() => {

      // })
    })

    const mergeSearchFormConfig = computed(() => {
      setOptions(searchFormConfig)

      return searchFormConfig
    })

    const mergeDetailFormConfig = computed(() => {
      setOptions(detailFormConfig)

      return detailFormConfig
    })

    const setOptions = (config: IForm) => {
      for (let i = 0; i < config.formItems.length; i++) {
        if (config.formItems[i].field === 'fabricId') {
          config.formItems[i].options = fabricOption.value
        }

        if (config.formItems[i].field === 'supplierId') {
          config.formItems[i].options = supplierOption.value
        }

        if (config.formItems[i].field === 'inboundReceiver') {
          config.formItems[i].options = staffOption.value
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

      mergeSearchFormConfig,
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
