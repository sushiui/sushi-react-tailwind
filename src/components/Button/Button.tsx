import React from "react";
import { ButtonProps, ButtonColorProps } from "./Button.types";
import Spin from "../Spin/Spin";
import classNames from "classnames";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, color, disabled, onClick, className, loading, icon, ...props }, ref) => {
  const btnClassNames = classNames(
    [
      "disabled:bg-dark-35",
      "disabled:opacity-35",
      "font-sarabun",
      "rounded",
      "inline-flex",
      "gap-2",
      "px-3",
      "py-1.5",
      "flex",
      "flex-row",
      "items-center",
    ],
    {
      "bg-gradient-to-b": !disabled,
      "from-primary-600 to-primary-800 hover:from-primary-900 hover:from-primary-900": color === "primary",
      "from-secondary-100 to-secondary-800 outline outline-1 outline-transparent hover:outline-primary-900": color === "secondary",
      "from-gray-100 to-gray-800 hover:from-gray-100 hover:from-gray-800 text-white": color === "gray",
      "from-green-100 to-green-800 hover:from-green-800 hover:from-green-800": color === "green",
    },
    className
  );
  return (
    <button
      {...props}
      data-testid={props["data-testid"] || "sushi-button"}
      ref={ref}
      className={btnClassNames}
      disabled={disabled || loading}
      onClick={onClick}
      style={{ lineHeight: "normal", minHeight: "32px", ...(props.style || {}) }}
    >
      <Prefix loading={loading} icon={icon} color={color} />
      {children}
    </button>
  );
});

interface PrefixProps {
  loading?: boolean;
  icon?: React.ReactNode;
  color?: ButtonColorProps;
}

const Prefix = ({ loading, icon, color }: PrefixProps): React.ReactElement | null => {
  if (loading) {
    const fillColor = color && ["primary", "green"].includes(color) ? "fill-dark-900" : undefined;
    return <Spin fillColor={fillColor} />;
  }
  if (icon) {
    return <>{icon}</>;
  }
  return null;
};

export default Button;
