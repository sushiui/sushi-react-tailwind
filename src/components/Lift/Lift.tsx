import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import detectClassNames from "../../utils/detectClassNames";
import { LiftProps } from "./Lift.types";

const Lift = React.forwardRef<HTMLDivElement, LiftProps>(
  ({ backgroundColor, labels = [], top, className, defaultValue, screenRatio, ...props }, ref) => {
    const [activeLift, setActiveLift] = useState<string>(labels[0]?.href || "");
    const selectedHref = useRef<string>("");

    useEffect(() => {
      window.addEventListener("scroll", handleScrollToElement);

      return () => {
        document.removeEventListener("scroll", handleScrollToElement);
      };
    }, []);

    const handleScrollToElement = () => {
      const areas = labels.map(({ href }) => {
        const position = document.getElementById(href)?.getBoundingClientRect();
        let area = 0;
        if (position) {
          if (position.top < window.innerHeight && position.bottom >= 0) {
            if (position.top > 0 && href === selectedHref.current) area = Number.MAX_SAFE_INTEGER;
            else if (position.top > 0) area = window.innerHeight - position.top;
            else if (position.top <= 0 && position.bottom >= window.innerHeight) area = window.innerHeight;
            else if (position.bottom < window.innerHeight) area = position.bottom;
          }
        }
        return area;
      });
      const maxArea = Math.max(...areas);
      areas.forEach((area, index) => {
        if (maxArea === area) {
          if (area === 0 && defaultValue) {
            const current = labels.find((l) => l.href === defaultValue);
            if (current) setActiveLift(current.href);
          } else {
            setActiveLift(labels[index].href);
          }
        }
      });
    };

    const onClick = (href: string) => () => {
      selectedHref.current = href;
      const element = document.getElementById(href);
      const y = (element?.getBoundingClientRect()?.top || 0) + window.pageYOffset - window.innerHeight * (screenRatio ?? 0.25);
      handleScrollToElement();
      if (element) window.scrollTo({ top: y, behavior: "smooth" });
    };

    const classString = classNames(["flex", "flex-wrap", "gap-2", "h-fit", "py-2", "sticky", "bg-light-95"]);

    return (
      <div
        className={detectClassNames(classString, className)}
        style={{ backgroundColor: backgroundColor, top: top ? `${top}px` : "0px" }}
        {...props}
      >
        {labels.map(({ href, title }) => (
          <div
            key={title}
            onClick={onClick(href)}
            className={`w-fit px-3 py-1 rounded-3xl cursor-pointer ${activeLift === href ? "bg-primary-900 font-bold" : "bg-dark-10"}`}
          >
            {title}
          </div>
        ))}
      </div>
    );
  }
);

export default Lift;
