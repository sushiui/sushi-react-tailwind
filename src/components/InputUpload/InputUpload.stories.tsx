import React from "react";
import { Story, Meta } from "@storybook/react";
import InputUpload from "./InputUpload";
import { InputUploadProps } from "./InputUpload.types";
const style = { width: "360px" };

export default {
  title: "Data Entry/InputUpload",
  component: InputUpload,
  argTypes: {},
} as Meta<typeof InputUpload>;

const Template: Story<InputUploadProps> = (args) => <InputUpload {...args} />;

export const Basic: Story<InputUploadProps> = Template.bind({});
Basic.args = {
  placeholder: "test.pdf",
  style: style,
  acceptType: ".pdf,.doc,.docx",
  onError: (e) => alert("Error:" + e.message),
  maxSizeMessage: "ขนาดไม่เกิน 1 MB",
  maxFileSizeNumber: 1000000,
  showDownload: true,
};

export const Disabled: Story<InputUploadProps> = Template.bind({});
Disabled.args = {
  placeholder: "Please Browse",
  style: style,
  acceptType: ".pdf,.doc,.docx",
  onError: (e) => alert("Error:" + e.message),
  maxSizeMessage: "ขนาดไม่เกิน 1 MB",
  maxFileSizeNumber: 1000000,
  disabled: true,
};

export const Error: Story<InputUploadProps> = Template.bind({});
Error.args = {
  placeholder: "Please Browse",
  style: style,
  acceptType: ".pdf,.doc,.docx",
  onError: (e) => alert("Error:" + e.message),
  maxSizeMessage: "ขนาดไม่เกิน 1 MB",
  maxFileSizeNumber: 1000000,
  error: <span className="text-[10px]">error occurred</span>,
};

export const CustomAccept: Story<InputUploadProps> = Template.bind({});
CustomAccept.args = {
  placeholder: "Please Browse",
  style: style,
  acceptType: ".pdf,.doc,.docx",
  maxFileSizeNumber: 1000000,
  acceptLabel: <div className="text-black text-xs">(ขนาดไม่เกิน 6 MB / .pdf / .jpg / .jpeg / .doc / .docx)</div>,
};

export const CustomPlaceholder: Story<InputUploadProps> = Template.bind({});
CustomPlaceholder.args = {
  placeholder: "CustomPlaceholder",
  style: style,
  placeholderClassName: "text-red-900",
  acceptType: ".pdf,.doc,.docx",
  maxSizeMessage: "ขนาดไม่เกิน 1 MB",
  maxFileSizeNumber: 1000000,
};

export const AllowClear: Story<InputUploadProps> = Template.bind({});
AllowClear.args = {
  placeholder: "test.pdf",
  style: style,
  acceptType: ".pdf,.doc,.docx",
  maxSizeMessage: "ขนาดไม่เกิน 1 MB",
  maxFileSizeNumber: 1000000,
  allowClear: true,
  onClear: (e) => console.log(e),
  showDownload: true,
};

export const CustomDownload: Story<InputUploadProps> = Template.bind({});
CustomDownload.args = {
  placeholder: "test.pdf",
  style: style,
  acceptType: ".pdf,.doc,.docx",
  maxSizeMessage: "ขนาดไม่เกิน 1 MB",
  maxFileSizeNumber: 1000000,
  showDownload: true,
  customDownload: (
    <a onClick={() => alert("Download success")} className="cursor-pointer text-[#3b67c9] hover:text-[#577ac5c9] text-[10px]">
      Download Here
    </a>
  ),
};
