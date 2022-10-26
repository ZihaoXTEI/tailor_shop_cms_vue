import type {
  ColumnGroupType,
  ColumnType,
} from 'ant-design-vue/es/table/interface'
import { DefaultRecordType } from 'ant-design-vue/es/vc-table/interface'

export interface ITable {
  tableColumns: IColumnsType
  tabelConfig?: ITableConfig

  // tableDataSource: Array<Object>[]
}

export declare type IColumnsType<RecordType = DefaultRecordType> =
  IMyColumnType<RecordType>[]

// export declare type ColumnsType<RecordType = DefaultRecordType> = (
//   | ColumnGroupType<RecordType>
//   | ColumnType<RecordType>
// )[]

interface IMyColumnType<RecordType = DefaultRecordType> extends ColumnType {
  slotName?: string
}

interface ITableConfig {
  childrenColumnName?: string // 指定树形结构的列名
  hiddenPagination?: boolean // 是否移除分页器
}
