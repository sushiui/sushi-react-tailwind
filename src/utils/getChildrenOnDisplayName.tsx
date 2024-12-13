import React from "react";

const getChildrenOnDisplayName = (children: React.ReactNode, displayName: string): React.ReactNode[] | null | undefined => {
  return React.Children.map(children, (child) => {
    return (child as any).type && (child as any).type.displayName === displayName ? child : null;
  });
};

export default getChildrenOnDisplayName;
