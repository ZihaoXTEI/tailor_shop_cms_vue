import { IForm } from '@/base-ui/my-form'

export const modalFormConfig: IForm = {
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: '布料类型编号',
      placeholder: '系统自动生成',
      otherOptions: {
        disabled: true,
      },
    },
    {
      field: 'fabrictypeName',
      type: 'input',
      label: '布料类型名称',
      placeholder: '请输入布料类型名称',
    },
    {
      field: 'fabrictypeRemark',
      type: 'textarea',
      label: '布料类型说明',
      placeholder: '请填写布料类型说明（最多 64 个字符）',
      otherOptions: {
        autoSize: { minRows: 2, maxRows: 5 },
        maxlength: 64,
      },
    },
  ],
  formRules: {
    fabrictypeName: [
      {
        required: true,
        message: '请输入布料类型名称',
      },
      {
        min: 2,
        max: 24,
        message: '布料类型名称在 2 ~ 24 个字符之间',
        trigger: 'change',
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
