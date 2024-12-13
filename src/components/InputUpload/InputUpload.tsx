import Icon from "../Icon/Icon";
import { Spin } from "../Spin";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { InputUploadProps } from "./InputUpload.types";
import classNames from "classnames";
import detectClassNames from "../../utils/detectClassNames";

const browseLabel = (uploading?: boolean): JSX.Element => {
  if (uploading) {
    return <Spin />;
  }
  return <Icon name="attach_file" type="outlined" size="text-16px" />;
};

const InputUpload: React.FC<InputUploadProps> = ({ acceptType, disabled, fileName, isUploading, name, id, placeholderClassName, ...props }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [maxSize, setMaxSize] = useState<number>();
  const [hovered, setHovered] = useState(false);
  const className = classNames(
    [
      "flex text-sm pt-1 pb-4px pl-3 pr-3 outline-0",
      "rounded shadow-[0_0_0_1px_rgba(0,0,0,0.10)]",
      "focus-within:border-b-2 focus-within:border-b-primary-900 focus-within:pb-2px h-8 justify-between items-center",
    ],
    {
      "bg-white": !(disabled || isUploading),
      "bg-dark-10 text-dark-35": disabled || isUploading,
      "cursor-pointer": !disabled,
      "border-none ": !props.error,
      "border-b-2 border-b-danger-900 pb-2px": props.error,
    }
  );
  const bottomClassName = classNames(["flex text-[10px] pt-1"], {
    "justify-between": props.showDownload && (acceptType || props.maxSizeMessage),
    "float-right": !props.showDownload && (acceptType || props.maxSizeMessage || props.error),
  });
  const downloadingClassName = classNames(["flex text-[10px] text-[#3b67c9] hover:text-[#577ac5c9]"], {
    "opacity-50": props.isDownloading,
    "cursor-pointer": !props.isDownloading,
  });

  const inputAcceptType = useMemo(() => {
    return acceptType ? `/ ${acceptType.split(",").join(" / ")}` : null;
  }, [acceptType]);

  const placeholder = useMemo(() => {
    if (fileName) {
      return fileName;
    }
    if (props.placeholder) {
      return props.placeholder;
    }
  }, [fileName, props.placeholder]);

  const clearInput = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const onClick = (e: any) => {
    if (!disabled) {
      return;
    }
    e.preventDefault();
    if (disabled || isUploading) {
      return;
    }
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const getFileType = (filename: string): RegExpExecArray | null | undefined => {
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (acceptType && event.target.files instanceof FileList && event.target.files.length > 0) {
      const file = event.target.files[0];
      const types = getFileType(file.name);
      if (Array.isArray(types) && types.length > 0) {
        const type = `.${types[0]}`.toLowerCase();
        const accepts = acceptType.toLowerCase().split(",");
        if (accepts.includes(type)) {
          if (maxSize && maxSize > 0 && maxSize < file.size) {
            props.onError && props.onError({ message: "please_upload_file_size " + Math.round(maxSize / 1000000) });
            clearInput();
            return;
          }
          props.onChange && props.onChange(event);
        } else {
          props.onError && props.onError({ message: "file_type_not_supported" });
          clearInput();
          return;
        }
      }
    } else {
      props.onChange && props.onChange(event);
    }
    clearInput();
  };

  useEffect(() => {
    if (props.maxFileSizeNumber) {
      return setMaxSize(props.maxFileSizeNumber);
    }
  }, [props.maxSize, props.maxFileSizeNumber]);

  const handleMouseEnter = () => setHovered(true);

  const handleMouseLeave = () => setHovered(false);

  const showBrowseIcon = useMemo(() => {
    if (disabled || isUploading || !props.showDownload || !props.allowClear || (props.allowClear && !hovered)) return true;
    return false;
  }, [isUploading, hovered, props.allowClear, props.showDownload, disabled]);

  const showClearIcon = useMemo(() => {
    if (disabled || isUploading) return false;
    else if (props.allowClear && props.showDownload && hovered) return true;
    return false;
  }, [isUploading, hovered, props.allowClear, props.showDownload, disabled]);

  const DownloadButton = () => (
    <span onClick={props.onDownload} className={downloadingClassName} style={{ display: "flex", gap: 4 }}>
      <Icon name="cloud_download" type="outlined" size="text-[11px]" style={{ marginTop: 2 }}></Icon>
      {props.downloadLabel ?? "Download"}
      {props.isDownloading && <Spin size="small" />}
    </span>
  );

  return (
    <div style={props.style}>
      <div
        onClick={onClick}
        style={props.style}
        data-testid={props["data-testid"] ? `${props["data-testid"]}-input-upload` : "input-upload"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <label data-testid={props["data-testid"] ? `${props["data-testid"]}-label-upload` : "label-upload"} className={className}>
          <span className={detectClassNames("truncate max-w-[95%] text-[#9ca3af]", placeholderClassName)}>{placeholder}</span>
          {showBrowseIcon && <span className="pt-1">{browseLabel(isUploading)}</span>}
          {showClearIcon && (
            <Icon
              name="close"
              size="text-16px"
              onClick={(e) => {
                e.preventDefault();
                props.onClear && props.onClear(e);
              }}
            />
          )}
          <input type="file" className="hidden" name={name} accept={acceptType} ref={inputRef} onChange={onChange} />
        </label>
      </div>
      {(props.showDownload || props.acceptLabel || acceptType || props.maxSizeMessage || props.error) && (
        <div className={bottomClassName}>
          {props.showDownload && <>{props.customDownload ? props.customDownload : <DownloadButton />}</>}
          {(acceptType || props.maxSizeMessage || props.acceptLabel || props.error) && (
            <div className="flex-col">
              <div className="text-red-900 text-[10px] text-right">{props.error}</div>
              {props.acceptLabel
                ? props.acceptLabel
                : (props.maxSizeMessage || inputAcceptType) && (
                    <div className="text-[10px]" data-testid={props["data-testid"] + "-AcceptSize" || "AcceptSize"}>
                      ({props.maxSizeMessage}&nbsp;{inputAcceptType})
                    </div>
                  )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default InputUpload;
