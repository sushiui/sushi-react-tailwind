import Icon from "../Icon/Icon";
import React, { useEffect, useMemo, useState } from "react";
import { DropdownProps } from "./Dropdown.types";
import RcSelect from "rc-select";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import classNames from "classnames";

const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  ({ bordered, disabled, message, size, status, textAlign, ellipsis, showSearch, allowClear: ac, ...props }, ref) => {
    const wrapperClassNames = classNames(["ss-dropdown"], {
      "h-6": ellipsis && size === "small",
      "h-8": ellipsis && size === "middle",
      "h-11": ellipsis && size === "large",
      "ss-dropdown-no-border": !bordered,
      "text-right": textAlign === "right",
      "ss-dropdown-error": status === "error",
      "ss-dropdown-warning": status === "warning",
      "ss-dropdown-no-ellipsis": !ellipsis,
      "ss-dropdown-show-search": showSearch,
    });
    const messageClassNames = classNames(["text-xs"], {
      "text-danger-900": status === "error",
    });
    const [isOpen, setIsOpen] = useState(false);
    const selectRef: any = React.createRef();
    const allowClear = useMemo(() => {
      if (ac === true) {
        return true;
      }
      if (typeof ac === "object" && ac.clearIcon) {
        return true;
      }
      return false;
    }, [ac]);
    const clearIcon = useMemo(() => {
      if (typeof ac === "object" && ac.clearIcon) {
        return ac.clearIcon;
      }
      return undefined;
    }, [ac]);

    useEffect(() => {
      function handleClickOutside(event: any) {
        if (selectRef.current && selectRef.current.contains(event.target) && !disabled) setIsOpen(!isOpen);
        else setIsOpen(false);
      }
      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, [selectRef]);

    const arrowNode = <Icon name={`expand_${isOpen ? "less" : "more"}`} size="text-16px" />;
    return (
      <div ref={ref}>
        <div ref={selectRef} className={wrapperClassNames}>
          <RcSelect
            prefixCls="ss-select"
            placeholder="Please Select"
            inputIcon={arrowNode}
            disabled={disabled}
            showSearch={showSearch}
            {...props}
            allowClear={allowClear}
            clearIcon={clearIcon}
          />
          <div className="ss-select-dropdown ss-select-dropdown-hidden"></div>
        </div>
        <ErrorMessage status={status} message={message} className={messageClassNames} />
      </div>
    );
  }
);

Dropdown.defaultProps = {
  size: "middle",
  bordered: true,
  ellipsis: true,
};

export default Dropdown;
