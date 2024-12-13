import Icon from "../Icon/Icon";
import React from "react";
import { ModalProps, FooterProps } from "./Modal.types";
import Button from "../Button/Button";
import classNames from "classnames";
import { isArray } from "lodash";
import getChildrenOnDisplayName from "../../utils/getChildrenOnDisplayName";
import detectClassNames from "../../utils/detectClassNames";

type FooterCompProps = {
  children?: React.ReactNode;
};

const FooterComp = ({ children }: FooterCompProps): JSX.Element => {
  return <>{children}</>;
};
FooterComp.displayName = "FooterComp";
interface ModalInterface extends React.ForwardRefExoticComponent<ModalProps> {
  Footer: typeof FooterComp;
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ visible, title, onOk, onCancel, children, closable = true, width: w = 520, className, ...props }, ref) => {
    const modalClassName = "z-9999 fixed left-0 top-0 w-full h-full overflow-auto bg-gray-900 animate-fade-in bg-opacity-40";
    const contentClass = "m-auto bg-white relative outline-0 rounded-md shadow my-20 animate-zoom-in";
    const headerClass = "flex justify-between items-start mx-4 py-2 rounded-t";
    const titleClass = "text-lg font-bold";
    const closeIconClass = "hover:text-gray-400 text-sm p-1.5 ml-auto inline-flex";
    const classString = detectClassNames(classNames(modalClassName, visible ? "" : "hidden"), className);
    const testId = props["data-testid"] || "sushi-modal";
    const width = typeof w === "number" ? `${w}px` : w;

    return (
      <div data-testid={testId} className={classString} ref={ref}>
        <div className={contentClass} style={{ width }}>
          <div className={headerClass}>
            <div data-testid={`${testId}-title`} className={titleClass}>
              {title}
            </div>
            {closable && (
              <button data-testid={`${testId}-close-button`} type="button" onClick={onCancel} className={closeIconClass}>
                <Icon name="close" />
              </button>
            )}
          </div>
          <div data-testid={`${testId}-children`} className="px-4 pb-4 pt-1">
            {children}
          </div>
          <Footer onCancel={onCancel} onOk={onOk} {...props} />
        </div>
      </div>
    );
  }
) as ModalInterface;

const Footer = ({ onCancel, onOk, disableOk, hideFooter, confirmLoading, cancelText, okText, footer, ...props }: FooterProps): JSX.Element | null => {
  const buttonWrapper = "flex justify-between px-4 pb-4 pt-2 border-t border-t-dark-6";
  if (hideFooter) return null;
  const testId = props["data-testid"] || "sushi-modal";

  const footerComp = getChildrenOnDisplayName(footer, "FooterComp");
  if (Array.isArray(footerComp) && footerComp.length > 0) {
    return <>{footerComp}</>;
  }

  return (
    <div className={buttonWrapper}>
      <Button color="secondary" onClick={onCancel} data-testid={`${testId}-cancel`}>
        {cancelText || "Decline"}
      </Button>
      <div className="w-full flex gap-2 flex-row-reverse mr-2">{footer && isArray(footer) ? footer.map((f) => f) : footer}</div>
      <Button color="primary" onClick={onOk} data-testid={`${testId}-ok`} disabled={disableOk} loading={confirmLoading}>
        {okText || "Accept"}
      </Button>
    </div>
  );
};

Modal.Footer = FooterComp;

export default Modal;
