import { IForm } from '@/base-ui/my-form'
import { Gender } from '../../../../../types/entityType'

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'userId',
      type: 'input',
      label: '顾客编号',
      placeholder: '请输入顾客编号',
    },
    {
      field: 'customerName',
      type: 'input',
      label: '顾客姓名',
      placeholder: '请输入顾客姓名',
    },
    {
      field: 'customerGender',
      type: 'radio',
      label: '顾客性别',
      placeholder: '请选择顾客性别',
      options: [
        { label: '男', value: Gender.MALE },
        { label: '女', value: Gender.FEMALE },
      ],
    },
    {
      field: 'customerPhone',
      type: 'input',
      label: '顾客电话',
      placeholder: '请输入顾客联系电话',
    },
    {
      field: 'customerAddress',
      type: 'input',
      label: '顾客住址',
      placeholder: '请输入顾客住址',
    },
  ],
}
