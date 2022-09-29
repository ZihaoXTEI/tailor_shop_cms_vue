import { ITable } from '../../../../../base-ui/my-table/src/type'

export const contentTableConfig: ITable = {
  tableColumns: [
    {
      title: '供应商编号',
      dataIndex: 'id',
    },
    {
      title: '供应商名称',
      dataIndex: 'supplierName',
    },
    {
      title: '供应商地址',
      dataIndex: 'supplierAddress',
    },
    {
      title: '联系电话',
      dataIndex: 'supplierPhone',
      slotName: 'phone',
    },
    {
      title: '供应商状态',
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
