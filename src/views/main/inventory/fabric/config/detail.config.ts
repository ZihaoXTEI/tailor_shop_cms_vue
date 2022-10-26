import { IForm } from '@/base-ui/my-form'
import { FabricWidth, Gender, Season } from '../../../../../types/entityType'

export const detailFormConfig: IForm = {
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
      field: 'fabricName',
      type: 'input',
      label: '布料名称',
      placeholder: '请输入布料名称',
    },
    {
      field: 'fabricTypeId',
      type: 'select',
      label: '布料类型',
      placeholder: '请选择布料类型',
      options: [],
      otherOptions: {
        showSearch: true,
        filterOption: (input: string, option: any) => {
          return option.label.includes(input)
        },
      },
    },
    {
      field: 'fabricPrice',
      type: 'inputnumber',
      label: '布料价格',
      placeholder: '请输入布料价格',
      otherOptions: {
        min: 0,
        max: 1000,
      },
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
      field: 'fabricFeature',
      type: 'textarea',
      label: '布料特性',
      placeholder: '请填写布料特性（最多 60 个字符）',
      otherOptions: {
        autoSize: { minRows: 2, maxRows: 8 },
        maxlength: 80,
      },
    },
    {
      field: 'fabricImageList',
      type: 'custom',
      label: '布料图片',
    },
  ],
  formRules: {},

  formLayout: {
    labelAlign: 'left',
    labelCol: { span: 5 },
    wrapperCol: { span: 10 },
  },

  // rowLayout: {
  //   justify: 'center',
  // },

  colLayout: {
    span: 24,
  },
}
