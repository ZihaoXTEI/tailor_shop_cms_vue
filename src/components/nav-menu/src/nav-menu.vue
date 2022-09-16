<template>
  <a-layout-sider v-model:collapsed="isCollapsed" :trigger="null" collapsible>
    <div v-show="!collapsed" class="logo">Tailors CMS</div>
    <a-menu
      v-model:selectedKeys="selectedKeys"
      theme="dark"
      mode="inline"
      class="menu"
    >
      <template v-for="item in userMenu" :key="item.id">
        <template v-if="item.childMenuList?.length === 0">
          <a-menu-item :key="item.id">
            <!-- <template #icon>
              <UserOutlined />
            </template> -->
            {{ item.menuName }}
          </a-menu-item>
        </template>

        <template v-else>
          <nav-sub-menu :key="item.id" :menu-info="item" />
        </template>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'

// import { UserOutlined } from '@ant-design/icons-vue'
import NavSubMenu from './nav-sub-menu.vue'
import { LoginStore } from '../../../store/login/login'

export default defineComponent({
  name: 'NavMenu',
  components: {
    // UserOutlined,
    NavSubMenu,
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const loginStore = LoginStore()

    const userMenu = loginStore.userMenu

    const isCollapsed = ref<boolean>(false)

    watchEffect(() => {
      isCollapsed.value = props.collapsed
    })

    const selectedKeys = ref<string[]>(['1'])
    return {
      isCollapsed,
      selectedKeys,
      userMenu,
    }
  },
})
</script>

<style lang="less" scoped>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
  color: #fff;
}

.menu {
  height: calc(100% - 55px);
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
