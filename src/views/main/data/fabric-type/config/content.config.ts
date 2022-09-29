import { ITable } from '../../../../../base-ui/my-table/src/type'

export const contentTableConfig: ITable = {
  tableColumns: [
    {
      title: '布料类型编号',
      dataIndex: 'id',
    },
    {
      title: '布料类型名称',
      dataIndex: 'fabrictypeName',
    },
    {
      title: '布料类型说明',
      dataIndex: 'fabrictypeRemark',
      align: 'center',
    },
    {
      title: '布料类型状态',
      dataIndex: 'status',
      slotName: 'status',
      align: 'center',
    },
    {
      title: '创建时间',
      dataIndex: 'createAt',
      slotName: 'createAt',
    },
    {
      title: '修改时间',
      dataIndex: 'updateAt',
      slotName: 'updateAt',
    },
    {
      title: '操作',
      dataIndex: 'action',
      slotName: 'action',
      fixed: 'right',
      width: 160,
    },
  ],
}
