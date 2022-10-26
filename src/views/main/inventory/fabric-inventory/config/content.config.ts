import { ITable } from '../../../../../base-ui/my-table/src/type'

export const contentTableConfig: ITable = {
  tableColumns: [
    {
      title: '布料库存编号',
      dataIndex: 'id',
    },
    {
      title: '布料名称',
      dataIndex: 'fabric',
      slotName: 'fabric',
    },
    {
      title: '库存量',
      dataIndex: 'inventory',
      align: 'center',
    },
    {
      title: '布料库存位置',
      dataIndex: 'position',
    },
    {
      title: '布料预定用量',
      dataIndex: 'preVolume',
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
