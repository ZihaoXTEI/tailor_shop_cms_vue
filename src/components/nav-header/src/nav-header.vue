<template>
  <a-layout-header style="background: #fff; padding: 0">
    <menu-unfold-outlined
      v-if="collapsed"
      class="trigger"
      @click="handleCollapsedClick"
    />
    <menu-fold-outlined v-else class="trigger" @click="handleCollapsedClick" />
  </a-layout-header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  name: 'NavHeader',
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  emits: ['collapsedChange'],
  setup(_, { emit }) {
    const collapsed = ref<boolean>(false)

    const handleCollapsedClick = () => {
      collapsed.value = !collapsed.value
      emit('collapsedChange', collapsed.value)
    }

    return {
      collapsed,
      handleCollapsedClick,
    }
  },
})
</script>

<style lang="less" scoped>
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}
</style>
