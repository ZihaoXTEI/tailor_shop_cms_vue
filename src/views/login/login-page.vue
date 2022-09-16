<template>
  <div class="login-page">
    <login-panel></login-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import LoginPanel from './components/login-panel.vue'

export default defineComponent({
  name: 'LoginPage',
  components: {
    LoginPanel,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="less" scoped>
.login-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('../../assets/image/cool-background.png');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
