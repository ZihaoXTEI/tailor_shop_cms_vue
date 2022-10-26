import { ITable } from '../../../../../base-ui/my-table/src/type'

export const contentTableConfig: ITable = {
  tabelConfig: {
    childrenColumnName: 'childMenuList',
    hiddenPagination: true,
  },
  tableColumns: [
    {
      title: '菜单编号',
      dataIndex: 'id',
      align: 'center',
    },
    {
      title: '菜单名称',
      dataIndex: 'menuName',
      align: 'center',
    },
    {
      title: '菜单路径',
      dataIndex: 'url',
      align: 'center',
    },
    {
      title: '菜单样式',
      dataIndex: 'style',
      align: 'center',
    },
    {
      title: '页面文件名称',
      dataIndex: 'viewName',
      align: 'center',
    },
    {
      title: '菜单类型',
      dataIndex: 'menuType',
      align: 'center',
    },
    {
      title: '菜单级别',
      dataIndex: 'menuLevel',
      align: 'center',
    },
    {
      title: '菜单排序',
      dataIndex: 'sort',
      align: 'center',
    },
    {
      title: '菜单状态',
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
