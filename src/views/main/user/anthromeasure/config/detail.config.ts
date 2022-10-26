import { IForm } from '@/base-ui/my-form'

export const detailFormConfig: IForm = {
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: '编号',
      placeholder: '系统自动生成',
      otherOptions: {
        readonly: true,
      },
    },
    {
      field: 'customerId',
      type: 'select',
      label: '顾客编号',
      placeholder: '请选择顾客编号',
      options: [],
      otherOptions: {
        showSearch: true,
        filterOption: (input: string, option: any) => {
          return option.label.includes(input)
        },
      },
    },
  ],
  formRules: {
    customerId: [
      {
        required: true,
        message: '请选择顾客编号',
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
