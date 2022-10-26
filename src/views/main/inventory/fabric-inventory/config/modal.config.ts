import { IForm } from '@/base-ui/my-form'

export const modalFormConfig: IForm = {
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: '布料编号',
      placeholder: '系统自动生成',
      otherOptions: {
        disabled: true,
      },
    },
    {
      field: 'fabricId',
      type: 'select',
      label: '布料名称',
      placeholder: '请选择布料',
      options: [],
      otherOptions: {
        showSearch: true,
        filterOption: (input: string, option: any) => {
          return option.label.includes(input)
        },
      },
    },
    {
      field: 'inventory',
      type: 'inputnumber',
      label: '库存量',
      placeholder: '请输入库存量',
      otherOptions: {
        min: 0,
        max: 100000,
      },
    },
    {
      field: 'position',
      type: 'input',
      label: '布料库存位置',
      placeholder: '请输入布料库存位置',
    },
    {
      field: 'preVolume',
      type: 'inputnumber',
      label: '布料预定用量',
      placeholder: '请输入布料预定用量',
      otherOptions: {
        min: 0,
        max: 100000,
      },
    },
  ],
  formRules: {},

  rowLayout: {
    justify: 'center',
  },

  colLayout: {
    span: 24,
  },
}
