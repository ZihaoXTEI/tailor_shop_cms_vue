import { ITable } from '../../../../../base-ui/my-table/src/type'

export const roleContentTableConfig: ITable = {
  tabelConfig: {
    hiddenPagination: true,
  },
  tableColumns: [
    {
      title: '角色编号',
      dataIndex: 'id',
      align: 'center',
    },
    {
      title: '角色名称',
      dataIndex: 'roleName',
      align: 'center',
    },
    {
      title: '角色说明',
      dataIndex: 'roleRemark',
      align: 'center',
    },
    {
      title: '角色状态',
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
      dataIndex: 'detail',
      slotName: 'detail',
      align: 'center',
      fixed: 'right',
      width: 100,
    },
  ],
}

export const userRoleContentTableConfig: ITable = {
  tableColumns: [
    {
      title: '用户角色编号',
      dataIndex: 'id',
      align: 'center',
    },
    {
      title: '角色编号',
      dataIndex: 'roleId',
      align: 'center',
    },
    {
      title: '用户编号',
      dataIndex: 'userId',
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
      align: 'center',
      fixed: 'right',
      width: 100,
    },
  ],
}
