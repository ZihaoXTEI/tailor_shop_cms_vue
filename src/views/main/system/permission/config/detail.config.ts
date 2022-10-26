import { IForm } from '@/base-ui/my-form'

export const permissionDetailFormConfig: IForm = {
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: '权限编号',
      placeholder: '系统自动生成',
      otherOptions: {
        readonly: true,
      },
    },
    {
      field: 'permissionName',
      type: 'input',
      label: '权限名称',
      placeholder: '请输入权限名称',
    },
    {
      field: 'menuId',
      type: 'custom',
      label: '对应菜单编号',
      placeholder: '请选择对应菜单编号',
    },
    {
      field: 'permissionDescribe',
      type: 'custom',
      label: '权限描述',
      placeholder: '请输入权限描述',
    },
    {
      field: 'parentId',
      type: 'select',
      label: '父级权限编号',
      placeholder: '请选择父级权限编号',
      options: [],
    },
    {
      field: 'permissionRemark',
      type: 'textarea',
      label: '权限说明',
      placeholder: '请输入权限说明',
      otherOptions: {
        autoSize: { minRows: 4, maxRows: 5 },
        maxlength: 60,
      },
    },
  ],
  formRules: {
    permissionName: [
      {
        required: true,
        message: '请输入权限名称',
      },
      {
        min: 2,
        max: 30,
        message: '权限名称在 2 ~ 30 个字符之间',
        trigger: 'change',
      },
    ],
    permissionDescribe: [
      {
        required: true,
        message: '请输入权限描述',
      },
      {
        min: 5,
        max: 60,
        message: '权限描述在 5 ~ 60 个字符之间',
        trigger: 'change',
      },
    ],
    menuId: [
      {
        required: true,
        message: '请选择对应菜单编号',
      },
    ],
    permissionRemark: [
      {
        min: 5,
        max: 60,
        message: '权限说明在 5 ~ 60 个字符之间',
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

export const rolePermissionDetailFormConfig: IForm = {
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: '角色权限编号',
      placeholder: '系统自动生成',
      otherOptions: {
        disabled: true,
      },
    },
    {
      field: 'roleId',
      type: 'select',
      label: '角色编号',
      placeholder: '请选择角色编号',
      options: [],
    },
    {
      field: 'permissionId',
      type: 'custom',
      label: '权限编号',
      placeholder: '请选择权限编号',
    },
  ],
  formRules: {
    roleId: [
      {
        required: true,
        message: '请选择角色编号',
      },
    ],
    permissionId: [
      {
        required: true,
        message: '请选择权限编号',
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
