import { AllowClearProps, InputProps } from "./Input.types";
import React, { ReactElement, ReactNode, useRef, useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Icon from "../Icon/Icon";
import classNames from "classnames";

const Input = React.forwardRef<HTMLDivElement, InputProps>(
  ({ id, size, message, viewOnly, status, bordered, suffix, allowClear, style, textAlign, readOnlyValue, ...props }, ref) => {
    const [hovered, setHovered] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const wrapperClassNames = classNames(
      [
        "flex text-sm",
        "pt-1 pl-3 pr-3",
        "outline-0 rounded",
        "shadow-[0_0_0_1px_rgba(0,0,0,0.10)]",
        "focus-within:border-b-2 focus-within:border-b-primary-900 focus-within:pb-2px",
      ],
      {
        "bg-white": !props.disabled,
        "h-6": size === "small",
        "h-8": size === "middle",
        "h-11": size === "large",
        "border-b-2 border-b-danger-900 pb-2px": status === "error",
        "border-b-2 border-b-green-800 pb-2px": status === "success",
        "bg-warning-30 pb-4px": status === "warning",
        "pb-4px": !status,
        "bg-dark-10 text-dark-35": props.disabled,
        "shadow-none border-b-1px border-b-black-10 rounded-none": viewOnly,
        "shadow-none": bordered === false,
        "focus-within:border-b-danger-900": status === "error",
      }
    );
    const inputClassNames = classNames(["w-full outline-0 border-none mr-1 placeholder:leading-24px"], {
      "text-danger-900": status === "error",
      "bg-warning-30": status === "warning",
      "disabled:bg-white": viewOnly,
      "text-right": textAlign === "right",
    });
    const allowClearClassNames = ["items-center justify-center"];
    const messageClassNames = classNames(["text-xs"], {
      "text-danger-900": status === "error",
    });

    if (allowClear) {
      if (((props.value && props.value !== "") || (props.defaultValue && props.defaultValue !== "")) && hovered)
        allowClearClassNames.push("opacity-100 pointer-events-auto");
      else allowClearClassNames.push("opacity-0 pointer-events-none");
    }

    const allowClearClassName = allowClearClassNames.join(" ");

    const handleMouseEnter = () => setHovered(true);

    const handleMouseLeave = () => setHovered(false);

    return (
      <div ref={ref}>
        <div className={wrapperClassNames} style={style} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <input ref={inputRef} id={id} {...props} disabled={props.disabled || viewOnly} className={inputClassNames} readOnly={readOnlyValue} />
          <AllowClear
            id={id}
            allowClear={props.disabled || viewOnly ? false : allowClear}
            inputRef={inputRef}
            onChange={props.onChange}
            className={allowClearClassName}
          />
          <Suffix>{suffix}</Suffix>
        </div>
        <ErrorMessage status={status} message={message} className={messageClassNames} />
      </div>
    );
  }
);

const Suffix = (props: { children: ReactNode }): React.ReactElement | null => {
  if (props.children) {
    return (
      <label className="items-center justify-center" style={{ display: "flex", height: "100%" }}>
        {props.children}
      </label>
    );
  } else return null;
};

const AllowClear = ({ id, allowClear, className, onChange, inputRef }: AllowClearProps): ReactElement | null => {
  if (allowClear) {
    const onClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      if (inputRef && inputRef.current) {
        inputRef.current.value = "";
        const currentTarget = inputRef.current.cloneNode(true) as HTMLInputElement;

        const event = Object.create(e, {
          target: { value: currentTarget },
          currentTarget: { value: currentTarget },
        });

        onChange && onChange(event as React.ChangeEvent<HTMLInputElement>);
      }
    };

    return (
      <button
        type="button"
        className={className}
        style={{ display: "flex", height: "100%" }}
        data-testid={`allowClear${id || ""}`}
        id={`allowClear${id}`}
        onClick={onClick}
      >
        {typeof allowClear == "boolean" ? <Icon name="close" size="text-16px" /> : allowClear.clearIcon}
      </button>
    );
  } else return null;
};

Input.defaultProps = {
  size: "middle",
};

export default Input;
