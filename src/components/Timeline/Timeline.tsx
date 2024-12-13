import Spin from "../Spin/Spin";
import * as React from "react";
import { TimelineProps } from "./Timeline.types";
import TimelineItem from "./TimelineItem";
import { TimelineItemProps } from "./TimelineItem.types";
import { ReactElement } from "react";

interface TimelineType extends React.FC<TimelineProps> {
  Item: React.FC<TimelineItemProps>;
}

const Timeline: TimelineType = (props) => {
  const { pending = null, pendingDot, children, className, ...restProps } = props;

  const pendingNode = typeof pending === "boolean" ? null : pending;

  const pendingItem = pending ? (
    <TimelineItem data-testid="timeline-item-pending" pending={!!pending} dot={pendingDot || <Spin />}>
      {pendingNode}
    </TimelineItem>
  ) : null;

  const timeLineItems = React.Children.toArray(children);
  timeLineItems.push(pendingItem as any);

  const replaceElement = (element: React.ReactNode, replacement: React.ReactNode, props: any): React.ReactNode => {
    if (!React.isValidElement(element)) return replacement;

    return React.cloneElement(element, typeof props === "function" ? element.props || {} : props);
  };
  // Remove falsy items
  const truthyItems = timeLineItems.filter((item) => !!item) as ReactElement[];
  const itemsCount = React.Children.count(truthyItems);
  const lastCls = `timeline-item-last`;
  const items = React.Children.map(truthyItems, (ele: React.ReactElement<any>, idx) => {
    const lastItemClass = idx === itemsCount - 1 ? lastCls : "";

    return replaceElement(ele, ele, {
      className: `${ele.props.className} ${lastItemClass}`,
    });
  });

  return (
    <div {...restProps} className={className}>
      {items}
    </div>
  );
};

Timeline.Item = TimelineItem;

export default Timeline;
