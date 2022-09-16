import { Rule } from 'ant-design-vue/lib/form'

export const validateUsername = async (_rule: Rule, value: string) => {
  const regExp = /^[a-zA-Z0-9]{4,12}$/
  if (!value) {
    return Promise.reject('请输入用户名')
  }

  if (regExp.test(value)) {
    return Promise.resolve()
  } else {
    return Promise.reject('请输入 4 ~ 12 位只包含英文和数字的字符')
  }
}

export const validatePassword = async (_rule: Rule, value: string) => {
  const regExp = /^[a-zA-Z0-9]{6,20}$/
  if (!value) {
    return Promise.reject('请输入密码')
  }

  if (regExp.test(value)) {
    return Promise.resolve()
  } else {
    return Promise.reject('请输入 6 ~ 20 位只包含英文和数字的字符')
  }
}

export const validateUserPhone = async (_rule: Rule, value: string) => {
  const regExp =
    /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
  if (!value) {
    return Promise.reject('请输入手机号码')
  }

  if (regExp.test(value)) {
    return Promise.resolve()
  } else {
    return Promise.reject('请输入正确手机号码')
  }
}
