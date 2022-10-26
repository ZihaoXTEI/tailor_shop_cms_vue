<template>
  <template v-if="!isShowDetailPanel">
    <page-content
      ref="pageContentRef"
      :page-name="pageName"
      :page-title="pageTitle"
      :request-url="requestUrl"
      :content-table-config="userRoleContentTableConfig"
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
      :detail-form-config="mergeUserRoleDetailFormConfig"
      :detail-form-value="detailFormValue"
      :other-form-value="otherFormValue"
      @cancel="handleCancel"
    >
      <template #roleId="{ value }">
        <my-multiple-select
          v-model="roleIdList"
          :tree-data="roleOption"
          :value-list="value"
        ></my-multiple-select>
      </template>
    </page-detail>
  </template>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onBeforeMount,
  ref,
  toRaw,
  watch,
} from 'vue'

import PageContent from '../../../../components/page-content'
import PageDetail from '../../../../components/page-detail'

import { userRoleContentTableConfig } from './config/content.config'
import { userRoleDetailFormConfig } from './config/detail.config'

import { usePageDetail } from '../../../../hooks/usePageDetail'
import { SystemAPI } from '../../../../constants/requestApi'
import { OptionList } from '../../../../service/main/view/type'
import {
  getRoleOption,
  getStaffOption,
} from '../../../../service/main/view/option'

export default defineComponent({
  name: 'RoleTab',
  components: {
    PageContent,
    PageDetail,
  },
  setup() {
    const pageName = ref('userrole')
    const pageTitle = ref('用户角色关系')
    const requestUrl = SystemAPI.UserRole

    const roleIdList = ref<number[]>([])

    const staffOption = ref<OptionList>([])
    const roleOption = ref<OptionList>([])

    onBeforeMount(async () => {
      const { data: staff } = await getStaffOption()
      const { data: role } = await getRoleOption()

      staffOption.value = staff
      roleOption.value = role
    })

    const mergeUserRoleDetailFormConfig = computed(() => {
      userRoleDetailFormConfig.formItems.forEach((item) => {
        if (item.field === 'userId') {
          item.options = staffOption.value
        }

        // if (item.field === 'roleId') {
        //   item.options = roleOption.value
        // }
      })

      return userRoleDetailFormConfig
    })

    watch(roleIdList, (newValue) => {
      otherFormValue.value = { roleIdList: toRaw(newValue) }
    })

    const {
      isShowDetailPanel,
      detailFormValue,
      otherFormValue,
      handleCreateData,
      handleDetailData,
      handleCancel,
    } = usePageDetail(requestUrl)

    return {
      pageName,
      pageTitle,
      requestUrl,

      roleIdList,
      roleOption,

      userRoleContentTableConfig,
      mergeUserRoleDetailFormConfig,

      isShowDetailPanel,
      detailFormValue,

      handleCreateData,
      handleDetailData,
      handleCancel,

      otherFormValue,
    }
  },
})
</script>

<style lang="less" scoped></style>
