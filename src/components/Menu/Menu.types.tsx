import { RenderIconType } from "rc-menu/lib/interface";

export interface MenuItemSelect {
  key: string;
  selectedKeys: string[];
  keyPath: string[];
}
export interface MenuItemDeselect extends MenuItemSelect {}

export interface MenuItemProps {
  label?: React.ReactNode;
  children?: MenuItemProps[];
  disabled?: boolean;
  key: string;
  className?: string;
  style?: React.CSSProperties;
  // >>>>> Icon
  itemIcon?: RenderIconType;
}

export interface MenuProps {
  className?: string;
  defaultOpenKeys?: string[];
  defaultSelectedKeys?: string[];
  selectedKeys?: string[];
  openKeys?: string[];
  multiple?: boolean;
  items: MenuItemProps[];
  onOpenChange?: (openKeys: string[]) => void;
  onSelect?: (data: MenuItemSelect) => void;
  onDeselect?: (data: MenuItemDeselect) => void;
  collapsed?: boolean;
  parentItemBold?: boolean;
}
