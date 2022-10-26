import { IForm } from '@/base-ui/my-form'

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: '布料库存编号',
      placeholder: '请输入布料编号',
    },
    {
      field: 'fabricName',
      type: 'input',
      label: '布料名称',
      placeholder: '请输入供布料名称',
    },
    {
      field: 'inventory',
      type: 'inputrange',
      label: '库存量',
      placeholder: '请输入库存量',
      otherOptions: {
        min: 0,
        max: 100000,
        addonAfter: '厘米',
      },
    },
  ],
}
