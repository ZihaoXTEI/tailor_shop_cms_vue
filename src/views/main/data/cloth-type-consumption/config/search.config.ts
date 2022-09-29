import { IForm } from '@/base-ui/my-form'
import { FabricWidth } from '../../../../../types/entityType'

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: '服装类型用料编号',
      placeholder: '请输入服装类型用料编号',
    },
    {
      field: 'clothtypeName',
      type: 'input',
      label: '服装类型名称',
      placeholder: '请输入服装类型名称',
    },
    {
      field: 'fabricWidth',
      type: 'select',
      label: '布料幅宽',
      placeholder: '请选择布料幅宽',
      options: [
        { label: '76CM', value: FabricWidth.FW76 },
        { label: '90CM', value: FabricWidth.FW90 },
        { label: '120CM', value: FabricWidth.FW120 },
        { label: '140CM', value: FabricWidth.FW140 },
        { label: '160CM', value: FabricWidth.FW160 },
      ],
    },
  ],
}
