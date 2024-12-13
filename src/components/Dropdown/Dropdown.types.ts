import { BaseOptionType, DefaultOptionType, SelectProps } from "rc-select/lib/Select";
import { JSXElementConstructor, ReactElement, ReactNode } from "react";

export type DropdownSize = "small" | "middle" | "large";
export type DropdownTextAlign = "left" | "right";
export type DropdownStatus = "error" | "warning";

export interface DropdownOption {
  label: string;
  value: string | number | null;
}

export interface DropdownProps<ValueType = any, OptionType extends BaseOptionType = DefaultOptionType> {
  bordered?: boolean;
  defaultValue?: any;
  disabled?: boolean;
  ellipsis?: boolean;
  id?: string;
  listHeight?: number;
  message?: string;
  name?: string;
  options?: DropdownOption[];
  placeholder?: ReactNode;
  showArrow?: boolean;
  size?: DropdownSize;
  status?: DropdownStatus;
  value?: ValueType | null;
  textAlign?: DropdownTextAlign;
  showSearch?: boolean;
  dropdownStyle?: React.CSSProperties;
  dropdownRender?:
    | ((
        menu: ReactElement<ValueType, string | JSXElementConstructor<ValueType>>
      ) => ReactElement<ValueType, string | JSXElementConstructor<ValueType>>)
    | undefined;
  optionFilterProp?: string;
  optionLabelProp?: string;
  getPopupContainer?: () => HTMLElement;
  onChange?: (value: ValueType, option: OptionType | OptionType[]) => void;
  allowClear?: boolean | { clearIcon: ReactNode };
  children?: ReactNode;
  notFoundContent?: ReactNode;
}
