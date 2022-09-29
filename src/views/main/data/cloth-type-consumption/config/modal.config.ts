import { IForm } from '@/base-ui/my-form'
import { FabricWidth } from '../../../../../types/entityType'

export const modalFormConfig: IForm = {
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: '服装类型用料编号',
      placeholder: '系统自动生成',
      otherOptions: {
        disabled: true,
      },
    },
    {
      field: 'clothtypeName',
      type: 'input',
      label: '服装类型名称',
      placeholder: '!请选择服装类型名称!',
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
      field: 'reservedValue',
      type: 'inputnumber',
      label: '预留值',
      placeholder: '请输入预留值',
      otherOptions: {
        min: 0,
        max: 1000,
      },
    },
    {
      field: 'remark',
      type: 'textarea',
      label: '服装类型用料备注',
      placeholder: '请填写服装类型用料备注（最多120个字符）',
      otherOptions: {
        autoSize: { minRows: 2, maxRows: 5 },
        maxlength: 120,
      },
    },
  ],
  formRules: {
    fabricWidth: [
      {
        required: true,
        message: '请选择布料幅宽',
      },
    ],
    reservedValue: [
      {
        required: true,
        message: '请输入预留值',
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
