import { ITable } from '../../../../../base-ui/my-table/src/type'

export const contentTableConfig: ITable = {
  tableColumns: [
    {
      title: '布料入库编号',
      dataIndex: 'id',
    },
    {
      title: '布料名称',
      dataIndex: 'fabric',
      slotName: 'fabric',
      align: 'center',
    },
    {
      title: '入库长度',
      dataIndex: 'inboundLength',
      align: 'center',
    },
    {
      title: '入库价格',
      dataIndex: 'inboundPrice',
      align: 'center',
    },
    {
      title: '入库日期',
      dataIndex: 'inboundDate',
      align: 'center',
    },
    {
      title: '供应商',
      dataIndex: 'supplierName',
      align: 'center',
    },
    {
      title: '入库职工',
      dataIndex: 'staffName',
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
      dataIndex: 'detail',
      slotName: 'detail',
      fixed: 'right',
      width: 160,
      align: 'center',
    },
  ],
}
