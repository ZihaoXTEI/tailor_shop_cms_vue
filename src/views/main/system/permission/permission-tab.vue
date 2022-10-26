<template>
  <template v-if="!isShowDetailPanel">
    <page-content
      ref="pageContentRef"
      :page-name="pageName"
      :page-title="pageTitle"
      :request-url="requestUrl"
      :content-table-config="permissionContentTableConfig"
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
      :detail-form-config="mergePermissionDetailFormConfig"
      :detail-form-value="detailFormValue"
      :other-form-value="otherFormValue"
      @cancel="enhanceHandleCancel"
    >
      <template #menuId="{ value }">
        {{ setMenuId(value) }}
        <a-select
          :default-value="value"
          :value="menuId"
          :options="menuOption"
          @change="handleMenuIdChange"
        >
        </a-select>
      </template>
      <template #permissionDescribe="{ value }">
        {{ setPermissionDescribe(value) }}
        <a-input v-model:value="permissionField" :default-value="value">
          <template #addonAfter>
            <a-select v-model:value="permissionType" style="width: 120px">
              <a-select-option value="query">query</a-select-option>
              <a-select-option value="create">create</a-select-option>
              <a-select-option value="update">update</a-select-option>
              <a-select-option value="delete">delete</a-select-option>
            </a-select>
          </template>
        </a-input>
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
  watchEffect,
} from 'vue'

import PageContent from '../../../../components/page-content'
import PageDetail from '../../../../components/page-detail'

import { permissionContentTableConfig } from './config/content.config'
import { permissionDetailFormConfig } from './config/detail.config'

import { usePageDetail } from '../../../../hooks/usePageDetail'
import { SystemAPI } from '../../../../constants/requestApi'
import {
  IMenuOptionResult,
  MenuOptionList,
  OptionList,
} from '../../../../service/main/view/type'
import {
  getMenuOption,
  getPermissionOption,
} from '../../../../service/main/view/option'

export default defineComponent({
  name: 'PermissionTab',
  components: {
    PageContent,
    PageDetail,
  },
  setup() {
    const pageName = ref('permission')
    const pageTitle = ref('权限')
    const requestUrl = SystemAPI.Permission

    const permissionOption = ref<OptionList>([])
    const menuOption = ref<MenuOptionList>([])

    onBeforeMount(async () => {
      const { data: permission } = await getPermissionOption()
      const { data: menu } = await getMenuOption()

      permissionOption.value = permission
      menuOption.value = menu
    })

    const mergePermissionDetailFormConfig = computed(() => {
      permissionDetailFormConfig.formItems.forEach((item) => {
        if (item.field === 'parentId') {
          item.options = permissionOption.value
        }

        // if (item.field === 'menuId') {
        //   item.options = menuOption.value
        // }
      })

      return permissionDetailFormConfig
    })

    const menuId = ref<number>()
    const permissionDescribe = ref<string>('')
    const permissionField = ref<string>()
    const permissionType = ref<string>()

    const handleMenuIdChange = (value: number, option: IMenuOptionResult) => {
      menuId.value = value
      permissionField.value = option.url.replace(/\//g, ':').substring(1) + ':'

      otherFormValue.value = {
        menuId: toRaw(menuId.value),
        permissionDescribe: toRaw(permissionDescribe.value),
      }
    }

    // 监听 permissionField 的值
    watchEffect(() => {
      permissionDescribe.value =
        (permissionField.value ?? '') + (permissionType.value ?? '')

      if (permissionType.value) {
        otherFormValue.value = {
          menuId: toRaw(menuId.value),
          permissionDescribe: toRaw(permissionDescribe.value),
        }
      }
    })

    // 设置 menuId 和 permissionDescribe 的默认值
    const setMenuId = (id: number) => {
      if (id) {
        menuId.value = id
      }
    }
    const setPermissionDescribe = (value: string) => {
      if (value) {
        permissionDescribe.value = value
        permissionField.value = value.replace(
          /query|create|update|delete/gi,
          '',
        )
        permissionType.value = value.split(':').pop()
        console.log('+=-=', permissionField.value, permissionType.value)
      }
    }

    const enhanceHandleCancel = () => {
      menuId.value = undefined
      permissionDescribe.value = ''
      permissionField.value = undefined
      permissionType.value = undefined
      handleCancel()
    }

    const {
      isShowDetailPanel,
      detailFormValue,
      otherFormValue,
      handleCreateData,
      handleDetailData,
      handleCancel,
    } = usePageDetail(`${requestUrl}id/`)

    return {
      pageName,
      pageTitle,
      requestUrl,

      menuId,
      permissionField,
      permissionType,
      menuOption,
      handleMenuIdChange,
      setMenuId,
      setPermissionDescribe,

      permissionContentTableConfig,
      mergePermissionDetailFormConfig,

      isShowDetailPanel,
      detailFormValue,

      handleCreateData,
      handleDetailData,
      enhanceHandleCancel,

      otherFormValue,
    }
  },
})
</script>

<style lang="less" scoped></style>
