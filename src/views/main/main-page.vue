<template>
  <div class="container">
    <a-layout>
      <nav-menu :collapsed="collapsed"></nav-menu>

      <a-layout class="page">
        <nav-header @collapsed-change="handleCollapsedChange"></nav-header>

        <a-layout-content class="content">
          <router-view></router-view>
        </a-layout-content>

        <a-layout-footer class="footer">
          Tailors CMS ©2022 Created by Cikao
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
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
  height: 100%;
}

.site-layout .site-layout-background {
  background: #fff;
}

.page {
  height: 100vh;
  overflow: auto;

  .content {
    margin: 24px 16px;
    min-height: initial;
    // height: calc(100vh - 64px);
  }

  .footer {
    text-align: center;
    // background-color: skyblue;
  }
}
</style>
