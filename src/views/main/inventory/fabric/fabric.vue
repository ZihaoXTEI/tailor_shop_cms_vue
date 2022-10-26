<template>
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
      :other-form-value="otherFormValue"
      @cancel="handleCancel"
    >
      <template #fabricImageList="{ value }">
        <upload-image
          :upload-url="uploadImageUrl"
          :image-list="value"
          @upload-image="uploadImageHandler"
        >
        </upload-image>
      </template>
    </page-detail>
  </template>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, ref } from 'vue'

import PageSearch from '../../../../components/page-search'
import PageContent from '../../../../components/page-content'
import PageDetail from '../../../../components/page-detail'

import UploadImage from '../../../../components/upload-image'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { detailFormConfig } from './config/detail.config'

import { InventoryAPI, FileAPI } from '../../../../constants/requestApi'

import { usePage } from '../../../../hooks/usePage'
import { usePageDetail } from '../../../../hooks/usePageDetail'

import { getFabricTypeOption } from '../../../../service/main/view/option'
import { OptionList } from '../../../../service/main/view/type'

export default defineComponent({
  name: 'FabricPage',
  components: {
    PageSearch,
    PageContent,
    PageDetail,
    UploadImage,
  },
  setup() {
    const pageName = ref('fabric')
    const pageTitle = ref('布料')
    const requestUrl = InventoryAPI.Fabric
    const uploadImageUrl = FileAPI.UploadFabricImage

    // 设置 布料类型名称（FabricTypeId）选择器的 Options
    const fabricTypeOption = ref<OptionList>([])

    onBeforeMount(async () => {
      const { data } = await getFabricTypeOption()
      fabricTypeOption.value = data
    })

    const mergeDetailFormConfig = computed(() => {
      const fabricTypeIdItem = detailFormConfig.formItems.find((item) => {
        return item.field === 'fabricTypeId'
      })

      if (fabricTypeIdItem) {
        fabricTypeIdItem.options = fabricTypeOption.value
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
      otherFormValue,
      handleCreateData,
      handleDetailData,
      handleCancel,
    } = usePageDetail(requestUrl)

    // 上传图片返回的文件数据

    const uploadImageHandler = (fileInfo: any) => {
      otherFormValue.value = { fabricImageList: fileInfo.flat() }
    }

    return {
      pageName,
      pageTitle,
      requestUrl,
      uploadImageUrl,

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

      otherFormValue,
      uploadImageHandler,
    }
  },
})
</script>

<style lang="less" scoped></style>
