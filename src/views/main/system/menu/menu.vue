<template>
  <template v-if="!isShowDetailPanel">
    <page-content
      ref="pageContentRef"
      :page-name="pageName"
      :page-title="pageTitle"
      :request-url="requestUrl"
      :content-table-config="contentTableConfig"
      @create-data="handleCreateData"
      @detail-data="handleDetailData"
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
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, ref } from 'vue'

import PageContent from '../../../../components/page-content'
import PageDetail from '../../../../components/page-detail'

import { contentTableConfig } from './config/content.config'
import { detailFormConfig } from './config/detail.config'

import { usePageDetail } from '../../../../hooks/usePageDetail'
import { SystemAPI } from '../../../../constants/requestApi'
import { OptionList } from '../../../../service/main/view/type'
import { getMenuOption } from '../../../../service/main/view/option'

export default defineComponent({
  name: 'MenuPage',
  components: {
    PageContent,
    PageDetail,
  },
  setup() {
    const pageName = ref('menu')
    const pageTitle = ref('菜单')
    const requestUrl = SystemAPI.Menu

    const menuOption = ref<OptionList>([])

    onBeforeMount(async () => {
      const { data: menu } = await getMenuOption()

      menuOption.value = menu
    })

    const mergeDetailFormConfig = computed(() => {
      detailFormConfig.formItems.forEach((item) => {
        if (item.field === 'parentId') {
          item.options = menuOption.value
        }
      })

      return detailFormConfig
    })

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

      contentTableConfig,
      mergeDetailFormConfig,

      isShowDetailPanel,
      detailFormValue,

      handleCreateData,
      handleDetailData,
      handleCancel,
    }
  },
})
</script>

<style lang="less" scoped></style>
