import React from "react";
import { CardProps } from "./Card.types";
import Spin from "../Spin/Spin";
import classNames from "classnames";

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ children, title, bordered, padding, loading, rounded, className, ...props }, ref) => {
  let head: React.ReactNode;
  const dataTestId = props["data-testid"] || "sushi-card";
  const classArr = ["rounded-md", "bg-white", "flex", "flex-col", "font-sarabun", "shadow-sm"];
  if (padding) {
    classArr.push(padding);
  }
  if (title) {
    head = (
      <div className={"bg-white/[80] px-4 py-1 border-b border-solid border-b-black/[0.03] rounded-t-md"} data-testid={`${dataTestId}-header`}>
        {title && (
          <div className="font-bold min-h-30px inline-flex items-center w-full" data-testid={`${dataTestId}-title`}>
            {title}
          </div>
        )}
      </div>
    );
  }
  if (bordered) {
    classArr.push("border border-dark-0.06");
  }
  const classString = classNames(classArr, className);
  let body: React.ReactNode;
  if (loading) {
    body = (
      <div className="items-center bg-white flex flex-col font-sarabun p-4">
        <Spin />
      </div>
    );
  } else {
    if (children) {
      body = (
        <div className={rounded ? rounded : "p-4"} data-testid={`${dataTestId}-children`}>
          {children}
        </div>
      );
    }
  }
  return (
    <div ref={ref} className={classString} {...props} data-testid={dataTestId}>
      {head}
      {body}
    </div>
  );
});

Card.defaultProps = {};

Card.displayName = "Card";

export default Card;
