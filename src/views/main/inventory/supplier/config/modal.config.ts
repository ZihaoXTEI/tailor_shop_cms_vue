import { IForm } from '@/base-ui/my-form'

export const modalFormConfig: IForm = {
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: '供应商编号',
      placeholder: '系统自动生成',
      otherOptions: {
        disabled: true,
      },
    },
    {
      field: 'supplierName',
      type: 'input',
      label: '供应商名称',
      placeholder: '请输入供应商名称',
    },
    {
      field: 'supplierPhone',
      type: 'input',
      label: '供应商电话',
      placeholder: '请输入供应商电话',
      otherOptions: {
        addonBefore: '+86',
      },
    },
    {
      field: 'supplierAddress',
      type: 'input',
      label: '供应商地址',
      placeholder: '请输入供应商地址',
    },
  ],
  formRules: {
    supplierName: [
      {
        required: true,
        message: '请输入供应商名称',
      },
      {
        min: 4,
        max: 32,
        message: '布料类型名称在 4 ~ 32 个字符之间',
        trigger: 'change',
      },
    ],
    supplierAddress: [
      {
        required: true,
        message: '请输入供应商地址',
      },
      {
        min: 6,
        max: 60,
        message: '布料类型名称在 6 ~ 60 个字符之间',
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
