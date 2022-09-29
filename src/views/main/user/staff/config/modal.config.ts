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
      label: '职员编号',
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
      field: 'staffName',
      type: 'input',
      label: '职员姓名',
      placeholder: '请输入职员姓名',
    },
    {
      field: 'staffGender',
      type: 'radio',
      label: '职员性别',
      placeholder: '请选择职员性别',
      options: [
        { label: '男', value: Gender.MALE },
        { label: '女', value: Gender.FEMALE },
      ],
    },
    {
      field: 'staffSalary',
      type: 'inputnumber',
      label: '职员工资',
      placeholder: '请输入职员工资',
      otherOptions: {
        min: 0,
        max: 10000,
        addonAfter: '¥',
      },
    },
    {
      field: 'staffEntrydate',
      type: 'datepicker',
      label: '职员入职时间',
      placeholder: '请选择职员入职时间',
      otherOptions: {
        valueFormat: 'YYYY/MM/DD',
      },
    },
    {
      field: 'staffPhone',
      type: 'input',
      label: '职员电话',
      placeholder: '请输入职员电话',
    },
    {
      field: 'staffAddress',
      type: 'input',
      label: '职员住址',
      placeholder: '请输入职员住址',
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
    staffName: [
      {
        required: true,
        message: '请输入职员姓名',
      },
      {
        min: 2,
        max: 16,
        message: '职员姓名在 2 ~ 16 个字符之间',
        trigger: 'change',
      },
    ],
    staffGender: [
      {
        required: true,
        message: '请选择职员性别',
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
