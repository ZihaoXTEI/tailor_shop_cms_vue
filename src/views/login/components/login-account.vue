<template>
  <div class="login-container">
    <a-form
      layout="horizontal"
      :model="accountInfo"
      :rules="rules"
      @finish="handleFinish"
      @finish-failed="handleFinishFailed"
    >
      <a-form-item label="用户" name="username">
        <a-input
          v-model:value="accountInfo.username"
          placeholder="请输入用户名"
          autocomplete="off"
        >
          <template #prefix>
            <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
          </template>
        </a-input>
      </a-form-item>

      <a-form-item label="密码" name="password">
        <a-input-password
          v-model:value="accountInfo.password"
          type="password"
          placeholder="请输入密码"
          autocomplete="off"
        >
          <template #prefix>
            <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
          </template>
        </a-input-password>
      </a-form-item>

      <a-form-item>
        <div class="form-item">
          <a-form-item name="remember" no-style>
            <a-checkbox v-model:checked="accountInfo.remember">
              记住我
            </a-checkbox>
          </a-form-item>

          <a class="login-form-forgot" href="">忘记密码</a>
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

import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import type { FormProps } from 'ant-design-vue'
import type { Rule } from 'ant-design-vue/es/form'

import { validateUsername, validatePassword } from '../config'
import { LoginStore } from '../../../store/login/login'
import { _localStorage } from '../../../utils/storge'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'LoginAccount',
  components: {
    UserOutlined,
    LockOutlined,
  },
  setup() {
    const router = useRouter()

    const accountInfo = reactive({
      username: 'cikao',
      password: '123456',
      remember: true,
    })

    const disabled = computed(() => {
      return !(accountInfo.username && accountInfo.password)
    })

    const rules: Record<string, Rule[]> = {
      username: [
        { required: true, validator: validateUsername, trigger: 'change' },
      ],
      password: [
        { required: true, validator: validatePassword, trigger: 'change' },
      ],
    }

    const handleFinish: FormProps['onFinish'] = async (values) => {
      console.log('onFinish', values)
      const { username, password, remember } = values
      const store = LoginStore()
      try {
        await store.accountLoginAction({ username, password })
        if (remember) {
          _localStorage.setItem('token', store.token)
        } else {
          _localStorage.removeItem('token')
        }

        router.push('/main')
      } catch {
        console.log('ss')
      }
    }

    const handleFinishFailed: FormProps['onFinishFailed'] = (errors) => {
      console.log('onFinishFailed', errors)
    }

    return {
      accountInfo,
      disabled,
      rules,
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
