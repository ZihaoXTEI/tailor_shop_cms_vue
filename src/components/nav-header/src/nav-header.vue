<template>
  <a-layout-header class="nav-header">
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
.nav-header {
  position: sticky;
  top: 0;
  right: 0;
  z-index: 10;
  background: #fff;
  padding: 0;
  box-shadow: 0 8px 50px #bababa;
}

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
