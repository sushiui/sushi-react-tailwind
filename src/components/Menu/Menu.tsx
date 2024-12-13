import React, { useEffect, useState } from "react";
import RcMenu, { MenuItem, SubMenu } from "rc-menu";
import { MenuProps, MenuItemProps } from "./Menu.types";
import Icon from "../Icon/Icon";
import { MenuRef, RenderIconInfo, RenderIconType, SelectInfo } from "rc-menu/lib/interface";
import classNames from "classnames";

const expandIcon = (props: RenderIconInfo) => {
  return <Icon name="expand_less" className={classNames(props.isOpen ? "rotate-0" : "rotate-180", "transition-transform absolute right-0")} />;
};

const itemIcon = (itemIcon?: RenderIconType) => {
  return (
    <span className="flex justify-center items-center">
      {itemIcon ? itemIcon : <Icon name="circle" type="filled" color="text-black" size="text-5px" />}
    </span>
  );
};

const generateItem = (item: MenuItemProps, selectedKeys: string[], parentItemBold: boolean | undefined) => {
  const iconComp = itemIcon(item.itemIcon);
  const bold = parentItemBold !== undefined && parentItemBold ? "rc-menu-item-bold" : "";
  if (Array.isArray(item.children)) {
    return (
      <SubMenu
        data-testid={"sushi-menu-submenu-" + item.key}
        key={item.key}
        title={
          <>
            {iconComp} {item.label}
          </>
        }
        style={{ padding: undefined }}
        className={classNames(`rounded-sm relative ${bold}`, item.className)}
        disabled={item.disabled}
      >
        {item.children.map((t) => generateItem(t, selectedKeys, false))}
      </SubMenu>
    );
  }
  const isSelected = selectedKeys.includes(item.key);
  const style: React.CSSProperties = { padding: "6px 8px", ...(item.style || {}) };

  return (
    <MenuItem
      data-testid={"sushi-menu-item-" + item.key}
      key={item.key}
      style={style}
      className={classNames(
        `rounded-sm relative cursor-pointer ${bold}`,
        isSelected ? "ss-selected after:ss-selected-after" : undefined,
        item.className
      )}
      disabled={item.disabled}
    >
      {iconComp} {item.label}
    </MenuItem>
  );
};

const Menu = React.forwardRef<MenuRef, MenuProps>(({ items, collapsed, ...props }, menuRef) => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>(props.defaultSelectedKeys || []);

  useEffect(() => {
    if (props.selectedKeys) {
      setSelectedKeys(props.selectedKeys);
    }
  }, [props.selectedKeys]);

  const onSelect = (info: SelectInfo) => {
    setSelectedKeys(info.selectedKeys);
    if (props.onSelect) {
      props.onSelect({ key: info.key, keyPath: info.keyPath, selectedKeys: info.selectedKeys });
    }
  };

  return (
    <RcMenu
      mode="inline"
      ref={menuRef}
      data-testid={"sushi-menu"}
      expandIcon={expandIcon}
      className={classNames("ss-menu flex flex-col gap-1", props.className)}
      defaultOpenKeys={props.defaultOpenKeys}
      defaultSelectedKeys={props.defaultSelectedKeys}
      multiple={props.multiple}
      selectedKeys={props.selectedKeys}
      openKeys={props.openKeys}
      onSelect={onSelect}
      onOpenChange={props.onOpenChange}
      onDeselect={props.onDeselect}
    >
      {items.map((item) => {
        return generateItem(item, selectedKeys, props.parentItemBold);
      })}
    </RcMenu>
  );
});

Menu.defaultProps = {
  multiple: false,
  defaultOpenKeys: [],
};

export default Menu;
