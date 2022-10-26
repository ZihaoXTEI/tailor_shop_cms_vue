import { ITable } from '../../../../../base-ui/my-table/src/type'

export const contentTableConfig: ITable = {
  tableColumns: [
    {
      title: '员工编号',
      dataIndex: 'userId',
    },
    {
      title: '顾客姓名',
      dataIndex: 'customerName',
    },
    {
      title: '登录昵称',
      dataIndex: 'nickname',
    },
    {
      title: '顾客性别',
      dataIndex: 'customerGender',
      slotName: 'gender',
      align: 'center',
    },
    {
      title: '顾客联系电话',
      dataIndex: 'customerPhone',
      slotName: 'phone',
    },
    {
      title: '顾客住址',
      dataIndex: 'customerAddress',
    },
    {
      title: '头像',
      dataIndex: 'avatar',
    },
    {
      title: '顾客账号状态',
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
