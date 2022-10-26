import { ITable } from '../../../../../base-ui/my-table/src/type'

export const contentTableConfig: ITable = {
  tableColumns: [
    {
      title: '编号',
      dataIndex: 'id',
      align: 'center',
    },
    {
      title: '布料编号',
      dataIndex: 'fabricId',
      align: 'center',
    },
    {
      title: '顾客编号',
      dataIndex: 'customerId',
      align: 'center',
    },
    {
      title: '状态',
      dataIndex: 'status',
      slotName: 'status',
      align: 'center',
    },
    {
      title: '创建时间',
      dataIndex: 'createAt',
      slotName: 'createAt',
      align: 'center',
    },
    {
      title: '修改时间',
      dataIndex: 'updateAt',
      slotName: 'updateAt',
      align: 'center',
    },
    {
      title: '操作',
      dataIndex: 'action',
      slotName: 'action',
      align: 'center',
      fixed: 'right',
      width: 160,
    },
  ],
}
