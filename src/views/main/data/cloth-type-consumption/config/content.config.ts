import { ITable } from '../../../../../base-ui/my-table/src/type'

export const contentTableConfig: ITable = {
  tableColumns: [
    {
      title: '服装类型用料编号',
      dataIndex: 'id',
    },
    {
      title: '服装类型名称',
      dataIndex: 'clothtypeName',
    },
    {
      title: '布料幅宽',
      dataIndex: 'fabricWidth',
      align: 'center',
    },
    {
      title: '预留值',
      dataIndex: 'reservedValue',
      align: 'center',
    },
    {
      title: '服装类型状态',
      dataIndex: 'status',
      slotName: 'status',
      align: 'center',
    },
    {
      title: '衫长',
      dataIndex: 'shirtLength',
      align: 'center',
    },
    {
      title: '胸围',
      dataIndex: 'bust',
      align: 'center',
    },
    {
      title: '肩宽',
      dataIndex: 'shoulderWidth',
      align: 'center',
    },
    {
      title: '袖长',
      dataIndex: 'sleeveLength',
      align: 'center',
    },
    {
      title: '袖口',
      dataIndex: 'cuff',
      align: 'center',
    },
    {
      title: '领围',
      dataIndex: 'neckWidth',
      align: 'center',
    },
    {
      title: '胸宽',
      dataIndex: 'chestWidth',
      align: 'center',
    },
    {
      title: '背宽',
      dataIndex: 'backWidth',
      align: 'center',
    },
    {
      title: '中腰围',
      dataIndex: 'middleWaistline',
      align: 'center',
    },
    {
      title: '前腰长',
      dataIndex: 'anteriorWaistLength',
      align: 'center',
    },
    {
      title: '后腰长',
      dataIndex: 'backWaistLength',
      align: 'center',
    },
    {
      title: '裤长',
      dataIndex: 'outseam',
      align: 'center',
    },
    {
      title: '臀围',
      dataIndex: 'hipline',
      align: 'center',
    },
    {
      title: '腰围',
      dataIndex: 'waistline',
      align: 'center',
    },
    {
      title: '裤脚',
      dataIndex: 'legWidth',
      align: 'center',
    },
    {
      title: '裙长',
      dataIndex: 'skirtLength',
      align: 'center',
    },
    {
      title: '服装类型用料备注',
      dataIndex: 'remark',
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
