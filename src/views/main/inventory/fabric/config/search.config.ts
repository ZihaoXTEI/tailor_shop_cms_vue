import { IForm } from '@/base-ui/my-form'
import {
  FabricCategory,
  FabricWidth,
  Gender,
  Season,
} from '../../../../../types/entityType'

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: '布料编号',
      placeholder: '请输入布料编号',
    },
    {
      field: 'fabricName',
      type: 'input',
      label: '布料名称',
      placeholder: '请输入供布料名称',
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
    {
      field: 'fabricSeason',
      type: 'select',
      label: '布料适合季节',
      placeholder: '请选择布料适合季节',
      options: [
        { label: '春天', value: Season.SPRING },
        { label: '夏天', value: Season.SUMMER },
        { label: '秋天', value: Season.AUTUMN },
        { label: '冬天', value: Season.WINTER },
      ],
    },
    {
      field: 'fabricGender',
      type: 'radio',
      label: '布料适合性别',
      placeholder: '请选择布料适合性别',
      options: [
        { label: '男', value: Gender.MALE },
        { label: '女', value: Gender.FEMALE },
        { label: '中性', value: Gender.BOTH },
      ],
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
