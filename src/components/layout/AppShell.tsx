import React from "react";
import PhoneFrame from "./PhoneFrame";

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex-1 w-full bg-[#F5F5F3] md:min-h-screen md:h-auto md:flex md:items-center md:justify-center md:py-8">
      <PhoneFrame>
        {children}
      </PhoneFrame>
    </div>
  );
}
