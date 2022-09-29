import { IForm } from '@/base-ui/my-form'

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: '布料类型编号',
      placeholder: '请输入布料类型编号',
    },
    {
      field: 'fabrictypeName',
      type: 'input',
      label: '布料类型名称',
      placeholder: '请输入布料类型名称',
    },
  ],
}
