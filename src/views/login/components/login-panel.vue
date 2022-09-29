<template>
  <div class="login-panel">
    <h1 class="title">Tailors CMS</h1>
    <a-tabs v-model:activeKey="activeKey" type="card" centered>
      <a-tab-pane key="1" tab="账号登录">
        <login-account></login-account>
      </a-tab-pane>
      <a-tab-pane key="2" tab="手机登录">
        <login-phone></login-phone>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import StorageKey from '../../../constants/storageKey'
import { LoginStore } from '../../../store/login/login'
import { _localStorage } from '../../../utils/storge'

import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  name: 'LoginPanel',
  components: {
    LoginAccount,
    LoginPhone,
  },
  setup() {
    const activeKey = ref('1')

    const router = useRouter()
    onMounted(async () => {
      const localToken = _localStorage.getItem(StorageKey.TOKEN)
      if (localToken) {
        console.log('在login-panel 中：', localToken)

        const store = LoginStore()
        await store.tokenLoginAction(`Bearer ${localToken}`)
        router.push('/main')
      }
    })

    return { activeKey }
  },
})
</script>

<style lang="less">
.login-panel {
  width: 360px;
  padding: 5px;
  background-color: #e4e4e4;
  border-radius: 6px;

  .title {
    text-align: center;
  }
}

.login-panel > .ant-tabs-card .ant-tabs-nav-wrap {
  display: block;
}

.login-panel > .ant-tabs-card .ant-tabs-tab {
  width: 100%;
  justify-content: center;
}

.login-panel > .ant-tabs-card {
  .ant-tabs-content {
    min-height: 120px;
    margin-top: -16px;

    .ant-tabs-tabpane {
      padding: 16px;
      background: #fff;
    }
  }

  .ant-tabs-nav::before {
    display: none;
  }
}

.login-panel > .ant-tabs-card .ant-tabs-tab-active,
[data-theme='compact'] .login-panel > .ant-tabs-card .ant-tabs-tab-active {
  background: #fff;
  border-color: #fff;
}
#components-tabs-demo-card-top .code-box-demo {
  padding: 24px;
  overflow: hidden;
  background: #f5f5f5;
}
[data-theme='compact'] .login-panel > .ant-tabs-card .ant-tabs-content {
  height: 120px;
  margin-top: -8px;
}
[data-theme='dark'] .login-panel > .ant-tabs-card .ant-tabs-tab {
  background: transparent;
  border-color: transparent;
}
[data-theme='dark'] #components-tabs-demo-card-top .code-box-demo {
  background: #000;
}
[data-theme='dark']
  .login-panel
  > .ant-tabs-card
  .ant-tabs-content
  > .ant-tabs-tabpane {
  background: #141414;
}
[data-theme='dark'] .login-panel > .ant-tabs-card .ant-tabs-tab-active {
  background: #141414;
  border-color: #141414;
}
</style>
