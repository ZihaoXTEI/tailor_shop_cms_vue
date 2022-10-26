<template>
  <a-layout-sider v-model:collapsed="isCollapsed" :trigger="null" collapsible>
    <div v-show="!collapsed" class="logo">
      Tailors CMS
      <span class="version">v2.0.2</span>
    </div>
    <a-menu
      v-model:selectedKeys="selectedKeys"
      :open-keys="openKeys"
      theme="light"
      mode="inline"
      class="menu"
      @openChange="handleOnOpenChange"
    >
      <template v-for="item in userMenu" :key="item.id">
        <template v-if="item.childMenuList?.length === 0">
          <a-menu-item :key="item.id" @click="handleMenuItemClick(item.url)">
            <template #icon>
              <UserOutlined />
            </template>
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

import { UserOutlined } from '@ant-design/icons-vue'
import NavSubMenu from './nav-sub-menu.vue'
import { LoginStore } from '../../../store/login/login'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'NavMenu',
  components: {
    UserOutlined,
    NavSubMenu,
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const router = useRouter()
    const loginStore = LoginStore()

    const userMenu = loginStore.userMenu

    console.log('userMenu', userMenu)

    const isCollapsed = ref<boolean>(false)

    watchEffect(() => {
      isCollapsed.value = props.collapsed
    })

    const selectedKeys = ref<string[]>(['1'])
    const openKeys = ref<string[]>([])

    const handleMenuItemClick = (url: string) => {
      console.log(url)
      router.push(`/main${url}`)
    }

    const handleOnOpenChange = (openkey: string[]) => {
      const latestOpenKey = openkey.find((key) => !openKeys.value.includes(key))
      // if()
      openKeys.value = latestOpenKey ? [latestOpenKey] : []
    }
    return {
      isCollapsed,
      selectedKeys,
      openKeys,
      userMenu,

      handleMenuItemClick,
      handleOnOpenChange,
    }
  },
})
</script>

<style lang="less" scoped>
.logo {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  // background-color: #fff;
  // background: rgba(255, 255, 255, 0.3);
  margin: 16px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;

  .version {
    position: absolute;
    top: -5px;
    right: 0;
    display: inline-block;
    padding: 0 5px;
    background-color: #e64a19;
    border-radius: 5px;
    font-size: 12px;
  }
}

.menu {
  height: calc(100vh - 65px); // 由height: calc(100% - 65px) 改变
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
