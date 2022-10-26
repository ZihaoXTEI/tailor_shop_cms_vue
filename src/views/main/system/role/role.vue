<template>
  <a-card
    style="width: 100%"
    :tab-list="tabList"
    :active-tab-key="activeKey"
    @tabChange="onTabChange"
  >
    <template #customTab="item">
      <span v-if="item.key === 'role'">
        <solution-outlined />
        {{ item.tab }}
      </span>
    </template>

    <template v-if="activeKey === 'role'">
      <role-tab></role-tab>
    </template>

    <template v-else-if="activeKey === 'user_role'">
      <user-role-tab></user-role-tab>
    </template>
  </a-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import { SolutionOutlined } from '@ant-design/icons-vue'

import RoleTab from './role-tab.vue'
import UserRoleTab from './user-role-tab.vue'

export default defineComponent({
  name: 'Role',
  components: {
    SolutionOutlined,
    RoleTab,
    UserRoleTab,
  },
  setup() {
    const tabList = [
      {
        key: 'role',
        tab: '角色',
      },
      {
        key: 'user_role',
        tab: '用户角色',
      },
    ]
    const activeKey = ref<string>('role')
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
