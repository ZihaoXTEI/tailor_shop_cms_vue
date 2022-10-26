import { IForm } from '@/base-ui/my-form'

export const modalFormConfig: IForm = {
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
      field: 'fabricId',
      type: 'select',
      label: '布料编号',
      placeholder: '请选择布料编号',
      options: [],
      otherOptions: {
        showSearch: true,
        filterOption: (input: string, option: any) => {
          return option.label.includes(input)
        },
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
    fabricId: [
      {
        required: true,
        message: '请选择布料编号',
      },
    ],
    customerId: [
      {
        required: true,
        message: '请选择顾客编号',
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
