import { IForm } from '@/base-ui/my-form'
import { Gender } from '../../../../../types/entityType'
import {
  validatePassword,
  validateUsername,
} from '../../../../../utils/validate'

export const modalFormConfig: IForm = {
  formItems: [
    {
      field: 'userId',
      type: 'input',
      label: '顾客编号',
      placeholder: '系统自动生成',
      otherOptions: {
        disabled: true,
      },
    },
    {
      field: 'nickname',
      type: 'input',
      label: '登录昵称',
      placeholder: '请输入登录昵称',
      otherOptions: {
        disabled: false,
      },
    },
    {
      field: 'password',
      type: 'input',
      label: '登录密码',
      placeholder: '请输入登录密码',
    },
    {
      field: 'customerName',
      type: 'input',
      label: '顾客姓名',
      placeholder: '请输入顾客姓名',
    },
    {
      field: 'customerGender',
      type: 'radio',
      label: '顾客性别',
      placeholder: '请选择顾客性别',
      options: [
        { label: '男', value: Gender.MALE },
        { label: '女', value: Gender.FEMALE },
      ],
    },
    {
      field: 'customerPhone',
      type: 'input',
      label: '顾客电话',
      placeholder: '请输入顾客联系电话',
    },
    {
      field: 'customerAddress',
      type: 'input',
      label: '顾客住址',
      placeholder: '请输入顾客住址',
    },
  ],
  formRules: {
    username: [
      {
        required: true,
        message: '请输入登录昵称',
      },
      { required: true, validator: validateUsername, trigger: 'change' },
    ],
    password: [
      {
        required: true,
        message: '请输入登录密码',
      },
      { required: true, validator: validatePassword, trigger: 'change' },
    ],
    customerName: [
      {
        required: true,
        message: '请输入顾客姓名',
      },
      {
        min: 2,
        max: 16,
        message: '顾客姓名在 2 ~ 16 个字符之间',
        trigger: 'change',
      },
    ],
    customerGender: [
      {
        required: true,
        message: '请选择顾客性别',
      },
    ],
  },

  rowLayout: {
    justify: 'center',
  },

  colLayout: {
    span: 24,
  },
}
