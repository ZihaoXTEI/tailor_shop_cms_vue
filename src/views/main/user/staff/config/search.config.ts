import { IForm } from '@/base-ui/my-form'
import { Gender } from '../../../../../types/entityType'

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'userId',
      type: 'input',
      label: '职员编号',
      placeholder: '请输入职员编号',
    },
    {
      field: 'staffName',
      type: 'input',
      label: '职员姓名',
      placeholder: '请输入职员姓名',
    },
    {
      field: 'staffGender',
      type: 'radio',
      label: '职员性别',
      placeholder: '请选择职员性别',
      options: [
        { label: '男', value: Gender.MALE },
        { label: '女', value: Gender.FEMALE },
      ],
    },
    {
      field: 'staffSalary',
      type: 'inputnumber',
      label: '职员工资',
      otherOptions: {
        min: 0,
        max: 100000,
        defaultValue: 1,
        addonAfter: '¥ 以上',
      },
    },
    {
      field: 'staffPhone',
      type: 'input',
      label: '职员电话',
      placeholder: '请输入职员电话',
    },
    {
      field: 'staffAddress',
      type: 'input',
      label: '职员住址',
      placeholder: '请输入职员住址',
    },
  ],
}
