import classNames from "classnames";
import { withTheme } from "../Theme";
import React, { useEffect, useRef, useState } from "react";
import { SiderProps, SiderCollapseType } from "./Sider.types";
import SiderTrigger from "./SiderTrigger";
import { SushiTailwindDefaultTheme } from "../Theme/SushiTailwindThemeProvider.types";

interface SiderInternalProps extends SiderProps {
  theme: SushiTailwindDefaultTheme;
}

const Sider = React.forwardRef<HTMLElement, SiderInternalProps>(
  (
    {
      children,
      className,
      collapsible,
      width: w,
      collapsedWidth,
      defaultCollapsed,
      collapsed: cc,
      onCollapse,
      trigger,
      breakpoint,
      onBreakpoint,
      theme,
      triggerClassName,
      ...props
    },
    forwardRef
  ) => {
    const mql = useRef<MediaQueryList | undefined>();
    const [collapsed, setCollapsed] = useState<boolean | undefined>(typeof cc === "boolean" ? cc : defaultCollapsed);

    const responsiveHandlerRef = React.useRef<(mql: boolean) => void>();
    responsiveHandlerRef.current = (mql: boolean) => {
      onBreakpoint && onBreakpoint(mql);

      if (collapsed !== mql) {
        onHandlerSetCollapsed(mql, "responsive");
      }
    };

    useEffect(() => {
      if (typeof cc === "boolean") {
        setCollapsed(cc);
      }
    }, [cc]);

    useEffect(() => {
      if (breakpoint && window.matchMedia) {
        const screen = theme.breakpoints[breakpoint];
        mql.current = window.matchMedia(`(min-width: ${screen})`);
        mql.current.addEventListener("change", calculateBreakpoint);
      }
      return () => {
        if (mql.current) {
          mql.current.removeEventListener("change", calculateBreakpoint);
        }
      };
    }, [breakpoint]);

    const calculateBreakpoint = (m: MediaQueryListEvent) => {
      responsiveHandlerRef.current && responsiveHandlerRef.current(!m.matches);
    };

    // const calculateBreakpoint = () => {
    //   const screenWidth = parseInt(theme.breakpoints[breakpoint!], 10);
    //   window.addEventListener("resize", () => {
    //     const innerWidth = window.innerWidth;
    //     const broken = innerWidth <= screenWidth;
    //     responsiveHandlerRef.current && responsiveHandlerRef.current(broken);
    //   });
    // };

    var width = w || "200px";
    if (collapsed === true) {
      width = collapsedWidth || "80px";
    }
    const widthStyle: React.CSSProperties = { width, flex: `0 0 ${width}`, maxWidth: width, minWidth: width };

    const onHandlerSetCollapsed = (value: boolean, type: SiderCollapseType) => {
      if (!(typeof cc === "boolean")) {
        setCollapsed(value);
      }
      onCollapse && onCollapse(value, type);
    };

    const onToggle = () => {
      onHandlerSetCollapsed(!collapsed, "clickTrigger");
    };
    const classString = classNames("sushi-sider-layout", "relative", ["transition-all", "duration-200", "ease-in"], className);
    const triggerComp = (
      <SiderTrigger
        width={width}
        onToggle={onToggle}
        className={triggerClassName}
        collapsedWidth={collapsedWidth}
        collapsed={collapsed}
        trigger={trigger}
      />
    );

    return (
      <aside data-testid={"sider"} ref={forwardRef} className={classString} style={{ ...widthStyle }} {...props}>
        <div className="sushi-layout-sider-children h-full overflow-auto">{children}</div>
        {collapsible && triggerComp}
      </aside>
    );
  }
);

Sider.displayName = "Sider";
export default withTheme(Sider);
