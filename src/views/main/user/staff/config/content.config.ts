import { ITable } from '../../../../../base-ui/my-table/src/type'

export const contentTableConfig: ITable = {
  tableColumns: [
    {
      title: '职员编号',
      dataIndex: 'userId',
    },
    {
      title: '职员姓名',
      dataIndex: 'staffName',
    },
    {
      title: '登录昵称',
      dataIndex: 'nickname',
    },
    {
      title: '职员性别',
      dataIndex: 'staffGender',
      slotName: 'gender',
      align: 'center',
    },
    {
      title: '职员每月工资',
      dataIndex: 'staffSalary',
    },
    {
      title: '职员入职时间',
      dataIndex: 'staffEntrydate',
    },
    {
      title: '职员联系电话',
      dataIndex: 'staffPhone',
      slotName: 'phone',
    },
    {
      title: '职员住址',
      dataIndex: 'staffAddress',
    },
    {
      title: '头像',
      dataIndex: 'avatar',
    },
    {
      title: '职员账号状态',
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
