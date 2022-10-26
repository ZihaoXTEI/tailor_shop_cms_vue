import { IForm } from '@/base-ui/my-form'
import dayjs, { Dayjs } from 'dayjs'

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: '布料库存编号',
      placeholder: '请输入布料编号',
    },
    {
      field: 'fabricId',
      type: 'select',
      label: '布料名称',
      placeholder: '请输入供布料名称',
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
      type: 'inputrange',
      label: '入库长度',
      placeholder: '请输入入库长度',
      otherOptions: {
        min: 0,
        max: 100000,
        addonAfter: '厘米',
      },
    },
    {
      field: 'inboundDate',
      type: 'rangepicker',
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
}
