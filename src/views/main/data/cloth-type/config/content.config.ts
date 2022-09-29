import { ITable } from '../../../../../base-ui/my-table/src/type'

export const contentTableConfig: ITable = {
  tableColumns: [
    {
      title: '服装类型编号',
      dataIndex: 'id',
    },
    {
      title: '服装类型名称',
      dataIndex: 'clothtypeName',
    },
    {
      title: '服装适合季节',
      dataIndex: 'clothtypeSeason',
      slotName: 'season',
      align: 'center',
    },
    {
      title: '服装适合性别',
      dataIndex: 'clothtypeGender',
      slotName: 'gender',
      align: 'center',
    },
    {
      title: '服装类型状态',
      dataIndex: 'status',
      slotName: 'status',
      align: 'center',
    },
    // 需要测量人体部位
    {
      title: '衫长',
      dataIndex: 'shirtLength',
      slotName: 'body',
      align: 'center',
    },
    {
      title: '胸围',
      dataIndex: 'bust',
      slotName: 'body',
      align: 'center',
    },
    {
      title: '肩宽',
      dataIndex: 'shoulderWidth',
      slotName: 'body',
      align: 'center',
    },
    {
      title: '袖长',
      dataIndex: 'sleeveLength',
      slotName: 'body',
      align: 'center',
    },
    {
      title: '袖口',
      dataIndex: 'cuff',
      slotName: 'body',
      align: 'center',
    },
    {
      title: '领围',
      dataIndex: 'neckWidth',
      slotName: 'body',
      align: 'center',
    },
    {
      title: '胸宽',
      dataIndex: 'chestWidth',
      slotName: 'body',
      align: 'center',
    },
    {
      title: '背宽',
      dataIndex: 'backWidth',
      slotName: 'body',
      align: 'center',
    },
    {
      title: '中腰围',
      dataIndex: 'middleWaistline',
      slotName: 'body',
      align: 'center',
    },
    {
      title: '前腰长',
      dataIndex: 'anteriorWaistLength',
      slotName: 'body',
      align: 'center',
    },
    {
      title: '后腰长',
      dataIndex: 'backWaistLength',
      slotName: 'body',
      align: 'center',
    },
    {
      title: '裤长',
      dataIndex: 'outseam',
      slotName: 'body',
      align: 'center',
    },
    {
      title: '臀围',
      dataIndex: 'hipline',
      slotName: 'body',
      align: 'center',
    },
    {
      title: '腰围',
      dataIndex: 'waistline',
      slotName: 'body',
      align: 'center',
    },
    {
      title: '裤脚',
      dataIndex: 'legWidth',
      slotName: 'body',
      align: 'center',
    },
    {
      title: '裙长',
      dataIndex: 'skirtLength',
      slotName: 'body',
      align: 'center',
    },
    {
      title: '服装类型说明',
      dataIndex: 'clothtypeRemark',
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
