import { IForm } from '@/base-ui/my-form'
import { ClientType } from '../../../../../types/entityType'

export const detailFormConfig: IForm = {
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: '菜单编号',
      placeholder: '系统自动生成',
      otherOptions: {
        disabled: true,
      },
    },
    {
      field: 'menuName',
      type: 'input',
      label: '菜单名称',
      placeholder: '请输入菜单名称',
    },
    {
      field: 'url',
      type: 'input',
      label: '菜单路径',
      placeholder: '请输入菜单路径',
    },
    {
      field: 'style',
      type: 'input',
      label: '菜单样式',
      placeholder: '请输入菜单样式',
    },
    {
      field: 'viewName',
      type: 'input',
      label: '页面文件名称',
      placeholder: '请输入页面文件名称',
    },
    {
      field: 'menuType',
      type: 'select',
      label: '菜单类型',
      placeholder: '请选择菜单类型',
      options: [
        { label: '后台管理系统', value: ClientType.CMS },
        { label: '商城（HTML页面）', value: ClientType.SHOP },
        { label: '小程序', value: ClientType.MINIPROGRAM },
      ],
    },
    {
      field: 'menuLevel',
      type: 'inputnumber',
      label: '菜单级别',
      placeholder: '请输入菜单级别',
      otherOptions: {
        min: 0,
        max: 20,
      },
    },
    {
      field: 'sort',
      type: 'inputnumber',
      label: '菜单排序',
      placeholder: '请输入菜单排序',
      otherOptions: {
        min: 0,
        max: 1000,
      },
    },
    {
      field: 'parentId',
      type: 'select',
      label: '父级菜单编号',
      placeholder: '请选择父级菜单编号',
      options: [],
    },
  ],
  formRules: {
    menuName: [
      {
        required: true,
        message: '请输入菜单名称',
      },
      {
        min: 2,
        max: 20,
        message: '菜单名称在 2 ~ 20 个字符之间',
        trigger: 'change',
      },
    ],
    url: [
      {
        required: true,
        message: '请输入菜单路径',
      },
      {
        min: 4,
        max: 60,
        message: '菜单名称在 4 ~ 60 个字符之间',
        trigger: 'change',
      },
    ],
    menuType: [
      {
        required: true,
        message: '请选择菜单类型',
      },
    ],
    menuLevel: [
      {
        required: true,
        message: '请输入菜单级别',
      },
    ],
    sort: [
      {
        required: true,
        message: '请输入菜单排序',
      },
    ],
  },

  formLayout: {
    labelAlign: 'left',
    labelCol: { span: 5 },
    wrapperCol: { span: 10 },
  },

  colLayout: {
    span: 24,
  },
}
