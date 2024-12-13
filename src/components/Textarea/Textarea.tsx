import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { TextAreaProps } from "./Textarea.types";

const initialClasses = () => ["outline-0", "rounded", "align-bottom"]; //py-1.5 pl-3'

const Textarea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      value,
      status,
      disabled,
      readOnly,
      message,
      allowClear,
      defaultValue,
      bordered,
      showCount,
      maxLength,
      onPressEnter,
      onResize,
      autoSize,
      size,
      ...props
    },
    ref
  ): React.ReactElement => {
    const [dataCount, setDataCount] = useState<string>();
    const [textAreaValue, setTextAreaValue] = useState<string | number | readonly string[] | undefined>("");
    const [rows, setRows] = useState<number>(props.rows || 0);
    const textAreaRef = useRef<HTMLTextAreaElement | null>();

    useEffect(() => {
      if (value) {
        onShowCount(value.toString());
        setTextAreaValue(value);
      } else {
        if (defaultValue) {
          onShowCount(defaultValue.toString());
          setTextAreaValue(defaultValue);
        } else {
          onShowCount("");
        }
      }
    }, []);

    useEffect(() => {
      if (typeof autoSize === "boolean" && autoSize) {
        resizeTextarea();
      }
      if (typeof autoSize === "object") {
        calCulateRows();
      }
    }, [textAreaValue]);

    const resizeTextarea = () => {
      if (textAreaRef && textAreaRef.current) {
        textAreaRef.current.style.height = "0px";
        const scrollHeight = textAreaRef.current.scrollHeight;
        textAreaRef.current.style.height = scrollHeight + "px";
      }
    };

    const classNames = initialClasses();
    const wrapperClassNames = ["flex flex-col"];
    const allowClearClass = "material-icons-outlined absolute top-22px right-22px opacity-50 hover:opacity-100 hover:cursor-pointer";

    if (!disabled && !readOnly) {
      if (!status) {
        classNames.push("shadow-10 focus:border-b-2 focus:border-b-primary-900");
      }
      if (status === "error") {
        classNames.push("shadow-10 border-b-2 border-b-danger-900 text-danger-900 pb-0.5");
        wrapperClassNames.push("mb-0");
      }
    }

    if ((disabled && readOnly) || (disabled && !readOnly)) {
      classNames.push("disabled:text-dark-35 disabled:bg-dark-10");
    } else if (readOnly) {
      classNames.push("rounded-none border-b border-b-dark-10");
    }

    if (bordered !== undefined && bordered === false) {
      classNames.splice(0, classNames.length);
      classNames.push("outline-0 rounded-none border-none shodow-none"); // py-1.5 pl-3 ขนาดตาม input
    }

    if (showCount) {
      wrapperClassNames.push(
        "after:content-[attr(data-count)] after:text-dark-45 after:text-right after:pointer-events-none after:whitespace-nowrap"
      );
    }

    if (autoSize) {
      classNames.push("resize-none box-border");
      if (typeof autoSize === "boolean") {
        classNames.push("h-34px max-h-9.0072e15px");
      }
    }

    switch (size) {
      case "small":
        classNames.push("py-0 px-7px");
        break;
      case "large":
        classNames.push("py-6.5px px-11px text-16px");
        break;
      case "middle":
        classNames.push("py-4px px-11px leading-1.5715");
        break;
      default:
        classNames.push("py-4px px-11px leading-1.5715");
        break;
    }

    const onShowCount = (data: string) => {
      if (!showCount) return;
      if (maxLength && maxLength > 0) {
        setDataCount(`${data.length.toString()} / ${maxLength}`);
      } else {
        setDataCount(data.length.toString());
      }
    };

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onShowCount(e.target.value);
      setTextAreaValue(e.target.value);
      props.onChange && props.onChange(e);
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter") {
        onPressEnter && onPressEnter(e);
      }
    };

    const onAllowClear = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      setTextAreaValue("");
      if (textAreaRef && textAreaRef.current) {
        textAreaRef.current.value = "";
        const currentTarget = textAreaRef.current.cloneNode(true) as HTMLTextAreaElement;

        const event = Object.create(e, {
          target: { value: currentTarget },
          currentTarget: { value: currentTarget },
        });

        props.onChange && props.onChange(event as React.ChangeEvent<HTMLTextAreaElement>);
      }
    };

    const getSize = (element: HTMLTextAreaElement) => {
      const { offsetHeight, offsetWidth } = element;
      const size = {
        width: offsetWidth,
        height: offsetHeight,
        offsetHeight,
        offsetWidth,
      };
      return size;
    };

    const onMouseUp = (e: React.MouseEvent<HTMLTextAreaElement>) => {
      const size = getSize(e.target as HTMLTextAreaElement);
      onResize && onResize(size);
    };

    const onMouseDown = (e: React.MouseEvent<HTMLTextAreaElement>) => {
      const size = getSize(e.target as HTMLTextAreaElement);
      onResize && onResize(size);
    };

    const calCulateRows = () => {
      if (typeof autoSize === "boolean") return;
      const textareaLineHeight = 34;
      const { minRows = 0, maxRows = 0 } = autoSize || { minRows: 0, maxRows: 0 };
      if (textAreaRef && textAreaRef.current) {
        const previousRows = textAreaRef.current.rows;
        textAreaRef.current.rows = minRows;
        const currentRows = ~~(textAreaRef.current.scrollHeight / textareaLineHeight);
        if (currentRows === previousRows) {
          textAreaRef.current.rows = currentRows;
        }

        if (currentRows >= maxRows) {
          textAreaRef.current.rows = maxRows;
          textAreaRef.current.scrollTop = textAreaRef.current.scrollHeight;
        }
        setRows(currentRows < maxRows ? currentRows : maxRows);
      }
    };

    const className = classNames.join(" ");
    const wrapperClassName = wrapperClassNames.join(" ");

    return (
      <div className={wrapperClassName} data-count={dataCount}>
        <textarea
          ref={(element) => {
            (textAreaRef as MutableRefObject<HTMLTextAreaElement | null>).current = element;
            if (typeof ref === "function") {
              ref(element);
            } else if (ref) {
              ref.current = element;
            }
          }}
          {...props}
          rows={rows}
          className={className}
          disabled={disabled}
          readOnly={readOnly}
          maxLength={maxLength}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onMouseUp={onMouseUp}
          onMouseDown={onMouseDown}
        />
        {allowClear && !disabled && textAreaValue && (
          <span className={allowClearClass} onClick={onAllowClear}>
            {typeof allowClear === "boolean" ? "close" : allowClear.clearIcon}
          </span>
        )}
        <ErrorMessage status={status} message={message} className="text-xs text-danger-900" />
      </div>
    );
  }
);

export default Textarea;
