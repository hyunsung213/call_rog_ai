import React from "react";

interface PhoneFrameProps {
  children: React.ReactNode;
}

export default function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="w-full h-full md:w-[400px] md:h-[844px] md:rounded-[42px] md:p-[12px] md:bg-[#111111] md:shadow-[0_30px_80px_rgba(0,0,0,0.18)] transition-all md:flex-shrink-0 flex items-center justify-center">
      <div className="w-full h-full md:rounded-[32px] overflow-hidden bg-background relative flex flex-col">
        {children}
      </div>
    </div>
  );
}
