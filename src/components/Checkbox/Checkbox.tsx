import classNames from "classnames";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import React, { CSSProperties, useEffect, useState } from "react";
import { CheckboxProps } from "./Checkbox.types";

const Checkbox = React.forwardRef<HTMLDivElement, CheckboxProps>(({ children, disabled, message, status, ...props }, ref) => {
  const [check, setCheck] = useState(props.checked);
  const wrapperClassNames = classNames(["h-16px w-16px min-h-[16px] min-w-[16px] flex items-center justify-center border rounded-4px mr-4px"], {
    "border-primary-900": !disabled && status !== "error",
    "border-dark-10 bg-dark-10": disabled,
    "bg-primary-900": !disabled && check,
    "border-danger-900": !disabled && status === "error",
    "bg-danger-900": !disabled && status === "error" && check,
    "mt-2px": props.position === "start",
    "mb-2px": props.position === "end",
  });
  const iconStyle = { color: check ? (disabled ? "rgba(0,0,0,0.35)" : "white") : "transparent" };
  const checkboxStyle: CSSProperties = {
    position: "absolute",
    border: "none",
    boxShadow: "none",
    backgroundColor: "transparent",
    appearance: "none",
    backgroundImage: "none",
  };

  useEffect(() => {
    setCheck(props.checked);
  }, [props.checked]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = props;
    if (disabled) {
      return;
    }
    if (!("checked" in props)) {
      setCheck(e.target.checked);
    }
    if (onChange) {
      onChange(e);
    }
  };

  const positionClass = classNames(["flex"], {
    "items-center": props.position === "center",
    "items-start": props.position === "start",
    "items-end": props.position === "end",
  });

  return (
    <div ref={ref}>
      <label className={positionClass}>
        <div className={wrapperClassNames}>
          {check && (
            <span className="text-14px font-bold material-icons-outlined" style={iconStyle}>
              check
            </span>
          )}
          <input {...props} type="checkbox" checked={check} onChange={handleChange} disabled={disabled} style={checkboxStyle} />
        </div>
        {children || ""}
      </label>
      <ErrorMessage status={status} message={message} className="text-xs text-danger-900" />
    </div>
  );
});

Checkbox.defaultProps = {
  position: "center",
};

export default Checkbox;
