import { IForm } from '@/base-ui/my-form'
import dayjs, { Dayjs } from 'dayjs'

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
      field: 'fabricId',
      type: 'select',
      label: '布料名称',
      placeholder: '请选择供布料名称',
      options: [],
      otherOptions: {
        showSearch: true,
        filterOption: (input: string, option: any) => {
          return option.label.includes(input)
        },
      },
    },
    {
      field: 'inboundLength',
      type: 'inputnumber',
      label: '入库长度',
      placeholder: '请输入布料入库长度',
      otherOptions: {
        min: 0,
        max: 100000,
        addonAfter: '厘米',
      },
    },
    {
      field: 'inboundPrice',
      type: 'inputnumber',
      label: '购入价格',
      placeholder: '请输入布料购入价格',
      otherOptions: {
        min: 0,
        max: 100000,
        addonAfter: '¥',
      },
    },
    {
      field: 'inboundDate',
      type: 'datepicker',
      label: '入库日期',
      placeholder: '请选择入库日期',
      otherOptions: {
        valueFormat: 'YYYY/MM/DD',
        disabledDate: (current: Dayjs) => {
          // 只能选择今天及之前的日期
          return current && current > dayjs().endOf('day')
        },
      },
    },
    {
      field: 'supplierId',
      type: 'select',
      label: '供应商名称',
      placeholder: '请选择供应商',
      options: [],
      otherOptions: {
        showSearch: true,
        filterOption: (input: string, option: any) => {
          return option.label.includes(input)
        },
      },
    },
    {
      field: 'inboundReceiver',
      type: 'select',
      label: '职工姓名',
      placeholder: '请选择职工姓名',
      options: [],
      otherOptions: {
        showSearch: true,
        filterOption: (input: string, option: any) => {
          return option.label.includes(input)
        },
      },
    },
  ],
  formRules: {},

  formLayout: {
    labelAlign: 'left',
    labelCol: { span: 5 },
    wrapperCol: { span: 10 },
  },

  colLayout: {
    span: 24,
  },
}
