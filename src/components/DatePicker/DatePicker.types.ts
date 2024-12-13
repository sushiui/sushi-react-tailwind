import { CSSProperties, ReactNode, SyntheticEvent } from "react";

export type DatePickerLocale = "th";
export type DatePickerType = "date" | "month" | "year";
export type DatePickerStatus = "error" | "warning";
export type DatePickerSize = "small" | "middle" | "large";
export interface DatePickerProps {
  allowClear?: boolean | { clearIcon: ReactNode };
  bordered?: boolean;
  disabled?: boolean;
  dateFormat?: string;
  dropdownMode?: "scroll" | "select";
  id?: string;
  locale?: DatePickerLocale;
  onCalendarOpen?: () => void;
  onChange: (date: Date | null, event: SyntheticEvent<any, Event> | undefined) => void;
  onMonthChange?: (date: Date) => void;
  onYearChange?: (date: Date) => void;
  pickerType?: DatePickerType;
  placeholder?: string;
  message?: string;
  selected?: Date | null;
  showYearDropdown?: boolean;
  showMonthDropdown?: boolean;
  size?: DatePickerSize;
  style?: CSSProperties;
  status?: DatePickerStatus;
  suffix?: ReactNode;
  value?: string;
  viewOnly?: boolean;
  name?: string;
  minDate?: Date | null | undefined;
  maxDate?: Date | null | undefined;
}
