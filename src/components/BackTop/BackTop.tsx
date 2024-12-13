import Icon from "../Icon/Icon";
import React, { useEffect, useState } from "react";
import { BackTopProps } from "./BackTop.types";

const BackTop: React.FC<BackTopProps> = (props) => {
  const [visible, setVisible] = useState(props.visible);

  const ref = React.createRef<HTMLDivElement>();
  const getDefaultTarget = () => (ref.current && ref.current.ownerDocument ? ref.current.ownerDocument : window);

  useEffect(() => {
    const container = getDefaultTarget();
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [ref.current]);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > props.visibilityHeight!) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLDivElement>) => {
    const { onClick } = props;
    // TODO: slow by duration
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (typeof onClick === "function") {
      onClick(e);
    }
  };

  return (
    <div data-testid={"back-top"} ref={ref} onClick={scrollToTop} className={props.className ?? "fixed bottom-2 right-20px"}>
      {visible ? <BackTopChildren children={props.children} /> : null}
    </div>
  );
};

interface BackTopChildrenProps {
  children: React.ReactNode;
}

const BackTopChildren = ({ children }: BackTopChildrenProps): React.ReactElement => {
  const defaultClassNames = ["w-9", "h-9", "cursor-pointer", "rounded-full", "flex", "justify-center", "items-center"];
  return (
    <div data-testid={`back-top-${children ? "children" : "default-element"}`}>
      {children || (
        <div className={defaultClassNames.join(" ")} data-testid={"back-top-btn"} style={{ backgroundColor: "#d1d1d1" }}>
          <div className="font-w font-d">
            <Icon name="expand_less" size="text-3xl" />
          </div>
        </div>
      )}
    </div>
  );
};

BackTop.defaultProps = {
  visibilityHeight: 100,
};

export default BackTop;
