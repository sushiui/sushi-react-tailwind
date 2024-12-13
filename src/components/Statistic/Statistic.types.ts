import { CSSProperties, ReactNode } from "react";

export type Formatter = (value?: number | string, config?: FormatConfig) => ReactNode;
export interface StatisticProps extends FormatConfig {
  loading?: boolean;
  formatter?: Formatter;
  prefix?: ReactNode;
  suffix?: ReactNode;
  title?: ReactNode;
  value?: number | string;
  valueStyle?: CSSProperties;
  valueRender?: (node: React.ReactNode) => ReactNode;
}

export interface FormatConfig {
  decimalSeparator?: string;
  groupSeparator?: string;
  precision?: number;
}
