import type {
  ColumnGroupType,
  ColumnType,
} from 'ant-design-vue/es/table/interface'
import { DefaultRecordType } from 'ant-design-vue/es/vc-table/interface'

export interface ITable {
  tableColumns: MyColumnsType
  // tableDataSource: Array<Object>[]
}

export declare type MyColumnsType<RecordType = DefaultRecordType> =
  IMyColumnType<RecordType>[]

// export declare type ColumnsType<RecordType = DefaultRecordType> = (
//   | ColumnGroupType<RecordType>
//   | ColumnType<RecordType>
// )[]

interface IMyColumnType<RecordType = DefaultRecordType> extends ColumnType {
  slotName?: string
}
