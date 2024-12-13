import { HTMLAttributes, ReactNode, TdHTMLAttributes } from "react";
import { DefaultRecordType, GetRowKey, RowClassName } from "rc-table/lib/interface";

export type TableSortDirection = "ascend" | "descend";
export type TableStatus = "error";
export interface TableProps<RecordType extends DefaultRecordType | unknown = unknown> {
  columns?: Column<RecordType>[];
  dataSource?: Object[];
  emptyText?: ReactNode;
  id?: string;
  loading?: boolean;
  rowKey?: string | GetRowKey<RecordType>;
  showHeader?: boolean;
  onRow?: (data: any, index?: number) => HTMLAttributes<any> | TdHTMLAttributes<any>;
  rowClassName?: string | RowClassName<RecordType>;
  status?: TableStatus;
}

export interface Column<RecordType extends DefaultRecordType | unknown = unknown> {
  align?: "center" | "left" | "right";
  dataIndex?: string;
  ellipsis?: boolean;
  key?: string;
  render?: (value: any, record: DefaultRecordType, index: number) => ReactNode;
  sorter?: boolean | Sorter<RecordType>;
  title?: ReactNode;
  width?: string | number;
  children?: Column<RecordType>[];
}

export interface Sorter<RecordType extends unknown> {
  compare: (a: RecordType, b: RecordType) => number;
}
