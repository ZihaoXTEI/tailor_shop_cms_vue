import { ITable } from '../../../../../base-ui/my-table/src/type'

export const permissionContentTableConfig: ITable = {
  tabelConfig: {
    childrenColumnName: 'childPermissionList',
    hiddenPagination: true,
  },
  tableColumns: [
    {
      title: '权限编号',
      dataIndex: 'id',
      align: 'center',
    },
    {
      title: '权限名称',
      dataIndex: 'permissionName',
      align: 'center',
    },
    {
      title: '权限描述',
      dataIndex: 'permissionDescribe',
      align: 'center',
    },
    {
      title: '权限说明',
      dataIndex: 'permissionRemark',
      align: 'center',
    },
    {
      title: '父级权限编号',
      dataIndex: 'parentId',
      align: 'center',
    },
    {
      title: '对应菜单编号',
      dataIndex: 'menuId',
      align: 'center',
    },
    {
      title: '权限状态',
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

export const rolePermissionContentTableConfig: ITable = {
  tableColumns: [
    {
      title: '角色权限编号',
      dataIndex: 'id',
      align: 'center',
    },
    {
      title: '角色编号',
      dataIndex: 'roleId',
      align: 'center',
    },
    {
      title: '权限编号',
      dataIndex: 'permissionId',
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
