<template>
  <a-sub-menu :key="menuInfo.id">
    <!-- <template #icon><VideoCameraOutlined /></template> -->
    <template #title>{{ menuInfo.menuName }}</template>
    <template v-for="item in menuInfo.childMenuList" :key="item.id">
      <template v-if="item.childMenuList?.length === 0">
        <a-menu-item :key="item.id" @click="handleMenuItemClick(item.url)">
          <!-- <template #icon>
            <VideoCameraOutlined />
          </template> -->
          {{ item.menuName }}
        </a-menu-item>
      </template>
      <template v-else>
        <nav-sub-menu :key="item.id" :menu-info="item" />
      </template>
    </template>
  </a-sub-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
// import Menu from '../../../entities/Menu'

// import { VideoCameraOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  name: 'NavSubMenu',
  // components: {
  //   VideoCameraOutlined,
  // },
  props: {
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  setup() {
    const router = useRouter()
    const handleMenuItemClick = (url: string) => {
      console.log(url)
      router.push(`/main${url}`)
    }
    return {
      handleMenuItemClick,
    }
  },
})
</script>

<style lang="less" scoped></style>
