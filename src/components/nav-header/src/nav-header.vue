<template>
  <a-layout-header class="nav-header">
    <div class="header-content">
      <menu-unfold-outlined
        v-if="collapsed"
        class="trigger"
        @click="handleCollapsedClick"
      />
      <menu-fold-outlined
        v-else
        class="trigger"
        @click="handleCollapsedClick"
      />

      <a-breadcrumb>
        <template v-for="breadcrumb in breadcrumbList" :key="breadcrumb.path">
          <a-breadcrumb-item>{{ breadcrumb.name }}</a-breadcrumb-item>
        </template>
      </a-breadcrumb>
    </div>
  </a-layout-header>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
import { useRoute } from 'vue-router'
import { LoginStore } from '../../../store/login/login'
import { pathMapBreadcrumbs } from '../../../utils/mapMenu'

export default defineComponent({
  name: 'NavHeader',
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  emits: ['collapsedChange'],
  setup(_, { emit }) {
    const collapsed = ref<boolean>(false)

    const userMenu = LoginStore().userMenu
    const route = useRoute()
    console.log('path', route.path)
    const breadcrumbList = computed(() => {
      return pathMapBreadcrumbs(userMenu, route.path)
    })

    const handleCollapsedClick = () => {
      collapsed.value = !collapsed.value
      emit('collapsedChange', collapsed.value)
    }

    return {
      collapsed,
      breadcrumbList,

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
  display: flex;
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

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
