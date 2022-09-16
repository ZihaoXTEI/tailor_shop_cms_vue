<template>
  <div class="login-container">
    <a-form
      layout="horizontal"
      :model="phoneInfo"
      @finish="handleFinish"
      @finish-failed="handleFinishFailed"
    >
      <a-form-item
        label="手机号"
        name="userPhone"
        :rules="[{ required: true, message: '请输入手机号码' }]"
      >
        <div class="form-item">
          <a-input
            v-model:value="phoneInfo.userPhone"
            placeholder="请输入手机号码"
          />
          <a-button type="primary">发送（10s）</a-button>
        </div>
      </a-form-item>

      <a-form-item
        label="验证码"
        name="verifCode"
        :rules="[{ required: true, message: '请输入验证码' }]"
      >
        <a-input
          v-model:value="phoneInfo.verifCode"
          placeholder="请输入验证码"
        />
      </a-form-item>

      <a-form-item>
        <div class="form-item">
          <a-form-item name="remember" no-style>
            <a-checkbox v-model:checked="phoneInfo.remember">
              记住我
            </a-checkbox>
          </a-form-item>
        </div>
      </a-form-item>

      <a-form-item>
        <a-button
          class="submit-btn"
          type="primary"
          html-type="submit"
          :disabled="disabled"
        >
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'

import type { FormProps } from 'ant-design-vue'

export default defineComponent({
  name: 'LoginPhone',
  setup() {
    const phoneInfo = reactive({
      userPhone: '',
      verifCode: '',
      remember: false,
    })

    const disabled = computed(() => {
      return !(phoneInfo.userPhone && phoneInfo.verifCode)
    })

    const handleFinish: FormProps['onFinish'] = (values) => {
      console.log(values)
    }

    const handleFinishFailed: FormProps['onFinishFailed'] = (errors) => {
      console.log(errors)
    }

    return {
      phoneInfo,
      disabled,
      handleFinish,
      handleFinishFailed,
    }
  },
})
</script>

<style lang="less" scoped>
.form-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.submit-btn {
  width: 100%;
}
</style>
