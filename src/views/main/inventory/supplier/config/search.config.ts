import { IForm } from '@/base-ui/my-form'

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: '供应商编号',
      placeholder: '请输入供应商编号',
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
    },
    {
      field: 'supplierAddress',
      type: 'input',
      label: '供应商地址',
      placeholder: '请输入供应商地址',
    },
  ],
}
