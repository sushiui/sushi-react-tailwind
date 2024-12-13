import React from "react";
import { ErrorMessageProps } from "./ErrorMessage.types";

const ErrorMessage = ({ status, message, className }: ErrorMessageProps): React.ReactElement | null => {
  if (status === "error" || status === "warning" || status === "success") return <div className={className}>{message || ""}</div>;
  else return null;
};
export default ErrorMessage;
