import React from "react";

interface PhoneFrameProps {
  children: React.ReactNode;
}

export default function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="flex-1 min-h-0 flex flex-col w-full h-full md:flex-none md:w-[400px] md:h-[844px] md:rounded-[42px] md:p-[12px] md:bg-[#111111] md:shadow-[0_30px_80px_rgba(0,0,0,0.18)] transition-all">
      <div className="flex-1 min-h-0 flex flex-col w-full h-full md:rounded-[32px] md:overflow-hidden bg-background relative">
        {children}
      </div>
    </div>
  );
}
