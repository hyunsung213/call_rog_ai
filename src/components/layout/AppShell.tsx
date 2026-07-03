import React from "react";
import PhoneFrame from "./PhoneFrame";

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex-1 min-h-0 flex flex-col w-full bg-white md:bg-[#F5F5F3] md:min-h-screen md:h-auto md:flex md:items-center md:justify-center md:py-8">
      <PhoneFrame>
        {children}
      </PhoneFrame>
    </div>
  );
}
