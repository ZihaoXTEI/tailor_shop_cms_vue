<template>
  <template v-if="!isShowDetailPanel">
    <page-content
      ref="pageContentRef"
      :page-name="pageName"
      :page-title="pageTitle"
      :request-url="requestUrl"
      :content-table-config="roleContentTableConfig"
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
      :detail-form-config="roleDetailFormConfig"
      :detail-form-value="detailFormValue"
      @cancel="handleCancel"
    >
    </page-detail>
  </template>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import PageContent from '../../../../components/page-content'
import PageDetail from '../../../../components/page-detail'

import { roleContentTableConfig } from './config/content.config'
import { roleDetailFormConfig } from './config/detail.config'

import { usePageDetail } from '../../../../hooks/usePageDetail'
import { SystemAPI } from '../../../../constants/requestApi'

export default defineComponent({
  name: 'RoleTab',
  components: {
    PageContent,
    PageDetail,
  },
  setup() {
    const pageName = ref('role')
    const pageTitle = ref('角色')
    const requestUrl = SystemAPI.Role

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

      roleContentTableConfig,
      roleDetailFormConfig,

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
