import React, { ReactNode } from "react";
import { StatisticProps } from "./Statistic.types";
import padEnd from "lodash.padend";
import Spin from "../Spin/Spin";

const Statistic = React.forwardRef<HTMLDivElement, StatisticProps>(
  ({ formatter, decimalSeparator, groupSeparator, loading, prefix, precision, suffix, title, value, valueRender, valueStyle, ...props }, ref) => {
    let valueNode: ReactNode;

    if (typeof formatter === "function") {
      // Customize formatter
      valueNode = formatter(value);
    } else if (value !== undefined && value !== null) {
      // Internal formatter
      const val: string = String(value);
      const cells = val.match(/^(-?)(\d*)(\.(\d+))?$/);

      // Process if illegal number
      if (!cells || val === "-") {
        valueNode = val;
      } else {
        const negative = cells[1];
        let int = cells[2] || "0";
        let decimal = cells[4] || "";

        int = int.replace(/\B(?=(\d{3})+(?!\d))/g, groupSeparator || "");

        if (typeof precision === "number") {
          decimal = padEnd(decimal, precision, "0").slice(0, precision);
        }

        if (decimal) {
          decimal = `${decimalSeparator}${decimal}`;
        }

        valueNode = [
          <span key="int">
            {negative}
            {int}
          </span>,
          decimal && <span key="decimal">{decimal}</span>,
        ];
      }
    }

    return (
      <div ref={ref} className={title ? "w-fit" : ""} {...props}>
        {title && <div className="text-dark-35 text-xs">{title}</div>}
        <div className={loading ? "relative h-25px" : ""}>
          {loading ? (
            <Spin className={"absolute left-50% mt-2px -ml-10px"} />
          ) : (
            <div style={valueStyle} className="flex">
              {prefix && <span>{prefix}</span>}
              {valueRender ? valueRender(valueNode) : valueNode}
              {suffix && <span>{suffix}</span>}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Statistic.defaultProps = {
  decimalSeparator: ".",
  groupSeparator: ",",
  loading: false,
};

export default Statistic;
