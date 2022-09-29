import { IForm } from '@/base-ui/my-form'
import { Gender, Season } from '../../../../../types/entityType'

export const modalFormConfig: IForm = {
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: '服装类型编号',
      placeholder: '系统自动生成',
      otherOptions: {
        disabled: true,
      },
    },
    {
      field: 'clothtypeName',
      type: 'input',
      label: '服装类型名称',
      placeholder: '请输入服装类型名称',
    },
    {
      field: 'clothtypeSeason',
      type: 'select',
      label: '服装适合季节',
      placeholder: '请选择服装适合季节',
      options: [
        { label: '春天', value: Season.SPRING },
        { label: '夏天', value: Season.SUMMER },
        { label: '秋天', value: Season.AUTUMN },
        { label: '冬天', value: Season.WINTER },
      ],
    },
    {
      field: 'clothtypeGender',
      type: 'radio',
      label: '服装适合性别',
      placeholder: '请选择服装适合性别',
      options: [
        { label: '男', value: Gender.MALE },
        { label: '女', value: Gender.FEMALE },
        { label: '中性', value: Gender.BOTH },
      ],
    },
    {
      field: 'clothtypeRemark',
      type: 'textarea',
      label: '服装类型说明',
      placeholder: '请填写服装类型说明（最多 64 个字符）',
      otherOptions: {
        autoSize: { minRows: 2, maxRows: 5 },
        maxlength: 64,
      },
    },
    {
      label: '衫长',
      field: 'shirtLength',
      type: 'switch',
    },
    {
      label: '胸围',
      field: 'bust',
      type: 'switch',
    },
    {
      label: '肩宽',
      field: 'shoulderWidth',
      type: 'switch',
    },
    {
      label: '袖长',
      field: 'sleeveLength',
      type: 'switch',
    },
    {
      label: '袖口',
      field: 'cuff',
      type: 'switch',
    },
    {
      label: '领围',
      field: 'neckWidth',
      type: 'switch',
    },
    {
      label: '胸宽',
      field: 'chestWidth',
      type: 'switch',
    },
    {
      label: '背宽',
      field: 'backWidth',
      type: 'switch',
    },
    {
      label: '中腰围',
      field: 'middleWaistline',
      type: 'switch',
    },
    {
      label: '前腰长',
      field: 'anteriorWaistLength',
      type: 'switch',
    },
    {
      label: '后腰长',
      field: 'backWaistLength',
      type: 'switch',
    },
    {
      label: '裤长',
      field: 'outseam',
      type: 'switch',
    },
    {
      label: '臀围',
      field: 'hipline',
      type: 'switch',
    },
    {
      label: '腰围',
      field: 'waistline',
      type: 'switch',
    },
    {
      label: '裤脚',
      field: 'legWidth',
      type: 'switch',
    },
    {
      label: '裙长',
      field: 'skirtLength',
      type: 'switch',
    },
  ],
  formRules: {
    clothtypeName: [
      {
        required: true,
        message: '请输入服装类型名称',
      },
      {
        min: 2,
        max: 32,
        message: '服装类型名称在 2 ~ 32 个字符之间',
        trigger: 'blur',
      },
    ],
    clothtypeSeason: [
      {
        required: true,
        message: '请选择服装适合季节',
      },
    ],
    clothtypeGender: [
      {
        required: true,
        message: '请选择服装适合性别',
      },
    ],
  },

  rowLayout: {
    justify: 'start',
  },

  colLayout: {
    span: 24,
  },
}
