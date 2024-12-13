import React from "react";
import StatusIcon from "./StatusIcon";
import { StatusIconSizeType, StatusIconType } from "./StatusIcon.types";

export const StatusIconExample = () => {
  const statusIconGenerate = ({
    label,
    desc,
    type,
    children,
    size,
  }: {
    label: string;
    desc: string;
    type?: StatusIconType;
    children?: React.ReactNode;
    size?: StatusIconSizeType;
  }) => {
    return (
      <div className="flex flex-row gap-4 items-center">
        <div className="w-25px h-25px flex items-center justify-center">
          <StatusIcon size="base" type={type} size={size}>
            {children}
          </StatusIcon>
        </div>
        <div className="flex flex-col">
          <span>{label}</span>
          <span className="text-xs text-gray-100">{desc}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="p-4 bg-gray-300">
      <div className="grid grid-cols-2 gap-3 p-5 bg-white">
        <div className="flex flex-col gap-3">
          {statusIconGenerate({ label: "Disable", desc: "ไม่สามารถเข้าไปทำได้" })}
          {statusIconGenerate({ label: "Wait for action", desc: "พร้อมทำ แต่ยังไม่เริ่มทำ", type: "wait-for-action" })}
          {statusIconGenerate({ label: "WIP (กำลังทำงาน)", desc: " Work In Process or Draft)", type: "work-in-progress" })}
          {statusIconGenerate({ label: "Remind", desc: "งานสำคัญควรทำด่วน", type: "remind" })}
          {statusIconGenerate({ label: "Complete", desc: "ทำเสร็จแล้ว", type: "complete" })}
          {statusIconGenerate({ label: "Cancel", desc: "ยกเลิกงานนี้", type: "cancel" })}
          {statusIconGenerate({ label: "Pending", desc: "หยุดไว้ชั่วคราว", type: "pending" })}
          {statusIconGenerate({ label: "Urgent", desc: "ถ้าไม่รีบทำจะเกิดอันตรายร้ายแรง", type: "urgent" })}
          {statusIconGenerate({
            label: "Wait for uncontrol",
            desc: "รอสิ่งที่อยู่นอกเหนือการควบคุมเช่น รอ กลต. ตอบกลับ",
            type: "wait-for-uncontrol",
          })}
          {statusIconGenerate({ label: "End", desc: " จุดจบของเส้น", type: "end", size: "xs" })}
          {statusIconGenerate({ label: "Need Urgent Action", desc: "ต้องทำอย่างเร่งด่วน ยิ่งกว่า Urgent", type: "need-urgent-action" })}
        </div>
        <div className="flex flex-col gap-3">
          {statusIconGenerate({ label: "Disable", desc: "ไม่สามารถเข้าไปทำได้", children: 1 })}
          {statusIconGenerate({ label: "Wait for action", desc: "พร้อมทำ แต่ยังไม่เริ่มทำ", type: "wait-for-action", children: 1 })}
          {statusIconGenerate({ label: "WIP (กำลังทำงาน)", desc: " Work In Process or Draft)", type: "work-in-progress", children: 1 })}
          {statusIconGenerate({ label: "Remind", desc: "งานสำคัญควรทำด่วน", type: "remind", children: 1 })}
          {statusIconGenerate({ label: "Complete", desc: "ทำเสร็จแล้ว", type: "complete", children: 1 })}
        </div>
      </div>
    </div>
  );
};
