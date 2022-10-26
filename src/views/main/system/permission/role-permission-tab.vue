<template>
  <template v-if="!isShowDetailPanel">
    <page-content
      ref="pageContentRef"
      :page-name="pageName"
      :page-title="pageTitle"
      :request-url="requestUrl"
      :content-table-config="rolePermissionContentTableConfig"
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
      :detail-form-config="mergeRolePermissionDetailFormConfig"
      :detail-form-value="detailFormValue"
      :other-form-value="otherFormValue"
      @cancel="handleCancel"
    >
      <template #permissionId="{ value }">
        <my-multiple-select
          v-model="permissionIdList"
          :tree-data="permissionOption"
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

import { rolePermissionContentTableConfig } from './config/content.config'
import { rolePermissionDetailFormConfig } from './config/detail.config'

import { usePageDetail } from '../../../../hooks/usePageDetail'
import { SystemAPI } from '../../../../constants/requestApi'
import { OptionList } from '../../../../service/main/view/type'
import {
  getPermissionOption,
  getRoleOption,
} from '../../../../service/main/view/option'

export default defineComponent({
  name: 'RolePermissionTab',
  components: {
    PageContent,
    PageDetail,
  },
  setup() {
    const pageName = ref('user_permission')
    const pageTitle = ref('角色权限关系')
    const requestUrl = SystemAPI.RolePermission

    const permissionIdList = ref<number[]>([])

    const permissionOption = ref<OptionList>([])
    const roleOption = ref<OptionList>([])

    onBeforeMount(async () => {
      const { data: permission } = await getPermissionOption()
      const { data: role } = await getRoleOption()

      permissionOption.value = permission
      roleOption.value = role
    })

    const mergeRolePermissionDetailFormConfig = computed(() => {
      rolePermissionDetailFormConfig.formItems.forEach((item) => {
        // if (item.field === 'permissionId') {
        //   item.options = permissionOption.value
        // }

        if (item.field === 'roleId') {
          item.options = roleOption.value
        }
      })

      return rolePermissionDetailFormConfig
    })

    watch(permissionIdList, (newValue) => {
      otherFormValue.value = { permissionIdList: toRaw(newValue) }
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

      permissionIdList,
      permissionOption,

      rolePermissionContentTableConfig,
      mergeRolePermissionDetailFormConfig,

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
