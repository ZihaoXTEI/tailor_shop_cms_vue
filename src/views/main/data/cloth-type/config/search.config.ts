import { IForm } from '@/base-ui/my-form'
import { Gender, Season } from '../../../../../types/entityType'

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: '服装类型编号',
      placeholder: '请输入服装类型编号',
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
  ],
}
