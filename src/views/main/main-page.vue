<template>
  <a-layout class="container">
    <nav-menu :collapsed="collapsed"></nav-menu>

    <a-layout>
      <nav-header @collapsed-change="handleCollapsedChange"></nav-header>

      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        Content
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import NavHeader from '../../components/nav-header'
import NavMenu from '../../components/nav-menu/src/nav-menu.vue'

export default defineComponent({
  name: 'MainPage',
  components: {
    NavHeader,
    NavMenu,
  },
  setup() {
    const collapsed = ref<boolean>(false)

    const handleCollapsedChange = (isCollapsed: boolean) => {
      collapsed.value = isCollapsed
      console.log(collapsed.value)
    }

    return {
      collapsed,
      handleCollapsedChange,
    }
  },
})
</script>

<style lang="less" scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
