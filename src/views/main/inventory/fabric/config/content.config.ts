import { ITable } from '../../../../../base-ui/my-table/src/type'

export const contentTableConfig: ITable = {
  tableColumns: [
    {
      title: '布料编号',
      dataIndex: 'id',
    },
    {
      title: '布料名称',
      dataIndex: 'fabricName',
    },
    {
      title: '布料种类',
      dataIndex: 'fabricCategory',
    },
    {
      title: '布料类型',
      dataIndex: 'fabrictypeName',
    },
    {
      title: '布料幅宽',
      dataIndex: 'fabricWidth',
    },
    {
      title: '布料价格',
      dataIndex: 'fabricPrice',
    },
    {
      title: '布料图片',
      dataIndex: 'fabricImageList',
      slotName: 'images',
    },
    {
      title: '布料适合季节',
      dataIndex: 'fabricSeason',
      slotName: 'season',
      align: 'center',
    },
    {
      title: '布料适合性别',
      dataIndex: 'fabricGender',
      slotName: 'gender',
      align: 'center',
    },
    {
      title: '布料特性',
      dataIndex: 'fabricFeature',
    },
    {
      title: '布料状态',
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
      dataIndex: 'detail',
      slotName: 'detail',
      fixed: 'right',
      width: 100,
    },
  ],
}
