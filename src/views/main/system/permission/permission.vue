<template>
  <a-card
    style="width: 100%"
    :tab-list="tabList"
    :active-tab-key="activeKey"
    @tabChange="onTabChange"
  >
    <template #customTab="item">
      <span v-if="item.key === 'permission'">
        <gold-outlined />
        {{ item.tab }}
      </span>
    </template>

    <template v-if="activeKey === 'permission'">
      <permission-tab></permission-tab>
    </template>

    <template v-else-if="activeKey === 'role_permission'">
      <role-permission-tab></role-permission-tab>
    </template>
  </a-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import { GoldOutlined } from '@ant-design/icons-vue'

import PermissionTab from './permission-tab.vue'
import RolePermissionTab from './role-permission-tab.vue'

export default defineComponent({
  name: 'Permission',
  components: {
    GoldOutlined,
    PermissionTab,
    RolePermissionTab,
  },
  setup() {
    const tabList = [
      {
        key: 'permission',
        tab: '权限',
      },
      {
        key: 'role_permission',
        tab: '角色权限',
      },
    ]
    const activeKey = ref<string>('permission')
    const onTabChange = (value: string) => {
      console.log(value)
      activeKey.value = value
    }

    return {
      tabList,
      activeKey,

      onTabChange,
    }
  },
})
</script>

<style lang="less" scoped></style>
