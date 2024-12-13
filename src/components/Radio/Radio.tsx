import React from "react";
import { RadioProps } from "./Radio.types";
import classNames from "classnames";
import detectClassNames from "../../utils/detectClassNames";

const Radio = React.forwardRef<HTMLLabelElement, RadioProps>(({ children, disabled, checked, defaultChecked, inputRef, ...props }, ref) => {
  const radioClassNames = classNames(
    [
      "appearance-none",
      "h-16px w-16px mt-2px",
      "border rounded-full",
      "after:relative after:top-[4px] after:left-4px",
      "after:w-[6px] after:h-[6px] after:rounded-full after:bg-white",
    ],
    {
      "bg-dark-10 checked:!bg-dark-10": disabled,
      "shadow-none border-dark-10": disabled,
      "shadow-none border-primary-900": !disabled,
      "after:block": checked || defaultChecked,
    }
  );
  return (
    <label ref={ref} className="mr-4px inline-flex">
      <input
        {...props}
        ref={inputRef}
        type="radio"
        disabled={disabled}
        checked={checked}
        defaultChecked={defaultChecked}
        className={detectClassNames(radioClassNames, props.className)}
      />
      <span className="px-2">{children}</span>
    </label>
  );
});

export default Radio;
