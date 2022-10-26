import { IForm } from '@/base-ui/my-form'
import { FabricCategory } from '../../../../../types/entityType'

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
    {
      field: 'fabricCategory',
      type: 'select',
      label: '布料种类',
      placeholder: '请选择布料种类',
      options: [
        { label: '面料', value: FabricCategory.SHELL_FABRIC },
        { label: '里料', value: FabricCategory.LINING },
        { label: '絮填料', value: FabricCategory.PADDING },
        { label: '衬料', value: FabricCategory.INTERMASS },
      ],
    },
  ],
}
