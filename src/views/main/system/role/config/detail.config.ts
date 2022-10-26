import { IForm } from '@/base-ui/my-form'

export const roleDetailFormConfig: IForm = {
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: '角色编号',
      placeholder: '系统自动生成',
      otherOptions: {
        disabled: true,
      },
    },
    {
      field: 'roleName',
      type: 'input',
      label: '角色名称',
      placeholder: '请输入角色名称',
    },
    {
      field: 'roleRemark',
      type: 'input',
      label: '角色说明',
      placeholder: '请输入角色说明',
    },
  ],
  formRules: {
    roleName: [
      {
        required: true,
        message: '请输入角色名称',
      },
      {
        min: 3,
        max: 20,
        message: '角色名称在 3 ~ 20 个字符之间',
        trigger: 'change',
      },
    ],
    roleRemark: [
      {
        required: true,
        message: '请输入角色说明',
      },
      {
        min: 5,
        max: 60,
        message: '角色说明在 5 ~ 60 个字符之间',
        trigger: 'change',
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

export const userRoleDetailFormConfig: IForm = {
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: '用户角色编号',
      placeholder: '系统自动生成',
      otherOptions: {
        disabled: true,
      },
    },
    {
      field: 'roleId',
      type: 'custom',
      label: '角色编号',
      placeholder: '请选择角色编号',
    },
    {
      field: 'userId',
      type: 'select',
      label: '用户编号',
      placeholder: '请选择用户编号',
      options: [],
    },
  ],
  formRules: {
    roleId: [
      {
        required: true,
        message: '请选择角色编号',
      },
    ],
    userId: [
      {
        required: true,
        message: '请选择用户编号',
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
