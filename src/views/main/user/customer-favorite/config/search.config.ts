import { IForm } from '@/base-ui/my-form'

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: '编号',
      placeholder: '请输入编号',
    },
    {
      field: 'fabricId',
      type: 'input',
      label: '布料编号',
      placeholder: '请输入布料编号',
    },
    {
      field: 'customerId',
      type: 'input',
      label: '顾客编号',
      placeholder: '请输入顾客编号',
    },
  ],
}
